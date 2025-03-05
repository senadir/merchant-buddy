/**
 * Internal dependencies
 */
import type { SortableEntity } from "./types/entities";
import type { Provider } from "./types/provider";
import type { MainSettings } from "./types/settings";
export const defaultSettings = {
  enabled: true,
  provider: "default",
  shortcut: "Cmd+K",
};

export const defaultReadyOnlySettings = {
  available_entities: [
    { key: "orders", name: "Orders" },
    { key: "products", name: "Products" },
    { key: "customers", name: "Customers" },
  ],
  available_providers: [
    { key: "default", name: "Default" },
    { key: "algolia", name: "Algolia" },
  ],
};
declare global {
  const hydratedScreenSettings: {
    enabled: boolean;
    provider: string;
    entities: string[];
    readonlySettings: typeof defaultReadyOnlySettings;
    providerSettingsSchema: Record<string, Provider>;
    providerSettings: Record<string, Record<string, string | boolean>>;
    shortcut: string;
  };
}

export const getInitialSettings = (): MainSettings => {
  const hydratedSettings = (window as any).hydratedScreenSettings;
  return {
    enabled: hydratedSettings?.enabled ?? false,
    provider: hydratedSettings?.provider ?? "default",
    shortcut: hydratedSettings?.shortcut ?? "Cmd+K",
  };
};

export const getInitialEntities = (): SortableEntity[] => {
  const entities = hydratedScreenSettings.readonlySettings.available_entities;
  return entities.map((entity) => ({
    ...entity,
    id: entity.key,
    enabled: hydratedScreenSettings.entities.includes(entity.key),
  }));
};

export const getInitialProviderSettings = (): Record<
  string,
  Record<string, string | boolean>
> => {
  return hydratedScreenSettings.providerSettings || {};
};

export const readOnlySettings =
  hydratedScreenSettings.readonlySettings || defaultReadyOnlySettings;

export const providerSettingsSchema =
  hydratedScreenSettings.providerSettingsSchema || {};
