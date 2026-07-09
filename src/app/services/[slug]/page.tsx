import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { ArrowUpRight, Check, Phone } from "lucide-react";
import { WhatsAppIcon } from "@/components/site/WhatsAppIcon";
import { CTASection } from "@/components/site/CTASection";
import { getService, services } from "@/config/services";
import { site, absoluteUrl } from "@/config/site";

type Params = { slug: string };

export function generateStaticParams(): Params[] {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { slug } = await params;
  const svc = getService(slug);
  if (!svc) return { title: "Service — Dubai Junk Collection" };
  return {
    title: `${svc.title} in Dubai — Dubai Junk Collection`,
    description: svc.seoDescription,
    alternates: { canonical: `/services/${svc.slug}` },
    openGraph: {
      title: `${svc.title} in Dubai`,
      description: svc.seoDescription,
      type: "article",
      url: `/services/${svc.slug}`,
      images: [svc.image.src],
    },
    twitter: { card: "summary_large_image", images: [svc.image.src] },
  };
}

export default async function ServicePage({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const svc = getService(slug);
  if (!svc) notFound();

  const others = services.filter((s) => s.slug !== svc.slug).slice(0, 4);

  const serviceLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: svc.title,
    description: svc.seoDescription,
    serviceType: svc.title,
    areaServed: { "@type": "City", name: "Dubai" },
    provider: {
      "@type": "LocalBusiness",
      "@id": absoluteUrl("/#business"),
      name: "Dubai Junk Collection",
      telephone: site.phoneHref.replace(/^tel:/, ""),
      email: site.email,
      url: absoluteUrl("/"),
    },
  };

  // Home › Services › <service>. Gives agents an explicit position for this
  // page within the site hierarchy.
  const breadcrumbLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: absoluteUrl("/") },
      { "@type": "ListItem", position: 2, name: "Services", item: absoluteUrl("/services") },
      { "@type": "ListItem", position: 3, name: svc.title, item: absoluteUrl(`/services/${svc.slug}`) },
    ],
  };

  const faqLd = svc.faqs.length
    ? {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: svc.faqs.map((f) => ({
          "@type": "Question",
          name: f.q,
          acceptedAnswer: { "@type": "Answer", text: f.a },
        })),
      }
    : null;

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />
      {faqLd && (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
      )}

      {/* HERO */}
      <section className="border-b border-border bg-[color:var(--color-cream)]">
        <div className="container-x grid gap-12 py-20 md:grid-cols-12 md:items-end md:py-28">
          <div className="animate-rise md:col-span-6">
            <Link href="/services" className="text-xs uppercase tracking-[0.2em] text-muted-foreground hover:text-foreground">
              ← All services
            </Link>
            <h1
              className="mt-6 text-4xl leading-[1.05] sm:text-5xl md:text-6xl"
              style={{ fontFamily: "var(--font-display)" }}
            >
              {svc.title}
            </h1>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">{svc.intro}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={site.whatsappHref}
                aria-label="Message us on WhatsApp"
                className="inline-flex items-center gap-2 rounded-full bg-[color:var(--color-ink)] px-6 py-3 text-sm font-medium text-[color:var(--color-cream)]"
                style={{ fontFamily: "var(--font-display)" }}
              >
                <WhatsAppIcon aria-hidden className="h-4 w-4" /> WhatsApp us
              </a>
              <a
                href={site.phoneHref}
                aria-label={`Call ${site.phone}`}
                className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-medium"
                style={{ fontFamily: "var(--font-display)" }}
              >
                <Phone aria-hidden className="h-4 w-4" /> {site.phone}
              </a>
            </div>
          </div>
          <div className="md:col-span-6">
            <div className="relative aspect-[4/3] overflow-hidden rounded-3xl">
              <Image
                src={svc.image}
                alt={`${svc.title} service in Dubai by Dubai Junk Collection`}
                fill
                priority
                sizes="(min-width: 768px) 50vw, 100vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* BENEFITS */}
      <section className="container-x py-24">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <span className="eyebrow">Why choose us</span>
            <h2 className="mt-4 text-3xl sm:text-4xl" style={{ fontFamily: "var(--font-display)" }}>
              What you can expect.
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              A team that treats {svc.title.toLowerCase()} the way you would if you had the time, the truck and the crew. Ready when you are —{" "}
              <Link href="/contact" className="link-underline font-medium">get in touch</Link> for a fixed price.
            </p>
          </div>
          <div className="md:col-span-6 md:col-start-7">
            <ul className="grid gap-4">
              {svc.benefits.map((b) => (
                <li key={b} className="flex items-start gap-3 rounded-2xl border border-border bg-background p-5">
                  <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-[color:var(--color-ink)] text-[color:var(--color-cream)]">
                    <Check className="h-3.5 w-3.5" />
                  </span>
                  <span className="text-sm leading-relaxed">{b}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="bg-[color:var(--color-cream)] py-24">
        <div className="container-x">
          <div className="max-w-2xl">
            <span className="eyebrow">How it works</span>
            <h2 className="mt-4 text-3xl sm:text-4xl" style={{ fontFamily: "var(--font-display)" }}>
              Three steps, no surprises.
            </h2>
          </div>
          <div className="mt-14 grid gap-8 md:grid-cols-3">
            {svc.process.map((p, i) => (
              <div key={p.title}>
                <div className="text-5xl leading-none text-[color:var(--color-bronze-soft)]" style={{ fontFamily: "var(--font-display)" }}>
                  {String(i + 1).padStart(2, "0")}
                </div>
                <h3 className="mt-4 text-xl font-semibold">{p.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="container-x py-24">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-4">
            <span className="eyebrow">FAQ</span>
            <h2 className="mt-4 text-3xl sm:text-4xl" style={{ fontFamily: "var(--font-display)" }}>
              Common questions.
            </h2>
          </div>
          <div className="md:col-span-7 md:col-start-6">
            <div className="divide-y divide-border rounded-2xl border border-border bg-background">
              {svc.faqs.map((f) => (
                <details key={f.q} className="group px-6 py-5">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-base font-medium">
                    {f.q}
                    <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full border border-border transition-transform group-open:rotate-45">
                      +
                    </span>
                  </summary>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{f.a}</p>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* OTHER SERVICES */}
      <section className="bg-[color:var(--color-cream)] py-24">
        <div className="container-x">
          <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <div>
              <span className="eyebrow">Also from us</span>
              <h2 className="mt-4 text-3xl sm:text-4xl" style={{ fontFamily: "var(--font-display)" }}>
                Explore related services.
              </h2>
            </div>
            <Link href="/services" className="link-underline text-sm font-medium">View all →</Link>
          </div>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {others.map((o) => (
              <Link
                key={o.slug}
                href={`/services/${o.slug}`}
                className="group overflow-hidden rounded-2xl border border-border bg-background"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={o.image}
                    alt={`${o.title} in Dubai`}
                    fill
                    sizes="(min-width: 1024px) 25vw, (min-width: 768px) 50vw, 100vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="p-5">
                  <div className="flex items-start justify-between gap-2">
                    <h3 className="text-base font-semibold leading-tight">{o.title}</h3>
                    <ArrowUpRight className="h-4 w-4 shrink-0 text-muted-foreground" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title={`Ready for ${svc.title.toLowerCase()}?`}
        body="Send us a photo on WhatsApp and we'll reply with a fixed price within minutes."
      />
    </>
  );
}
