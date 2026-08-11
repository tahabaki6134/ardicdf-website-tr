import Link from "next/link";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Canlı Atölye",
  description:
    "Canlı Atölye, Ardıç'ın CNC, heykel, kaplama, boyama ve montaj hazırlığı süreçlerine açılacak canlı bir üretim penceresidir.",
  path: "/live"
});

const liveStreamUrl = process.env.NEXT_PUBLIC_LIVE_STREAM_URL?.trim();

const processItems = [
  "Canlı üretim",
  "CNC üretim",
  "Heykel çalışmaları",
  "Yüzey bitirme, kaplama ve boya",
  "Birleştirme ve montaj hazırlığı"
];

export default function LiveAtelierPage() {
  return (
    <main>
      <section className="px-5 py-20 md:px-8 md:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-[0.82fr_1.18fr] lg:items-end">
            <div>
              <p className="text-xs font-semibold uppercase tracking-brand text-bronze">
                Canlı Atölye
              </p>
              <h1 className="mt-8 max-w-3xl font-display text-5xl leading-[1.02] text-ink md:text-7xl">
                Atölyeye açılan yeni bir pencere.
              </h1>
              <p className="mt-8 max-w-2xl text-base leading-8 text-ink/65 md:text-lg md:leading-9">
                Canlı Atölye, Ardıç Design & Fabrication&apos;ın üretim kültürünü görünür kılacak.
                Yayında seçili atölye anları, üretim süreçleri, heykel çalışmaları, yüzey
                teknikleri ve hazırlık aşamaları paylaşılacak.
              </p>
              <div className="mt-9 h-px w-16 bg-bronze" />
            </div>

            <div className="border border-ink/10 bg-white p-3 shadow-soft">
              {liveStreamUrl ? (
                <div className="relative aspect-video overflow-hidden bg-ink">
                  <iframe
                    title="Ardıç Canlı Atölye yayını"
                    src={liveStreamUrl}
                    className="absolute inset-0 h-full w-full border-0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  />
                </div>
              ) : (
                <div className="flex aspect-video min-h-[320px] flex-col justify-end bg-ink p-8 text-porcelain md:p-10">
                  <p className="text-xs font-semibold uppercase tracking-brand text-bronze">
                    Çevrimdışı
                  </p>
                  <h2 className="mt-5 max-w-xl font-display text-4xl leading-tight md:text-5xl">
                    Canlı Atölye Yakında
                  </h2>
                  <p className="mt-6 max-w-2xl leading-8 text-porcelain/70">
                    CNC şekillendirmeden heykel yüzeylerine ve montaj hazırlığına uzanan
                    üretim sürecimize kesintisiz bir bakış.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-ink/10 bg-white/45 px-5 py-16 md:px-8 md:py-20">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <div>
            <p className="text-xs font-semibold uppercase tracking-brand text-bronze">
              Atölye Süreci
            </p>
            <h2 className="mt-7 max-w-xl font-display text-4xl leading-tight text-ink md:text-5xl">
              Gösteri için değil, gerçek üretimi göstermek için.
            </h2>
          </div>
          <div className="grid gap-px bg-ink/10 sm:grid-cols-2">
            {processItems.map((item, index) => (
              <article
                key={item}
                className={`min-h-40 bg-porcelain p-7 ${
                  index === processItems.length - 1 ? "sm:col-span-2" : ""
                }`}
              >
                <p className="font-display text-4xl leading-none text-bronze/75">
                  {`${index + 1}`.padStart(2, "0")}
                </p>
                <h3 className="mt-8 text-lg font-semibold leading-tight text-ink">{item}</h3>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-20 md:px-8 md:py-28">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-8 border border-ink/10 bg-porcelain p-8 md:p-12 lg:flex-row lg:items-end">
          <div>
            <p className="text-xs font-semibold uppercase tracking-brand text-bronze">
              Üretim Talebi
            </p>
            <h2 className="mt-6 max-w-2xl font-display text-4xl leading-tight text-ink md:text-5xl">
              Atölye odaklı projenizi konuşalım.
            </h2>
          </div>
          <Link
            href="/contact"
            className="w-fit bg-ink px-6 py-4 text-xs font-semibold uppercase tracking-brand text-porcelain transition hover:bg-bronze hover:text-ink"
          >
            Projenizi Görüşün
          </Link>
        </div>
      </section>
    </main>
  );
}
