import Link from "next/link";
import { Phone, Mail, MapPin } from "lucide-react";
import { site } from "@/config/site";
import { services } from "@/config/services";
import { areas } from "@/config/areas";

export function Footer() {
  return (
    <footer className="mt-24 border-t border-border bg-[color:var(--color-cream)]">
      <div className="container-x grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-4">
        <div className="max-w-sm">
          <div
            className="text-xl font-semibold tracking-tight"
            style={{ fontFamily: "var(--font-display)" }}
          >
            {site.name}
          </div>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
            Discreet, dependable junk removal for Dubai homes, offices and villas. Uniformed crews, transparent pricing, done right the first time.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href={site.whatsappHref}
              className="inline-flex items-center rounded-full bg-[color:var(--color-ink)] px-5 py-2.5 text-sm font-medium text-[color:var(--color-cream)] transition-transform hover:-translate-y-0.5"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Book on WhatsApp
            </a>
            <a
              href={site.phoneHref}
              className="inline-flex items-center rounded-full border border-border px-5 py-2.5 text-sm font-medium transition-colors hover:border-[color:var(--color-accent)] hover:text-[color:var(--color-accent)]"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Call us
            </a>
          </div>
        </div>

        <div>
          <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-foreground/80">Quick Links</h4>
          <ul className="mt-5 space-y-3 text-sm">
            {[
              { to: "/", label: "Home" },
              { to: "/about", label: "About" },
              { to: "/services", label: "Services" },
              { to: "/service-areas", label: "Service Areas" },
              { to: "/contact", label: "Contact" },
            ].map((l) => (
              <li key={l.to}>
                <Link href={l.to} className="text-muted-foreground transition-colors hover:text-foreground">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-foreground/80">Services</h4>
          <ul className="mt-5 space-y-3 text-sm">
            {services.slice(0, 6).map((s) => (
              <li key={s.slug}>
                <Link
                  href={`/services/${s.slug}`}
                  className="text-muted-foreground transition-colors hover:text-foreground"
                >
                  {s.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-foreground/80">Contact</h4>
          <ul className="mt-5 space-y-3 text-sm text-muted-foreground">
            <li className="flex items-start gap-2">
              <Phone aria-hidden className="mt-0.5 h-4 w-4 shrink-0" />
              <a href={site.phoneHref} className="hover:text-foreground">{site.phone}</a>
            </li>
            <li className="flex items-start gap-2">
              <Mail aria-hidden className="mt-0.5 h-4 w-4 shrink-0" />
              <a href={`mailto:${site.email}`} className="hover:text-foreground">{site.email}</a>
            </li>
            <li className="flex items-start gap-2">
              <MapPin aria-hidden className="mt-0.5 h-4 w-4 shrink-0" />
              <span>{site.address}</span>
            </li>
            <li className="pt-2 text-xs uppercase tracking-[0.18em] text-foreground/70">{site.hours}</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-border">
        <div className="container-x flex flex-col gap-3 py-6 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <span>© {new Date().getFullYear()} {site.name}. All rights reserved.</span>
          <span className="truncate">
            Serving {areas.length}+ Dubai communities · Trade License available on request
          </span>
        </div>
      </div>
    </footer>
  );
}
