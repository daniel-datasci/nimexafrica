// Single source of truth for company facts and placeholder figures.
// Replace the PLACEHOLDER values below with confirmed data.

export const company = {
  name: "NIMEX Africa Agro Ventures Ltd",
  shortName: "NIMEX Africa",
  tagline: "Driving Innovation Across the Transatlantic Agricultural Value Chain",
  summary:
    "An institutional agribusiness platform bridging Mexican agricultural technology and African land, climate diversity and market potential.",
  corporateProfileUrl: "/corporate-profile.pdf",
  emails: {
    general: "info@nimexafrica.com",
    corporate: "corporate@nimexafrica.com",
    international: "transatlantic@nimexafrica.com",
  },
  offices: [
    {
      city: "Abuja",
      label: "Head Office (Abuja)",
      address: "Plot 160, Aminu Kano Crescent, Wuse 2, Abuja, FCT, Nigeria",
      role: "Corporate Strategy, Government Relations, Executive Management & Investor Relations",
      phone: "+234 (0) XX XXX XXXX", // PLACEHOLDER
    },
    {
      city: "Lagos",
      label: "Commercial Operations Hub (Lagos)",
      address: "No. 50A, Itafaji Street, Dolphin Estate, Ikoyi, Lagos State, Nigeria",
      role: "Port Logistics, Domestic Distribution, Cross-Border Trade & Shipping Operations",
      phone: "+234 (0) XX XXX XXXX", // PLACEHOLDER
    },
  ],
} as const;

// PLACEHOLDER figures — swap in confirmed numbers here and they update sitewide.
export const metrics = [
  {
    value: "$XX Million",
    label: "Targeted Agribusiness & Infrastructure Investment Pipeline",
  },
  {
    value: "XX,000+ Hectares",
    label: "Cultivation & Outgrower Footprint Under Management",
  },
  {
    value: "XX,000+ Metric Tons",
    label: "Annual Off-Take & Commodity Processing Capacity",
  },
  {
    value: "60% / 40%",
    label: "Committed Direct Support Target for Women & Youth Farmers",
  },
] as const;

export const coreValues = [
  {
    title: "Precision Integrity",
    body: "Rigorous quality control, full traceability, and adherence to global ESG standards across every link of our supply chain.",
  },
  {
    title: "Transatlantic Synergy",
    body: "Fusing Mexico's world-class agronomic expertise with Africa's vast land resources and expanding commercial markets.",
  },
  {
    title: "Shared Prosperity",
    body: "Building commercially viable farming ecosystems that directly lift smallholder incomes and strengthen rural economies.",
  },
] as const;

export const valueChain = [
  {
    slug: "upstream",
    stage: "Upstream",
    title: "Origin & Cultivation",
    summary:
      "Certified inputs, nucleus farm management and structured outgrower networks that secure origination at source.",
    items: [
      {
        title: "High-Yield Seed & Input Supply",
        body: "Distributing certified, drought-resistant seeds, biostimulants, and soil amendments tailored to regional climate zones.",
      },
      {
        title: "Nucleus Farm Management",
        body: "Operating commercial farms that serve as technical demonstration hubs, seed propagation centers, and primary production bases.",
      },
      {
        title: "Outgrower Empowerment Schemes",
        body: "Integrating thousands of local farmers into structured outgrower networks provided with input financing, training, and guaranteed buy-back contracts.",
      },
    ],
  },
  {
    slug: "midstream",
    stage: "Midstream",
    title: "Processing & Storage",
    summary:
      "Industrial post-harvest processing, solar-powered cold chain and accredited quality assurance laboratories.",
    items: [
      {
        title: "Industrial Post-Harvest Processing",
        body: "Operating primary and secondary processing facilities that clean, grade, dry, hull, and process raw produce into market-ready formats.",
      },
      {
        title: "Solar-Powered Cold Chain Logistics",
        body: "Deploying decentralized, solar-powered cold storage hubs near farming clusters to reduce post-harvest losses by up to 40%.",
      },
      {
        title: "Quality Assurance Laboratories",
        body: "Maintaining on-site laboratories equipped with testing technology to certify compliance with global phytosanitary and food safety standards.",
      },
    ],
  },
  {
    slug: "downstream",
    stage: "Downstream",
    title: "Trade & Distribution",
    summary:
      "Cross-border commodity trade, domestic B2B off-take and temperature-controlled fleet logistics into Lagos ports.",
    items: [
      {
        title: "Cross-Border Commodity Trade",
        body: "Managing end-to-end export logistics, customs clearance, and port operations for international shipments.",
      },
      {
        title: "Domestic B2B Off-Take Agreements",
        body: "Supplying local food processors, livestock feed manufacturers, and industrial buyers under long-term contract structures.",
      },
      {
        title: "Logistics & Fleet Management",
        body: "Utilizing tracked, temperature-controlled transport routes connecting rural production zones directly to urban centers and export ports in Lagos.",
      },
    ],
  },
] as const;

