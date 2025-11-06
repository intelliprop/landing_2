import Section from '@/components/Section';
import ReportSelector from '@/components/ReportSelector';
import Button from '@/components/Button';

export const metadata = { title: 'Generate a report — intelliprop' };

export default function GenerateReportPage() {
  return (
    <>
      <Section className="text-center">
        <h1 className="h1 text-ink dark:text-dark-ink">Generate a report.</h1>
        <p className="lead mt-3 text-muted dark:text-dark-muted">Start with a brief or enter an address to see intelliprop's Intelliscore™.</p>
        <div className="mt-5"><Button href="#start" variant="primary">Begin report</Button></div>
      </Section>
      <Section id="start">
        <ReportSelector />
      </Section>
    </>
  );
}


