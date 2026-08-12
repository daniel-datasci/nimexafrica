import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { a as NumberedList, c as Section, l as SectionHeading, n as CtaLink, o as PageHero } from "./primitives-CYI8PEXh.mjs";
import { f as socialImpact, i as climateSmart } from "./router-B8Ug8g5J.mjs";
import { t as community_outgrowers_default } from "./community-outgrowers-CITAy4iu.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/sustainability-BR_qbxBh.js
var import_jsx_runtime = require_jsx_runtime();
function SustainabilityPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
			eyebrow: "Sustainability & Impact",
			title: "Generating Sustainable Value for Communities and Planet",
			intro: "Sustainability is fundamental to NIMEX's business model. We implement agricultural practices that restore ecosystems, lower carbon footprints, and create sustainable livelihoods for rural agricultural communities.",
			image: community_outgrowers_default
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
				eyebrow: "Climate-Smart Agriculture",
				title: "Restoring the Resource Base"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-14",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(NumberedList, { items: climateSmart })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-14 grid gap-4 sm:grid-cols-3",
				children: [
					{
						k: "Up to 50%",
						v: "Reduction in water use through drip irrigation"
					},
					{
						k: "Up to 40%",
						v: "Reduction in post-harvest losses via solar cold chain"
					},
					{
						k: "60%",
						v: "Target participation of women and youth in outgrower hubs"
					}
				].map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "rounded-3xl bg-surface p-8",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-display text-3xl text-primary",
						children: s.k
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 text-sm leading-relaxed text-muted-foreground",
						children: s.v
					})]
				}, s.k))
			})
		] }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
			tone: "muted",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:items-center",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: community_outgrowers_default,
						alt: "Women outgrower farmers holding baskets of freshly harvested peppers and tomatoes",
						width: 1408,
						height: 1008,
						loading: "lazy",
						decoding: "async",
						className: "aspect-[4/3] w-full rounded-[1.75rem] object-cover"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
						eyebrow: "Social Impact & Inclusivity",
						title: "Prosperity That Stays in the Community",
						intro: "Our outgrower model builds formal credit histories, protects farmers against climate shocks and invests directly in host-community infrastructure."
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-14",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(NumberedList, { items: socialImpact })
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-12",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CtaLink, {
						to: "/investors",
						children: "DFI & ESG Co-Investment"
					})
				})
			]
		})
	] });
}
//#endregion
export { SustainabilityPage as component };
