import { searchClient, type SearchClient } from '@algolia/client-search';
import { Provider, Item } from './types';

let client: SearchClient | null = null;

function getClient(): SearchClient {
	if (!client) {
		const algoliaAppId =
			window.searchBuddy?.provider?.application_id || '';
		const algoliaSearchKey =
			window.searchBuddy?.provider?.search_api_key || '';
		client = searchClient(algoliaAppId, algoliaSearchKey);
	}
	return client;
}

function parseFacetQuery(query: string) {
	const facetMatches = query.match(/[+][^\s]+/g);
	const facetFilters: string[] = facetMatches || [];
	const cleanQuery = query.replace(/[+][^\s]+/g, '').trim();

	return { cleanQuery, facetFilters };
}

function getEnabledEntityKeys(): string[] {
	const entities = window.searchBuddy?.entities;
	if (!entities) {
		return [];
	}
	return Object.keys(entities);
}

const AlgoliaProvider: Provider = {
	id: 'algolia',
	async search(query: string, entity: string, signal?: AbortSignal) {
		const { cleanQuery, facetFilters } = parseFacetQuery(query);
		const searchQuery = {
			indexName: entity,
			searchParams: {
				query: cleanQuery,
				hitsPerPage: 5,
				...(facetFilters.length > 0 && { facetFilters }),
			},
		};
		const results = await getClient().searchSingleIndex(searchQuery, {
			signal,
		});
		return results.hits.map((hit) => ({
			id: Number.isNaN(Number(hit.objectID))
				? hit.objectID
				: Number(hit.objectID),
			...hit,
		}));
	},

	async searchAll(query: string, signal?: AbortSignal) {
		const { cleanQuery, facetFilters } = parseFacetQuery(query);
		const entityKeys = getEnabledEntityKeys();
		const data = await getClient().search(
			{
				requests: entityKeys.map((indexName) => ({
					indexName,
					query: cleanQuery,
					params:
						facetFilters.length > 0
							? facetFilters.join(',')
							: undefined,
				})),
			},
			{ signal }
		);

		return data.results.reduce(
			(acc, result, index) => {
				acc[entityKeys[index]] = result.hits.map((hit) => ({
					id: Number.isNaN(Number(hit.objectID))
					? hit.objectID
					: Number(hit.objectID),
					...hit,
				}));
				return acc;
			},
			{} as Record<string, Item[]>
		);
	},
};

export default AlgoliaProvider;
