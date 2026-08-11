import Link from "next/link";
import { siteUrl } from "@/lib/seo";

type BreadcrumbItem = {
  label: string;
  href: string;
};

export function Breadcrumbs({ items }: { items: BreadcrumbItem[] }) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.label,
      item: new URL(item.href, siteUrl).toString()
    }))
  };

  return (
    <>
      <nav aria-label="Sayfa yolu" className="text-sm text-ink/55">
        <ol className="flex flex-wrap items-center gap-2">
          {items.map((item, index) => {
            const isCurrent = index === items.length - 1;
            return (
              <li key={item.href} className="flex items-center gap-2">
                {index > 0 ? <span aria-hidden="true">/</span> : null}
                {isCurrent ? (
                  <span aria-current="page" className="text-ink/75">
                    {item.label}
                  </span>
                ) : (
                  <Link href={item.href} className="transition hover:text-bronze">
                    {item.label}
                  </Link>
                )}
              </li>
            );
          })}
        </ol>
      </nav>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
    </>
  );
}
