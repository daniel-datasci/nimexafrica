// Shared JSON-LD builders. Keep every graph node self-referencing the page it
// is rendered on so crawlers can link Organization -> WebSite -> WebPage.

export const SITE_URL = "https://nimexafrica.com";

export const ORG_ID = `${SITE_URL}/#organization`;
export const SITE_ID = `${SITE_URL}/#website`;

const TITLE_MAP: Record<string, string> = {
  "/about": "About",
  "/about/alliance": "Mexico–Africa Alliance",
  "/about/leadership": "Leadership & Governance",
  "/value-chain": "Value Chain",
  "/value-chain/upstream": "Upstream",
  "/value-chain/midstream": "Midstream",
  "/value-chain/downstream": "Downstream",
  "/value-chain/technology": "Technology & Innovation",
  "/commodities": "Commodities",
  "/sustainability": "Sustainability & ESG",
  "/investors": "Investors & Partnerships",
  "/contact": "Contact",
  "/privacy": "Privacy Policy",
  "/terms": "Terms of Use",
  "/esg-policy": "ESG Policy",
  "/anti-bribery": "Anti-Bribery Policy",
};

function breadcrumbs(path: string) {
  const items = [{ name: "Home", item: `${SITE_URL}/` }];
  if (path !== "/") {
    const segments = path.replace(/^\//, "").split("/");
    let current = "";
    for (const segment of segments) {
      current += `/${segment}`;
      items.push({ name: TITLE_MAP[current] ?? segment, item: `${SITE_URL}${current}` });
    }
  }
  return {
    "@type": "BreadcrumbList",
    itemListElement: items.map((entry, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: entry.name,
      item: entry.item,
    })),
  };
}

export interface PageSchemaInput {
  path: string;
  name: string;
  description: string;
  image: string;
  /** "Article" for editorial/content pages, "WebPage" for the home and legal pages. */
  type?: "WebPage" | "Article" | "ContactPage" | "AboutPage";
  datePublished?: string;
  dateModified?: string;
}

/** Returns the `scripts` array for a route's head(): a WebPage/Article graph. */
export function pageJsonLd({
  path,
  name,
  description,
  image,
  type = "WebPage",
  datePublished = "2026-08-12",
  dateModified = "2026-08-12",
}: PageSchemaInput) {
  const url = `${SITE_URL}${path}`;
  const node: Record<string, unknown> = {
    "@type": type,
    "@id": `${url}#page`,
    url,
    name,
    headline: name,
    description,
    primaryImageOfPage: { "@type": "ImageObject", url: image, width: 1200, height: 630 },
    image,
    isPartOf: { "@id": SITE_ID },
    about: { "@id": ORG_ID },
    inLanguage: "en",
    breadcrumb: breadcrumbs(path),
  };

  if (type === "Article") {
    node["author"] = { "@id": ORG_ID };
    node["publisher"] = { "@id": ORG_ID };
    node["datePublished"] = datePublished;
    node["dateModified"] = dateModified;
    node["mainEntityOfPage"] = { "@type": "WebPage", "@id": `${url}#page` };
  }

  return [
    {
      type: "application/ld+json",
      children: JSON.stringify({ "@context": "https://schema.org", "@graph": [node] }),
    },
  ];
}
