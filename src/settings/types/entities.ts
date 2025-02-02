import type { SortableData } from '../shared-components';

export interface Entity {
	key: string;
	name: string;
	enabled: boolean;
}

export interface SortableEntity extends Entity, SortableData {}
