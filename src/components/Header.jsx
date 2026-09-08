import { useEffect, useState } from "react";

const LINKS = [
  { href: "#sobre", label: "Sobre" },
  { href: "#atuacao", label: "Áreas de atuação" },
  { href: "#diferenciais", label: "Diferenciais" },
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
        scrolled ? "bg-paper/95 backdrop-blur border-b border-ink/10" : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-6xl px-6 md:px-10 flex items-center justify-between h-20">
        <a href="#topo" className="font-display text-2xl tracking-tight text-ink">
          Gimenes <span className="text-wine italic">e</span> Pires
        </a>

        <nav className="hidden md:flex items-center gap-9 font-body text-[13px] uppercase tracking-[0.14em] text-ink/70">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="hover:text-wine transition-colors focus-visible:text-wine"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contato"
            className="bg-ink text-paper px-5 py-2.5 hover:bg-wine transition-colors focus-visible:bg-wine"
          >
            Fale conosco
          </a>
        </nav>

        <button
          className="md:hidden flex flex-col gap-1.5 w-8"
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          aria-expanded={open}
          aria-controls="menu-mobile"
          onClick={() => setOpen((v) => !v)}
        >
          <span className={`h-px bg-ink transition-transform ${open ? "translate-y-[7px] rotate-45" : ""}`} />
          <span className={`h-px bg-ink transition-opacity ${open ? "opacity-0" : ""}`} />
          <span className={`h-px bg-ink transition-transform ${open ? "-translate-y-[7px] -rotate-45" : ""}`} />
        </button>
      </div>

      {open && (
        <nav
          id="menu-mobile"
          className="md:hidden bg-paper border-t border-ink/10 px-6 py-6 flex flex-col gap-5 font-body uppercase tracking-[0.14em] text-sm text-ink/80"
        >
          {LINKS.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)}>
              {l.label}
            </a>
          ))}
          <a href="#contato" onClick={() => setOpen(false)} className="text-wine">
            Fale conosco
          </a>
        </nav>
      )}
    </header>
  );
}
