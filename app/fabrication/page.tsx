import { ProjectDelivery } from "@/components/project-delivery";
import Image from "next/image";
import Link from "next/link";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Üretim",
  description:
    "İstanbul’da epoksi döküm, karbon fiber elle serme ve vakum uygulamaları, CNC ve kompozit imalatı. Mobilya ve dış cephe elemanlarında projeden montajlı teslime üretim.",
  path: "/fabrication"
});

const capabilities = [
  {
    number: "01",
    title: "CNC Üretim",
    copy: "Özel mimari ve heykelsi üretimler için hassas kesilmiş parçalar, rölyefler ve altyapılar."
  },
  {
    number: "02",
    title: "EPS / XPS İşleme",
    copy: "Büyük dekor formları, organik yapılar ve montaja hazır altyapılar için hafif köpük şekillendirme."
  },
  {
    number: "03",
    title: "Heykel Üretimi",
    copy: "Heykel, kaplama, boya ve yüzey bitirme süreçleriyle üretilen karakterler, organik formlar ve özel objeler."
  },
  {
    number: "04",
    title: "Dekoratif Mimari Elemanlar",
    copy: "Projeye göre üretilen kolonlar, başlıklar, rölyefler, süslemeler ve cephe detayları."
  },
  {
    number: "05",
    title: "Kalıp Üretimi",
    copy: "Güvenilir üretim, tutarlı detay ve kompozit döküm için tekrarlanabilir kalıp sistemleri."
  },
  {
    number: "06",
    title: "Polyester Döküm",
    copy: "Tekrarlanabilir kalite gerektiren dekoratif, tematik ve mimari uygulamalar için dayanıklı kompozit döküm."
  },
  {
    number: "07",
    title: "Büyük Ölçekli Üretim",
    copy: "Üretim, taşıma, birleştirme ve saha kullanımı planlanmış büyük objeler ve mekan uygulamaları."
  },
  {
    number: "08",
    title: "3D Baskı Teknolojisi",
    copy: "Özel objeler ve üretim çalışmaları için hızlı prototipleme ve hassas detay desteği."
  },
  {
    number: "09",
    title: "Epoksi Reçine Dökümü",
    copy: "Şeffaf, renkli ve dolgulu dökümler; özel objeler, masif ahşapla birleşen masa tablaları ve mobilya detayları. Kalıp, döküm kalınlığı, kürlenme ve son yüzeyi reçineye göre planlarız."
  },
  {
    number: "10",
    title: "Karbon Fiber: Elle Serme, Torbalama ve İnfüzyon",
    copy: "Karbon parça ve kalıplarda elle serme, vakum torbalama ve vakum infüzyonu ayrı üretim seçenekleri olarak kullanırız. Hazırlık, reçine kontrolü ve maliyet farklarıyla projeye uygun yöntemi seçeriz."
  },
  {
    number: "11",
    title: "Ahşap, CNC ve Komple Mobilya",
    copy: "Masif kapak ve CNC parçalardan; gövde, raf, çekmece ve donanımıyla komple dolaplara, sabit ve hareketli mobilyalara üretim. Çizim, yüzey bitirme, sevkiyat ve montajı birlikte üstlenebiliriz."
  }
];

const workflow = [
  "Konsept Geliştirme",
  "Dijital Modelleme",
  "Üretim",
  "Yüzey Bitirme ve Kaplama",
  "Montaj"
];

const infrastructure = [
  "CNC İşleme Sistemleri",
  "EPS / XPS İşleme Alanı",
  "Heykel Atölyesi",
  "Kalıp Üretim Bölümü",
  "Polyester Döküm Alanı",
  "3D Baskı Laboratuvarı",
  "Yüzey Bitirme ve Boya Alanı",
  "Montaj ve Birleştirme Ekibi"
];

