import { pageJsonLd } from "@/lib/structured-data";
import { createFileRoute } from "@tanstack/react-router";
import { PolicyPage } from "@/components/site/policy-page";

export const Route = createFileRoute("/anti-bribery")({
  head: () => ({
    meta: [
      { title: "Anti-Bribery & Corruption Policy | NIMEX Africa" },
      {
        name: "description",
        content:
          "NIMEX Africa operates a zero-tolerance approach to bribery and corruption across all agricultural origination, processing and cross-border trade activity.",
      },
      { property: "og:title", content: "Anti-Bribery & Corruption Policy" },
      {
        property: "og:description",
        content: "Zero tolerance, third-party due diligence, facilitation payments and confidential reporting.",
      },
      { property: "og:type", content: "article" },
      { property: "og:image", content: "https://nimexafrica.com/og/anti-bribery.jpg" },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { name: "twitter:image", content: "https://nimexafrica.com/og/anti-bribery.jpg" },
      { property: "og:url", content: "https://nimexafrica.com/anti-bribery" },
    ],
    links: [{ rel: "canonical", href: "https://nimexafrica.com/anti-bribery" }],
    scripts: pageJsonLd({
      path: "/anti-bribery",
      name: "Anti-Bribery & Corruption Policy | NIMEX Africa",
      description: "NIMEX Africa operates a zero-tolerance approach to bribery and corruption across all agricultural origination, processing and cross-border trade activity.",
      image: "https://nimexafrica.com/og/anti-bribery.jpg",
      type: "WebPage",
    }),
  }),
  component: () => (
    <PolicyPage
      eyebrow="Legal & Compliance"
      title="Anti-Bribery & Corruption Policy"
      intro="NIMEX Africa Agro Ventures Ltd applies a zero-tolerance approach to bribery and corruption in every market in which it operates."
      sections={[
        {
          heading: "Scope",
          body: "This policy applies to all directors, employees, contractors, agents, outgrower coordinators, logistics providers and any third party acting on behalf of NIMEX.",
        },
        {
          heading: "Prohibited Conduct",
          body: "Offering, promising, giving, requesting or accepting any financial or other advantage to improperly influence a business or governmental decision is strictly prohibited, whether directly or through an intermediary.",
        },
        {
          heading: "Facilitation Payments",
          body: "Facilitation payments and kickbacks of any kind are prohibited, including at ports, borders, customs posts and regulatory offices.",
        },
        {
          heading: "Gifts & Hospitality",
          body: "Modest, transparent and proportionate hospitality is permitted where it is lawful, properly recorded and never intended to influence a decision.",
        },
        {
          heading: "Third-Party Due Diligence",
          body: "Counterparties, agents and service providers are screened before engagement and are contractually required to comply with equivalent anti-corruption standards.",
        },
        {
          heading: "Reporting & Non-Retaliation",
          body: "Suspected breaches can be reported confidentially to the corporate desk. NIMEX prohibits retaliation against anyone who raises a concern in good faith.",
        },
      ]}
    />
  ),
});