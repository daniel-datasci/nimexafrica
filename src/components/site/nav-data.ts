export const navItems = [
  {
    label: "About Us",
    to: "/about",
    children: [
      { label: "Overview", to: "/about" },
      { label: "Mexico–Africa Alliance", to: "/about/alliance" },
      { label: "Leadership & Governance", to: "/about/leadership" },
    ],
  },
  {
    label: "Value Chain",
    to: "/value-chain",
    children: [
      { label: "Upstream", to: "/value-chain/upstream" },
      { label: "Midstream", to: "/value-chain/midstream" },
      { label: "Downstream", to: "/value-chain/downstream" },
      { label: "Tech & Innovation", to: "/value-chain/technology" },
    ],
  },
  {
    label: "Commodities & Trade",
    to: "/commodities",
    children: [
      { label: "Cash Crops", to: "/commodities" },
      { label: "Horticulture", to: "/commodities" },
      { label: "Processed Goods", to: "/commodities" },
      { label: "Specialty Items", to: "/commodities" },
    ],
  },
  {
    label: "Sustainability & Impact",
    to: "/sustainability",
    children: [
      { label: "Climate-Smart Ag", to: "/sustainability" },
      { label: "Outgrower Model", to: "/sustainability" },
      { label: "Social Inclusion", to: "/sustainability" },
    ],
  },
  { label: "Investor & Media Center", to: "/investors" },
] as const;