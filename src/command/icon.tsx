import { Component, type ErrorInfo, type ReactNode } from '@wordpress/element';
import {
	help,
	inbox,
	archive,
	check,
	close,
	cog,
	download,
	edit,
	external,
	info,
	plus,
	search,
	trash,
	warning,
	settings,
	page,
	image,
	link,
	update,
	chevronDown,
	chevronUp,
	chevronLeft,
	chevronRight,
	Icon,
} from '@wordpress/icons';
import { SVG, Path } from '@wordpress/primitives';

// Define a spinner icon
const spinner = (
	<SVG
		width="24"
		height="24"
		fill="none"
		viewBox="0 0 24 24"
		strokeWidth="1.5"
		stroke="currentColor"
		strokeLinecap="round"
		strokeLinejoin="round"
		xmlns="http://www.w3.org/2000/svg"
	>
		<Path d="M12 3v3m6.366-.366-2.12 2.12M21 12h-3m.366 6.366-2.12-2.12M12 21v-3m-6.366.366 2.12-2.12M3 12h3m-.366-6.366 2.12 2.12" />
	</SVG>
);

// Map of icon names to their imported modules
const iconMap: Record<string, JSX.Element> = {
	help,
	inbox,
	archive,
	check,
	close,
	cog,
	download,
	edit,
	external,
	info,
	plus,
	search,
	spinner,
	trash,
	warning,
	settings,
	page,
	image,
	link,
	update,
	chevronDown,
	chevronUp,
	chevronLeft,
	chevronRight,
};

class IconErrorBoundary extends Component<
	{ children: ReactNode },
	{ hasError: boolean }
> {
	constructor(props: { children: ReactNode }) {
		super(props);
		this.state = { hasError: false };
	}

	static getDerivedStateFromError() {
		return { hasError: true };
	}

	componentDidCatch(error: Error, errorInfo: ErrorInfo) {
		// eslint-disable-next-line no-console
		console.error('Icon loading failed:', error, errorInfo);
	}

	render() {
		if (this.state.hasError) {
			return <Icon icon={help} size={20} />;
		}

		return this.props.children;
	}
}

export function IconElement({ value }: { value: string }) {
	// If the icon doesn't exist in our map, use the help icon as fallback
	const iconToUse = iconMap[value] || help;

	return (
		<IconErrorBoundary>
			<Icon icon={iconToUse} size={20} />
		</IconErrorBoundary>
	);
}
