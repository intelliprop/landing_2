'use client';

import { motion } from 'framer-motion';
import { copy } from '@/lib/copy';
import { fadeInUp, getTransition } from '@/lib/motion';
import Section from '@/components/Section';
import SectionHeading from '@/components/ui/SectionHeading';
import Sparkline from '@/components/charts/Sparkline';

export default function Mission() {
  const emphasized = copy.mission.emphasized;

  return (
    <Section id="mission" className="grid md:grid-cols-2 gap-12 items-center">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        variants={fadeInUp}
        transition={getTransition(0.6)}
      >
        <Sparkline />
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        variants={fadeInUp}
        transition={getTransition(0.6, 0.2)}
      >
        <SectionHeading title={copy.mission.title} />
        <p className="text-lg mb-4">
          {copy.mission.body.split(' ').map((word, idx) => {
            const cleanWord = word.toLowerCase().replace(/[.,]/g, '');
            const isEmphasized = (emphasized as readonly string[]).includes(cleanWord);
            return (
              <motion.span
                key={idx}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={getTransition(0.3, idx * 0.1)}
                className={isEmphasized ? 'font-bold text-[var(--ip-teal)]' : ''}
              >
                {word}{' '}
              </motion.span>
            );
          })}
        </p>
        <p className="text-[var(--ip-muted)]">{copy.mission.sub}</p>
      </motion.div>
    </Section>
  );
}

