import Section from '@/components/Section';
import Button from '@/components/Button';
import Link from 'next/link';

export const metadata = { 
  title: 'Getting started with intelliprop — intelliprop',
  description: 'Learn how to use intelliprop to generate property intelligence reports and make informed property decisions.'
};

export default function GettingStartedGuide() {
  return (
    <>
      <Section className="text-center">
        <h1 className="h1">Getting started with intelliprop</h1>
        <p className="lead mt-3 max-w-2xl mx-auto">Your complete guide to using intelliprop for smarter property decisions.</p>
      </Section>

      <Section>
        <div className="max-w-3xl mx-auto space-y-8">
          <section className="space-y-4">
            <h2 className="h2 text-ink dark:text-dark-ink">What is intelliprop?</h2>
            <p className="text-muted dark:text-dark-muted leading-relaxed">
              intelliprop is an AI‑powered property intelligence platform that transforms complex market data into clear, actionable insights. Whether you're buying your first home, expanding your investment portfolio, or advising clients, intelliprop delivers comprehensive property analysis in minutes—not days.
            </p>
            <p className="text-muted dark:text-dark-muted leading-relaxed">
              Our proprietary intelliscore™ system evaluates properties across multiple dimensions: yield potential, growth prospects, livability factors, and risk assessment. Every report is built for reliability, transparency, and professional‑grade quality.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="h2 text-ink dark:text-dark-ink">How to generate your first report</h2>
            <div className="space-y-3">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center font-bold">1</div>
                <div>
                  <h3 className="font-semibold mb-1 text-ink dark:text-dark-ink">Choose your workflow</h3>
                  <p className="text-muted dark:text-dark-muted text-sm">Start with a brief report to describe your property goals, or enter a specific address for detailed analysis. Both workflows leverage the same powerful AI engine.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center font-bold">2</div>
                <div>
                  <h3 className="font-semibold mb-1 text-ink dark:text-dark-ink">Provide your requirements</h3>
                  <p className="text-muted dark:text-dark-muted text-sm">For brief reports: describe your budget, location preferences, property type, and investment goals. For address reports: paste the property address and let our engine analyze it.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center font-bold">3</div>
                <div>
                  <h3 className="font-semibold mb-1 text-ink dark:text-dark-ink">Receive your intelliscore™</h3>
                  <p className="text-muted dark:text-dark-muted text-sm">Within minutes, you'll receive a comprehensive report including an executive summary, market comparables, risk bands, yield analysis, and actionable recommendations.</p>
                </div>
              </div>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="h2 text-ink dark:text-dark-ink">Best practices for better results</h2>
            <div className="space-y-3">
              <div className="p-4 rounded-xl bg-bgAlt dark:bg-dark-bgAlt border border-border dark:border-dark-border">
                <h3 className="font-semibold mb-2 text-ink dark:text-dark-ink">Be specific in your brief</h3>
                <p className="text-muted dark:text-dark-muted text-sm">Include details like budget range, preferred suburbs, minimum bedrooms, proximity to transport, and any deal‑breakers. The more specific you are, the more targeted your recommendations.</p>
              </div>
              <div className="p-4 rounded-xl bg-bgAlt dark:bg-dark-bgAlt border border-border dark:border-dark-border">
                <h3 className="font-semibold mb-2 text-ink dark:text-dark-ink">Review comparables carefully</h3>
                <p className="text-muted dark:text-dark-muted text-sm">Each report includes market comparables that help validate pricing. Use these to understand where your target property sits in the market and negotiate with confidence.</p>
              </div>
              <div className="p-4 rounded-xl bg-bgAlt dark:bg-dark-bgAlt border border-border dark:border-dark-border">
                <h3 className="font-semibold mb-2 text-ink dark:text-dark-ink">Pay attention to risk bands</h3>
                <p className="text-muted dark:text-dark-muted text-sm">Our risk assessment flags potential concerns like market volatility, oversupply, or infrastructure changes. Factor these into your decision‑making process.</p>
              </div>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="h2 text-ink dark:text-dark-ink">Who benefits from intelliprop?</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-bgAlt dark:bg-dark-bgAlt border border-border dark:border-dark-border">
                <h3 className="font-semibold mb-2 text-primary">First‑home buyers</h3>
                <p className="text-muted dark:text-dark-muted text-sm">Make informed decisions with comprehensive suburb analysis, school zones, transport access, and growth potential.</p>
              </div>
              <div className="p-4 rounded-xl bg-bgAlt dark:bg-dark-bgAlt border border-border dark:border-dark-border">
                <h3 className="font-semibold mb-2 text-primary">Property investors</h3>
                <p className="text-muted dark:text-dark-muted text-sm">Analyze yield potential, rental demand, and capital growth prospects across multiple properties quickly.</p>
              </div>
              <div className="p-4 rounded-xl bg-bgAlt dark:bg-dark-bgAlt border border-border dark:border-dark-border">
                <h3 className="font-semibold mb-2 text-primary">Real‑estate professionals</h3>
                <p className="text-muted dark:text-dark-muted text-sm">Provide clients with data‑driven insights and professional‑grade reports that support lending applications.</p>
              </div>
              <div className="p-4 rounded-xl bg-bgAlt dark:bg-dark-bgAlt border border-border dark:border-dark-border">
                <h3 className="font-semibold mb-2 text-primary">Property advisors</h3>
                <p className="text-muted dark:text-dark-muted text-sm">Scale your advisory services with instant, reliable property analysis for multiple clients.</p>
              </div>
            </div>
          </section>

          <section className="rounded-2xl bg-bgAlt dark:bg-dark-bgAlt p-6 sm:p-8 border border-border dark:border-dark-border text-center">
            <h2 className="h2 mb-4 text-ink dark:text-dark-ink">Ready to get started?</h2>
            <p className="text-muted dark:text-dark-muted mb-6">Generate your first property intelligence report in minutes.</p>
            <Button href="https://platform.intelliprop.com.au">Generate a report</Button>
          </section>
        </div>
      </Section>
    </>
  );
}

