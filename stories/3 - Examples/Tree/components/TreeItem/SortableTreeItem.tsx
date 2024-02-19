import type {UniqueIdentifier} from '@thohui/dnd-kit-core';
import {AnimateLayoutChanges, useSortable} from '@thohui/dnd-kit-sortable';
import {CSS} from '@thohui/dnd-kit-utilities';
import React, {CSSProperties} from 'react';

import {iOS} from '../../utilities';
import {TreeItem, Props as TreeItemProps} from './TreeItem';

interface Props extends TreeItemProps {
  id: UniqueIdentifier;
}

const animateLayoutChanges: AnimateLayoutChanges = ({
  wasDragging,
  isDragging,
}) => (isDragging || wasDragging ? false : true);

export function SortableTreeItem({id, depth, ...props}: Props) {
  const {
    attributes,
    isDragging,
    listeners,
    setDraggableNodeRef,
    setDroppableNodeRef,
    transform,
    transition,
  } = useSortable({
    id,
    animateLayoutChanges,
  });
  const style: CSSProperties = {
    transform: CSS.Translate.toString(transform),
    transition,
  };

  return (
    <TreeItem
      ref={setDraggableNodeRef}
      wrapperRef={setDroppableNodeRef}
      style={style}
      depth={depth}
      ghost={isDragging}
      disableSelection={iOS}
      disableInteraction={isDragging}
      handleProps={{
        ...attributes,
        ...listeners,
      }}
      {...props}
    />
  );
}