const projectTypes = [
  {
    title: "Tema Parklar",
    copy: "Kalıcı ziyaretçi deneyimleri için üretilen etkileyici dekor elemanları."
  },
  {
    title: "Otel ve Tatil Köyleri",
    copy: "Konaklama mekanları için özel objeler ve atmosfer oluşturan detaylar."
  },
  {
    title: "Perakende Mekanları",
    copy: "Marka odaklı sergilemeler, donatılar ve ticari uygulamalar."
  },
  {
    title: "Müze ve Kültür Mekanları",
    copy: "Hassasiyetle üretilen anlatı objeleri ve kültürel mekanlar."
  },
  {
    title: "Kamusal Uygulamalar",
    copy: "Görünürlük, dayanım ve saha kullanımı için planlanan büyük ölçekli işler."
  },
  {
    title: "Marka Deneyimleri",
    copy: "Güçlü kimliğe sahip tanıtım objeleri ve mekansal uygulamalar."
  },
  {
    title: "Karakter Heykelleri",
    copy: "Tematik mekanlar için etkileyici figürler, maskotlar ve heykelsi formlar."
  },
  {
    title: "Mimari Dekor",
    copy: "Projeye özel kolonlar, rölyefler, süslemeler ve dekoratif yüzeyler."
  }
];

const scaleStats = [
  "12+ Yıllık Üretim Deneyimi",
  "600 m² Kapalı Alan",
  "400 m² Açık Üretim Alanı",
  "6 Endüstriyel 3D Yazıcı",
  "Çoklu CNC Üretim Sistemleri",
  "Kendi Heykel Ekibimiz",
  "Uçtan Uca Proje Teslimi"
];

