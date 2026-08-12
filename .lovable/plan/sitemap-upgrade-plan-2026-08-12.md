# Sitemap Upgrade Plan

## Comparison: Current vs. Proposed

**Current `public/sitemap.xml`**
- Domain will be updated to: `https://nimexafrica.com`
- Correct routes: every live route in the NIMEX site (`/`, `/about`, `/about/alliance`, `/value-chain/upstream`, etc.)
- Missing: `<lastmod>`, `<changefreq>`, and XML comments for clarity

**Proposed example (thelapisai.com.ng)**
- Wrong domain for this project (`thelapisai.com.ng`)
- Wrong routes: `/services/ai-consulting`, `/industries/saas`, `/case-studies`, `/blog` — these do not exist on the NIMEX site
- Includes useful enhancements: `<lastmod>`, `<changefreq>`, and XML comments

## Recommendation

Keep the **current sitemap structure** because it accurately reflects the real NIMEX routes and domain. Upgrade it by borrowing the useful parts from your example:

1. Add `<lastmod>` with a page-specific date only where we have an authoritative timestamp for a meaningful content change; otherwise omit per project policy.
2. Add `<changefreq>` per page type (homepage weekly, content hubs monthly, legal pages yearly/low priority).
3. Add XML comments to group sections (Homepage, About, Value Chain, Commodities, etc.).
4. Use absolute `https://nimexafrica.com` URLs.
5. Preserve the existing priority values.

## Domain confirmation

Use the custom domain: `https://nimexafrica.com`.

## Implementation

- Confirm `nimexafrica.com` is connected as the project's custom domain (Project Settings → Domains).
- Rewrite `public/sitemap.xml` with grouped comments, `<changefreq>`, and accurate `<lastmod>` values where justified, using `https://nimexafrica.com`.
- Validate XML syntax.
- Update the SEO finding for `http:sitemap` once the corrected file is live.
