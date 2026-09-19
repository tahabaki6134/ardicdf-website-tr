import { manufacturingMethods, methodPath, comparePath } from "@/lib/manufacturing";
import { manufacturingLanguage as lang } from "@/lib/manufacturing-site";
import type { MetadataRoute } from "next";
import { portfolioCategories } from "@/lib/content";
import { servicePages } from "@/lib/service-pages";

const siteUrl = "https://ardicdf.com.tr";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "",
    "/works",
    "/concepts",
    "/services",
    "/about",
    "/fabrication",

    "/contact",
    "/privacy",

  ];

  return [
    { url: `${siteUrl}/works/farmasi-boss-trip`, lastModified: "2026-09-19", changeFrequency: "monthly" as const, priority: 0.85 },
    { url: `${siteUrl}${comparePath(lang)}`, lastModified: "2026-09-13", changeFrequency: "monthly" as const, priority: 0.85 },
    ...manufacturingMethods.map(method => ({ url: `${siteUrl}${methodPath(method, lang)}`, lastModified: "2026-09-13", changeFrequency: "monthly" as const, priority: 0.9 })),
    ...staticRoutes.map((route) => ({
      url: `${siteUrl}${route}`,
      changeFrequency: route === "" ? ("weekly" as const) : ("monthly" as const),
      priority: route === "" ? 1 : 0.8
    })),
    ...portfolioCategories.map((category) => ({
      url: `${siteUrl}/works/${category.slug}`,
      changeFrequency: "monthly" as const,
      priority: 0.7
    })),
    ...servicePages.map((service) => ({
      url: `${siteUrl}/${service.slug}`,
      changeFrequency: "monthly" as const,
      priority: 0.85
    }))
  ];
}
