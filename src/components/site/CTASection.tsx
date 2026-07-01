import { site } from "@/config/site";
import { Phone, MessageCircle } from "lucide-react";

export function CTASection({
  title = "Ready to reclaim your space?",
  body = "Tell us what needs to go. We'll be there — often the same day — with the crew, the truck and the care your home deserves.",
}: {
  title?: string;
  body?: string;
}) {
  return (
    <section className="container-x py-24">
      <div className="relative overflow-hidden rounded-3xl bg-[color:var(--color-ink)] px-6 py-16 text-[color:var(--color-cream)] sm:px-12 md:py-20">
        <div
          aria-hidden
          className="pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full"
          style={{ background: "radial-gradient(closest-side, rgba(200,150,90,0.35), transparent 70%)" }}
        />
        <div className="relative mx-auto max-w-2xl text-center">
          <span className="eyebrow" style={{ color: "var(--color-bronze-soft)" }}>Book in minutes</span>
          <h2
            className="mt-4 text-3xl leading-tight sm:text-4xl md:text-5xl"
            style={{ fontFamily: "var(--font-display)", color: "var(--color-cream)" }}
          >
            {title}
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-base text-white/85">{body}</p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href={site.whatsappHref}
              aria-label="Message us on WhatsApp"
              className="inline-flex items-center gap-2 rounded-full bg-[color:var(--color-cream)] px-6 py-3 text-sm font-medium text-[color:var(--color-ink)] transition-transform hover:-translate-y-0.5"
              style={{ fontFamily: "var(--font-display)" }}
            >
              <MessageCircle aria-hidden className="h-4 w-4" /> WhatsApp us
            </a>
            <a
              href={site.phoneHref}
              aria-label={`Call ${site.phone}`}
              className="inline-flex items-center gap-2 rounded-full border border-white/25 px-6 py-3 text-sm font-medium text-[color:var(--color-cream)] transition-colors hover:border-white/60"
              style={{ fontFamily: "var(--font-display)" }}
            >
              <Phone aria-hidden className="h-4 w-4" /> {site.phone}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
