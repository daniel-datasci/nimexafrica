import { pageJsonLd } from "@/lib/structured-data";
import { createFileRoute } from "@tanstack/react-router";
import { climateSmart, socialImpact } from "@/content/company";
import { CtaLink, NumberedList, PageHero, Section, SectionHeading } from "@/components/site/primitives";
import communityImg from "@/assets/community-outgrowers.webp";

export const Route = createFileRoute("/sustainability")({
  head: () => ({
    meta: [
      { title: "Sustainability, ESG & Community Impact | NIMEX Africa" },
      {
        name: "description",
        content:
          "Climate-smart agriculture, solar-powered operations, outgrower financial inclusion and a 60% women and youth participation target across NIMEX hubs.",
      },
      { property: "og:title", content: "Generating Sustainable Value for Communities and Planet" },
      {
        property: "og:description",
        content:
          "Water conservation, soil regeneration, renewable energy and rural livelihood programmes built into the business model.",
      },
      { property: "og:type", content: "article" },
      { property: "og:image", content: "https://nimexafrica.com/og/sustainability.jpg" },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { name: "twitter:image", content: "https://nimexafrica.com/og/sustainability.jpg" },
      { property: "og:url", content: "https://nimexafrica.com/sustainability" },
    ],
    links: [{ rel: "canonical", href: "https://nimexafrica.com/sustainability" }],
    scripts: pageJsonLd({
      path: "/sustainability",
      name: "Sustainability, ESG & Community Impact | NIMEX Africa",
      description: "Climate-smart agriculture, solar-powered operations, outgrower financial inclusion and a 60% women and youth participation target across NIMEX hubs.",
      image: "https://nimexafrica.com/og/sustainability.jpg",
      type: "Article",
    }),
  }),
  component: SustainabilityPage,
});

function SustainabilityPage() {
  return (
    <>
      <PageHero
        eyebrow="Sustainability & Impact"
        title="Generating Sustainable Value for Communities and Planet"
        intro="Sustainability is fundamental to NIMEX's business model. We implement agricultural practices that restore ecosystems, lower carbon footprints, and create sustainable livelihoods for rural agricultural communities."
        image={communityImg}
      />

      <Section>
        <SectionHeading eyebrow="Climate-Smart Agriculture" title="Restoring the Resource Base" />
        <div className="mt-14">
          <NumberedList items={climateSmart} />
        </div>
        <div className="mt-14 grid gap-4 sm:grid-cols-3">
          {[
            { k: "Up to 50%", v: "Reduction in water use through drip irrigation" },
            { k: "Up to 40%", v: "Reduction in post-harvest losses via solar cold chain" },
            { k: "60%", v: "Target participation of women and youth in outgrower hubs" },
          ].map((s) => (
            <div key={s.k} className="rounded-3xl bg-surface p-8">
              <p className="font-display text-3xl text-primary">{s.k}</p>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.v}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section tone="muted">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:items-center">
          <img
            src={communityImg}
            alt="Women outgrower farmers holding baskets of freshly harvested peppers and tomatoes"
            width={1408}
            height={1008}
            loading="lazy"
            decoding="async"
            className="aspect-[4/3] w-full rounded-[1.75rem] object-cover"
          />
          <SectionHeading
            eyebrow="Social Impact & Inclusivity"
            title="Prosperity That Stays in the Community"
            intro="Our outgrower model builds formal credit histories, protects farmers against climate shocks and invests directly in host-community infrastructure."
          />
        </div>
        <div className="mt-14">
          <NumberedList items={socialImpact} />
        </div>
        <div className="mt-12">
          <CtaLink to="/investors">DFI & ESG Co-Investment</CtaLink>
        </div>
      </Section>
    </>
  );
}