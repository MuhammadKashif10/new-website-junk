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
import { SiteLayout } from "@/components/site/SiteLayout";
import { absoluteUrl } from "@/config/site";
import ogImage from "@/assets/hero-main.jpg";

function NotFoundComponent() {
  return (
    <SiteLayout>
      <div className="container-x flex min-h-[60vh] items-center justify-center py-24">
        <div className="max-w-md text-center">
          <h1 className="text-7xl" style={{ fontFamily: "var(--font-display)" }}>404</h1>
          <h2 className="mt-4 text-xl font-semibold">Page not found</h2>
          <p className="mt-2 text-sm text-muted-foreground">
            This page has moved or never existed. Head back home and start fresh.
          </p>
          <Link
            to="/"
            className="mt-6 inline-flex items-center justify-center rounded-full bg-[color:var(--color-ink)] px-5 py-2.5 text-sm text-[color:var(--color-cream)]"
          >
            Go home
          </Link>
        </div>
      </div>
    </SiteLayout>
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
        <h1 className="text-xl font-semibold">This page didn't load</h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong. Try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center rounded-full bg-[color:var(--color-ink)] px-5 py-2.5 text-sm text-[color:var(--color-cream)]"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex items-center rounded-full border border-border px-5 py-2.5 text-sm"
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
      { title: "Marhaba Clearance — Premium Junk Removal in Dubai" },
      {
        name: "description",
        content:
          "Discreet, dependable junk removal across Dubai. Household, furniture, office and villa clearances handled by a uniformed local crew.",
      },
      { name: "author", content: "Marhaba Clearance" },
      { property: "og:site_name", content: "Marhaba Clearance" },
      { property: "og:title", content: "Marhaba Clearance — Premium Junk Removal in Dubai" },
      {
        property: "og:description",
        content:
          "Discreet, dependable junk removal across Dubai. Household, furniture, office and villa clearances handled by a uniformed local crew.",
      },
      { property: "og:type", content: "website" },
      { property: "og:image", content: absoluteUrl(ogImage) },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Marhaba Clearance — Premium Junk Removal in Dubai" },
      {
        name: "twitter:description",
        content:
          "Discreet, dependable junk removal across Dubai. Household, furniture, office and villa clearances handled by a uniformed local crew.",
      },
      { name: "twitter:image", content: absoluteUrl(ogImage) },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "icon", href: "/favicon.ico", type: "image/x-icon" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Aleo:wght@400;500;600;700&family=Montserrat:wght@300;400;500;600;700&display=swap",
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
      <Outlet />
    </QueryClientProvider>
  );
}
