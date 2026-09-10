import { CONTATO } from "../data/contato";

const { nota, avaliacoes, url } = CONTATO.google;

// Faixa de prova social — nota e nº de avaliações do Perfil da Empresa no Google.
export default function GoogleReviews({ className = "", tone = "ink" }) {
  const muted = tone === "paper" ? "text-fg/70" : "text-muted"; // ponytail: tone kept for call-site compat
  return (
    <a
      href={url}
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
          · {avaliacoes} avaliações no Google
        </span>
      </span>
    </a>
  );
}
