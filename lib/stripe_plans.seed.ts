export const PLANS = [
  {
    key: "free_trial",
    product: { name: "Free Trial", metadata: { tier: "free" } },
    prices: [],
  },
  {
    key: "single_report",
    product: { name: "Per Report", metadata: { tier: "per_report" } },
    prices: [
      { currency: "aud", unit_amount: 1900, nickname: "Per Report $19", recurring: null }
    ]
  },
  {
    key: "starter_monthly",
    product: { name: "Starter", metadata: { tier: "starter" } },
    prices: [
      { currency: "aud", unit_amount: 4900, nickname: "Starter $49/mo", recurring: { interval: "month" } }
    ]
  },
  {
    key: "pro_monthly",
    product: { name: "Pro", metadata: { tier: "pro" } },
    prices: [
      { currency: "aud", unit_amount: 19900, nickname: "Pro $199/mo", recurring: { interval: "month" } }
    ]
  },
  {
    key: "business_custom",
    product: { name: "Business (Coming Soon)", metadata: { tier: "business" } },
    prices: []
  }
];

