import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/components/breadcrumbs";
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
      <section className="px-5 py-10 md:px-8 md:py-14">
        <div className="mx-auto max-w-7xl">
          <Breadcrumbs
            items={[
              { label: "Ana Sayfa", href: "/" },
              { label: "Projeler", href: "/works" },
              { label: category.title, href: `/works/${category.slug}` }
            ]}
          />

          <div className="mt-10">
            <SectionHeading
              eyebrow="Proje Galerisi"
              headingTag="h1"
              title={category.title}
              copy={category.description}
            />
          </div>

          <section className="mt-8">
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
              <h2 className="mt-5 font-display text-4xl leading-tight text-ink">Benzer işler için imalat seçenekleri</h2>
              <div className="mt-7 flex flex-wrap gap-3">
                {serviceLinks.map((item) => (
                  <Link key={item.href} href={item.href} className="border border-ink/10 bg-white px-5 py-4 font-semibold text-ink transition hover:border-bronze hover:text-bronze">{item.label} →</Link>
                ))}
              </div>
            </section>
          ) : null}

          <section className="mt-16 bg-ink p-8 text-porcelain md:p-10">
            <p className="text-xs font-semibold uppercase tracking-brand text-bronze">
              Projenizi Planlayalım
            </p>
            <div className="mt-5 flex flex-col justify-between gap-6 md:flex-row md:items-end">
              <h2 className="max-w-3xl font-display text-3xl leading-tight md:text-4xl">
                Benzer bir üretim için ölçü, kullanım alanı ve hedefinizi paylaşın.
              </h2>
              <Link
                href="/contact"
                className="w-fit border border-bronze px-6 py-4 text-xs font-semibold uppercase tracking-brand transition hover:bg-bronze hover:text-ink"
              >
                Teklif İsteyin
              </Link>
            </div>
          </section>
        </div>
      </section>
    </main>
  );
}
