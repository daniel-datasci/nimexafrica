import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { a as NumberedList, c as Section, l as SectionHeading, n as CtaLink, o as PageHero } from "./primitives-CYI8PEXh.mjs";
import { l as governance } from "./router-B8Ug8g5J.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/about.leadership-C2R7XxUm.js
var import_jsx_runtime = require_jsx_runtime();
function LeadershipPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
			eyebrow: "Leadership & Governance",
			title: "Guided by Experienced Leadership and Disciplined Governance",
			intro: "NIMEX Africa Agro Ventures Ltd is led by an executive leadership team and advisory board whose expertise spans international trade, corporate strategy, agronomy, supply chain logistics, and project finance."
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
			eyebrow: "Governance Model",
			title: "Our Corporate Governance Emphasises"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-14",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(NumberedList, { items: governance })
		})] }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
			tone: "muted",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
					eyebrow: "Executive Team",
					title: "Leadership Profiles",
					intro: "Detailed biographies for the executive leadership team and advisory board are published alongside the corporate profile."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4",
					children: [
						"Executive Chairman",
						"Chief Executive Officer",
						"Chief Operating Officer",
						"Director, Transatlantic Partnerships"
					].map((role) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "rounded-3xl bg-surface p-8",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mb-6 aspect-[4/5] w-full bg-secondary",
								"aria-hidden": true
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "eyebrow text-muted-foreground",
								children: "Profile pending"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "mt-2 text-lg leading-snug",
								children: role
							})
						]
					}, role))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-12",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CtaLink, {
						to: "/investors",
						children: "Investor & Media Center"
					})
				})
			]
		})
	] });
}
//#endregion
export { LeadershipPage as component };
