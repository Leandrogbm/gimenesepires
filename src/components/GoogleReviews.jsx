import { CONTATO } from "../data/contato";

const { nota, avaliacoes, urlAvaliacoes } = CONTATO.google;

// "G" em traço monocromático — mesmo padrão de linha dos ícones da página
// de Contato (stroke currentColor, sem cor própria), em vez do G colorido
// oficial, que destoava do resto do site.
function GoogleG({ className = "w-4 h-4" }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={`shrink-0 ${className}`}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M20 12a8 8 0 1 1-2.34-5.66" />
      <path d="M12 12h8" />
    </svg>
  );
}

// Faixa de prova social — nota e nº de avaliações do Perfil da Empresa no Google.
export default function GoogleReviews({ className = "", tone = "ink" }) {
  const muted = tone === "paper" ? "text-fg/70" : "text-muted"; // ponytail: tone kept for call-site compat
  return (
    <a
      href={urlAvaliacoes}
      target="_blank"
      rel="noreferrer"
      className={`inline-flex items-center gap-3 font-body text-sm hover:text-accent transition-colors ${className}`}
    >
      <span className="text-accent tracking-[0.15em]" aria-hidden="true">
        ★★★★★
      </span>
      <span>
        <strong className="font-semibold">{nota.replace(".", ",")}</strong>
        <span className={muted}>
          {" "}
          · {avaliacoes} avaliações no <GoogleG className="inline-block w-4 h-4 align-[-3px] mx-0.5" /> Google
        </span>
      </span>
    </a>
  );
}
