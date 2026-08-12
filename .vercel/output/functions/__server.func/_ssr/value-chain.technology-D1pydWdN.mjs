import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { a as NumberedList, c as Section, l as SectionHeading, n as CtaLink, o as PageHero } from "./primitives-CYI8PEXh.mjs";
import { p as technology } from "./router-B8Ug8g5J.mjs";
import { t as technology_precision_default } from "./technology-precision-Ce_PoBiw.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/value-chain.technology-D1pydWdN.js
var import_jsx_runtime = require_jsx_runtime();
function TechnologyPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
			eyebrow: "Tech & Innovation",
			title: "Transforming Agriculture Through Smart Technology",
			intro: "At NIMEX, we integrate technology across our farming operations, processing hubs, and supply chains to ensure high productivity and full traceability.",
			image: technology_precision_default
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
			tone: "deep",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
				eyebrow: "Digital Infrastructure",
				title: "Three Systems Running Across Every Hectare",
				className: "[&_h2]:text-deep-foreground [&_p]:text-deep-foreground/75"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-14",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(NumberedList, {
					items: technology,
					tone: "deep"
				})
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid gap-12 lg:grid-cols-[1.1fr_1fr] lg:items-center",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: technology_precision_default,
				alt: "Agricultural drone flying over crop rows while an agronomist reviews field mapping data on a tablet",
				width: 1408,
				height: 1008,
				loading: "lazy",
				decoding: "async",
				className: "aspect-[4/3] w-full rounded-[1.75rem] object-cover"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
				eyebrow: "Traceability",
				title: "From Farm Plot to Final Delivery",
				intro: "Every consignment carries a digital record of origin, treatment, processing batch and transport route — the evidence base international buyers and auditors require."
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-8",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CtaLink, {
					to: "/commodities",
					children: "View Commodity Portfolio"
				})
			})] })]
		}) })
	] });
}
//#endregion
export { TechnologyPage as component };
