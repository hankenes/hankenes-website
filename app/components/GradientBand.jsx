'use client';

import { useEffect, useRef, useState } from 'react';
import { motion } from 'motion/react';

export default function GradientBand() {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    if (!ref.current) return;
    const obs = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { rootMargin: '200px' }
    );
    obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <motion.div
      ref={ref}
      className="gradient-band"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: '100px' }}
      transition={{ duration: 0.9, ease: 'easeOut' }}
      aria-hidden="true"
    >
      <motion.div
        className="gradient-band__inner"
        animate={inView ? {
          x: [0, -38, 26, -18, 0],
          y: [0, 22, -12, 18, 0],
          scale: [1, 1.025, 1.01, 1.02, 1],
        } : { x: 0, y: 0, scale: 1 }}
        transition={{
          duration: 32,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
      <svg className="gradient-band__noise" preserveAspectRatio="none">
        <filter id="hankenesGrain">
          <feTurbulence type="fractalNoise" baseFrequency="0.85" numOctaves="2" stitchTiles="stitch" />
          <feColorMatrix values="0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 0.55 0" />
        </filter>
        <rect width="100%" height="100%" filter="url(#hankenesGrain)" />
      </svg>
    </motion.div>
  );
}
