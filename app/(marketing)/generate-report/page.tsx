import Section from '@/components/Section';
import ReportSelector from '@/components/ReportSelector';
import Button from '@/components/Button';

export const metadata = { title: 'Generate a report — intelliprop' };

export default function GenerateReportPage() {
  return (
    <>
      <Section className="text-center">
        <h1 className="h1">generate a report.</h1>
        <p className="lead mt-3">start with a brief or enter an address to see intelliprop’s intelliscore™.</p>
        <div className="mt-6"><Button href="#start" variant="primary">begin report</Button></div>
      </Section>
      <Section id="start">
        <ReportSelector />
      </Section>
    </>
  );
}


