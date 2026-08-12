import { NumberedList, PageHero, Section, SectionHeading, CtaLink } from "./primitives";
import { valueChain } from "@/content/company";

export function StagePage({
  slug,
  image,
  imageAlt,
  nextTo,
  nextLabel,
}: {
  slug: (typeof valueChain)[number]["slug"];
  image: string;
  imageAlt: string;
  nextTo: "/value-chain/midstream" | "/value-chain/downstream" | "/value-chain/technology";
  nextLabel: string;
}) {
  const stage = valueChain.find((s) => s.slug === slug)!;

  return (
    <>
      <PageHero
        eyebrow={`${stage.stage} Operations`}
        title={stage.title}
        intro={stage.summary}
        image={image}
        imageAlt=""
      />

      <Section>
        <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:items-center">
          <img
            src={image}
            alt={imageAlt}
            width={1408}
            height={1008}
            loading="lazy"
            decoding="async"
            className="aspect-[4/3] w-full rounded-[1.75rem] object-cover"
          />
          <SectionHeading
            eyebrow="Capabilities"
            title={`What we operate across ${stage.stage.toLowerCase()}`}
            intro="By controlling inputs, cultivation, post-harvest logistics, processing and off-take, we eliminate value leakage, lower operational costs, and guarantee supply continuity."
          />
        </div>
        <div className="mt-16">
          <NumberedList items={stage.items} />
        </div>
        <div className="mt-12 flex flex-wrap gap-3">
          <CtaLink to={nextTo}>{nextLabel}</CtaLink>
          <CtaLink to="/contact" variant="outline">
            Trade Inquiries
          </CtaLink>
        </div>
      </Section>
    </>
  );
}