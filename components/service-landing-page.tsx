import Link from "next/link";
import { Breadcrumbs } from "@/components/breadcrumbs";
import type { ServicePage } from "@/lib/service-pages";
import { siteUrl } from "@/lib/seo";

const sectionTitles = {
  production: "Ne üretiyoruz?",
  methods: "Malzemeler ve üretim yöntemleri",
  applications: "Hangi projelerde kullanılır?",
  process: "Üretim süreci"
};

export function ServiceLandingPage({ service }: { service: ServicePage }) {
  const faqData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: service.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer }
    }))
  };

  const serviceData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${siteUrl}/${service.slug}#service`,
    name: service.title,
    serviceType: service.title,
    description: service.description,
    url: `${siteUrl}/${service.slug}`,
    provider: { "@id": `${siteUrl}/#organization` },
    areaServed: [{ "@type": "City", name: "İstanbul" }, { "@type": "Country", name: "Türkiye" }]
  };

  return (
    <main>
      <div className="mx-auto max-w-7xl px-5 pt-8 md:px-8"><Link href="/services" className="text-link">Malzeme seçimi için imalat yöntemlerini ve maliyet farklarını inceleyin</Link></div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceData) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqData) }} />

      <section className="px-5 py-20 md:px-8 md:py-28">
        <div className="mx-auto max-w-7xl">
          <Breadcrumbs
            items={[
              { label: "Ana Sayfa", href: "/" },
              { label: "Hizmetler", href: "/services" },
              { label: service.title, href: `/${service.slug}` }
            ]}
          />
          <div className="mt-10 grid gap-12 lg:grid-cols-[0.82fr_1.18fr] lg:items-end">
          <div>
            <p className="text-xs font-semibold uppercase tracking-brand text-bronze">{service.eyebrow}</p>
            <h1 className="mt-8 font-display text-5xl leading-[1.02] text-ink md:text-7xl">{service.title}</h1>
          </div>
          <div>
            <p className="max-w-2xl text-lg leading-9 text-ink/70">{service.summary}</p>
            <div className="mt-9 flex flex-wrap gap-4">
              <Link href="/contact" className="bg-ink px-6 py-4 text-xs font-semibold uppercase tracking-brand text-porcelain transition hover:bg-bronze hover:text-ink">Teklif İsteyin</Link>
              <Link href="/works" className="border border-ink/15 px-6 py-4 text-xs font-semibold uppercase tracking-brand text-ink transition hover:border-bronze hover:text-bronze">Projeleri İnceleyin</Link>
            </div>
          </div>
          </div>
        </div>
      </section>

      <section className="border-y border-ink/10 bg-white/45 px-5 py-20 md:px-8 md:py-24">
        <div className="mx-auto grid max-w-7xl gap-px bg-ink/10 md:grid-cols-2">
          {([
            ["production", service.production],
            ["methods", service.methods],
            ["applications", service.applications],
            ["process", service.process]
          ] as const).map(([key, items], sectionIndex) => (
            <section key={key} className="bg-porcelain p-8 md:p-10">
              <p className="text-xs font-semibold uppercase tracking-brand text-bronze">{`${sectionIndex + 1}`.padStart(2, "0")}</p>
              <h2 className="mt-6 font-display text-3xl leading-tight text-ink md:text-4xl">{sectionTitles[key]}</h2>
              <ul className="mt-7 space-y-4 text-ink/65">
                {items.map((item) => <li key={item} className="border-l border-bronze pl-4 leading-7">{item}</li>)}
              </ul>
            </section>
          ))}
        </div>
      </section>

      <section className="px-5 py-20 md:px-8 md:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2">
          <div>
            <p className="text-xs font-semibold uppercase tracking-brand text-bronze">İlgili Uygulamalar</p>
            <h2 className="mt-7 font-display text-4xl leading-tight text-ink md:text-5xl">Gerçek üretim örneklerini inceleyin.</h2>
            <div className="mt-8 grid gap-3">
              {service.relatedProjects.map((item) => <Link key={item.href} href={item.href} className="border border-ink/10 bg-white p-5 font-semibold text-ink transition hover:border-bronze hover:text-bronze">{item.label} →</Link>)}
            </div>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-brand text-bronze">İlgili Hizmetler</p>
            <h2 className="mt-7 font-display text-4xl leading-tight text-ink md:text-5xl">Üretim yöntemlerini birlikte planlayın.</h2>
            <div className="mt-8 grid gap-3">
              {service.relatedServices.map((item) => <Link key={item.href} href={item.href} className="border border-ink/10 bg-white p-5 font-semibold text-ink transition hover:border-bronze hover:text-bronze">{item.label} →</Link>)}
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-ink/10 bg-white/45 px-5 py-20 md:px-8 md:py-24">
        <div className="mx-auto max-w-5xl">
          <p className="text-xs font-semibold uppercase tracking-brand text-bronze">İstanbul ve Türkiye</p>
          <h2 className="mt-7 font-display text-4xl leading-tight text-ink md:text-5xl">İstanbul&apos;da üretim, Türkiye genelinde proje desteği.</h2>
          <p className="mt-7 max-w-3xl leading-8 text-ink/65">Ardıç Design & Fabrication, Ataşehir&apos;deki atölyesinde üretim yapar. Projenin kapsamı, saha koşulları ve takvimi uygun olduğunda İstanbul dışına sevkiyat ve montaj koordinasyonu sağlanabilir.</p>
        </div>
      </section>

      <section className="px-5 py-20 md:px-8 md:py-28">
        <div className="mx-auto max-w-5xl">
          <p className="text-xs font-semibold uppercase tracking-brand text-bronze">Sık Sorulan Sorular</p>
          <h2 className="mt-7 font-display text-4xl leading-tight text-ink md:text-5xl">{service.title} hakkında merak edilenler</h2>
          <div className="mt-10 grid gap-px bg-ink/10">
            {service.faqs.map((faq) => (
              <article key={faq.question} className="bg-porcelain p-7 md:p-9">
                <h3 className="text-xl font-semibold leading-tight text-ink">{faq.question}</h3>
                <p className="mt-4 leading-8 text-ink/65">{faq.answer}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-ink px-5 py-20 text-porcelain md:px-8 md:py-24">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-8 lg:flex-row lg:items-end">
          <div>
            <p className="text-xs font-semibold uppercase tracking-brand text-bronze">Projenizi Konuşalım</p>
            <h2 className="mt-6 max-w-3xl font-display text-4xl leading-tight md:text-5xl">Ölçüleri, kullanım alanını ve hedeflediğiniz sonucu paylaşın.</h2>
          </div>
          <Link href="/contact" className="w-fit border border-bronze px-6 py-4 text-xs font-semibold uppercase tracking-brand transition hover:bg-bronze hover:text-ink">Teklif Talebi Oluşturun</Link>
        </div>
      </section>
    </main>
  );
}
