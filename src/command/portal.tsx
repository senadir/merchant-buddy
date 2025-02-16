import { createPortal } from '@wordpress/element';

export const Portal = ({
	children,
	target,
}: {
	children: React.ReactNode;
	target: string;
}) => {
	const element = document.querySelector(target);
	if (!element) {
		return null;
	}
	return createPortal(children, element);
};
