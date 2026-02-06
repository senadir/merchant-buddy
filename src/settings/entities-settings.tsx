/**
 * External dependencies
 */
import { __ } from '@wordpress/i18n';
import { ToggleControl, ExternalLink } from '@wordpress/components';
import styled from '@emotion/styled';
import { Fragment, useMemo } from '@wordpress/element';

/**
 * Internal dependencies
 */
import {
	SettingsSection,
	SortableTable,
	SortableData,
} from './shared-components';
import { isBoolean } from './types/boolean';
import { SortableEntity } from './types/entities';
import { useSettingsContext } from './settings-context';

const EntitiesSettingsDescription = () => (
	<>
		<h2>{__('Searchable entities', 'merchant-buddy')}</h2>
		<p>
			{__(
				'Enable and sort which entities are searchable in the command palette. You can introduce new entities by following the instructions in the documentation.',
				'merchant-buddy'
			)}
		</p>
		<ExternalLink href="https://github.com/senadir/merchant-buddy/">
			{__('Add new entities', 'merchant-buddy')}
		</ExternalLink>
	</>
);

const StyledEntityKey = styled.code`
	color: #757575;
	font-style: normal;
	display: inline;
	margin-left: 12px;
`;

const EntitySettings = () => {
	const { entities, updateEntities, toggleEntity } = useSettingsContext();

	const tableColumns = useMemo(
		() => [
			{
				name: 'name',
				label: __('Entity', 'merchant-buddy'),
				renderCallback: (row: SortableData): JSX.Element => (
					<Fragment>
						{String(row.name)}
						<StyledEntityKey>{String(row.id)}</StyledEntityKey>
					</Fragment>
				),
			},
			{
				name: 'enabled',
				label: __('Enabled', 'merchant-buddy'),
				align: 'right',
				renderCallback: (row: SortableData): JSX.Element => (
					<ToggleControl
						label=""
						checked={
							isBoolean(row.enabled) ? row.enabled : false
						}
						onChange={() => toggleEntity(row.id)}
						__nextHasNoMarginBottom={true}
					/>
				),
			},
		],
		[toggleEntity]
	);

	return (
		<SettingsSection Description={EntitiesSettingsDescription}>
			<SortableTable
				className="entities"
				columns={tableColumns}
				data={entities}
				setData={(newData) => {
					updateEntities(newData as SortableEntity[]);
				}}
				placeholder={__(
					'When you add an entity, it will appear here.',
					'merchant-buddy'
				)}
			/>
		</SettingsSection>
	);
};

export default EntitySettings;
