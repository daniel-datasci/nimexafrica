import { ORG_ID, SITE_ID, SITE_URL } from "@/lib/structured-data";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";
import { SiteHeader } from "@/components/site/site-header";
import { SiteFooter } from "@/components/site/site-footer";
import { Toaster } from "@/components/ui/sonner";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          This page didn't load
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong on our end. You can try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "NIMEX Africa Agro Ventures Ltd" },
      {
        name: "description",
        content:
          "Institutional agribusiness platform bridging Mexican agricultural technology and African production, processing and trade.",
      },
      { name: "author", content: "NIMEX Africa Agro Ventures Ltd" },
      { property: "og:site_name", content: "NIMEX Africa Agro Ventures Ltd" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      {
        rel: "stylesheet",
        href: appCss,
      },
      // Fonts are self-hosted (see src/styles.css) — no third-party round trips.
      {
        rel: "preload",
        as: "font",
        type: "font/woff2",
        href: "/fonts/archivo-400-normal-latin.woff2",
        crossOrigin: "anonymous",
      },
      {
        rel: "preload",
        as: "font",
        type: "font/woff2",
        href: "/fonts/instrument-serif-400-italic-latin.woff2",
        crossOrigin: "anonymous",
      },
      { rel: "icon", href: "/nimexlogo.png", type: "image/png" },
      { rel: "shortcut icon", href: "/favicon.ico", type: "image/x-icon" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "Organization",
              "@id": ORG_ID,
              name: "NIMEX Africa Agro Ventures Ltd",
              alternateName: "NIMEX Africa",
              url: `${SITE_URL}/`,
              logo: {
                "@type": "ImageObject",
                url: `${SITE_URL}/nimexlogo.png`,
                width: 2750,
                height: 2750,
              },
              image: `${SITE_URL}/og/home.jpg`,
              description:
                "Integrated agribusiness platform bridging Mexican agricultural technology and African land, processing and trade capacity.",
              areaServed: ["NG", "MX", "Global"],
              knowsAbout: [
                "Agricultural commodity trading",
                "Agro-processing",
                "Precision agriculture",
                "Cross-border agricultural logistics",
              ],
              address: [
                {
                  "@type": "PostalAddress",
                  streetAddress: "Plot 160, Aminu Kano Crescent, Wuse 2",
                  addressLocality: "Abuja",
                  addressRegion: "FCT",
                  addressCountry: "NG",
                },
                {
                  "@type": "PostalAddress",
                  streetAddress: "No. 50A, Itafaji Street, Dolphin Estate, Ikoyi",
                  addressLocality: "Lagos",
                  addressCountry: "NG",
                },
              ],
              contactPoint: [
                {
                  "@type": "ContactPoint",
                  contactType: "customer service",
                  email: "info@nimexafrica.com",
                  areaServed: "NG",
                  availableLanguage: ["English"],
                },
                {
                  "@type": "ContactPoint",
                  contactType: "investor relations",
                  email: "corporate@nimexafrica.com",
                  availableLanguage: ["English"],
                },
                {
                  "@type": "ContactPoint",
                  contactType: "international trade",
                  email: "transatlantic@nimexafrica.com",
                  availableLanguage: ["English", "Spanish"],
                },
              ],
              email: "info@nimexafrica.com",
            },
            {
              "@type": "WebSite",
              "@id": SITE_ID,
              url: `${SITE_URL}/`,
              name: "NIMEX Africa Agro Ventures Ltd",
              description:
                "Institutional agribusiness platform bridging Mexican agricultural technology and African production, processing and trade.",
              publisher: { "@id": ORG_ID },
              inLanguage: "en",
            },
          ],
        }),
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <div className="flex min-h-screen flex-col">
        <SiteHeader />
        <main className="flex-1">
          {/* Required: nested routes render here. Removing <Outlet /> breaks all child routes. */}
          <Outlet />
        </main>
        <SiteFooter />
      </div>
      <Toaster />
    </QueryClientProvider>
  );
}