export default function FabricationPage() {
  return (
    <main>
      <div className="mx-auto max-w-7xl px-5 pt-8 md:px-8"><Link href="/services" className="text-link">Malzeme seçimi için imalat yöntemlerini ve maliyet farklarını inceleyin</Link></div>
      <section className="px-5 py-20 md:px-8 md:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.82fr_1.18fr] lg:items-center">
          <div>
            <p className="text-xs font-semibold uppercase tracking-brand text-bronze">
              Üretim
            </p>
            <h1 className="mt-8 max-w-2xl font-display text-5xl leading-[1.02] text-ink md:text-7xl">
              Fikirlerin Fiziksel Objeye Dönüştüğü Yer.
            </h1>
            <p className="mt-8 max-w-xl text-base leading-8 text-ink/65 md:text-lg md:leading-9">
              Bir EPSLAM şirketi olan Ardıç; dijital modelleme, CNC, EPS/XPS işleme, heykel,
              kalıp, polyester döküm, yüzey bitirme, boya, birleştirme ve montajı tek çatı altında buluşturur.
            </p>
            <div className="mt-9 h-px w-16 bg-bronze" />
          </div>

          <div className="relative min-h-[360px] overflow-hidden border border-ink/10 bg-ink shadow-soft md:min-h-[560px]">
            <Image
              src="/home/production-columns.png"
              alt="Dekoratif mimari kolonların üretildiği Ardıç atölyesi"
              fill
              priority
              sizes="(min-width: 1024px) 58vw, 100vw"
              className="object-cover"
              style={{ objectPosition: "52% 50%" }}
            />
          </div>
        </div>
      </section>

      <section className="border-y border-ink/10 bg-white/45 px-5 py-20 md:px-8 md:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-brand text-bronze">
              Üretim Kabiliyetleri
            </p>
            <h2 className="mt-7 font-display text-4xl leading-tight text-ink md:text-5xl">
              Özel fiziksel üretimler için entegre altyapı.
            </h2>
            <p className="mt-6 max-w-2xl leading-8 text-ink/60">
              EPSLAM üretim altyapısı ve uzun yıllara dayanan aile deneyimiyle atölyemiz;
              üretilebilir detay, kontrollü yüzey ve koordineli teslimat bekleyen projelere hizmet verir.
            </p>
          </div>

          <div className="mt-12 grid gap-px bg-ink/10 sm:grid-cols-2 lg:grid-cols-4">
            {capabilities.map((capability) => (
              <article
                key={capability.title}
                className="flex min-h-72 flex-col bg-porcelain p-7 md:p-8"
              >
                <p className="font-display text-4xl leading-none text-bronze/75">
                  {capability.number}
                </p>
                <h3 className="mt-9 max-w-[13rem] text-xl font-semibold leading-tight text-ink">
                  {capability.title}
                </h3>
                <div className="mt-5 h-px w-12 bg-bronze" />
                <p className="mt-6 text-sm leading-7 text-ink/60">{capability.copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-20 md:px-8 md:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.75fr_1.25fr] lg:items-start">
          <div>
            <p className="text-xs font-semibold uppercase tracking-brand text-bronze">
              Üretim Akışı
            </p>
            <h2 className="mt-7 max-w-lg font-display text-4xl leading-tight text-ink md:text-5xl">
              Fikirden montaja kontrollü bir yol.
            </h2>
            <p className="mt-7 max-w-md leading-8 text-ink/60">
              Her aşama nihai ölçek, yüzey, kaplama sistemi, taşıma, birleştirme sırası ve saha
              koşulları dikkate alınarak geliştirilir.
            </p>
          </div>

          <div className="grid gap-px bg-ink/10 md:grid-cols-5">
            {workflow.map((step, index) => (
              <article key={step} className="relative min-h-44 bg-porcelain p-6">
                <p className="text-xs font-semibold uppercase tracking-brand text-bronze">
                  {`${index + 1}`.padStart(2, "0")}
                </p>
                <h3 className="mt-8 text-lg font-semibold leading-tight text-ink">{step}</h3>
                {index < workflow.length - 1 && (
                  <span className="absolute bottom-6 right-6 hidden text-2xl text-bronze/65 md:block">
                    →
                  </span>
                )}
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-ink/10 bg-white/45 px-5 py-20 md:px-8 md:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.92fr_1.08fr] lg:items-center">
          <div>
            <p className="text-xs font-semibold uppercase tracking-brand text-bronze">
              Katmanlı Üretim
            </p>
            <h2 className="mt-7 max-w-2xl font-display text-4xl leading-tight text-ink md:text-5xl">
              Büyük Format Endüstriyel 3D Baskı
            </h2>
            <p className="mt-7 max-w-2xl leading-8 text-ink/65">
              Atölyemizde iki adet 80×80×80 cm, üç adet 40×40×40 cm ve bir adet
              100×100×100 cm üretim hacmine sahip 3D yazıcı bulunur. Bu altyapı; prototip,
              heykelsi form, mimari detay, kalıp, sergileme objesi ve büyük tasarım parçalarının
              hassas ve esnek biçimde üretilmesini sağlar.
            </p>
            <p className="mt-6 max-w-xl leading-8 text-ink/60">
              Konsept modellerinden büyük format parçalara kadar 3D baskı sürecimiz hem tasarım
              geliştirmeyi hem de nihai üretim ihtiyaçlarını destekler.
            </p>
          </div>

          <div className="grid gap-px bg-ink/10 sm:grid-cols-3">
            {[
              { value: "2", label: "80×80×80 cm Makine" },
              { value: "3", label: "40×40×40 cm Makine" },
              { value: "1", label: "100×100×100 cm Makine" }
            ].map((item) => (
              <article key={item.label} className="flex min-h-52 flex-col bg-porcelain p-7 md:p-8">
                <p className="font-display text-5xl leading-none text-bronze">{item.value}</p>
                <div className="mt-8 h-px w-12 bg-bronze" />
                <h3 className="mt-6 text-sm font-semibold uppercase leading-6 tracking-[0.14em] text-ink">
                  {item.label}
                </h3>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-ink px-5 py-20 text-porcelain md:px-8 md:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-stretch">
          <div className="relative min-h-[420px] overflow-hidden border border-bronze/20 bg-porcelain/5 shadow-soft">
            <Image
              src="/projects/portfolio/cnc-manufacturing-processes/cnc-manufacturing-processes-01.jpeg"
              alt="Ardıç atölyesinde CNC üretim süreci"
              fill
              sizes="(min-width: 1024px) 54vw, 100vw"
              className="object-cover brightness-90 contrast-110 saturate-110"
              style={{ objectPosition: "50% 42%" }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/55 via-ink/5 to-transparent" />
            <div className="absolute inset-0 ring-1 ring-inset ring-porcelain/10" />
          </div>

          <div className="flex flex-col justify-center">
            <p className="text-xs font-semibold uppercase tracking-brand text-bronze">
              Entegre Tesis
            </p>
            <h2 className="mt-7 max-w-xl font-display text-4xl leading-tight text-porcelain md:text-5xl">
              Atölye Altyapısı
            </h2>
            <p className="mt-7 max-w-xl leading-8 text-porcelain/65">
              Ardıç; dijital üretim, heykel, kalıp, polyester döküm, yüzey bitirme, boya,
              birleştirme ve montajın tek çatı altında koordine edildiği EPSLAM altyapısıyla çalışır.
            </p>
            <div className="mt-10 grid gap-px bg-porcelain/12 sm:grid-cols-2">
              {infrastructure.map((item) => (
                <div key={item} className="bg-ink p-5">
                  <p className="text-sm font-semibold uppercase tracking-[0.12em] text-porcelain">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="px-5 py-20 md:px-8 md:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 border-b border-ink/10 pb-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
            <div>
              <p className="text-xs font-semibold uppercase tracking-brand text-bronze">
                Proje Türleri
              </p>
              <h2 className="mt-7 max-w-xl font-display text-4xl leading-tight text-ink md:text-5xl">
                Ürettiğimiz Projeler
              </h2>
            </div>
            <p className="max-w-xl leading-8 text-ink/60">
              Ardıç; ticari, kültürel, konaklama ve eğlence alanlarında özel üretim, dayanıklı
              objeler, etkileyici yüzeyler ve montaja hazır bileşenler gerektiren projelere hizmet verir.
            </p>
          </div>

          <div className="mt-12 grid gap-px bg-ink/10 sm:grid-cols-2 lg:grid-cols-4">
            {projectTypes.map((type) => (
              <article key={type.title} className="flex min-h-56 flex-col bg-porcelain p-7 md:p-8">
                <h3 className="font-display text-3xl leading-tight text-ink">{type.title}</h3>
                <div className="mt-6 h-px w-12 bg-bronze" />
                <p className="mt-6 text-sm leading-7 text-ink/60">{type.copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-ink/10 bg-white/45 px-5 py-20 md:px-8 md:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 lg:grid-cols-[0.78fr_1.22fr] lg:items-end">
            <div>
              <p className="text-xs font-semibold uppercase tracking-brand text-bronze">
                Ölçekli Üretim
              </p>
              <h2 className="mt-7 max-w-xl font-display text-4xl leading-tight text-ink md:text-5xl">
                Büyük Ölçekte Üretim
              </h2>
            </div>
            <p className="max-w-xl leading-8 text-ink/60">
              Ardıç, konsept modellerinden tam ölçekli uygulamalara kadar özel objeler,
              mimari yüzeyler, heykeller ve sahaya hazır mekan elemanları üretir.
            </p>
          </div>

          <div className="mt-12 grid gap-px bg-ink/10 sm:grid-cols-2 lg:grid-cols-3">
            {scaleStats.map((stat, index) => (
              <article key={stat} className="flex min-h-48 flex-col bg-porcelain p-7 md:p-8">
                <p className="text-xs font-semibold uppercase tracking-brand text-bronze">
                  {`${index + 1}`.padStart(2, "0")}
                </p>
                <h3 className="mt-8 font-display text-3xl leading-tight text-ink">{stat}</h3>
                <div className="mt-auto pt-7">
                  <div className="h-px w-12 bg-bronze" />
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-20 md:px-8 md:py-28">
        <div className="mx-auto grid max-w-7xl overflow-hidden border border-ink/10 bg-ink lg:grid-cols-[0.95fr_1.05fr]">
          <div className="relative min-h-[320px]">
            <Image
              src="/services/sculpture-elephant-wide.jpeg"
              alt="Akılda kalıcı mekanlar için büyük ölçekli heykel üretimi"
              fill
              sizes="(min-width: 1024px) 48vw, 100vw"
              className="object-cover"
              style={{ objectPosition: "50% 45%" }}
            />
            <div className="absolute inset-0 bg-ink/35" />
          </div>
          <div className="flex flex-col justify-center p-8 md:p-12">
            <p className="text-xs font-semibold uppercase tracking-brand text-bronze">
              Üretime Başlayın
            </p>
            <h2 className="mt-7 max-w-xl font-display text-4xl leading-tight text-porcelain md:text-5xl">
              Akılda Kalıcı Bir Şey Üretelim.
            </h2>
            <p className="mt-6 max-w-xl leading-8 text-porcelain/70">
              Konseptinizi, objenizi veya mekanınızı; tasarım niyetini ve atölye uygulamasını
              birlikte anlayan bir ekiple üretime taşıyın.
            </p>
            <Link
              href="/contact"
              className="mt-9 inline-flex w-fit border border-bronze px-6 py-4 text-xs font-semibold uppercase tracking-brand text-porcelain transition hover:bg-bronze hover:text-ink"
            >
              Projenizi Başlatın
            </Link>
          </div>
        </div>
      </section>
    <ProjectDelivery lang="tr" />
    </main>
  );
}
