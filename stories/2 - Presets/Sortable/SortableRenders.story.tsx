import React, {Profiler, useRef, useState} from 'react';
import {arrayMove, SortableContext, useSortable} from '@dnd-kit/sortable';

import {Container, Item, Wrapper} from '../../components';
import {
  DndContext,
  MouseSensor,
  UniqueIdentifier,
  useSensor,
  useSensors,
} from '@dnd-kit/core';
import {createRange} from '../../utilities';

export default {
  title: 'Presets/Sortable/Renders',
};

function SortableItem({id, index}: {id: UniqueIdentifier; index: number}) {
  const {
    attributes,
    isDragging,
    isSorting,
    listeners,
    setNodeRef,
    transform,
    transition,
  } = useSortable({
    id,
  });

  const span = useRef<HTMLSpanElement>(null);

  return (
    <Profiler
      id="App"
      onRender={(_, phase) => {
        if (phase === 'update' && span.current) {
          span.current.innerHTML = 'updated ' + id;
        }
      }}
    >
      <div>
        <span data-testid={`draggable-status-${id}`} ref={span}>
          mounted {id}
        </span>
        <Item
          ref={setNodeRef}
          value={id}
          dragging={isDragging}
          sorting={isSorting}
          index={index}
          transform={transform}
          transition={transition}
          listeners={listeners}
          data-index={index}
          data-id={id}
          {...attributes}
        />
      </div>
    </Profiler>
  );
}

function Sortable() {
  const [items, setItems] = useState<UniqueIdentifier[]>(() =>
    createRange<UniqueIdentifier>(20, (index) => index + 1)
  );
  const getIndex = (id: UniqueIdentifier) => items.indexOf(id);
  const sensors = useSensors(useSensor(MouseSensor));
  return (
    <DndContext
      sensors={sensors}
      onDragEnd={({over, active}) => {
        if (over) {
          const overIndex = getIndex(over.id);
          const activeIndex = getIndex(active.id);
          if (activeIndex !== overIndex) {
            setItems((items) => arrayMove(items, activeIndex, overIndex));
          }
        }
      }}
    >
      <Wrapper>
        <SortableContext items={items}>
          <Container>
            {items.map((id, index) => (
              <SortableItem key={id} id={id} index={index} />
            ))}
          </Container>
        </SortableContext>
      </Wrapper>
    </DndContext>
  );
}

export const BasicSetup = () => <Sortable />;