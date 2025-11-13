'use client';

import { motion } from 'framer-motion';
import { prefersReducedMotion, getTransition } from '@/lib/motion';

type Props = {
  value: number; // 0-100
  size?: number;
};

export default function Gauge({ value, size = 200 }: Props) {
  const circumference = 2 * Math.PI * (size / 2 - 10);
  const offset = circumference - (value / 100) * circumference;

  return (
    <div className="relative" style={{ width: size, height: size }}>
      <svg width={size} height={size} className="transform -rotate-90">
        <circle
          cx={size / 2}
          cy={size / 2}
          r={size / 2 - 10}
          fill="none"
          stroke="var(--ip-card)"
          strokeWidth="8"
        />
        <motion.circle
          cx={size / 2}
          cy={size / 2}
          r={size / 2 - 10}
          fill="none"
          stroke="var(--ip-teal)"
          strokeWidth="8"
          strokeLinecap="round"
          strokeDasharray={circumference}
          initial={{ strokeDashoffset: circumference }}
          whileInView={{ strokeDashoffset: offset }}
          viewport={{ once: true }}
          transition={prefersReducedMotion() ? { duration: 0.01 } : { duration: 1.5, ease: 'easeOut' }}
        />
      </svg>
      <div className="absolute inset-0 flex items-center justify-center">
        <span className="text-4xl font-bold text-[var(--ip-teal)]">{value}</span>
      </div>
    </div>
  );
}

