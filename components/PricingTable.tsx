import Button from './Button';

type Plan = {
  id: string;
  name: string;
  price: string;
  period?: string;
  features: string[];
  cta: { label: string; href: string };
  highlight?: boolean;
  comingSoon?: boolean;
};

export default function PricingTable() {
  const plans: Plan[] = [
    {
      id: 'free_trial',
      name: 'Free',
      price: '$0',
      features: ['1 report (watermarked)'],
      cta: { label: 'Try for Free', href: 'https://platform.intelliprop.com.au' },
      highlight: false,
      comingSoon: false,
    },
    {
      id: 'single_report',
      name: 'Per Report',
      price: '$19',
      features: ['Single full report'],
      cta: { label: 'Buy a Report', href: 'https://platform.intelliprop.com.au' },
      highlight: false,
      comingSoon: false,
    },
    {
      id: 'starter_monthly',
      name: 'Starter',
      price: '$49',
      period: '/mo',
      features: ['Up to 5 reports / month'],
      cta: { label: 'Start Now', href: 'https://platform.intelliprop.com.au' },
      highlight: true,
      comingSoon: false,
    },
    {
      id: 'pro_monthly',
      name: 'Pro',
      price: '$199',
      period: '/mo',
      features: ['Up to 40 reports / month', 'Branding + API'],
      cta: { label: 'Go Pro', href: 'https://platform.intelliprop.com.au' },
      highlight: false,
      comingSoon: false,
    },
    {
      id: 'business_custom',
      name: 'Business',
      price: 'Custom',
      features: ['Teams + CRM Integration'],
      cta: { label: 'Register Interest', href: '/contact' },
      highlight: false,
      comingSoon: true,
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 sm:gap-5">
      {plans.map((p) => (
        <div
          key={p.id}
          className={`rounded-2xl border p-4 sm:p-5 shadow-sm bg-white dark:bg-dark-bgAlt ${
            p.highlight
              ? 'border-2 border-primary dark:border-primary'
              : 'border-border dark:border-dark-border'
          } ${p.comingSoon ? 'opacity-60 relative' : ''}`}
        >
          {p.comingSoon && (
            <div className="absolute top-2 right-2">
              <span className="text-xs bg-muted dark:bg-dark-muted text-white px-2 py-1 rounded">
                Coming Soon
              </span>
            </div>
          )}
          <div className="text-muted dark:text-dark-muted mb-2 text-sm sm:text-base uppercase tracking-wide">
            {p.name}
          </div>
          <div className="text-2xl sm:text-3xl font-extrabold mb-3 text-ink dark:text-dark-ink">
            {p.price}
            {p.period && <span className="text-lg text-muted dark:text-dark-muted">{p.period}</span>}
          </div>
          <ul className="space-y-1.5 mb-5 text-muted dark:text-dark-muted text-sm sm:text-base">
            {p.features.map((f) => (
              <li key={f} className="flex items-start gap-2">
                <span className="mt-1.5 inline-block h-2 w-2 rounded-full bg-primary flex-shrink-0" />{' '}
                <span>{f}</span>
              </li>
            ))}
          </ul>
          <Button
            href={p.cta.href}
            variant={p.highlight ? 'primary' : 'secondary'}
            className="w-full sm:w-auto"
          >
            {p.cta.label}
          </Button>
        </div>
      ))}
    </div>
  );
}
