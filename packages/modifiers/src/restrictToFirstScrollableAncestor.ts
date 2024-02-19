import type {Modifier} from '@thohui/dnd-kit-core';
import {restrictToBoundingRect} from './utilities';

export const restrictToFirstScrollableAncestor: Modifier = ({
  draggingNodeRect,
  transform,
  scrollableAncestorRects,
}) => {
  const firstScrollableAncestorRect = scrollableAncestorRects[0];

  if (!draggingNodeRect || !firstScrollableAncestorRect) {
    return transform;
  }

  return restrictToBoundingRect(
    transform,
    draggingNodeRect,
    firstScrollableAncestorRect
  );
};
