import { pageJsonLd } from "@/lib/structured-data";
import { createFileRoute } from "@tanstack/react-router";
import { technology } from "@/content/company";
import { CtaLink, NumberedList, PageHero, Section, SectionHeading } from "@/components/site/primitives";
import techImg from "@/assets/technology-precision.webp";

export const Route = createFileRoute("/value-chain/technology")({
  head: () => ({
    meta: [
      { title: "Technology, Innovation & Smart Farming | NIMEX Africa" },
      {
        name: "description",
        content:
          "Satellite imaging, drone mapping, soil sensors, digital outgrower platforms and block-level traceability across NIMEX farms and supply chains.",
      },
      { property: "og:title", content: "Transforming Agriculture Through Smart Technology" },
      {
        property: "og:description",
        content:
          "Precision agronomy and full traceability from farm plot of origin to final delivery.",
      },
      { property: "og:type", content: "article" },
      { property: "og:image", content: "https://nimexafrica.com/og/technology.jpg" },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { name: "twitter:image", content: "https://nimexafrica.com/og/technology.jpg" },
      { property: "og:url", content: "https://nimexafrica.com/value-chain/technology" },
    ],
    links: [{ rel: "canonical", href: "https://nimexafrica.com/value-chain/technology" }],
    scripts: pageJsonLd({
      path: "/value-chain/technology",
      name: "Technology, Innovation & Smart Farming | NIMEX Africa",
      description: "Satellite imaging, drone mapping, soil sensors, digital outgrower platforms and block-level traceability across NIMEX farms and supply chains.",
      image: "https://nimexafrica.com/og/technology.jpg",
      type: "Article",
    }),
  }),
  component: TechnologyPage,
});

function TechnologyPage() {
  return (
    <>
      <PageHero
        eyebrow="Tech & Innovation"
        title="Transforming Agriculture Through Smart Technology"
        intro="At NIMEX, we integrate technology across our farming operations, processing hubs, and supply chains to ensure high productivity and full traceability."
        image={techImg}
      />

      <Section tone="deep">
        <SectionHeading
          eyebrow="Digital Infrastructure"
          title="Three Systems Running Across Every Hectare"
          className="[&_h2]:text-deep-foreground [&_p]:text-deep-foreground/75"
        />
        <div className="mt-14">
          <NumberedList items={technology} tone="deep" />
        </div>
      </Section>

      <Section>
        <div className="grid gap-12 lg:grid-cols-[1.1fr_1fr] lg:items-center">
          <img
            src={techImg}
            alt="Agricultural drone flying over crop rows while an agronomist reviews field mapping data on a tablet"
            width={1408}
            height={1008}
            loading="lazy"
            decoding="async"
            className="aspect-[4/3] w-full rounded-[1.75rem] object-cover"
          />
          <div>
            <SectionHeading
              eyebrow="Traceability"
              title="From Farm Plot to Final Delivery"
              intro="Every consignment carries a digital record of origin, treatment, processing batch and transport route — the evidence base international buyers and auditors require."
            />
            <div className="mt-8">
              <CtaLink to="/commodities">View Commodity Portfolio</CtaLink>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}