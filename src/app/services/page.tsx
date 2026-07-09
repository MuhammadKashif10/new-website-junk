import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { PageHero } from "@/components/site/PageHero";
import { CTASection } from "@/components/site/CTASection";
import { services } from "@/config/services";
import { absoluteUrl } from "@/config/site";

export const metadata: Metadata = {
  title: "Junk Removal Services in Dubai — Dubai Junk Collection",
  description:
    "Explore our full range of junk removal services in Dubai: household, furniture, office, garden waste, appliance, villa, warehouse and mattress removal.",
  alternates: { canonical: "/services" },
  openGraph: {
    title: "Junk Removal Services in Dubai — Dubai Junk Collection",
    description: "The full range of junk removal and clearance services we offer across Dubai.",
    url: "/services",
    images: [services[0].image.src],
  },
  twitter: { card: "summary_large_image", images: [services[0].image.src] },
};

const breadcrumbLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: absoluteUrl("/") },
    { "@type": "ListItem", position: 2, name: "Services", item: absoluteUrl("/services") },
  ],
};

// Machine-readable index of every service, mirroring the visual grid below so
// agents can enumerate the full catalogue and its URLs from one node.
const serviceListLd = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  itemListElement: services.map((s, i) => ({
    "@type": "ListItem",
    position: i + 1,
    name: s.title,
    url: absoluteUrl(`/services/${s.slug}`),
  })),
};

export default function ServicesPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceListLd) }} />
      <PageHero
        eyebrow="Services"
        title="Every junk removal service, in one place."
        subtitle="From single-item pickups to full property handovers, choose the junk removal service that fits — or message us and we'll suggest the right one."
      />

      <section className="container-x py-20">
        <div className="grid gap-6 md:grid-cols-2">
          {services.map((s, idx) => (
            <Link
              key={s.slug}
              href={`/services/${s.slug}`}
              className="group relative flex flex-col overflow-hidden rounded-3xl border border-border bg-background transition-all hover:-translate-y-1 hover:shadow-[var(--shadow-elegant)]"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image
                  src={s.image}
                  alt={`${s.title} service in Dubai`}
                  title={`${s.title} — Dubai Junk Collection`}
                  fill
                  sizes="(min-width: 768px) 50vw, 100vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
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
    </>
  );
}
