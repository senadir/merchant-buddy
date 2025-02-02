import { Command, useCommandState } from 'cmdk';
import { useState, useEffect } from '@wordpress/element';
import { sprintf, __ } from '@wordpress/i18n';
import './styles.scss';
import {
	Outlet,
	useLocation,
	useSearchParams,
	useNavigate,
} from 'react-router-dom';
import { CommandFooter, useCurrentEntity } from './footer';
const CommandPalette = () => {
	const [open, setOpen] = useState(false);
	useEffect(() => {
		const down = (e: KeyboardEvent) => {
			if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
				e.preventDefault();
				setOpen((_open: boolean) => !_open);
			}
		};

		document.addEventListener('keydown', down);
		return () => document.removeEventListener('keydown', down);
	}, []);

	const navigate = useNavigate();
	// get current navigation stack from react router
	const pages = useLocation().pathname.split('/').filter(Boolean);
	const currentEntity = useCurrentEntity();

	const placeholder = pages.at(-1)
		? // translators: %s is the last page in the navigation stack
			sprintf(__('Search %s…', 'merchant-buddy'), pages.at(-1))
		: __('Select an entity to search', 'merchant-buddy');

	// Sync up searchValue with route query params
	const [searchParams, setSearchParams] = useSearchParams();
	const searchValue = searchParams.get('search') || '';
	const setSearchValue = (value: string) =>
		setSearchParams({ search: value }, { replace: true });

	return (
		<Command.Dialog
			loop
			open={open}
			onOpenChange={setOpen}
			label={__('Global Command Menu', 'merchant-buddy')}
			shouldFilter={!currentEntity}
			onKeyDown={(e) => {
				if (
					pages.length !== 0 &&
					searchValue.length === 0 &&
					e.key === 'Backspace'
				) {
					navigate(-2);
				}
			}}
		>
			<div>
				{pages.map((p) => (
					<div key={p} cmdk-vercel-badge="">
						{' '}
						{/* @todo refactor this to tailwind */}
						{
							p.charAt(0).toUpperCase() +
								p
									.slice(1)
									.toLowerCase() /* TODO: use labels from the entities object */
						}
					</div>
				))}
			</div>
			<CommandInput
				placeholder={placeholder}
				searchValue={searchValue}
				setSearchValue={setSearchValue}
			/>
			<Command.List>
				<Outlet />
			</Command.List>
			<CommandFooter />
		</Command.Dialog>
	);
};

const CommandInput = ({
	placeholder,
	searchValue,
	setSearchValue,
}: {
	placeholder: string;
	searchValue: string;
	setSearchValue: (value: string) => void;
}) => {
	// Collapsed view is when we don't have any items to show.
	const collapsedView = useCommandState(
		(state) => state.filtered.count === 0
	);
	return (
		<div
			className={`search-buddy-input-wrapper ${collapsedView ? 'has-collapsed-input' : ''}`}
		>
			<Command.Input
				// eslint-disable-next-line jsx-a11y/no-autofocus
				autoFocus
				value={searchValue}
				onValueChange={setSearchValue}
				placeholder={placeholder}
			/>
			<div className="search-buddy-input-portal"></div>
		</div>
	);
};
export default CommandPalette;
