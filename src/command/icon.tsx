import { Component, lazy, Suspense } from '@wordpress/element';
import Icon from '@wordpress/icons/build/icon/index.js';
import help from '@wordpress/icons/build/library/help.js';
import type { ErrorInfo, ReactNode } from 'react';
import { SVG, Path } from '@wordpress/primitives';
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

const IconLoader = ({ value }: { value: string }) => {
	const LoadedIcon = lazy(() =>
		import(
			/* webpackChunkName: "wp-icons/[request]" */
			/* webpackInclude: /\.js$/ */
			/* webpackExclude: /\.map$/ */
			`@wordpress/icons/build/library/${value}`
		).then((module) => {
			return {
				default: () => <Icon icon={module.default} size={20} />,
			};
		})
	);

	return (
		<Suspense fallback={<Icon icon={spinner} size={20} />}>
			<LoadedIcon />
		</Suspense>
	);
};

export function IconElement({ value }: { value: string }) {
	return (
		<IconErrorBoundary>
			<IconLoader value={value} />
		</IconErrorBoundary>
	);
}
