import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { a as NumberedList, c as Section, l as SectionHeading, n as CtaLink, o as PageHero } from "./primitives-CYI8PEXh.mjs";
import { t as downstream_port_default } from "./downstream-port-C4E4QbPU.mjs";
import { d as metrics, s as company, u as investorTracks } from "./router-B8Ug8g5J.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/investors-rDjHfTuE.js
var import_jsx_runtime = require_jsx_runtime();
function InvestorsPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
			eyebrow: "Investor & Media Center",
			title: "Capital, Partnerships, and Institutional Growth",
			intro: "NIMEX is structured to partner with institutional investors, sovereign wealth funds, development finance institutions (DFIs), and international trade counterparties seeking managed exposure to West Africa's agricultural sector.",
			image: downstream_port_default
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
			eyebrow: "Engagement Tracks",
			title: "Three Ways to Partner With NIMEX"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-14",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(NumberedList, { items: investorTracks })
		})] }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
			tone: "deep",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
				eyebrow: "Scale Indicators",
				title: "Platform Metrics",
				className: "[&_h2]:text-deep-foreground [&_p]:text-deep-foreground/75"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dl", {
				className: "mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4",
				children: metrics.map((m) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "rounded-3xl bg-deep-foreground/5 p-8",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
						className: "font-display text-3xl text-accent",
						children: m.value
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
						className: "mt-3 text-sm leading-relaxed text-deep-foreground/75",
						children: m.label
					})]
				}, m.label))
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
			tone: "muted",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-12 lg:grid-cols-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
					eyebrow: "Documents & Media",
					title: "Corporate Materials",
					intro: "The corporate profile is available on request. Annual reporting, impact disclosures and press materials will be published in this section."
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid gap-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: company.corporateProfileUrl,
							className: "flex items-center justify-between bg-card p-7 transition-colors hover:bg-secondary",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-lg",
								children: "Corporate Profile (PDF)"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "eyebrow text-accent",
								children: "Download"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: `mailto:${company.emails.corporate}`,
							className: "flex items-center justify-between bg-card p-7 transition-colors hover:bg-secondary",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-lg",
								children: "Corporate & Investor Desk"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "eyebrow text-accent",
								children: company.emails.corporate
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: `mailto:${company.emails.international}`,
							className: "flex items-center justify-between bg-card p-7 transition-colors hover:bg-secondary",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-lg",
								children: "Mexico–Africa Trade Desk"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "eyebrow text-accent",
								children: company.emails.international
							})]
						})
					]
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-12",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CtaLink, {
					to: "/contact",
					children: "Speak With Investor Relations"
				})
			})]
		})
	] });
}
//#endregion
export { InvestorsPage as component };
