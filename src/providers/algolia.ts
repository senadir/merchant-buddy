import { SearchClient, searchClient } from '@algolia/client-search';
import { Provider, Item } from './types';

const algoliaAppId = window.searchBuddy?.algolia?.application_id || '';
const algoliaSearchKey = window.searchBuddy?.algolia?.search_api_key || '';

function parseFacetQuery(query: string) {
	const facetMatches = query.match(/[+][^\s]+/g);
	const facetFilters: string[] = facetMatches || [];
	const cleanQuery = query.replace(/[+][^\s]+/g, '').trim();

	return { cleanQuery, facetFilters };
}

const AlgoliaProvider: Provider & { client: () => SearchClient } = {
	client: () => searchClient(algoliaAppId, algoliaSearchKey),
	id: 'algolia',
	async search(query: string, entity: string) {
		const { cleanQuery, facetFilters } = parseFacetQuery(query);
		const searchQuery = {
			indexName: entity,
			searchParams: {
				query: cleanQuery,
				hitsPerPage: 5,
				...(facetFilters.length > 0 && { facetFilters }),
			},
		};
		const client = this.client();
		const results = await client.searchSingleIndex(searchQuery);
		return results.hits.map((hit) => ({
			id: parseInt(hit.objectID, 10), // Convert string to number
			...hit,
		}));
	},

	async searchAll(query: string) {
		const { cleanQuery, facetFilters } = parseFacetQuery(query);
		const client = this.client();
		const data = await client.search({
			requests: [
				{
					indexName: 'products',
					query: cleanQuery,
					params:
						facetFilters.length > 0
							? facetFilters.join(',')
							: undefined,
				},
				{
					indexName: 'orders',
					query: cleanQuery,
					params:
						facetFilters.length > 0
							? facetFilters.join(',')
							: undefined,
				},
				{
					indexName: 'customers',
					query: cleanQuery,
					params:
						facetFilters.length > 0
							? facetFilters.join(',')
							: undefined,
				},
			],
		});

		// Transform results into the expected format
		return data.results.reduce(
			(acc, result, index) => {
				const indexNames = ['products', 'orders', 'customers'];
				acc[indexNames[index]] = result.hits.map((hit) => ({
					// @todo Figure out why Algolia is not returning the correct type.
					id: parseInt(hit.objectID, 10),
					...hit,
				}));
				return acc;
			},
			{} as Record<string, Item[]>
		);
	},
};

export default AlgoliaProvider;
