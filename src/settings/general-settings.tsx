/**
 * External dependencies
 */
import { __, _x } from '@wordpress/i18n';
import {
	CheckboxControl,
	ExternalLink,
	SelectControl,
	Popover,
} from '@wordpress/components';
import { useEffect, createInterpolateElement } from '@wordpress/element';
import { useRecordHotkeys } from 'react-hotkeys-hook';
import styled from '@emotion/styled';
/**
 * Internal dependencies
 */
import { SettingsCard, SettingsSection } from './shared-components';
import { useSettingsContext } from './settings-context';

const ShortcutButton = styled.button`
	all: unset;
	cursor: pointer;
	display: inline;
`;

const StyledShortcut = styled.span<{ variant?: 'success' | 'idle' | 'error' }>`
	background-color: ${(props) => {
		switch (props.variant) {
			case 'success':
				return 'hsl(132 61% 95% / 1)';
			case 'error':
				return 'hsl(0 70% 95% / 1)';
			default:
				return 'hsl(0 1% 98% / 1)';
		}
	}};
	padding: 2px 4px;
	border-radius: 4px;
	border: 1px solid
		${(props) => {
			switch (props.variant) {
				case 'idle':
					return 'hsl(0 0% 85% / 1)';
				default:
					return 'transparent';
			}
		}};

	margin-inline-end: 4px;
	text-transform: capitalize;
	display: inline-block;
	&:last-child {
		margin-inline-end: 0;
	}
`;

const ShortcutTooltip = styled.span<{ variant?: 'success' | 'idle' | 'error' }>`
	display: flex;
	width: max-content;
	padding: 12px 12px;
	color: ${(props) => {
		switch (props.variant) {
			case 'error':
				return 'hsl(0 70% 55%)';
			default:
				return 'inherit';
		}
	}};

	flex-direction: column;
	align-items: center;
	gap: 8px;
`;
const shortcutValidity = (
	keys: Set<string>
): { valid: boolean; complete: boolean } => {
	const modifiers = ['alt', 'ctrl', 'meta', 'shift'];
	const keyArray = Array.from(keys);
	const hasModifier = keyArray.some((key) =>
		modifiers.includes(key.toLowerCase())
	);
	const nonModifierKeys = keyArray.filter(
		(key) => !modifiers.includes(key.toLowerCase())
	);

	const complete = hasModifier && nonModifierKeys.length > 0;
	const valid =
		complete ||
		(hasModifier && nonModifierKeys.length === 0) ||
		keyArray.length === 0;

	return {
		valid,
		complete,
	};
};

const transformedShortcut = (keys: string[]): string[] =>
	keys.map((key) =>
		key
			.replace('meta', navigator.platform.includes('Mac') ? '⌘' : '⊞')
			.replace(
				'alt',
				navigator.platform.includes('Mac') ? '⌥' : 'Alt'
			)
			.replace('shift', '⇧')
			.replace(
				'ctrl',
				navigator.platform.includes('Mac') ? '⌃' : 'Ctrl'
			)
	);

const ShortcutDisplay = ({
	shortcut,
	setShortcut,
}: {
	shortcut: string;
	setShortcut: (value: string) => void;
}) => {
	const [recordedKeys, { start, stop, isRecording, resetKeys }] =
		useRecordHotkeys();

	const toggleRecording = () => {
		if (isRecording) {
			stop();
		} else {
			start();
		}
	};

	useEffect(() => {
		if (!isRecording) {
			return;
		}

		let timeoutId: NodeJS.Timeout;
		const { complete } = shortcutValidity(recordedKeys);
		const handleKeyUp = () => {
			clearTimeout(timeoutId);

			timeoutId = setTimeout(() => {
				if (complete) {
					setShortcut(Array.from(recordedKeys).join('+'));
					stop();
				} else {
					resetKeys();
				}
			}, 1000);
		};

		document.addEventListener('keyup', handleKeyUp);
		return () => {
			document.removeEventListener('keyup', handleKeyUp);
			clearTimeout(timeoutId);
		};
	}, [isRecording, recordedKeys, setShortcut, stop, resetKeys]);

	if (!shortcut) {
		return '';
	}

	const validityStatus = shortcutValidity(recordedKeys);
	return (
		<ShortcutButton type="button" onClick={toggleRecording}>
			{isRecording && (
				<Popover
					onClose={() => stop()}
					focusOnMount={true}
					onFocusOutside={() => stop()}
					placement="top"
					offset={11}
					noArrow={false}
				>
					<ShortcutTooltip
						variant={
							validityStatus.complete
								? 'success'
								: validityStatus.valid
									? 'idle'
									: 'error'
						}
					>
						{recordedKeys.size > 0 ? (
							<>
								<span>
									{transformedShortcut(
										Array.from(recordedKeys)
									).map((key) => (
										<StyledShortcut
											key={key}
											variant={
												validityStatus.complete
													? 'success'
													: validityStatus.valid
														? 'idle'
														: 'error'
											}
										>
											{key}
										</StyledShortcut>
									))}
								</span>
								{!validityStatus.valid &&
									__(
										'Please include at least one modifier key',
										'merchant-buddy'
									)}
								{validityStatus.complete &&
									__(
										'Your new shortcut is set!',
										'merchant-buddy'
									)}
							</>
						) : (
							__('Recording…', 'merchant-buddy')
						)}
					</ShortcutTooltip>
				</Popover>
			)}
			{transformedShortcut(shortcut.split('+')).map((key) => (
				<StyledShortcut key={key} variant="idle">
					{key}
				</StyledShortcut>
			))}
		</ShortcutButton>
	);
};

const GeneralSettingsDescription = () => (
	<>
		<h2>{_x('General', 'Admin settings', 'merchant-buddy')}</h2>
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
									'When enabled, the command palette will open when you press <shortcut />. Click on the shortcut to modify it.',
									'merchant-buddy'
								),
								{
									shortcut: (
										<ShortcutDisplay
											shortcut={settings.shortcut}
											setShortcut={setSettingField(
												'shortcut'
											)}
										/>
									),
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
