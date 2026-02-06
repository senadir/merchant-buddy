import { Provider } from './types';
import DefaultProvider from './default';
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

export { provider };
