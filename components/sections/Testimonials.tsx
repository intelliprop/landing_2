'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { copy } from '@/lib/copy';
import Section from '@/components/Section';
import SectionHeading from '@/components/ui/SectionHeading';
import Card from '@/components/ui/Card';

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % copy.testimonials.items.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [isPaused]);

  return (
    <Section
      id="testimonials"
      className="bg-gradient-to-br from-[var(--ip-teal)] to-[var(--ip-navy)] text-white py-16"
    >
      <SectionHeading title={copy.testimonials.title} className="mb-12 text-white" />

      <div
        className="relative min-h-[300px]"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <AnimatePresence mode="wait">
          {copy.testimonials.items.map(
            (item, idx) =>
              idx === current && (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  <Card className="bg-white/10 backdrop-blur border-white/20 text-white">
                    <p className="text-lg mb-4 italic">&ldquo;{item.quote}&rdquo;</p>
                    <div>
                      <div className="font-semibold">{item.name}</div>
                      <div className="text-sm opacity-80">{item.role}</div>
                    </div>
                  </Card>
                </motion.div>
              )
          )}
        </AnimatePresence>
      </div>

      <div className="flex gap-2 justify-center mt-6">
        {copy.testimonials.items.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrent(idx)}
            className={`w-2 h-2 rounded-full transition-all ${
              idx === current ? 'bg-white w-8' : 'bg-white/40'
            }`}
            aria-label={`Go to testimonial ${idx + 1}`}
          />
        ))}
      </div>
    </Section>
  );
}

