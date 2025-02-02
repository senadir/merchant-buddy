import { createMemoryRouter, RouterProvider } from 'react-router-dom';
import { StrictMode, createRoot } from '@wordpress/element';
import { CommandPalette, EntityList, MainList } from './command';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { SettingsProvider } from './command/settings-context';

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
		initialEntries: ['/', '/orders'],
		initialIndex: 0,
	}
);

const container = document.body.appendChild(document.createElement('div'));
document.body.classList.add('search-buddy-panel-container');
const root = createRoot(container);
root.render(
	<StrictMode>
		<SettingsProvider value={window.searchBuddy}>
			<QueryClientProvider client={queryClient}>
				<RouterProvider router={router} />
			</QueryClientProvider>
		</SettingsProvider>
	</StrictMode>
);
