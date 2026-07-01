import { Phone, MessageCircle } from "lucide-react";
import { site } from "@/config/site";

export function FloatingButtons() {
  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col gap-3 sm:bottom-8 sm:right-8">
      <a
        href={site.whatsappHref}
        aria-label="Chat on WhatsApp"
        className="group grid h-14 w-14 place-items-center rounded-full bg-[#25D366] text-white shadow-[0_10px_30px_-8px_rgba(37,211,102,0.6)] transition-transform hover:-translate-y-0.5"
      >
        <MessageCircle aria-hidden className="h-6 w-6" />
      </a>
      <a
        href={site.phoneHref}
        aria-label="Call now"
        className="group grid h-14 w-14 place-items-center rounded-full bg-[color:var(--color-ink)] text-[color:var(--color-cream)] shadow-[0_10px_30px_-8px_rgba(0,0,0,0.35)] transition-transform hover:-translate-y-0.5"
      >
        <Phone aria-hidden className="h-5 w-5" />
      </a>
    </div>
  );
}
