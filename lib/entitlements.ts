/**
 * Entitlements and limits for each pricing tier
 * Used for paywall logic and feature gating
 */

export const ENTITLEMENTS = {
  free_trial: {
    reportsPerPeriod: 1,
    period: 'lifetime',
    watermark: true,
    limits: {
      reports: 1,
      reportsPeriod: 'lifetime',
    },
  },
  single_report: {
    reportsPerPeriod: 1,
    period: 'one-time',
    watermark: false,
    limits: {
      reports: 1,
      reportsPeriod: 'one-time',
    },
  },
  starter_monthly: {
    reportsPerPeriod: 5,
    period: '30 days',
    watermark: false,
    limits: {
      reports: 5,
      reportsPeriod: '30 days',
    },
  },
  pro_monthly: {
    reportsPerPeriod: 40,
    period: 'month',
    watermark: false,
    limits: {
      reports: 40,
      reportsPeriod: 'month',
    },
  },
  business_custom: {
    reportsPerPeriod: -1, // unlimited
    period: 'month',
    watermark: false,
    team: true,
    limits: {
      reports: -1, // unlimited
      reportsPeriod: 'month',
      team: true,
    },
  },
} as const;

/**
 * Paywall messages based on tier and limit reached
 */
export const PAYWALL_MESSAGES = {
  free_trial: {
    message: "You've used your free report. Unlock more with Starter ($49/mo) or buy a single report for $19.",
    upgradeOptions: [
      { plan: 'starter_monthly', label: 'Upgrade to Starter', price: '$49/mo' },
      { plan: 'single_report', label: 'Buy a Report', price: '$19' },
    ],
  },
  starter_monthly: {
    message: "You've reached your 5-report limit. Upgrade to Pro ($199/mo) for up to 40 reports per month.",
    upgradeOptions: [
      { plan: 'pro_monthly', label: 'Upgrade to Pro', price: '$199/mo' },
    ],
  },
} as const;

