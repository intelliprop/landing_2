import Button from './Button';

type Plan = {
  name: string;
  price: string;
  features: string[];
  cta: { label: string; href: string };
};

export default function PricingTable() {
  const plans: Plan[] = [
    {
      name: 'starter',
      price: 'A$19/month',
      features: ['5 reports/month', 'base intelliscore™', 'PDF export'],
      cta: { label: 'start now', href: '/generate-report' }
    },
    {
      name: 'professional',
      price: 'A$99/month',
      features: ['unlimited reports', 'advanced intelliscore™', 'saved & visualized data'],
      cta: { label: 'join the beta', href: '/beta-signup' }
    },
    {
      name: 'enterprise',
      price: 'custom',
      features: ['multi-user dashboard', 'API & white-label', 'analytics integration'],
      cta: { label: 'contact sales', href: '/contact' }
    }
  ];

  return (
    <div className="grid md:grid-cols-3 gap-6">
      {plans.map((p) => (
        <div key={p.name} className="rounded-2xl border border-border p-6 shadow-sm bg-white">
          <div className="text-muted mb-2">{p.name}</div>
          <div className="text-3xl font-extrabold mb-4">{p.price}</div>
          <ul className="space-y-2 mb-6 text-muted">
            {p.features.map((f) => (
              <li key={f} className="flex items-start gap-2">
                <span className="mt-1 inline-block h-2 w-2 rounded-full bg-primary" /> {f}
              </li>
            ))}
          </ul>
          <Button href={p.cta.href}>{p.cta.label} / {p.cta.href.replace('/', '')}</Button>
        </div>
      ))}
    </div>
  );
}


