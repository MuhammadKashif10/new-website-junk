import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, Check, ShieldCheck, Clock, Truck, HeartHandshake, Sparkles } from "lucide-react";
import heroImg from "@/assets/hero-main.jpg";
import skylineImg from "@/assets/dubai-skyline.jpg";
import { services } from "@/config/services";
import { areaGroups, areas } from "@/config/areas";
import { site, absoluteUrl } from "@/config/site";
import { SectionHeader } from "@/components/site/SectionHeader";
import { CTASection } from "@/components/site/CTASection";
import { Reviews } from "@/components/site/Reviews";

export const metadata: Metadata = {
  title: "Dubai Junk Collection — Premium Junk Removal in Dubai",
  description:
    "Book a discreet, professional junk removal crew across Dubai. Same-day pickups for furniture, appliances, office and villa clearances.",
  alternates: { canonical: "/" },
  openGraph: { url: "/", images: [heroImg.src] },
};

const stats = [
  { k: `${areas.length}`, v: "Dubai communities" },
  { k: "7 days", v: "Open every week" },
  { k: "Same-day", v: "Pickups available" },
  { k: "Fixed", v: "Upfront pricing" },
];

const whyChoose = [
  { icon: ShieldCheck, title: "Insured, uniformed crew", body: "Every job is handled by a vetted local team in clean uniforms — never day-hires." },
  { icon: Clock, title: "Same-day availability", body: "Book before noon and we'll usually be with you the same afternoon." },
  { icon: Truck, title: "Right-sized fleet", body: "From single-item pickups to full villa cleanouts, we send the correct truck the first time." },
  { icon: HeartHandshake, title: "Handled with care", body: "Reusable items are routed to local charities. Your walls, lifts and floors stay protected." },
];

const benefits = [
  "No hidden fees — a fixed price is agreed before we start",
  "Evenings and weekends included at no premium",
  "Full disassembly of beds, wardrobes and modular pieces",
  "English & Arabic-speaking crew",
  "Building-management paperwork handled for you",
  "Responsible disposal & donation partners",
];

const faqs = [
  { q: "How does pricing work?", a: "We price by volume, not by weight. Share a couple of photos on WhatsApp and we'll send a fixed price back within minutes — no site visit needed for most jobs." },
  { q: "Do you cover all of Dubai?", a: "Yes. From Palm Jumeirah and Downtown to Arabian Ranches, Dubai Hills and beyond — we cover every major residential community." },
  { q: "Can you come today?", a: "Very often, yes. Same-day pickups are our specialty for single items and small clear-outs. Larger villa jobs typically book 24–48 hours ahead." },
  { q: "What happens to the items?", a: "Anything reusable is donated to our partner charities. Everything else is separated for recycling or taken to licensed disposal sites." },
  { q: "Is my building's permission needed?", a: "For some towers, yes — we handle the paperwork with the management office on your behalf." },
];

const localBusinessLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": absoluteUrl("/#business"),
  name: "Dubai Junk Collection",
  description: "Discreet, premium junk removal service across Dubai communities.",
  url: absoluteUrl("/"),
  logo: absoluteUrl("/icon-512.png"),
  image: absoluteUrl(heroImg.src),
  telephone: site.phoneHref.replace(/^tel:/, ""),
  email: site.email,
  priceRange: "$$",
  parentOrganization: { "@id": absoluteUrl("/#organization") },
  address: {
    "@type": "PostalAddress",
    streetAddress: site.address,
    addressLocality: "Dubai",
    addressCountry: "AE",
  },
  areaServed: { "@type": "City", name: "Dubai" },
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
    opens: "07:00",
    closes: "22:00",
  },
};

const faqLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

