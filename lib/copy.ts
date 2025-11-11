/**
 * Centralized copy for landing page
 * B2C-friendly, simple language for everyday property buyers
 */

export const copy = {
  hero: {
    lines: [
      'Know if a property is right for you.',
      'Before you make an offer.',
      'intelliprop.',
    ],
    sub: 'Get a clear, easy-to-understand report on any property in minutes. No confusing jargon — just the facts you need to make a smart decision.',
    ctaPrimary: 'Get my report',
    ctaGhost: 'See how it works',
  },
  mission: {
    title: 'our mission',
    body: 'To make buying property simple, clear, and stress-free.',
    sub: 'Buying a home or investment property is a big decision. We give you the information you need, in plain English, so you can feel confident.',
    emphasized: ['simple', 'clear', 'stress-free'],
  },
  howItWorks: {
    title: 'How it works',
    steps: [
      {
        id: 'collect',
        title: 'Tell us the address',
        description: 'Just paste the property address or tell us the suburb you\'re interested in.',
      },
      {
        id: 'analyse',
        title: 'We check everything',
        description: 'Our system looks at prices, rental potential, growth trends, and the local area.',
      },
      {
        id: 'research',
        title: 'We gather the facts',
        description: 'We pull together recent sales, rental prices, and what\'s happening in the area.',
      },
      {
        id: 'report',
        title: 'You get your report',
        description: 'A simple report that tells you if it\'s a good buy, what to watch out for, and what similar properties sold for.',
      },
    ],
  },
  intelliscore: {
    title: 'Your intelliscore — a simple score that tells you if a property is right for you.',
    sub: 'Every report includes your intelliscore — a number from 0 to 100 that shows how well a property matches what you\'re looking for. The higher the score, the better the fit.',
    dimensions: ['growth potential', 'good place to live', 'rental income', 'things to watch'],
  },
  testimonials: {
    title: 'What people are saying',
    items: [
      {
        quote: 'I had no idea how to tell if a property was a good deal. intelliprop made it so simple — I finally understood what I was looking at.',
        name: 'Alex M.',
        role: 'First home buyer',
      },
      {
        quote: 'The report saved me from making a bad decision. It showed me things I never would have thought to check.',
        name: 'Jordan K.',
        role: 'Property buyer',
      },
      {
        quote: 'I love how easy it is to understand. No confusing charts or numbers — just clear answers to my questions.',
        name: 'Sam T.',
        role: 'Property investor',
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
        'One property report',
        'Your intelliscore score',
        'What similar properties sold for',
        'Things to watch out for',
      ],
      cta: 'Get started',
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
      'reports ready in under 3 minutes',
      'real property data you can trust',
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
