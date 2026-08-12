import { pageJsonLd } from "@/lib/structured-data";
import { createFileRoute } from "@tanstack/react-router";
import { company, coreValues } from "@/content/company";
import { CtaLink, PageHero, Section, SectionHeading } from "@/components/site/primitives";
import allianceImg from "@/assets/alliance-greenhouse.webp";

export const Route = createFileRoute("/about/")({
  head: () => ({
    meta: [
      { title: "About NIMEX Africa Agro Ventures | Integrated Agribusiness" },
      {
        name: "description",
        content:
          "NIMEX Africa Agro Ventures is an integrated value-chain manager headquartered in Abuja, bridging Mexican agricultural technology and West African production.",
      },
      { property: "og:title", content: "About NIMEX Africa Agro Ventures" },
      {
        property: "og:description",
        content:
          "Building a transatlantic engine for global food security across cultivation, processing, trade and distribution.",
      },
      { property: "og:type", content: "article" },
      { property: "og:image", content: "https://nimexafrica.com/og/about.jpg" },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { name: "twitter:image", content: "https://nimexafrica.com/og/about.jpg" },
      { property: "og:url", content: "https://nimexafrica.com/about" },
    ],
    links: [{ rel: "canonical", href: "https://nimexafrica.com/about" }],
    scripts: pageJsonLd({
      path: "/about",
      name: "About NIMEX Africa Agro Ventures | Integrated Agribusiness",
      description: "NIMEX Africa Agro Ventures is an integrated value-chain manager headquartered in Abuja, bridging Mexican agricultural technology and West African production.",
      image: "https://nimexafrica.com/og/about.jpg",
      type: "AboutPage",
    }),
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Us"
        title="Building a Transatlantic Engine for Global Food Security"
        intro={company.summary}
      />

      <Section>
        <div className="grid gap-14 lg:grid-cols-[1.15fr_1fr] lg:items-start">
          <div className="space-y-6 text-base leading-relaxed text-muted-foreground lg:text-lg">
            <p>
              NIMEX Africa Agro Ventures Ltd is a premier international agribusiness enterprise
              established through a strategic cross-continental alliance. Headquartered in Abuja
              with commercial operational hubs extending through Lagos, NIMEX acts as a bridge
              connecting two of the world's most dynamic agricultural ecosystems.
            </p>
            <p>
              By deploying proven Mexican agricultural models, protected cultivation techniques,
              and post-harvest management systems into West Africa's arable landscape, NIMEX
              addresses critical vulnerabilities in food systems, industrial supply chains, and
              international trade corridors. We operate not merely as a commercial trader or
              primary farmer, but as an integrated value-chain manager. Our institutional
              framework mitigates operational risks, maximizes per-hectare productivity, and
              guarantees market delivery for domestic industrial consumers and international
              buyers alike.
            </p>
            <div className="flex flex-wrap gap-3 pt-2">
              <CtaLink to="/value-chain">Explore Our Value Chain</CtaLink>
              <CtaLink to="/about/leadership" variant="outline">
                Leadership & Governance
              </CtaLink>
            </div>
          </div>
          <img
            src={allianceImg}
            alt="Agronomist inspecting tomato vines inside a protected-cultivation greenhouse"
            width={1408}
            height={1008}
            loading="lazy"
            decoding="async"
            className="aspect-[4/3] w-full rounded-[1.75rem] object-cover"
          />
        </div>
      </Section>

      <Section tone="muted">
        <SectionHeading
          eyebrow="Core Values"
          title="Our Operating Principles"
          intro="Three commitments govern how we originate, process and deliver every consignment."
        />
        <div className="mt-14 grid gap-4 md:grid-cols-3">
          {coreValues.map((v) => (
            <div key={v.title} className="rounded-3xl bg-surface p-8">
              <h3 className="text-xl leading-snug">{v.title}</h3>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{v.body}</p>
            </div>
          ))}
        </div>
      </Section>
    </>
  );
}