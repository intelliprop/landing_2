import Section from '@/components/Section';
import Button from '@/components/Button';

export const metadata = { 
  title: 'Understanding intelliscore™ — intelliprop',
  description: 'Learn how intelliscore™ works and how to interpret your property intelligence scores.'
};

export default function UnderstandingIntelliscore() {
  return (
    <>
      <Section className="text-center">
        <h1 className="h1">understanding intelliscore™</h1>
        <p className="lead mt-3 max-w-2xl mx-auto">how our proprietary scoring system evaluates property potential across multiple dimensions.</p>
      </Section>

      <Section>
        <div className="max-w-3xl mx-auto space-y-8">
          <section className="space-y-4">
            <h2 className="h2 text-ink dark:text-dark-ink">what is intelliscore™?</h2>
            <p className="text-muted dark:text-dark-muted leading-relaxed">
              intelliscore™ is a unified 0–100 score that blends yield potential, growth prospects, livability factors, and risk assessment into a single, actionable metric. it's designed to help you quickly understand how a property compares to market standards and aligns with your investment goals.
            </p>
            <p className="text-muted dark:text-dark-muted leading-relaxed">
              unlike single-metric scores, intelliscore™ considers multiple dimensions simultaneously, giving you a holistic view of property potential. a high score indicates strong overall performance across all factors, while lower scores may highlight areas of concern or opportunity.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="h2 text-ink dark:text-dark-ink">the four dimensions</h2>
            <div className="space-y-4">
              <div className="p-5 rounded-xl bg-bgAlt dark:bg-dark-bgAlt border border-border dark:border-dark-border">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 dark:bg-primary/20 flex items-center justify-center">
                    <span className="text-primary font-bold text-lg">Y</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold mb-2 text-ink dark:text-dark-ink">yield potential</h3>
                    <p className="text-muted dark:text-dark-muted text-sm mb-2">measures rental income relative to property value. calculated using current market rents and property valuations. higher yields indicate better cashflow potential for investors.</p>
                    <p className="text-xs text-muted dark:text-dark-muted"><strong>good for:</strong> investors seeking positive cashflow, rental property portfolios</p>
                  </div>
                </div>
              </div>

              <div className="p-5 rounded-xl bg-bgAlt dark:bg-dark-bgAlt border border-border dark:border-dark-border">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 dark:bg-primary/20 flex items-center justify-center">
                    <span className="text-primary font-bold text-lg">G</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold mb-2 text-ink dark:text-dark-ink">growth prospects</h3>
                    <p className="text-muted dark:text-dark-muted text-sm mb-2">evaluates capital appreciation potential based on historical trends, infrastructure developments, demographic shifts, and market dynamics. considers both short-term and long-term growth patterns.</p>
                    <p className="text-xs text-muted dark:text-dark-muted"><strong>good for:</strong> long-term investors, owner-occupiers building equity</p>
                  </div>
                </div>
              </div>

              <div className="p-5 rounded-xl bg-bgAlt dark:bg-dark-bgAlt border border-border dark:border-dark-border">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 dark:bg-primary/20 flex items-center justify-center">
                    <span className="text-primary font-bold text-lg">L</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold mb-2 text-ink dark:text-dark-ink">livability factors</h3>
                    <p className="text-muted dark:text-dark-muted text-sm mb-2">assesses quality of life elements including proximity to schools, transport, amenities, safety, and neighborhood character. combines objective data with local market perceptions.</p>
                    <p className="text-xs text-muted dark:text-dark-muted"><strong>good for:</strong> owner-occupiers, families, lifestyle-focused buyers</p>
                  </div>
                </div>
              </div>

              <div className="p-5 rounded-xl bg-bgAlt dark:bg-dark-bgAlt border border-border dark:border-dark-border">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 dark:bg-primary/20 flex items-center justify-center">
                    <span className="text-primary font-bold text-lg">R</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold mb-2 text-ink dark:text-dark-ink">risk assessment</h3>
                    <p className="text-muted dark:text-dark-muted text-sm mb-2">identifies potential concerns including market volatility, oversupply risks, infrastructure changes, environmental factors, and economic sensitivities. lower risk scores indicate more stable investments.</p>
                    <p className="text-xs text-muted dark:text-dark-muted"><strong>good for:</strong> risk-averse investors, conservative buyers</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="h2 text-ink dark:text-dark-ink">how to interpret your score</h2>
            <div className="space-y-3">
              <div className="p-4 rounded-xl bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800">
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-2xl font-bold text-green-600 dark:text-green-400">80-100</span>
                  <span className="font-semibold text-ink dark:text-dark-ink">excellent</span>
                </div>
                <p className="text-sm text-muted dark:text-dark-muted">strong performance across all dimensions. highly suitable for your stated goals with minimal risk factors.</p>
              </div>
              <div className="p-4 rounded-xl bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800">
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-2xl font-bold text-blue-600 dark:text-blue-400">60-79</span>
                  <span className="font-semibold text-ink dark:text-dark-ink">good</span>
                </div>
                <p className="text-sm text-muted dark:text-dark-muted">solid performance with some areas of strength. review detailed breakdown to understand trade-offs.</p>
              </div>
              <div className="p-4 rounded-xl bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800">
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-2xl font-bold text-yellow-600 dark:text-yellow-400">40-59</span>
                  <span className="font-semibold text-ink dark:text-dark-ink">moderate</span>
                </div>
                <p className="text-sm text-muted dark:text-dark-muted">mixed performance with notable strengths and weaknesses. carefully review risk factors and comparables.</p>
              </div>
              <div className="p-4 rounded-xl bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800">
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-2xl font-bold text-red-600 dark:text-red-400">0-39</span>
                  <span className="font-semibold text-ink dark:text-dark-ink">caution</span>
                </div>
                <p className="text-sm text-muted dark:text-dark-muted">significant concerns across multiple dimensions. review detailed analysis and consider alternative properties or strategies.</p>
              </div>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="h2 text-ink dark:text-dark-ink">using intelliscore™ effectively</h2>
            <ul className="space-y-2 text-muted dark:text-dark-muted">
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">•</span>
                <span><strong>compare properties:</strong> use scores to quickly compare multiple properties and identify the best fit for your goals.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">•</span>
                <span><strong>read the breakdown:</strong> always review the detailed dimension scores to understand why a property scored as it did.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">•</span>
                <span><strong>consider your priorities:</strong> a lower overall score may still be excellent if it excels in dimensions most important to you.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">•</span>
                <span><strong>use with comparables:</strong> combine intelliscore™ with market comparables to validate pricing and market position.</span>
              </li>
            </ul>
          </section>

          <section className="rounded-2xl bg-bgAlt dark:bg-dark-bgAlt p-6 sm:p-8 border border-border dark:border-dark-border text-center">
            <h2 className="h2 mb-4 text-ink dark:text-dark-ink">get your intelliscore™</h2>
            <p className="text-muted dark:text-dark-muted mb-6">generate a property report to see intelliscore™ in action.</p>
            <Button href="https://platform.intelliprop.com.au">generate a report</Button>
          </section>
        </div>
      </Section>
    </>
  );
}

