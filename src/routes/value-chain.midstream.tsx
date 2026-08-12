import { pageJsonLd } from "@/lib/structured-data";
import { createFileRoute } from "@tanstack/react-router";
import { StagePage } from "@/components/site/stage-page";
import processingImg from "@/assets/midstream-processing.webp";

export const Route = createFileRoute("/value-chain/midstream")({
  head: () => ({
    meta: [
      { title: "Midstream Operations — Processing & Storage | NIMEX Africa" },
      {
        name: "description",
        content:
          "Industrial post-harvest processing, solar-powered cold chain hubs cutting losses by up to 40%, and on-site quality assurance laboratories.",
      },
      { property: "og:title", content: "Midstream Operations — Processing & Storage" },
      {
        property: "og:description",
        content:
          "Cleaning, grading, drying and hulling into market-ready formats under global food safety standards.",
      },
      { property: "og:type", content: "article" },
      { property: "og:image", content: "https://nimexafrica.com/og/midstream.jpg" },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { name: "twitter:image", content: "https://nimexafrica.com/og/midstream.jpg" },
      { property: "og:url", content: "https://nimexafrica.com/value-chain/midstream" },
    ],
    links: [{ rel: "canonical", href: "https://nimexafrica.com/value-chain/midstream" }],
    scripts: pageJsonLd({
      path: "/value-chain/midstream",
      name: "Midstream Operations — Processing & Storage | NIMEX Africa",
      description: "Industrial post-harvest processing, solar-powered cold chain hubs cutting losses by up to 40%, and on-site quality assurance laboratories.",
      image: "https://nimexafrica.com/og/midstream.jpg",
      type: "Article",
    }),
  }),
  component: () => (
    <StagePage
      slug="midstream"
      image={processingImg}
      imageAlt="Workers operating stainless steel grain grading lines in a solar-powered processing plant"
      nextTo="/value-chain/downstream"
      nextLabel="Next: Downstream"
    />
  ),
});