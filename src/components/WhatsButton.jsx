import { CONTATO } from "../data/contato";

const PADRAO = "Olá! Vim pelo site e gostaria de falar com o escritório.";

function WhatsIcon({ className = "w-4 h-4" }) {
  return (
    <svg viewBox="0 0 24 24" className={`shrink-0 ${className}`} fill="currentColor" aria-hidden="true">
      <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2 22l5.25-1.38c1.45.79 3.08 1.21 4.79 1.21 5.46 0 9.91-4.45 9.91-9.91S17.5 2 12.04 2zm0 18.15c-1.48 0-2.93-.4-4.2-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.2 8.2 0 0 1-1.26-4.38c0-4.54 3.7-8.23 8.24-8.23 2.2 0 4.27.86 5.82 2.42a8.18 8.18 0 0 1 2.41 5.82c0 4.54-3.69 8.23-8.24 8.23zm4.52-6.16c-.25-.12-1.47-.72-1.69-.81-.23-.08-.39-.12-.56.12-.16.25-.64.81-.79.97-.14.17-.29.19-.54.06-.25-.12-1.05-.39-1.99-1.23-.74-.66-1.23-1.47-1.38-1.72-.14-.25-.02-.38.11-.51.11-.11.25-.29.37-.43.13-.14.17-.25.25-.41.08-.17.04-.31-.02-.43-.06-.12-.56-1.35-.76-1.85-.2-.48-.41-.42-.56-.43h-.48c-.17 0-.43.06-.66.31-.22.25-.86.85-.86 2.07 0 1.22.89 2.4 1.01 2.56.12.17 1.75 2.67 4.24 3.74.59.26 1.05.41 1.41.52.59.19 1.13.16 1.56.1.48-.07 1.47-.6 1.68-1.18.21-.58.21-1.07.14-1.18-.06-.11-.22-.17-.47-.29z" />
    </svg>
  );
}

// CTA de WhatsApp reutilizável. Ao clicar, abre um menu para o cliente escolher
// com qual das sócias falar (CONTATO.telefones, um número por sócia).
// `mensagem` contextualiza o texto por seção; `variant` alterna botão sólido / link discreto;
// `size` encolhe o botão sólido para caber no header.
export default function WhatsButton({
  mensagem = PADRAO,
  children = "Falar no WhatsApp",
  variant = "solid",
  size = "md",
  className = "",
  onClick,
}) {
  const base =
    "inline-flex items-center gap-2.5 font-body text-xs font-semibold uppercase tracking-[0.14em] transition duration-200 will-change-transform";
  const tamanhos = { md: "px-6 py-3.5", sm: "px-4 py-2.5" };
  const estilos = {
    solid: `bg-accent text-accent-ink rounded-full hover:bg-fg hover:-translate-y-0.5 hover:shadow-lg hover:shadow-black/30 ${tamanhos[size]}`,
    onDark: `bg-accent text-accent-ink rounded-full hover:bg-fg hover:-translate-y-0.5 hover:shadow-lg hover:shadow-black/30 ${tamanhos[size]}`,
    link: "text-accent border-b border-accent/50 pb-1 hover:border-accent hover:translate-x-0.5",
  };
  const estilo = estilos[variant] ?? estilos.solid;

  return (
    <details className={`group relative inline-block ${className}`}>
      <summary
        className={`${base} ${estilo} list-none cursor-pointer marker:content-none [&::-webkit-details-marker]:hidden`}
      >
        <WhatsIcon />
        {children}
      </summary>
      <div className="absolute left-0 z-20 mt-2 min-w-[14rem] rounded-2xl border border-line bg-card p-1.5 shadow-lg shadow-black/40">
        {CONTATO.telefones.map((t) => (
          <a
            key={t.whatsapp}
            href={`https://wa.me/${t.whatsapp}?text=${encodeURIComponent(mensagem)}`}
            target="_blank"
            rel="noreferrer"
            onClick={onClick}
            className="flex items-center gap-2.5 rounded-xl px-4 py-3 font-body text-sm normal-case tracking-normal text-fg hover:bg-bg hover:text-accent transition-colors"
          >
            <WhatsIcon className="w-4 h-4 text-accent" />
            Falar com {t.nome.split(" ")[0]}
          </a>
        ))}
      </div>
    </details>
  );
}
