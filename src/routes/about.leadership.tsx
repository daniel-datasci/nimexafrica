import { pageJsonLd } from "@/lib/structured-data";
import { createFileRoute } from "@tanstack/react-router";
import { governance } from "@/content/company";
import { CtaLink, NumberedList, PageHero, Section, SectionHeading } from "@/components/site/primitives";

export const Route = createFileRoute("/about/leadership")({
  head: () => ({
    meta: [
      { title: "Leadership, Governance & Compliance | NIMEX Africa" },
      {
        name: "description",
        content:
          "Board oversight, NAQS/USDA/EU phytosanitary compliance and transparent risk management across NIMEX Africa's cash and physical commodity flows.",
      },
      { property: "og:title", content: "Leadership, Governance & Compliance" },
      {
        property: "og:description",
        content:
          "Experienced leadership and disciplined governance across international trade, agronomy, logistics and project finance.",
      },
      { property: "og:type", content: "article" },
      { property: "og:image", content: "https://nimexafrica.com/og/about-leadership.jpg" },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { name: "twitter:image", content: "https://nimexafrica.com/og/about-leadership.jpg" },
      { property: "og:url", content: "https://nimexafrica.com/about/leadership" },
    ],
    links: [{ rel: "canonical", href: "https://nimexafrica.com/about/leadership" }],
    scripts: pageJsonLd({
      path: "/about/leadership",
      name: "Leadership, Governance & Compliance | NIMEX Africa",
      description: "Board oversight, NAQS/USDA/EU phytosanitary compliance and transparent risk management across NIMEX Africa's cash and physical commodity flows.",
      image: "https://nimexafrica.com/og/about-leadership.jpg",
      type: "AboutPage",
    }),
  }),
  component: LeadershipPage,
});

function LeadershipPage() {
  return (
    <>
      <PageHero
        eyebrow="Leadership & Governance"
        title="Guided by Experienced Leadership and Disciplined Governance"
        intro="NIMEX Africa Agro Ventures Ltd is led by an executive leadership team and advisory board whose expertise spans international trade, corporate strategy, agronomy, supply chain logistics, and project finance."
      />

      <Section>
        <SectionHeading
          eyebrow="Governance Model"
          title="Our Corporate Governance Emphasises"
        />
        <div className="mt-14">
          <NumberedList items={governance} />
        </div>
      </Section>

      <Section tone="muted">
        <SectionHeading
          eyebrow="Executive Team"
          title="Leadership Profiles"
          intro="Detailed biographies for the executive leadership team and advisory board are published alongside the corporate profile."
        />
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[
            "Executive Chairman",
            "Chief Executive Officer",
            "Chief Operating Officer",
            "Director, Transatlantic Partnerships",
          ].map((role) => (
            <div key={role} className="rounded-3xl bg-surface p-8">
              <div className="mb-6 aspect-[4/5] w-full bg-secondary" aria-hidden />
              <p className="eyebrow text-muted-foreground">Profile pending</p>
              <h3 className="mt-2 text-lg leading-snug">{role}</h3>
            </div>
          ))}
        </div>
        <div className="mt-12">
          <CtaLink to="/investors">Investor & Media Center</CtaLink>
        </div>
      </Section>
    </>
  );
}