import { Link } from "@tanstack/react-router";
import { useEffect, useRef, useState, type ReactNode } from "react";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

/** Scroll-triggered reveal wrapper. */
export function Reveal({
  children,
  delay = 0,
  className,
  as: As = "div",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
  as?: "div" | "li" | "section";
}) {
  const ref = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            setVisible(true);
            io.disconnect();
          }
        }
      },
      { rootMargin: "0px 0px -12% 0px", threshold: 0.08 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <As
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      ref={ref as any}
      data-visible={visible}
      style={{ transitionDelay: `${delay}ms` }}
      className={cn("reveal", className)}
    >
      {children}
    </As>
  );
}

/** Headline helper: renders an italic serif accent phrase. */
export function Em({ children }: { children: ReactNode }) {
  return <span className="serif-accent">{children}</span>;
}

export function Section({
  children,
  className,
  tone = "default",
  id,
}: {
  children: ReactNode;
  className?: string;
  tone?: "default" | "muted" | "deep";
  id?: string;
}) {
  return (
    <section
      id={id}
      className={cn(
        "px-4 py-16 sm:px-6 lg:px-8 lg:py-24",
        className,
      )}
    >
      <div
        className={cn(
          "mx-auto max-w-7xl",
          tone === "muted" && "rounded-[2rem] bg-surface px-5 py-14 sm:px-10 lg:px-14 lg:py-20",
          tone === "deep" &&
            "rounded-[2rem] bg-deep px-5 py-14 text-deep-foreground sm:px-10 lg:px-14 lg:py-20",
        )}
      >
        {children}
      </div>
    </section>
  );
}

export function Eyebrow({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <p
      className={cn(
        "inline-flex items-center gap-2 rounded-full border border-current/15 bg-current/5 px-3.5 py-1.5 text-[0.7rem] font-medium tracking-[0.02em] text-current/80",
        className,
      )}
    >
      <span className="h-1.5 w-1.5 rounded-full bg-accent" aria-hidden />
      {children}
    </p>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  accent,
  intro,
  align = "left",
  className,
}: {
  eyebrow?: string;
  title: string;
  accent?: string;
  intro?: string;
  align?: "left" | "center";
  className?: string;
}) {
  if (align === "center") {
    return (
      <div className={cn("mx-auto max-w-2xl text-center", className)}>
        {eyebrow ? <Eyebrow>{eyebrow}</Eyebrow> : null}
        <h2 className="mt-5 text-balance text-3xl leading-[1.08] sm:text-4xl lg:text-5xl">
          {title} {accent ? <Em>{accent}</Em> : null}
        </h2>
        {intro ? (
          <p className="mt-5 text-base leading-relaxed text-muted-foreground">{intro}</p>
        ) : null}
      </div>
    );
  }

  return (
    <div
      className={cn(
        "grid gap-6 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] lg:items-end lg:gap-16",
        className,
      )}
    >
      <div className="min-w-0">
        {eyebrow ? <Eyebrow>{eyebrow}</Eyebrow> : null}
        <h2 className="mt-5 text-balance text-3xl leading-[1.08] sm:text-4xl lg:text-5xl">
          {title} {accent ? <Em>{accent}</Em> : null}
        </h2>
      </div>
      {intro ? (
        <p className="min-w-0 text-sm leading-relaxed text-muted-foreground lg:text-base">
          {intro}
        </p>
      ) : null}
    </div>
  );
}

export function CtaLink({
  to,
  children,
  variant = "solid",
  className,
}: {
  to: string;
  children: ReactNode;
  variant?: "solid" | "outline" | "ghost";
  className?: string;
}) {
  return (
    <Link
      to={to}
      className={cn(
        "group inline-flex items-center justify-center gap-2 rounded-full px-6 py-3.5 text-sm font-medium transition-all duration-300",
        variant === "solid" &&
          "bg-primary text-primary-foreground hover:-translate-y-0.5 hover:shadow-[0_12px_30px_-12px_oklch(0.335_0.062_152_/_0.65)]",
        variant === "outline" &&
          "border border-current/25 backdrop-blur-sm hover:-translate-y-0.5 hover:bg-current/10",
        variant === "ghost" && "px-0 text-primary hover:gap-3",
        className,
      )}
    >
      {children}
      {variant !== "ghost" ? (
        <ArrowUpRight
          className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
          aria-hidden
        />
      ) : null}
    </Link>
  );
}

export function AccentButton({
  to,
  children,
  className,
}: {
  to: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <Link
      to={to}
      className={cn(
        "group inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3.5 text-sm font-medium text-accent-foreground transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_14px_34px_-12px_oklch(0.895_0.185_122_/_0.8)]",
        className,
      )}
    >
      {children}
      <ArrowUpRight
        className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
        aria-hidden
      />
    </Link>
  );
}

export function NumberedList({
  items,
  tone = "default",
}: {
  items: readonly { title: string; body: string }[];
  tone?: "default" | "deep";
}) {
  return (
    <ol className="grid gap-4 md:grid-cols-3">
      {items.map((item, i) => (
        <Reveal as="li" key={item.title} delay={i * 90}>
          <div
            className={cn(
              "flex h-full flex-col gap-4 rounded-3xl p-8 transition-transform duration-500 hover:-translate-y-1",
              tone === "deep"
                ? "bg-deep-foreground/5 ring-1 ring-deep-foreground/10"
                : "bg-surface ring-1 ring-border/70",
            )}
          >
            <span
              className={cn(
                "grid h-10 w-10 place-items-center rounded-full text-sm font-semibold",
                tone === "deep"
                  ? "bg-accent text-accent-foreground"
                  : "bg-accent text-accent-foreground",
              )}
            >
              {String(i + 1).padStart(2, "0")}
            </span>
            <h3 className="text-xl leading-snug">{item.title}</h3>
            <p
              className={cn(
                "text-sm leading-relaxed",
                tone === "deep" ? "text-deep-foreground/70" : "text-muted-foreground",
              )}
            >
              {item.body}
            </p>
          </div>
        </Reveal>
      ))}
    </ol>
  );
}

export function PageHero({
  eyebrow,
  title,
  accent,
  intro,
  image,
  imageAlt,
}: {
  eyebrow: string;
  title: string;
  accent?: string;
  intro: string;
  image?: string;
  imageAlt?: string;
}) {
  return (
    <section className="px-4 pt-24 sm:px-6 lg:px-8">
      <div className="relative isolate mx-auto max-w-7xl overflow-hidden rounded-[2rem] bg-deep text-deep-foreground">
        {image ? (
          <>
            <img
              src={image}
              alt={imageAlt ?? ""}
              className="absolute inset-0 -z-10 h-full w-full scale-105 object-cover opacity-45"
            />
            <div
              className="absolute inset-0 -z-10 bg-gradient-to-r from-deep via-deep/85 to-deep/30"
              aria-hidden
            />
          </>
        ) : null}
        <div className="relative px-6 py-20 sm:px-10 lg:px-14 lg:py-28">
          <Reveal>
            <Eyebrow className="text-deep-foreground">{eyebrow}</Eyebrow>
          </Reveal>
          <Reveal delay={90}>
            <h1 className="mt-6 max-w-4xl text-balance text-4xl leading-[1.05] sm:text-5xl lg:text-6xl">
              {title} {accent ? <Em>{accent}</Em> : null}
            </h1>
          </Reveal>
          <Reveal delay={160}>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-deep-foreground/75">
              {intro}
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}