export default function Home() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />

      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="container-x grid gap-12 pb-16 pt-10 md:grid-cols-12 md:gap-8 md:pb-24 md:pt-16">
          <div className="animate-rise md:col-span-6 md:pt-8">
            <span className="eyebrow">
              <Sparkles aria-hidden className="h-3.5 w-3.5" /> Dubai · Trusted since 2016
            </span>
            <h1
              className="mt-5 text-[2.75rem] leading-[1.02] tracking-tight sm:text-6xl md:text-[4.5rem]"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Junk removal,
              <br />
              <span className="italic text-[color:var(--color-accent)]">handled quietly.</span>
            </h1>
            <p className="mt-6 max-w-lg text-base leading-relaxed text-muted-foreground md:text-lg">
              A calm, uniformed crew who clear your home, office or villa without fuss. Fixed prices, protected floors, and often at your door the same day.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href={site.whatsappHref}
                className="inline-flex items-center gap-2 rounded-full bg-[color:var(--color-ink)] px-6 py-3.5 text-sm font-medium text-[color:var(--color-cream)] transition-transform hover:-translate-y-0.5"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Book on WhatsApp <ArrowUpRight className="h-4 w-4" />
              </a>
              <Link
                href="/services"
                className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3.5 text-sm font-medium transition-colors hover:border-foreground"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Explore services
              </Link>
            </div>

            <ul className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-muted-foreground">
              <li className="flex items-center gap-2">
                <Check aria-hidden className="h-4 w-4 text-[color:var(--color-accent)]" /> Fixed prices, agreed upfront
              </li>
              <li className="flex items-center gap-2">
                <Check aria-hidden className="h-4 w-4 text-[color:var(--color-accent)]" /> Uniformed local crew
              </li>
              <li className="flex items-center gap-2">
                <Check aria-hidden className="h-4 w-4 text-[color:var(--color-accent)]" /> Same-day slots available
              </li>
            </ul>
          </div>

          <div className="animate-fade md:col-span-6">
            <div className="relative">
              <div className="relative aspect-[4/5] w-full overflow-hidden rounded-3xl md:aspect-[5/6]">
                <Image
                  src={heroImg}
                  alt="Dubai Junk Collection crew loading furniture outside a Dubai villa at golden hour"
                  fill
                  priority
                  sizes="(min-width: 768px) 50vw, 100vw"
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-4 hidden max-w-xs rounded-2xl border border-border bg-background/95 p-5 shadow-[var(--shadow-elegant)] backdrop-blur sm:block md:-left-8">
                <div className="flex items-start gap-3">
                  <div className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-[color:var(--color-ink)] text-[color:var(--color-cream)]">
                    <Clock className="h-4 w-4" />
                  </div>
                  <div className="min-w-0">
                    <div className="text-sm font-medium">Booked before noon?</div>
                    <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
                      Same-day pickup available in most Dubai communities.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats bar */}
        <div className="border-y border-border bg-[color:var(--color-cream)]">
          <div className="container-x grid grid-cols-2 divide-x divide-border md:grid-cols-4">
            {stats.map((s) => (
              <div key={s.v} className="px-4 py-8 text-center">
                <div className="text-3xl md:text-4xl" style={{ fontFamily: "var(--font-display)" }}>{s.k}</div>
                <div className="mt-1 text-[11px] uppercase tracking-[0.18em] text-muted-foreground">{s.v}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* INTRODUCTION */}
      <section className="container-x py-24">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <SectionHeader
              eyebrow="Who we are"
              title="A small Dubai team that treats every home like their own."
            />
          </div>
          <div className="md:col-span-6 md:col-start-7">
            <p className="text-lg leading-relaxed text-foreground/85">
              We started Dubai Junk Collection because clearing out a home in Dubai should feel effortless — not stressful. Today we are the quiet team behind hundreds of villa handovers, apartment refreshes and office refits across the city.
            </p>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              We show up when we say we will. We protect your space. And we finish the job so completely that the only thing you notice is the room feeling lighter.
            </p>
            <Link
              href="/about"
              className="link-underline mt-6 inline-flex items-center gap-1 text-sm font-medium"
            >
              More about our story <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="bg-[color:var(--color-cream)] py-24">
        <div className="container-x">
          <SectionHeader
            eyebrow="Why Dubai Junk Collection"
            title="Four reasons Dubai homes trust us."
            align="center"
          />
          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {whyChoose.map((w) => (
              <div
                key={w.title}
                className="group rounded-2xl border border-border bg-background p-7 transition-all hover:-translate-y-1 hover:shadow-[var(--shadow-elegant)]"
              >
                <div className="grid h-11 w-11 place-items-center rounded-full bg-[color:var(--color-ink)] text-[color:var(--color-cream)]">
                  <w.icon aria-hidden className="h-5 w-5" />
                </div>
                <h3 className="mt-5 text-lg font-semibold">{w.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{w.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="container-x py-24">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <SectionHeader
            eyebrow="What we clear"
            title="Featured services"
            body="From a single mattress to a full villa handover, every job is handled with the same care."
          />
          <Link
            href="/services"
            className="link-underline inline-flex shrink-0 items-center gap-1 text-sm font-medium"
          >
            All services <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.slice(0, 6).map((s) => (
            <Link
              key={s.slug}
              href={`/services/${s.slug}`}
              className="group relative overflow-hidden rounded-2xl border border-border bg-background"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={s.image}
                  alt={s.title}
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <div className="flex items-start justify-between gap-3">
                  <h3 className="text-lg font-semibold leading-tight">{s.title}</h3>
                  <ArrowUpRight className="h-4 w-4 shrink-0 text-muted-foreground transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-foreground" />
                </div>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.short}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* PROCESS */}
      <section className="bg-[color:var(--color-cream)] py-24">
        <div className="container-x">
          <SectionHeader
            eyebrow="How it works"
            title="Three simple steps — no calls you don't want."
          />
          <div className="mt-14 grid gap-8 md:grid-cols-3">
            {[
              { n: "01", t: "Share a photo", d: "Send us a picture of what you need cleared on WhatsApp, or tell us the room. We reply with a fixed price." },
              { n: "02", t: "Choose a slot", d: "Pick a two-hour window that works for you. We text ahead when the crew is on the way." },
              { n: "03", t: "We take it away", d: "Uniformed team, careful with your space, finished on time. That's the whole thing." },
            ].map((step) => (
              <div key={step.n} className="relative">
                <div
                  className="text-6xl leading-none text-[color:var(--color-bronze-soft)]"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {step.n}
                </div>
                <h3 className="mt-4 text-xl font-semibold">{step.t}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{step.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AREAS */}
      <section className="container-x py-24">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <SectionHeader
              eyebrow="Where we work"
              title="Across every corner of Dubai."
              body="From waterfront apartments to family villa communities, our crews know the buildings, the security desks and the shortcuts."
            />
            <div className="relative mt-8 aspect-[4/3] w-full overflow-hidden rounded-2xl">
              <Image
                src={skylineImg}
                alt="Dubai skyline at golden hour"
                fill
                sizes="(min-width: 768px) 42vw, 100vw"
                className="object-cover"
              />
            </div>
            <Link
              href="/service-areas"
              className="link-underline mt-6 inline-flex items-center gap-1 text-sm font-medium"
            >
              See all 39 communities <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="md:col-span-6 md:col-start-7">
            <div className="grid gap-6 sm:grid-cols-2">
              {areaGroups.slice(0, 4).map((g) => (
                <div key={g.title} className="rounded-2xl border border-border p-6">
                  <div className="text-[11px] font-medium uppercase tracking-[0.18em] text-[color:var(--color-accent)]">
                    {g.title}
                  </div>
                  <ul className="mt-4 space-y-1.5 text-sm text-foreground/80">
                    {g.items.slice(0, 5).map((a) => <li key={a}>{a}</li>)}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* BENEFITS */}
      <section className="bg-[color:var(--color-cream)] py-24">
        <div className="container-x grid gap-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <SectionHeader eyebrow="What's included" title="Everything you'd want. Nothing you wouldn't." />
          </div>
          <div className="md:col-span-6 md:col-start-7">
            <ul className="grid gap-4 sm:grid-cols-2">
              {benefits.map((b) => (
                <li key={b} className="flex items-start gap-3 text-sm leading-relaxed">
                  <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-[color:var(--color-ink)] text-[color:var(--color-cream)]">
                    <Check aria-hidden className="h-3 w-3" />
                  </span>
                  {b}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="container-x py-24">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-4">
            <SectionHeader eyebrow="FAQ" title="Answers, before you ask." />
          </div>
          <div className="md:col-span-7 md:col-start-6">
            <div className="divide-y divide-border rounded-2xl border border-border bg-background">
              {faqs.map((f) => (
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

      {/* REVIEWS */}
      <Reviews />

      <CTASection />
    </>
  );
}
