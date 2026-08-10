import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PortfolioLightbox } from "@/components/portfolio-lightbox";
import { SectionHeading } from "@/components/section-heading";
import { getPortfolioImageAlt, getPortfolioImageSrc, portfolioCategories } from "@/lib/content";

type CategoryPageProps = {
  params: {
    slug: string;
  };
};

function getCategory(slug: string) {
  return portfolioCategories.find((category) => category.slug === slug);
}

const relatedServiceLinks: Record<string, { href: string; label: string }[]> = {
  "safari-experiences": [{ href: "/tema-park-dekor-uretimi", label: "Tema park dekor üretimi" }],
  "sculptures-characters": [{ href: "/strafor-heykel-uretimi", label: "Strafor heykel üretimi" }, { href: "/polyester-heykel-uretimi", label: "Polyester heykel üretimi" }],
  "artificial-rock-organic-forms": [{ href: "/yapay-kaya-uretimi", label: "Yapay kaya üretimi" }],
  "historical-thematic-environments": [{ href: "/rolyef-ve-mimari-dekor", label: "Rölyef ve mimari dekor" }, { href: "/tematik-dekorasyon", label: "Tematik dekorasyon" }],
  "cnc-manufacturing-processes": [{ href: "/cnc-strafor-isleme", label: "CNC strafor işleme" }, { href: "/eps-xps-cnc-isleme", label: "EPS ve XPS CNC işleme" }],
  "molds-composite-production": [{ href: "/polyester-heykel-uretimi", label: "Polyester heykel üretimi" }, { href: "/maket-ve-prototip-uretimi", label: "Maket ve prototip üretimi" }],
  "commercial-brand-installations": [{ href: "/avm-ve-ticari-mekan-dekorasyonu", label: "AVM ve ticari mekan dekorasyonu" }, { href: "/sahne-fuar-ve-etkinlik-dekoru", label: "Sahne, fuar ve etkinlik dekoru" }]
};

export function generateStaticParams() {
  return portfolioCategories.map((category) => ({
    slug: category.slug
  }));
}

export function generateMetadata({ params }: CategoryPageProps): Metadata {
  const category = getCategory(params.slug);

  if (!category) {
    return {};
  }

  return {
    title: category.title,
    description: category.description,
    alternates: {
      canonical: `/works/${category.slug}`
    },
    openGraph: {
      title: category.title,
      description: category.description,
      url: `/works/${category.slug}`,
      locale: "tr_TR",
      type: "article",
      images: [{ url: category.coverImage, alt: category.alt }]
    },
    twitter: {
      card: "summary_large_image",
      title: category.title,
      description: category.description,
      images: [category.coverImage]
    }
  };
}

export default function PortfolioCategoryPage({ params }: CategoryPageProps) {
  const category = getCategory(params.slug);

  if (!category) {
    notFound();
  }

  const galleryImages = category.images.map((image, index) => ({
    src: getPortfolioImageSrc(image),
    alt: getPortfolioImageAlt(image, `${category.title} galeri görseli ${index + 1}`)
  }));
  const serviceLinks = relatedServiceLinks[category.slug] ?? [];

  return (
    <main>
      <section className="px-5 py-20 md:px-8 md:py-28">
        <div className="mx-auto max-w-7xl">
          <Link
            href="/works"
            className="text-sm font-semibold uppercase tracking-brand text-bronze transition hover:text-ink"
          >
            &larr; Projeler
          </Link>

          <div className="mt-10">
            <SectionHeading
              eyebrow="Proje Galerisi"
              title={category.title}
              copy={category.description}
            />
          </div>

          <div className="mt-14 grid gap-10 border-y border-ink/10 py-12 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <p className="font-display text-4xl leading-tight text-ink md:text-5xl">
                {category.introHeading}
              </p>
              <p className="mt-6 text-sm font-semibold uppercase tracking-brand text-bronze">
                {category.imageCount} Görsel
              </p>
            </div>
            <div className="space-y-6 text-lg leading-8 text-ink/65">
              {category.intro.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </div>

          <section className="mt-12 grid gap-px bg-ink/10 sm:grid-cols-3" aria-label="Proje ve üretim özeti">
            <div className="bg-porcelain p-6">
              <p className="text-xs font-semibold uppercase tracking-brand text-bronze">Proje Türü</p>
              <p className="mt-4 font-display text-2xl leading-tight text-ink">{category.title}</p>
            </div>
            <div className="bg-porcelain p-6">
              <p className="text-xs font-semibold uppercase tracking-brand text-bronze">Üretim Bağlamı</p>
              <p className="mt-4 leading-7 text-ink/65">{category.introHeading}</p>
            </div>
            <div className="bg-porcelain p-6">
              <p className="text-xs font-semibold uppercase tracking-brand text-bronze">Görsel Dokümantasyon</p>
              <p className="mt-4 leading-7 text-ink/65">Bu kategoride {category.imageCount} gerçek proje veya üretim görseli yer alır.</p>
            </div>
          </section>

          <section className="mt-16">
            <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
              <div>
                <p className="text-xs font-semibold uppercase tracking-brand text-bronze">
                  Galeri
                </p>
                <h2 className="mt-4 font-display text-4xl leading-tight text-ink md:text-5xl">
                  Proje görsel arşivi.
                </h2>
              </div>
            </div>

            <PortfolioLightbox images={galleryImages} />
          </section>

          {serviceLinks.length ? (
            <section className="mt-16 border-t border-ink/10 pt-12">
              <p className="text-xs font-semibold uppercase tracking-brand text-bronze">İlgili Hizmetler</p>
              <h2 className="mt-5 font-display text-4xl leading-tight text-ink">Bu projelerde kullanılan üretim kabiliyetleri</h2>
              <div className="mt-7 flex flex-wrap gap-3">
                {serviceLinks.map((item) => (
                  <Link key={item.href} href={item.href} className="border border-ink/10 bg-white px-5 py-4 font-semibold text-ink transition hover:border-bronze hover:text-bronze">{item.label} →</Link>
                ))}
              </div>
            </section>
          ) : null}
        </div>
      </section>
    </main>
  );
}
