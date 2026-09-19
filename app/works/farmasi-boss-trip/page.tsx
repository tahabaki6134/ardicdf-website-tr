import Image from "next/image";
import Link from "next/link";
import { SectionHeading } from "@/components/section-heading";
import { getProject, projectHref, enquiryHref } from "@/lib/projects";
import { createPageMetadata } from "@/lib/seo";

const project = getProject("farmasi-boss-trip")!;
const quote = enquiryHref([project.id]) + "#brief";
export const metadata = {
  ...createPageMetadata({ title: project.title, description: project.description, path: projectHref(project) }),
  openGraph: { title: project.title, description: project.description, url: projectHref(project), locale: "tr_TR", type: "article" as const, images: [{ url: project.image, alt: project.alt }] },
  twitter: { card: "summary_large_image" as const, title: project.title, description: project.description, images: [project.image] }
};

export default function FarmasiProjectPage() {
  const [cover, ...details] = project.gallery!;
  function figure(item: typeof cover, priority = false) {
    return <figure key={item.src}>
      <a href={item.src} target="_blank" rel="noopener" aria-label={item.alt} className="group block">
        <Image src={item.src} alt={item.alt} width={item.width} height={item.height} priority={priority}
          sizes={priority ? "(min-width: 1024px) 1000px, 90vw" : "(min-width: 640px) 45vw, 90vw"}
          className="h-auto max-h-[78vh] w-full bg-smoke/20 object-contain transition group-hover:opacity-90" />
      </a>
      <figcaption className="mt-3 border-b border-ink/15 pb-4 text-sm leading-7 text-ink/70">{item.caption} <span aria-hidden="true">↗</span></figcaption>
    </figure>;
  }
  return <main className="page-shell">
    <Link href="/works" className="text-link mb-6 inline-block">Tüm projeler</Link>
    <SectionHeading eyebrow="Proje detayları" headingTag="h1" title={project.title} copy={project.description} />
    <Link href={quote} className="button-primary mt-6">Benzer bir proje için teklif iste</Link>
    <div className="mt-8 max-w-5xl">
      {figure(cover, true)}
      <div className="mt-7 grid items-start gap-7 sm:grid-cols-2">{details.map(item => figure(item))}</div>
      <p className="mt-6 max-w-3xl text-sm leading-7 text-ink/65">{project.note}</p>
    </div>
    <div className="mt-8 max-w-3xl space-y-3 leading-8 text-ink/70">{project.details.map(paragraph => <p key={paragraph}>{paragraph}</p>)}</div>
    <section className="mt-10 max-w-3xl border-t border-ink/15 pt-8">
      <h2 className="font-display text-3xl">Benzer bir projeyi birlikte planlayalım.</h2>
      <ul className="mt-5 list-disc space-y-3 pl-5 leading-7 text-ink/75">{project.briefChecklist.map(item => <li key={item}>{item}</li>)}</ul>
      <Link href={quote} className="button-primary mt-6">Projem için teklif iste</Link>
    </section>
  </main>;
}
