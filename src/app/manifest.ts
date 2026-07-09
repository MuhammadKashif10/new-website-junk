import type { MetadataRoute } from "next";
import { site } from "@/config/site";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: site.name,
    short_name: site.name,
    description:
      "Discreet, dependable junk removal across Dubai — household, furniture, office and villa clearances.",
    start_url: "/",
    scope: "/",
    display: "standalone",
    // Colours mirror the site's warm palette (cream background / ink) — they
    // only tint the browser/PWA chrome and do not affect the page's appearance.
    background_color: "#faf8f2",
    theme_color: "#faf8f2",
    icons: [
      { src: "/icon-192.png", sizes: "192x192", type: "image/png", purpose: "any" },
      { src: "/icon-512.png", sizes: "512x512", type: "image/png", purpose: "any" },
      { src: "/icon-maskable-512.png", sizes: "512x512", type: "image/png", purpose: "maskable" },
    ],
  };
}
