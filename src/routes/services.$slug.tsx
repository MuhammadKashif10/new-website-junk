import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowUpRight, Check, Phone, MessageCircle } from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { CTASection } from "@/components/site/CTASection";
import { getService, services, type Service } from "@/config/services";
import { site, absoluteUrl } from "@/config/site";

export const Route = createFileRoute("/services/$slug")({
  loader: ({ params }) => {
    const svc = getService(params.slug);
    if (!svc) throw notFound();
    return { svc };
  },
  head: ({ loaderData }) => {
    const svc = loaderData?.svc;
    if (!svc) return { meta: [{ title: "Service — Marhaba Clearance" }] };
    return {
      meta: [
        { title: `${svc.title} in Dubai — Marhaba Clearance` },
        { name: "description", content: svc.seoDescription },
        { property: "og:title", content: `${svc.title} in Dubai` },
        { property: "og:description", content: svc.seoDescription },
        { property: "og:type", content: "article" },
        { property: "og:url", content: absoluteUrl(`/services/${svc.slug}`) },
        { property: "og:image", content: absoluteUrl(svc.image) },
      ],
      links: [{ rel: "canonical", href: absoluteUrl(`/services/${svc.slug}`) }],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: svc.title,
            description: svc.seoDescription,
            areaServed: { "@type": "City", name: "Dubai" },
            provider: {
              "@type": "LocalBusiness",
              name: "Marhaba Clearance",
              telephone: site.phone,
              email: site.email,
              url: absoluteUrl("/"),
            },
          }),
        },
        ...(svc.faqs.length
          ? [
              {
                type: "application/ld+json",
                children: JSON.stringify({
                  "@context": "https://schema.org",
                  "@type": "FAQPage",
                  mainEntity: svc.faqs.map((f) => ({
                    "@type": "Question",
                    name: f.q,
                    acceptedAnswer: { "@type": "Answer", text: f.a },
                  })),
                }),
              },
            ]
          : []),
      ],
    };
  },
  notFoundComponent: () => (
    <SiteLayout>
      <div className="container-x py-24 text-center">
        <h1 className="text-4xl" style={{ fontFamily: "var(--font-display)" }}>Service not found</h1>
        <Link to="/services" className="link-underline mt-6 inline-block text-sm">Back to all services</Link>
      </div>
    </SiteLayout>
  ),
  component: ServicePage,
});

function ServicePage() {
  const { svc } = Route.useLoaderData() as { svc: Service };
  const others = services.filter((s) => s.slug !== svc.slug).slice(0, 4);

  return (
    <SiteLayout>
      {/* HERO */}
      <section className="border-b border-border bg-[color:var(--color-cream)]">
        <div className="container-x grid gap-12 py-20 md:grid-cols-12 md:items-end md:py-28">
          <div className="animate-rise md:col-span-6">
            <Link to="/services" className="text-xs uppercase tracking-[0.2em] text-muted-foreground hover:text-foreground">
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
                <MessageCircle aria-hidden className="h-4 w-4" /> WhatsApp us
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
            <div className="aspect-[4/3] overflow-hidden rounded-3xl">
              <img
                src={svc.image}
                alt={`${svc.title} service in Dubai by Marhaba Clearance`}
                loading="eager"
                fetchPriority="high"
                decoding="async"
                className="h-full w-full object-cover"
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
              A team that treats {svc.title.toLowerCase()} the way you would if you had the time, the truck and the crew.
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
            <Link to="/services" className="link-underline text-sm font-medium">View all →</Link>
          </div>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {others.map((o) => (
              <Link
                key={o.slug}
                to="/services/$slug"
                params={{ slug: o.slug }}
                className="group overflow-hidden rounded-2xl border border-border bg-background"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img src={o.image} alt={o.title} loading="lazy" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
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
    </SiteLayout>
  );
}
