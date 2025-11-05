import Button from '@/components/Button';
import Section from '@/components/Section';
import FeatureCards from '@/components/FeatureCards';

export default function HomePage() {
  return (
    <>
      <Section className="text-center">
        <h1 className="h1 text-primary">intelliprop turns data into clarity.</h1>
        <p className="lead mt-4 max-w-2xl mx-auto">from buyer briefs to property analysis, our intelliscore™ delivers insight fast.</p>
        <div className="mt-8">
          <Button href="#how-it-works">how it works</Button>
        </div>
      </Section>

      <Section id="how-it-works" title="how reporting works at intelliprop" lead="choose your preferred workflow to generate a property report. all workflows leverage intelliprop’s secure, real-time data analytics to deliver trusted insights and your intelliscore™ within minutes. no manual back-and-forth — just clarity.">
        <FeatureCards
          cards={[
            { title: 'input brief or address.', body: 'start by entering your property goals or pasting an address. intelliprop’s intake makes it simple to set your strategy.' },
            { title: 'engine evaluation.', body: 'our proprietary ai engine analyses data, market comparables, risk factors, and yields using trusted market sources.' },
            { title: 'get your report.', body: 'receive an intelliscore™ report instantly: see executive summary, comparables, risk bands, and recommendations.' }
          ]}
        />
      </Section>

      <Section title="ready to get your intelliscore™?" lead="see intelliprop in action. discover what data-driven clarity feels like." className="text-center">
        <Button href="/generate-report">generate a report</Button>
      </Section>
    </>
  );
}


