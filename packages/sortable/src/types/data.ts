import type {UniqueIdentifier} from '@thohui/dnd-kit-core';

export type SortableData = {
  sortable: {
    containerId: UniqueIdentifier;
    items: UniqueIdentifier[];
    index: number;
  };
};
