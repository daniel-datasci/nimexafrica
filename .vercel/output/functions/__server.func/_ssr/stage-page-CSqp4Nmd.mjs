import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { a as NumberedList, c as Section, l as SectionHeading, n as CtaLink, o as PageHero } from "./primitives-CYI8PEXh.mjs";
import { m as valueChain } from "./router-B8Ug8g5J.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/stage-page-CSqp4Nmd.js
var import_jsx_runtime = require_jsx_runtime();
function StagePage({ slug, image, imageAlt, nextTo, nextLabel }) {
	const stage = valueChain.find((s) => s.slug === slug);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
		eyebrow: `${stage.stage} Operations`,
		title: stage.title,
		intro: stage.summary,
		image,
		imageAlt: ""
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:items-center",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: image,
				alt: imageAlt,
				width: 1408,
				height: 1008,
				loading: "lazy",
				decoding: "async",
				className: "aspect-[4/3] w-full rounded-[1.75rem] object-cover"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
				eyebrow: "Capabilities",
				title: `What we operate across ${stage.stage.toLowerCase()}`,
				intro: "By controlling inputs, cultivation, post-harvest logistics, processing and off-take, we eliminate value leakage, lower operational costs, and guarantee supply continuity."
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-16",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(NumberedList, { items: stage.items })
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mt-12 flex flex-wrap gap-3",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CtaLink, {
				to: nextTo,
				children: nextLabel
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CtaLink, {
				to: "/contact",
				variant: "outline",
				children: "Trade Inquiries"
			})]
		})
	] })] });
}
//#endregion
export { StagePage as t };
