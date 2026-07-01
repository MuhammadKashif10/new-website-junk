import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { PageHero } from "@/components/site/PageHero";
import { CTASection } from "@/components/site/CTASection";
import { services } from "@/config/services";
import { absoluteUrl } from "@/config/site";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Marhaba Clearance Dubai" },
      { name: "description", content: "Explore our full range of Dubai clearance services: household, furniture, office, garden, appliance, villa, warehouse and mattress removal." },
      { property: "og:title", content: "Services — Marhaba Clearance Dubai" },
      { property: "og:description", content: "The full range of clearance services we offer across Dubai." },
      { property: "og:url", content: absoluteUrl("/services") },
      { property: "og:image", content: absoluteUrl(services[0].image) },
    ],
    links: [{ rel: "canonical", href: absoluteUrl("/services") }],
  }),
  component: ServicesPage,
});

function ServicesPage() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Services"
        title="Everything we clear, in one place."
        subtitle="From single-item pickups to full property handovers, choose the service that fits — or message us and we'll suggest the right one."
      />

      <section className="container-x py-20">
        <div className="grid gap-6 md:grid-cols-2">
          {services.map((s, idx) => (
            <Link
              key={s.slug}
              to="/services/$slug"
              params={{ slug: s.slug }}
              className="group relative flex flex-col overflow-hidden rounded-3xl border border-border bg-background transition-all hover:-translate-y-1 hover:shadow-[var(--shadow-elegant)]"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <img
                  src={s.image}
                  alt={s.title}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div
                  className="absolute left-5 top-5 rounded-full bg-background/85 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.18em] text-foreground backdrop-blur"
                >
                  {String(idx + 1).padStart(2, "0")} / {services.length}
                </div>
              </div>
              <div className="flex flex-1 flex-col p-8">
                <h2 className="text-2xl leading-tight" style={{ fontFamily: "var(--font-display)" }}>
                  {s.title}
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.short}</p>
                <div className="mt-6 flex items-center justify-between border-t border-border pt-5">
                  <span className="text-sm font-medium">Learn more</span>
                  <ArrowUpRight className="h-5 w-5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <CTASection />
    </SiteLayout>
  );
}
