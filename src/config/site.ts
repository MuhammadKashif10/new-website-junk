// Single source of truth for contact info & branding.
// Change the phone number here to update the whole site.
export const site = {
  name: "Dubai Junk Collection",
  tagline: "Dubai's discreet junk removal service",
  // Production business number. Every phone/WhatsApp CTA on the site reads from
  // these values, so a future change only needs editing here.
  phone: "+971 55 528 4216",
  phoneHref: "tel:+971555284216",
  whatsapp: "+971 55 528 4216",
  whatsappHref: "https://wa.me/971555284216",
  email: "hello@dubaijunkcollection.com",
  address: "Al Quoz Industrial 3, Dubai, United Arab Emirates",
  hours: "Every day · 7:00 – 22:00",
  // Production domain (no trailing slash). Every canonical/OG/Twitter/sitemap/
  // robots/JSON-LD URL is derived from this single value — update it here only.
  url: "https://dubaijunkcollection.com",
} as const;

// Build an absolute URL from a path when the production domain is configured.
// Falls back to the relative path while `site.url` is empty.
export const absoluteUrl = (path: string) => {
  if (!site.url) return path;
  return `${site.url}${path.startsWith("/") ? path : `/${path}`}`;
};
