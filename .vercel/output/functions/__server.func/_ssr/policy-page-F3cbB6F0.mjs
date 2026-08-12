import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { c as Section, o as PageHero } from "./primitives-CYI8PEXh.mjs";
import { s as company } from "./router-B8Ug8g5J.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/policy-page-F3cbB6F0.js
var import_jsx_runtime = require_jsx_runtime();
function PolicyPage({ eyebrow, title, intro, sections }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
		eyebrow,
		title,
		intro
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "max-w-3xl space-y-10",
		children: [sections.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
			className: "text-2xl leading-snug",
			children: s.heading
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mt-4 text-base leading-relaxed text-muted-foreground",
			children: s.body
		})] }, s.heading)), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
			className: "border-t border-border pt-8 text-sm text-muted-foreground",
			children: [
				"Questions about this policy can be directed to",
				" ",
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
					className: "text-primary hover:underline",
					href: `mailto:${company.emails.corporate}`,
					children: company.emails.corporate
				}),
				"."
			]
		})]
	}) })] });
}
//#endregion
export { PolicyPage as t };
