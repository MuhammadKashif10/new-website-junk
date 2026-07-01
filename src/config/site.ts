// Single source of truth for contact info & branding.
// Change the phone number here to update the whole site.
export const site = {
  name: "Marhaba Clearance",
  tagline: "Dubai's discreet junk removal service",
  // TODO: replace the placeholder phone/WhatsApp numbers below with the real
  // business numbers. Every CTA on the site reads from these two values.
  phone: "+971 50 123 4567",
  phoneHref: "tel:+971501234567",
  whatsapp: "+971 50 123 4567",
  whatsappHref: "https://wa.me/971501234567",
  email: "hello@marhabaclearance.ae",
  address: "Al Quoz Industrial 3, Dubai, United Arab Emirates",
  hours: "Every day · 7:00 – 22:00",
  // Production domain. Leave empty until the domain is live — the moment a value
  // is set here, all canonical/OG/sitemap URLs become absolute automatically.
  // e.g. "https://marhabaclearance.ae" (no trailing slash)
  url: "",
} as const;

// Build an absolute URL from a path when the production domain is configured.
// Falls back to the relative path while `site.url` is empty.
export const absoluteUrl = (path: string) => {
  if (!site.url) return path;
  return `${site.url}${path.startsWith("/") ? path : `/${path}`}`;
};
