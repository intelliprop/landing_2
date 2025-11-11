'use client';

import { motion } from 'framer-motion';
import { copy } from '@/lib/copy';
import { staggerChildren, fadeInUp, getTransition } from '@/lib/motion';
import Section from '@/components/Section';
import SectionHeading from '@/components/ui/SectionHeading';
import Card from '@/components/ui/Card';

export default function HowItWorks() {
  return (
    <Section id="how-it-works">
      <div className="mb-12">
        <SectionHeading title={copy.howItWorks.title} className="mb-4" />
        {copy.howItWorks.subtitle && (
          <p className="text-lg text-[var(--ip-muted)] max-w-3xl">{copy.howItWorks.subtitle}</p>
        )}
      </div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        variants={staggerChildren}
        className="grid md:grid-cols-3 gap-6"
      >
        {copy.howItWorks.reportTypes.map((reportType, idx) => (
          <motion.div key={reportType.id} variants={fadeInUp} transition={getTransition(0.4, idx * 0.1)}>
            <Card className="h-full">
              <div className="text-4xl mb-4">{reportType.icon}</div>
              <h3 className="font-bold text-lg mb-2">{reportType.title}</h3>
              <p className="text-sm text-[var(--ip-muted)]">{reportType.description}</p>
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </Section>
  );
}

