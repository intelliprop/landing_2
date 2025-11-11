'use client';

import { motion } from 'framer-motion';
import { copy } from '@/lib/copy';
import { fadeInUp, getTransition } from '@/lib/motion';
import Section from '@/components/Section';
import SectionHeading from '@/components/ui/SectionHeading';
import Gauge from '@/components/charts/Gauge';
import Chip from '@/components/ui/Chip';

export default function Intelliscore() {
  return (
    <Section id="intelliscore" className="text-center">
      <SectionHeading title={copy.intelliscore.title} sub={copy.intelliscore.sub} className="mb-12 mx-auto" />

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        variants={fadeInUp}
        transition={getTransition(0.6)}
        className="flex flex-col items-center gap-8"
      >
        <Gauge value={85} />
        <div className="flex flex-wrap gap-2 justify-center">
          {copy.intelliscore.dimensions.map((dim) => (
            <Chip key={dim}>{dim}</Chip>
          ))}
        </div>
      </motion.div>
    </Section>
  );
}

