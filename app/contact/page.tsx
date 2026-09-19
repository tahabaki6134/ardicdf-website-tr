import { ContactPageContent } from "@/components/contact-page-content";
import { ContactForm } from "@/components/contact-form";
import { manufacturingMetadata } from "@/lib/manufacturing-meta";
import { parseSelectedProjects } from "@/lib/projects";
export const metadata = manufacturingMetadata("Teklif İste · Özel Üretim", "Mobilya, cephe ve özel imalat projeniz için açıklama, çizim ve fotoğraf paylaşın. İstanbul’da projeden montaja üretim.", { en: "/contact", tr: "/contact" }, "tr");
export default function ContactPage({ searchParams }: { searchParams: { method?: string | string[]; alternative?: string | string[]; selected?: string | string[] } }) {
  const method = typeof searchParams.method === "string" ? searchParams.method : "";
  const alternative = typeof searchParams.alternative === "string" && searchParams.alternative !== method ? searchParams.alternative : "";
  const selected = parseSelectedProjects(typeof searchParams.selected === "string" ? searchParams.selected : "");
  return <ContactPageContent><ContactForm key={`${method}:${alternative}:${selected.join(",")}`} initialMethod={method} initialAlternative={alternative} initialSelected={selected} /></ContactPageContent>;
}
