import { i as __toESM, n as __exportAll } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react, t as QueryClientProvider } from "../_libs/react+tanstack__react-query.mjs";
import { c as HeadContent, d as createRouter, f as Outlet, g as Link, h as createRootRouteWithContext, l as useRouterState, m as createFileRoute, p as lazyRouteComponent, s as Scripts, v as useRouter } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as clsx } from "../_libs/clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
import { a as Menu, s as ChevronDown, t as X } from "../_libs/lucide-react.mjs";
import { t as Toaster } from "../_libs/sonner.mjs";
import { t as QueryClient } from "../_libs/tanstack__query-core.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/company-Cbmf9AkY.js
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
var company = {
	name: "NIMEX Africa Agro Ventures Ltd",
	shortName: "NIMEX Africa",
	tagline: "Driving Innovation Across the Transatlantic Agricultural Value Chain",
	summary: "An institutional agribusiness platform bridging Mexican agricultural technology and African land, climate diversity and market potential.",
	corporateProfileUrl: "/corporate-profile.pdf",
	emails: {
		general: "info@nimexafrica.com",
		corporate: "corporate@nimexafrica.com",
		international: "transatlantic@nimexafrica.com"
	},
	offices: [{
		city: "Abuja",
		label: "Head Office (Abuja)",
		address: "Plot 160, Aminu Kano Crescent, Wuse 2, Abuja, FCT, Nigeria",
		role: "Corporate Strategy, Government Relations, Executive Management & Investor Relations",
		phone: "+234 (0) XX XXX XXXX"
	}, {
		city: "Lagos",
		label: "Commercial Operations Hub (Lagos)",
		address: "No. 50A, Itafaji Street, Dolphin Estate, Ikoyi, Lagos State, Nigeria",
		role: "Port Logistics, Domestic Distribution, Cross-Border Trade & Shipping Operations",
		phone: "+234 (0) XX XXX XXXX"
	}]
};
var metrics = [
	{
		value: "$XX Million",
		label: "Targeted Agribusiness & Infrastructure Investment Pipeline"
	},
	{
		value: "XX,000+ Hectares",
		label: "Cultivation & Outgrower Footprint Under Management"
	},
	{
		value: "XX,000+ Metric Tons",
		label: "Annual Off-Take & Commodity Processing Capacity"
	},
	{
		value: "60% / 40%",
		label: "Committed Direct Support Target for Women & Youth Farmers"
	}
];
var coreValues = [
	{
		title: "Precision Integrity",
		body: "Rigorous quality control, full traceability, and adherence to global ESG standards across every link of our supply chain."
	},
	{
		title: "Transatlantic Synergy",
		body: "Fusing Mexico's world-class agronomic expertise with Africa's vast land resources and expanding commercial markets."
	},
	{
		title: "Shared Prosperity",
		body: "Building commercially viable farming ecosystems that directly lift smallholder incomes and strengthen rural economies."
	}
];
var valueChain = [
	{
		slug: "upstream",
		stage: "Upstream",
		title: "Origin & Cultivation",
		summary: "Certified inputs, nucleus farm management and structured outgrower networks that secure origination at source.",
		items: [
			{
				title: "High-Yield Seed & Input Supply",
				body: "Distributing certified, drought-resistant seeds, biostimulants, and soil amendments tailored to regional climate zones."
			},
			{
				title: "Nucleus Farm Management",
				body: "Operating commercial farms that serve as technical demonstration hubs, seed propagation centers, and primary production bases."
			},
			{
				title: "Outgrower Empowerment Schemes",
				body: "Integrating thousands of local farmers into structured outgrower networks provided with input financing, training, and guaranteed buy-back contracts."
			}
		]
	},
	{
		slug: "midstream",
		stage: "Midstream",
		title: "Processing & Storage",
		summary: "Industrial post-harvest processing, solar-powered cold chain and accredited quality assurance laboratories.",
		items: [
			{
				title: "Industrial Post-Harvest Processing",
				body: "Operating primary and secondary processing facilities that clean, grade, dry, hull, and process raw produce into market-ready formats."
			},
			{
				title: "Solar-Powered Cold Chain Logistics",
				body: "Deploying decentralized, solar-powered cold storage hubs near farming clusters to reduce post-harvest losses by up to 40%."
			},
			{
				title: "Quality Assurance Laboratories",
				body: "Maintaining on-site laboratories equipped with testing technology to certify compliance with global phytosanitary and food safety standards."
			}
		]
	},
	{
		slug: "downstream",
		stage: "Downstream",
		title: "Trade & Distribution",
		summary: "Cross-border commodity trade, domestic B2B off-take and temperature-controlled fleet logistics into Lagos ports.",
		items: [
			{
				title: "Cross-Border Commodity Trade",
				body: "Managing end-to-end export logistics, customs clearance, and port operations for international shipments."
			},
			{
				title: "Domestic B2B Off-Take Agreements",
				body: "Supplying local food processors, livestock feed manufacturers, and industrial buyers under long-term contract structures."
			},
			{
				title: "Logistics & Fleet Management",
				body: "Utilizing tracked, temperature-controlled transport routes connecting rural production zones directly to urban centers and export ports in Lagos."
			}
		]
	}
];
var commodities = [
	{
		category: "Grains & Cash Crops",
		products: "Non-GMO Soybeans, Yellow & White Maize, Sesame Seeds, Sorghum",
		applications: "Industrial food processing, livestock feed formulations, global oilseed crushing markets."
	},
	{
		category: "Horticulture & Fresh Produce",
		products: "High-Density Tomatoes, Bell Peppers, Onions, Tropical Fruits",
		applications: "Fresh regional wholesale, processing into pastes/concentrates, cold-chain export."
	},
	{
		category: "Specialty & Export Crops",
		products: "Raw & Processed Cocoa, Ginger, Hibiscus, Cashew Nuts",
		applications: "Global confectionery, beverage manufacturing, pharmaceutical and cosmetics industries."
	},
	{
		category: "Value-Added Agro-Goods",
		products: "Refined Vegetable Oils, Dehydrated Vegetables, Processed Flours",
		applications: "Domestic consumer distribution, B2B food services, emergency relief supply networks."
	}
];
var technology = [
	{
		title: "Precision Agronomy & Satellite Imaging",
		body: "Utilizing satellite data, drone mapping, and soil sensors to monitor crop health, optimize fertilizer application, and predict yield volumes with precision."
	},
	{
		title: "Digital Outgrower Management Platforms",
		body: "Equipping outgrower networks with mobile platforms that deliver agronomic advice, track input delivery, manage digital payments, and log harvest quantities."
	},
	{
		title: "Block-Level Traceability",
		body: "Implementing digital tracking systems that map commodities from the specific farm plot of origin through processing and transport to final delivery."
	}
];
var climateSmart = [
	{
		title: "Water Conservation",
		body: "Broad adoption of drip irrigation systems that reduce water use by up to 50% compared to traditional flood methods."
	},
	{
		title: "Soil Regeneration",
		body: "Utilizing minimum-tillage, crop rotation, and organic soil enrichers to rebuild soil organic matter and sequester carbon."
	},
	{
		title: "Renewable Energy Integration",
		body: "Powering our midstream processing, cold storage hubs, and irrigation pumps with solar infrastructure."
	}
];
var socialImpact = [
	{
		title: "Outgrower Financial Inclusion",
		body: "Providing rural farmers with formal credit histories, input financing, and micro-insurance coverage against climate shocks."
	},
	{
		title: "Women & Youth Empowerment",
		body: "Structuring specialized training programs and land-allocation initiatives aimed at securing 60% participation from women and youth across all outgrower hubs."
	},
	{
		title: "Community Infrastructure Development",
		body: "Investing in clean water access, rural road maintenance, and agricultural extension centers within our host farming communities."
	}
];
var investorTracks = [
	{
		title: "Institutional Investment Framework",
		body: "Structured project finance opportunities across farm development, processing infrastructure, solar logistics hubs, and trade facilities."
	},
	{
		title: "DFI & ESG Co-Investments",
		body: "Blended finance options designed to maximize impact metrics around climate resilience, job creation, and rural poverty reduction."
	},
	{
		title: "Commercial Off-Take Contracts",
		body: "Tailored long-term supply agreements for domestic food manufacturers and international commodity importers seeking reliable, quality-certified supply."
	}
];
var governance = [
	{
		title: "Board Oversight",
		body: "Active supervisory board ensuring strict financial discipline, regulatory adherence, and ESG compliance."
	},
	{
		title: "International Phytosanitary Standards",
		body: "Rigorous adherence to NAQS, USDA, and EU regulatory standards across all cultivated and traded commodities."
	},
	{
		title: "Transparent Risk Management",
		body: "Comprehensive hedging strategies, weather risk management, and multi-layered audit protocols across all cash and physical commodity flows."
	}
];
var alliancePillars = [
	{
		title: "Technology & Knowledge Transfer",
		body: "Introducing Mexican expertise in protected cultivation, climate-adapted seed selection, drip irrigation, and modern post-harvest preservation."
	},
	{
		title: "Processing & Industrial Standards",
		body: "Adapting proven food processing technologies to turn African raw commodities into high-value packaged industrial inputs and export goods."
	},
	{
		title: "Dual Market Access",
		body: "Establishing direct trade corridors between Latin American technical partners, African supply hubs, and international off-takers across North America, Europe, and Asia."
	}
];
//#endregion
//#region node_modules/.nitro/vite/services/ssr/assets/hero-fields-cattle-CyCl_MSJ.js
var hero_fields_cattle_default = "/assets/hero-fields-cattle-Cf_zwbeK.webp";
//#endregion
//#region node_modules/.nitro/vite/services/ssr/assets/router-B8Ug8g5J.js
var router_B8Ug8g5J_exports = /* @__PURE__ */ __exportAll({ getRouter: () => getRouter });
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var SITE_URL = "https://nimexafrica.com";
var ORG_ID = `${SITE_URL}/#organization`;
var SITE_ID = `${SITE_URL}/#website`;
var TITLE_MAP = {
	"/about": "About",
	"/about/alliance": "Mexico–Africa Alliance",
	"/about/leadership": "Leadership & Governance",
	"/value-chain": "Value Chain",
	"/value-chain/upstream": "Upstream",
	"/value-chain/midstream": "Midstream",
	"/value-chain/downstream": "Downstream",
	"/value-chain/technology": "Technology & Innovation",
	"/commodities": "Commodities",
	"/sustainability": "Sustainability & ESG",
	"/investors": "Investors & Partnerships",
	"/contact": "Contact",
	"/privacy": "Privacy Policy",
	"/terms": "Terms of Use",
	"/esg-policy": "ESG Policy",
	"/anti-bribery": "Anti-Bribery Policy"
};
function breadcrumbs(path) {
	const items = [{
		name: "Home",
		item: `${SITE_URL}/`
	}];
	if (path !== "/") {
		const segments = path.replace(/^\//, "").split("/");
		let current = "";
		for (const segment of segments) {
			current += `/${segment}`;
			items.push({
				name: TITLE_MAP[current] ?? segment,
				item: `${SITE_URL}${current}`
			});
		}
	}
	return {
		"@type": "BreadcrumbList",
		itemListElement: items.map((entry, index) => ({
			"@type": "ListItem",
			position: index + 1,
			name: entry.name,
			item: entry.item
		}))
	};
}
/** Returns the `scripts` array for a route's head(): a WebPage/Article graph. */
function pageJsonLd({ path, name, description, image, type = "WebPage", datePublished = "2026-08-12", dateModified = "2026-08-12" }) {
	const url = `${SITE_URL}${path}`;
	const node = {
		"@type": type,
		"@id": `${url}#page`,
		url,
		name,
		headline: name,
		description,
		primaryImageOfPage: {
			"@type": "ImageObject",
			url: image,
			width: 1200,
			height: 630
		},
		image,
		isPartOf: { "@id": SITE_ID },
		about: { "@id": ORG_ID },
		inLanguage: "en",
		breadcrumb: breadcrumbs(path)
	};
	if (type === "Article") {
		node["author"] = { "@id": ORG_ID };
		node["publisher"] = { "@id": ORG_ID };
		node["datePublished"] = datePublished;
		node["dateModified"] = dateModified;
		node["mainEntityOfPage"] = {
			"@type": "WebPage",
			"@id": `${url}#page`
		};
	}
	return [{
		type: "application/ld+json",
		children: JSON.stringify({
			"@context": "https://schema.org",
			"@graph": [node]
		})
	}];
}
var styles_default = "/assets/styles-D-x7TYwV.css";
function reportLovableError(error, context = {}) {
	if (typeof window === "undefined") return;
	window.__lovableEvents?.captureException?.(error, {
		source: "react_error_boundary",
		route: window.location.pathname,
		...context
	}, {
		mechanism: "react_error_boundary",
		handled: false,
		severity: "error"
	});
	const message = error instanceof Response ? `Response ${error.status}${error.url ? ` at ${error.url}` : ""}` : error instanceof Error ? error.message : String(error);
	const stack = error instanceof Error ? error.stack : void 0;
	window.__lovableReportRuntimeError?.({
		message,
		...stack !== void 0 && { stack },
		filename: window.location.pathname
	});
}
var navItems = [
	{
		label: "About Us",
		to: "/about",
		children: [
			{
				label: "Overview",
				to: "/about"
			},
			{
				label: "Mexico–Africa Alliance",
				to: "/about/alliance"
			},
			{
				label: "Leadership & Governance",
				to: "/about/leadership"
			}
		]
	},
	{
		label: "Value Chain",
		to: "/value-chain",
		children: [
			{
				label: "Upstream",
				to: "/value-chain/upstream"
			},
			{
				label: "Midstream",
				to: "/value-chain/midstream"
			},
			{
				label: "Downstream",
				to: "/value-chain/downstream"
			},
			{
				label: "Tech & Innovation",
				to: "/value-chain/technology"
			}
		]
	},
	{
		label: "Commodities & Trade",
		to: "/commodities",
		children: [
			{
				label: "Cash Crops",
				to: "/commodities"
			},
			{
				label: "Horticulture",
				to: "/commodities"
			},
			{
				label: "Processed Goods",
				to: "/commodities"
			},
			{
				label: "Specialty Items",
				to: "/commodities"
			}
		]
	},
	{
		label: "Sustainability & Impact",
		to: "/sustainability",
		children: [
			{
				label: "Climate-Smart Ag",
				to: "/sustainability"
			},
			{
				label: "Outgrower Model",
				to: "/sustainability"
			},
			{
				label: "Social Inclusion",
				to: "/sustainability"
			}
		]
	},
	{
		label: "Investor & Media Center",
		to: "/investors"
	}
];
function Wordmark({ overlay }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
		to: "/",
		className: "group flex items-center gap-3",
		"aria-label": "NIMEX Africa Agro Ventures home",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
			src: "/nimexlogo.png",
			alt: "NIMEX Africa logo",
			width: 40,
			height: 40,
			className: "h-10 w-10 rounded-2xl object-cover transition-transform duration-300 group-hover:rotate-6"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
			className: "leading-tight",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "block text-base font-semibold tracking-tight",
				children: "NIMEX Africa"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: cn("block text-[0.6rem] uppercase tracking-[0.2em]", overlay ? "text-current/65" : "text-muted-foreground"),
				children: "Agro Ventures Ltd"
			})]
		})]
	});
}
function SiteHeader() {
	const [open, setOpen] = (0, import_react.useState)(false);
	const [expanded, setExpanded] = (0, import_react.useState)(null);
	const [scrolled, setScrolled] = (0, import_react.useState)(false);
	const overlay = useRouterState({ select: (s) => s.location.pathname }) === "/" && !scrolled && !open;
	(0, import_react.useEffect)(() => {
		document.body.style.overflow = open ? "hidden" : "";
		return () => {
			document.body.style.overflow = "";
		};
	}, [open]);
	(0, import_react.useEffect)(() => {
		const onScroll = () => setScrolled(window.scrollY > 24);
		onScroll();
		window.addEventListener("scroll", onScroll, { passive: true });
		return () => window.removeEventListener("scroll", onScroll);
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
		className: "fixed inset-x-0 top-0 z-50 px-4 pt-2 sm:px-6 sm:pt-3 lg:px-8 lg:pt-4",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: cn("mx-auto flex h-16 max-w-7xl items-center justify-between gap-6 rounded-full px-4 transition-all duration-500 sm:px-5", overlay ? "border border-deep-foreground/20 bg-deep-foreground/10 text-deep-foreground backdrop-blur-md" : scrolled || open ? "border border-border/70 bg-background/85 shadow-[0_18px_50px_-30px_oklch(0.2_0.03_155_/_0.7)] backdrop-blur-xl" : "border border-transparent bg-background/60 backdrop-blur-md"),
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Wordmark, { overlay }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
					className: cn("hidden items-center gap-0.5 rounded-full border p-1 transition-colors duration-500 xl:flex", overlay ? "border-deep-foreground/20 bg-deep-foreground/10" : "border-border/60 bg-secondary/60"),
					"aria-label": "Primary",
					children: navItems.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "group relative",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: item.to,
							className: cn("flex items-center gap-1 whitespace-nowrap rounded-full px-3.5 py-2 text-[0.8125rem] font-medium transition-colors", overlay ? "text-deep-foreground/85 hover:bg-deep-foreground/15 hover:text-deep-foreground" : "text-foreground/75 hover:bg-background hover:text-foreground"),
							activeProps: { className: overlay ? "bg-deep-foreground/15 text-deep-foreground" : "bg-background text-foreground shadow-sm" },
							children: [item.label, "children" in item ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, {
								className: "h-3.5 w-3.5 opacity-60 transition-transform duration-300 group-hover:rotate-180",
								"aria-hidden": true
							}) : null]
						}), "children" in item ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "invisible absolute left-0 top-full w-64 translate-y-2 overflow-hidden rounded-2xl border border-border/70 bg-card p-1.5 opacity-0 shadow-[0_24px_60px_-30px_oklch(0.2_0.03_155_/_0.8)] transition-all duration-300 group-hover:visible group-hover:translate-y-1 group-hover:opacity-100 group-focus-within:visible group-focus-within:translate-y-1 group-focus-within:opacity-100",
							children: item.children.map((child, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: child.to,
								className: "block rounded-xl px-4 py-2.5 text-sm text-foreground/80 transition-colors hover:bg-surface hover:text-foreground",
								children: child.label
							}, `${child.label}-${i}`))
						}) : null]
					}, item.label))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/contact",
						className: "hidden items-center whitespace-nowrap rounded-full bg-primary px-5 py-2.5 text-[0.8125rem] font-medium text-primary-foreground transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_12px_30px_-12px_oklch(0.335_0.062_152_/_0.7)] md:inline-flex",
						children: "Partner With Us"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: () => setOpen((v) => !v),
						className: cn("inline-flex h-11 w-11 items-center justify-center rounded-full border transition-colors xl:hidden", overlay ? "border-deep-foreground/25 bg-deep-foreground/10 text-deep-foreground" : "border-border bg-background text-foreground hover:bg-surface"),
						"aria-label": open ? "Close menu" : "Open menu",
						"aria-expanded": open,
						children: open ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, {
							className: "h-5 w-5",
							"aria-hidden": true
						}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, {
							className: "h-5 w-5",
							"aria-hidden": true
						})
					})]
				})
			]
		}), open ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "fixed inset-x-0 bottom-0 top-24 z-50 overflow-y-auto bg-background/95 backdrop-blur-xl xl:hidden",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
				className: "mx-auto max-w-7xl px-6 py-4",
				"aria-label": "Mobile",
				children: [navItems.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "border-b border-border/70",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center justify-between",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: item.to,
							onClick: () => setOpen(false),
							className: "flex-1 py-4 text-lg font-medium tracking-tight",
							children: item.label
						}), "children" in item ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							"aria-label": `Toggle ${item.label} submenu`,
							onClick: () => setExpanded((v) => v === item.label ? null : item.label),
							className: "p-3",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, {
								className: cn("h-4 w-4 transition-transform", expanded === item.label && "rotate-180"),
								"aria-hidden": true
							})
						}) : null]
					}), "children" in item && expanded === item.label ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "pb-3",
						children: item.children.map((child, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: child.to,
							onClick: () => setOpen(false),
							className: "block py-2 pl-4 text-sm text-muted-foreground",
							children: child.label
						}, `${child.label}-${i}`))
					}) : null]
				}, item.label)), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/contact",
					onClick: () => setOpen(false),
					className: "mt-8 flex items-center justify-center rounded-full bg-primary px-5 py-4 text-sm font-medium text-primary-foreground",
					children: "Partner With Us / Trade Inquiries"
				})]
			})
		}) : null]
	});
}
var quickLinks = [
	{
		label: "About Us",
		to: "/about"
	},
	{
		label: "Value Chain",
		to: "/value-chain"
	},
	{
		label: "Commodities",
		to: "/commodities"
	},
	{
		label: "Sustainability",
		to: "/sustainability"
	},
	{
		label: "Investor Center",
		to: "/investors"
	}
];
var operations = [
	{
		label: "Upstream",
		to: "/value-chain/upstream"
	},
	{
		label: "Midstream",
		to: "/value-chain/midstream"
	},
	{
		label: "Downstream",
		to: "/value-chain/downstream"
	},
	{
		label: "Smart Tech",
		to: "/value-chain/technology"
	},
	{
		label: "Mexico Hub",
		to: "/about/alliance"
	}
];
var legal = [
	{
		label: "Privacy Policy",
		to: "/privacy"
	},
	{
		label: "Terms of Use",
		to: "/terms"
	},
	{
		label: "Anti-Bribery & Corruption Policy",
		to: "/anti-bribery"
	},
	{
		label: "ESG Policy",
		to: "/esg-policy"
	}
];
function Column({ title, links }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
		className: "eyebrow text-deep-foreground/50",
		children: title
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
		className: "mt-5 space-y-3",
		children: links.map((l) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
			to: l.to,
			className: "inline-block text-sm text-deep-foreground/80 transition-all duration-300 hover:translate-x-1 hover:text-accent",
			children: l.label
		}) }, l.label))
	})] });
}
function SiteFooter() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("footer", {
		className: "px-4 pb-4 sm:px-6 lg:px-8",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-7xl rounded-[2rem] bg-deep px-6 py-16 text-deep-foreground sm:px-10 lg:px-14 lg:py-20",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-12 md:grid-cols-2 lg:grid-cols-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/",
							className: "inline-block",
							"aria-label": "NIMEX Africa Agro Ventures home",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: "/nimexlogo.png",
								alt: "NIMEX Africa logo",
								width: 44,
								height: 44,
								className: "h-11 w-11 rounded-2xl object-cover"
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-5 text-xl font-semibold leading-snug tracking-tight",
							children: company.name
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 text-sm leading-relaxed text-deep-foreground/75",
							children: "An integrated agribusiness platform headquartered in Abuja with commercial operations in Lagos, connecting Mexican agricultural technology with African land, production capacity and global trade corridors."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: `mailto:${company.emails.general}`,
							className: "mt-5 inline-block rounded-full border border-deep-foreground/20 px-4 py-2 text-sm text-accent transition-colors hover:bg-deep-foreground/10",
							children: company.emails.general
						})
					] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Column, {
						title: "Quick Links",
						links: quickLinks
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Column, {
						title: "Operations",
						links: operations
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Column, {
						title: "Legal & Compliance",
						links: legal
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-16 flex flex-col gap-3 border-t border-deep-foreground/15 pt-6 text-xs text-deep-foreground/60 sm:flex-row sm:items-center sm:justify-between",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "© 2026 NIMEX Africa Agro Ventures Ltd. All Rights Reserved." }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Abuja · Lagos · Mexico City" })]
			})]
		})
	});
}
var Toaster$1 = ({ ...props }) => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Toaster, {
		className: "toaster group",
		toastOptions: { classNames: {
			toast: "group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg",
			description: "group-[.toast]:text-muted-foreground",
			actionButton: "group-[.toast]:bg-primary group-[.toast]:text-primary-foreground",
			cancelButton: "group-[.toast]:bg-muted group-[.toast]:text-muted-foreground"
		} },
		...props
	});
};
function NotFoundComponent() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-7xl font-bold text-foreground",
					children: "404"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-4 text-xl font-semibold text-foreground",
					children: "Page not found"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "The page you're looking for doesn't exist or has been moved."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-6",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/",
						className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
						children: "Go home"
					})
				})
			]
		})
	});
}
function ErrorComponent({ error, reset }) {
	console.error(error);
	const router = useRouter();
	(0, import_react.useEffect)(() => {
		reportLovableError(error, { boundary: "tanstack_root_error_component" });
	}, [error]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-xl font-semibold tracking-tight text-foreground",
					children: "This page didn't load"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "Something went wrong on our end. You can try refreshing or head back home."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-6 flex flex-wrap justify-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => {
							router.invalidate();
							reset();
						},
						className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
						children: "Try again"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "/",
						className: "inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent",
						children: "Go home"
					})]
				})
			]
		})
	});
}
var Route$19 = createRootRouteWithContext()({
	head: () => ({
		meta: [
			{ charSet: "utf-8" },
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1"
			},
			{ title: "NIMEX Africa Agro Ventures Ltd" },
			{
				name: "description",
				content: "Institutional agribusiness platform bridging Mexican agricultural technology and African production, processing and trade."
			},
			{
				name: "author",
				content: "NIMEX Africa Agro Ventures Ltd"
			},
			{
				property: "og:site_name",
				content: "NIMEX Africa Agro Ventures Ltd"
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				name: "twitter:card",
				content: "summary_large_image"
			}
		],
		links: [
			{
				rel: "stylesheet",
				href: styles_default
			},
			{
				rel: "preload",
				as: "font",
				type: "font/woff2",
				href: "/fonts/archivo-400-normal-latin.woff2",
				crossOrigin: "anonymous"
			},
			{
				rel: "preload",
				as: "font",
				type: "font/woff2",
				href: "/fonts/instrument-serif-400-italic-latin.woff2",
				crossOrigin: "anonymous"
			},
			{
				rel: "icon",
				href: "/nimexlogo.png",
				type: "image/png"
			},
			{
				rel: "shortcut icon",
				href: "/favicon.ico",
				type: "image/x-icon"
			}
		],
		scripts: [{
			type: "application/ld+json",
			children: JSON.stringify({
				"@context": "https://schema.org",
				"@graph": [{
					"@type": "Organization",
					"@id": ORG_ID,
					name: "NIMEX Africa Agro Ventures Ltd",
					alternateName: "NIMEX Africa",
					url: `${SITE_URL}/`,
					logo: {
						"@type": "ImageObject",
						url: `${SITE_URL}/nimexlogo.png`,
						width: 2750,
						height: 2750
					},
					image: `${SITE_URL}/og/home.jpg`,
					description: "Integrated agribusiness platform bridging Mexican agricultural technology and African land, processing and trade capacity.",
					areaServed: [
						"NG",
						"MX",
						"Global"
					],
					knowsAbout: [
						"Agricultural commodity trading",
						"Agro-processing",
						"Precision agriculture",
						"Cross-border agricultural logistics"
					],
					address: [{
						"@type": "PostalAddress",
						streetAddress: "Plot 160, Aminu Kano Crescent, Wuse 2",
						addressLocality: "Abuja",
						addressRegion: "FCT",
						addressCountry: "NG"
					}, {
						"@type": "PostalAddress",
						streetAddress: "No. 50A, Itafaji Street, Dolphin Estate, Ikoyi",
						addressLocality: "Lagos",
						addressCountry: "NG"
					}],
					contactPoint: [
						{
							"@type": "ContactPoint",
							contactType: "customer service",
							email: "info@nimexafrica.com",
							areaServed: "NG",
							availableLanguage: ["English"]
						},
						{
							"@type": "ContactPoint",
							contactType: "investor relations",
							email: "corporate@nimexafrica.com",
							availableLanguage: ["English"]
						},
						{
							"@type": "ContactPoint",
							contactType: "international trade",
							email: "transatlantic@nimexafrica.com",
							availableLanguage: ["English", "Spanish"]
						}
					],
					email: "info@nimexafrica.com"
				}, {
					"@type": "WebSite",
					"@id": SITE_ID,
					url: `${SITE_URL}/`,
					name: "NIMEX Africa Agro Ventures Ltd",
					description: "Institutional agribusiness platform bridging Mexican agricultural technology and African production, processing and trade.",
					publisher: { "@id": ORG_ID },
					inLanguage: "en"
				}]
			})
		}]
	}),
	shellComponent: RootShell,
	component: RootComponent,
	notFoundComponent: NotFoundComponent,
	errorComponent: ErrorComponent
});
function RootShell({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("html", {
		lang: "en",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("head", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeadContent, {}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("body", { children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scripts, {})] })]
	});
}
function RootComponent() {
	const { queryClient } = Route$19.useRouteContext();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(QueryClientProvider, {
		client: queryClient,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex min-h-screen flex-col",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteHeader, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
					className: "flex-1",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteFooter, {})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Toaster$1, {})]
	});
}
var $$splitComponentImporter$18 = () => import("./routes-DqtPnbc7.mjs");
var Route$18 = createFileRoute("/")({
	head: () => ({
		meta: [
			{ title: "NIMEX Africa Agro Ventures | Transatlantic Agribusiness Platform" },
			{
				name: "description",
				content: "NIMEX Africa Agro Ventures builds tech-enabled agro-ecosystems from seed and cultivation to processing, trade and cross-border distribution between Mexico and West Africa."
			},
			{
				property: "og:title",
				content: "Driving Innovation Across the Transatlantic Agricultural Value Chain"
			},
			{
				property: "og:description",
				content: "An institutional agribusiness platform bridging Mexican agricultural technology and African land, climate diversity and market potential."
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				property: "og:image",
				content: "https://nimexafrica.com/og/home.jpg"
			},
			{
				property: "og:image:width",
				content: "1200"
			},
			{
				property: "og:image:height",
				content: "630"
			},
			{
				name: "twitter:image",
				content: "https://nimexafrica.com/og/home.jpg"
			},
			{
				property: "og:url",
				content: "https://nimexafrica.com/"
			}
		],
		links: [{
			rel: "canonical",
			href: "https://nimexafrica.com/"
		}, {
			rel: "preload",
			as: "image",
			href: hero_fields_cattle_default
		}],
		scripts: pageJsonLd({
			path: "/",
			name: "NIMEX Africa Agro Ventures | Transatlantic Agribusiness Platform",
			description: "NIMEX Africa Agro Ventures builds tech-enabled agro-ecosystems from seed and cultivation to processing, trade and cross-border distribution between Mexico and West Africa.",
			image: "https://nimexafrica.com/og/home.jpg",
			type: "WebPage"
		})
	}),
	component: lazyRouteComponent($$splitComponentImporter$18, "component")
});
var $$splitComponentImporter$17 = () => import("./about-Eq2sxU09.mjs");
var Route$17 = createFileRoute("/about")({ component: lazyRouteComponent($$splitComponentImporter$17, "component") });
var $$splitComponentImporter$16 = () => import("./anti-bribery-D40yREMv.mjs");
var Route$16 = createFileRoute("/anti-bribery")({
	head: () => ({
		meta: [
			{ title: "Anti-Bribery & Corruption Policy | NIMEX Africa" },
			{
				name: "description",
				content: "NIMEX Africa operates a zero-tolerance approach to bribery and corruption across all agricultural origination, processing and cross-border trade activity."
			},
			{
				property: "og:title",
				content: "Anti-Bribery & Corruption Policy"
			},
			{
				property: "og:description",
				content: "Zero tolerance, third-party due diligence, facilitation payments and confidential reporting."
			},
			{
				property: "og:type",
				content: "article"
			},
			{
				property: "og:image",
				content: "https://nimexafrica.com/og/anti-bribery.jpg"
			},
			{
				property: "og:image:width",
				content: "1200"
			},
			{
				property: "og:image:height",
				content: "630"
			},
			{
				name: "twitter:image",
				content: "https://nimexafrica.com/og/anti-bribery.jpg"
			},
			{
				property: "og:url",
				content: "https://nimexafrica.com/anti-bribery"
			}
		],
		links: [{
			rel: "canonical",
			href: "https://nimexafrica.com/anti-bribery"
		}],
		scripts: pageJsonLd({
			path: "/anti-bribery",
			name: "Anti-Bribery & Corruption Policy | NIMEX Africa",
			description: "NIMEX Africa operates a zero-tolerance approach to bribery and corruption across all agricultural origination, processing and cross-border trade activity.",
			image: "https://nimexafrica.com/og/anti-bribery.jpg",
			type: "WebPage"
		})
	}),
	component: lazyRouteComponent($$splitComponentImporter$16, "component")
});
var $$splitComponentImporter$15 = () => import("./commodities-CzHjGj_I.mjs");
var Route$15 = createFileRoute("/commodities")({
	head: () => ({
		meta: [
			{ title: "Commodity & Agro-Product Portfolio | NIMEX Africa" },
			{
				name: "description",
				content: "Non-GMO soybeans, maize, sesame, cocoa, ginger, hibiscus, cashew, horticulture and value-added agro-goods for global and domestic markets."
			},
			{
				property: "og:title",
				content: "High-Value Commodities for Global & Domestic Markets"
			},
			{
				property: "og:description",
				content: "Four commodity categories supporting industrial manufacturing, feed formulation and international trade routes."
			},
			{
				property: "og:type",
				content: "article"
			},
			{
				property: "og:image",
				content: "https://nimexafrica.com/og/commodities.jpg"
			},
			{
				property: "og:image:width",
				content: "1200"
			},
			{
				property: "og:image:height",
				content: "630"
			},
			{
				name: "twitter:image",
				content: "https://nimexafrica.com/og/commodities.jpg"
			},
			{
				property: "og:url",
				content: "https://nimexafrica.com/commodities"
			}
		],
		links: [{
			rel: "canonical",
			href: "https://nimexafrica.com/commodities"
		}],
		scripts: pageJsonLd({
			path: "/commodities",
			name: "Commodity & Agro-Product Portfolio | NIMEX Africa",
			description: "Non-GMO soybeans, maize, sesame, cocoa, ginger, hibiscus, cashew, horticulture and value-added agro-goods for global and domestic markets.",
			image: "https://nimexafrica.com/og/commodities.jpg",
			type: "Article"
		})
	}),
	component: lazyRouteComponent($$splitComponentImporter$15, "component")
});
var $$splitComponentImporter$14 = () => import("./contact-AxIMSLIQ.mjs");
var Route$14 = createFileRoute("/contact")({
	head: () => ({
		meta: [
			{ title: "Contact & Global Locations | NIMEX Africa Agro Ventures" },
			{
				name: "description",
				content: "Reach NIMEX Africa's Abuja head office, Lagos commercial operations hub, or our corporate, investor and international trade desks."
			},
			{
				property: "og:title",
				content: "Connect With Our Team"
			},
			{
				property: "og:description",
				content: "Buyers, investors, technology suppliers and government partners are welcome to engage NIMEX Africa."
			},
			{
				property: "og:type",
				content: "article"
			},
			{
				property: "og:image",
				content: "https://nimexafrica.com/og/contact.jpg"
			},
			{
				property: "og:image:width",
				content: "1200"
			},
			{
				property: "og:image:height",
				content: "630"
			},
			{
				name: "twitter:image",
				content: "https://nimexafrica.com/og/contact.jpg"
			},
			{
				property: "og:url",
				content: "https://nimexafrica.com/contact"
			}
		],
		links: [{
			rel: "canonical",
			href: "https://nimexafrica.com/contact"
		}],
		scripts: pageJsonLd({
			path: "/contact",
			name: "Contact & Global Locations | NIMEX Africa Agro Ventures",
			description: "Reach NIMEX Africa's Abuja head office, Lagos commercial operations hub, or our corporate, investor and international trade desks.",
			image: "https://nimexafrica.com/og/contact.jpg",
			type: "ContactPage"
		})
	}),
	component: lazyRouteComponent($$splitComponentImporter$14, "component")
});
var $$splitComponentImporter$13 = () => import("./esg-policy-C2849hME.mjs");
var Route$13 = createFileRoute("/esg-policy")({
	head: () => ({
		meta: [
			{ title: "ESG Policy | NIMEX Africa Agro Ventures" },
			{
				name: "description",
				content: "NIMEX Africa's environmental, social and governance commitments across climate-smart farming, labour standards, community investment and board oversight."
			},
			{
				property: "og:title",
				content: "ESG Policy — NIMEX Africa"
			},
			{
				property: "og:description",
				content: "Environmental stewardship, social inclusion and governance discipline across the value chain."
			},
			{
				property: "og:type",
				content: "article"
			},
			{
				property: "og:image",
				content: "https://nimexafrica.com/og/esg-policy.jpg"
			},
			{
				property: "og:image:width",
				content: "1200"
			},
			{
				property: "og:image:height",
				content: "630"
			},
			{
				name: "twitter:image",
				content: "https://nimexafrica.com/og/esg-policy.jpg"
			},
			{
				property: "og:url",
				content: "https://nimexafrica.com/esg-policy"
			}
		],
		links: [{
			rel: "canonical",
			href: "https://nimexafrica.com/esg-policy"
		}],
		scripts: pageJsonLd({
			path: "/esg-policy",
			name: "ESG Policy | NIMEX Africa Agro Ventures",
			description: "NIMEX Africa's environmental, social and governance commitments across climate-smart farming, labour standards, community investment and board oversight.",
			image: "https://nimexafrica.com/og/esg-policy.jpg",
			type: "WebPage"
		})
	}),
	component: lazyRouteComponent($$splitComponentImporter$13, "component")
});
var $$splitComponentImporter$12 = () => import("./investors-rDjHfTuE.mjs");
var Route$12 = createFileRoute("/investors")({
	head: () => ({
		meta: [
			{ title: "Investor, Partner & Trade Center | NIMEX Africa" },
			{
				name: "description",
				content: "Structured project finance, DFI and ESG blended co-investment, and long-term commercial off-take contracts across West African agriculture."
			},
			{
				property: "og:title",
				content: "Capital, Partnerships, and Institutional Growth"
			},
			{
				property: "og:description",
				content: "NIMEX partners with institutional investors, sovereign funds, DFIs and international trade counterparties."
			},
			{
				property: "og:type",
				content: "article"
			},
			{
				property: "og:image",
				content: "https://nimexafrica.com/og/investors.jpg"
			},
			{
				property: "og:image:width",
				content: "1200"
			},
			{
				property: "og:image:height",
				content: "630"
			},
			{
				name: "twitter:image",
				content: "https://nimexafrica.com/og/investors.jpg"
			},
			{
				property: "og:url",
				content: "https://nimexafrica.com/investors"
			}
		],
		links: [{
			rel: "canonical",
			href: "https://nimexafrica.com/investors"
		}],
		scripts: pageJsonLd({
			path: "/investors",
			name: "Investor, Partner & Trade Center | NIMEX Africa",
			description: "Structured project finance, DFI and ESG blended co-investment, and long-term commercial off-take contracts across West African agriculture.",
			image: "https://nimexafrica.com/og/investors.jpg",
			type: "Article"
		})
	}),
	component: lazyRouteComponent($$splitComponentImporter$12, "component")
});
var $$splitComponentImporter$11 = () => import("./privacy-C4AFSb2v.mjs");
var Route$11 = createFileRoute("/privacy")({
	head: () => ({
		meta: [
			{ title: "Privacy Policy | NIMEX Africa Agro Ventures" },
			{
				name: "description",
				content: "How NIMEX Africa Agro Ventures Ltd collects, uses, stores and protects personal data submitted through this website and commercial engagements."
			},
			{
				property: "og:title",
				content: "Privacy Policy — NIMEX Africa"
			},
			{
				property: "og:description",
				content: "Data collection, use, retention and rights for NIMEX Africa website visitors and counterparties."
			},
			{
				property: "og:type",
				content: "article"
			},
			{
				property: "og:image",
				content: "https://nimexafrica.com/og/privacy.jpg"
			},
			{
				property: "og:image:width",
				content: "1200"
			},
			{
				property: "og:image:height",
				content: "630"
			},
			{
				name: "twitter:image",
				content: "https://nimexafrica.com/og/privacy.jpg"
			},
			{
				property: "og:url",
				content: "https://nimexafrica.com/privacy"
			}
		],
		links: [{
			rel: "canonical",
			href: "https://nimexafrica.com/privacy"
		}],
		scripts: pageJsonLd({
			path: "/privacy",
			name: "Privacy Policy | NIMEX Africa Agro Ventures",
			description: "How NIMEX Africa Agro Ventures Ltd collects, uses, stores and protects personal data submitted through this website and commercial engagements.",
			image: "https://nimexafrica.com/og/privacy.jpg",
			type: "WebPage"
		})
	}),
	component: lazyRouteComponent($$splitComponentImporter$11, "component")
});
var $$splitComponentImporter$10 = () => import("./sustainability-BR_qbxBh.mjs");
var Route$10 = createFileRoute("/sustainability")({
	head: () => ({
		meta: [
			{ title: "Sustainability, ESG & Community Impact | NIMEX Africa" },
			{
				name: "description",
				content: "Climate-smart agriculture, solar-powered operations, outgrower financial inclusion and a 60% women and youth participation target across NIMEX hubs."
			},
			{
				property: "og:title",
				content: "Generating Sustainable Value for Communities and Planet"
			},
			{
				property: "og:description",
				content: "Water conservation, soil regeneration, renewable energy and rural livelihood programmes built into the business model."
			},
			{
				property: "og:type",
				content: "article"
			},
			{
				property: "og:image",
				content: "https://nimexafrica.com/og/sustainability.jpg"
			},
			{
				property: "og:image:width",
				content: "1200"
			},
			{
				property: "og:image:height",
				content: "630"
			},
			{
				name: "twitter:image",
				content: "https://nimexafrica.com/og/sustainability.jpg"
			},
			{
				property: "og:url",
				content: "https://nimexafrica.com/sustainability"
			}
		],
		links: [{
			rel: "canonical",
			href: "https://nimexafrica.com/sustainability"
		}],
		scripts: pageJsonLd({
			path: "/sustainability",
			name: "Sustainability, ESG & Community Impact | NIMEX Africa",
			description: "Climate-smart agriculture, solar-powered operations, outgrower financial inclusion and a 60% women and youth participation target across NIMEX hubs.",
			image: "https://nimexafrica.com/og/sustainability.jpg",
			type: "Article"
		})
	}),
	component: lazyRouteComponent($$splitComponentImporter$10, "component")
});
var $$splitComponentImporter$9 = () => import("./terms-C-TRG8mP.mjs");
var Route$9 = createFileRoute("/terms")({
	head: () => ({
		meta: [
			{ title: "Terms of Use | NIMEX Africa Agro Ventures" },
			{
				name: "description",
				content: "Terms governing use of the NIMEX Africa Agro Ventures website, including content accuracy, intellectual property and limitation of liability."
			},
			{
				property: "og:title",
				content: "Terms of Use — NIMEX Africa"
			},
			{
				property: "og:description",
				content: "The conditions that apply to your use of this website and its content."
			},
			{
				property: "og:type",
				content: "article"
			},
			{
				property: "og:image",
				content: "https://nimexafrica.com/og/terms.jpg"
			},
			{
				property: "og:image:width",
				content: "1200"
			},
			{
				property: "og:image:height",
				content: "630"
			},
			{
				name: "twitter:image",
				content: "https://nimexafrica.com/og/terms.jpg"
			},
			{
				property: "og:url",
				content: "https://nimexafrica.com/terms"
			}
		],
		links: [{
			rel: "canonical",
			href: "https://nimexafrica.com/terms"
		}],
		scripts: pageJsonLd({
			path: "/terms",
			name: "Terms of Use | NIMEX Africa Agro Ventures",
			description: "Terms governing use of the NIMEX Africa Agro Ventures website, including content accuracy, intellectual property and limitation of liability.",
			image: "https://nimexafrica.com/og/terms.jpg",
			type: "WebPage"
		})
	}),
	component: lazyRouteComponent($$splitComponentImporter$9, "component")
});
var $$splitComponentImporter$8 = () => import("./value-chain-BOPcFzxG.mjs");
var Route$8 = createFileRoute("/value-chain")({ component: lazyRouteComponent($$splitComponentImporter$8, "component") });
var $$splitComponentImporter$7 = () => import("./about.index-B-XMos_L.mjs");
var Route$7 = createFileRoute("/about/")({
	head: () => ({
		meta: [
			{ title: "About NIMEX Africa Agro Ventures | Integrated Agribusiness" },
			{
				name: "description",
				content: "NIMEX Africa Agro Ventures is an integrated value-chain manager headquartered in Abuja, bridging Mexican agricultural technology and West African production."
			},
			{
				property: "og:title",
				content: "About NIMEX Africa Agro Ventures"
			},
			{
				property: "og:description",
				content: "Building a transatlantic engine for global food security across cultivation, processing, trade and distribution."
			},
			{
				property: "og:type",
				content: "article"
			},
			{
				property: "og:image",
				content: "https://nimexafrica.com/og/about.jpg"
			},
			{
				property: "og:image:width",
				content: "1200"
			},
			{
				property: "og:image:height",
				content: "630"
			},
			{
				name: "twitter:image",
				content: "https://nimexafrica.com/og/about.jpg"
			},
			{
				property: "og:url",
				content: "https://nimexafrica.com/about"
			}
		],
		links: [{
			rel: "canonical",
			href: "https://nimexafrica.com/about"
		}],
		scripts: pageJsonLd({
			path: "/about",
			name: "About NIMEX Africa Agro Ventures | Integrated Agribusiness",
			description: "NIMEX Africa Agro Ventures is an integrated value-chain manager headquartered in Abuja, bridging Mexican agricultural technology and West African production.",
			image: "https://nimexafrica.com/og/about.jpg",
			type: "AboutPage"
		})
	}),
	component: lazyRouteComponent($$splitComponentImporter$7, "component")
});
var $$splitComponentImporter$6 = () => import("./about.alliance-Du0f3O_I.mjs");
var Route$6 = createFileRoute("/about/alliance")({
	head: () => ({
		meta: [
			{ title: "Mexico–Africa Alliance | NIMEX Africa Agro Ventures" },
			{
				name: "description",
				content: "How NIMEX converts Mexican agronomic expertise and African arable capacity into scalable, high-yield commercial outcomes across the Atlantic."
			},
			{
				property: "og:title",
				content: "The Transatlantic Alliance — Mexico–Africa Synergy"
			},
			{
				property: "og:description",
				content: "Technology transfer, industrial processing standards and dual market access between Latin America, Africa and global off-takers."
			},
			{
				property: "og:type",
				content: "article"
			},
			{
				property: "og:image",
				content: "https://nimexafrica.com/og/about-alliance.jpg"
			},
			{
				property: "og:image:width",
				content: "1200"
			},
			{
				property: "og:image:height",
				content: "630"
			},
			{
				name: "twitter:image",
				content: "https://nimexafrica.com/og/about-alliance.jpg"
			},
			{
				property: "og:url",
				content: "https://nimexafrica.com/about/alliance"
			}
		],
		links: [{
			rel: "canonical",
			href: "https://nimexafrica.com/about/alliance"
		}],
		scripts: pageJsonLd({
			path: "/about/alliance",
			name: "Mexico–Africa Alliance | NIMEX Africa Agro Ventures",
			description: "How NIMEX converts Mexican agronomic expertise and African arable capacity into scalable, high-yield commercial outcomes across the Atlantic.",
			image: "https://nimexafrica.com/og/about-alliance.jpg",
			type: "AboutPage"
		})
	}),
	component: lazyRouteComponent($$splitComponentImporter$6, "component")
});
var $$splitComponentImporter$5 = () => import("./about.leadership-C2R7XxUm.mjs");
var Route$5 = createFileRoute("/about/leadership")({
	head: () => ({
		meta: [
			{ title: "Leadership, Governance & Compliance | NIMEX Africa" },
			{
				name: "description",
				content: "Board oversight, NAQS/USDA/EU phytosanitary compliance and transparent risk management across NIMEX Africa's cash and physical commodity flows."
			},
			{
				property: "og:title",
				content: "Leadership, Governance & Compliance"
			},
			{
				property: "og:description",
				content: "Experienced leadership and disciplined governance across international trade, agronomy, logistics and project finance."
			},
			{
				property: "og:type",
				content: "article"
			},
			{
				property: "og:image",
				content: "https://nimexafrica.com/og/about-leadership.jpg"
			},
			{
				property: "og:image:width",
				content: "1200"
			},
			{
				property: "og:image:height",
				content: "630"
			},
			{
				name: "twitter:image",
				content: "https://nimexafrica.com/og/about-leadership.jpg"
			},
			{
				property: "og:url",
				content: "https://nimexafrica.com/about/leadership"
			}
		],
		links: [{
			rel: "canonical",
			href: "https://nimexafrica.com/about/leadership"
		}],
		scripts: pageJsonLd({
			path: "/about/leadership",
			name: "Leadership, Governance & Compliance | NIMEX Africa",
			description: "Board oversight, NAQS/USDA/EU phytosanitary compliance and transparent risk management across NIMEX Africa's cash and physical commodity flows.",
			image: "https://nimexafrica.com/og/about-leadership.jpg",
			type: "AboutPage"
		})
	}),
	component: lazyRouteComponent($$splitComponentImporter$5, "component")
});
var $$splitComponentImporter$4 = () => import("./value-chain.index-BLKoBofu.mjs");
var Route$4 = createFileRoute("/value-chain/")({
	head: () => ({
		meta: [
			{ title: "Integrated Value Chain Operations | NIMEX Africa" },
			{
				name: "description",
				content: "NIMEX controls inputs, cultivation, post-harvest logistics, processing and off-take across upstream, midstream and downstream operations."
			},
			{
				property: "og:title",
				content: "Complete Control Across the Agricultural Lifecycle"
			},
			{
				property: "og:description",
				content: "Upstream origination, midstream processing and cold chain, downstream trade and distribution — managed end to end."
			},
			{
				property: "og:type",
				content: "article"
			},
			{
				property: "og:image",
				content: "https://nimexafrica.com/og/value-chain.jpg"
			},
			{
				property: "og:image:width",
				content: "1200"
			},
			{
				property: "og:image:height",
				content: "630"
			},
			{
				name: "twitter:image",
				content: "https://nimexafrica.com/og/value-chain.jpg"
			},
			{
				property: "og:url",
				content: "https://nimexafrica.com/value-chain"
			}
		],
		links: [{
			rel: "canonical",
			href: "https://nimexafrica.com/value-chain"
		}],
		scripts: pageJsonLd({
			path: "/value-chain",
			name: "Integrated Value Chain Operations | NIMEX Africa",
			description: "NIMEX controls inputs, cultivation, post-harvest logistics, processing and off-take across upstream, midstream and downstream operations.",
			image: "https://nimexafrica.com/og/value-chain.jpg",
			type: "Article"
		})
	}),
	component: lazyRouteComponent($$splitComponentImporter$4, "component")
});
var $$splitComponentImporter$3 = () => import("./value-chain.downstream-DIjIugOC.mjs");
var Route$3 = createFileRoute("/value-chain/downstream")({
	head: () => ({
		meta: [
			{ title: "Downstream Operations — Trade & Distribution | NIMEX Africa" },
			{
				name: "description",
				content: "End-to-end export logistics, customs clearance and port operations, plus long-term domestic B2B off-take and temperature-controlled fleet management."
			},
			{
				property: "og:title",
				content: "Downstream Operations — Trade & Distribution"
			},
			{
				property: "og:description",
				content: "Cross-border commodity trade and domestic off-take connecting rural production zones to Lagos export ports."
			},
			{
				property: "og:type",
				content: "article"
			},
			{
				property: "og:image",
				content: "https://nimexafrica.com/og/downstream.jpg"
			},
			{
				property: "og:image:width",
				content: "1200"
			},
			{
				property: "og:image:height",
				content: "630"
			},
			{
				name: "twitter:image",
				content: "https://nimexafrica.com/og/downstream.jpg"
			},
			{
				property: "og:url",
				content: "https://nimexafrica.com/value-chain/downstream"
			}
		],
		links: [{
			rel: "canonical",
			href: "https://nimexafrica.com/value-chain/downstream"
		}],
		scripts: pageJsonLd({
			path: "/value-chain/downstream",
			name: "Downstream Operations — Trade & Distribution | NIMEX Africa",
			description: "End-to-end export logistics, customs clearance and port operations, plus long-term domestic B2B off-take and temperature-controlled fleet management.",
			image: "https://nimexafrica.com/og/downstream.jpg",
			type: "Article"
		})
	}),
	component: lazyRouteComponent($$splitComponentImporter$3, "component")
});
var $$splitComponentImporter$2 = () => import("./value-chain.midstream-DMKF1Bl3.mjs");
var Route$2 = createFileRoute("/value-chain/midstream")({
	head: () => ({
		meta: [
			{ title: "Midstream Operations — Processing & Storage | NIMEX Africa" },
			{
				name: "description",
				content: "Industrial post-harvest processing, solar-powered cold chain hubs cutting losses by up to 40%, and on-site quality assurance laboratories."
			},
			{
				property: "og:title",
				content: "Midstream Operations — Processing & Storage"
			},
			{
				property: "og:description",
				content: "Cleaning, grading, drying and hulling into market-ready formats under global food safety standards."
			},
			{
				property: "og:type",
				content: "article"
			},
			{
				property: "og:image",
				content: "https://nimexafrica.com/og/midstream.jpg"
			},
			{
				property: "og:image:width",
				content: "1200"
			},
			{
				property: "og:image:height",
				content: "630"
			},
			{
				name: "twitter:image",
				content: "https://nimexafrica.com/og/midstream.jpg"
			},
			{
				property: "og:url",
				content: "https://nimexafrica.com/value-chain/midstream"
			}
		],
		links: [{
			rel: "canonical",
			href: "https://nimexafrica.com/value-chain/midstream"
		}],
		scripts: pageJsonLd({
			path: "/value-chain/midstream",
			name: "Midstream Operations — Processing & Storage | NIMEX Africa",
			description: "Industrial post-harvest processing, solar-powered cold chain hubs cutting losses by up to 40%, and on-site quality assurance laboratories.",
			image: "https://nimexafrica.com/og/midstream.jpg",
			type: "Article"
		})
	}),
	component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
var $$splitComponentImporter$1 = () => import("./value-chain.technology-D1pydWdN.mjs");
var Route$1 = createFileRoute("/value-chain/technology")({
	head: () => ({
		meta: [
			{ title: "Technology, Innovation & Smart Farming | NIMEX Africa" },
			{
				name: "description",
				content: "Satellite imaging, drone mapping, soil sensors, digital outgrower platforms and block-level traceability across NIMEX farms and supply chains."
			},
			{
				property: "og:title",
				content: "Transforming Agriculture Through Smart Technology"
			},
			{
				property: "og:description",
				content: "Precision agronomy and full traceability from farm plot of origin to final delivery."
			},
			{
				property: "og:type",
				content: "article"
			},
			{
				property: "og:image",
				content: "https://nimexafrica.com/og/technology.jpg"
			},
			{
				property: "og:image:width",
				content: "1200"
			},
			{
				property: "og:image:height",
				content: "630"
			},
			{
				name: "twitter:image",
				content: "https://nimexafrica.com/og/technology.jpg"
			},
			{
				property: "og:url",
				content: "https://nimexafrica.com/value-chain/technology"
			}
		],
		links: [{
			rel: "canonical",
			href: "https://nimexafrica.com/value-chain/technology"
		}],
		scripts: pageJsonLd({
			path: "/value-chain/technology",
			name: "Technology, Innovation & Smart Farming | NIMEX Africa",
			description: "Satellite imaging, drone mapping, soil sensors, digital outgrower platforms and block-level traceability across NIMEX farms and supply chains.",
			image: "https://nimexafrica.com/og/technology.jpg",
			type: "Article"
		})
	}),
	component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
var $$splitComponentImporter = () => import("./value-chain.upstream-D3RqjPDY.mjs");
var Route = createFileRoute("/value-chain/upstream")({
	head: () => ({
		meta: [
			{ title: "Upstream Operations — Origin & Cultivation | NIMEX Africa" },
			{
				name: "description",
				content: "Certified drought-resistant inputs, nucleus farm management and structured outgrower schemes with input financing and guaranteed buy-back."
			},
			{
				property: "og:title",
				content: "Upstream Operations — Origin & Cultivation"
			},
			{
				property: "og:description",
				content: "Seed and input supply, nucleus farms and outgrower empowerment across West African climate zones."
			},
			{
				property: "og:type",
				content: "article"
			},
			{
				property: "og:image",
				content: "https://nimexafrica.com/og/upstream.jpg"
			},
			{
				property: "og:image:width",
				content: "1200"
			},
			{
				property: "og:image:height",
				content: "630"
			},
			{
				name: "twitter:image",
				content: "https://nimexafrica.com/og/upstream.jpg"
			},
			{
				property: "og:url",
				content: "https://nimexafrica.com/value-chain/upstream"
			}
		],
		links: [{
			rel: "canonical",
			href: "https://nimexafrica.com/value-chain/upstream"
		}],
		scripts: pageJsonLd({
			path: "/value-chain/upstream",
			name: "Upstream Operations — Origin & Cultivation | NIMEX Africa",
			description: "Certified drought-resistant inputs, nucleus farm management and structured outgrower schemes with input financing and guaranteed buy-back.",
			image: "https://nimexafrica.com/og/upstream.jpg",
			type: "Article"
		})
	}),
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
var IndexRoute = Route$18.update({
	id: "/",
	path: "/",
	getParentRoute: () => Route$19
});
var AboutRoute = Route$17.update({
	id: "/about",
	path: "/about",
	getParentRoute: () => Route$19
});
var AntiBriberyRoute = Route$16.update({
	id: "/anti-bribery",
	path: "/anti-bribery",
	getParentRoute: () => Route$19
});
var CommoditiesRoute = Route$15.update({
	id: "/commodities",
	path: "/commodities",
	getParentRoute: () => Route$19
});
var ContactRoute = Route$14.update({
	id: "/contact",
	path: "/contact",
	getParentRoute: () => Route$19
});
var EsgPolicyRoute = Route$13.update({
	id: "/esg-policy",
	path: "/esg-policy",
	getParentRoute: () => Route$19
});
var InvestorsRoute = Route$12.update({
	id: "/investors",
	path: "/investors",
	getParentRoute: () => Route$19
});
var PrivacyRoute = Route$11.update({
	id: "/privacy",
	path: "/privacy",
	getParentRoute: () => Route$19
});
var SustainabilityRoute = Route$10.update({
	id: "/sustainability",
	path: "/sustainability",
	getParentRoute: () => Route$19
});
var TermsRoute = Route$9.update({
	id: "/terms",
	path: "/terms",
	getParentRoute: () => Route$19
});
var ValueChainRoute = Route$8.update({
	id: "/value-chain",
	path: "/value-chain",
	getParentRoute: () => Route$19
});
var AboutIndexRoute = Route$7.update({
	id: "/",
	path: "/",
	getParentRoute: () => AboutRoute
});
var AboutAllianceRoute = Route$6.update({
	id: "/alliance",
	path: "/alliance",
	getParentRoute: () => AboutRoute
});
var AboutLeadershipRoute = Route$5.update({
	id: "/leadership",
	path: "/leadership",
	getParentRoute: () => AboutRoute
});
var ValueChainIndexRoute = Route$4.update({
	id: "/",
	path: "/",
	getParentRoute: () => ValueChainRoute
});
var ValueChainDownstreamRoute = Route$3.update({
	id: "/downstream",
	path: "/downstream",
	getParentRoute: () => ValueChainRoute
});
var ValueChainMidstreamRoute = Route$2.update({
	id: "/midstream",
	path: "/midstream",
	getParentRoute: () => ValueChainRoute
});
var ValueChainTechnologyRoute = Route$1.update({
	id: "/technology",
	path: "/technology",
	getParentRoute: () => ValueChainRoute
});
var ValueChainUpstreamRoute = Route.update({
	id: "/upstream",
	path: "/upstream",
	getParentRoute: () => ValueChainRoute
});
var AboutRouteChildren = {
	AboutAllianceRoute,
	AboutLeadershipRoute,
	AboutIndexRoute
};
var AboutRouteWithChildren = AboutRoute._addFileChildren(AboutRouteChildren);
var ValueChainRouteChildren = {
	ValueChainDownstreamRoute,
	ValueChainMidstreamRoute,
	ValueChainTechnologyRoute,
	ValueChainUpstreamRoute,
	ValueChainIndexRoute
};
var rootRouteChildren = {
	IndexRoute,
	AboutRoute: AboutRouteWithChildren,
	AntiBriberyRoute,
	CommoditiesRoute,
	ContactRoute,
	EsgPolicyRoute,
	InvestorsRoute,
	PrivacyRoute,
	SustainabilityRoute,
	TermsRoute,
	ValueChainRoute: ValueChainRoute._addFileChildren(ValueChainRouteChildren)
};
var routeTree = Route$19._addFileChildren(rootRouteChildren)._addFileTypes();
var getRouter = () => {
	const queryClient = new QueryClient();
	return createRouter({
		routeTree,
		context: { queryClient },
		scrollRestoration: true,
		defaultPreloadStaleTime: 0
	});
};
//#endregion
export { cn as a, coreValues as c, metrics as d, socialImpact as f, getRouter, climateSmart as i, governance as l, valueChain as m, hero_fields_cattle_default as n, commodities as o, technology as p, alliancePillars as r, company as s, router_B8Ug8g5J_exports as t, investorTracks as u };
