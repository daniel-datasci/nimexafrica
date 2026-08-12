import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(120),
  company: z.string().trim().max(160).optional().default(""),
  email: z.string().trim().email("Enter a valid email address").max(255),
  country: z.string().trim().max(120).optional().default(""),
  inquiryType: z.string().trim().min(1).max(120),
  message: z.string().trim().min(1, "Message is required").max(4000),
});

export type ContactInput = z.input<typeof contactSchema>;

export const submitContactInquiry = createServerFn({ method: "POST" })
  .inputValidator((data: ContactInput) => contactSchema.parse(data))
  .handler(async ({ data }) => {
    const { supabaseAdmin } = await import("@/integrations/supabase/client.server");

    const { error } = await supabaseAdmin.from("contact_submissions").insert({
      name: data.name,
      company: data.company || null,
      email: data.email,
      country: data.country || null,
      inquiry_type: data.inquiryType,
      message: data.message,
    });

    if (error) {
      console.error("contact_submissions insert failed", error);
      throw new Error("We could not record your inquiry. Please try again.");
    }

    return { ok: true as const };
  });
