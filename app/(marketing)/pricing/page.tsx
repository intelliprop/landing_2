import Section from '@/components/Section';
import PricingTable from '@/components/PricingTable';

export const metadata = { title: 'Pricing — intelliprop' };

export default function PricingPage() {
  return (
    <>
      <Section title="pricing" lead="modern, flexible pricing for every property journey.">
        <PricingTable />
      </Section>
      <Section title="compare all plans at a glance" lead="choose the intelliprop plan that fits your workflow. switch between monthly and yearly options, and easily upgrade or cancel anytime. highlight: professional unlocks unlimited reporting and analytics customization." />
    </>
  );
}


