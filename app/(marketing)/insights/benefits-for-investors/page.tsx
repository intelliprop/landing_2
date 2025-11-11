import Section from '@/components/Section';
import Button from '@/components/Button';

export const metadata = { 
  title: 'Benefits for Property Investors — intelliprop',
  description: 'Discover how IntelliProp helps property investors make faster, smarter investment decisions with data-driven insights.'
};

export default function BenefitsForInvestors() {
  return (
    <>
      <Section className="text-center">
        <h1 className="h1">why investors choose intelliprop</h1>
        <p className="lead mt-3 max-w-2xl mx-auto">accelerate your property investment strategy with instant, comprehensive property intelligence.</p>
      </Section>

      <Section>
        <div className="max-w-3xl mx-auto space-y-8">
          <section className="space-y-4">
            <h2 className="h2 text-ink dark:text-dark-ink">save time and make faster decisions</h2>
            <p className="text-muted dark:text-dark-muted leading-relaxed">
              traditional property research can take days or weeks. intelliprop delivers comprehensive property analysis in minutes, allowing you to evaluate more opportunities and move quickly on promising deals. no more waiting for manual research or sifting through multiple data sources.
            </p>
            <div className="grid sm:grid-cols-2 gap-4 mt-4">
              <div className="p-4 rounded-xl bg-bgAlt dark:bg-dark-bgAlt border border-border dark:border-dark-border">
                <div className="text-3xl font-bold text-primary mb-2">minutes</div>
                <p className="text-sm text-muted dark:text-dark-muted">report generation time</p>
              </div>
              <div className="p-4 rounded-xl bg-bgAlt dark:bg-dark-bgAlt border border-border dark:border-dark-border">
                <div className="text-3xl font-bold text-primary mb-2">days</div>
                <p className="text-sm text-muted dark:text-dark-muted">traditional research time</p>
              </div>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="h2 text-ink dark:text-dark-ink">key benefits for investors</h2>
            <div className="space-y-4">
              <div className="p-5 rounded-xl bg-bgAlt dark:bg-dark-bgAlt border border-border dark:border-dark-border">
                <h3 className="font-semibold mb-2 text-primary flex items-center gap-2">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  comprehensive yield analysis
                </h3>
                <p className="text-muted dark:text-dark-muted text-sm">
                  get detailed rental yield calculations, occupancy cost analysis, and cashflow projections. understand exactly how a property will perform as an investment before you commit.
                </p>
              </div>

              <div className="p-5 rounded-xl bg-bgAlt dark:bg-dark-bgAlt border border-border dark:border-dark-border">
                <h3 className="font-semibold mb-2 text-primary flex items-center gap-2">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  market comparables at scale
                </h3>
                <p className="text-muted dark:text-dark-muted text-sm">
                  instantly access comparable sales and rental data. validate pricing, identify opportunities, and negotiate with confidence using data-backed insights.
                </p>
              </div>

              <div className="p-5 rounded-xl bg-bgAlt dark:bg-dark-bgAlt border border-border dark:border-dark-border">
                <h3 className="font-semibold mb-2 text-primary flex items-center gap-2">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  risk assessment and mitigation
                </h3>
                <p className="text-muted dark:text-dark-muted text-sm">
                  identify potential risks early—market volatility, oversupply concerns, infrastructure changes, and economic sensitivities. factor these into your investment strategy and risk management.
                </p>
              </div>

              <div className="p-5 rounded-xl bg-bgAlt dark:bg-dark-bgAlt border border-border dark:border-dark-border">
                <h3 className="font-semibold mb-2 text-primary flex items-center gap-2">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  portfolio optimization
                </h3>
                <p className="text-muted dark:text-dark-muted text-sm">
                  compare multiple properties quickly to build a balanced portfolio. diversify across different risk profiles, yield ranges, and growth prospects with data-driven decision-making.
                </p>
              </div>

              <div className="p-5 rounded-xl bg-bgAlt dark:bg-dark-bgAlt border border-border dark:border-dark-border">
                <h3 className="font-semibold mb-2 text-primary flex items-center gap-2">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  professional-grade reports
                </h3>
                <p className="text-muted dark:text-dark-muted text-sm">
                  export pdf-ready reports that meet professional standards. use reports for lender applications, client presentations, and investment documentation.
                </p>
              </div>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="h2 text-ink dark:text-dark-ink">investment strategies made easier</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-bgAlt dark:bg-dark-bgAlt border border-border dark:border-dark-border">
                <h3 className="font-semibold mb-2 text-ink dark:text-dark-ink">yield-focused investing</h3>
                <p className="text-sm text-muted dark:text-dark-muted mb-3">identify high-yield properties with positive cashflow potential. perfect for investors seeking immediate rental income.</p>
                <ul className="space-y-1 text-xs text-muted dark:text-dark-muted">
                  <li>• rental yield analysis</li>
                  <li>• occupancy cost optimization</li>
                  <li>• cashflow projections</li>
                </ul>
              </div>
              <div className="p-4 rounded-xl bg-bgAlt dark:bg-dark-bgAlt border border-border dark:border-dark-border">
                <h3 className="font-semibold mb-2 text-ink dark:text-dark-ink">capital growth strategy</h3>
                <p className="text-sm text-muted dark:text-dark-muted mb-3">find properties with strong appreciation potential based on infrastructure, demographics, and market trends.</p>
                <ul className="space-y-1 text-xs text-muted dark:text-dark-muted">
                  <li>• growth prospect scoring</li>
                  <li>• infrastructure analysis</li>
                  <li>• demographic trends</li>
                </ul>
              </div>
              <div className="p-4 rounded-xl bg-bgAlt dark:bg-dark-bgAlt border border-border dark:border-dark-border">
                <h3 className="font-semibold mb-2 text-ink dark:text-dark-ink">balanced portfolio</h3>
                <p className="text-sm text-muted dark:text-dark-muted mb-3">build a diversified portfolio with a mix of yield, growth, and risk profiles tailored to your investment goals.</p>
                <ul className="space-y-1 text-xs text-muted dark:text-dark-muted">
                  <li>• multi-property comparison</li>
                  <li>• risk diversification</li>
                  <li>• portfolio optimization</li>
                </ul>
              </div>
              <div className="p-4 rounded-xl bg-bgAlt dark:bg-dark-bgAlt border border-border dark:border-dark-border">
                <h3 className="font-semibold mb-2 text-ink dark:text-dark-ink">risk-averse investing</h3>
                <p className="text-sm text-muted dark:text-dark-muted mb-3">identify stable, low-risk properties in established markets with consistent performance.</p>
                <ul className="space-y-1 text-xs text-muted dark:text-dark-muted">
                  <li>• risk band analysis</li>
                  <li>• market stability indicators</li>
                  <li>• conservative projections</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="h2 text-ink dark:text-dark-ink">real investor results</h2>
            <div className="space-y-3">
              <div className="p-4 rounded-xl bg-bgAlt dark:bg-dark-bgAlt border border-border dark:border-dark-border">
                <p className="text-sm text-muted dark:text-dark-muted italic mb-2">
                  "intelliprop helped me evaluate 15 properties in a single day. i found three excellent opportunities i would have missed otherwise, and saved weeks of research time."
                </p>
                <p className="text-xs text-muted dark:text-dark-muted">— property investor, sydney</p>
              </div>
              <div className="p-4 rounded-xl bg-bgAlt dark:bg-dark-bgAlt border border-border dark:border-dark-border">
                <p className="text-sm text-muted dark:text-dark-muted italic mb-2">
                  "the yield analysis is spot-on. i use intelliprop reports to validate my own research and present to lenders. it's become an essential part of my investment process."
                </p>
                <p className="text-xs text-muted dark:text-dark-muted">— portfolio investor, melbourne</p>
              </div>
            </div>
          </section>

          <section className="rounded-2xl bg-bgAlt dark:bg-dark-bgAlt p-6 sm:p-8 border border-border dark:border-dark-border text-center">
            <h2 className="h2 mb-4 text-ink dark:text-dark-ink">start investing smarter</h2>
            <p className="text-muted dark:text-dark-muted mb-6">generate your first investment property report and see the difference data-driven insights make.</p>
            <Button href="https://platform.intelliprop.com.au">generate a report</Button>
          </section>
        </div>
      </Section>
    </>
  );
}

