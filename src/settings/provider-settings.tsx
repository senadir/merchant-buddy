/**
 * External dependencies
 */
import { __, sprintf } from '@wordpress/i18n';
import {
	CheckboxControl,
	ExternalLink,
	SelectControl,
	TextControl,
} from '@wordpress/components';
import { useEffect, useRef } from '@wordpress/element';

/**
 * Internal dependencies
 */
import { SettingsCard, SettingsSection } from './shared-components';
import { useSettingsContext } from './settings-context';
import { Field, Provider } from './types/provider';

const ProviderSettingsDescription = ({ provider }: { provider: Provider }) => (
	<>
		<h2>{provider.title}</h2>
		{typeof provider.description === 'string' && (
			<p>{provider.description}</p>
		)}
		{typeof provider.description === 'object' && (
			<>
				<p>{provider.description.description}</p>
				{provider.description.link && (
					<ExternalLink href={provider.description.link.url}>
						{provider.description.link.text}
					</ExternalLink>
				)}
			</>
		)}
	</>
);

const TextField = ({
	field,
	value,
	onChange,
	type,
	required = false,
}: {
	field: Field;
	value: string;
	type: 'text' | 'number' | 'password';
	onChange: (value: string) => void;
	required?: boolean;
}) => {
	const inputRef = useRef<HTMLInputElement>(null);
	useEffect(() => {
		if (!required) {
			inputRef.current?.setCustomValidity('');
		}
	}, [required]);
	return (
		<TextControl
			label={field.title}
			name={field.name}
			help={field.description}
			value={value}
			ref={inputRef}
			onChange={onChange}
			disabled={false}
			type={type}
			autoComplete="off"
			required={required}
			__nextHasNoMarginBottom={true}
			onInvalid={(event: React.InvalidEvent<HTMLInputElement>) => {
				event.target.setCustomValidity(
					// translators: %s is the field title.
					sprintf(__('%s is required', 'merchant-buddy'), field.title)
				);
			}}
			onInput={(event: React.ChangeEvent<HTMLInputElement>) => {
				event.target.setCustomValidity('');
			}}
		/>
	);
};

const CheckboxField = ({
	field,
	value,
	onChange,
	required = false,
}: {
	field: Field;
	value: boolean;
	onChange: (value: boolean) => void;
	required?: boolean;
}) => {
	return (
		<CheckboxControl
			checked={value}
			name={field.name}
			onChange={onChange}
			label={field.title}
			help={field.description}
			required={required}
			__nextHasNoMarginBottom={true}
		/>
	);
};

const SelectField = ({
	field,
	value,
	onChange,
	required = false,
}: {
	field: Field;
	value: string;
	onChange: (value: string) => void;
	required?: boolean;
}) => {
	return (
		<SelectControl
			label={field.title}
			name={field.name}
			help={field.description}
			options={field.options}
			value={value}
			onChange={onChange}
			disabled={false}
			__nextHasNoMarginBottom={true}
			required={required}
		/>
	);
};

const ProviderSection = ({
	providerKey,
	provider,
}: {
	providerKey: string;
	provider: Provider;
}) => {
	const {
		settings: mainSettings,
		providerSettings,
		setProviderSettingField,
	} = useSettingsContext();

	const settings = providerSettings[providerKey] || {};
	const setSettingField = setProviderSettingField(providerKey);
	const fieldsRequired = providerKey === mainSettings.provider;
	return (
		<SettingsSection
			Description={() => (
				<ProviderSettingsDescription provider={provider} />
			)}
		>
			<SettingsCard>
				{provider.fields.map((field) => {
					switch (field.type) {
						case 'text':
						case 'number':
						case 'password':
							return (
								<TextField
									key={field.name}
									field={field}
									type={field.type}
									value={settings[field.name] as string}
									onChange={setSettingField(field.name)}
									required={fieldsRequired}
								/>
							);
						case 'checkbox':
							return (
								<CheckboxField
									key={field.name}
									field={field}
									value={settings[field.name] as boolean}
									onChange={setSettingField(field.name)}
									required={fieldsRequired}
								/>
							);
						case 'select':
							return (
								<SelectField
									key={field.name}
									field={field}
									value={settings[field.name] as string}
									onChange={setSettingField(field.name)}
									required={fieldsRequired}
								/>
							);
						default:
							return null;
					}
				})}
			</SettingsCard>
		</SettingsSection>
	);
};

const ProviderSettings = () => {
	const { providerSettingsSchema } = useSettingsContext();
	return (
		<>
			{Object.entries(providerSettingsSchema).map(
				([providerKey, provider]) => (
					<ProviderSection
						key={providerKey}
						providerKey={providerKey}
						provider={provider}
					/>
				)
			)}
		</>
	);
};

export default ProviderSettings;
