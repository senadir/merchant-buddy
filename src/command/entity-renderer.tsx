import { useMemo } from '@wordpress/element';
import { Entity } from './settings-context';
import { layouts } from './layouts';

const camelCase = (str: string): string =>
	str.replace(/_([a-z])/g, (_, c) => c.toUpperCase());

const getItemValue = (item: Record<string, unknown>, key: string): unknown => {
	if (key.startsWith('icon:')) {
		return key;
	}

	// Skip actions.
	if (key.includes('_action')) {
		return null;
	}

	if (key.includes('.')) {
		return key
			.split('.')
			.reduce(
				(obj: Record<string, unknown> | undefined, k: string) =>
					obj && typeof obj === 'object'
						? (obj[k] as Record<string, unknown>)
						: undefined,
				item as Record<string, unknown> | undefined
			);
	}
	// Check if item has key or return null
	if (item[key] === undefined) {
		return null;
	}
	return item[key];
};

const bindingToValue = (
	binding: string | string[] | { label: string; url: string },
	item: Record<string, unknown>
): unknown => {
	if (typeof binding === 'string') {
		return getItemValue(item, binding);
	}
	if (Array.isArray(binding)) {
		return binding.map((b) => bindingToValue(b, item)).filter(Boolean);
	}
	return binding;
};

export const EntityRenderer = ({
	entity,
	item,
}: {
	entity: Entity;
	item: Record<string, unknown>;
}) => {
	const template = entity.template as keyof typeof layouts;
	const bindings = entity.bindings;
	const Layout = layouts[template];

	const props = useMemo(
		() =>
			Object.fromEntries(
				Object.entries(bindings).map(([key, binding]) => [
					camelCase(key),
					bindingToValue(binding, item),
				])
			),
		[bindings, item]
	);

	// eslint-disable-next-line @typescript-eslint/no-explicit-any -- Layout props vary by template
	return <Layout {...(props as any)} />;
};
