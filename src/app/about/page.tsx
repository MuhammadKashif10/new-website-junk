import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { SectionHeader } from "@/components/site/SectionHeader";
import { PageHero } from "@/components/site/PageHero";
import { CTASection } from "@/components/site/CTASection";
import teamImg from "@/assets/team.jpg";
import skylineImg from "@/assets/dubai-skyline.jpg";
import { Compass, Target, HeartHandshake, Sparkles, Users } from "lucide-react";

export const metadata: Metadata = {
  title: "About Dubai Junk Collection — Dubai's discreet clearance team",
  description:
    "The story, the values and the people behind Dubai Junk Collection. A small, dedicated Dubai team focused on doing one thing well.",
  alternates: { canonical: "/about" },
  openGraph: {
    title: "About Dubai Junk Collection",
    description: "Meet the Dubai team behind Dubai Junk Collection and the values that shape every clear-out.",
    url: "/about",
    images: [teamImg.src],
  },
  twitter: { card: "summary_large_image", images: [teamImg.src] },
};

const values = [
  { icon: Compass, title: "Show up on time", body: "Our slots are two hours long, not four. If we're going to be late, you'll know before we are." },
  { icon: Target, title: "Fixed pricing, always", body: "We agree the price before we start. No new charges appear at the end of the job." },
  { icon: HeartHandshake, title: "Respect the space", body: "Floors protected, walls untouched, lift buttons held. Your home is left the way we found it — minus the clutter." },
  { icon: Sparkles, title: "Finish completely", body: "A job is only done when the space feels lighter. That's the moment we look for." },
];

export default function About() {
  return (
    <>
      <PageHero
        eyebrow="Our story"
        title="A quiet, careful team from the neighbourhoods we serve."
        subtitle="Dubai Junk Collection was founded by a small group of Dubai residents who were tired of clearance work that felt rushed, opaque and impersonal. We built the service we wished existed."
        image={teamImg}
        imageAlt="The Dubai Junk Collection crew in uniform beside their truck in Dubai"
      />

      {/* Mission / Vision */}
      <section className="container-x py-24">
        <div className="grid gap-16 md:grid-cols-2">
          <div>
            <span className="eyebrow">Our mission</span>
            <h2 className="mt-4 text-3xl sm:text-4xl" style={{ fontFamily: "var(--font-display)" }}>
              To make clearing a space in Dubai the calmest part of the week.
            </h2>
            <p className="mt-5 text-base leading-relaxed text-muted-foreground">
              We keep the crew small, the process simple and the pricing honest. Every booking is handled by people who actually work the vans — not a distant call centre.
            </p>
          </div>
          <div>
            <span className="eyebrow">Our vision</span>
            <h2 className="mt-4 text-3xl sm:text-4xl" style={{ fontFamily: "var(--font-display)" }}>
              To be the name Dubai residents pass on to friends without hesitation.
            </h2>
            <p className="mt-5 text-base leading-relaxed text-muted-foreground">
              We measure success one way: the number of clients who send us to their neighbours. That&apos;s it. Everything we do points back to that number.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-[color:var(--color-cream)] py-24">
        <div className="container-x">
          <SectionHeader eyebrow="What we stand for" title="Four values, kept simple." align="center" />
          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {values.map((v) => (
              <div key={v.title} className="rounded-2xl border border-border bg-background p-7">
                <div className="grid h-11 w-11 place-items-center rounded-full bg-[color:var(--color-ink)] text-[color:var(--color-cream)]">
                  <v.icon aria-hidden className="h-5 w-5" />
                </div>
                <h3 className="mt-5 text-lg font-semibold">{v.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{v.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="container-x py-24">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-6">
            <div className="relative aspect-[4/5] overflow-hidden rounded-3xl">
              <Image
                src={skylineImg}
                alt="Dubai skyline"
                fill
                sizes="(min-width: 768px) 50vw, 100vw"
                className="object-cover"
              />
            </div>
          </div>
          <div className="md:col-span-5 md:col-start-8">
            <span className="eyebrow"><Users aria-hidden className="h-3.5 w-3.5" /> The people</span>
            <h2 className="mt-4 text-3xl sm:text-4xl" style={{ fontFamily: "var(--font-display)" }}>
              A tight team, trained in-house.
            </h2>
            <p className="mt-5 text-base leading-relaxed text-muted-foreground">
              Every member of our crew is a full-time employee — never a day-hire. They wear our uniform, drive our trucks, and are trained in the small things that matter: how to protect a lift, how to wrap a headboard, how to leave a room broom-clean.
            </p>
            <div className="mt-8 flex flex-wrap gap-3 border-t border-border pt-8">
              <Link href="/services" className="link-underline inline-flex text-sm font-medium">
                See what we do →
              </Link>
              <Link href="/service-areas" className="link-underline inline-flex text-sm font-medium">
                Where we work →
              </Link>
              <Link href="/contact" className="link-underline inline-flex text-sm font-medium">
                Get in touch →
              </Link>
            </div>
          </div>
        </div>
      </section>

      <CTASection
        title="A crew you can trust with the keys."
        body="Whether it's one mattress or an entire villa, we bring the same crew, the same care and the same fixed pricing."
      />
    </>
  );
}
