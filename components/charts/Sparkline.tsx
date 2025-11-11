'use client';

import { motion } from 'framer-motion';
import { prefersReducedMotion } from '@/lib/motion';

export default function Sparkline() {
  const points = [20, 35, 25, 45, 30, 50, 40, 60, 55, 70, 65, 80];
  const path = points
    .map((p, i) => `${i === 0 ? 'M' : 'L'} ${(i / (points.length - 1)) * 200} ${100 - p}`)
    .join(' ');

  return (
    <div className="w-full h-48 flex items-center justify-center">
      <svg width="200" height="100" viewBox="0 0 200 100" className="overflow-visible">
        <motion.path
          d={path}
          fill="none"
          stroke="var(--ip-teal)"
          strokeWidth="3"
          strokeLinecap="round"
          strokeDasharray="1000"
          initial={{ strokeDashoffset: 1000 }}
          whileInView={{ strokeDashoffset: 0 }}
          viewport={{ once: true }}
          transition={prefersReducedMotion() ? { duration: 0.01 } : { duration: 2, ease: 'easeInOut' }}
        />
        <motion.circle
          cx="180"
          cy="20"
          r="8"
          fill="var(--ip-teal)"
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={prefersReducedMotion() ? { duration: 0.01 } : { duration: 0.5, delay: 1.5 }}
        />
      </svg>
    </div>
  );
}

