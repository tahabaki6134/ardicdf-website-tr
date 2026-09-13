import { getMethod } from "@/lib/manufacturing";
import Link from "next/link";
import { ContactForm } from "@/components/contact-form";
import { SectionHeading } from "@/components/section-heading";
import { brand } from "@/lib/content";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "İletişim",
  description:
    "Epoksi döküm, kompozit, ahşap/CNC, komple mobilya ve dış cephe elemanları için teklif isteyin. Projelendirme, üretim ve montaj kapsamını birlikte planlayalım.",
  path: "/contact"
});

const contactRows = [
  [
    {
      title: "Proje Direktörü",
      value: brand.phone,
      href: `tel:${brand.phoneE164}`,
      whatsapp: `https://wa.me/${brand.phoneE164.slice(1)}`
    },
    {
      title: "WhatsApp",
      value: "Proje Direktörü",
      href: `https://wa.me/${brand.phoneE164.slice(1)}`,
      external: true
    }
  ]
];

const mapsUrl =
  "https://www.google.com/maps?q=Karadeniz%20Caddesi%20No%3A131%2C%20Ferhatpa%C5%9Fa%2C%20Ata%C5%9Fehir%2C%20Istanbul%2C%20Turkey";

export default function ContactPage({ searchParams }: { searchParams: { method?: string | string[]; alternative?: string | string[] } }) {
  const initialMethod = typeof searchParams.method === "string" && getMethod(searchParams.method) ? searchParams.method : "";
  const initialAlternative = typeof searchParams.alternative === "string" && getMethod(searchParams.alternative) && searchParams.alternative !== initialMethod ? searchParams.alternative : "";
  return (
    <main>
      <section className="px-5 py-20 md:px-8 md:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <SectionHeading
            eyebrow="İletişim"
            headingTag="h1"
            title="Tasarım ve üretim projenizi birlikte planlayalım."
            copy="Ölçü, adet, kullanım yeri ve son yüzeyi paylaşın. Epoksi döküm dahil imalat seçeneklerini; tek parça, komple mobilya veya dış cephe projenizin üretim ve montaj kapsamıyla birlikte değerlendirelim."
          />

          <div className="bg-white p-8 shadow-soft md:p-12">
            <p className="text-xs font-semibold uppercase tracking-brand text-bronze">
              İletişim Bilgileri
            </p>
            <div className="mt-8 space-y-px bg-ink/10">
              {contactRows.map((row, rowIndex) => (
                <div key={rowIndex} className="grid gap-px sm:grid-cols-2">
                  {row.map((block) => (
                    <article key={`${rowIndex}-${block.title}-${block.value}`} className="bg-white p-6">
                      <p className="text-xs font-semibold uppercase tracking-brand text-bronze">
                        {block.title}
                      </p>
                      <Link
                        href={block.href}
                        target={block.external ? "_blank" : undefined}
                        rel={block.external ? "noreferrer" : undefined}
                        className="mt-4 block font-display text-2xl leading-tight text-ink transition hover:text-bronze"
                      >
                        {block.value}
                      </Link>
                      {"whatsapp" in block && block.whatsapp ? (
                        <Link
                          href={block.whatsapp}
                          target="_blank"
                          rel="noreferrer"
                          className="mt-5 inline-flex text-xs font-semibold uppercase tracking-brand text-bronze transition hover:text-ink"
                        >
                          WhatsApp
                        </Link>
                      ) : null}
                    </article>
                  ))}
                </div>
              ))}
            </div>

            <div className="mt-10 border-t border-ink/10 pt-10">
              <p className="text-xs font-semibold uppercase tracking-brand text-bronze">
                Adres
              </p>
              <address className="mt-4 not-italic text-xl leading-8 text-ink/70">
                {brand.address.streetAddress}
                <br />
                {brand.address.district}
                <br />
                {brand.address.addressLocality}
                <br />
                {brand.address.addressRegion}
                <br />
                Türkiye
              </address>
              <Link
                href={mapsUrl}
                target="_blank"
                rel="noreferrer"
                className="mt-6 inline-flex text-xs font-semibold uppercase tracking-brand text-bronze transition hover:text-ink"
              >
                Google Haritalar&apos;da Görün
              </Link>
            </div>

            <div className="mt-10 border-t border-ink/10 pt-10">
              <p className="text-xs font-semibold uppercase tracking-brand text-bronze">
                Tasarım ve Üretim Atölyesi
              </p>
              <p className="mt-4 text-xl leading-8 text-ink/70">
                Türkiye&apos;deki ve uluslararası proje ekipleri için entegre tasarım, CNC üretim,
                heykel, yüzey bitirme ve montaj koordinasyonu.
              </p>
              <Link
                href="mailto:taaha.baaki@gmail.com"
                className="mt-6 inline-flex text-xs font-semibold uppercase tracking-brand text-bronze transition hover:text-ink"
              >
                taaha.baaki@gmail.com
              </Link>
            </div>
          </div>
        </div>

        <div className="mx-auto mt-12 max-w-7xl">
          <div className="overflow-hidden rounded-sm border border-ink/10 bg-white p-2 shadow-soft">
            <iframe
              title="Ardıç Design & Fabrication Google Haritalar konumu"
              src={`${mapsUrl}&output=embed`}
              className="h-[360px] w-full rounded-sm border-0 md:h-[460px]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
        </div>
      </section>

      <section id="brief" className="border-y border-ink/10 bg-white/45 px-5 py-20 md:px-8 md:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.78fr_1.22fr]">
          <div>
            <p className="text-xs font-semibold uppercase tracking-brand text-bronze">
              Projenizi Başlatın
            </p>
            <h2 className="mt-7 max-w-xl font-display text-4xl leading-tight text-ink md:text-5xl">
              Ne üretmek istediğinizi anlatın.
            </h2>
            <p className="mt-7 max-w-xl leading-8 text-ink/60">
              Ardıç; konsept geliştirmeden üretim, yüzey bitişi ve montaja kadar bütüncül
              tasarım ve uygulama çözümleri sunar.
            </p>
            <p className="mt-6 max-w-xl leading-8 text-ink/60">
              Proje konumunu, yaklaşık kapsamı, ihtiyaç duyulan obje veya mekanları ve varsa
              takvim ya da montaj kısıtlarını paylaşın. Ekibimiz talebinizi inceleyerek sonraki
              adım için size dönüş yapacaktır.
            </p>
          </div>

          <ContactForm key={`${initialMethod}:${initialAlternative}`} initialMethod={initialMethod} initialAlternative={initialAlternative} />
        </div>
      </section>
    </main>
  );
}
