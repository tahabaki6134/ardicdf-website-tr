import Link from "next/link";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Gizlilik Politikası",
  description:
    "Ardıç Design & Fabrication proje talepleri, iletişim bilgileri, WhatsApp görüşmeleri ve gönderilen bilgiler için gizlilik açıklaması.",
  path: "/privacy"
});

const collectedData = [
  "ad soyad",
  "e-posta adresi",
  "telefon veya WhatsApp numarası",
  "firma adı",
  "proje türü",
  "proje konumu",
  "proje ölçeği veya kapsamı",
  "proje mesajı veya özeti"
];

export default function PrivacyPage() {
  return (
    <main>
      <section className="px-5 py-20 md:px-8 md:py-28">
        <div className="mx-auto max-w-4xl">
          <p className="text-xs font-semibold uppercase tracking-brand text-bronze">
            Gizlilik Politikası
          </p>
          <h1 className="mt-8 max-w-3xl font-display text-5xl leading-[1.02] text-ink md:text-7xl">
            Proje talebi bilgileriniz yalnızca isteğinize yanıt vermek için kullanılır.
          </h1>
          <p className="mt-8 text-lg leading-9 text-ink/65">
            Ardıç Design & Fabrication, proje taleplerini anlamak ve yanıtlamak için gerekli
            bilgileri toplar. Gönderilen bilgileri satmaz veya ilgisiz pazarlama sistemlerinde kullanmaz.
          </p>

          <div className="mt-14 grid gap-px bg-ink/10">
            <section className="bg-porcelain p-7 md:p-9">
              <h2 className="font-display text-3xl leading-tight text-ink">
                Aldığımız Bilgiler
              </h2>
              <p className="mt-5 leading-8 text-ink/65">
                Proje talep formunu gönderdiğinizde, e-posta, telefon veya WhatsApp üzerinden
                iletişime geçtiğinizde şu bilgileri alabiliriz:
              </p>
              <ul className="mt-6 grid gap-3 text-ink/70 sm:grid-cols-2">
                {collectedData.map((item) => (
                  <li key={item} className="border-l border-bronze pl-4 capitalize">
                    {item}
                  </li>
                ))}
              </ul>
            </section>

            <section className="bg-porcelain p-7 md:p-9">
              <h2 className="font-display text-3xl leading-tight text-ink">
                Bilgileri Nasıl Kullanıyoruz?
              </h2>
              <p className="mt-5 leading-8 text-ink/65">
                Bilgileri proje talebinizi değerlendirmek, tasarım ve üretim kapsamını anlamak,
                sonraki adımlar için sizinle iletişime geçmek ve proje görüşmelerini yürütmek için kullanırız.
              </p>
            </section>

            <section className="bg-porcelain p-7 md:p-9">
              <h2 className="font-display text-3xl leading-tight text-ink">
                Web Sitesi Analitiği
              </h2>
              <p className="mt-5 leading-8 text-ink/65">
                Ziyaretçiler için yararlı sayfaları ve iletişim yollarını anlamak amacıyla temel
                etkileşim analitiği kullanabiliriz. Bu veriler form mesajlarını, adları, e-posta
                adreslerini, telefon veya WhatsApp numaralarını içermez.
              </p>
            </section>

            <section className="bg-porcelain p-7 md:p-9">
              <h2 className="font-display text-3xl leading-tight text-ink">
                İletişim Kanalları
              </h2>
              <p className="mt-5 leading-8 text-ink/65">
                Telefon, e-posta veya WhatsApp ile iletişime geçerseniz görüşme seçtiğiniz kanal
                üzerinden devam edebilir. WhatsApp görüşmeleri ayrıca WhatsApp&apos;ın kendi gizlilik
                uygulamalarına tabidir.
              </p>
            </section>

            <section className="bg-porcelain p-7 md:p-9">
              <h2 className="font-display text-3xl leading-tight text-ink">
                İletişim
              </h2>
              <p className="mt-5 leading-8 text-ink/65">
                Gizlilik soruları veya talep bilgilerinizin silinmesi için bize şu adresten ulaşın:{" "}
                <Link
                  href="mailto:taaha.baaki@gmail.com"
                  className="font-semibold text-bronze transition hover:text-ink"
                >
                  taaha.baaki@gmail.com
                </Link>
                .
              </p>
            </section>
          </div>
        </div>
      </section>
    </main>
  );
}
