/**
 * External dependencies
 */
import { forwardRef } from '@wordpress/element';

export const LoadingIcon = forwardRef<
	HTMLDivElement,
	React.HTMLAttributes<HTMLDivElement>
>((props, ref) => {
	return (
		<div className="pinot" ref={ref} {...props}>
			<div className="small-circles">
				<div className="small-circle"></div>
				<div className="small-circle"></div>
				<div className="small-circle"></div>
				<div className="small-circle"></div>
			</div>
			<div className="circle"></div>
		</div>
	);
});
LoadingIcon.displayName = 'LoadingIcon';
