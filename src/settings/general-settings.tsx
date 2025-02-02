/**
 * External dependencies
 */
import { __, _x } from '@wordpress/i18n';
import {
	CheckboxControl,
	ExternalLink,
	SelectControl,
} from '@wordpress/components';

/**
 * Internal dependencies
 */
import { SettingsCard, SettingsSection } from './shared-components';
import { useSettingsContext } from './settings-context';
import { createInterpolateElement } from '@wordpress/element';

const GeneralSettingsDescription = () => (
	<>
		<h2>{_x('General', 'Admin settings', 'woocommerce')}</h2>
		<p>
			{__(
				'Enable or disable the command palette on your store, and define the search provider to use. To add new providers, follow the instructions in the docs.',
				'merchant-buddy'
			)}
		</p>
		<ExternalLink href="https://github.com/senadir/merchant-buddy/">
			{__('Add new providers', 'merchant-buddy')}
		</ExternalLink>
	</>
);

const GeneralSettings = () => {
	const { settings, setSettingField, readOnlySettings } =
		useSettingsContext();

	return (
		<SettingsSection Description={GeneralSettingsDescription}>
			<SettingsCard>
				<CheckboxControl
					checked={settings.enabled}
					name="command_palette_enabled"
					onChange={setSettingField('enabled')}
					label={__('Enable command palette', 'merchant-buddy')}
					help={
						<span>
							{createInterpolateElement(
								__(
									'When enabled, the command palette will open when you press <kbd>Cmd+K</kbd>.',
									'merchant-buddy'
								),
								{
									kbd: <kbd>Cmd+K</kbd>,
								}
							)}
						</span>
					}
					__nextHasNoMarginBottom={true}
				/>
				<SelectControl
					label={__('Provider', 'merchant-buddy')}
					name="search_provider"
					help={__(
						'Search provider for the command palette.',
						'merchant-buddy'
					)}
					options={readOnlySettings.available_providers.map(
						(provider) => ({
							label: provider.name,
							value: provider.key,
						})
					)}
					value={settings.provider}
					onChange={setSettingField('provider')}
					disabled={false}
					__nextHasNoMarginBottom={true}
				/>
			</SettingsCard>
		</SettingsSection>
	);
};

export default GeneralSettings;
