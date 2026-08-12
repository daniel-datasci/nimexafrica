import { i as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { c as ArrowUpRight } from "../_libs/lucide-react.mjs";
import { a as cn } from "./router-B8Ug8g5J.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/primitives-CYI8PEXh.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
/** Scroll-triggered reveal wrapper. */
function Reveal({ children, delay = 0, className, as: As = "div" }) {
	const ref = (0, import_react.useRef)(null);
	const [visible, setVisible] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		const el = ref.current;
		if (!el) return;
		const io = new IntersectionObserver((entries) => {
			for (const e of entries) if (e.isIntersecting) {
				setVisible(true);
				io.disconnect();
			}
		}, {
			rootMargin: "0px 0px -12% 0px",
			threshold: .08
		});
		io.observe(el);
		return () => io.disconnect();
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(As, {
		ref,
		"data-visible": visible,
		style: { transitionDelay: `${delay}ms` },
		className: cn("reveal", className),
		children
	});
}
/** Headline helper: renders an italic serif accent phrase. */
function Em({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		className: "serif-accent",
		children
	});
}
function Section({ children, className, tone = "default", id }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id,
		className: cn("px-4 py-16 sm:px-6 lg:px-8 lg:py-24", className),
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: cn("mx-auto max-w-7xl", tone === "muted" && "rounded-[2rem] bg-surface px-5 py-14 sm:px-10 lg:px-14 lg:py-20", tone === "deep" && "rounded-[2rem] bg-deep px-5 py-14 text-deep-foreground sm:px-10 lg:px-14 lg:py-20"),
			children
		})
	});
}
function Eyebrow({ children, className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
		className: cn("inline-flex items-center gap-2 rounded-full border border-current/15 bg-current/5 px-3.5 py-1.5 text-[0.7rem] font-medium tracking-[0.02em] text-current/80", className),
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "h-1.5 w-1.5 rounded-full bg-accent",
			"aria-hidden": true
		}), children]
	});
}
function SectionHeading({ eyebrow, title, accent, intro, align = "left", className }) {
	if (align === "center") return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: cn("mx-auto max-w-2xl text-center", className),
		children: [
			eyebrow ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eyebrow, { children: eyebrow }) : null,
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
				className: "mt-5 text-balance text-3xl leading-[1.08] sm:text-4xl lg:text-5xl",
				children: [
					title,
					" ",
					accent ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Em, { children: accent }) : null
				]
			}),
			intro ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-5 text-base leading-relaxed text-muted-foreground",
				children: intro
			}) : null
		]
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: cn("grid gap-6 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] lg:items-end lg:gap-16", className),
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "min-w-0",
			children: [eyebrow ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eyebrow, { children: eyebrow }) : null, /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
				className: "mt-5 text-balance text-3xl leading-[1.08] sm:text-4xl lg:text-5xl",
				children: [
					title,
					" ",
					accent ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Em, { children: accent }) : null
				]
			})]
		}), intro ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "min-w-0 text-sm leading-relaxed text-muted-foreground lg:text-base",
			children: intro
		}) : null]
	});
}
function CtaLink({ to, children, variant = "solid", className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
		to,
		className: cn("group inline-flex items-center justify-center gap-2 rounded-full px-6 py-3.5 text-sm font-medium transition-all duration-300", variant === "solid" && "bg-primary text-primary-foreground hover:-translate-y-0.5 hover:shadow-[0_12px_30px_-12px_oklch(0.335_0.062_152_/_0.65)]", variant === "outline" && "border border-current/25 backdrop-blur-sm hover:-translate-y-0.5 hover:bg-current/10", variant === "ghost" && "px-0 text-primary hover:gap-3", className),
		children: [children, variant !== "ghost" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, {
			className: "h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5",
			"aria-hidden": true
		}) : null]
	});
}
function AccentButton({ to, children, className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
		to,
		className: cn("group inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3.5 text-sm font-medium text-accent-foreground transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_14px_34px_-12px_oklch(0.895_0.185_122_/_0.8)]", className),
		children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, {
			className: "h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5",
			"aria-hidden": true
		})]
	});
}
function NumberedList({ items, tone = "default" }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
		className: "grid gap-4 md:grid-cols-3",
		children: items.map((item, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
			as: "li",
			delay: i * 90,
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: cn("flex h-full flex-col gap-4 rounded-3xl p-8 transition-transform duration-500 hover:-translate-y-1", tone === "deep" ? "bg-deep-foreground/5 ring-1 ring-deep-foreground/10" : "bg-surface ring-1 ring-border/70"),
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: cn("grid h-10 w-10 place-items-center rounded-full text-sm font-semibold", tone === "deep" ? "bg-accent text-accent-foreground" : "bg-accent text-accent-foreground"),
						children: String(i + 1).padStart(2, "0")
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "text-xl leading-snug",
						children: item.title
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: cn("text-sm leading-relaxed", tone === "deep" ? "text-deep-foreground/70" : "text-muted-foreground"),
						children: item.body
					})
				]
			})
		}, item.title))
	});
}
function PageHero({ eyebrow, title, accent, intro, image, imageAlt }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "px-4 pt-24 sm:px-6 lg:px-8",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative isolate mx-auto max-w-7xl overflow-hidden rounded-[2rem] bg-deep text-deep-foreground",
			children: [image ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: image,
				alt: imageAlt ?? "",
				className: "absolute inset-0 -z-10 h-full w-full scale-105 object-cover opacity-45"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "absolute inset-0 -z-10 bg-gradient-to-r from-deep via-deep/85 to-deep/30",
				"aria-hidden": true
			})] }) : null, /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative px-6 py-20 sm:px-10 lg:px-14 lg:py-28",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eyebrow, {
						className: "text-deep-foreground",
						children: eyebrow
					}) }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						delay: 90,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
							className: "mt-6 max-w-4xl text-balance text-4xl leading-[1.05] sm:text-5xl lg:text-6xl",
							children: [
								title,
								" ",
								accent ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Em, { children: accent }) : null
							]
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						delay: 160,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-6 max-w-2xl text-base leading-relaxed text-deep-foreground/75",
							children: intro
						})
					})
				]
			})]
		})
	});
}
//#endregion
export { NumberedList as a, Section as c, Eyebrow as i, SectionHeading as l, CtaLink as n, PageHero as o, Em as r, Reveal as s, AccentButton as t };
