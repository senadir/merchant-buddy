/**
 * External dependencies
 */
import { forwardRef } from '@wordpress/element';

export const LoadingIcon = forwardRef((props: any, ref: any) => {
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
