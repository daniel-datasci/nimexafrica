import { pageJsonLd } from "@/lib/structured-data";
import { createFileRoute } from "@tanstack/react-router";
import { PolicyPage } from "@/components/site/policy-page";

export const Route = createFileRoute("/esg-policy")({
  head: () => ({
    meta: [
      { title: "ESG Policy | NIMEX Africa Agro Ventures" },
      {
        name: "description",
        content:
          "NIMEX Africa's environmental, social and governance commitments across climate-smart farming, labour standards, community investment and board oversight.",
      },
      { property: "og:title", content: "ESG Policy — NIMEX Africa" },
      {
        property: "og:description",
        content: "Environmental stewardship, social inclusion and governance discipline across the value chain.",
      },
      { property: "og:type", content: "article" },
      { property: "og:image", content: "https://nimexafrica.com/og/esg-policy.jpg" },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { name: "twitter:image", content: "https://nimexafrica.com/og/esg-policy.jpg" },
      { property: "og:url", content: "https://nimexafrica.com/esg-policy" },
    ],
    links: [{ rel: "canonical", href: "https://nimexafrica.com/esg-policy" }],
    scripts: pageJsonLd({
      path: "/esg-policy",
      name: "ESG Policy | NIMEX Africa Agro Ventures",
      description: "NIMEX Africa's environmental, social and governance commitments across climate-smart farming, labour standards, community investment and board oversight.",
      image: "https://nimexafrica.com/og/esg-policy.jpg",
      type: "WebPage",
    }),
  }),
  component: () => (
    <PolicyPage
      eyebrow="Legal & Compliance"
      title="ESG Policy"
      intro="Environmental, social and governance performance is managed as a core operating discipline, not a reporting exercise."
      sections={[
        {
          heading: "Environmental Stewardship",
          body: "We prioritise water-efficient irrigation, minimum-tillage and crop rotation for soil regeneration, responsible input use, and renewable energy for processing, cold storage and irrigation infrastructure.",
        },
        {
          heading: "Climate Resilience",
          body: "Climate-adapted seed selection, protected cultivation and decentralised cold chain reduce exposure to weather volatility and post-harvest loss across our production clusters.",
        },
        {
          heading: "Labour & Human Rights",
          body: "We prohibit forced and child labour across our operations and outgrower networks, provide safe working conditions, and require equivalent standards from suppliers and contractors.",
        },
        {
          heading: "Social Inclusion",
          body: "We target 60% participation of women and youth across outgrower hubs and invest in clean water access, rural roads and agricultural extension services in host communities.",
        },
        {
          heading: "Governance & Reporting",
          body: "Board-level oversight, phytosanitary compliance with NAQS, USDA and EU standards, transparent risk management and audited impact reporting underpin our ESG commitments.",
        },
      ]}
    />
  ),
});