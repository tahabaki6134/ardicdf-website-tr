const whatsappUrl =
  "https://wa.me/905436268969?text=Merhaba%20Ard%C4%B1%C3%A7%2C%20tasar%C4%B1m%20ve%20%C3%BCretim%20projem%20hakk%C4%B1nda%20g%C3%B6r%C3%BC%C5%9Fmek%20istiyorum";

export function FloatingWhatsAppButton() {
  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noreferrer"
      aria-label="Ardıç Design & Fabrication ile WhatsApp üzerinden iletişime geçin"
      data-track-location="floating"
      className="fixed bottom-5 right-5 z-50 inline-flex h-14 w-14 items-center justify-center rounded-full border border-bronze/70 bg-porcelain text-ink shadow-[0_18px_55px_rgba(17,17,17,0.28)] transition duration-300 hover:-translate-y-0.5 hover:border-bronze hover:bg-bronze hover:text-porcelain focus:outline-none focus:ring-2 focus:ring-bronze focus:ring-offset-2 focus:ring-offset-porcelain sm:bottom-7 sm:right-7 sm:h-auto sm:w-auto sm:gap-3 sm:rounded-full sm:px-6 sm:py-4"
    >
      <span
        aria-hidden="true"
        className="inline-flex h-6 w-6 items-center justify-center"
      >
        <svg
          viewBox="0 0 24 24"
          className="h-6 w-6"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M21 11.5a9 9 0 0 1-13.2 8L3 21l1.5-4.8A9 9 0 1 1 21 11.5Z" />
          <path d="M8 7.5c.5 4 4.5 8 8.5 8l1-2.2-3-1.3-1.1 1.2a9 9 0 0 1-3.6-3.6L11 8.5l-1.3-3Z" />
        </svg>
      </span>
      <span className="hidden text-xs font-bold uppercase tracking-[0.2em] sm:inline">
        WhatsApp
      </span>
    </a>
  );
}
