/**
 * External dependencies
 */
import type { UniqueIdentifier } from "@dnd-kit/core";
import apiFetch from "@wordpress/api-fetch";
import { dispatch } from "@wordpress/data";
import {
  createContext,
  useCallback,
  useContext,
  useState,
} from "@wordpress/element";
import { __ } from "@wordpress/i18n";
import fastDeepEqual from "fast-deep-equal/es6";

/**
 * Internal dependencies
 */
import type { SortableEntity } from "./types/entities";
import type { MainSettings, SettingsContextType } from "./types/settings";
import {
  defaultReadyOnlySettings,
  defaultSettings,
  getInitialEntities,
  getInitialProviderSettings,
  getInitialSettings,
  providerSettingsSchema,
  readOnlySettings,
} from "./utils";

const SettingsContext = createContext<SettingsContextType>({
  settings: defaultSettings,
  setSettingField: () => () => void null,
  readOnlySettings: defaultReadyOnlySettings,
  entities: [],
  providerSettingsSchema: {},
  providerSettings: {},
  setProviderSettingField: () => () => () => void null,
  toggleEntity: () => void null,
  updateEntities: () => void null,
  isSaving: false,
  save: () => void null,
  isDirty: false,
});

export const useSettingsContext = (): SettingsContextType => {
  return useContext(SettingsContext);
};

export const SettingsProvider = ({
  children,
}: {
  children: JSX.Element[] | JSX.Element;
}): JSX.Element => {
  const [isSaving, setIsSaving] = useState(false);
  const [isDirty, setIsDirty] = useState(false);
  const [entities, setEntities] =
    useState<SortableEntity[]>(getInitialEntities);
  const [settings, setSettings] = useState<MainSettings>(getInitialSettings);
  const [providerSettings, setProviderSettings] = useState<
    Record<string, Record<string, string | boolean>>
  >(getInitialProviderSettings);
  const setProviderSettingField = useCallback(
    (provider: string) => (field: string) => (newValue: string | boolean) => {
      setIsDirty(true);
      setProviderSettings((prevValue) => ({
        ...prevValue,
        [provider]: { ...prevValue[provider], [field]: newValue },
      }));
    },
    [],
  );

  const setSettingField = useCallback(
    (field: keyof MainSettings) => (newValue: unknown) => {
      setIsDirty(true);
      setSettings((prevValue) => ({
        ...prevValue,
        [field]: newValue,
      }));
    },
    [],
  );

  const toggleEntity = useCallback((rowId: UniqueIdentifier) => {
    setIsDirty(true);
    setEntities((previousEntities: SortableEntity[]) => {
      const entityIndex = previousEntities.findIndex(({ id }) => id === rowId);
      const updated = [...previousEntities];
      updated[entityIndex].enabled = !previousEntities[entityIndex].enabled;
      return updated;
    });
  }, []);

  const updateEntities = useCallback((data: SortableEntity[]) => {
    setIsDirty(true);
    setEntities(data);
  }, []);

  const save = useCallback(() => {
    const data: {
      merchant_buddy_main_settings: { enabled: string; provider: string };
      merchant_buddy_enabled_entities: string[];
      [key: string]: unknown;
    } = {
      merchant_buddy_main_settings: {
        enabled: settings.enabled ? "yes" : "no",
        provider: settings.provider,
      },
      merchant_buddy_enabled_entities: entities
        .filter((entity) => entity.enabled)
        .map((entity) => entity.key),
    };

    Object.entries(providerSettings).forEach(
      ([providerKey, providerSetting]) => {
        const optionName = providerSettingsSchema[providerKey]?.option_name;
        if (optionName) {
          data[optionName] = Object.entries(providerSetting).reduce(
            (acc, [field, value]) => ({
              ...acc,
              [field]:
                // eslint-disable-next-line no-nested-ternary
                typeof value === "boolean" ? (value ? "yes" : "no") : value,
            }),
            {},
          );
        }
      },
    );
    setIsSaving(true);
    setIsDirty(false);

    // @todo This should be improved to include error handling in case of API failure, or invalid data being sent that
    // does not match the schema. This would fail silently on the API side.
    apiFetch({
      path: "/wp/v2/settings",
      method: "POST",
      data,
    }).then((response) => {
      setIsSaving(false);
      if (
        fastDeepEqual(
          response.merchant_buddy_main_settings,
          data.merchant_buddy_main_settings,
        ) &&
        fastDeepEqual(
          response.merchant_buddy_enabled_entities,
          data.merchant_buddy_enabled_entities,
        )
      ) {
        dispatch("core/notices").createSuccessNotice(
          __("Merchant Buddy settings have been saved.", "woocommerce"),
        );
      }
    });
  }, [settings, entities, providerSettings]);
  const settingsData = {
    settings,
    setSettingField,
    readOnlySettings,
    entities,
    toggleEntity,
    updateEntities,
    providerSettingsSchema,
    providerSettings,
    setProviderSettingField,
    isSaving,
    save,
    isDirty,
  };

  return (
    <SettingsContext.Provider value={settingsData}>
      {children}
    </SettingsContext.Provider>
  );
};
