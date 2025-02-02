export type Provider = {
	title: string;
	description:
		| string
		| { description: string; link: { text: string; url: string } };
	option_name: string;
	fields: Field[];
};

export type Field = {
	title: string;
	type: 'text' | 'checkbox' | 'password' | 'number' | 'select';
	name: string;
	description: string;
	options: SelectOptions<Field['type']>;
};

type SelectOptions<T> = T extends 'select'
	? { label: string; value: string }[]
	: never;
