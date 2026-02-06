import { createPortal, useRef } from '@wordpress/element';

export const Portal = ({
	children,
	target,
}: {
	children: React.ReactNode;
	target: string;
}) => {
	const elementRef = useRef<Element | null>(null);
	if (!elementRef.current) {
		elementRef.current = document.querySelector(target);
	}
	if (!elementRef.current) {
		return null;
	}
	return createPortal(children, elementRef.current);
};
