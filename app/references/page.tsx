import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Referanslar | Ardıç Design & Fabrication",
  description:
    "Ardıç Design & Fabrication'ın tamamlanan projelerini, müşterilerini ve iş referanslarını keşfedin.",
  path: "/references",
  absoluteTitle: true
});

const futureSections = [
  { id: "completed-projects", label: "Tamamlanan projeler" },
  { id: "clients", label: "Müşteriler" },
  { id: "brands", label: "Markalar" },
  { id: "industries", label: "Sektörler" },
  { id: "international-projects", label: "Uluslararası projeler" },
  { id: "certifications", label: "Sertifikalar" }
];

export default function ReferencesPage() {
  return (
    <main>
      <section className="px-5 py-20 md:px-8 md:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 border-b border-ink/10 pb-14 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
            <div>
              <p className="text-xs font-semibold uppercase tracking-brand text-bronze">
                Referanslar
              </p>
              <h1 className="mt-8 max-w-3xl font-display text-5xl leading-[1.02] text-ink md:text-7xl">
                Referanslar
              </h1>
            </div>
            <p className="max-w-2xl text-base leading-8 text-ink/65 md:text-lg md:leading-9">
              Tamamladığımız projeleri ve birlikte çalışma fırsatı bulduğumuz şirket ve
              kuruluşları keşfedin.
            </p>
          </div>
        </div>
      </section>

      <section className="border-y border-ink/10 bg-white/45 px-5 py-20 md:px-8 md:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-px bg-ink/10 lg:grid-cols-[0.78fr_1.22fr]">
            <div className="bg-porcelain p-7 md:p-10">
              <p className="text-xs font-semibold uppercase tracking-brand text-bronze">
                Yakında
              </p>
              <h2 className="mt-7 max-w-xl font-display text-4xl leading-tight text-ink md:text-5xl">
                Yakında
              </h2>
            </div>
            <div className="flex min-h-72 items-center bg-porcelain p-7 md:p-10">
              <p className="max-w-3xl text-base leading-8 text-ink/65 md:text-lg md:leading-9">
                Bu sayfada yakında tamamlanan projelerimiz, müşteri portföyümüz, iş ortaklarımız,
                hizmet verdiğimiz sektörler ve ek referans materyalleri yer alacaktır.
              </p>
            </div>
          </div>

          <div aria-hidden="true">
            {futureSections.map((section) => (
              <section
                key={section.id}
                id={section.id}
                aria-label={section.label}
                className="scroll-mt-32"
              />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
