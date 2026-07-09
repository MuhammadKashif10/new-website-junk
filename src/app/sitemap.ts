import type { MetadataRoute } from "next";
import { services } from "@/config/services";
import { absoluteUrl } from "@/config/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPaths = ["/", "/about", "/services", "/service-areas", "/contact"];
  const servicePaths = services.map((s) => `/services/${s.slug}`);
  return [...staticPaths, ...servicePaths].map((path) => ({
    url: absoluteUrl(path),
    changeFrequency: "weekly",
  }));
}
