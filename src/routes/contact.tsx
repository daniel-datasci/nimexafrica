import { pageJsonLd } from "@/lib/structured-data";
import { createFileRoute } from "@tanstack/react-router";
import { useServerFn } from "@tanstack/react-start";
import { useState } from "react";
import { toast } from "sonner";
import { company } from "@/content/company";
import { submitContactInquiry } from "@/lib/contact.functions";
import { PageHero, Section, SectionHeading } from "@/components/site/primitives";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact & Global Locations | NIMEX Africa Agro Ventures" },
      {
        name: "description",
        content:
          "Reach NIMEX Africa's Abuja head office, Lagos commercial operations hub, or our corporate, investor and international trade desks.",
      },
      { property: "og:title", content: "Connect With Our Team" },
      {
        property: "og:description",
        content:
          "Buyers, investors, technology suppliers and government partners are welcome to engage NIMEX Africa.",
      },
      { property: "og:type", content: "article" },
      { property: "og:image", content: "https://nimexafrica.com/og/contact.jpg" },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { name: "twitter:image", content: "https://nimexafrica.com/og/contact.jpg" },
      { property: "og:url", content: "https://nimexafrica.com/contact" },
    ],
    links: [{ rel: "canonical", href: "https://nimexafrica.com/contact" }],
    scripts: pageJsonLd({
      path: "/contact",
      name: "Contact & Global Locations | NIMEX Africa Agro Ventures",
      description: "Reach NIMEX Africa's Abuja head office, Lagos commercial operations hub, or our corporate, investor and international trade desks.",
      image: "https://nimexafrica.com/og/contact.jpg",
      type: "ContactPage",
    }),
  }),
  component: ContactPage,
});

const inquiryTypes = [
  "Trade / Off-Take Inquiry",
  "Investment & Partnership",
  "Mexico–Africa Technology Partnership",
  "Outgrower / Farmer Program",
  "Media & Press",
  "General Inquiry",
];

function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [pending, setPending] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const sendInquiry = useServerFn(submitContactInquiry);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (pending) return;
    const form = event.currentTarget;
    const fd = new FormData(form);
    setPending(true);
    setError(null);
    try {
      await sendInquiry({
        data: {
          name: String(fd.get("name") ?? ""),
          company: String(fd.get("company") ?? ""),
          email: String(fd.get("email") ?? ""),
          country: String(fd.get("country") ?? ""),
          inquiryType: String(fd.get("type") ?? ""),
          message: String(fd.get("message") ?? ""),
        },
      });
      form.reset();
      setSubmitted(true);
      toast.success("Inquiry sent", {
        description: "Our team has received your message and will follow up shortly.",
      });
    } catch (err) {
      const message =
        err instanceof Error && err.message
          ? err.message
          : "Something went wrong. Please try again.";
      setError(message);
      toast.error("Inquiry not sent", { description: message });
    } finally {
      setPending(false);
    }
  }

  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Connect With Our Team"
        intro="Whether you are an international buyer, an institutional investor, a technology supplier, or a government partner, NIMEX welcomes strategic engagement."
      />

      <Section>
        <div className="grid gap-14 lg:grid-cols-[1fr_1.1fr]">
          <div className="space-y-10">
            {company.offices.map((office) => (
              <div key={office.city} className="border-l-2 border-accent pl-6">
                <h2 className="text-2xl leading-snug">{office.label}</h2>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                  {office.address}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-foreground/80">{office.role}</p>
                <p className="mt-3 text-sm text-muted-foreground">{office.phone}</p>
              </div>
            ))}

            <div className="rounded-[1.75rem] bg-surface ring-1 ring-border/70 p-7">
              <h2 className="eyebrow text-muted-foreground">Specialized Corporate Desks</h2>
              <ul className="mt-5 space-y-4 text-sm">
                <li>
                  <span className="block text-muted-foreground">General Inquiries</span>
                  <a className="text-primary hover:underline" href={`mailto:${company.emails.general}`}>
                    {company.emails.general}
                  </a>
                </li>
                <li>
                  <span className="block text-muted-foreground">Corporate & Investor Desk</span>
                  <a className="text-primary hover:underline" href={`mailto:${company.emails.corporate}`}>
                    {company.emails.corporate}
                  </a>
                </li>
                <li>
                  <span className="block text-muted-foreground">
                    International Desk — Mexico–Africa Trade & Agriculture Partnership Division
                  </span>
                  <a
                    className="text-primary hover:underline"
                    href={`mailto:${company.emails.international}`}
                  >
                    {company.emails.international}
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="rounded-[1.75rem] bg-surface ring-1 ring-border/70 p-8 lg:p-10">
            <SectionHeading eyebrow="Partner With Us" title="Send an Inquiry" />
            {submitted ? (
              <div className="mt-8" role="status" aria-live="polite">
                <p className="text-base leading-relaxed text-foreground">
                  Thank you — your inquiry has been received by the NIMEX team.
                </p>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                  A member of the relevant desk will respond directly. For urgent matters you can
                  also reach us at{" "}
                  <a
                    className="text-primary hover:underline"
                    href={`mailto:${company.emails.general}`}
                  >
                    {company.emails.general}
                  </a>
                  .
                </p>
                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="mt-7 text-xs font-semibold uppercase tracking-[0.14em] text-primary hover:underline"
                >
                  Send another inquiry
                </button>
              </div>
            ) : (
              <form
                className="mt-8 space-y-5"
                onSubmit={handleSubmit}
                noValidate={false}
              >
                <div className="grid gap-5 sm:grid-cols-2">
                  <Field label="Full name" name="name" />
                  <Field label="Company / Institution" name="company" />
                  <Field label="Email" name="email" type="email" />
                  <Field label="Country" name="country" />
                </div>
                <label className="block">
                  <span className="eyebrow text-muted-foreground">Inquiry type</span>
                  <select
                    name="type"
                    required
                    className="mt-2 w-full rounded-xl border border-input bg-background px-4 py-3 text-sm outline-none transition-colors focus:border-ring"
                  >
                    {inquiryTypes.map((t) => (
                      <option key={t}>{t}</option>
                    ))}
                  </select>
                </label>
                <label className="block">
                  <span className="eyebrow text-muted-foreground">Message</span>
                  <textarea
                    name="message"
                    required
                    rows={5}
                    className="mt-2 w-full rounded-xl border border-input bg-background px-4 py-3 text-sm outline-none transition-colors focus:border-ring"
                  />
                </label>
                {error ? (
                  <p className="text-sm text-destructive" role="alert">
                    {error}
                  </p>
                ) : null}
                <button
                  type="submit"
                  disabled={pending}
                  className="w-full rounded-full bg-primary px-6 py-4 text-sm font-medium text-primary-foreground transition-all hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {pending ? "Sending…" : "Submit Inquiry"}
                </button>
              </form>
            )}
          </div>
        </div>
      </Section>
    </>
  );
}

function Field({ label, name, type = "text" }: { label: string; name: string; type?: string }) {
  return (
    <label className="block">
      <span className="eyebrow text-muted-foreground">{label}</span>
      <input
        name={name}
        type={type}
        required
        className="mt-2 w-full rounded-xl border border-input bg-background px-4 py-3 text-sm outline-none transition-colors focus:border-ring"
      />
    </label>
  );
}