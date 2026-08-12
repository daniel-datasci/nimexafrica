import { Link } from "@tanstack/react-router";
import { company } from "@/content/company";

const quickLinks = [
  { label: "About Us", to: "/about" },
  { label: "Value Chain", to: "/value-chain" },
  { label: "Commodities", to: "/commodities" },
  { label: "Sustainability", to: "/sustainability" },
  { label: "Investor Center", to: "/investors" },
];

const operations = [
  { label: "Upstream", to: "/value-chain/upstream" },
  { label: "Midstream", to: "/value-chain/midstream" },
  { label: "Downstream", to: "/value-chain/downstream" },
  { label: "Smart Tech", to: "/value-chain/technology" },
  { label: "Mexico Hub", to: "/about/alliance" },
];

const legal = [
  { label: "Privacy Policy", to: "/privacy" },
  { label: "Terms of Use", to: "/terms" },
  { label: "Anti-Bribery & Corruption Policy", to: "/anti-bribery" },
  { label: "ESG Policy", to: "/esg-policy" },
];

function Column({
  title,
  links,
}: {
  title: string;
  links: { label: string; to: string }[];
}) {
  return (
    <div>
      <h3 className="eyebrow text-deep-foreground/50">{title}</h3>
      <ul className="mt-5 space-y-3">
        {links.map((l) => (
          <li key={l.label}>
            <Link
              to={l.to}
              className="inline-block text-sm text-deep-foreground/80 transition-all duration-300 hover:translate-x-1 hover:text-accent"
            >
              {l.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function SiteFooter() {
  return (
    <footer className="px-4 pb-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl rounded-[2rem] bg-deep px-6 py-16 text-deep-foreground sm:px-10 lg:px-14 lg:py-20">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <Link to="/" className="inline-block" aria-label="NIMEX Africa Agro Ventures home">
              <img
                src="/nimexlogo.png"
                alt="NIMEX Africa logo"
                width={44}
                height={44}
                className="h-11 w-11 rounded-2xl object-cover"
              />
            </Link>
            <p className="mt-5 text-xl font-semibold leading-snug tracking-tight">{company.name}</p>
            <p className="mt-3 text-sm leading-relaxed text-deep-foreground/75">
              An integrated agribusiness platform headquartered in Abuja with commercial
              operations in Lagos, connecting Mexican agricultural technology with African
              land, production capacity and global trade corridors.
            </p>
            <a
              href={`mailto:${company.emails.general}`}
              className="mt-5 inline-block rounded-full border border-deep-foreground/20 px-4 py-2 text-sm text-accent transition-colors hover:bg-deep-foreground/10"
            >
              {company.emails.general}
            </a>
          </div>
          <Column title="Quick Links" links={quickLinks} />
          <Column title="Operations" links={operations} />
          <Column title="Legal & Compliance" links={legal} />
        </div>

        <div className="mt-16 flex flex-col gap-3 border-t border-deep-foreground/15 pt-6 text-xs text-deep-foreground/60 sm:flex-row sm:items-center sm:justify-between">
          <span>© 2026 NIMEX Africa Agro Ventures Ltd. All Rights Reserved.</span>
          <span>Abuja · Lagos · Mexico City</span>
        </div>
      </div>
    </footer>
  );
}