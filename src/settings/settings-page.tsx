/**
 * External dependencies
 */
import styled from '@emotion/styled';

/**
 * Internal dependencies
 */
import GeneralSettings from './general-settings';
import EntitySettings from './entities-settings';
import ProviderSettings from './provider-settings';
import SaveSettings from './save';
import { SettingsProvider } from './settings-context';

const SettingsWrapper = styled.form`
	margin: 48px auto 0;
	max-width: 1032px;
	display: flex;
	flex-flow: column;

	@media (min-width: 960px) {
		padding: 0 56px;
	}
`;

const SettingsPage = () => {
	return (
		<SettingsWrapper id="merchant-buddy-settings">
			<SettingsProvider>
				<GeneralSettings />
				<EntitySettings />
				<ProviderSettings />
				<SaveSettings />
			</SettingsProvider>
		</SettingsWrapper>
	);
};

export default SettingsPage;
