import type {ClientRect} from '@thohui/dnd-kit-core';
import type {Transform} from '@thohui/dnd-kit-utilities';
import type {UniqueIdentifier} from 'packages/core/dist';

export type SortingStrategy = (args: {
  id: UniqueIdentifier;
  activeNodeRect: ClientRect | null;
  activeIndex: number;
  index: number;
  rects: ClientRect[];
  overIndex: number;
}) => Transform | null;
