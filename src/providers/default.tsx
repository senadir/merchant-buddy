import apiFetch from '@wordpress/api-fetch';
import { addQueryArgs } from '@wordpress/url';

import { Item, Provider } from './types';
const DefaultProvider: Provider = {
	id: 'default',
	async search(query: string, entity: string, signal?: AbortSignal) {
		const data = await apiFetch<{ [key: string]: Item[] }>({
			path: addQueryArgs(`/wc/merchant-buddy/default/search/${entity}`, {
				s: query,
			}),
			...(signal ? { signal } : {}),
		});
		return data[entity];
	},

	async searchAll(query: string, signal?: AbortSignal) {
		const data = await apiFetch<{ [key: string]: Item[] }>({
			path: addQueryArgs(`/wc/merchant-buddy/default/search/all`, {
				s: query,
			}),
			...(signal ? { signal } : {}),
		});
		return data;
	},
};

export default DefaultProvider;
