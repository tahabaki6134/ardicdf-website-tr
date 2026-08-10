import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { brand, capabilities, heroSlides, services, works } from "@/lib/content";
import { servicePages } from "@/lib/service-pages";
import { HomeHeroSlider } from "@/components/home-hero-slider";
import { SectionHeading } from "@/components/section-heading";
import { WorkCard } from "@/components/work-card";

export const metadata: Metadata = {
  title: "İstanbul Tematik Dekor ve Heykel Üretim Atölyesi",
  description:
    "İstanbul merkezli Ardıç; tematik dekorasyon, strafor ve polyester heykel, CNC EPS/XPS işleme, mimari dekor, yapay kaya ve özel üretim hizmetleri sunar.",
  alternates: {
    canonical: "/"
  },
  openGraph: {
    title: "İstanbul Tematik Dekor ve Heykel Üretim Atölyesi",
    description:
      "Tematik mekan, heykel, mimari dekor ve özel üretim projelerinde tasarımdan montaja entegre çözümler.",
    url: "/"
  }
};

export default function Home() {
  return (
    <main>
      <HomeHeroSlider slides={heroSlides} />

      <section className="px-5 py-20 md:px-8 md:py-28">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Ne Yapıyoruz?"
            title="İstanbul'da tasarlıyor, atölyemizde üretiyoruz."
            copy="Ardıç Design & Fabrication, İstanbul merkezli tasarım ve üretim atölyesidir. EPS/XPS CNC işleme, strafor ve polyester heykel, tematik dekor, mimari dekor, yapay kaya, kalıp ve büyük format 3D baskı hizmetlerini ticari, kültürel ve eğlence projeleri için tek çatı altında sunar."
          />
          <div className="mt-14 grid gap-px bg-ink/10 md:grid-cols-4">
            {services.map((service, index) => (
              <article key={service.title} className="bg-porcelain p-7 md:min-h-72">
                <p className="font-display text-5xl text-bronze">0{index + 1}</p>
                <h3 className="mt-12 text-xl font-semibold text-ink">{service.title}</h3>
                <p className="mt-4 leading-7 text-ink/60">{service.description}</p>
              </article>
            ))}
          </div>
          <div className="mt-14 grid gap-px bg-ink/10 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="relative min-h-[360px] overflow-hidden bg-ink md:min-h-[460px]">
              <Image
                src="/home/brand-story-lobby.jpeg"
                alt="Doğal kaya formları ve Ardıç marka duvarıyla premium lobi tasarımı"
                fill
                sizes="(min-width: 1024px) 55vw, 100vw"
                className="object-cover"
              />
            </div>
            <div className="flex flex-col justify-end bg-ink p-8 text-porcelain md:p-10">
              <p className="text-xs font-semibold uppercase tracking-brand text-bronze">
                {brand.tagline}
              </p>
              <h3 className="mt-5 font-display text-4xl leading-tight md:text-5xl">
                Tasarım dili, üretim disipliniyle güçlenir.
              </h3>
              <p className="mt-6 leading-8 text-porcelain/65">
                Uzun yıllara dayanan aile üretim ve yapı deneyimi üzerine kurulan Ardıç,
                mekan etkisini atölye hassasiyetiyle bir araya getirir.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white px-5 py-20 md:px-8 md:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
            <SectionHeading
              eyebrow="Öne Çıkan Projeler"
              title="Seçili üretim ve uygulamalar."
              copy="Tasarım ve üretim süreçleriyle şekillenen heykeller, marka deneyimleri, mimari elemanlar ve tematik mekanlardan seçkiler."
            />
            <Link href="/works" className="text-sm font-semibold uppercase tracking-brand text-bronze">
              Tüm projeleri görün
            </Link>
          </div>
          <div className="mt-14 grid gap-8 lg:grid-cols-2">
            {works.map((work) => (
              <WorkCard key={work.title} work={work} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-ink px-5 py-20 text-porcelain md:px-8 md:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <SectionHeading
            eyebrow="Tasarım ve Üretim Tek Çatı Altında"
            title="Fikirden montaja kesintisiz süreç."
            copy="Konsept geliştirme, CNC üretim, EPS/XPS işleme, heykel, kalıp, polyester döküm, kaplama, boyama, montaj ve saha uygulaması tek bir üretim akışı içinde koordine edilir."
            light
          />
          <div className="grid gap-5 sm:grid-cols-2">
            <div className="relative min-h-[360px] overflow-hidden border border-porcelain/15 bg-ink sm:col-span-2">
              <Image
                src="/home/production-columns.png"
                alt="Beyaz Korint kolon üretimi ve heykel detayları"
                fill
                sizes="(min-width: 1024px) 54vw, 100vw"
                className="object-cover"
              />
            </div>
            {["Konsept", "Mühendislik", "Üretim", "Montaj"].map((item) => (
              <div key={item} className="border border-porcelain/15 p-7">
                <p className="font-display text-4xl text-bronze">{item}</p>
                <p className="mt-4 leading-7 text-porcelain/65">
                  Her aşamada doğru kararlar, kontrollü toleranslar ve nitelikli yüzey yaklaşımı.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-20 md:px-8 md:py-28">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Üretim Kabiliyetleri"
            title="Zorlu ve özel projeler için üretim altyapısı."
            copy="EPSLAM üretim altyapısıyla CNC kesimli formlar, kompozit sistemler, heykelsi yüzeyler, aydınlatma entegre objeler, kaplamalar ve montaj planlaması birlikte yürütülür."
          />
          <div className="mt-12 grid gap-px bg-ink/10 sm:grid-cols-2 lg:grid-cols-3">
            {capabilities.map((capability) => (
              <div key={capability} className="bg-porcelain p-8">
                <p className="font-display text-3xl text-ink">{capability}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 pb-20 md:px-8 md:pb-28">
        <div className="mx-auto max-w-7xl bg-bronze px-6 py-14 text-porcelain md:px-12 md:py-20">
          <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
            <div>
              <p className="text-xs font-semibold uppercase tracking-brand text-porcelain/70">İletişim</p>
              <h2 className="mt-4 max-w-3xl font-display text-5xl leading-tight md:text-7xl">
                İnsanların hatırlayacağı bir mekan üretelim.
              </h2>
            </div>
            <Link
              href="/contact"
              className="w-fit bg-ink px-6 py-4 text-xs font-semibold uppercase tracking-brand text-porcelain transition hover:bg-porcelain hover:text-ink"
            >
              Projenizi Konuşalım
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
