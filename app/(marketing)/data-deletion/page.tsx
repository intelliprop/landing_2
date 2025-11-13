import Section from '@/components/Section';
import Button from '@/components/Button';

export const metadata = { 
  title: 'Data Deletion — intelliprop®',
  description: 'Instructions for requesting data deletion from intelliprop®.'
};

export default function DataDeletionPage() {
  return (
    <>
      <Section className="text-center">
        <h1 className="h1">data deletion</h1>
        <p className="lead mt-4 max-w-2xl mx-auto">request deletion of your personal data and account information.</p>
      </Section>

      <Section>
        <div className="max-w-3xl mx-auto space-y-6 text-muted">
          <section>
            <h2 className="h2 mb-3 text-ink">how to request data deletion</h2>
            <p>you have the right to request deletion of your personal data at any time. to do so, please follow these steps:</p>
            <ol className="list-decimal list-inside space-y-3 ml-4 mt-4">
              <li>send an email to <a href="mailto:admin@intelliprop.com.au" className="text-primary hover:underline">admin@intelliprop.com.au</a> with the subject line "data deletion request"</li>
              <li>include your account email address and any account identifiers</li>
              <li>specify which data you would like deleted (account data, reports, payment information, etc.)</li>
              <li>we will confirm receipt of your request within 48 hours</li>
            </ol>
          </section>

          <section>
            <h2 className="h2 mb-3 text-ink">what gets deleted</h2>
            <p>when you request data deletion, we will permanently remove:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>your account information (name, email, preferences)</li>
              <li>all property reports and intelliscore™ assessments associated with your account</li>
              <li>saved searches and preferences</li>
              <li>any cached or stored personal data</li>
            </ul>
          </section>

          <section>
            <h2 className="h2 mb-3 text-ink">data we may retain</h2>
            <p>we may retain certain information as required by law or for legitimate business purposes:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>transaction records for financial and tax compliance (7 years in australia)</li>
              <li>anonymized usage statistics that cannot identify you</li>
              <li>data necessary to prevent fraud or abuse</li>
            </ul>
          </section>

          <section>
            <h2 className="h2 mb-3 text-ink">processing time</h2>
            <p>we will process your data deletion request within 30 days of receipt. you will receive a confirmation email once your data has been permanently deleted from our systems.</p>
          </section>

          <section>
            <h2 className="h2 mb-3 text-ink">account cancellation</h2>
            <p>requesting data deletion will also cancel your account and any active subscriptions. you will not be able to access your account or reports after deletion is complete.</p>
          </section>

          <section className="rounded-2xl bg-bgAlt p-6 sm:p-8 mt-6 sm:mt-8">
            <h2 className="h2 mb-4 text-ink">ready to proceed?</h2>
            <p className="mb-6 text-sm sm:text-base">send us an email to request data deletion:</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button href="mailto:admin@intelliprop.com.au?subject=Data%20Deletion%20Request">send deletion request</Button>
              <Button href="/contact" variant="secondary">contact support</Button>
            </div>
          </section>
        </div>
      </Section>
    </>
  );
}

