import Section from '@/components/Section';
import PricingTable from '@/components/PricingTable';

export const metadata = { title: 'Pricing — intelliprop' };

export default function PricingPage() {
  return (
    <>
      <Section title="Pricing" lead="Modern, flexible pricing for every property journey.">
        <PricingTable />
      </Section>
      <Section title="Compare all plans at a glance" lead="Choose the intelliprop plan that fits your workflow. Switch between monthly and yearly options, and easily upgrade or cancel anytime. Highlight: Professional unlocks unlimited reporting and analytics customization." />
    </>
  );
}


