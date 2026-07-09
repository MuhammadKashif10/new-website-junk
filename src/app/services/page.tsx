import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { PageHero } from "@/components/site/PageHero";
import { CTASection } from "@/components/site/CTASection";
import { services } from "@/config/services";

export const metadata: Metadata = {
  title: "Services — Dubai Junk Collection Dubai",
  description:
    "Explore our full range of Dubai clearance services: household, furniture, office, garden, appliance, villa, warehouse and mattress removal.",
  alternates: { canonical: "/services" },
  openGraph: {
    title: "Services — Dubai Junk Collection Dubai",
    description: "The full range of clearance services we offer across Dubai.",
    url: "/services",
    images: [services[0].image.src],
  },
  twitter: { card: "summary_large_image", images: [services[0].image.src] },
};

export default function ServicesPage() {
  return (
    <>
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
              href={`/services/${s.slug}`}
              className="group relative flex flex-col overflow-hidden rounded-3xl border border-border bg-background transition-all hover:-translate-y-1 hover:shadow-[var(--shadow-elegant)]"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image
                  src={s.image}
                  alt={s.title}
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
