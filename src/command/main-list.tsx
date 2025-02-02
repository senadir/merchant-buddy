import { Command } from 'cmdk';
import { useNavigate } from 'react-router-dom';
import { useSettings } from './settings-context';
import { __ } from '@wordpress/i18n';

const NavigatableItem = ({
	to,
	children,
}: {
	to: string;
	children: React.ReactNode;
}) => {
	const navigate = useNavigate();
	return (
		<Command.Item onSelect={() => navigate(to)}>{children}</Command.Item>
	);
};

const MainList = () => {
	const { entities } = useSettings();
	return (
		<>
			<Command.Empty>
				{__('No results found.', 'merchant-buddy')}
			</Command.Empty>
			<Command.Group heading={__('Entities', 'merchant-buddy')}>
				{Object.entries(entities).map(([key, entity]) => (
					<NavigatableItem to={`/${key}`} key={key}>
						{entity.label}
					</NavigatableItem>
				))}
			</Command.Group>
		</>
	);
};

export default MainList;
