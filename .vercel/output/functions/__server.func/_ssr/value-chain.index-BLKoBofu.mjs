import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { c as Section, l as SectionHeading, n as CtaLink, o as PageHero } from "./primitives-CYI8PEXh.mjs";
import { m as valueChain } from "./router-B8Ug8g5J.mjs";
import { t as midstream_processing_default } from "./midstream-processing-Bfz-EM9n.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/value-chain.index-BLKoBofu.js
var import_jsx_runtime = require_jsx_runtime();
var stageLinks = {
	upstream: "/value-chain/upstream",
	midstream: "/value-chain/midstream",
	downstream: "/value-chain/downstream"
};
function ValueChainPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
			eyebrow: "What We Do",
			title: "Complete Control Across the Agricultural Lifecycle",
			intro: "NIMEX operates across the full agribusiness spectrum. By controlling inputs, cultivation, post-harvest logistics, processing, and off-take, we eliminate value leakage, lower operational costs, and guarantee supply continuity.",
			image: midstream_processing_default
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "grid gap-4 lg:grid-cols-3",
			children: valueChain.map((stage, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
				to: stageLinks[stage.slug],
				className: "group flex flex-col bg-card p-9 transition-colors hover:bg-secondary",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "eyebrow text-accent",
						children: ["Stage ", String(i + 1).padStart(2, "0")]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-5 text-2xl leading-snug",
						children: stage.stage
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-1 text-sm text-muted-foreground",
						children: stage.title
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-5 flex-1 text-sm leading-relaxed text-muted-foreground",
						children: stage.summary
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "mt-6 space-y-2 border-t border-border pt-5",
						children: stage.items.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
							className: "text-sm text-foreground/80",
							children: item.title
						}, item.title))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "mt-7 text-xs font-semibold uppercase tracking-[0.14em] text-primary group-hover:underline",
						children: [
							"View ",
							stage.stage,
							" →"
						]
					})
				]
			}, stage.slug))
		}) }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
			tone: "muted",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
				eyebrow: "Tech & Innovation",
				title: "Transforming Agriculture Through Smart Technology",
				intro: "Precision agronomy, digital outgrower management and block-level traceability run across every stage of the chain."
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-10",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CtaLink, {
					to: "/value-chain/technology",
					children: "Explore Smart Farming"
				})
			})]
		})
	] });
}
//#endregion
export { ValueChainPage as component };
