'use client';

import { motion } from 'framer-motion';
import { copy } from '@/lib/copy';
import { staggerChildren, fadeInUp, getTransition } from '@/lib/motion';
import Section from '@/components/Section';
import SectionHeading from '@/components/ui/SectionHeading';
import Card from '@/components/ui/Card';

const icons = {
  collect: '📍',
  analyse: '🔍',
  research: '📊',
  report: '✅',
};

export default function HowItWorks() {
  return (
    <Section id="how-it-works">
      <SectionHeading title={copy.howItWorks.title} className="mb-12" />

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        variants={staggerChildren}
        className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
      >
        {copy.howItWorks.steps.map((step, idx) => (
          <motion.div key={step.id} variants={fadeInUp} transition={getTransition(0.4, idx * 0.1)}>
            <Card>
              <div className="text-4xl mb-4">{icons[step.id as keyof typeof icons]}</div>
              <h3 className="font-bold text-lg mb-2">{step.title}</h3>
              <p className="text-sm text-[var(--ip-muted)]">{step.description}</p>
            </Card>
          </motion.div>
        ))}
      </motion.div>

      {/* Animated connector line (simplified) */}
      <div className="hidden lg:block mt-8">
        <svg className="w-full h-1" aria-hidden="true">
          <motion.line
            x1="0%"
            y1="50%"
            x2="100%"
            y2="50%"
            stroke="var(--ip-teal)"
            strokeWidth="2"
            strokeDasharray="1000"
            initial={{ strokeDashoffset: 1000 }}
            whileInView={{ strokeDashoffset: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: 'easeInOut' }}
          />
        </svg>
      </div>
    </Section>
  );
}

