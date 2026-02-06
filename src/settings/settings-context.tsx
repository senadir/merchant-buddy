/**
 * External dependencies
 */
import type { UniqueIdentifier } from '@dnd-kit/core';
import apiFetch from '@wordpress/api-fetch';
import { dispatch } from '@wordpress/data';
import {
	createContext,
	useCallback,
	useContext,
	useState,
} from '@wordpress/element';
import { __ } from '@wordpress/i18n';
import fastDeepEqual from 'fast-deep-equal/es6';

/**
 * Internal dependencies
 */
import type { SortableEntity } from './types/entities';
import type { MainSettings, SettingsContextType } from './types/settings';
import {
	defaultReadyOnlySettings,
	defaultSettings,
	getInitialEntities,
	getInitialProviderSettings,
	getInitialSettings,
	providerSettingsSchema,
	readOnlySettings,
} from './utils';

const SettingsContext = createContext<SettingsContextType>({
	settings: defaultSettings,
	setSettingField: () => () => void null,
	readOnlySettings: defaultReadyOnlySettings,
	entities: [],
	providerSettingsSchema: {},
	providerSettings: {},
	setProviderSettingField: () => () => () => void null,
	toggleEntity: () => void null,
	updateEntities: () => void null,
	isSaving: false,
	save: () => void null,
	isDirty: false,
});

export const useSettingsContext = (): SettingsContextType => {
	return useContext(SettingsContext);
};

export const SettingsProvider = ({
	children,
}: {
	children: JSX.Element[] | JSX.Element;
}): JSX.Element => {
	const [isSaving, setIsSaving] = useState(false);
	const [isDirty, setIsDirty] = useState(false);
	const [entities, setEntities] =
		useState<SortableEntity[]>(getInitialEntities);
	const [settings, setSettings] = useState<MainSettings>(getInitialSettings);
	const [providerSettings, setProviderSettings] = useState<
		Record<string, Record<string, string | boolean>>
	>(getInitialProviderSettings);
	const setProviderSettingField = useCallback(
		(provider: string) =>
			(field: string) =>
			(newValue: string | boolean) => {
				setIsDirty(true);
				setProviderSettings((prevValue) => ({
					...prevValue,
					[provider]: { ...prevValue[provider], [field]: newValue },
				}));
			},
		[]
	);

	const setSettingField = useCallback(
		(field: keyof MainSettings) => (newValue: unknown) => {
			setIsDirty(true);
			setSettings((prevValue) => ({
				...prevValue,
				[field]: newValue,
			}));
		},
		[]
	);

	const toggleEntity = useCallback((rowId: UniqueIdentifier) => {
		setIsDirty(true);
		setEntities((previousEntities: SortableEntity[]) => {
			return previousEntities.map((entity) =>
				entity.id === rowId
					? { ...entity, enabled: !entity.enabled }
					: entity
			);
		});
	}, []);

	const updateEntities = useCallback((data: SortableEntity[]) => {
		setIsDirty(true);
		setEntities(data);
	}, []);

	const save = useCallback(() => {
		type SettingsData = {
			merchant_buddy_main_settings: {
				enabled: string;
				provider: string;
				shortcut: string;
			};
			merchant_buddy_enabled_entities: string[];
			[key: string]: unknown;
		};

		const data: SettingsData = {
			merchant_buddy_main_settings: {
				enabled: settings.enabled ? 'yes' : 'no',
				provider: settings.provider,
				shortcut: settings.shortcut,
			},
			merchant_buddy_enabled_entities: entities
				.filter((entity) => entity.enabled)
				.map((entity) => entity.key),
		};

		Object.entries(providerSettings).forEach(
			([providerKey, providerSetting]) => {
				const optionName =
					providerSettingsSchema[providerKey]?.option_name;
				if (optionName) {
					data[optionName] = Object.entries(providerSetting).reduce(
						(acc, [field, value]) => ({
							...acc,
							[field]:
								// eslint-disable-next-line no-nested-ternary
								typeof value === 'boolean'
									? value
										? 'yes'
										: 'no'
									: value,
						}),
						{}
					);
				}
			}
		);
		setIsSaving(true);
		setIsDirty(false);

		apiFetch<SettingsData>({
			path: '/wp/v2/settings',
			method: 'POST',
			data,
		})
			.then((response) => {
				setIsSaving(false);
				if (
					fastDeepEqual(
						response.merchant_buddy_main_settings,
						data.merchant_buddy_main_settings
					) &&
					fastDeepEqual(
						response.merchant_buddy_enabled_entities,
						data.merchant_buddy_enabled_entities
					)
				) {
					(
						dispatch('core/notices') as {
							createSuccessNotice: (message: string) => void;
						}
					).createSuccessNotice(
						__(
							'Merchant Buddy settings have been saved.',
							'merchant-buddy'
						)
					);
				}
			})
			.catch(() => {
				setIsSaving(false);
				setIsDirty(true);
				(
					dispatch('core/notices') as {
						createErrorNotice: (message: string) => void;
					}
				).createErrorNotice(
					__(
						'Failed to save Merchant Buddy settings.',
						'merchant-buddy'
					)
				);
			});
	}, [settings, entities, providerSettings]);
	const settingsData = {
		settings,
		setSettingField,
		readOnlySettings,
		entities,
		toggleEntity,
		updateEntities,
		providerSettingsSchema,
		providerSettings,
		setProviderSettingField,
		isSaving,
		save,
		isDirty,
	};

	return (
		<SettingsContext.Provider value={settingsData}>
			{children}
		</SettingsContext.Provider>
	);
};
