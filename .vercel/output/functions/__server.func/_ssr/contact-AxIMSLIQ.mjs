import { i as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { O as isRedirect, v as useRouter } from "../_libs/@tanstack/react-router+[...].mjs";
import { c as Section, l as SectionHeading, o as PageHero } from "./primitives-CYI8PEXh.mjs";
import { n as stringType, t as objectType } from "../_libs/zod.mjs";
import { n as toast } from "../_libs/sonner.mjs";
import { s as company } from "./router-B8Ug8g5J.mjs";
import { a as createServerFn, i as TSS_SERVER_FUNCTION, o as getServerFnById } from "./server-BLZCeH1N.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/contact-AxIMSLIQ.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function useServerFn(serverFn) {
	const router = useRouter();
	return import_react.useCallback(async (...args) => {
		try {
			const res = await serverFn(...args);
			if (isRedirect(res)) throw res;
			return res;
		} catch (err) {
			if (isRedirect(err)) {
				err.options._fromLocation = router.stores.location.get();
				return router.navigate(router.resolveRedirect(err).options);
			}
			throw err;
		}
	}, [router, serverFn]);
}
var createSsrRpc = (functionId) => {
	const url = "/_serverFn/" + functionId;
	const serverFnMeta = { id: functionId };
	const fn = async (...args) => {
		return (await getServerFnById(functionId, { origin: "server" }))(...args);
	};
	return Object.assign(fn, {
		url,
		serverFnMeta,
		[TSS_SERVER_FUNCTION]: true
	});
};
var contactSchema = objectType({
	name: stringType().trim().min(1, "Name is required").max(120),
	company: stringType().trim().max(160).optional().default(""),
	email: stringType().trim().email("Enter a valid email address").max(255),
	country: stringType().trim().max(120).optional().default(""),
	inquiryType: stringType().trim().min(1).max(120),
	message: stringType().trim().min(1, "Message is required").max(4e3)
});
var submitContactInquiry = createServerFn({ method: "POST" }).inputValidator((data) => contactSchema.parse(data)).handler(createSsrRpc("3a7e44215f59e26cd4c3ae5d4c2da53249351c65c59e142ba68b14b41eb109b3"));
var inquiryTypes = [
	"Trade / Off-Take Inquiry",
	"Investment & Partnership",
	"Mexico–Africa Technology Partnership",
	"Outgrower / Farmer Program",
	"Media & Press",
	"General Inquiry"
];
function ContactPage() {
	const [submitted, setSubmitted] = (0, import_react.useState)(false);
	const [pending, setPending] = (0, import_react.useState)(false);
	const [error, setError] = (0, import_react.useState)(null);
	const sendInquiry = useServerFn(submitContactInquiry);
	async function handleSubmit(event) {
		event.preventDefault();
		if (pending) return;
		const form = event.currentTarget;
		const fd = new FormData(form);
		setPending(true);
		setError(null);
		try {
			await sendInquiry({ data: {
				name: String(fd.get("name") ?? ""),
				company: String(fd.get("company") ?? ""),
				email: String(fd.get("email") ?? ""),
				country: String(fd.get("country") ?? ""),
				inquiryType: String(fd.get("type") ?? ""),
				message: String(fd.get("message") ?? "")
			} });
			form.reset();
			setSubmitted(true);
			toast.success("Inquiry sent", { description: "Our team has received your message and will follow up shortly." });
		} catch (err) {
			const message = err instanceof Error && err.message ? err.message : "Something went wrong. Please try again.";
			setError(message);
			toast.error("Inquiry not sent", { description: message });
		} finally {
			setPending(false);
		}
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
		eyebrow: "Contact",
		title: "Connect With Our Team",
		intro: "Whether you are an international buyer, an institutional investor, a technology supplier, or a government partner, NIMEX welcomes strategic engagement."
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "grid gap-14 lg:grid-cols-[1fr_1.1fr]",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "space-y-10",
			children: [company.offices.map((office) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "border-l-2 border-accent pl-6",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "text-2xl leading-snug",
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
			}, office.city)), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "rounded-[1.75rem] bg-surface ring-1 ring-border/70 p-7",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "eyebrow text-muted-foreground",
					children: "Specialized Corporate Desks"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
					className: "mt-5 space-y-4 text-sm",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "block text-muted-foreground",
							children: "General Inquiries"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							className: "text-primary hover:underline",
							href: `mailto:${company.emails.general}`,
							children: company.emails.general
						})] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "block text-muted-foreground",
							children: "Corporate & Investor Desk"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							className: "text-primary hover:underline",
							href: `mailto:${company.emails.corporate}`,
							children: company.emails.corporate
						})] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "block text-muted-foreground",
							children: "International Desk — Mexico–Africa Trade & Agriculture Partnership Division"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							className: "text-primary hover:underline",
							href: `mailto:${company.emails.international}`,
							children: company.emails.international
						})] })
					]
				})]
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "rounded-[1.75rem] bg-surface ring-1 ring-border/70 p-8 lg:p-10",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
				eyebrow: "Partner With Us",
				title: "Send an Inquiry"
			}), submitted ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-8",
				role: "status",
				"aria-live": "polite",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-base leading-relaxed text-foreground",
						children: "Thank you — your inquiry has been received by the NIMEX team."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-4 text-sm leading-relaxed text-muted-foreground",
						children: [
							"A member of the relevant desk will respond directly. For urgent matters you can also reach us at",
							" ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								className: "text-primary hover:underline",
								href: `mailto:${company.emails.general}`,
								children: company.emails.general
							}),
							"."
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: () => setSubmitted(false),
						className: "mt-7 text-xs font-semibold uppercase tracking-[0.14em] text-primary hover:underline",
						children: "Send another inquiry"
					})
				]
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
				className: "mt-8 space-y-5",
				onSubmit: handleSubmit,
				noValidate: false,
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid gap-5 sm:grid-cols-2",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
								label: "Full name",
								name: "name"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
								label: "Company / Institution",
								name: "company"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
								label: "Email",
								name: "email",
								type: "email"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
								label: "Country",
								name: "country"
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
						className: "block",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "eyebrow text-muted-foreground",
							children: "Inquiry type"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
							name: "type",
							required: true,
							className: "mt-2 w-full rounded-xl border border-input bg-background px-4 py-3 text-sm outline-none transition-colors focus:border-ring",
							children: inquiryTypes.map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: t }, t))
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
						className: "block",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "eyebrow text-muted-foreground",
							children: "Message"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
							name: "message",
							required: true,
							rows: 5,
							className: "mt-2 w-full rounded-xl border border-input bg-background px-4 py-3 text-sm outline-none transition-colors focus:border-ring"
						})]
					}),
					error ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm text-destructive",
						role: "alert",
						children: error
					}) : null,
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "submit",
						disabled: pending,
						className: "w-full rounded-full bg-primary px-6 py-4 text-sm font-medium text-primary-foreground transition-all hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-60",
						children: pending ? "Sending…" : "Submit Inquiry"
					})
				]
			})]
		})]
	}) })] });
}
function Field({ label, name, type = "text" }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
		className: "block",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "eyebrow text-muted-foreground",
			children: label
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
			name,
			type,
			required: true,
			className: "mt-2 w-full rounded-xl border border-input bg-background px-4 py-3 text-sm outline-none transition-colors focus:border-ring"
		})]
	});
}
//#endregion
export { ContactPage as component };
