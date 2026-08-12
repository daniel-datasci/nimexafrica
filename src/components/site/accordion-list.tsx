import { useState } from "react";
import { Minus, Plus } from "lucide-react";
import { cn } from "@/lib/utils";

export function AccordionList({
  items,
  tone = "default",
  defaultOpen = 0,
}: {
  items: readonly { title: string; body: string }[];
  tone?: "default" | "deep";
  defaultOpen?: number;
}) {
  const [open, setOpen] = useState<number | null>(defaultOpen);

  return (
    <div className="space-y-3">
      {items.map((item, i) => {
        const isOpen = open === i;
        return (
          <div
            key={item.title}
            className={cn(
              "overflow-hidden rounded-2xl transition-colors duration-300",
              tone === "deep"
                ? "bg-deep-foreground/5 ring-1 ring-deep-foreground/10"
                : "bg-surface ring-1 ring-border/70",
              isOpen && (tone === "deep" ? "bg-deep-foreground/10" : "bg-card ring-border"),
            )}
          >
            <button
              type="button"
              onClick={() => setOpen(isOpen ? null : i)}
              aria-expanded={isOpen}
              className="flex w-full items-center gap-4 px-5 py-4 text-left"
            >
              <span
                className={cn(
                  "grid h-8 w-8 shrink-0 place-items-center rounded-lg transition-colors",
                  isOpen ? "bg-accent text-accent-foreground" : "bg-background/70 text-foreground/60",
                  tone === "deep" && !isOpen && "bg-deep-foreground/10 text-deep-foreground/70",
                )}
                aria-hidden
              >
                {isOpen ? <Minus className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
              </span>
              <span className="min-w-0 flex-1 text-base font-medium tracking-tight">
                {item.title}
              </span>
            </button>
            <div
              className={cn(
                "grid transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]",
                isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0",
              )}
            >
              <div className="overflow-hidden">
                <p
                  className={cn(
                    "px-5 pb-5 pl-17 text-sm leading-relaxed",
                    tone === "deep" ? "text-deep-foreground/70" : "text-muted-foreground",
                  )}
                >
                  {item.body}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
