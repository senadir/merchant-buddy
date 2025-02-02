interface Item extends Record<string, unknown> {
	id: number;
}

interface Provider {
	id: string;
	search: (
		query: string,
		entity: string,
		signal?: AbortSignal
	) => Promise<Item[]>;
	searchAll: (
		query: string,
		signal?: AbortSignal
	) => Promise<Record<string, Item[]>>;
}

export type { Provider, Item };
