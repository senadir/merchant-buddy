/**
 * Internal dependencies
 */
import type { SortableEntity } from './types/entities';
import type { MainSettings } from './types/settings';
import type { Provider } from './types/provider';
export const defaultSettings = {
	enabled: true,
	provider: 'default',
	shortcut: 'meta+h',
};

export const defaultReadyOnlySettings = {
	available_entities: [
		{ key: 'orders', name: 'Orders' },
		{ key: 'products', name: 'Products' },
		{ key: 'customers', name: 'Customers' },
	],
	available_providers: [
		{ key: 'default', name: 'Default' },
		{ key: 'algolia', name: 'Algolia' },
	],
};
declare global {
	const hydratedScreenSettings: {
		enabled: boolean;
		provider: string;
		shortcut: string;
		entities: string[];
		readonlySettings: typeof defaultReadyOnlySettings;
		providerSettingsSchema: Record<string, Provider>;
		providerSettings: Record<string, Record<string, string | boolean>>;
	};
}

export const getInitialSettings = (): MainSettings => {
	const settings = hydratedScreenSettings;

	return {
		enabled:
			typeof settings?.enabled === 'boolean'
				? settings.enabled
				: defaultSettings.enabled,
		provider: settings?.provider || defaultSettings.provider,
		shortcut: settings?.shortcut || defaultSettings.shortcut,
	};
};

export const getInitialEntities = (): SortableEntity[] => {
	const entities = hydratedScreenSettings.readonlySettings.available_entities;
	return entities.map((entity) => ({
		...entity,
		id: entity.key,
		enabled: hydratedScreenSettings.entities.includes(entity.key),
	}));
};

export const getInitialProviderSettings = (): Record<
	string,
	Record<string, string | boolean>
> => {
	return hydratedScreenSettings.providerSettings || {};
};

export const readOnlySettings =
	hydratedScreenSettings.readonlySettings || defaultReadyOnlySettings;

export const providerSettingsSchema =
	hydratedScreenSettings.providerSettingsSchema || {};
