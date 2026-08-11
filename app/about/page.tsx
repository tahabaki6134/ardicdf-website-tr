import Image from "next/image";
import Link from "next/link";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Hakkımızda",
  description:
    "Mimari düşünceyi aile üretim deneyimi, heykel, CNC/EPS/XPS işleme, kalıp, döküm ve montajla birleştiren Ardıç'ı tanıyın.",
  path: "/about"
});

const approach = [
  {
    title: "Konsept Geliştirme",
    copy: "Proje briefini üretilebilir bir yöne dönüştüren yaratıcı ve teknik başlangıç.",
    icon: "concept"
  },
  {
    title: "Üretim",
    copy: "CNC, heykel, kalıp, döküm ve malzeme uygulamalarının atölye kabiliyetiyle koordinasyonu.",
    icon: "production"
  },
  {
    title: "Montaj",
    copy: "Saha koşullarına göre planlanan birleştirme, montaj ve teslimat yönetimi.",
    icon: "installation"
  },
  {
    title: "Deneyim",
    copy: "Mekanlara güçlü bir kimlik kazandıran kalıcı ve akılda kalan sonuçlar.",
    icon: "experience"
  }
];

const capabilities = [
  {
    title: "CNC Üretim",
    copy: "Mimari yüzeyler, heykel altyapıları ve üretime hazır formlar için hassas işlenmiş parçalar."
  },
  {
    title: "EPS / XPS İşleme",
    copy: "Dekor yapıları, organik formlar ve büyük ölçekli işler için hafif köpük şekillendirme."
  },
  {
    title: "Heykel Üretimi",
    copy: "Dayanıklı mekanlar için geliştirilen özel figürler, organik formlar ve detaylı sanatsal üretim."
  },
  {
    title: "Dekoratif Mimari Elemanlar",
    copy: "Kolonlar, başlıklar, süslemeler ve projeye özel mimari detaylar."
  },
  {
    title: "Kalıp Üretimi",
    copy: "Tekrarlanabilir ve kontrollü üretim için dayanıklı kalıp sistemleri."
  },
  {
    title: "Polyester Döküm",
    copy: "Dayanıklı dekoratif, tematik ve mimari parçalar için kompozit döküm çözümleri."
  },
  {
    title: "Büyük Ölçekli Üretim",
    copy: "Atölye hassasiyetiyle üretilen büyük objeler ve mekan elemanları."
  },
  {
    title: "3D Baskı Teknolojisi",
    copy: "Özel üretim için hızlı prototipleme ve hassas detay desteği."
  }
];

const team: Array<{
  name: string;
  initials: string;
  role: string;
  copy: string;
  photo?: string;
}> = [
  {
    name: "Yusuf Baki",
    initials: "YB",
    role: "Kurucu ve Üretim Direktörü",
    copy: "Üretim stratejisi, atölye yönetimi ve büyük ölçekli proje uygulamalarından sorumludur."
  },
  {
    name: "Taha Baki",
    initials: "TB",
    role: "Mimarlık, Strateji ve Proje Geliştirme",
    copy: "Mimari yön, proje stratejisi, iş geliştirme ve müşteri ilişkilerinden sorumludur."
  },
  {
    name: "Şiba Baki",
    initials: "SB",
    role: "İç Mimarlık ve Sunum",
    copy: "İç mekan tasarımı, sunum geliştirme ve yaratıcı proje anlatımından sorumludur."
  },
  {
    name: "Rasim Gül",
    initials: "RG",
    role: "Görsel Sanatlar Uzmanı",
    copy: "Sanatsal detay, görsel geliştirme ve yüzey bitirme tekniklerinde uzmandır."
  },
  {
    name: "Gençağa Dilli",
    initials: "GD",
    role: "Heykeltıraş",
    copy: "Heykel tasarımı, karakter üretimi ve organik form geliştirmede uzmandır."
  },
  {
    name: "Fatih Dilli",
    initials: "FD",
    role: "Sanat Boyacısı",
    copy: "Sanatsal boyama, ileri renklendirme teknikleri ve özel efektlerde uzmandır.",
    photo: "/team/fatih-dilli.png"
  }
];

