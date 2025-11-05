import Section from '@/components/Section';

export const metadata = { title: 'About — intelliprop' };

export default function AboutPage() {
  return (
    <>
      <Section title="about intelliprop." lead="empowering smarter property decisions." />
      <Section>
        <div className="space-y-6 max-w-3xl">
          <p>intelliprop exists to bridge the gap between property listings and actionable insights. founded by property and data professionals, we turn complex market data into clear, decision-ready intelligence.</p>
          <p>Our proprietary IntelliScore™ system gives buyers, investors, and brokers the confidence to make fast, informed decisions. every report is built for reliability, transparency, and exportable quality, supporting the highest professional standards.</p>
        </div>
      </Section>
    </>
  );
}


