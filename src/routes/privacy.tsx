import { pageJsonLd } from "@/lib/structured-data";
import { createFileRoute } from "@tanstack/react-router";
import { PolicyPage } from "@/components/site/policy-page";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy | NIMEX Africa Agro Ventures" },
      {
        name: "description",
        content:
          "How NIMEX Africa Agro Ventures Ltd collects, uses, stores and protects personal data submitted through this website and commercial engagements.",
      },
      { property: "og:title", content: "Privacy Policy — NIMEX Africa" },
      {
        property: "og:description",
        content: "Data collection, use, retention and rights for NIMEX Africa website visitors and counterparties.",
      },
      { property: "og:type", content: "article" },
      { property: "og:image", content: "https://nimexafrica.com/og/privacy.jpg" },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { name: "twitter:image", content: "https://nimexafrica.com/og/privacy.jpg" },
      { property: "og:url", content: "https://nimexafrica.com/privacy" },
    ],
    links: [{ rel: "canonical", href: "https://nimexafrica.com/privacy" }],
    scripts: pageJsonLd({
      path: "/privacy",
      name: "Privacy Policy | NIMEX Africa Agro Ventures",
      description: "How NIMEX Africa Agro Ventures Ltd collects, uses, stores and protects personal data submitted through this website and commercial engagements.",
      image: "https://nimexafrica.com/og/privacy.jpg",
      type: "WebPage",
    }),
  }),
  component: () => (
    <PolicyPage
      eyebrow="Legal & Compliance"
      title="Privacy Policy"
      intro="This policy explains how NIMEX Africa Agro Ventures Ltd handles personal information collected through this website and through commercial engagement."
      sections={[
        {
          heading: "Information We Collect",
          body: "We collect the information you voluntarily provide through inquiry forms and direct correspondence — including name, organisation, email address, country and the content of your message — together with standard technical data such as browser type and pages visited.",
        },
        {
          heading: "How We Use Information",
          body: "Information is used to respond to trade, investment, partnership and media inquiries, to conduct counterparty due diligence, to meet legal and regulatory obligations, and to improve the performance of this website.",
        },
        {
          heading: "Disclosure",
          body: "We do not sell personal data. Information may be shared with professional advisers, financing partners and regulators where required for a legitimate business or legal purpose, subject to appropriate confidentiality safeguards.",
        },
        {
          heading: "Retention & Security",
          body: "Personal data is retained only for as long as required for the purpose collected or by applicable law, and is protected by organisational and technical controls appropriate to its sensitivity.",
        },
        {
          heading: "Your Rights",
          body: "You may request access to, correction of, or deletion of the personal data we hold about you, subject to applicable Nigerian data protection law and any overriding legal retention obligations.",
        },
      ]}
    />
  ),
});