const reasons = [
  "Entegre üretim altyapısına sahip bir EPSLAM şirketi",
  "Tek çatı altında tasarım ve üretim",
  "Özgün ve projeye özel çözümler",
  "Üretim ve inşaatta uzun yıllara dayanan aile deneyimi",
  "Hızlı prototipleme ve esnek üretim",
  "Montaj ve saha uygulama kabiliyeti"
];

function ApproachIcon({ type }: { type: string }) {
  const common = {
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.4,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const
  };

  return (
    <svg viewBox="0 0 48 48" aria-hidden="true" className="h-12 w-12 text-bronze">
      {type === "concept" && (
        <>
          <path {...common} d="M16 34c-4-3-6-7-6-12a14 14 0 0 1 28 0c0 5-2 9-6 12" />
          <path {...common} d="M18 38h12M20 42h8M20 24l4-7 4 7M18 28h12" />
        </>
      )}
      {type === "production" && (
        <>
          <path {...common} d="M12 17 24 10l12 7v14l-12 7-12-7Z" />
          <path {...common} d="m12 17 12 7 12-7M24 24v14" />
        </>
      )}
      {type === "installation" && (
        <>
          <path {...common} d="m15 15 18 18M33 15 15 33" />
          <path {...common} d="M12 12h8v8h-8zM28 12h8v8h-8zM12 28h8v8h-8zM28 28h8v8h-8z" />
        </>
      )}
      {type === "experience" && (
        <>
          <circle {...common} cx="24" cy="22" r="10" />
          <path {...common} d="M17 36h14M20 32l-3 8M28 32l3 8M18 22h12M24 12v20" />
        </>
      )}
    </svg>
  );
}

