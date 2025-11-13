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
        className="grid md:grid-cols-2 lg:grid-cols-5 gap-6 max-w-7xl mx-auto mb-12"
      >
        {copy.pricing.tiers.map((tier, idx) => (
          <motion.div
            key={tier.id}
            variants={fadeInUp}
            transition={getTransition(0.4, idx * 0.1)}
            className={tier.comingSoon ? 'opacity-60' : ''}
          >
            <Card
              className={`text-center h-full ${
                tier.highlight ? 'border-2 border-[var(--ip-teal)]' : ''
              } ${tier.comingSoon ? 'relative' : ''}`}
            >
              {tier.comingSoon && (
                <div className="absolute top-2 right-2">
                  <span className="text-xs bg-[var(--ip-muted)] text-white px-2 py-1 rounded">Coming Soon</span>
                </div>
              )}
              <h3 className="text-xl font-bold mb-2">{tier.label}</h3>
              <div className="text-4xl font-bold mb-1">
                {tier.price}
                {tier.period && <span className="text-lg text-[var(--ip-muted)]">{tier.period}</span>}
              </div>
              <ul className="text-left space-y-2 mb-6 mt-4">
                {tier.bullets.map((bullet, bulletIdx) => (
                  <li key={bulletIdx} className="flex items-start gap-2">
                    <span className="text-[var(--ip-teal)]">✓</span>
                    <span className="text-sm">{bullet}</span>
                  </li>
                ))}
              </ul>
              <Button
                href={
                  tier.id === 'business_custom'
                    ? '/contact'
                    : 'https://platform.intelliprop.com.au'
                }
                variant={tier.highlight ? 'primary' : 'secondary'}
                className="w-full"
              >
                {tier.cta}
              </Button>
            </Card>
          </motion.div>
        ))}
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
