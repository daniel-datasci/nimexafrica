import { pageJsonLd } from "@/lib/structured-data";
import { createFileRoute } from "@tanstack/react-router";
import { commodities } from "@/content/company";
import { CtaLink, PageHero, Section, SectionHeading } from "@/components/site/primitives";
import flatlayImg from "@/assets/commodities-flatlay.webp";

export const Route = createFileRoute("/commodities")({
  head: () => ({
    meta: [
      { title: "Commodity & Agro-Product Portfolio | NIMEX Africa" },
      {
        name: "description",
        content:
          "Non-GMO soybeans, maize, sesame, cocoa, ginger, hibiscus, cashew, horticulture and value-added agro-goods for global and domestic markets.",
      },
      { property: "og:title", content: "High-Value Commodities for Global & Domestic Markets" },
      {
        property: "og:description",
        content:
          "Four commodity categories supporting industrial manufacturing, feed formulation and international trade routes.",
      },
      { property: "og:type", content: "article" },
      { property: "og:image", content: "https://nimexafrica.com/og/commodities.jpg" },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { name: "twitter:image", content: "https://nimexafrica.com/og/commodities.jpg" },
      { property: "og:url", content: "https://nimexafrica.com/commodities" },
    ],
    links: [{ rel: "canonical", href: "https://nimexafrica.com/commodities" }],
    scripts: pageJsonLd({
      path: "/commodities",
      name: "Commodity & Agro-Product Portfolio | NIMEX Africa",
      description: "Non-GMO soybeans, maize, sesame, cocoa, ginger, hibiscus, cashew, horticulture and value-added agro-goods for global and domestic markets.",
      image: "https://nimexafrica.com/og/commodities.jpg",
      type: "Article",
    }),
  }),
  component: CommoditiesPage,
});

function CommoditiesPage() {
  return (
    <>
      <PageHero
        eyebrow="Commodities & Trade"
        title="High-Value Commodities for Global & Domestic Markets"
        intro="NIMEX focuses on high-demand, high-margin agricultural products that support local industrial manufacturing and international trade routes."
        image={flatlayImg}
      />

      <Section>
        {/* Desktop: comparison table */}
        <div className="hidden overflow-hidden rounded-[1.75rem] ring-1 ring-border lg:block">
          <table className="w-full border-collapse text-left">
            <thead>
              <tr className="bg-deep text-deep-foreground">
                <th scope="col" className="eyebrow p-6">Commodity Category</th>
                <th scope="col" className="eyebrow p-6">Key Product Lines</th>
                <th scope="col" className="eyebrow p-6">Primary Applications & Target Markets</th>
              </tr>
            </thead>
            <tbody>
              {commodities.map((c) => (
                <tr key={c.category} className="border-t border-border bg-card align-top">
                  <th scope="row" className="w-1/4 p-6 font-display text-lg font-normal">
                    {c.category}
                  </th>
                  <td className="w-1/3 p-6 text-sm leading-relaxed text-foreground/80">
                    {c.products}
                  </td>
                  <td className="p-6 text-sm leading-relaxed text-muted-foreground">
                    {c.applications}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Mobile: stacked cards */}
        <div className="grid gap-4 lg:hidden">
          {commodities.map((c) => (
            <div key={c.category} className="rounded-3xl bg-surface p-7">
              <h2 className="text-xl leading-snug">{c.category}</h2>
              <p className="eyebrow mt-6 text-muted-foreground">Key Product Lines</p>
              <p className="mt-2 text-sm leading-relaxed text-foreground/80">{c.products}</p>
              <p className="eyebrow mt-5 text-muted-foreground">Applications & Markets</p>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{c.applications}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section tone="muted">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <img
            src={flatlayImg}
            alt="Soybeans, maize, sesame, cocoa beans, hibiscus, cashew nuts and ginger arranged on dark slate"
            width={1600}
            height={912}
            loading="lazy"
            decoding="async"
            className="aspect-[4/3] w-full rounded-[1.75rem] object-cover"
          />
          <div>
            <SectionHeading
              eyebrow="Quality Assurance"
              title="Certified, Traceable, Contract-Ready"
              intro="Every commodity line is graded and certified against NAQS, USDA and EU phytosanitary standards, with block-level traceability from farm plot to port."
            />
            <div className="mt-8 flex flex-wrap gap-3">
              <CtaLink to="/contact">Request a Trade Quote</CtaLink>
              <CtaLink to="/value-chain/downstream" variant="outline">
                Export Logistics
              </CtaLink>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}