export default function AboutPage() {
  return (
    <main>
      <section className="px-5 py-20 md:px-8 md:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.82fr_1.18fr] lg:items-center">
          <div>
            <p className="text-xs font-semibold uppercase tracking-brand text-bronze">Hakkımızda</p>
            <h1 className="mt-8 max-w-2xl font-display text-5xl leading-[1.02] text-ink md:text-7xl">
              Fikirden Üretime, Üretimden Deneyime.
            </h1>
            <p className="mt-8 max-w-xl text-base leading-8 text-ink/65 md:text-lg md:leading-9">
              Ardıç, mimari düşünceyi, iç mekan tasarımını, heykeli, dijital üretim
              teknolojilerini ve tematik dekor imalatını tek çatı altında buluşturan bir
              EPSLAM şirketi ve tasarım-üretim atölyesidir.
            </p>
            <div className="mt-9 h-px w-16 bg-bronze" />
          </div>

          <div className="relative min-h-[360px] overflow-hidden border border-ink/10 bg-ink shadow-soft md:min-h-[560px]">
            <Image
              src="/home/production-columns.png"
              alt="Ardıç üretim atölyesinde dekoratif mimari eleman imalatı"
              fill
              priority
              sizes="(min-width: 1024px) 58vw, 100vw"
              className="object-cover"
              style={{ objectPosition: "52% 50%" }}
            />
          </div>
        </div>
      </section>

      <section className="border-y border-ink/10 bg-white/45 px-5 py-16 md:px-8 md:py-20">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.75fr_1.25fr]">
          <div className="border-b border-ink/10 pb-10 lg:border-b-0 lg:border-r lg:pb-0 lg:pr-12">
            <p className="text-xs font-semibold uppercase tracking-brand text-bronze">
              Yaklaşımımız
            </p>
            <h2 className="mt-7 max-w-md font-display text-4xl leading-tight text-ink md:text-5xl">
              Tasarım, Üretim ve Montaj.
            </h2>
            <p className="mt-7 max-w-md leading-8 text-ink/60">
              Üretim ve inşaat alanındaki uzun yıllara dayanan aile deneyimimizle konsept
              geliştirmeden imalata, yüzey bitişinden birleştirme ve saha montajına kadar tüm
              süreci kendi ekibimiz ve altyapımızla yönetiyoruz.
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 xl:grid-cols-4">
            {approach.map((item) => (
              <article key={item.title} className="flex flex-col">
                <ApproachIcon type={item.icon} />
                <h3 className="mt-8 text-lg font-semibold text-ink">{item.title}</h3>
                <p className="mt-4 leading-7 text-ink/60">{item.copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 pb-16 pt-24 md:px-8 md:pb-24 md:pt-32">
        <div className="mx-auto max-w-7xl">
          <p className="text-xs font-semibold uppercase tracking-brand text-bronze">
            Üretim Kabiliyetlerimiz
          </p>
          <div className="mt-10 grid gap-px bg-ink/10 sm:grid-cols-2 lg:grid-cols-4">
            {capabilities.map((capability, index) => (
              <article
                key={capability.title}
                className="flex min-h-64 flex-col bg-porcelain p-6 md:p-7"
              >
                <p className="font-display text-4xl leading-none text-bronze/75">
                  {`${index + 1}`.padStart(2, "0")}
                </p>
                <h3 className="mt-8 max-w-[12rem] text-lg font-semibold leading-tight text-ink">
                  {capability.title}
                </h3>
                <div className="mt-5 h-px w-12 bg-bronze" />
                <p className="mt-5 text-sm leading-7 text-ink/60">{capability.copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-ink/10 bg-white/45 px-5 py-16 md:px-8 md:py-20">
        <div className="mx-auto max-w-7xl">
          <p className="text-xs font-semibold uppercase tracking-brand text-bronze">Ekibimiz</p>
          <div className="mt-10 grid gap-px bg-ink/10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
            {team.map((member) => (
              <article key={member.name} className="flex min-h-full flex-col bg-porcelain p-6">
                <div className="relative flex h-28 w-24 items-center justify-center overflow-hidden border border-bronze/25 bg-white shadow-soft">
                  {member.photo ? (
                    <Image
                      src={member.photo}
                      alt={`${member.name} portrait`}
                      fill
                      sizes="96px"
                      className="object-cover"
                      style={{ objectPosition: "50% 32%" }}
                    />
                  ) : (
                    <>
                      <div className="absolute inset-2 border border-ink/5" />
                      <span className="relative font-display text-3xl tracking-[0.16em] text-bronze">
                        {member.initials}
                      </span>
                    </>
                  )}
                </div>
                <h3 className="mt-7 font-display text-2xl leading-tight text-ink">{member.name}</h3>
                <p className="mt-3 text-sm font-semibold leading-6 text-ink">{member.role}</p>
                <div className="mt-5 h-px w-10 bg-bronze" />
                <p className="mt-5 text-sm leading-7 text-ink/60">{member.copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-16 md:px-8 md:py-20">
        <div className="mx-auto grid max-w-7xl overflow-hidden border border-ink/10 bg-porcelain lg:grid-cols-[0.82fr_1.18fr]">
          <div className="p-8 md:p-12">
            <p className="text-xs font-semibold uppercase tracking-brand text-bronze">
              Neden Ardıç?
            </p>
            <ul className="mt-8 space-y-5">
              {reasons.map((reason) => (
                <li key={reason} className="flex gap-4 text-sm leading-7 text-ink/70 md:text-base">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-bronze text-xs text-bronze">
                    ✓
                  </span>
                  <span>{reason}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="relative min-h-[360px] bg-ink p-8 md:p-12">
            <Image
              src="/home/brand-story-lobby.jpeg"
              alt="Ardıç brand story inside a premium space with natural forms"
              fill
              sizes="(min-width: 1024px) 58vw, 100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-ink/62" />
            <div className="relative flex h-full flex-col justify-center">
              <h2 className="max-w-xl font-display text-4xl leading-tight text-porcelain md:text-5xl">
                Birlikte Unutulmaz Mekanlar Üretelim.
              </h2>
              <p className="mt-6 max-w-xl leading-8 text-porcelain/75">
                Fikirlerinizi gerçeğe dönüştürmek için bizimle iletişime geçin.
              </p>
              <Link
                href="/contact"
                className="mt-9 inline-flex w-fit border border-bronze px-6 py-4 text-xs font-semibold uppercase tracking-brand text-porcelain transition hover:bg-bronze hover:text-ink"
              >
                Projenizi Başlatın
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
