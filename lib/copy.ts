/**
 * Centralized copy for landing page
 * B2C-focused: First-home buyers and early investors
 * Clear, fast, affordable alternative to buyer's agents
 */

export const copy = {
  hero: {
    lines: [
      'Understand what you\'re buying.',
      'Before you buy it.',
      'intelliprop®.',
    ],
    sub: 'Turn confusing property data into clear, visual insights. See a property\'s potential, risks, and fit for your goals — in plain English, in 3 minutes, for $19.',
    ctaPrimary: 'Get my report',
    ctaGhost: 'See how it works',
  },
  mission: {
    title: 'our mission',
    body: 'We help everyday Australians — first-home buyers and early investors — understand what they\'re buying before they buy.',
    sub: 'We do this by turning confusing property data into clear, visual, human-readable insights that reveal a property\'s potential, risks, and fit for their goals. intelliprop® makes property research clear, fast, and at a fraction of the cost of a buyer\'s agent.',
    emphasized: ['clear', 'fast', 'affordable'],
  },
  howItWorks: {
    title: 'Choose your report type',
    subtitle: 'Three ways to get the property clarity you need:',
    reportTypes: [
      {
        id: 'brief',
        title: 'Property search brief',
        description: 'Tell us what you\'re looking for and we\'ll shortlist properties that match. Perfect if you don\'t know where to start your search.',
        icon: '🔍',
      },
      {
        id: 'property',
        title: 'Property analysis',
        description: 'Paste a property address and get a clear analysis. See if it\'s a good buy, what similar properties sold for, and what to watch out for.',
        icon: '🏠',
      },
      {
        id: 'suburb',
        title: 'Suburb report',
        description: 'Get insights on an entire suburb. See average prices, growth trends, rental potential, and what makes the area a good place to live or invest.',
        icon: '📍',
      },
    ],
  },
  intelliscore: {
    title: 'Your intelliscore™ — one clear number that tells you if a property fits your goals.',
    sub: 'Every report includes your intelliscore™ — a score from 0 to 100 that shows how well a property matches what you\'re looking for. No confusing spreadsheets or conflicting advice. Just one clear answer.',
    dimensions: ['growth potential', 'good place to live', 'rental income', 'things to watch'],
  },
  testimonials: {
    title: 'What people are saying',
    items: [
      {
        quote: 'I was so overwhelmed trying to figure out if a property was worth it. intelliprop® gave me one clear answer instead of hours of confusing research.',
        name: 'Alex M.',
        role: 'First home buyer',
      },
      {
        quote: 'At $19, this is a no-brainer. I saved thousands by avoiding a bad property, and I finally understood what I was looking at.',
        name: 'Jordan K.',
        role: 'First home buyer',
      },
      {
        quote: 'I can\'t afford a buyer\'s agent, but I needed real insights. This gave me professional-level analysis without the price tag.',
        name: 'Sam T.',
        role: 'Early investor',
      },
    ],
  },
  pricing: {
    title: 'Simple, transparent pricing',
    tiers: [
      {
        id: 'free_trial',
        label: 'Free',
        price: '$0',
        period: '',
        bullets: [
          '1 report (watermarked)',
        ],
        cta: 'Try for Free',
        highlight: false,
        comingSoon: false,
      },
      {
        id: 'single_report',
        label: 'Per Report',
        price: '$19',
        period: '',
        bullets: [
          'Single full report',
        ],
        cta: 'Buy a Report',
        highlight: false,
        comingSoon: false,
      },
      {
        id: 'starter_monthly',
        label: 'Starter',
        price: '$49',
        period: '/mo',
        bullets: [
          'Up to 5 reports / month',
        ],
        cta: 'Start Now',
        highlight: true,
        comingSoon: false,
      },
      {
        id: 'pro_monthly',
        label: 'Pro',
        price: '$199',
        period: '/mo',
        bullets: [
          'Up to 40 reports / month',
          'Branding + API',
        ],
        cta: 'Go Pro',
        highlight: false,
        comingSoon: false,
      },
      {
        id: 'business_custom',
        label: 'Business',
        price: 'Custom',
        period: '',
        bullets: [
          'Teams + CRM Integration',
        ],
        cta: 'Register Interest',
        highlight: false,
        comingSoon: true,
      },
    ],
    trust: [
      'clear, fast, and affordable',
      'reports ready in under 3 minutes',
      'unbiased insights you can trust',
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
