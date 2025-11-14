'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { copy } from '@/lib/copy';
import { staggerChildren, fadeInUp, getTransition } from '@/lib/motion';
import Section from '@/components/Section';
import SectionHeading from '@/components/ui/SectionHeading';
import Card from '@/components/ui/Card';
import { FileIcon, HouseIcon, MapIcon } from '@/components/Icons';

// Map report type IDs to icon components
const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  brief: FileIcon,
  property: HouseIcon,
  suburb: MapIcon,
};

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
        {copy.howItWorks.reportTypes.map((reportType, idx) => {
          const IconComponent = iconMap[reportType.id] || FileIcon;
          return (
            <motion.div key={reportType.id} variants={fadeInUp} transition={getTransition(0.4, idx * 0.1)}>
              <Card className="h-full">
                <div className="mb-4 flex items-center justify-center">
                  <IconComponent className="w-12 h-12" />
                </div>
                <h3 className="font-bold text-lg mb-2">{reportType.title}</h3>
                <p className="text-sm text-[var(--ip-muted)]">{reportType.description}</p>
              </Card>
            </motion.div>
          );
        })}
      </motion.div>
    </Section>
  );
}

