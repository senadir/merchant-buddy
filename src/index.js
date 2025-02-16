import { createMemoryRouter, RouterProvider } from 'react-router-dom';
import { StrictMode, createRoot } from '@wordpress/element';
import { CommandPalette, EntityList, MainList } from './command';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { SettingsProvider } from './command/settings-context';

let container = document.querySelector('.merchant-buddy-container');
if (!container) {
	container = document.createElement('div');
	container.classList.add('merchant-buddy-container');
	document.body.appendChild(container);
}

const root = createRoot(container);
const queryClient = new QueryClient();
const router = createMemoryRouter(
	[
		{
			path: '/',
			element: <CommandPalette />,
			children: [
				{
					index: true,
					element: <MainList />,
				},
				{
					path: '/:entity',
					element: <EntityList />,
				},
			],
		},
	],
	{
		initialEntries: window.searchBuddy.main.initialEntries,
		initialIndex: window.searchBuddy.main.initialIndex,
	}
);

root.render(
	<StrictMode>
		<SettingsProvider value={window.searchBuddy}>
			<QueryClientProvider client={queryClient}>
				<RouterProvider router={router} />
			</QueryClientProvider>
		</SettingsProvider>
	</StrictMode>
);
