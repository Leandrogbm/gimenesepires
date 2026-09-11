import { useEffect, useState } from "react";
import { Wordmark } from "./Logo";
import WhatsButton from "./WhatsButton";

const LINKS = [
  { href: "#atuacao", label: "Como ajudamos" },
  { href: "#sobre", label: "Advogados" },
  { href: "#diferenciais", label: "Por que a G&P" },
  { href: "#faq", label: "Dúvidas" },
  { href: "#contato", label: "Contato" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    const onKeyDown = (event) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("scroll", onScroll);
    window.addEventListener("keydown", onKeyDown);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("keydown", onKeyDown);
    };
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
        scrolled ? "bg-bg/95 backdrop-blur border-b border-line" : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-6xl px-6 md:px-10 flex items-center justify-between h-20">
        <a href="#topo" aria-label="Gimenes e Pires — Sociedade de Advogados, ir ao topo" className="hover:opacity-80">
          <Wordmark className="h-12 md:h-14" />
        </a>

        <nav className="hidden lg:flex items-center gap-6 xl:gap-9 font-body text-[13px] uppercase tracking-[0.14em] text-muted">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="hover:text-accent transition-colors focus-visible:text-accent"
            >
              {l.label}
            </a>
          ))}
          <WhatsButton size="sm">WhatsApp</WhatsButton>
        </nav>

        <button
          className="lg:hidden flex flex-col gap-1.5 w-8"
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          aria-expanded={open}
          aria-controls="menu-mobile"
          onClick={() => setOpen((v) => !v)}
        >
          <span className={`h-px bg-fg transition-transform ${open ? "translate-y-[7px] rotate-45" : ""}`} />
          <span className={`h-px bg-fg transition-opacity ${open ? "opacity-0" : ""}`} />
          <span className={`h-px bg-fg transition-transform ${open ? "-translate-y-[7px] -rotate-45" : ""}`} />
        </button>
      </div>

      {open && (
        <nav
          id="menu-mobile"
          className="lg:hidden bg-bg border-t border-line px-6 py-6 flex flex-col gap-5 font-body uppercase tracking-[0.14em] text-sm text-fg/80"
        >
          {LINKS.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)}>
              {l.label}
            </a>
          ))}
          <WhatsButton className="mt-1 self-start" onClick={() => setOpen(false)}>
            WhatsApp
          </WhatsButton>
        </nav>
      )}
    </header>
  );
}
