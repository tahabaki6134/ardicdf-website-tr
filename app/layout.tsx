import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";
import { ConversionTracking } from "@/components/conversion-tracking";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { FloatingWhatsAppButton } from "@/components/floating-whatsapp-button";
import { brand } from "@/lib/content";
import { siteUrl } from "@/lib/seo";

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${siteUrl}/#organization`,
      name: brand.name,
      alternateName: "ARDIÇ Design & Fabrication",
      url: siteUrl,
      logo: `${siteUrl}/logo.svg`,
      description:
        "Ardıç Design & Fabrication; tematik mekan tasarımı, heykel üretimi, mimari dekorasyon, CNC ve EPS/XPS köpük işleme alanlarında Türkiye merkezli tasarım ve üretim hizmetleri sunar.",
      parentOrganization: {
        "@type": "Organization",
        name: "EPSLAM"
      },
      contactPoint: {
        "@type": "ContactPoint",
        telephone: brand.phoneE164,
        contactType: "proje talepleri",
        areaServed: "TR",
        availableLanguage: ["Turkish"]
      }
    },
    {
      "@type": "LocalBusiness",
      "@id": `${siteUrl}/#localbusiness`,
      name: brand.name,
      url: siteUrl,
      image: `${siteUrl}/og-image.png`,
      description:
        "İstanbul Ataşehir merkezli tematik dekor, heykel, CNC köpük işleme ve özel üretim atölyesi.",
      telephone: brand.phoneE164,
      address: {
        "@type": "PostalAddress",
        streetAddress: `${brand.address.streetAddress}, ${brand.address.district}`,
        addressLocality: brand.address.addressLocality,
        addressRegion: brand.address.addressRegion,
        addressCountry: brand.address.addressCountry
      },
      branchOf: {
        "@id": `${siteUrl}/#organization`
      },
      areaServed: { "@type": "Country", name: "Türkiye" }
    },
    {
      "@type": "Service",
      "@id": `${siteUrl}/#services`,
      name: "Tasarım ve Üretim Hizmetleri",
      provider: {
        "@id": `${siteUrl}/#organization`
      },
      areaServed: "Türkiye",
      serviceType: [
        "Tematik mekan tasarımı ve üretimi",
        "Heykel üretimi",
        "Mimari dekorasyon",
        "Marka uygulamaları",
        "CNC strafor kesim ve köpük işleme",
        "EPS ve XPS şekillendirme",
        "Kalıp üretimi",
        "Polyester üretim",
        "Boyama, sonlandırma ve montaj"
      ],
      description:
        "Konsept geliştirme, CNC üretim, EPS/XPS işleme, heykel ve kalıp üretimi, polyester döküm, boyama, montaj ve uygulamayı tek çatı altında buluşturan entegre hizmetler."
    }
  ]
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${brand.name} | ${brand.tagline}`,
    template: `%s | ${brand.name}`
  },
  description:
    "Türkiye genelinde tematik dekorasyon, heykel üretimi, mimari dekorasyon, özel dekor üretimi, CNC strafor kesim ve anahtar teslim uygulama hizmetleri.",
  keywords: [
    "tematik dekorasyon",
    "tematik mekan tasarımı",
    "heykel üretimi",
    "polyester heykel",
    "EPS heykel",
    "mimari dekorasyon",
    "özel dekor üretimi",
    "CNC strafor kesim",
    "yapay kaya uygulaması",
    "Ardıç Design & Fabrication",
    "EPSLAM"
  ],
  alternates: {
    canonical: "/"
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-64x64.png", sizes: "64x64", type: "image/png" },
      { url: "/favicon-128x128.png", sizes: "128x128", type: "image/png" },
      { url: "/favicon-256x256.png", sizes: "256x256", type: "image/png" },
      { url: "/favicon-512x512.png", sizes: "512x512", type: "image/png" }
    ],
    apple: [{ url: "/favicon-256x256.png", sizes: "256x256", type: "image/png" }]
  },
  openGraph: {
    title: `${brand.name} | ${brand.tagline}`,
    description:
      "Tematik mekanlar, büyük ölçekli heykeller, mimari dekorasyon ve CNC/EPS/XPS üretimi için tasarımdan uygulamaya profesyonel çözümler.",
    type: "website",
    url: "/",
    siteName: brand.name,
    locale: "tr_TR",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: `${brand.name} logosu`
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: `${brand.name} | ${brand.tagline}`,
    description:
      "Tematik dekorasyon, heykel üretimi, mimari dekorasyon ve CNC/EPS/XPS işleme alanlarında tasarım ve üretim çözümleri.",
    images: ["/og-image.png"]
  }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="tr">
      <body className="font-sans antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        <Header />
        {children}
        <Footer />
        <FloatingWhatsAppButton />
        <ConversionTracking />
        <Analytics />
      </body>
    </html>
  );
}
