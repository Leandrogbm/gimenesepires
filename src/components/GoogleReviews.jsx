import { CONTATO } from "../data/contato";

const { nota, avaliacoes, url } = CONTATO.google;

// "G" oficial do Google (4 cores) — só pra identificar a fonte da avaliação.
function GoogleG({ className = "w-4 h-4" }) {
  return (
    <svg viewBox="0 0 48 48" className={`shrink-0 ${className}`} aria-hidden="true">
      <path
        fill="#4285F4"
        d="M45.12 24.5c0-1.56-.14-3.06-.4-4.5H24v8.51h11.84c-.51 2.75-2.06 5.08-4.39 6.64v5.52h7.11c4.16-3.83 6.56-9.47 6.56-16.17z"
      />
      <path
        fill="#34A853"
        d="M24 46c5.94 0 10.92-1.97 14.56-5.33l-7.11-5.52c-1.97 1.32-4.49 2.11-7.45 2.11-5.73 0-10.58-3.87-12.31-9.07H4.34v5.7C7.96 41.07 15.4 46 24 46z"
      />
      <path
        fill="#FBBC05"
        d="M11.69 28.19a13.9 13.9 0 0 1 0-8.38v-5.7H4.34a23.9 23.9 0 0 0 0 19.78z"
      />
      <path
        fill="#EA4335"
        d="M24 10.75c3.23 0 6.13 1.11 8.41 3.29l6.31-6.31C34.91 4.18 29.93 2 24 2 15.4 2 7.96 6.93 4.34 14.11l7.35 5.7c1.73-5.2 6.58-9.06 12.31-9.06z"
      />
    </svg>
  );
}

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
          · {avaliacoes} avaliações no <GoogleG className="inline-block w-4 h-4 align-[-3px] mx-0.5" /> Google
        </span>
      </span>
    </a>
  );
}
