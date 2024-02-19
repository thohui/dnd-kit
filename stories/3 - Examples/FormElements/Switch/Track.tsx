import {useDroppable} from '@thohui/dnd-kit-core';
import React from 'react';

import {State} from './constants';
import styles from './Switch.module.css';

export function Track() {
  const {setNodeRef: setOnRegionNodeRef} = useDroppable({
    id: State.On,
  });
  const {setNodeRef: setOffRegionNodeRef} = useDroppable({
    id: State.Off,
  });

  return (
    <span className={styles.Track}>
      <span ref={setOffRegionNodeRef} className={styles.OffRegion} />
      <span ref={setOnRegionNodeRef} className={styles.OnRegion} />
    </span>
  );
}
