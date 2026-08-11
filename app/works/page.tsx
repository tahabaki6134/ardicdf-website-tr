import { RotatingCoverImage } from "@/components/rotating-cover-image";
import { SectionHeading } from "@/components/section-heading";
import { portfolioCategories } from "@/lib/content";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Projeler",
  description:
    "Ardıç'ın tematik mekan, heykel, mimari dekor, marka uygulaması, yapay kaya, kalıp ve kompozit üretim projelerini inceleyin.",
  path: "/works"
});

const worksCategories = portfolioCategories.filter((category) => category.published !== false);

export default function WorksPage() {
  return (
    <main>
      <section className="px-5 py-20 md:px-8 md:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 border-b border-ink/10 pb-14 lg:grid-cols-[0.95fr_1.05fr] lg:items-end">
            <SectionHeading
              eyebrow="Projeler"
              headingTag="h1"
              title="Heykel, dekor ve tematik üretimden seçili işler."
              copy="Ardıç Design & Fabrication, konsept geliştirmeden üretim, yüzey bitişi ve saha uygulamasına kadar özel fiziksel projeler gerçekleştirir."
            />
            <p className="max-w-xl text-base leading-8 text-ink/60 md:text-lg">
              Portföy; heykel işçiliği, mimari detaylandırma, marka odaklı üretim ve atölye
              süreçleriyle şekillenen gerçek proje kategorilerini bir araya getirir.
            </p>
          </div>

          <div className="mt-16 grid gap-px bg-ink/10 md:grid-cols-2 xl:grid-cols-3">
            {worksCategories.map((category) => (
              <article key={category.title} className="group bg-porcelain transition hover:bg-white">
                <a href={category.href} className="flex min-h-full flex-col">
                  <div className="relative aspect-[4/3] overflow-hidden bg-ink">
                    <RotatingCoverImage
                      images={category.coverImages}
                      position={category.coverPosition}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-ink/35 via-transparent to-transparent opacity-70" />
                    <div className="absolute left-5 top-5 border border-white/25 bg-ink/55 px-3 py-2 text-[0.65rem] font-semibold uppercase tracking-brand text-white backdrop-blur-sm">
                      {category.imageCount} Proje Görseli
                    </div>
                  </div>
                  <div className="flex min-h-72 flex-col border border-ink/10 p-7 md:p-8">
                    <div className="flex items-center justify-between gap-4 text-sm font-semibold uppercase tracking-brand text-bronze">
                      <p>{category.number}</p>
                      <p>{category.imageCount} Görsel</p>
                    </div>
                    <h2 className="mt-7 max-w-lg font-display text-3xl leading-tight text-ink md:text-4xl">
                      {category.title}
                    </h2>
                    <div className="mt-5 h-px w-14 bg-bronze" />
                    <p className="mt-6 max-w-xl leading-7 text-ink/60">
                      {category.shortDescription ?? category.description}
                    </p>
                    <span className="mt-auto pt-10 text-sm font-semibold uppercase tracking-brand text-bronze transition group-hover:text-ink">
                      Galeriyi İnceleyin →
                    </span>
                  </div>
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
