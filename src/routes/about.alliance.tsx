import { pageJsonLd } from "@/lib/structured-data";
import { createFileRoute } from "@tanstack/react-router";
import { alliancePillars } from "@/content/company";
import { CtaLink, NumberedList, PageHero, Section, SectionHeading } from "@/components/site/primitives";
import allianceImg from "@/assets/alliance-greenhouse.webp";

export const Route = createFileRoute("/about/alliance")({
  head: () => ({
    meta: [
      { title: "Mexico–Africa Alliance | NIMEX Africa Agro Ventures" },
      {
        name: "description",
        content:
          "How NIMEX converts Mexican agronomic expertise and African arable capacity into scalable, high-yield commercial outcomes across the Atlantic.",
      },
      { property: "og:title", content: "The Transatlantic Alliance — Mexico–Africa Synergy" },
      {
        property: "og:description",
        content:
          "Technology transfer, industrial processing standards and dual market access between Latin America, Africa and global off-takers.",
      },
      { property: "og:type", content: "article" },
      { property: "og:image", content: "https://nimexafrica.com/og/about-alliance.jpg" },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { name: "twitter:image", content: "https://nimexafrica.com/og/about-alliance.jpg" },
      { property: "og:url", content: "https://nimexafrica.com/about/alliance" },
    ],
    links: [{ rel: "canonical", href: "https://nimexafrica.com/about/alliance" }],
    scripts: pageJsonLd({
      path: "/about/alliance",
      name: "Mexico–Africa Alliance | NIMEX Africa Agro Ventures",
      description: "How NIMEX converts Mexican agronomic expertise and African arable capacity into scalable, high-yield commercial outcomes across the Atlantic.",
      image: "https://nimexafrica.com/og/about-alliance.jpg",
      type: "AboutPage",
    }),
  }),
  component: AlliancePage,
});

function AlliancePage() {
  return (
    <>
      <PageHero
        eyebrow="Mexico–Africa Alliance"
        title="Unlocking Agricultural Synergy Across the Atlantic"
        intro="The modern agricultural challenge requires international cooperation and technology exchange."
        image={allianceImg}
        imageAlt=""
      />

      <Section>
        <div className="grid gap-14 lg:grid-cols-2">
          <div className="space-y-6 text-base leading-relaxed text-muted-foreground lg:text-lg">
            <p>
              Mexico stands as a global leader in high-density farming, protected horticulture,
              water efficiency, and value-added food processing. Africa holds over 60% of the
              world's uncultivated arable land, accompanied by an expanding demographic and
              industrial market demand.
            </p>
            <p>
              NIMEX converts this strategic alignment into scalable, high-yield commercial
              outcomes — moving technology, standards and offtake capacity in both directions.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {[
              { k: "60%+", v: "of the world's uncultivated arable land is in Africa" },
              { k: "Protected", v: "cultivation and drip irrigation transferred from Mexico" },
              { k: "3 Regions", v: "North America, Europe and Asia off-take corridors" },
              { k: "2 Hubs", v: "Abuja corporate and Lagos commercial operations" },
            ].map((s) => (
              <div key={s.k} className="rounded-3xl bg-surface p-7">
                <p className="font-display text-2xl text-primary">{s.k}</p>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.v}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Section tone="muted">
        <SectionHeading eyebrow="Alliance Pillars" title="Three Channels of Transatlantic Exchange" />
        <div className="mt-14">
          <NumberedList items={alliancePillars} />
        </div>
        <div className="mt-12">
          <CtaLink to="/contact">Engage the International Desk</CtaLink>
        </div>
      </Section>
    </>
  );
}