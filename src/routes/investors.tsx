import { pageJsonLd } from "@/lib/structured-data";
import { createFileRoute } from "@tanstack/react-router";
import { company, investorTracks, metrics } from "@/content/company";
import { CtaLink, NumberedList, PageHero, Section, SectionHeading } from "@/components/site/primitives";
import portImg from "@/assets/downstream-port.webp";

export const Route = createFileRoute("/investors")({
  head: () => ({
    meta: [
      { title: "Investor, Partner & Trade Center | NIMEX Africa" },
      {
        name: "description",
        content:
          "Structured project finance, DFI and ESG blended co-investment, and long-term commercial off-take contracts across West African agriculture.",
      },
      { property: "og:title", content: "Capital, Partnerships, and Institutional Growth" },
      {
        property: "og:description",
        content:
          "NIMEX partners with institutional investors, sovereign funds, DFIs and international trade counterparties.",
      },
      { property: "og:type", content: "article" },
      { property: "og:image", content: "https://nimexafrica.com/og/investors.jpg" },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { name: "twitter:image", content: "https://nimexafrica.com/og/investors.jpg" },
      { property: "og:url", content: "https://nimexafrica.com/investors" },
    ],
    links: [{ rel: "canonical", href: "https://nimexafrica.com/investors" }],
    scripts: pageJsonLd({
      path: "/investors",
      name: "Investor, Partner & Trade Center | NIMEX Africa",
      description: "Structured project finance, DFI and ESG blended co-investment, and long-term commercial off-take contracts across West African agriculture.",
      image: "https://nimexafrica.com/og/investors.jpg",
      type: "Article",
    }),
  }),
  component: InvestorsPage,
});

function InvestorsPage() {
  return (
    <>
      <PageHero
        eyebrow="Investor & Media Center"
        title="Capital, Partnerships, and Institutional Growth"
        intro="NIMEX is structured to partner with institutional investors, sovereign wealth funds, development finance institutions (DFIs), and international trade counterparties seeking managed exposure to West Africa's agricultural sector."
        image={portImg}
      />

      <Section>
        <SectionHeading eyebrow="Engagement Tracks" title="Three Ways to Partner With NIMEX" />
        <div className="mt-14">
          <NumberedList items={investorTracks} />
        </div>
      </Section>

      <Section tone="deep">
        <SectionHeading
          eyebrow="Scale Indicators"
          title="Platform Metrics"
          className="[&_h2]:text-deep-foreground [&_p]:text-deep-foreground/75"
        />
        <dl className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {metrics.map((m) => (
            <div key={m.label} className="rounded-3xl bg-deep-foreground/5 p-8">
              <dt className="font-display text-3xl text-accent">{m.value}</dt>
              <dd className="mt-3 text-sm leading-relaxed text-deep-foreground/75">{m.label}</dd>
            </div>
          ))}
        </dl>
      </Section>

      <Section tone="muted">
        <div className="grid gap-12 lg:grid-cols-2">
          <SectionHeading
            eyebrow="Documents & Media"
            title="Corporate Materials"
            intro="The corporate profile is available on request. Annual reporting, impact disclosures and press materials will be published in this section."
          />
          <div className="grid gap-4">
            <a
              href={company.corporateProfileUrl}
              className="flex items-center justify-between bg-card p-7 transition-colors hover:bg-secondary"
            >
              <span className="text-lg">Corporate Profile (PDF)</span>
              <span className="eyebrow text-accent">Download</span>
            </a>
            <a
              href={`mailto:${company.emails.corporate}`}
              className="flex items-center justify-between bg-card p-7 transition-colors hover:bg-secondary"
            >
              <span className="text-lg">Corporate & Investor Desk</span>
              <span className="eyebrow text-accent">{company.emails.corporate}</span>
            </a>
            <a
              href={`mailto:${company.emails.international}`}
              className="flex items-center justify-between bg-card p-7 transition-colors hover:bg-secondary"
            >
              <span className="text-lg">Mexico–Africa Trade Desk</span>
              <span className="eyebrow text-accent">{company.emails.international}</span>
            </a>
          </div>
        </div>
        <div className="mt-12">
          <CtaLink to="/contact">Speak With Investor Relations</CtaLink>
        </div>
      </Section>
    </>
  );
}