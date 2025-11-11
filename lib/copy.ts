/**
 * Centralized copy for landing page
 * Helps with localization and A/B testing later
 */

export const copy = {
  hero: {
    lines: [
      'AI that understands property.',
      'Insights that move markets.',
      'intelliprop.',
    ],
    sub: 'intelliprop turns complex market data into simple, decision-ready insights — built by brokers, for buyers.',
    ctaPrimary: 'Generate report',
    ctaGhost: 'See how it works',
  },
  mission: {
    title: 'our mission',
    body: 'To make property intelligence simple, human, and fast.',
    sub: 'Every property has a story. intelliprop makes it clear — powered by data, told by AI.',
    emphasized: ['simple', 'human', 'fast'],
  },
  howItWorks: {
    title: 'How it works',
    steps: [
      {
        id: 'collect',
        title: 'collect',
        description: 'Enter an address or suburb.',
      },
      {
        id: 'analyse',
        title: 'analyse',
        description: 'AI evaluates growth, yield, livability.',
      },
      {
        id: 'research',
        title: 'research',
        description: 'We fetch market signals and trends.',
      },
      {
        id: 'report',
        title: 'report',
        description: 'You get a human-readable, narrative report.',
      },
    ],
  },
  intelliscore: {
    title: 'Meet intelliscore — the smarter way to measure property fit.',
    sub: 'Each report includes an intelliscore — an AI-calculated alignment between your goals and market reality.',
    dimensions: ['growth', 'livability', 'yield', 'risk'],
  },
  testimonials: {
    title: 'Trusted by property professionals',
    items: [
      {
        quote: 'intelliprop transformed how we evaluate properties. The insights are spot-on and save us hours.',
        name: 'Sarah Chen',
        role: 'Buyers Agent',
      },
      {
        quote: 'As a broker, I rely on intelliprop to give my clients clear, data-driven recommendations.',
        name: 'Michael Torres',
        role: 'Broker at inovayt',
      },
      {
        quote: 'The intelliscore alone is worth it. It aligns perfectly with our investment criteria.',
        name: 'Emma Wilson',
        role: 'Property Investor',
      },
    ],
  },
  pricing: {
    title: 'Choose your plan',
    buyers: {
      title: 'For buyers & investors',
      price: '$19',
      period: 'per report',
      bullets: [
        'One-time property report',
        'Full intelliscore breakdown',
        'Market comparables',
        'Risk assessment',
      ],
      cta: 'Start now',
    },
    brokers: {
      title: 'For brokers & advisors',
      price: '$149',
      period: 'per month',
      bullets: [
        'Unlimited reports',
        'White-label options',
        'API access',
        'Priority support',
      ],
      cta: 'Book a demo',
    },
    trust: [
      'used by top brokers at inovayt',
      'reports generated in under 3 minutes',
      'powered by real market data and AI',
    ],
  },
  footer: {
    tagline: 'built by brokers, powered by ai.',
    links: {
      privacy: 'Privacy',
      terms: 'Terms',
      dataDeletion: 'Data deletion',
      careers: 'Careers',
    },
  },
} as const;

