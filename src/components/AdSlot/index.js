import React, { useEffect, useRef, useState } from 'react';
import styles from './styles.module.css';

const CLIENT = 'ca-pub-3758644447684310';

export default function AdSlot({ slot, format, layoutKey, style: inlineStyle, responsive, firstScreen, className }) {
  const ref = useRef(null);
  const [pushed, setPushed] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el || pushed) return;
    if (el.getAttribute('data-ad-status') || el.getAttribute('data-adsbygoogle-status')) {
      setPushed(true);
      return;
    }
    const doPush = () => {
      setPushed(true);
      try {
        (window.adsbygoogle = window.adsbygoogle || []).push({});
      } catch (e) {
        // AdSense not available (e.g. blocked)
      }
    };

    if (firstScreen) {
      doPush();
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) { doPush(); observer.disconnect(); }
      },
      { rootMargin: '250px' }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [pushed]);

  const insClass = ['adsbygoogle', firstScreen ? 'ads-firstscreen' : ''].filter(Boolean).join(' ');

  return (
    <div className={`${styles.wrapper} ${className || ''}`}>
      <ins
        ref={ref}
        className={insClass}
        style={{ display: 'block', minHeight: '90px', ...inlineStyle }}
        data-ad-client={CLIENT}
        data-ad-slot={slot}
        data-ad-format={format || 'auto'}
        data-ad-layout-key={layoutKey}
        data-full-width-responsive={responsive !== false ? 'true' : undefined}
      />
    </div>
  );
}
