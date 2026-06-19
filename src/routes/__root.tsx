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
import faviconUrl from "../assets/scraped/favicon.png";
import { reportLovableError } from "../lib/lovable-error-reporting";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Sidan hittades inte</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          Sidan du letar efter finns inte, eller så har den flyttats.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-full bg-primary px-5 py-2 text-sm font-semibold text-primary-foreground transition-colors hover:opacity-90"
          >
            Tillbaka hem
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
        <h1 className="text-xl font-semibold text-foreground">Något gick fel</h1>
        <p className="mt-2 text-sm text-muted-foreground">Försök ladda om sidan eller gå tillbaka hem.</p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => { router.invalidate(); reset(); }}
            className="rounded-full bg-primary px-5 py-2 text-sm font-semibold text-primary-foreground hover:opacity-90"
          >
            Försök igen
          </button>
          <a href="/" className="rounded-full border border-input bg-background px-5 py-2 text-sm font-semibold text-foreground hover:bg-secondary">
            Hem
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
      { title: "Rävens Bistro — Bra mat & goda vibbar i Väse" },
      { name: "description", content: "Rävens Bistro i Väse strax utanför Karlstad. Pizza, à la carte, kebab, catering och evenemang sedan 2018." },
      { name: "theme-color", content: "#EC2C34" },
      { property: "og:site_name", content: "Rävens Bistro" },
      { property: "og:type", content: "website" },
      { property: "og:locale", content: "sv_SE" },
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:title", content: "Rävens Bistro — Bra mat & goda vibbar i Väse" },
      { name: "twitter:title", content: "Rävens Bistro — Bra mat & goda vibbar i Väse" },
      { property: "og:description", content: "Rävens Bistro i Väse strax utanför Karlstad. Pizza, à la carte, kebab, catering och evenemang sedan 2018." },
      { name: "twitter:description", content: "Rävens Bistro i Väse strax utanför Karlstad. Pizza, à la carte, kebab, catering och evenemang sedan 2018." },
      { property: "og:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/d863032a-5112-4785-a4d6-5c3dfd2b530f/id-preview-b449a96f--77245064-d1a0-49ea-b96d-d732185a1e40.lovable.app-1781027767574.png" },
      { name: "twitter:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/d863032a-5112-4785-a4d6-5c3dfd2b530f/id-preview-b449a96f--77245064-d1a0-49ea-b96d-d732185a1e40.lovable.app-1781027767574.png" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "icon", type: "image/png", href: faviconUrl },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght,SOFT,WONK@9..144,300..900,0..100,0..1&family=DM+Sans:opsz,wght@9..40,300..700&family=Just+Another+Hand&display=swap" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Restaurant",
          name: "Rävens Bistro",
          servesCuisine: ["Pizza", "Svensk husman", "Kebab", "À la carte"],
          telephone: "+46-54-18 18 20",
          email: "Kontakt@ravensbistro.com",
          priceRange: "$$",
          address: {
            "@type": "PostalAddress",
            streetAddress: "Storgatan 38",
            postalCode: "660 57",
            addressLocality: "Väse",
            addressCountry: "SE",
          },
          openingHours: ["Mo-Th 11:00-21:00", "Fr-Sa 11:00-22:00", "Su 11:00-21:00"],
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
    <html lang="sv">
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
      <a href="#content" className="skip-link">Hoppa till innehåll</a>
      <Outlet />
    </QueryClientProvider>
  );
}
