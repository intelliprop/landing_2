import Section from '@/components/Section';
import Button from '@/components/Button';
import Link from 'next/link';

export const metadata = { 
  title: 'Getting Started with IntelliProp — intelliprop',
  description: 'Learn how to use IntelliProp to generate property intelligence reports and make informed property decisions.'
};

export default function GettingStartedGuide() {
  return (
    <>
      <Section className="text-center">
        <h1 className="h1">getting started with intelliprop</h1>
        <p className="lead mt-3 max-w-2xl mx-auto">your complete guide to using intelliprop for smarter property decisions.</p>
      </Section>

      <Section>
        <div className="max-w-3xl mx-auto space-y-8">
          <section className="space-y-4">
            <h2 className="h2 text-ink dark:text-dark-ink">what is intelliprop?</h2>
            <p className="text-muted dark:text-dark-muted leading-relaxed">
              intelliprop is an ai-powered property intelligence platform that transforms complex market data into clear, actionable insights. whether you're buying your first home, expanding your investment portfolio, or advising clients, intelliprop delivers comprehensive property analysis in minutes—not days.
            </p>
            <p className="text-muted dark:text-dark-muted leading-relaxed">
              our proprietary intelliscore™ system evaluates properties across multiple dimensions: yield potential, growth prospects, livability factors, and risk assessment. every report is built for reliability, transparency, and professional-grade quality.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="h2 text-ink dark:text-dark-ink">how to generate your first report</h2>
            <div className="space-y-3">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center font-bold">1</div>
                <div>
                  <h3 className="font-semibold mb-1 text-ink dark:text-dark-ink">choose your workflow</h3>
                  <p className="text-muted dark:text-dark-muted text-sm">start with a brief report to describe your property goals, or enter a specific address for detailed analysis. both workflows leverage the same powerful ai engine.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center font-bold">2</div>
                <div>
                  <h3 className="font-semibold mb-1 text-ink dark:text-dark-ink">provide your requirements</h3>
                  <p className="text-muted dark:text-dark-muted text-sm">for brief reports: describe your budget, location preferences, property type, and investment goals. for address reports: paste the property address and let our engine analyze it.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center font-bold">3</div>
                <div>
                  <h3 className="font-semibold mb-1 text-ink dark:text-dark-ink">receive your intelliscore™</h3>
                  <p className="text-muted dark:text-dark-muted text-sm">within minutes, you'll receive a comprehensive report including executive summary, market comparables, risk bands, yield analysis, and actionable recommendations.</p>
                </div>
              </div>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="h2 text-ink dark:text-dark-ink">best practices for better results</h2>
            <div className="space-y-3">
              <div className="p-4 rounded-xl bg-bgAlt dark:bg-dark-bgAlt border border-border dark:border-dark-border">
                <h3 className="font-semibold mb-2 text-ink dark:text-dark-ink">be specific in your brief</h3>
                <p className="text-muted dark:text-dark-muted text-sm">include details like budget range, preferred suburbs, minimum bedrooms, proximity to transport, and any deal-breakers. the more specific you are, the more targeted your recommendations.</p>
              </div>
              <div className="p-4 rounded-xl bg-bgAlt dark:bg-dark-bgAlt border border-border dark:border-dark-border">
                <h3 className="font-semibold mb-2 text-ink dark:text-dark-ink">review comparables carefully</h3>
                <p className="text-muted dark:text-dark-muted text-sm">each report includes market comparables that help validate pricing. use these to understand where your target property sits in the market and negotiate with confidence.</p>
              </div>
              <div className="p-4 rounded-xl bg-bgAlt dark:bg-dark-bgAlt border border-border dark:border-dark-border">
                <h3 className="font-semibold mb-2 text-ink dark:text-dark-ink">pay attention to risk bands</h3>
                <p className="text-muted dark:text-dark-muted text-sm">our risk assessment flags potential concerns like market volatility, oversupply, or infrastructure changes. factor these into your decision-making process.</p>
              </div>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="h2 text-ink dark:text-dark-ink">who benefits from intelliprop?</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-bgAlt dark:bg-dark-bgAlt border border-border dark:border-dark-border">
                <h3 className="font-semibold mb-2 text-primary">first home buyers</h3>
                <p className="text-muted dark:text-dark-muted text-sm">make informed decisions with comprehensive suburb analysis, school zones, transport access, and growth potential.</p>
              </div>
              <div className="p-4 rounded-xl bg-bgAlt dark:bg-dark-bgAlt border border-border dark:border-dark-border">
                <h3 className="font-semibold mb-2 text-primary">property investors</h3>
                <p className="text-muted dark:text-dark-muted text-sm">analyze yield potential, rental demand, and capital growth prospects across multiple properties quickly.</p>
              </div>
              <div className="p-4 rounded-xl bg-bgAlt dark:bg-dark-bgAlt border border-border dark:border-dark-border">
                <h3 className="font-semibold mb-2 text-primary">real estate professionals</h3>
                <p className="text-muted dark:text-dark-muted text-sm">provide clients with data-driven insights and professional-grade reports that support lending applications.</p>
              </div>
              <div className="p-4 rounded-xl bg-bgAlt dark:bg-dark-bgAlt border border-border dark:border-dark-border">
                <h3 className="font-semibold mb-2 text-primary">property advisors</h3>
                <p className="text-muted dark:text-dark-muted text-sm">scale your advisory services with instant, reliable property analysis for multiple clients.</p>
              </div>
            </div>
          </section>

          <section className="rounded-2xl bg-bgAlt dark:bg-dark-bgAlt p-6 sm:p-8 border border-border dark:border-dark-border text-center">
            <h2 className="h2 mb-4 text-ink dark:text-dark-ink">ready to get started?</h2>
            <p className="text-muted dark:text-dark-muted mb-6">generate your first property intelligence report in minutes.</p>
            <Button href="/generate-report">generate a report</Button>
          </section>
        </div>
      </Section>
    </>
  );
}

