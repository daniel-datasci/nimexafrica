import { pageJsonLd } from "@/lib/structured-data";
import { createFileRoute } from "@tanstack/react-router";
import { governance } from "@/content/company";
import { CtaLink, NumberedList, PageHero, Section, SectionHeading } from "@/components/site/primitives";
import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

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

type LeadershipProfile = {
  name: string;
  role: string;
  photo?: string;
  professionalProfile?: string;
  additionalProfile?: string | string[];
  keyAreasOfExpertise?: string[];
  internationalCollaboration?: {
    title: string;
    body: string;
  };
  leadership?: string[];
  languages?: string[];
  nationality?: string;
};

const leadershipProfiles: LeadershipProfile[] = [
  {
    name: "AKINSULE SOLOMON ADEMOLA",
    role: "Director | Agricultural Business Executive",
    photo: "/leadership-akinsule-solomon-ademola.png",
    professionalProfile:
      "Experienced agricultural business executive with expertise in farm development, agribusiness management, strategic partnerships, project supervision, and agricultural investment. Provides strategic leadership in developing farm operations, building business relationships, and identifying new opportunities for agricultural growth.",
    additionalProfile:
      "As Director of Nimex Africa Agro Ventures Ltd, he works with farmers, consultants, investors, suppliers, and international agricultural stakeholders to improve productivity, develop sustainable farming practices, and create new commercial opportunities.",
    keyAreasOfExpertise: [
      "Agricultural Business & Farm Development",
      "Strategic Leadership & Business Planning",
      "Agribusiness Investment",
      "Farm Operations & Project Management",
      "International Agricultural Partnerships",
      "Farmer & Stakeholder Relations",
      "Agricultural Technology & Knowledge Transfer",
      "Business Negotiation & Market Development",
      "Sustainable Agriculture",
      "Team & Operational Management",
    ],
    internationalCollaboration: {
      title: "Nigeria–Mexico Agricultural Partnership",
      body: "Facilitates collaboration between Nigerian agricultural businesses and Mexican farmers, consultants, technical experts, and investors, supporting knowledge exchange, modern farming practices, technology transfer, investment opportunities, and commercial partnerships.",
    },
    leadership: [
      "Strategic business planning and decision-making",
      "Agricultural project supervision",
      "Partnership and stakeholder management",
      "International business relations",
      "Agricultural investment development",
      "Organizational growth and development",
    ],
    languages: ["English", "Spanish"],
    nationality: "Nigerian / Mexican",
  },
  {
    name: "JOHN-BEDE OLAKUNLE ANTHONIO",
    role: "Architect and Entrepreneur",
    photo: "/leadership-john-bede-olakunle-anthonio.png",
    professionalProfile:
      "John-bede Anthonio, a social serial entrepreneur, who has been involved in several companies in Nigeria and now looking globally. A graduate of Architecture from University of Lagos, Nigeria, a professional trained architect, a member of MNIA with years of experience in construction and real estate and large scale development.",
    additionalProfile: [
      "He has been involved in start up companies such as Projectscope Ltd, Omatek Computers Plc, Multiverse Mining and Exploration Plc, John Bede Associates, Carterbridge Property Development Company Ltd.",
      "He has eight years experience working with the Lagos State Government during the tenure of Governor Tinubu.",
      "He was the former Chief Executive LSDPC, Lagos State Property Development Corporation, 1999 - 2004.",
      "2004-2007 He was the Senior Special Assistant to the Governor on Special Projects. Principally involved in School Rehabilitation across the state.",
      "Currently, in response to the diversification of the Nigerian economy from oil, his passion is to focus on promotion of export of Nigeria products and services. As a specialist in export he is one of the founders of A-Z SME NETWORK COMPANY promoting export.",
      "He's focused products are Yam, Cassava, Ginger, Sesame seed, and Coconut.",
      "Because of these products he's involved in large scale agro development and agro processing.",
      "In addition, he has partnered with a Warehouse and logistic base in New York City.",
      "In his archives are various awards and honours which includes The Lagos state Ambassador for COCONUT.",
      "He is currently the chairman of Multiverse Mining and Exploration Plc, a publicly quoted company. Multiverse mines Zinc in Nassarawa and exports to China.",
      "He is happily married and blessed with children.",
      "He's a minister of the Gospel of Jesus Christ and a worshipper at Winners Chapel. A member of Gideons International and the Full Gospel Business Mens Fellowship International.",
      "His hobbies are reading, traveling, swimming, golf and most importantly mentoring young people.",
    ],
  },
  {
    name: "MRS JOYCE DAODU",
    role: "Entrepreneur and Project Manager",
    photo: "/leadership-joyce-daodu.png",
    professionalProfile:
      "Mrs Joyce Daodu is a Chartered Surveyor, qualified project manager, strategic business leader and serial entrepreneur with extensive experience in project management, real estate, business consultancy, entrepreneurship and community development. She is a member of the Royal Institution of Chartered Surveyors (RICS).",
    additionalProfile: [
      "Joyce holds an MSc in Real Estate Management and a degree in Business Management from Birmingham City University, UK. Having worked across both the private and public sectors, she subsequently established and manages businesses and now contributes to enterprise development across multiple sectors.",
      "Her professional experience includes consultancy services to UK local authorities and social housing organisations, including Worcestershire County Council, Redditch Borough Council, Nottingham City Council, Birmingham City Council, Wolverhampton Homes and Adullam Housing Association. This has given her extensive expertise in surveying, real estate management, project management and the wider built environment.",
      "Joyce serves on the boards of companies in the UK and Nigeria, providing strategic leadership, corporate governance, business development and organisational direction. Her business interests include real estate and Community Interest Company initiatives in the UK, and real estate and agricultural consultancy in Nigeria, with a focus on commercially sustainable enterprises, employment creation and economic development.",
      "Passionate about creating lasting economic and social value, Joyce brings a multidisciplinary perspective that connects commercial objectives, investment, sustainable development and community impact.",
      "At NIMEX, she combines her project management expertise, strategic leadership and entrepreneurial experience to support strategic growth, investment and enterprise management. Her broad professional perspective and commitment to sustainable investment position her to contribute meaningfully to NIMEX’s vision and long term objectives.",
    ],
  },
];

