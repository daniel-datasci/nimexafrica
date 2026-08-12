import { pageJsonLd } from "@/lib/structured-data";
import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, ArrowUpRight, MapPin, Star } from "lucide-react";
import {
  alliancePillars,
  climateSmart,
  commodities,
  company,
  coreValues,
  metrics,
  technology,
  valueChain,
} from "@/content/company";
import { AccentButton, CtaLink, Em, Eyebrow, Reveal, Section, SectionHeading } from "@/components/site/primitives";
import { AccordionList } from "@/components/site/accordion-list";
import { HeroMedia, LazyVideo } from "@/components/site/hero-media";
import heroImg from "@/assets/hero-fields-cattle.webp";
import heroVideoMp4 from "@/assets/hero-fields-cattle-loop.mp4";
import heroVideo1080Webm from "@/assets/hero-loop-1080.webm";
import heroVideo720Webm from "@/assets/hero-loop-720.webm";
import allianceImg from "@/assets/alliance-greenhouse.webp";
import techImg from "@/assets/technology-precision.webp";
import techVideoMp4 from "@/assets/tech-drone.mp4";
import techVideoWebm from "@/assets/tech-drone.webm";
import communityImg from "@/assets/community-outgrowers.webp";
import flatlayImg from "@/assets/commodities-flatlay.webp";
import portImg from "@/assets/downstream-port.webp";
import processingImg from "@/assets/midstream-processing.webp";

const stageLinks = {
  upstream: "/value-chain/upstream",
  midstream: "/value-chain/midstream",
  downstream: "/value-chain/downstream",
} as const;

const stageImages = {
  upstream: communityImg,
  midstream: processingImg,
  downstream: portImg,
} as const;

const partners = [
  "NAQS Certified",
  "AfCFTA Trade Corridor",
  "Mexico Agro Alliance",
  "Global GAP",
  "DFI Blended Finance",
  "ISO 22000 Aligned",
];

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "NIMEX Africa Agro Ventures | Transatlantic Agribusiness Platform" },
      {
        name: "description",
        content:
          "NIMEX Africa Agro Ventures builds tech-enabled agro-ecosystems from seed and cultivation to processing, trade and cross-border distribution between Mexico and West Africa.",
      },
      {
        property: "og:title",
        content: "Driving Innovation Across the Transatlantic Agricultural Value Chain",
      },
      {
        property: "og:description",
        content:
          "An institutional agribusiness platform bridging Mexican agricultural technology and African land, climate diversity and market potential.",
      },
      { property: "og:type", content: "website" },
      { property: "og:image", content: "https://nimexafrica.com/og/home.jpg" },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { name: "twitter:image", content: "https://nimexafrica.com/og/home.jpg" },
      { property: "og:url", content: "https://nimexafrica.com/" },
    ],
    links: [
      { rel: "canonical", href: "https://nimexafrica.com/" },
      { rel: "preload", as: "image", href: heroImg },
    ],
    scripts: pageJsonLd({
      path: "/",
      name: "NIMEX Africa Agro Ventures | Transatlantic Agribusiness Platform",
      description: "NIMEX Africa Agro Ventures builds tech-enabled agro-ecosystems from seed and cultivation to processing, trade and cross-border distribution between Mexico and West Africa.",
      image: "https://nimexafrica.com/og/home.jpg",
      type: "WebPage",
    }),
  }),
  component: Index,
});

