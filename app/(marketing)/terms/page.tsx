import Section from '@/components/Section';

export const metadata = { 
  title: 'Terms of Service — intelliprop',
  description: 'Terms of service for intelliprop property intelligence platform.'
};

export default function TermsPage() {
  return (
    <>
      <Section>
        <h1 className="h1 mb-6">terms of service</h1>
        <div className="max-w-3xl space-y-6 text-muted">
          <p className="lead">last updated: {new Date().toLocaleDateString('en-AU', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
          
          <section>
            <h2 className="h2 mb-3 text-ink">1. acceptance of terms</h2>
            <p>by accessing or using intelliprop's services, you agree to be bound by these terms of service. if you disagree with any part of these terms, you may not access the service.</p>
          </section>

          <section>
            <h2 className="h2 mb-3 text-ink">2. description of service</h2>
            <p>intelliprop provides property intelligence and analysis services, including intelliscore™ assessments, market comparables, risk analysis, and yield calculations. our services are provided "as is" and we make no warranties regarding the accuracy or completeness of the information provided.</p>
          </section>

          <section>
            <h2 className="h2 mb-3 text-ink">3. user accounts</h2>
            <p>you are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account. you agree to notify us immediately of any unauthorized use of your account.</p>
          </section>

          <section>
            <h2 className="h2 mb-3 text-ink">4. acceptable use</h2>
            <p>you agree not to:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>use the service for any illegal purpose</li>
              <li>attempt to gain unauthorized access to our systems</li>
              <li>interfere with or disrupt the service</li>
              <li>use automated systems to access the service without permission</li>
              <li>reproduce, duplicate, or resell the service without authorization</li>
            </ul>
          </section>

          <section>
            <h2 className="h2 mb-3 text-ink">5. payment terms</h2>
            <p>subscription fees are billed in advance on a monthly or annual basis. all fees are non-refundable unless required by law. you may cancel your subscription at any time, and cancellation will take effect at the end of the current billing period.</p>
          </section>

          <section>
            <h2 className="h2 mb-3 text-ink">6. intellectual property</h2>
            <p>all content, features, and functionality of the service, including intelliscore™, are owned by intelliprop and are protected by copyright, trademark, and other intellectual property laws. you may not use our trademarks or logos without our prior written consent.</p>
          </section>

          <section>
            <h2 className="h2 mb-3 text-ink">7. disclaimers</h2>
            <p>intelliprop provides property intelligence for informational purposes only. our reports are not a substitute for professional legal, financial, or real estate advice. we do not guarantee the accuracy, completeness, or timeliness of any information provided.</p>
          </section>

          <section>
            <h2 className="h2 mb-3 text-ink">8. limitation of liability</h2>
            <p>to the maximum extent permitted by law, intelliprop shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of the service.</p>
          </section>

          <section>
            <h2 className="h2 mb-3 text-ink">9. changes to terms</h2>
            <p>we reserve the right to modify these terms at any time. we will notify users of material changes via email or through the service. your continued use of the service after changes become effective constitutes acceptance of the new terms.</p>
          </section>

          <section>
            <h2 className="h2 mb-3 text-ink">10. contact information</h2>
            <p>for questions about these terms, please contact us at <a href="mailto:admin@intelliprop.com.au" className="text-primary hover:underline">admin@intelliprop.com.au</a>.</p>
          </section>
        </div>
      </Section>
    </>
  );
}
