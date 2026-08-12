import { Link, useRouterState } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import { navItems } from "./nav-data";
import { cn } from "@/lib/utils";

function Wordmark({ overlay }: { overlay: boolean }) {
  return (
    <Link to="/" className="group flex items-center gap-3" aria-label="NIMEX Africa Agro Ventures home">
      <img
        src="/nimexlogo.png"
        alt="NIMEX Africa logo"
        width={40}
        height={40}
        className="h-10 w-10 rounded-2xl object-cover transition-transform duration-300 group-hover:rotate-6"
      />
      <span className="leading-tight">
        <span className="block text-base font-semibold tracking-tight">NIMEX Africa</span>
        <span
          className={cn(
            "block text-[0.6rem] uppercase tracking-[0.2em]",
            overlay ? "text-current/65" : "text-muted-foreground",
          )}
        >
          Agro Ventures Ltd
        </span>
      </span>
    </Link>
  );
}

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [expanded, setExpanded] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const overlay = pathname === "/" && !scrolled && !open;

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-2 sm:px-6 sm:pt-3 lg:px-8 lg:pt-4">
      <div
        className={cn(
          "mx-auto flex h-16 max-w-7xl items-center justify-between gap-6 rounded-full px-4 transition-all duration-500 sm:px-5",
          overlay
            ? "border border-deep-foreground/20 bg-deep-foreground/10 text-deep-foreground backdrop-blur-md"
            : scrolled || open
              ? "border border-border/70 bg-background/85 shadow-[0_18px_50px_-30px_oklch(0.2_0.03_155_/_0.7)] backdrop-blur-xl"
              : "border border-transparent bg-background/60 backdrop-blur-md",
        )}
      >
        <Wordmark overlay={overlay} />

        <nav
          className={cn(
            "hidden items-center gap-0.5 rounded-full border p-1 transition-colors duration-500 xl:flex",
            overlay
              ? "border-deep-foreground/20 bg-deep-foreground/10"
              : "border-border/60 bg-secondary/60",
          )}
          aria-label="Primary"
        >
          {navItems.map((item) => (
            <div key={item.label} className="group relative">
              <Link
                to={item.to}
                className={cn(
                  "flex items-center gap-1 whitespace-nowrap rounded-full px-3.5 py-2 text-[0.8125rem] font-medium transition-colors",
                  overlay
                    ? "text-deep-foreground/85 hover:bg-deep-foreground/15 hover:text-deep-foreground"
                    : "text-foreground/75 hover:bg-background hover:text-foreground",
                )}
                activeProps={{
                  className: overlay
                    ? "bg-deep-foreground/15 text-deep-foreground"
                    : "bg-background text-foreground shadow-sm",
                }}
              >
                {item.label}
                {"children" in item ? (
                  <ChevronDown className="h-3.5 w-3.5 opacity-60 transition-transform duration-300 group-hover:rotate-180" aria-hidden />
                ) : null}
              </Link>
              {"children" in item ? (
                <div className="invisible absolute left-0 top-full w-64 translate-y-2 overflow-hidden rounded-2xl border border-border/70 bg-card p-1.5 opacity-0 shadow-[0_24px_60px_-30px_oklch(0.2_0.03_155_/_0.8)] transition-all duration-300 group-hover:visible group-hover:translate-y-1 group-hover:opacity-100 group-focus-within:visible group-focus-within:translate-y-1 group-focus-within:opacity-100">
                  {item.children.map((child, i) => (
                    <Link
                      key={`${child.label}-${i}`}
                      to={child.to}
                      className="block rounded-xl px-4 py-2.5 text-sm text-foreground/80 transition-colors hover:bg-surface hover:text-foreground"
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              ) : null}
            </div>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Link
            to="/contact"
            className="hidden items-center whitespace-nowrap rounded-full bg-primary px-5 py-2.5 text-[0.8125rem] font-medium text-primary-foreground transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_12px_30px_-12px_oklch(0.335_0.062_152_/_0.7)] md:inline-flex"
          >
            Partner With Us
          </Link>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className={cn(
              "inline-flex h-11 w-11 items-center justify-center rounded-full border transition-colors xl:hidden",
              overlay
                ? "border-deep-foreground/25 bg-deep-foreground/10 text-deep-foreground"
                : "border-border bg-background text-foreground hover:bg-surface",
            )}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
          >
            {open ? <X className="h-5 w-5" aria-hidden /> : <Menu className="h-5 w-5" aria-hidden />}
          </button>
        </div>
      </div>

      {open ? (
        <div className="fixed inset-x-0 bottom-0 top-24 z-50 overflow-y-auto bg-background/95 backdrop-blur-xl xl:hidden">
          <nav className="mx-auto max-w-7xl px-6 py-4" aria-label="Mobile">
            {navItems.map((item) => (
              <div key={item.label} className="border-b border-border/70">
                <div className="flex items-center justify-between">
                  <Link
                    to={item.to}
                    onClick={() => setOpen(false)}
                    className="flex-1 py-4 text-lg font-medium tracking-tight"
                  >
                    {item.label}
                  </Link>
                  {"children" in item ? (
                    <button
                      type="button"
                      aria-label={`Toggle ${item.label} submenu`}
                      onClick={() => setExpanded((v) => (v === item.label ? null : item.label))}
                      className="p-3"
                    >
                      <ChevronDown
                        className={cn(
                          "h-4 w-4 transition-transform",
                          expanded === item.label && "rotate-180",
                        )}
                        aria-hidden
                      />
                    </button>
                  ) : null}
                </div>
                {"children" in item && expanded === item.label ? (
                  <div className="pb-3">
                    {item.children.map((child, i) => (
                      <Link
                        key={`${child.label}-${i}`}
                        to={child.to}
                        onClick={() => setOpen(false)}
                        className="block py-2 pl-4 text-sm text-muted-foreground"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                ) : null}
              </div>
            ))}
            <Link
              to="/contact"
              onClick={() => setOpen(false)}
              className="mt-8 flex items-center justify-center rounded-full bg-primary px-5 py-4 text-sm font-medium text-primary-foreground"
            >
              Partner With Us / Trade Inquiries
            </Link>
          </nav>
        </div>
      ) : null}
    </header>
  );
}