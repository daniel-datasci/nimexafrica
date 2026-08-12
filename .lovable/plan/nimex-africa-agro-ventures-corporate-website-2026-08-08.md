# NIMEX Africa Agro Ventures — Corporate Website

A multi-page institutional agribusiness site built from your blueprint, benchmarked against Bunge, Cargill Agriculture and Olam Agri: premium corporate tone, quantified proof points, clean value-chain storytelling, editorial blocks.

Note: the "original content the company sent" did not come through as an attachment in this message. I'll build the full site from the blueprint; re-upload that file any time and I'll fold in anything missing.

## Site structure (real routes, not anchors)

```text
/                        Home
/about                   Overview, mission, core values
/about/alliance          Mexico–Africa Transatlantic Alliance
/about/leadership        Leadership, governance & compliance
/value-chain             Overview + upstream/midstream/downstream
/value-chain/upstream
/value-chain/midstream
/value-chain/downstream
/value-chain/technology  Smart farming, traceability, precision agronomy
/commodities             Portfolio hub (4 category deep-dives on page)
/sustainability          ESG hub: climate-smart, outgrower, social inclusion
/investors               Investor, partner & trade center
/contact                 Offices, desks, inquiry form
+ /privacy, /terms, /anti-bribery, /esg-policy
```

Header with dropdown nav (About Us, Value Chain, Commodities & Trade, Sustainability & Impact, Investor & Media Center) plus a "Partner With Us" CTA. Mobile: full-screen accordion menu. Four-column footer exactly as specified.

## Home page composition

1. Hero — headline, sub-headline, two CTAs, full-bleed image of African crop fields **with a herd of cattle** in frame (generated at high fidelity).
2. Metrics band — the four quantified proof points, animated count-up.
3. About NIMEX + three core-value cards.
4. Transatlantic Alliance — split editorial block, Mexico ↔ Africa.
5. Value chain — three-stage horizontal flow (Upstream → Midstream → Downstream) linking to each detail page.
6. Commodity portfolio — four category cards with product lines.
7. Technology & smart farming — dark contrast section.
8. Sustainability & impact — stat-led block.
9. Investor & partner CTA band.
10. Locations preview + contact CTA.

## Content handling

- All copy is used verbatim from the blueprint, including the commodity table (rendered as a responsive comparison table on desktop, stacked cards on mobile).
- Placeholder figures (`$XX Million`, `XX,000+`, phone numbers) are kept as visible placeholders in a single `src/content/company.ts` file so you can swap real numbers in one place.
- "Download Corporate Profile (PDF)" links to a placeholder asset until you supply the real PDF.
- Contact form is front-end only for now (no backend). If you want submissions stored and emailed, say so and I'll add Lovable Cloud.

## Design direction

Institutional, not startup-y: deep agrarian green + warm harvest gold accent on off-white, generous whitespace, restrained motion, editorial serif headlines paired with a clean grotesque for body. All tokens defined in `src/styles.css` — no hardcoded colors.

## Technical notes

- TanStack Start file routes under `src/routes/`; shared `Header`/`Footer` in `__root.tsx`.
- Per-route `head()` with unique title, description, og:title, og:description, canonical; Organization JSON-LD at root.
- Generated hero and section imagery saved to `src/assets/`; alt text on every image; lazy loading below the fold.
- `public/robots.txt` and `sitemap.xml` updated with all routes.

## Open items I'll leave as placeholders

Real metric figures, phone numbers, corporate profile PDF, leadership bios and headshots, investor report downloads.
