import { n as stringType, t as objectType } from "../_libs/zod.mjs";
import { a as createServerFn, i as TSS_SERVER_FUNCTION } from "./server-BObTVgZ2.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/contact.functions-wOTRHA72.js
var createServerRpc = (serverFnMeta, splitImportFn) => {
	const url = "/_serverFn/" + serverFnMeta.id;
	return Object.assign(splitImportFn, {
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
var submitContactInquiry_createServerFn_handler = createServerRpc({
	id: "3a7e44215f59e26cd4c3ae5d4c2da53249351c65c59e142ba68b14b41eb109b3",
	name: "submitContactInquiry",
	filename: "src/lib/contact.functions.ts"
}, (opts) => submitContactInquiry.__executeServer(opts));
var submitContactInquiry = createServerFn({ method: "POST" }).inputValidator((data) => contactSchema.parse(data)).handler(submitContactInquiry_createServerFn_handler, async ({ data }) => {
	const { supabaseAdmin } = await import("./client.server-KzwUIAkW.mjs");
	const { error } = await supabaseAdmin.from("contact_submissions").insert({
		name: data.name,
		company: data.company || null,
		email: data.email,
		country: data.country || null,
		inquiry_type: data.inquiryType,
		message: data.message
	});
	if (error) {
		console.error("contact_submissions insert failed", error);
		throw new Error("We could not record your inquiry. Please try again.");
	}
	return { ok: true };
});
//#endregion
export { submitContactInquiry_createServerFn_handler };
