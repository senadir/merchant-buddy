import { createContext, useContext } from '@wordpress/element';

declare global {
	interface Window {
		searchBuddy: Settings;
	}
}

type Entity = {
	template: string;
	bindings: Record<string, string | string[]> & {
		primary_action: {
			label: string;
			url: string;
		};
		secondary_action?: {
			label: string;
			url: string;
		};
	};
	label: string;
};

type Settings = {
	entities: Record<string, Entity>;
	main: {
		provider: string;
		enabled: boolean;
	};
	[key: string]: Record<string, any>;
};

const SettingsContext = createContext<Settings>({
	entities: {},
	main: {
		provider: 'default',
		enabled: true,
	},
});

const useSettings = (): Settings => {
	return useContext(SettingsContext);
};

const SettingsProvider = ({
	children,
	value,
}: {
	children: React.ReactNode;
	value: Settings;
}) => {
	return (
		<SettingsContext.Provider value={value}>
			{children}
		</SettingsContext.Provider>
	);
};

export { SettingsProvider, useSettings, type Settings, type Entity };
