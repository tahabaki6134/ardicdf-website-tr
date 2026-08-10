import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: "*", allow: "/" },
      { userAgent: "OAI-SearchBot", allow: "/" }
    ],
    sitemap: "https://ardicdf.com.tr/sitemap.xml",
    host: "https://ardicdf.com.tr"
  };
}
