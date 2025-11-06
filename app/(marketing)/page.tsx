import Button from '@/components/Button';
import Section from '@/components/Section';
import FeatureCards from '@/components/FeatureCards';
import Image from 'next/image';

export default function HomePage() {
  return (
    <>
      <Section className="text-center">
        <div className="mb-4 sm:mb-6 rounded-2xl overflow-hidden relative h-36 sm:h-44 md:h-52 lg:h-60 anim-in">
          <Image
            src="/min-hero.svg"
            alt="Modern property and real estate"
            fill
            className="object-cover"
            priority
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 100vw, 1200px"
          />
        </div>
        <h1 className="h1 text-primary px-4 sm:px-0">Property intelligence, instantly.</h1>
        <p className="lead mt-3 max-w-2xl mx-auto px-4 sm:px-0">Turn any address or brief into a clear, decision-ready report in minutes—not days.</p>
        <div className="mt-5 sm:mt-6">
          <Button href="#how-it-works">How it works</Button>
        </div>
      </Section>

      <Section id="how-it-works" title="How reporting works at intelliprop" lead="Choose your preferred workflow to generate a property report. All workflows leverage intelliprop’s secure, real-time data analytics to deliver trusted insights and your Intelliscore™ within minutes. No manual back-and-forth — just clarity.">
        <FeatureCards
          cards={[
            { title: 'Input a brief or address.', body: 'Start by entering your property goals or pasting an address. intelliprop’s intake makes it simple to set your strategy.' },
            { title: 'Engine evaluation.', body: 'Our proprietary AI engine analyses data, market comparables, risk factors, and yields using trusted market sources.' },
            { title: 'Get your report.', body: 'Receive an Intelliscore™ report instantly: see an executive summary, comparables, risk bands, and recommendations.' }
          ]}
        />
      </Section>

      <Section title="Ready to get your Intelliscore™?" lead="See intelliprop in action. Discover what data‑driven clarity feels like." className="text-center">
        <Button href="https://platform.intelliprop.com.au">Generate a report</Button>
      </Section>
    </>
  );
}


