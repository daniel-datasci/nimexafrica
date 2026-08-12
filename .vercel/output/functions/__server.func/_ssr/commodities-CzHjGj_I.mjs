import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { c as Section, l as SectionHeading, n as CtaLink, o as PageHero } from "./primitives-CYI8PEXh.mjs";
import { t as commodities_flatlay_default } from "./commodities-flatlay-CET-ElmH.mjs";
import { o as commodities } from "./router-B8Ug8g5J.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/commodities-CzHjGj_I.js
var import_jsx_runtime = require_jsx_runtime();
function CommoditiesPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
			eyebrow: "Commodities & Trade",
			title: "High-Value Commodities for Global & Domestic Markets",
			intro: "NIMEX focuses on high-demand, high-margin agricultural products that support local industrial manufacturing and international trade routes.",
			image: commodities_flatlay_default
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "hidden overflow-hidden rounded-[1.75rem] ring-1 ring-border lg:block",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("table", {
				className: "w-full border-collapse text-left",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("thead", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
					className: "bg-deep text-deep-foreground",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
							scope: "col",
							className: "eyebrow p-6",
							children: "Commodity Category"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
							scope: "col",
							className: "eyebrow p-6",
							children: "Key Product Lines"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
							scope: "col",
							className: "eyebrow p-6",
							children: "Primary Applications & Target Markets"
						})
					]
				}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tbody", { children: commodities.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
					className: "border-t border-border bg-card align-top",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
							scope: "row",
							className: "w-1/4 p-6 font-display text-lg font-normal",
							children: c.category
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
							className: "w-1/3 p-6 text-sm leading-relaxed text-foreground/80",
							children: c.products
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
							className: "p-6 text-sm leading-relaxed text-muted-foreground",
							children: c.applications
						})
					]
				}, c.category)) })]
			})
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "grid gap-4 lg:hidden",
			children: commodities.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "rounded-3xl bg-surface p-7",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "text-xl leading-snug",
						children: c.category
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "eyebrow mt-6 text-muted-foreground",
						children: "Key Product Lines"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-sm leading-relaxed text-foreground/80",
						children: c.products
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "eyebrow mt-5 text-muted-foreground",
						children: "Applications & Markets"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-sm leading-relaxed text-muted-foreground",
						children: c.applications
					})
				]
			}, c.category))
		})] }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
			tone: "muted",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-12 lg:grid-cols-2 lg:items-center",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: commodities_flatlay_default,
					alt: "Soybeans, maize, sesame, cocoa beans, hibiscus, cashew nuts and ginger arranged on dark slate",
					width: 1600,
					height: 912,
					loading: "lazy",
					decoding: "async",
					className: "aspect-[4/3] w-full rounded-[1.75rem] object-cover"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
					eyebrow: "Quality Assurance",
					title: "Certified, Traceable, Contract-Ready",
					intro: "Every commodity line is graded and certified against NAQS, USDA and EU phytosanitary standards, with block-level traceability from farm plot to port."
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-8 flex flex-wrap gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CtaLink, {
						to: "/contact",
						children: "Request a Trade Quote"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CtaLink, {
						to: "/value-chain/downstream",
						variant: "outline",
						children: "Export Logistics"
					})]
				})] })]
			})
		})
	] });
}
//#endregion
export { CommoditiesPage as component };
