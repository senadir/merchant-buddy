import { useCommandState } from 'cmdk';
import { displayShortcutList } from '@wordpress/keycodes';
import { useLocation } from 'react-router-dom';
import { getPrimaryLinkLabel, getSecondaryLinkLabel } from './utils';
import { Entity, useSettings } from './settings-context';
import { __, sprintf } from '@wordpress/i18n';
export const useCurrentEntity = () => {
	const { entities } = useSettings();
	const pages = useLocation().pathname.split('/').filter(Boolean);
	const lastPage = pages.at(-1);
	if (!lastPage) {
		return null;
	}
	if (!Object.keys(entities).includes(lastPage)) {
		return null;
	}
	return entities[lastPage as keyof Entity];
};

export function CommandFooter() {
	const currentEntity = useCurrentEntity();
	const hasItems = useCommandState((state) => {
		return state.filtered.count > 0;
	});
	if (!currentEntity || !hasItems) {
		return null;
	}

	const primaryLinkLabel = getPrimaryLinkLabel(currentEntity);
	const secondaryLinkLabel = getSecondaryLinkLabel(currentEntity);
	return (
		<div className="command-footer">
			<span
				aria-label={sprintf(
					// translators: %1s: The shortcut label, %2$s the action name.
					__('Press %1$s to %2$s', 'merchant-buddy'),
					displayShortcutList.undefined('↵'),
					primaryLinkLabel
				)}
			>
				{primaryLinkLabel}{' '}
				{displayShortcutList.undefined('↵').map((key) => (
					<kbd key={key}>{key}</kbd>
				))}
			</span>
			{secondaryLinkLabel && (
				<>
					<hr />
					<span
						aria-label={sprintf(
							// translators: %1s: The shortcut label, %2s: The action name.
							__('Press %1$s to %2$s', 'merchant-buddy'),
							displayShortcutList.shift('↵'),
							secondaryLinkLabel
						)}
					>
						{secondaryLinkLabel}
						{displayShortcutList.shift('↵').map((key) => (
							<kbd key={key}>{key}</kbd>
						))}
					</span>
				</>
			)}
		</div>
	);
}
