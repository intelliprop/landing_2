import Section from '@/components/Section';

export const metadata = { 
  title: 'Privacy Policy — intelliprop®',
  description: 'Privacy policy for intelliprop® property intelligence platform.'
};

export default function PrivacyPage() {
  return (
    <>
      <Section>
        <h1 className="h1 mb-6">privacy policy</h1>
        <div className="max-w-3xl space-y-6 text-muted">
          <p className="lead">last updated: {new Date().toLocaleDateString('en-AU', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
          
          <section>
            <h2 className="h2 mb-3 text-ink">1. introduction</h2>
            <p>intelliprop® ("we," "our," or "us") is committed to protecting your privacy. this privacy policy explains how we collect, use, disclose, and safeguard your information when you use our property intelligence platform.</p>
          </section>

          <section>
            <h2 className="h2 mb-3 text-ink">2. information we collect</h2>
            <p>we collect information that you provide directly to us, including:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>property addresses and search queries</li>
              <li>account information (name, email address)</li>
              <li>payment information (processed securely through third-party providers)</li>
              <li>communication preferences</li>
            </ul>
          </section>

          <section>
            <h2 className="h2 mb-3 text-ink">3. how we use your information</h2>
            <p>we use the information we collect to:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>generate property intelligence reports and intelliscore™ assessments</li>
              <li>provide, maintain, and improve our services</li>
              <li>process payments and manage your account</li>
              <li>send you technical notices and support messages</li>
              <li>respond to your comments and questions</li>
            </ul>
          </section>

          <section>
            <h2 className="h2 mb-3 text-ink">4. data security</h2>
            <p>we take data security seriously. all insights are generated securely using industry-standard encryption. your data is never shared with third parties for marketing or advertising purposes without your explicit consent.</p>
          </section>

          <section>
            <h2 className="h2 mb-3 text-ink">5. data retention</h2>
            <p>we retain your personal information for as long as necessary to provide our services and comply with legal obligations. you may request deletion of your data at any time by contacting us at <a href="mailto:admin@intelliprop.com.au" className="text-primary hover:underline">admin@intelliprop.com.au</a> or visiting our <a href="/data-deletion" className="text-primary hover:underline">data deletion page</a>.</p>
          </section>

          <section>
            <h2 className="h2 mb-3 text-ink">6. your rights</h2>
            <p>you have the right to:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>access your personal information</li>
              <li>correct inaccurate data</li>
              <li>request deletion of your data</li>
              <li>object to processing of your data</li>
              <li>data portability</li>
            </ul>
          </section>

          <section>
            <h2 className="h2 mb-3 text-ink">7. contact us</h2>
            <p>if you have questions about this privacy policy, please contact us at <a href="mailto:admin@intelliprop.com.au" className="text-primary hover:underline">admin@intelliprop.com.au</a>.</p>
          </section>
        </div>
      </Section>
    </>
  );
}
