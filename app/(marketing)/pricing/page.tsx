import Section from '@/components/Section';
import PricingTable from '@/components/PricingTable';

export const metadata = { title: 'Pricing — intelliprop®' };

export default function PricingPage() {
  return (
    <>
      <Section title="Pricing" lead="Modern, flexible pricing for every property journey.">
        <PricingTable />
      </Section>
      <Section title="Compare all plans at a glance" lead="Choose the intelliprop® plan that fits your property journey. Start with a free report, buy individual reports as needed, or subscribe for unlimited access. All plans include your intelliscore™ and clear, visual insights." />
    </>
  );
}


