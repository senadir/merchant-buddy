import type { Provider } from './provider';
import type { SortableEntity } from './entities';
import type { UniqueIdentifier } from '@dnd-kit/core';

export type MainSettings = {
	enabled: boolean;
	provider: string;
};

export type ReadOnlySettings = {
	available_entities: Array<{
		key: string;
		name: string;
	}>;
	available_providers: Array<{
		key: string;
		name: string;
	}>;
};

export type SettingsContextType = {
	settings: MainSettings;
	setSettingField: (
		field: keyof MainSettings
	) => (value: string | boolean) => void;
	entities: SortableEntity[];
	toggleEntity: (rowId: UniqueIdentifier) => void;
	updateEntities: (data: SortableEntity[]) => void;
	readOnlySettings: ReadOnlySettings;
	providerSettingsSchema: Record<string, Provider>;
	setProviderSettingField: (
		provider: string
	) => (field: string) => (value: string | boolean) => void;
	providerSettings: Record<string, Record<string, string | boolean>>;
	isSaving: boolean;
	save: () => void;
	isDirty: boolean;
};
