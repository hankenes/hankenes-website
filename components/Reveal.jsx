'use client';

import { motion } from 'motion/react';

export default function Reveal({
  children,
  delay = 0,
  y = 36,
  className,
  duration = 0.7,
  margin = '-80px',
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin }}
      transition={{ duration, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}
