import type { MetadataRoute } from "next";
import profile from "@/data/profile";
import { navItems } from "@/lib/nav";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return navItems.map((item) => ({
    url: `${profile.siteUrl}${item.href === "/" ? "" : item.href}`,
    lastModified,
    changeFrequency: "monthly",
    priority: item.href === "/" ? 1 : 0.8,
  }));
}
