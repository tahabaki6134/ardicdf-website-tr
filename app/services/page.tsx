import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { services } from "@/lib/content";
import { servicePages } from "@/lib/service-pages";
import { SectionHeading } from "@/components/section-heading";

export const metadata: Metadata = {
  title: "Hizmetler",
  description:
    "Tematik dekorasyon, heykel üretimi, CNC strafor işleme, mimari dekor, yapay kaya, 3D baskı ve özel üretim hizmetleri.",
  alternates: {
    canonical: "/services"
  },
  openGraph: {
    title: "Hizmetler",
    description:
      "Tasarım, CNC üretim, heykel, mimari dekor ve sahaya hazır uygulama için entegre hizmetler.",
    url: "/services"
  }
};

const serviceImages: Record<string, string> = {
  "Marka Uygulamaları": "/services/brand-nyx-bottle.jpeg",
  "Mimari Dekorasyon": "/services/architectural-decor-columns.jpeg",
  "Heykel ve Sanat Uygulamaları": "/services/sculpture-elephant-front.jpeg",
  "Tematik Mekanlar": "/services/thematic-spongebob-patrick.jpeg",
  "Endüstriyel 3D Baskı": "/projects/portfolio/cnc-manufacturing-processes/cnc-manufacturing-processes-01.jpeg"
};

const serviceImagePositions: Record<string, string> = {
  "Marka Uygulamaları": "50% 45%",
  "Mimari Dekorasyon": "50% 42%",
  "Heykel ve Sanat Uygulamaları": "50% 35%",
  "Tematik Mekanlar": "48% 45%",
  "Endüstriyel 3D Baskı": "50% 42%"
};

export default function ServicesPage() {
  return (
    <main>
      <section className="px-5 py-20 md:px-8 md:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-[0.92fr_1.08fr] lg:items-end">
            <SectionHeading
              eyebrow="Hizmetler"
              headingTag="h1"
              title="Tasarım fikrini üretilebilir çözüme dönüştürüyoruz."
              copy="Ardıç, ilk mekansal fikirden tamamlanmış fiziksel uygulamaya kadar estetik hedefleri; üretilebilir detay, atölye disiplini ve montaj planıyla buluşturur."
            />

            <div className="relative min-h-[340px] overflow-hidden border border-ink/10 bg-ink shadow-soft md:min-h-[460px]">
              <Image
                src="/services/architectural-decor-relief.jpeg"
                alt="CNC ile işlenmiş dekoratif mimari rölyef"
                fill
                priority
                sizes="(min-width: 1024px) 54vw, 100vw"
                className="object-cover"
                style={{ objectPosition: "50% 45%" }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/35 via-transparent to-transparent" />
            </div>
          </div>

          <div className="mt-16 grid gap-px bg-ink/10 lg:grid-cols-2 lg:auto-rows-fr">
            {services.map((service, index) => (
              <article key={service.title} className="h-full bg-porcelain">
                <div className="grid h-full md:grid-cols-[0.9fr_1.1fr]">
                  <div className="relative min-h-64 overflow-hidden bg-ink md:min-h-full">
                    <Image
                      src={serviceImages[service.title]}
                      alt={`${service.title} hizmet görseli`}
                      fill
                      sizes="(min-width: 1024px) 28vw, (min-width: 768px) 45vw, 100vw"
                      className="object-cover transition duration-700 hover:scale-[1.015]"
                      style={{ objectPosition: serviceImagePositions[service.title] }}
                    />
                  </div>
                  <div className="flex min-h-80 flex-col justify-between border border-ink/10 p-7 md:p-9">
                    <div>
                      <p className="font-display text-4xl leading-none text-bronze/80">
                        {`${index + 1}`.padStart(2, "0")}
                      </p>
                      <h2 className="mt-5 font-display text-3xl leading-tight text-ink md:text-4xl">
                        {service.title}
                      </h2>
                      <div className="mt-5 h-px w-16 bg-bronze" />
                      <p className="mt-6 text-base leading-7 text-ink/65 md:text-lg md:leading-8">
                        {service.description}
                      </p>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <section className="mt-20">
            <SectionHeading eyebrow="Uzmanlık Alanları" title="İhtiyacınıza doğrudan cevap veren hizmetler." copy="Her sayfa üretim yöntemi, kullanım alanı, süreç ve sık sorulan sorular hakkında doğrulanabilir bilgiler sunar." />
            <div className="mt-10 grid gap-px bg-ink/10 md:grid-cols-2 lg:grid-cols-3">
              {servicePages.map((service) => (
                <Link key={service.slug} href={`/${service.slug}`} className="group bg-porcelain p-7 transition hover:bg-white">
                  <p className="text-xs font-semibold uppercase tracking-brand text-bronze">{service.eyebrow}</p>
                  <h2 className="mt-5 font-display text-3xl leading-tight text-ink">{service.title}</h2>
                  <p className="mt-5 leading-7 text-ink/60">{service.description}</p>
                  <span className="mt-8 inline-block text-sm font-semibold uppercase tracking-brand text-bronze group-hover:text-ink">Detayları inceleyin →</span>
                </Link>
              ))}
            </div>
          </section>

          <div className="mt-14 flex justify-center md:justify-start">
            <Link
              href="/contact"
              className="inline-block bg-ink px-6 py-4 text-xs font-semibold uppercase tracking-brand text-porcelain transition hover:bg-bronze"
            >
              Projenizi Konuşalım
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