const toParagraphArray = (content?: string | string[]) =>
  Array.isArray(content) ? content : content ? [content] : [];

function LeadershipPage() {
  const [activeProfileName, setActiveProfileName] = useState<string | null>(null);
  const activeProfile = leadershipProfiles.find((profile) => profile.name === activeProfileName) ?? null;

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
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {leadershipProfiles.map((profile) => (
            <article
              key={profile.name}
              className="rounded-3xl bg-surface p-8 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_20px_55px_-36px_oklch(0.2_0.03_155_/_0.4)]"
            >
              {profile.photo ? (
                <img
                  src={profile.photo}
                  alt={`${profile.name} portrait`}
                  loading="lazy"
                  className="mb-6 aspect-[4/5] w-full rounded-2xl bg-secondary object-cover object-top"
                />
              ) : (
                <div className="mb-6 aspect-[4/5] w-full rounded-2xl bg-secondary" aria-hidden />
              )}
              <p className="eyebrow text-muted-foreground">Leadership Profile</p>
              <h3 className="mt-2 text-lg leading-snug">{profile.name}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{profile.role}</p>
              <button
                type="button"
                aria-haspopup="dialog"
                onClick={() => setActiveProfileName(profile.name)}
                className="mt-4 inline-flex cursor-pointer items-center rounded-full border border-current/25 px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-background"
              >
                View full profile
              </button>
            </article>
          ))}
        </div>
        <Dialog
          open={activeProfile !== null}
          onOpenChange={(open) => {
            if (!open) {
              setActiveProfileName(null);
            }
          }}
        >
          {activeProfile ? (
            <DialogContent className="max-h-[90svh] max-w-3xl overflow-y-auto p-0">
              <div className="p-6 sm:p-8">
                <DialogHeader className="text-left">
                  <DialogTitle className="text-2xl leading-tight">{activeProfile.name}</DialogTitle>
                  <DialogDescription className="text-base text-muted-foreground">{activeProfile.role}</DialogDescription>
                </DialogHeader>

                <div className="mt-6 space-y-6">
                  {activeProfile.photo ? (
                    <img
                      src={activeProfile.photo}
                      alt={`${activeProfile.name} portrait`}
                      loading="lazy"
                      className="w-full max-w-sm rounded-2xl bg-secondary object-cover object-top"
                    />
                  ) : null}

                  {activeProfile.professionalProfile ? (
                    <div>
                      <h4 className="text-sm font-semibold uppercase tracking-[0.16em] text-muted-foreground">
                        Professional Profile
                      </h4>
                      <p className="mt-3 text-sm leading-relaxed text-foreground/85">{activeProfile.professionalProfile}</p>
                      {toParagraphArray(activeProfile.additionalProfile).map((paragraph, index) => (
                        <p key={`${activeProfile.name}-profile-${index}`} className="mt-3 text-sm leading-relaxed text-foreground/85">
                          {paragraph}
                        </p>
                      ))}
                    </div>
                  ) : null}

                  {activeProfile.keyAreasOfExpertise?.length ? (
                    <div>
                      <h4 className="text-sm font-semibold uppercase tracking-[0.16em] text-muted-foreground">
                        Key Areas of Expertise
                      </h4>
                      <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-relaxed text-foreground/85">
                        {activeProfile.keyAreasOfExpertise.map((item) => (
                          <li key={item}>{item}</li>
                        ))}
                      </ul>
                    </div>
                  ) : null}

                  {activeProfile.internationalCollaboration ? (
                    <div>
                      <h4 className="text-sm font-semibold uppercase tracking-[0.16em] text-muted-foreground">
                        International Collaboration
                      </h4>
                      <p className="mt-3 text-sm font-medium text-foreground">{activeProfile.internationalCollaboration.title}</p>
                      <p className="mt-2 text-sm leading-relaxed text-foreground/85">
                        {activeProfile.internationalCollaboration.body}
                      </p>
                    </div>
                  ) : null}

                  {activeProfile.leadership?.length ? (
                    <div>
                      <h4 className="text-sm font-semibold uppercase tracking-[0.16em] text-muted-foreground">
                        Leadership
                      </h4>
                      <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-relaxed text-foreground/85">
                        {activeProfile.leadership.map((item) => (
                          <li key={item}>{item}</li>
                        ))}
                      </ul>
                    </div>
                  ) : null}

                  {activeProfile.languages?.length ? (
                    <div>
                      <h4 className="text-sm font-semibold uppercase tracking-[0.16em] text-muted-foreground">
                        Languages
                      </h4>
                      <p className="mt-3 text-sm text-foreground/85">{activeProfile.languages.join(" | ")}</p>
                      {activeProfile.nationality ? (
                        <p className="mt-2 text-sm text-foreground/85">
                          <span className="font-medium text-foreground">Nationality:</span> {activeProfile.nationality}
                        </p>
                      ) : null}
                    </div>
                  ) : null}
                </div>
              </div>
            </DialogContent>
          ) : null}
        </Dialog>
        <div className="mt-12">
          <CtaLink to="/investors">Investor & Media Center</CtaLink>
        </div>
      </Section>
    </>
  );
}