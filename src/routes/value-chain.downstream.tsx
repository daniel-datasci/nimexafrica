import { pageJsonLd } from "@/lib/structured-data";
import { createFileRoute } from "@tanstack/react-router";
import { StagePage } from "@/components/site/stage-page";
import portImg from "@/assets/downstream-port.webp";

export const Route = createFileRoute("/value-chain/downstream")({
  head: () => ({
    meta: [
      { title: "Downstream Operations — Trade & Distribution | NIMEX Africa" },
      {
        name: "description",
        content:
          "End-to-end export logistics, customs clearance and port operations, plus long-term domestic B2B off-take and temperature-controlled fleet management.",
      },
      { property: "og:title", content: "Downstream Operations — Trade & Distribution" },
      {
        property: "og:description",
        content:
          "Cross-border commodity trade and domestic off-take connecting rural production zones to Lagos export ports.",
      },
      { property: "og:type", content: "article" },
      { property: "og:image", content: "https://nimexafrica.com/og/downstream.jpg" },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { name: "twitter:image", content: "https://nimexafrica.com/og/downstream.jpg" },
      { property: "og:url", content: "https://nimexafrica.com/value-chain/downstream" },
    ],
    links: [{ rel: "canonical", href: "https://nimexafrica.com/value-chain/downstream" }],
    scripts: pageJsonLd({
      path: "/value-chain/downstream",
      name: "Downstream Operations — Trade & Distribution | NIMEX Africa",
      description: "End-to-end export logistics, customs clearance and port operations, plus long-term domestic B2B off-take and temperature-controlled fleet management.",
      image: "https://nimexafrica.com/og/downstream.jpg",
      type: "Article",
    }),
  }),
  component: () => (
    <StagePage
      slug="downstream"
      image={portImg}
      imageAlt="Container ship loading at a Lagos port terminal at dusk"
      nextTo="/value-chain/technology"
      nextLabel="Next: Tech & Innovation"
    />
  ),
});