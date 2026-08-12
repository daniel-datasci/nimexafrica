import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { a as NumberedList, c as Section, l as SectionHeading, n as CtaLink, o as PageHero } from "./primitives-CYI8PEXh.mjs";
import { t as alliance_greenhouse_default } from "./alliance-greenhouse-CO8zNWwP.mjs";
import { r as alliancePillars } from "./router-B8Ug8g5J.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/about.alliance-Du0f3O_I.js
var import_jsx_runtime = require_jsx_runtime();
function AlliancePage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
			eyebrow: "Mexico–Africa Alliance",
			title: "Unlocking Agricultural Synergy Across the Atlantic",
			intro: "The modern agricultural challenge requires international cooperation and technology exchange.",
			image: alliance_greenhouse_default,
			imageAlt: ""
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid gap-14 lg:grid-cols-2",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "space-y-6 text-base leading-relaxed text-muted-foreground lg:text-lg",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Mexico stands as a global leader in high-density farming, protected horticulture, water efficiency, and value-added food processing. Africa holds over 60% of the world's uncultivated arable land, accompanied by an expanding demographic and industrial market demand." }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "NIMEX converts this strategic alignment into scalable, high-yield commercial outcomes — moving technology, standards and offtake capacity in both directions." })]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid gap-4 sm:grid-cols-2",
				children: [
					{
						k: "60%+",
						v: "of the world's uncultivated arable land is in Africa"
					},
					{
						k: "Protected",
						v: "cultivation and drip irrigation transferred from Mexico"
					},
					{
						k: "3 Regions",
						v: "North America, Europe and Asia off-take corridors"
					},
					{
						k: "2 Hubs",
						v: "Abuja corporate and Lagos commercial operations"
					}
				].map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "rounded-3xl bg-surface p-7",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-display text-2xl text-primary",
						children: s.k
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-sm leading-relaxed text-muted-foreground",
						children: s.v
					})]
				}, s.k))
			})]
		}) }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
			tone: "muted",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
					eyebrow: "Alliance Pillars",
					title: "Three Channels of Transatlantic Exchange"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-14",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(NumberedList, { items: alliancePillars })
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-12",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CtaLink, {
						to: "/contact",
						children: "Engage the International Desk"
					})
				})
			]
		})
	] });
}
//#endregion
export { AlliancePage as component };
