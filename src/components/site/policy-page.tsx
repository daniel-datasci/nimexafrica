import { PageHero, Section } from "./primitives";
import { company } from "@/content/company";

export function PolicyPage({
  eyebrow,
  title,
  intro,
  sections,
}: {
  eyebrow: string;
  title: string;
  intro: string;
  sections: { heading: string; body: string }[];
}) {
  return (
    <>
      <PageHero eyebrow={eyebrow} title={title} intro={intro} />
      <Section>
        <div className="max-w-3xl space-y-10">
          {sections.map((s) => (
            <div key={s.heading}>
              <h2 className="text-2xl leading-snug">{s.heading}</h2>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground">{s.body}</p>
            </div>
          ))}
          <p className="border-t border-border pt-8 text-sm text-muted-foreground">
            Questions about this policy can be directed to{" "}
            <a className="text-primary hover:underline" href={`mailto:${company.emails.corporate}`}>
              {company.emails.corporate}
            </a>
            .
          </p>
        </div>
      </Section>
    </>
  );
}