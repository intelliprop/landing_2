'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { copy } from '@/lib/copy';
import { fadeInUp, getTransition } from '@/lib/motion';
import HeroBackground from './HeroBackground';
import Button from '@/components/Button';

export default function Hero() {
  const [currentLine, setCurrentLine] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentLine((prev) => (prev + 1) % copy.hero.lines.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <HeroBackground />
      <div className="container-page relative z-10 text-center py-20">
        <div className="max-w-4xl mx-auto">
          <div className="h-24 sm:h-32 md:h-40 flex items-center justify-center mb-6">
            <AnimatePresence mode="wait">
              {copy.hero.lines.map(
                (line, idx) =>
                  idx === currentLine && (
                    <motion.h1
                      key={idx}
                      initial="hidden"
                      animate="visible"
                      exit="hidden"
                      variants={fadeInUp}
                      transition={getTransition(0.5)}
                      className="h1 text-[var(--ip-teal)]"
                    >
                      {line}
                    </motion.h1>
                  )
              )}
            </AnimatePresence>
          </div>

          <motion.p
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            transition={getTransition(0.5, 0.2)}
            className="lead max-w-2xl mx-auto mb-4"
          >
            {copy.hero.sub}
          </motion.p>

          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            transition={getTransition(0.5, 0.25)}
            className="mb-8"
          >
            <p className="text-sm text-[var(--ip-muted)] max-w-2xl mx-auto">
              <span className="inline-block px-3 py-1 bg-[var(--ip-teal)]/10 text-[var(--ip-teal)] rounded-full border border-[var(--ip-teal)]/20 font-medium">
                Currently in Closed Beta
              </span>
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            transition={getTransition(0.5, 0.4)}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Button href="https://platform.intelliprop.com.au" variant="primary">
              {copy.hero.ctaPrimary}
            </Button>
            <Button href="#how-it-works" variant="secondary">
              {copy.hero.ctaGhost}
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

