import { pageJsonLd } from "@/lib/structured-data";
import { createFileRoute, Link } from "@tanstack/react-router";
import { valueChain } from "@/content/company";
import { CtaLink, PageHero, Section, SectionHeading } from "@/components/site/primitives";
import processingImg from "@/assets/midstream-processing.webp";

const stageLinks = {
  upstream: "/value-chain/upstream",
  midstream: "/value-chain/midstream",
  downstream: "/value-chain/downstream",
} as const;

export const Route = createFileRoute("/value-chain/")({
  head: () => ({
    meta: [
      { title: "Integrated Value Chain Operations | NIMEX Africa" },
      {
        name: "description",
        content:
          "NIMEX controls inputs, cultivation, post-harvest logistics, processing and off-take across upstream, midstream and downstream operations.",
      },
      { property: "og:title", content: "Complete Control Across the Agricultural Lifecycle" },
      {
        property: "og:description",
        content:
          "Upstream origination, midstream processing and cold chain, downstream trade and distribution — managed end to end.",
      },
      { property: "og:type", content: "article" },
      { property: "og:image", content: "https://nimexafrica.com/og/value-chain.jpg" },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { name: "twitter:image", content: "https://nimexafrica.com/og/value-chain.jpg" },
      { property: "og:url", content: "https://nimexafrica.com/value-chain" },
    ],
    links: [{ rel: "canonical", href: "https://nimexafrica.com/value-chain" }],
    scripts: pageJsonLd({
      path: "/value-chain",
      name: "Integrated Value Chain Operations | NIMEX Africa",
      description: "NIMEX controls inputs, cultivation, post-harvest logistics, processing and off-take across upstream, midstream and downstream operations.",
      image: "https://nimexafrica.com/og/value-chain.jpg",
      type: "Article",
    }),
  }),
  component: ValueChainPage,
});

function ValueChainPage() {
  return (
    <>
      <PageHero
        eyebrow="What We Do"
        title="Complete Control Across the Agricultural Lifecycle"
        intro="NIMEX operates across the full agribusiness spectrum. By controlling inputs, cultivation, post-harvest logistics, processing, and off-take, we eliminate value leakage, lower operational costs, and guarantee supply continuity."
        image={processingImg}
      />

      <Section>
        <div className="grid gap-4 lg:grid-cols-3">
          {valueChain.map((stage, i) => (
            <Link
              key={stage.slug}
              to={stageLinks[stage.slug]}
              className="group flex flex-col bg-card p-9 transition-colors hover:bg-secondary"
            >
              <span className="eyebrow text-accent">Stage {String(i + 1).padStart(2, "0")}</span>
              <h2 className="mt-5 text-2xl leading-snug">{stage.stage}</h2>
              <p className="mt-1 text-sm text-muted-foreground">{stage.title}</p>
              <p className="mt-5 flex-1 text-sm leading-relaxed text-muted-foreground">
                {stage.summary}
              </p>
              <ul className="mt-6 space-y-2 border-t border-border pt-5">
                {stage.items.map((item) => (
                  <li key={item.title} className="text-sm text-foreground/80">
                    {item.title}
                  </li>
                ))}
              </ul>
              <span className="mt-7 text-xs font-semibold uppercase tracking-[0.14em] text-primary group-hover:underline">
                View {stage.stage} →
              </span>
            </Link>
          ))}
        </div>
      </Section>

      <Section tone="muted">
        <SectionHeading
          eyebrow="Tech & Innovation"
          title="Transforming Agriculture Through Smart Technology"
          intro="Precision agronomy, digital outgrower management and block-level traceability run across every stage of the chain."
        />
        <div className="mt-10">
          <CtaLink to="/value-chain/technology">Explore Smart Farming</CtaLink>
        </div>
      </Section>
    </>
  );
}