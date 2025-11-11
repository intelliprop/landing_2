'use client';

import { ReactNode } from 'react';
import { MotionConfig } from 'framer-motion';
import { prefersReducedMotion } from '@/lib/motion';

export default function MotionProvider({ children }: { children: ReactNode }) {
  return (
    <MotionConfig
      reducedMotion={prefersReducedMotion() ? 'always' : 'user'}
      transition={{ duration: 0.3, ease: 'easeOut' }}
    >
      {children}
    </MotionConfig>
  );
}

