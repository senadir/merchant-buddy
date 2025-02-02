/**
 * External dependencies
 */
import { createRoot } from '@wordpress/element';

/**
 * Internal dependencies
 */
import SettingsPage from './settings/settings-page';

const settingsContainer = document.getElementById(
	'merchant-buddy-settings-container'
);

if (settingsContainer) {
	const root = createRoot(settingsContainer);
	root.render(<SettingsPage />);
}
