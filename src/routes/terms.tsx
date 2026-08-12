import { pageJsonLd } from "@/lib/structured-data";
import { createFileRoute } from "@tanstack/react-router";
import { PolicyPage } from "@/components/site/policy-page";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title: "Terms of Use | NIMEX Africa Agro Ventures" },
      {
        name: "description",
        content:
          "Terms governing use of the NIMEX Africa Agro Ventures website, including content accuracy, intellectual property and limitation of liability.",
      },
      { property: "og:title", content: "Terms of Use — NIMEX Africa" },
      {
        property: "og:description",
        content: "The conditions that apply to your use of this website and its content.",
      },
      { property: "og:type", content: "article" },
      { property: "og:image", content: "https://nimexafrica.com/og/terms.jpg" },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { name: "twitter:image", content: "https://nimexafrica.com/og/terms.jpg" },
      { property: "og:url", content: "https://nimexafrica.com/terms" },
    ],
    links: [{ rel: "canonical", href: "https://nimexafrica.com/terms" }],
    scripts: pageJsonLd({
      path: "/terms",
      name: "Terms of Use | NIMEX Africa Agro Ventures",
      description: "Terms governing use of the NIMEX Africa Agro Ventures website, including content accuracy, intellectual property and limitation of liability.",
      image: "https://nimexafrica.com/og/terms.jpg",
      type: "WebPage",
    }),
  }),
  component: () => (
    <PolicyPage
      eyebrow="Legal & Compliance"
      title="Terms of Use"
      intro="By accessing this website you agree to the terms set out below."
      sections={[
        {
          heading: "Use of This Website",
          body: "This website is provided for general information about NIMEX Africa Agro Ventures Ltd and its activities. You agree not to use it for any unlawful purpose or in a way that could damage, disable or impair its operation.",
        },
        {
          heading: "No Offer or Investment Advice",
          body: "Nothing on this website constitutes an offer to sell or a solicitation to buy securities or any interest in any NIMEX project, nor does it constitute investment, legal, tax or agronomic advice. Any transaction is governed exclusively by definitive executed documentation.",
        },
        {
          heading: "Forward-Looking Statements",
          body: "Projected capacities, footprints, pipelines and impact targets reflect current expectations and are subject to change based on operating, market, climatic and regulatory conditions.",
        },
        {
          heading: "Intellectual Property",
          body: "All content, trademarks and imagery on this website are owned by or licensed to NIMEX Africa Agro Ventures Ltd and may not be reproduced without prior written consent.",
        },
        {
          heading: "Limitation of Liability",
          body: "While we take care to keep information accurate and current, NIMEX accepts no liability for loss arising from reliance on the content of this website.",
        },
      ]}
    />
  ),
});