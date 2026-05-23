import React from 'react';
import BlogPostItem from '@theme-original/BlogPostItem';
import AdSlot from '@site/src/components/AdSlot';

export default function BlogPostItemWrapper(props) {
  return (
    <>
      <BlogPostItem {...props} />
      <AdSlot slot="1394739154" format="fluid" layoutKey="-gy+2i+5x-ek+82" style={{ minHeight: 120 }} />
      <AdSlot slot="3934604756" format="autorelaxed" />
    </>
  );
}
