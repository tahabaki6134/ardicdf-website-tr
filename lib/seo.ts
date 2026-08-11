import type { Metadata } from "next";

export const siteUrl = "https://ardicdf.com.tr";
export const siteName = "Ardıç Design & Fabrication";
export const socialImage = "/og-image.png";

type PageMetadataInput = {
  title: string;
  description: string;
  path: string;
  absoluteTitle?: boolean;
};

export function createPageMetadata({
  title,
  description,
  path,
  absoluteTitle = false
}: PageMetadataInput): Metadata {
  const socialTitle = absoluteTitle ? title : `${title} | ${siteName}`;

  return {
    title: absoluteTitle ? { absolute: title } : title,
    description,
    alternates: { canonical: path },
    openGraph: {
      title: socialTitle,
      description,
      url: path,
      siteName,
      locale: "tr_TR",
      type: "website",
      images: [
        {
          url: socialImage,
          width: 1200,
          height: 630,
          alt: `${title} — ${siteName}`
        }
      ]
    },
    twitter: {
      card: "summary_large_image",
      title: socialTitle,
      description,
      images: [socialImage]
    }
  };
}
