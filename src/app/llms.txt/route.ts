import { services } from "@/config/services";
import { areas } from "@/config/areas";
import { site, absoluteUrl } from "@/config/site";

// Serves /llms.txt — a concise, machine-readable map of the site for AI agents
// and LLM-based browsers (the emerging llmstxt.org convention). Generated from
// the same central config as the rest of the site, so the contact number and
// service list never drift out of sync. Statically rendered at build time.
export const dynamic = "force-static";

const phone = site.phoneHref.replace(/^tel:/, "");

export function GET() {
  const lines = [
    `# ${site.name}`,
    "",
    `> ${site.tagline}. Household, furniture, office and villa clearances handled by a uniformed local crew across Dubai — same-day pickups, fixed upfront pricing.`,
    "",
    `- Phone & WhatsApp: ${site.phone} (${site.phoneHref} · ${site.whatsappHref})`,
    `- Email: ${site.email}`,
    `- Base: ${site.address}`,
    `- Hours: ${site.hours}`,
    `- Coverage: ${areas.length}+ communities across Dubai, UAE`,
    "",
    "## Main pages",
    `- [Home](${absoluteUrl("/")}): Service overview, pricing approach and coverage.`,
    `- [About](${absoluteUrl("/about")}): The team, story and values.`,
    `- [Services](${absoluteUrl("/services")}): Full catalogue of clearance services.`,
    `- [Service Areas](${absoluteUrl("/service-areas")}): Every Dubai community we cover.`,
    `- [Contact](${absoluteUrl("/contact")}): Phone, WhatsApp, email and location.`,
    "",
    "## Services",
    ...services.map(
      (s) => `- [${s.title}](${absoluteUrl(`/services/${s.slug}`)}): ${s.short}`,
    ),
    "",
    "## Booking",
    `The fastest way to book is a WhatsApp message with a photo of what needs clearing to ${site.phone} for a fixed quote within minutes. Phone calls are welcome on the same number.`,
    "",
  ];

  return new Response(lines.join("\n"), {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=3600",
    },
  });
}
