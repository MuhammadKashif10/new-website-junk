"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import { site } from "@/config/site";

const nav = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/service-areas", label: "Service Areas" },
  { to: "/contact", label: "Contact" },
] as const;

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-40 w-full transition-all duration-300 ${
        scrolled
          ? "border-b border-border/60 bg-background/85 backdrop-blur-md"
          : "border-b border-transparent bg-background/0"
      }`}
    >
      <div className="container-x flex h-20 items-center justify-between gap-4">
        <Link href="/" className="flex min-w-0 items-center gap-3">
          {/* Temporary text-based brand mark ("DJC" monogram for Dubai Junk
              Collection). Swap this <span> for the final logo asset when ready. */}
          <span
            aria-hidden
            className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-[color:var(--color-ink)] text-[11px] font-semibold tracking-tight text-[color:var(--color-cream)]"
            style={{ fontFamily: "var(--font-display)" }}
          >
            DJC
          </span>
          <span className="truncate">
            <span
              className="block text-base font-semibold leading-tight tracking-tight"
              style={{ fontFamily: "var(--font-display)" }}
            >
              {site.name}
            </span>
            <span className="hidden text-[11px] uppercase tracking-[0.18em] text-muted-foreground sm:block">
              Dubai · Since 2016
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {nav.map((item) => {
            const active = pathname === item.to;
            return (
              <Link
                key={item.to}
                href={item.to}
                className={`link-underline text-sm transition-colors hover:text-foreground ${
                  active ? "text-foreground" : "text-foreground/80"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href={site.phoneHref}
            className="inline-flex items-center gap-2 rounded-full border border-border px-4 py-2 text-sm transition-colors hover:border-[color:var(--color-accent)] hover:text-[color:var(--color-accent)]"
          >
            <Phone aria-hidden className="h-4 w-4" /> {site.phone}
          </a>
          <a
            href={site.whatsappHref}
            className="inline-flex items-center rounded-full bg-[color:var(--color-ink)] px-5 py-2.5 text-sm font-medium text-[color:var(--color-cream)] transition-transform hover:-translate-y-0.5"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Book on WhatsApp
          </a>
        </div>

        <button
          type="button"
          onClick={() => setOpen((o) => !o)}
          className="grid h-11 w-11 place-items-center rounded-full border border-border lg:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="mobile-menu"
        >
          {open ? <X aria-hidden className="h-5 w-5" /> : <Menu aria-hidden className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div id="mobile-menu" className="border-t border-border bg-background lg:hidden">
          <div className="container-x flex flex-col gap-1 py-4">
            {nav.map((item) => {
              const active = pathname === item.to;
              return (
                <Link
                  key={item.to}
                  href={item.to}
                  onClick={() => setOpen(false)}
                  className={`rounded-md px-3 py-3 text-base hover:bg-muted ${
                    active ? "bg-muted text-foreground" : "text-foreground/85"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
            <div className="mt-2 flex gap-2">
              <a
                href={site.phoneHref}
                className="flex-1 rounded-full border border-border px-4 py-3 text-center text-sm"
              >
                Call
              </a>
              <a
                href={site.whatsappHref}
                className="flex-1 rounded-full bg-[color:var(--color-ink)] px-4 py-3 text-center text-sm text-[color:var(--color-cream)]"
                style={{ fontFamily: "var(--font-display)" }}
              >
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
