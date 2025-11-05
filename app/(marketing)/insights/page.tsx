import Section from '@/components/Section';
import Button from '@/components/Button';
import Link from 'next/link';

export const metadata = { 
  title: 'Insights — intelliprop',
  description: 'Guides, tutorials, and insights on using IntelliProp for smarter property decisions.'
};

const articles = [
  {
    title: 'getting started with intelliprop',
    slug: 'getting-started-guide',
    description: 'complete guide to using intelliprop for smarter property decisions. learn how to generate reports and interpret results.',
    category: 'guides'
  },
  {
    title: 'understanding intelliscore™',
    slug: 'understanding-intelliscore',
    description: 'learn how our proprietary scoring system evaluates properties across yield, growth, livability, and risk dimensions.',
    category: 'guides'
  },
  {
    title: 'benefits for property investors',
    slug: 'benefits-for-investors',
    description: 'discover how intelliprop helps investors make faster, smarter decisions with comprehensive property intelligence.',
    category: 'benefits'
  }
];

export default function InsightsIndex() {
  return (
    <>
      <Section>
        <h1 className="h1 mb-4 text-ink dark:text-dark-ink">insights</h1>
        <p className="lead mb-8 text-muted dark:text-dark-muted">guides, tutorials, and insights to help you make smarter property decisions.</p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {articles.map((article) => (
            <Link 
              key={article.slug}
              href={`/insights/${article.slug}`}
              className="group block rounded-xl bg-bgAlt dark:bg-dark-bgAlt border border-border dark:border-dark-border p-5 sm:p-6 hover:border-primary dark:hover:border-primary transition-colors"
            >
              <div className="text-xs text-primary mb-2 uppercase tracking-wide">{article.category}</div>
              <h2 className="h2 mb-3 text-lg sm:text-xl text-ink dark:text-dark-ink group-hover:text-primary transition-colors">{article.title}</h2>
              <p className="text-sm text-muted dark:text-dark-muted leading-relaxed">{article.description}</p>
              <div className="mt-4 text-primary text-sm font-semibold group-hover:underline">
                read more →
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-8 pt-8 border-t border-border dark:border-dark-border">
          <h2 className="h2 mb-4 text-ink dark:text-dark-ink">product updates</h2>
          <p className="text-muted dark:text-dark-muted mb-4">stay informed about new features and improvements.</p>
          <Button href="/insights/updates" variant="secondary">view updates</Button>
        </div>
      </Section>
    </>
  );
}