export const commodities = [
  {
    category: "Grains & Cash Crops",
    products: "Non-GMO Soybeans, Yellow & White Maize, Sesame Seeds, Sorghum",
    applications:
      "Industrial food processing, livestock feed formulations, global oilseed crushing markets.",
  },
  {
    category: "Horticulture & Fresh Produce",
    products: "High-Density Tomatoes, Bell Peppers, Onions, Tropical Fruits",
    applications:
      "Fresh regional wholesale, processing into pastes/concentrates, cold-chain export.",
  },
  {
    category: "Specialty & Export Crops",
    products: "Raw & Processed Cocoa, Ginger, Hibiscus, Cashew Nuts",
    applications:
      "Global confectionery, beverage manufacturing, pharmaceutical and cosmetics industries.",
  },
  {
    category: "Value-Added Agro-Goods",
    products: "Refined Vegetable Oils, Dehydrated Vegetables, Processed Flours",
    applications:
      "Domestic consumer distribution, B2B food services, emergency relief supply networks.",
  },
] as const;

export const technology = [
  {
    title: "Precision Agronomy & Satellite Imaging",
    body: "Utilizing satellite data, drone mapping, and soil sensors to monitor crop health, optimize fertilizer application, and predict yield volumes with precision.",
  },
  {
    title: "Digital Outgrower Management Platforms",
    body: "Equipping outgrower networks with mobile platforms that deliver agronomic advice, track input delivery, manage digital payments, and log harvest quantities.",
  },
  {
    title: "Block-Level Traceability",
    body: "Implementing digital tracking systems that map commodities from the specific farm plot of origin through processing and transport to final delivery.",
  },
] as const;

export const climateSmart = [
  {
    title: "Water Conservation",
    body: "Broad adoption of drip irrigation systems that reduce water use by up to 50% compared to traditional flood methods.",
  },
  {
    title: "Soil Regeneration",
    body: "Utilizing minimum-tillage, crop rotation, and organic soil enrichers to rebuild soil organic matter and sequester carbon.",
  },
  {
    title: "Renewable Energy Integration",
    body: "Powering our midstream processing, cold storage hubs, and irrigation pumps with solar infrastructure.",
  },
] as const;

export const socialImpact = [
  {
    title: "Outgrower Financial Inclusion",
    body: "Providing rural farmers with formal credit histories, input financing, and micro-insurance coverage against climate shocks.",
  },
  {
    title: "Women & Youth Empowerment",
    body: "Structuring specialized training programs and land-allocation initiatives aimed at securing 60% participation from women and youth across all outgrower hubs.",
  },
  {
    title: "Community Infrastructure Development",
    body: "Investing in clean water access, rural road maintenance, and agricultural extension centers within our host farming communities.",
  },
] as const;

export const investorTracks = [
  {
    title: "Institutional Investment Framework",
    body: "Structured project finance opportunities across farm development, processing infrastructure, solar logistics hubs, and trade facilities.",
  },
  {
    title: "DFI & ESG Co-Investments",
    body: "Blended finance options designed to maximize impact metrics around climate resilience, job creation, and rural poverty reduction.",
  },
  {
    title: "Commercial Off-Take Contracts",
    body: "Tailored long-term supply agreements for domestic food manufacturers and international commodity importers seeking reliable, quality-certified supply.",
  },
] as const;

export const governance = [
  {
    title: "Board Oversight",
    body: "Active supervisory board ensuring strict financial discipline, regulatory adherence, and ESG compliance.",
  },
  {
    title: "International Phytosanitary Standards",
    body: "Rigorous adherence to NAQS, USDA, and EU regulatory standards across all cultivated and traded commodities.",
  },
  {
    title: "Transparent Risk Management",
    body: "Comprehensive hedging strategies, weather risk management, and multi-layered audit protocols across all cash and physical commodity flows.",
  },
] as const;

export const alliancePillars = [
  {
    title: "Technology & Knowledge Transfer",
    body: "Introducing Mexican expertise in protected cultivation, climate-adapted seed selection, drip irrigation, and modern post-harvest preservation.",
  },
  {
    title: "Processing & Industrial Standards",
    body: "Adapting proven food processing technologies to turn African raw commodities into high-value packaged industrial inputs and export goods.",
  },
  {
    title: "Dual Market Access",
    body: "Establishing direct trade corridors between Latin American technical partners, African supply hubs, and international off-takers across North America, Europe, and Asia.",
  },
] as const;