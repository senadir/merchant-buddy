import { Provider } from './types';
import DefaultProvider from './default';
import { useQuery } from '@tanstack/react-query';
import AlgoliaProvider from './algolia';
let provider: Provider =
	window.searchBuddy?.main?.provider === 'algolia'
		? AlgoliaProvider
		: DefaultProvider;

export function setProvider(p: Provider) {
	// Check if provider implements all required methods
	if (!p.search || !p.searchAll) {
		// eslint-disable-next-line no-console
		console.error(
			`Provider ${p.id} must implement search and searchAll methods, switching to default provider`
		);
	} else {
		provider = p;
	}
}

export function useProvider() {
	const search = (query: string, entity: string) => {
		const { data, isLoading, error } = useQuery({
			// @todo: need to refactor this.
			queryKey: ['provider', entity, query],
			queryFn: ({ signal }) => provider.search(query, entity, signal),
			enabled: !!query && !!entity,
			refetchOnWindowFocus: false,
			refetchOnMount: false,
			refetchInterval: 0,
			refetchIntervalInBackground: false,
			refetchOnReconnect: false,
		});
		return [data, isLoading, error];
	};
	return { search };
}

export { provider };
