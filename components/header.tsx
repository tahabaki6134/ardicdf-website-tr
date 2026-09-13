"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const navigation = [
  { href: "/services", label: "İmalat" },
  { href: "/karsilastir", label: "Karşılaştır" },
  { href: "/works", label: "Projeler" },
  { href: "/fabrication", label: "Atölye" },
  { href: "/about", label: "Hakkımızda" }
];

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  useEffect(() => {
    setOpen(false);
  }, [pathname]);
  function links() {
    return navigation.map((item) => (
      <Link
        key={item.href}
        href={item.href}
        onClick={() => setOpen(false)}
        aria-current={
          pathname === item.href || pathname.startsWith(item.href + "/") ? "page" : undefined
        }
        className="min-h-11 py-3 text-base font-semibold text-ink/75 transition hover:text-bronze aria-[current=page]:text-bronze"
      >
        {item.label}
      </Link>
    ));
  }
  return (
    <header
      className="sticky top-0 z-50 border-b border-ink/15 bg-porcelain/95 backdrop-blur-xl"
      onKeyDown={(event) => {
        if (event.key === "Escape") {
          setOpen(false);
          document.getElementById("menu-toggle")?.focus();
        }
      }}
    >
      <div className="mx-auto flex max-w-[1440px] items-center justify-between gap-4 px-5 py-3 md:px-8">
        <Link
          href="/"
          aria-label="Ardıç ana sayfa"
          onClick={() => setOpen(false)}
          className="flex min-w-0 items-center gap-3"
        >
          <Image
            src="/logo-symbol.svg"
            alt=""
            width={60}
            height={60}
            priority
            className="h-12 w-12 shrink-0 md:h-14 md:w-14"
          />
          <span>
            <span className="block font-display text-3xl leading-none tracking-[0.15em]">
              ARDIÇ
            </span>
            <span className="mt-1 block text-sm text-ink/70">Design & Fabrication</span>
          </span>
        </Link>
        <nav aria-label="Ana menü" className="hidden items-center gap-6 xl:flex">
          {links()}
        </nav>
        <div className="flex items-center gap-4">
          <Link href="/contact" className="button-primary hidden lg:inline-flex">
            Teklif iste
          </Link>
          <button
            id="menu-toggle"
            type="button"
            aria-expanded={open}
            aria-controls="mobile-navigation"
            onClick={() => setOpen(!open)}
            className="min-h-11 border border-ink/25 px-3 text-sm font-semibold xl:hidden"
          >
            {open ? "Kapat" : "Menü"}
          </button>
        </div>
      </div>
      {open && (
        <nav
          id="mobile-navigation"
          aria-label="Mobil menü"
          className="grid max-h-[75dvh] overflow-y-auto border-t border-ink/15 px-5 py-4 xl:hidden"
        >
          {links()}
          <Link href="/concepts" className="py-3 font-semibold" onClick={() => setOpen(false)}>Konseptler</Link>
          <Link href="/live" className="py-3 font-semibold" onClick={() => setOpen(false)}>Canlı atölye</Link>
          <Link
            className="button-primary mt-3 justify-self-start"
            href="/contact"
            onClick={() => setOpen(false)}
          >
            Teklif iste
          </Link>
        </nav>
      )}
    </header>
  );
}
