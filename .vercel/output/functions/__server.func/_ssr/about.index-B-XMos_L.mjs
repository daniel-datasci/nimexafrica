import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { c as Section, l as SectionHeading, n as CtaLink, o as PageHero } from "./primitives-CYI8PEXh.mjs";
import { t as alliance_greenhouse_default } from "./alliance-greenhouse-CO8zNWwP.mjs";
import { c as coreValues, s as company } from "./router-B8Ug8g5J.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/about.index-B-XMos_L.js
var import_jsx_runtime = require_jsx_runtime();
function AboutPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
			eyebrow: "About Us",
			title: "Building a Transatlantic Engine for Global Food Security",
			intro: company.summary
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid gap-14 lg:grid-cols-[1.15fr_1fr] lg:items-start",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "space-y-6 text-base leading-relaxed text-muted-foreground lg:text-lg",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "NIMEX Africa Agro Ventures Ltd is a premier international agribusiness enterprise established through a strategic cross-continental alliance. Headquartered in Abuja with commercial operational hubs extending through Lagos, NIMEX acts as a bridge connecting two of the world's most dynamic agricultural ecosystems." }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "By deploying proven Mexican agricultural models, protected cultivation techniques, and post-harvest management systems into West Africa's arable landscape, NIMEX addresses critical vulnerabilities in food systems, industrial supply chains, and international trade corridors. We operate not merely as a commercial trader or primary farmer, but as an integrated value-chain manager. Our institutional framework mitigates operational risks, maximizes per-hectare productivity, and guarantees market delivery for domestic industrial consumers and international buyers alike." }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-wrap gap-3 pt-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CtaLink, {
							to: "/value-chain",
							children: "Explore Our Value Chain"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CtaLink, {
							to: "/about/leadership",
							variant: "outline",
							children: "Leadership & Governance"
						})]
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: alliance_greenhouse_default,
				alt: "Agronomist inspecting tomato vines inside a protected-cultivation greenhouse",
				width: 1408,
				height: 1008,
				loading: "lazy",
				decoding: "async",
				className: "aspect-[4/3] w-full rounded-[1.75rem] object-cover"
			})]
		}) }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
			tone: "muted",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
				eyebrow: "Core Values",
				title: "Our Operating Principles",
				intro: "Three commitments govern how we originate, process and deliver every consignment."
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-14 grid gap-4 md:grid-cols-3",
				children: coreValues.map((v) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "rounded-3xl bg-surface p-8",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "text-xl leading-snug",
						children: v.title
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 text-sm leading-relaxed text-muted-foreground",
						children: v.body
					})]
				}, v.title))
			})]
		})
	] });
}
//#endregion
export { AboutPage as component };