function Index() {
  return (
    <>
      {/* Hero — full-bleed, edge to edge, nav overlays it */}
      <section className="relative isolate flex min-h-[100svh] w-full flex-col justify-end overflow-hidden text-deep-foreground">
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <HeroMedia
            poster={heroImg}
            alt="Rows of maize and soybean crops at sunset with a herd of cattle grazing along the field edge in West Africa"
            sources={[
              // Mobile / small viewports — 720p WebM with an H.264 fallback
              { src: heroVideo720Webm, type: "video/webm", media: "(max-width: 768px)" },
              { src: heroVideoMp4, type: "video/mp4", media: "(max-width: 768px)" },
              // Desktop — 1080p, VP9 first (about half the bytes of H.264)
              { src: heroVideo1080Webm, type: "video/webm" },
              { src: heroVideoMp4, type: "video/mp4" },
            ]}
          />
        </div>
        <div className="absolute inset-0 -z-10 bg-gradient-to-t from-deep via-deep/55 to-deep/35" aria-hidden />

        <div className="mx-auto w-full max-w-7xl px-4 pb-10 pt-20 sm:px-6 lg:px-8 lg:pb-14 lg:pt-30">
          <div className="hero-in">
            <Eyebrow className="text-deep-foreground">Mexico · West Africa · Global Markets</Eyebrow>
          </div>
          <h1
            className="hero-in mt-6 max-w-5xl text-balance text-4xl leading-[1.03] sm:text-5xl lg:text-[4.5rem]"
            style={{ animationDelay: "120ms" }}
          >
            Driving Innovation Across the <Em>Transatlantic Agricultural Value Chain</Em>
          </h1>
          <p
            className="hero-in mt-6 max-w-xl text-base leading-relaxed text-deep-foreground/80"
            style={{ animationDelay: "240ms" }}
          >
            An institutional agribusiness platform bridging Mexican agricultural technology and African land, climate
            diversity and market potential — from seed and cultivation to industrial processing, trade and cross-border
            distribution.
          </p>
          <div className="hero-in mt-9 flex flex-wrap gap-3" style={{ animationDelay: "360ms" }}>
            <AccentButton to="/value-chain">Explore Our Value Chain</AccentButton>
            <a
              href={company.corporateProfileUrl}
              className="group inline-flex items-center gap-2 rounded-full border border-deep-foreground/30 bg-deep-foreground/10 px-6 py-3.5 text-sm font-medium text-deep-foreground backdrop-blur-md transition-all duration-300 hover:-translate-y-0.5 hover:bg-deep-foreground/20"
            >
              Corporate Profile
              <ArrowUpRight
                className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                aria-hidden
              />
            </a>
          </div>
        </div>

        <div className="hero-in mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8" style={{ animationDelay: "480ms" }}>
          <div className="grid grid-cols-[minmax(0,1fr)_auto] items-center gap-4 border-t border-deep-foreground/20 py-5">
            <span className="eyebrow flex min-w-0 items-center gap-2 text-deep-foreground/70">
              Scroll
              <ArrowRight className="h-3.5 w-3.5 rotate-90" aria-hidden />
            </span>
            <div className="flex shrink-0 items-center gap-3">
              <span className="hidden items-center gap-2 rounded-full bg-deep-foreground/10 px-4 py-2 text-sm backdrop-blur-md sm:inline-flex">
                <Star className="h-4 w-4 fill-gold text-gold" aria-hidden />
                Two operating hubs
              </span>
              <span className="inline-flex items-center gap-2 rounded-full bg-deep-foreground/10 px-4 py-2 text-sm backdrop-blur-md">
                <MapPin className="h-4 w-4 text-accent" aria-hidden />
                Abuja · Lagos
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Credentials marquee */}
      <section className="overflow-hidden px-4 py-10 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-[auto_minmax(0,1fr)] lg:items-center">
          <p className="max-w-[12rem] text-sm leading-snug text-muted-foreground">
            Operating to <span className="text-foreground">international</span> agro-trade standards
          </p>
          <div className="relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
            <div className="marquee-track flex w-max items-center gap-14 pr-14">
              {[...partners, ...partners].map((p, i) => (
                <span
                  key={`${p}-${i}`}
                  className="whitespace-nowrap text-lg font-medium tracking-tight text-foreground/35"
                >
                  {p}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Metrics */}
      <Section className="pt-6">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {metrics.map((m, i) => (
            <Reveal key={m.label} delay={i * 80}>
              <div className="flex h-full flex-col justify-between rounded-3xl bg-surface p-7 ring-1 ring-border/70 transition-all duration-500 hover:-translate-y-1 hover:bg-card hover:shadow-[0_24px_60px_-40px_oklch(0.2_0.03_155_/_0.8)]">
                <p className="text-2xl font-semibold leading-none tracking-tight text-primary">{m.value}</p>
                <p className="mt-6 text-sm leading-relaxed text-muted-foreground">{m.label}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* About + accordion */}
      <Section>
        <SectionHeading
          eyebrow="About NIMEX Africa"
          title="Building a Transatlantic Engine for"
          accent="Global Food Security"
          intro="We operate not merely as a commercial trader or primary farmer, but as an integrated value-chain manager — mitigating operational risk, maximising per-hectare productivity, and guaranteeing market delivery for domestic industrial consumers and international buyers alike."
        />
        <div className="mt-14 grid gap-10 lg:grid-cols-2 lg:items-center">
          <Reveal className="order-2 lg:order-1">
            <AccordionList items={coreValues} />
            <div className="mt-8">
              <CtaLink to="/about" variant="ghost">
                Read the full company overview
                <ArrowRight className="ml-2 inline h-4 w-4" aria-hidden />
              </CtaLink>
            </div>
          </Reveal>
          <Reveal delay={120} className="order-1 lg:order-2">
            <img
              src={communityImg}
              alt="Women outgrower farmers standing in a field holding baskets of freshly harvested vegetables"
              width={1408}
              height={1008}
              loading="lazy"
              decoding="async"
              className="aspect-[4/3] w-full rounded-[1.75rem] object-cover"
            />
          </Reveal>
        </div>
      </Section>

      {/* Alliance */}
      <Section tone="muted">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.05fr] lg:items-center lg:gap-12">
          {/* Intro text: first on mobile, right column on desktop */}
          <Reveal className="order-1 lg:col-start-2">
            <Eyebrow>The Transatlantic Alliance</Eyebrow>
            <h2 className="mt-5 text-balance text-3xl leading-[1.08] sm:text-4xl lg:text-[2.75rem]">
              Unlocking Agricultural Synergy <Em>Across the Atlantic</Em>
            </h2>
            <p className="mt-5 text-sm leading-relaxed text-muted-foreground lg:text-base">
              Mexico leads in high-density farming, protected horticulture, water efficiency and value-added processing.
              Africa holds over 60% of the world&apos;s uncultivated arable land and fast-expanding industrial demand.
            </p>
          </Reveal>

          {/* Image: between intro and containers on mobile, left column on desktop */}
          <Reveal delay={120} className="order-2 lg:col-start-1 lg:row-span-2 lg:row-start-1">
            <img
              src={allianceImg}
              alt="Agronomist inspecting high-density tomato vines in a protected-cultivation greenhouse"
              width={1408}
              height={1008}
              loading="lazy"
              decoding="async"
              className="aspect-[4/3] w-full rounded-[1.75rem] object-cover"
            />
          </Reveal>

          {/* Containers: last on mobile, right column on desktop */}
          <Reveal delay={180} className="order-3 lg:col-start-2">
            <ul className="space-y-5">
              {alliancePillars.map((p) => (
                <li key={p.title} className="rounded-2xl bg-card/70 p-5 ring-1 ring-border/60">
                  <h3 className="text-base leading-snug">{p.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.body}</p>
                </li>
              ))}
            </ul>
            <div className="mt-9">
              <CtaLink to="/about/alliance">Inside the Alliance</CtaLink>
            </div>
          </Reveal>
        </div>
      </Section>

      {/* Value chain */}
      <Section>
        <SectionHeading
          eyebrow="Integrated Operations"
          title="Complete Control Across the"
          accent="Agricultural Lifecycle"
          intro="By controlling inputs, cultivation, post-harvest logistics, processing and off-take, we eliminate value leakage, lower operational costs and guarantee supply continuity."
        />
        <div className="mt-14 grid gap-5 lg:grid-cols-3">
          {valueChain.map((stage, i) => (
            <Reveal key={stage.slug} delay={i * 100}>
              <Link
                to={stageLinks[stage.slug]}
                className="group flex h-full flex-col overflow-hidden rounded-[1.75rem] bg-surface ring-1 ring-border/70 transition-all duration-500 hover:-translate-y-1.5 hover:shadow-[0_30px_70px_-45px_oklch(0.2_0.03_155_/_0.9)]"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={stageImages[stage.slug]}
                    alt=""
                    width={1408}
                    height={1008}
                    loading="lazy"
                    decoding="async"
                    className="aspect-[16/11] w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <span className="absolute left-4 top-4 rounded-full bg-background/85 px-3 py-1.5 text-xs font-medium backdrop-blur-md">
                    Stage {String(i + 1).padStart(2, "0")} · {stage.stage}
                  </span>
                </div>
                <div className="flex flex-1 flex-col p-7">
                  <h3 className="text-xl leading-snug">{stage.title}</h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">{stage.summary}</p>
                  <span className="mt-7 inline-flex items-center gap-2 text-sm font-medium text-primary">
                    Explore
                    <ArrowUpRight
                      className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                      aria-hidden
                    />
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Commodities */}
      <Section tone="muted">
        <div className="grid gap-10 lg:grid-cols-[1.05fr_1fr] lg:items-center lg:gap-12">
          {/* Intro text: first on mobile, left column on desktop */}
          <Reveal className="order-1 lg:col-start-1">
            <Eyebrow>Commodity Portfolio</Eyebrow>
            <h2 className="mt-5 text-balance text-3xl leading-[1.08] sm:text-4xl lg:text-[2.75rem]">
              High-Value Commodities for <Em>Global &amp; Domestic Markets</Em>
            </h2>
            <p className="mt-5 text-sm leading-relaxed text-muted-foreground lg:text-base">
              High-demand, high-margin agricultural products supporting local industrial manufacturing and international
              trade routes.
            </p>
          </Reveal>

          {/* Media: between intro and containers on mobile, right column on desktop */}
          <Reveal delay={120} className="order-2 lg:col-start-2 lg:row-span-2 lg:row-start-1">
            <img
              src={flatlayImg}
              alt="Studio arrangement of sesame seeds, cocoa beans, cashew nuts, hibiscus and soybeans"
              width={1408}
              height={912}
              loading="lazy"
              decoding="async"
              className="aspect-[4/3] w-full rounded-[1.75rem] object-cover"
            />
          </Reveal>

          {/* Containers: last on mobile, left column on desktop */}
          <Reveal delay={180} className="order-3 lg:col-start-1">
            <div className="grid gap-4 sm:grid-cols-2">
              {commodities.map((c) => (
                <div
                  key={c.category}
                  className="rounded-2xl bg-card/70 p-5 ring-1 ring-border/60 transition-transform duration-500 hover:-translate-y-1"
                >
                  <h3 className="text-base leading-snug">{c.category}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{c.products}</p>
                </div>
              ))}
            </div>
            <div className="mt-9">
              <CtaLink to="/commodities">View Full Portfolio</CtaLink>
            </div>
          </Reveal>
        </div>
      </Section>

      {/* Technology — dark */}
      <Section tone="deep">
        <SectionHeading
          eyebrow="Technology & Smart Farming"
          title="Transforming Agriculture Through"
          accent="Smart Technology"
          intro="We integrate technology across farming operations, processing hubs and supply chains to ensure high productivity and full traceability."
          className="[&_p]:text-deep-foreground/70"
        />
        <div className="mt-14 grid gap-10 lg:grid-cols-[1.05fr_1fr] lg:items-center">
          <Reveal>
            <div className="relative overflow-hidden rounded-[1.75rem]">
              <LazyVideo
                poster={techImg}
                alt="Agricultural drone flying out over crop rows at dawn while an agronomist reviews satellite field mapping on a tablet"
                className="aspect-[4/3] w-full overflow-hidden"
                sources={[
                  { src: techVideoWebm, type: "video/webm" },
                  { src: techVideoMp4, type: "video/mp4" },
                ]}
              />
              <div className="absolute bottom-5 left-5 right-5 rounded-2xl bg-background/85 p-5 backdrop-blur-xl">
                <p className="text-sm font-medium text-foreground">Block-level traceability</p>
                <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
                  Every consignment mapped from farm plot of origin through processing to final delivery.
                </p>
              </div>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <AccordionList items={technology} tone="deep" />
            <div className="mt-9">
              <CtaLink to="/value-chain/technology" variant="outline" className="text-deep-foreground">
                Explore Innovation
              </CtaLink>
            </div>
          </Reveal>
        </div>
      </Section>

      {/* Sustainability */}
      <Section>
        <SectionHeading
          eyebrow="Sustainability, ESG & Impact"
          title="Generating Sustainable Value for"
          accent="Communities and Planet"
          intro="We implement agricultural practices that restore ecosystems, lower carbon footprints and create sustainable livelihoods for rural agricultural communities."
        />
        <div className="mt-14 grid gap-5 lg:grid-cols-3">
          {climateSmart.map((c, i) => (
            <Reveal key={c.title} delay={i * 90}>
              <div className="h-full rounded-[1.75rem] bg-surface p-8 ring-1 ring-border/70 transition-all duration-500 hover:-translate-y-1 hover:bg-card">
                <span className="grid h-11 w-11 place-items-center rounded-2xl bg-accent text-sm font-semibold text-accent-foreground">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-6 text-xl leading-snug">{c.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{c.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
        <div className="mt-10">
          <CtaLink to="/sustainability">Our ESG Commitments</CtaLink>
        </div>
      </Section>

      {/* Investor CTA over imagery */}
      <section className="px-4 py-10 sm:px-6 lg:px-8">
        <div className="relative isolate mx-auto max-w-7xl overflow-hidden rounded-[2rem] text-deep-foreground">
          <img
            src={portImg}
            alt=""
            width={1408}
            height={1008}
            loading="lazy"
            decoding="async"
            className="absolute inset-0 -z-10 h-full w-full object-cover"
          />
          <div className="absolute inset-0 -z-10 bg-deep/80" aria-hidden />
          <div className="px-6 py-20 text-center sm:px-10 lg:px-14 lg:py-28">
            <Reveal>
              <h2 className="mx-auto max-w-3xl text-balance text-3xl leading-[1.08] sm:text-4xl lg:text-5xl">
                Capital, partnerships and <Em>institutional growth</Em>
              </h2>
              <p className="mx-auto mt-5 max-w-xl text-sm leading-relaxed text-deep-foreground/75 lg:text-base">
                Structured project finance, DFI and ESG blended co-investment, and long-term off-take contracts across
                West Africa&apos;s agricultural sector.
              </p>
              <div className="mt-9 flex flex-wrap justify-center gap-3">
                <AccentButton to="/investors">Investor Center</AccentButton>
                <CtaLink to="/contact" variant="outline" className="text-deep-foreground">
                  Trade Inquiries
                </CtaLink>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Locations */}
      <Section>
        <SectionHeading
          eyebrow="Global Locations"
          title="Connect With"
          accent="Our Team"
          intro="Corporate strategy and investor relations in Abuja; port logistics, distribution and cross-border trade in Lagos."
        />
        <div className="mt-14 grid gap-5 md:grid-cols-2">
          {company.offices.map((office, i) => (
            <Reveal key={office.city} delay={i * 100}>
              <div className="h-full rounded-[1.75rem] bg-surface p-8 ring-1 ring-border/70">
                <span className="inline-flex items-center gap-2 rounded-full bg-background px-3 py-1.5 text-xs font-medium">
                  <MapPin className="h-3.5 w-3.5 text-accent" aria-hidden />
                  {office.city}
                </span>
                <h3 className="mt-6 text-2xl leading-snug">{office.label}</h3>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{office.address}</p>
                <p className="mt-3 text-sm leading-relaxed text-foreground/80">{office.role}</p>
                <p className="mt-3 text-sm text-muted-foreground">{office.phone}</p>
              </div>
            </Reveal>
          ))}
        </div>
        <div className="mt-10">
          <AccentButton to="/contact">Partner With Us</AccentButton>
        </div>
      </Section>
    </>
  );
}
