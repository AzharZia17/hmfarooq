import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/constants";
import { SERVICES } from "@/lib/services";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = ["", "/about", "/why-choose-us", "/services", "/projects", "/contact", "/privacy", "/terms", "/credits", ...SERVICES.map((s) => `/services/${s.slug}`)];
  return pages.map((p) => ({ url: `${SITE_URL}${p}`, changeFrequency: "monthly", priority: p === "" ? 1 : p.startsWith("/services") ? 0.8 : 0.6 }));
}
