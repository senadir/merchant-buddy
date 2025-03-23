import { createContext, useContext } from "@wordpress/element";

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
    shortcut: string;
    initialEntries: string[];
    initialIndex: number;
    dialog: boolean;
  };
  provider: Record<string, any>;
};

const SettingsContext = createContext<Settings>({
  entities: {},
  main: {
    provider: "default",
    enabled: true,
    shortcut: "",
    initialEntries: ["/"],
    initialIndex: 0,
    dialog: true,
  },
  provider: {},
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
