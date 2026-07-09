import type { Metadata } from "next";
import Link from "next/link";
import type { LucideIcon } from "lucide-react";
import { Phone, MessageCircle, Mail, MapPin, Clock, ArrowUpRight } from "lucide-react";
import { PageHero } from "@/components/site/PageHero";
import { site } from "@/config/site";
import skylineImg from "@/assets/dubai-skyline.jpg";

export const metadata: Metadata = {
  title: "Contact Dubai Junk Collection — Book a Dubai Pickup",
  description:
    "Call or WhatsApp us to book a Dubai junk removal service. Same-day pickups available across the city — a fixed price back within minutes.",
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "Contact Dubai Junk Collection",
    description: "Get in touch to book your Dubai clearance — call or message us on WhatsApp for a fast, fixed quote.",
    url: "/contact",
    images: [skylineImg.src],
  },
  twitter: { card: "summary_large_image", images: [skylineImg.src] },
};

type ContactDetail = {
  icon: LucideIcon;
  label: string;
  value: string;
  href?: string;
  accent?: boolean;
};

const details: ContactDetail[] = [
  { icon: Phone, label: "Phone", value: site.phone, href: site.phoneHref },
  { icon: MessageCircle, label: "WhatsApp", value: site.whatsapp, href: site.whatsappHref, accent: true },
  { icon: Mail, label: "Email", value: site.email, href: `mailto:${site.email}` },
  { icon: MapPin, label: "Base", value: site.address },
  { icon: Clock, label: "Hours", value: site.hours },
];

export default function Contact() {
  return (
    <>
      <PageHero
        eyebrow="Get in touch"
        title="Tell us what needs to go."
        subtitle="The fastest way to book is a message on WhatsApp — we usually reply within minutes with a fixed price. Prefer to talk? Call us any day between 7am and 10pm."
      />

      <section className="container-x pb-24">
        <div className="grid gap-10 md:grid-cols-12">
          {/* PRIMARY CTA PANEL */}
          <div className="md:col-span-6">
            <div className="relative overflow-hidden rounded-3xl bg-[color:var(--color-ink)] px-6 py-12 text-[color:var(--color-cream)] sm:px-10">
              <div
                aria-hidden
                className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full"
                style={{ background: "radial-gradient(closest-side, rgba(200,150,90,0.35), transparent 70%)" }}
              />
              <div className="relative">
                <span className="eyebrow" style={{ color: "var(--color-bronze-soft)" }}>
                  Fast, friendly, no obligation
                </span>
                <h2
                  className="mt-4 text-3xl leading-tight sm:text-4xl"
                  style={{ fontFamily: "var(--font-display)", color: "var(--color-cream)" }}
                >
                  Two ways to reach us.
                </h2>
                <p className="mt-4 max-w-md text-base leading-relaxed text-white/85">
                  Send a photo of what needs clearing and we&apos;ll reply with a fixed price — no site visit needed for most jobs. However you get in touch, you&apos;ll speak to the same local team that does the work.
                </p>

                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <a
                    href={site.phoneHref}
                    aria-label={`Call ${site.phone} now`}
                    className="inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-[color:var(--color-cream)] px-6 py-4 text-base font-medium text-[color:var(--color-ink)] transition-transform hover:-translate-y-0.5"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    <Phone aria-hidden className="h-5 w-5" /> Call Now
                  </a>
                  <a
                    href={site.whatsappHref}
                    aria-label="Message us on WhatsApp now"
                    className="inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-[#25D366] px-6 py-4 text-base font-medium text-white transition-transform hover:-translate-y-0.5"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    <MessageCircle aria-hidden className="h-5 w-5" /> WhatsApp Now
                  </a>
                </div>
              </div>
            </div>

            {/* QUICK LINKS */}
            <div className="mt-6 rounded-3xl border border-border bg-background p-8">
              <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-foreground/80">
                Before you get in touch
              </h3>
              <ul className="mt-5 space-y-3 text-sm">
                <li>
                  <Link href="/services" className="link-underline inline-flex items-center gap-1 font-medium">
                    Browse everything we clear <ArrowUpRight aria-hidden className="h-4 w-4" />
                  </Link>
                </li>
                <li>
                  <Link href="/service-areas" className="link-underline inline-flex items-center gap-1 font-medium">
                    Check we cover your community <ArrowUpRight aria-hidden className="h-4 w-4" />
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="link-underline inline-flex items-center gap-1 font-medium">
                    Read about our team & values <ArrowUpRight aria-hidden className="h-4 w-4" />
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* CONTACT DETAILS + MAP */}
          <div className="md:col-span-6">
            <div className="rounded-3xl border border-border bg-[color:var(--color-cream)] p-8">
              <h2 className="text-2xl" style={{ fontFamily: "var(--font-display)" }}>Reach us directly</h2>
              <ul className="mt-8 space-y-6">
                {details.map((d) => {
                  const Icon = d.icon;
                  return (
                    <li key={d.label} className="flex items-start gap-4">
                      <span
                        className={`grid h-11 w-11 shrink-0 place-items-center rounded-full ${
                          d.accent
                            ? "bg-[#25D366] text-white"
                            : "bg-[color:var(--color-ink)] text-[color:var(--color-cream)]"
                        }`}
                      >
                        <Icon aria-hidden className="h-4 w-4" />
                      </span>
                      <div className="min-w-0">
                        <div className="text-xs uppercase tracking-[0.18em] text-muted-foreground">{d.label}</div>
                        {d.href ? (
                          <a href={d.href} className="link-underline text-base font-medium break-words">
                            {d.value}
                          </a>
                        ) : (
                          <div className="text-base">{d.value}</div>
                        )}
                      </div>
                    </li>
                  );
                })}
              </ul>
            </div>

            {/* Map embed */}
            <div className="mt-6 aspect-[4/3] overflow-hidden rounded-3xl border border-border">
              <iframe
                title={`${site.name} base location in Dubai`}
                src={`https://www.google.com/maps?q=${encodeURIComponent(site.address)}&output=embed`}
                className="h-full w-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
