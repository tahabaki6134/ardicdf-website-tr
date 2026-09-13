import { ContactPageContent } from "@/components/contact-page-content";
import { ContactForm } from "@/components/contact-form";
import { manufacturingMetadata } from "@/lib/manufacturing-meta";
export const metadata = manufacturingMetadata("Teklif İste · Özel Üretim", "Mobilya, cephe ve özel imalat projeniz için açıklama, çizim ve fotoğraf paylaşın. İstanbul’da projeden montaja üretim.", { en: "/contact", tr: "/contact" }, "tr");
export default function ContactPage({ searchParams }: { searchParams: { method?: string | string[]; alternative?: string | string[] } }) {
  const method = typeof searchParams.method === "string" ? searchParams.method : "";
  const alternative = typeof searchParams.alternative === "string" && searchParams.alternative !== method ? searchParams.alternative : "";
  return <ContactPageContent><ContactForm key={`${method}:${alternative}`} initialMethod={method} initialAlternative={alternative} /></ContactPageContent>;
}
