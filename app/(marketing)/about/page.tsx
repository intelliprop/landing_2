import Section from '@/components/Section';

export const metadata = { title: 'About — intelliprop' };

export default function AboutPage() {
  return (
    <>
      <Section title="About intelliprop." lead="Empowering smarter property decisions." />
      <Section>
        <div className="space-y-6 max-w-3xl">
          <p>intelliprop exists to bridge the gap between property listings and actionable insights. Founded by property and data professionals, we turn complex market data into clear, decision-ready intelligence.</p>
          <p>Our proprietary intelliscore™ system gives buyers, investors, and brokers the confidence to make fast, informed decisions. Every report is built for reliability, transparency, and exportable quality, supporting the highest professional standards.</p>
        </div>
      </Section>
    </>
  );
}


