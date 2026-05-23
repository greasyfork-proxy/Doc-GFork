import React from 'react';
import DocItem from '@theme-original/DocItem';
import AdSlot from '@site/src/components/AdSlot';

export default function DocItemWrapper(props) {
  return (
    <>
      <DocItem {...props} />
      <AdSlot slot="1394739154" format="fluid" layoutKey="-gy+2i+5x-ek+82" style={{ minHeight: 120 }} />
      <AdSlot slot="3934604756" format="autorelaxed" />
    </>
  );
}
