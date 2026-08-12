import { i as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { c as ArrowUpRight, i as Minus, l as ArrowRight, n as Star, o as MapPin, r as Plus } from "../_libs/lucide-react.mjs";
import { c as Section, i as Eyebrow, l as SectionHeading, n as CtaLink, r as Em, s as Reveal, t as AccentButton } from "./primitives-CYI8PEXh.mjs";
import { t as alliance_greenhouse_default } from "./alliance-greenhouse-CO8zNWwP.mjs";
import { t as commodities_flatlay_default } from "./commodities-flatlay-CET-ElmH.mjs";
import { t as downstream_port_default } from "./downstream-port-C4E4QbPU.mjs";
import { a as cn, c as coreValues, d as metrics, i as climateSmart, m as valueChain, n as hero_fields_cattle_default, o as commodities, p as technology, r as alliancePillars, s as company } from "./router-B8Ug8g5J.mjs";
import { t as technology_precision_default } from "./technology-precision-Ce_PoBiw.mjs";
import { t as community_outgrowers_default } from "./community-outgrowers-CITAy4iu.mjs";
import { t as midstream_processing_default } from "./midstream-processing-Bfz-EM9n.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-DqtPnbc7.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function AccordionList({ items, tone = "default", defaultOpen = 0 }) {
	const [open, setOpen] = (0, import_react.useState)(defaultOpen);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "space-y-3",
		children: items.map((item, i) => {
			const isOpen = open === i;
			return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: cn("overflow-hidden rounded-2xl transition-colors duration-300", tone === "deep" ? "bg-deep-foreground/5 ring-1 ring-deep-foreground/10" : "bg-surface ring-1 ring-border/70", isOpen && (tone === "deep" ? "bg-deep-foreground/10" : "bg-card ring-border")),
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					type: "button",
					onClick: () => setOpen(isOpen ? null : i),
					"aria-expanded": isOpen,
					className: "flex w-full items-center gap-4 px-5 py-4 text-left",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: cn("grid h-8 w-8 shrink-0 place-items-center rounded-lg transition-colors", isOpen ? "bg-accent text-accent-foreground" : "bg-background/70 text-foreground/60", tone === "deep" && !isOpen && "bg-deep-foreground/10 text-deep-foreground/70"),
						"aria-hidden": true,
						children: isOpen ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Minus, { className: "h-4 w-4" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { className: "h-4 w-4" })
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "min-w-0 flex-1 text-base font-medium tracking-tight",
						children: item.title
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: cn("grid transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]", isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"),
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "overflow-hidden",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: cn("px-5 pb-5 pl-17 text-sm leading-relaxed", tone === "deep" ? "text-deep-foreground/70" : "text-muted-foreground"),
							children: item.body
						})
					})
				})]
			}, item.title);
		})
	});
}
/**
* Renders the hero poster as a high-priority image (the LCP candidate) and only
* mounts the looping video once the page is idle, so video bytes never compete
* with first paint. On slow connections or reduced-data mode the video is skipped.
*/
function HeroMedia({ poster, sources, alt, className = "" }) {
	const [showVideo, setShowVideo] = (0, import_react.useState)(false);
	const [ready, setReady] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		const conn = navigator.connection;
		if (conn?.saveData || conn?.effectiveType && /2g/.test(conn.effectiveType)) return;
		let cancelled = false;
		const start = () => {
			if (!cancelled) setShowVideo(true);
		};
		const idle = window.requestIdleCallback;
		const id = idle ? idle(start, { timeout: 2500 }) : window.setTimeout(start, 1200);
		return () => {
			cancelled = true;
			if (!idle) window.clearTimeout(id);
		};
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
		src: poster,
		alt,
		fetchPriority: "high",
		decoding: "async",
		className: `hero-zoom absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ${ready ? "opacity-0" : "opacity-100"} ${className}`
	}), showVideo ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("video", {
		autoPlay: true,
		muted: true,
		loop: true,
		playsInline: true,
		preload: "auto",
		disablePictureInPicture: true,
		"aria-hidden": true,
		onCanPlay: () => setReady(true),
		onEnded: (event) => {
			const video = event.currentTarget;
			video.currentTime = 0;
			video.play();
		},
		className: `hero-zoom absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ${ready ? "opacity-100" : "opacity-0"} ${className}`,
		children: sources.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("source", {
			src: s.src,
			type: s.type,
			media: s.media
		}, s.src))
	}) : null] });
}
/**
* Below-the-fold video: renders the poster only until the element scrolls near
* the viewport, so no video bytes are fetched during initial page load.
*/
function LazyVideo({ poster, sources, alt, className = "" }) {
	const [node, setNode] = (0, import_react.useState)(null);
	const [visible, setVisible] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		if (!node || visible) return;
		const observer = new IntersectionObserver((entries) => {
			if (entries.some((e) => e.isIntersecting)) {
				setVisible(true);
				observer.disconnect();
			}
		}, { rootMargin: "300px" });
		observer.observe(node);
		return () => observer.disconnect();
	}, [node, visible]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		ref: setNode,
		className,
		children: visible ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("video", {
			poster,
			autoPlay: true,
			muted: true,
			loop: true,
			playsInline: true,
			preload: "auto",
			disablePictureInPicture: true,
			"aria-label": alt,
			className: "h-full w-full object-cover",
			children: sources.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("source", {
				src: s.src,
				type: s.type,
				media: s.media
			}, s.src))
		}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
			src: poster,
			alt,
			loading: "lazy",
			decoding: "async",
			className: "h-full w-full object-cover"
		})
	});
}
var hero_fields_cattle_loop_default = "/assets/hero-fields-cattle-loop-CNqyxd79.mp4";
var hero_loop_1080_default = "/assets/hero-loop-1080-M3h_2cKC.webm";
var hero_loop_720_default = "/assets/hero-loop-720-CgeBSwyu.webm";
var tech_drone_default$1 = "/assets/tech-drone-CrAuAL-L.mp4";
var tech_drone_default = "/assets/tech-drone-kmguJ473.webm";
var stageLinks = {
	upstream: "/value-chain/upstream",
	midstream: "/value-chain/midstream",
	downstream: "/value-chain/downstream"
};
var stageImages = {
	upstream: community_outgrowers_default,
	midstream: midstream_processing_default,
	downstream: downstream_port_default
};
var partners = [
	"NAQS Certified",
	"AfCFTA Trade Corridor",
	"Mexico Agro Alliance",
	"Global GAP",
	"DFI Blended Finance",
	"ISO 22000 Aligned"
];
function Index() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "relative isolate flex min-h-[100svh] w-full flex-col justify-end overflow-hidden text-deep-foreground",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "absolute inset-0 -z-10 overflow-hidden",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeroMedia, {
						poster: hero_fields_cattle_default,
						alt: "Rows of maize and soybean crops at sunset with a herd of cattle grazing along the field edge in West Africa",
						sources: [
							{
								src: hero_loop_720_default,
								type: "video/webm",
								media: "(max-width: 768px)"
							},
							{
								src: hero_fields_cattle_loop_default,
								type: "video/mp4",
								media: "(max-width: 768px)"
							},
							{
								src: hero_loop_1080_default,
								type: "video/webm"
							},
							{
								src: hero_fields_cattle_loop_default,
								type: "video/mp4"
							}
						]
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "absolute inset-0 -z-10 bg-gradient-to-t from-deep via-deep/55 to-deep/35",
					"aria-hidden": true
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto w-full max-w-7xl px-4 pb-10 pt-20 sm:px-6 lg:px-8 lg:pb-14 lg:pt-30",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "hero-in",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eyebrow, {
								className: "text-deep-foreground",
								children: "Mexico · West Africa · Global Markets"
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
							className: "hero-in mt-6 max-w-5xl text-balance text-4xl leading-[1.03] sm:text-5xl lg:text-[4.5rem]",
							style: { animationDelay: "120ms" },
							children: ["Driving Innovation Across the ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Em, { children: "Transatlantic Agricultural Value Chain" })]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "hero-in mt-6 max-w-xl text-base leading-relaxed text-deep-foreground/80",
							style: { animationDelay: "240ms" },
							children: "An institutional agribusiness platform bridging Mexican agricultural technology and African land, climate diversity and market potential — from seed and cultivation to industrial processing, trade and cross-border distribution."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "hero-in mt-9 flex flex-wrap gap-3",
							style: { animationDelay: "360ms" },
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AccentButton, {
								to: "/value-chain",
								children: "Explore Our Value Chain"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								href: company.corporateProfileUrl,
								className: "group inline-flex items-center gap-2 rounded-full border border-deep-foreground/30 bg-deep-foreground/10 px-6 py-3.5 text-sm font-medium text-deep-foreground backdrop-blur-md transition-all duration-300 hover:-translate-y-0.5 hover:bg-deep-foreground/20",
								children: ["Corporate Profile", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, {
									className: "h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5",
									"aria-hidden": true
								})]
							})]
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "hero-in mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8",
					style: { animationDelay: "480ms" },
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid grid-cols-[minmax(0,1fr)_auto] items-center gap-4 border-t border-deep-foreground/20 py-5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "eyebrow flex min-w-0 items-center gap-2 text-deep-foreground/70",
							children: ["Scroll", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, {
								className: "h-3.5 w-3.5 rotate-90",
								"aria-hidden": true
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex shrink-0 items-center gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "hidden items-center gap-2 rounded-full bg-deep-foreground/10 px-4 py-2 text-sm backdrop-blur-md sm:inline-flex",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Star, {
									className: "h-4 w-4 fill-gold text-gold",
									"aria-hidden": true
								}), "Two operating hubs"]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "inline-flex items-center gap-2 rounded-full bg-deep-foreground/10 px-4 py-2 text-sm backdrop-blur-md",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, {
									className: "h-4 w-4 text-accent",
									"aria-hidden": true
								}), "Abuja · Lagos"]
							})]
						})]
					})
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "overflow-hidden px-4 py-10 sm:px-6 lg:px-8",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto grid max-w-7xl gap-6 lg:grid-cols-[auto_minmax(0,1fr)] lg:items-center",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "max-w-[12rem] text-sm leading-snug text-muted-foreground",
					children: [
						"Operating to ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-foreground",
							children: "international"
						}),
						" agro-trade standards"
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "marquee-track flex w-max items-center gap-14 pr-14",
						children: [...partners, ...partners].map((p, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "whitespace-nowrap text-lg font-medium tracking-tight text-foreground/35",
							children: p
						}, `${p}-${i}`))
					})
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
			className: "pt-6",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid gap-4 sm:grid-cols-2 lg:grid-cols-4",
				children: metrics.map((m, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: i * 80,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex h-full flex-col justify-between rounded-3xl bg-surface p-7 ring-1 ring-border/70 transition-all duration-500 hover:-translate-y-1 hover:bg-card hover:shadow-[0_24px_60px_-40px_oklch(0.2_0.03_155_/_0.8)]",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-2xl font-semibold leading-none tracking-tight text-primary",
							children: m.value
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-6 text-sm leading-relaxed text-muted-foreground",
							children: m.label
						})]
					})
				}, m.label))
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
			eyebrow: "About NIMEX Africa",
			title: "Building a Transatlantic Engine for",
			accent: "Global Food Security",
			intro: "We operate not merely as a commercial trader or primary farmer, but as an integrated value-chain manager — mitigating operational risk, maximising per-hectare productivity, and guaranteeing market delivery for domestic industrial consumers and international buyers alike."
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mt-14 grid gap-10 lg:grid-cols-2 lg:items-center",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
				className: "order-2 lg:order-1",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AccordionList, { items: coreValues }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-8",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CtaLink, {
						to: "/about",
						variant: "ghost",
						children: ["Read the full company overview", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, {
							className: "ml-2 inline h-4 w-4",
							"aria-hidden": true
						})]
					})
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
				delay: 120,
				className: "order-1 lg:order-2",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: community_outgrowers_default,
					alt: "Women outgrower farmers standing in a field holding baskets of freshly harvested vegetables",
					width: 1408,
					height: 1008,
					loading: "lazy",
					decoding: "async",
					className: "aspect-[4/3] w-full rounded-[1.75rem] object-cover"
				})
			})]
		})] }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
			tone: "muted",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-10 lg:grid-cols-[1fr_1.05fr] lg:items-center lg:gap-12",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
						className: "order-1 lg:col-start-2",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eyebrow, { children: "The Transatlantic Alliance" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
								className: "mt-5 text-balance text-3xl leading-[1.08] sm:text-4xl lg:text-[2.75rem]",
								children: ["Unlocking Agricultural Synergy ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Em, { children: "Across the Atlantic" })]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-5 text-sm leading-relaxed text-muted-foreground lg:text-base",
								children: "Mexico leads in high-density farming, protected horticulture, water efficiency and value-added processing. Africa holds over 60% of the world's uncultivated arable land and fast-expanding industrial demand."
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						delay: 120,
						className: "order-2 lg:col-start-1 lg:row-span-2 lg:row-start-1",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: alliance_greenhouse_default,
							alt: "Agronomist inspecting high-density tomato vines in a protected-cultivation greenhouse",
							width: 1408,
							height: 1008,
							loading: "lazy",
							decoding: "async",
							className: "aspect-[4/3] w-full rounded-[1.75rem] object-cover"
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
						delay: 180,
						className: "order-3 lg:col-start-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
							className: "space-y-5",
							children: alliancePillars.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								className: "rounded-2xl bg-card/70 p-5 ring-1 ring-border/60",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "text-base leading-snug",
									children: p.title
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-2 text-sm leading-relaxed text-muted-foreground",
									children: p.body
								})]
							}, p.title))
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-9",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CtaLink, {
								to: "/about/alliance",
								children: "Inside the Alliance"
							})
						})]
					})
				]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
			eyebrow: "Integrated Operations",
			title: "Complete Control Across the",
			accent: "Agricultural Lifecycle",
			intro: "By controlling inputs, cultivation, post-harvest logistics, processing and off-take, we eliminate value leakage, lower operational costs and guarantee supply continuity."
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-14 grid gap-5 lg:grid-cols-3",
			children: valueChain.map((stage, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
				delay: i * 100,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: stageLinks[stage.slug],
					className: "group flex h-full flex-col overflow-hidden rounded-[1.75rem] bg-surface ring-1 ring-border/70 transition-all duration-500 hover:-translate-y-1.5 hover:shadow-[0_30px_70px_-45px_oklch(0.2_0.03_155_/_0.9)]",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative overflow-hidden",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: stageImages[stage.slug],
							alt: "",
							width: 1408,
							height: 1008,
							loading: "lazy",
							decoding: "async",
							className: "aspect-[16/11] w-full object-cover transition-transform duration-700 group-hover:scale-105"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "absolute left-4 top-4 rounded-full bg-background/85 px-3 py-1.5 text-xs font-medium backdrop-blur-md",
							children: [
								"Stage ",
								String(i + 1).padStart(2, "0"),
								" · ",
								stage.stage
							]
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-1 flex-col p-7",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "text-xl leading-snug",
								children: stage.title
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-3 flex-1 text-sm leading-relaxed text-muted-foreground",
								children: stage.summary
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "mt-7 inline-flex items-center gap-2 text-sm font-medium text-primary",
								children: ["Explore", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, {
									className: "h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5",
									"aria-hidden": true
								})]
							})
						]
					})]
				})
			}, stage.slug))
		})] }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
			tone: "muted",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-10 lg:grid-cols-[1.05fr_1fr] lg:items-center lg:gap-12",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
						className: "order-1 lg:col-start-1",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eyebrow, { children: "Commodity Portfolio" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
								className: "mt-5 text-balance text-3xl leading-[1.08] sm:text-4xl lg:text-[2.75rem]",
								children: ["High-Value Commodities for ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Em, { children: "Global & Domestic Markets" })]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-5 text-sm leading-relaxed text-muted-foreground lg:text-base",
								children: "High-demand, high-margin agricultural products supporting local industrial manufacturing and international trade routes."
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						delay: 120,
						className: "order-2 lg:col-start-2 lg:row-span-2 lg:row-start-1",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: commodities_flatlay_default,
							alt: "Studio arrangement of sesame seeds, cocoa beans, cashew nuts, hibiscus and soybeans",
							width: 1408,
							height: 912,
							loading: "lazy",
							decoding: "async",
							className: "aspect-[4/3] w-full rounded-[1.75rem] object-cover"
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
						delay: 180,
						className: "order-3 lg:col-start-1",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "grid gap-4 sm:grid-cols-2",
							children: commodities.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "rounded-2xl bg-card/70 p-5 ring-1 ring-border/60 transition-transform duration-500 hover:-translate-y-1",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "text-base leading-snug",
									children: c.category
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-2 text-sm leading-relaxed text-muted-foreground",
									children: c.products
								})]
							}, c.category))
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-9",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CtaLink, {
								to: "/commodities",
								children: "View Full Portfolio"
							})
						})]
					})
				]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
			tone: "deep",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
				eyebrow: "Technology & Smart Farming",
				title: "Transforming Agriculture Through",
				accent: "Smart Technology",
				intro: "We integrate technology across farming operations, processing hubs and supply chains to ensure high productivity and full traceability.",
				className: "[&_p]:text-deep-foreground/70"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-14 grid gap-10 lg:grid-cols-[1.05fr_1fr] lg:items-center",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative overflow-hidden rounded-[1.75rem]",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LazyVideo, {
						poster: technology_precision_default,
						alt: "Agricultural drone flying out over crop rows at dawn while an agronomist reviews satellite field mapping on a tablet",
						className: "aspect-[4/3] w-full overflow-hidden",
						sources: [{
							src: tech_drone_default,
							type: "video/webm"
						}, {
							src: tech_drone_default$1,
							type: "video/mp4"
						}]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "absolute bottom-5 left-5 right-5 rounded-2xl bg-background/85 p-5 backdrop-blur-xl",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm font-medium text-foreground",
							children: "Block-level traceability"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1 text-xs leading-relaxed text-muted-foreground",
							children: "Every consignment mapped from farm plot of origin through processing to final delivery."
						})]
					})]
				}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
					delay: 120,
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AccordionList, {
						items: technology,
						tone: "deep"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-9",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CtaLink, {
							to: "/value-chain/technology",
							variant: "outline",
							className: "text-deep-foreground",
							children: "Explore Innovation"
						})
					})]
				})]
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
				eyebrow: "Sustainability, ESG & Impact",
				title: "Generating Sustainable Value for",
				accent: "Communities and Planet",
				intro: "We implement agricultural practices that restore ecosystems, lower carbon footprints and create sustainable livelihoods for rural agricultural communities."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-14 grid gap-5 lg:grid-cols-3",
				children: climateSmart.map((c, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: i * 90,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "h-full rounded-[1.75rem] bg-surface p-8 ring-1 ring-border/70 transition-all duration-500 hover:-translate-y-1 hover:bg-card",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "grid h-11 w-11 place-items-center rounded-2xl bg-accent text-sm font-semibold text-accent-foreground",
								children: String(i + 1).padStart(2, "0")
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "mt-6 text-xl leading-snug",
								children: c.title
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-3 text-sm leading-relaxed text-muted-foreground",
								children: c.body
							})
						]
					})
				}, c.title))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-10",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CtaLink, {
					to: "/sustainability",
					children: "Our ESG Commitments"
				})
			})
		] }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "px-4 py-10 sm:px-6 lg:px-8",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative isolate mx-auto max-w-7xl overflow-hidden rounded-[2rem] text-deep-foreground",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: downstream_port_default,
						alt: "",
						width: 1408,
						height: 1008,
						loading: "lazy",
						decoding: "async",
						className: "absolute inset-0 -z-10 h-full w-full object-cover"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "absolute inset-0 -z-10 bg-deep/80",
						"aria-hidden": true
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "px-6 py-20 text-center sm:px-10 lg:px-14 lg:py-28",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
								className: "mx-auto max-w-3xl text-balance text-3xl leading-[1.08] sm:text-4xl lg:text-5xl",
								children: ["Capital, partnerships and ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Em, { children: "institutional growth" })]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mx-auto mt-5 max-w-xl text-sm leading-relaxed text-deep-foreground/75 lg:text-base",
								children: "Structured project finance, DFI and ESG blended co-investment, and long-term off-take contracts across West Africa's agricultural sector."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-9 flex flex-wrap justify-center gap-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AccentButton, {
									to: "/investors",
									children: "Investor Center"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CtaLink, {
									to: "/contact",
									variant: "outline",
									className: "text-deep-foreground",
									children: "Trade Inquiries"
								})]
							})
						] })
					})
				]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
				eyebrow: "Global Locations",
				title: "Connect With",
				accent: "Our Team",
				intro: "Corporate strategy and investor relations in Abuja; port logistics, distribution and cross-border trade in Lagos."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-14 grid gap-5 md:grid-cols-2",
				children: company.offices.map((office, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: i * 100,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "h-full rounded-[1.75rem] bg-surface p-8 ring-1 ring-border/70",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "inline-flex items-center gap-2 rounded-full bg-background px-3 py-1.5 text-xs font-medium",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, {
									className: "h-3.5 w-3.5 text-accent",
									"aria-hidden": true
								}), office.city]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "mt-6 text-2xl leading-snug",
								children: office.label
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-4 text-sm leading-relaxed text-muted-foreground",
								children: office.address
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-3 text-sm leading-relaxed text-foreground/80",
								children: office.role
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-3 text-sm text-muted-foreground",
								children: office.phone
							})
						]
					})
				}, office.city))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-10",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AccentButton, {
					to: "/contact",
					children: "Partner With Us"
				})
			})
		] })
	] });
}
//#endregion
export { Index as component };
