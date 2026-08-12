import { pageJsonLd } from "@/lib/structured-data";
import { createFileRoute } from "@tanstack/react-router";
import { StagePage } from "@/components/site/stage-page";
import heroImg from "@/assets/hero-fields-cattle.webp";

export const Route = createFileRoute("/value-chain/upstream")({
  head: () => ({
    meta: [
      { title: "Upstream Operations — Origin & Cultivation | NIMEX Africa" },
      {
        name: "description",
        content:
          "Certified drought-resistant inputs, nucleus farm management and structured outgrower schemes with input financing and guaranteed buy-back.",
      },
      { property: "og:title", content: "Upstream Operations — Origin & Cultivation" },
      {
        property: "og:description",
        content:
          "Seed and input supply, nucleus farms and outgrower empowerment across West African climate zones.",
      },
      { property: "og:type", content: "article" },
      { property: "og:image", content: "https://nimexafrica.com/og/upstream.jpg" },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { name: "twitter:image", content: "https://nimexafrica.com/og/upstream.jpg" },
      { property: "og:url", content: "https://nimexafrica.com/value-chain/upstream" },
    ],
    links: [{ rel: "canonical", href: "https://nimexafrica.com/value-chain/upstream" }],
    scripts: pageJsonLd({
      path: "/value-chain/upstream",
      name: "Upstream Operations — Origin & Cultivation | NIMEX Africa",
      description: "Certified drought-resistant inputs, nucleus farm management and structured outgrower schemes with input financing and guaranteed buy-back.",
      image: "https://nimexafrica.com/og/upstream.jpg",
      type: "Article",
    }),
  }),
  component: () => (
    <StagePage
      slug="upstream"
      image={heroImg}
      imageAlt="Rows of maize and soybean crops beside a grazing cattle herd at sunset"
      nextTo="/value-chain/midstream"
      nextLabel="Next: Midstream"
    />
  ),
});