'use client';

import { motion } from 'framer-motion';
import { copy } from '@/lib/copy';
import { staggerChildren, fadeInUp, getTransition } from '@/lib/motion';
import Section from '@/components/Section';
import SectionHeading from '@/components/ui/SectionHeading';
import Card from '@/components/ui/Card';
import Button from '@/components/Button';

export default function Pricing() {
  return (
    <Section id="pricing">
      <SectionHeading title={copy.pricing.title} className="mb-12 text-center mx-auto" />

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        variants={staggerChildren}
        className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-12"
      >
        <motion.div variants={fadeInUp} transition={getTransition(0.4)}>
          <Card className="text-center">
            <h3 className="text-xl font-bold mb-2">{copy.pricing.buyers.title}</h3>
            <div className="text-4xl font-bold mb-1">{copy.pricing.buyers.price}</div>
            <div className="text-sm text-[var(--ip-muted)] mb-6">{copy.pricing.buyers.period}</div>
            <ul className="text-left space-y-2 mb-6">
              {copy.pricing.buyers.bullets.map((bullet, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="text-[var(--ip-teal)]">✓</span>
                  <span className="text-sm">{bullet}</span>
                </li>
              ))}
            </ul>
            <Button href="https://platform.intelliprop.com.au" variant="primary" className="w-full">
              {copy.pricing.buyers.cta}
            </Button>
          </Card>
        </motion.div>

        <motion.div variants={fadeInUp} transition={getTransition(0.4, 0.1)}>
          <Card className="text-center border-2 border-[var(--ip-teal)]">
            <h3 className="text-xl font-bold mb-2">{copy.pricing.brokers.title}</h3>
            <div className="text-4xl font-bold mb-1">{copy.pricing.brokers.price}</div>
            <div className="text-sm text-[var(--ip-muted)] mb-6">{copy.pricing.brokers.period}</div>
            <ul className="text-left space-y-2 mb-6">
              {copy.pricing.brokers.bullets.map((bullet, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="text-[var(--ip-teal)]">✓</span>
                  <span className="text-sm">{bullet}</span>
                </li>
              ))}
            </ul>
            <Button href="/contact" variant="primary" className="w-full">
              {copy.pricing.brokers.cta}
            </Button>
          </Card>
        </motion.div>
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
        className="text-center space-y-2"
      >
        {copy.pricing.trust.map((item, idx) => (
          <p key={idx} className="text-sm text-[var(--ip-muted)]">
            {item}
          </p>
        ))}
      </motion.div>
    </Section>
  );
}

