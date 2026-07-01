import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { PageHero } from "@/components/site/PageHero";
import { CTASection } from "@/components/site/CTASection";
import { areaGroups, areas } from "@/config/areas";
import { absoluteUrl } from "@/config/site";
import skylineImg from "@/assets/dubai-skyline.jpg";
import { MapPin } from "lucide-react";

export const Route = createFileRoute("/service-areas")({
  head: () => ({
    meta: [
      { title: "Service Areas — Marhaba Clearance Dubai" },
      { name: "description", content: `We serve ${areas.length}+ communities across Dubai — from Palm Jumeirah and Downtown to Arabian Ranches, Dubai Hills and beyond.` },
      { property: "og:title", content: "Service Areas — Dubai" },
      { property: "og:description", content: "Every Dubai community we cover, in one place." },
      { property: "og:url", content: absoluteUrl("/service-areas") },
      { property: "og:image", content: absoluteUrl(skylineImg) },
    ],
    links: [{ rel: "canonical", href: absoluteUrl("/service-areas") }],
  }),
  component: ServiceAreas,
});

function ServiceAreas() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Where we work"
        title="Trusted in every corner of Dubai."
        subtitle={`Our crews know the buildings, the security desks and the shortcuts across ${areas.length}+ communities.`}
      />

      <section className="container-x py-20">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {areaGroups.map((g) => (
            <div key={g.title} className="rounded-3xl border border-border bg-background p-8">
              <div className="flex items-center gap-2 text-[11px] font-medium uppercase tracking-[0.2em] text-[color:var(--color-accent)]">
                <MapPin aria-hidden className="h-3.5 w-3.5" /> {g.title}
              </div>
              <ul className="mt-6 space-y-2.5 text-sm text-foreground/85">
                {g.items.map((a) => (
                  <li key={a} className="flex items-center gap-2">
                    <span className="h-1 w-1 rounded-full bg-[color:var(--color-bronze)]" />
                    {a}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 rounded-3xl border border-border bg-[color:var(--color-cream)] p-8 sm:p-12">
          <div className="flex flex-wrap items-baseline justify-between gap-4">
            <h2 className="text-2xl sm:text-3xl" style={{ fontFamily: "var(--font-display)" }}>
              Every community we cover
            </h2>
            <span className="text-xs uppercase tracking-[0.18em] text-muted-foreground">{areas.length} locations</span>
          </div>
          <div className="mt-8 flex flex-wrap gap-2">
            {areas.map((a) => (
              <span
                key={a}
                className="rounded-full border border-border bg-background px-4 py-1.5 text-xs text-foreground/80"
              >
                {a}
              </span>
            ))}
          </div>
          <p className="mt-8 text-sm text-muted-foreground">
            Live somewhere not listed? We probably still cover it — just ask.
          </p>
          <div className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-sm">
            <Link to="/services" className="link-underline font-medium">Browse our services →</Link>
            <Link to="/contact" className="link-underline font-medium">Book a pickup →</Link>
          </div>
        </div>
      </section>

      <CTASection
        title="A crew that knows your neighbourhood."
        body="Local knowledge, right-sized trucks and the paperwork sorted with your building — wherever you are in Dubai."
      />
    </SiteLayout>
  );
}
