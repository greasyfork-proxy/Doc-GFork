import React from 'react';
import BlogSidebar from '@theme-original/BlogSidebar';
import AdSlot from '@site/src/components/AdSlot';

export default function BlogSidebarWrapper(props) {
  return (
    <>
      <BlogSidebar {...props} />
      <AdSlot
        slot="4497590737"
        style={{ display: 'inline-block', width: 190, height: 570, marginTop: 24 }}
        responsive={false}
        firstScreen
      />
    </>
  );
}
