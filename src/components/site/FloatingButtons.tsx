import { Phone } from "lucide-react";
import { site } from "@/config/site";
import { WhatsAppIcon } from "./WhatsAppIcon";

export function FloatingButtons() {
  return (
    <>
      {/* MOBILE: two equal-width CTAs pinned to the bottom of the viewport.
          Call on the left, WhatsApp on the right. Fixed so they stay visible
          while scrolling, with iOS safe-area padding and 48px+ touch targets.
          Hidden from md+ where the desktop stack below takes over. */}
      <div className="fixed inset-x-0 bottom-0 z-50 border-t border-border bg-background/90 backdrop-blur-md md:hidden">
        <div
          className="container-x grid grid-cols-2 gap-3 py-3"
          style={{ paddingBottom: "calc(0.75rem + env(safe-area-inset-bottom))" }}
        >
          <a
            href={site.phoneHref}
            aria-label={`Call ${site.phone}`}
            className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-[color:var(--color-ink)] px-4 text-sm font-medium text-[color:var(--color-cream)] shadow-[0_8px_24px_-10px_rgba(0,0,0,0.45)] transition-transform active:scale-[0.98]"
            style={{ fontFamily: "var(--font-display)" }}
          >
            <Phone aria-hidden className="h-5 w-5" /> Call
          </a>
          <a
            href={site.whatsappHref}
            aria-label={`Chat on WhatsApp at ${site.whatsapp}`}
            className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-[#25D366] px-4 text-sm font-medium text-white shadow-[0_8px_24px_-10px_rgba(37,211,102,0.7)] transition-transform active:scale-[0.98]"
            style={{ fontFamily: "var(--font-display)" }}
          >
            <WhatsAppIcon aria-hidden className="h-5 w-5" /> WhatsApp
          </a>
        </div>
      </div>

      {/* Spacer so the fixed mobile bar never covers the last row of page
          content (e.g. the footer). Only occupies space on mobile. */}
      <div
        aria-hidden
        className="md:hidden"
        style={{ height: "calc(4.5rem + env(safe-area-inset-bottom))" }}
      />

      {/* DESKTOP: the original vertical floating stack, unchanged, shown from
          md+ only so it never conflicts with the mobile bottom bar. */}
      <div className="fixed bottom-5 right-5 z-50 hidden flex-col gap-3 md:flex sm:bottom-8 sm:right-8">
        <a
          href={site.whatsappHref}
          aria-label="Chat on WhatsApp"
          className="group grid h-14 w-14 place-items-center rounded-full bg-[#25D366] text-white shadow-[0_10px_30px_-8px_rgba(37,211,102,0.6)] transition-transform hover:-translate-y-0.5"
        >
          <WhatsAppIcon aria-hidden className="h-6 w-6" />
        </a>
        <a
          href={site.phoneHref}
          aria-label="Call now"
          className="group grid h-14 w-14 place-items-center rounded-full bg-[color:var(--color-ink)] text-[color:var(--color-cream)] shadow-[0_10px_30px_-8px_rgba(0,0,0,0.35)] transition-transform hover:-translate-y-0.5"
        >
          <Phone aria-hidden className="h-5 w-5" />
        </a>
      </div>
    </>
  );
}
