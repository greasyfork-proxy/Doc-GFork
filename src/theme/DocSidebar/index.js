import React from 'react';
import DocSidebar from '@theme-original/DocSidebar';
import AdSlot from '@site/src/components/AdSlot';
import styles from './styles.module.css';

export default function DocSidebarWrapper(props) {
  return (
    <div className={styles.sidebarContainer}>
      <DocSidebar {...props} />
      <div className={styles.sidebarAd}>
        <AdSlot
          slot="4497590737"
          style={{ display: 'inline-block', width: 190, height: 570 }}
          responsive={false}
          firstScreen
        />
      </div>
    </div>
  );
}
