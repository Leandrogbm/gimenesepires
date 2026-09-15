import { useState } from "react";

const CHAVE = "cookie-consent";

function jaRespondeu() {
  try {
    return Boolean(localStorage.getItem(CHAVE));
  } catch {
    // localStorage bloqueado (aba anônima/privacidade restrita) — trata
    // como "já respondido" pra não insistir num banner que não vai lembrar.
    return true;
  }
}

// Aviso de cookies/LGPD. Só aparece se ainda não houver resposta salva.
// "Aceitar" chama window.iniciarAnalytics() (definida em index.html) —
// é o que liga o Google Analytics; sem aceite, o GA nunca carrega.
export default function CookieBanner() {
  const [visivel, setVisivel] = useState(() => !jaRespondeu());

  const responder = (valor) => {
    try {
      localStorage.setItem(CHAVE, valor);
    } catch {
      // segue sem salvar — pior caso, o banner volta a aparecer depois
    }
    if (valor === "aceito" && typeof window.iniciarAnalytics === "function") {
      window.iniciarAnalytics();
    }
    setVisivel(false);
  };

  if (!visivel) return null;

  return (
    <div className="fixed inset-x-0 bottom-0 z-[60] border-t border-line bg-bg/97 backdrop-blur px-6 py-5 sm:px-10">
      <div className="mx-auto flex max-w-6xl flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between">
        <p className="max-w-2xl text-sm leading-relaxed text-muted">
          Usamos cookies de análise (Google Analytics) para entender como o site é
          usado, de forma anônima e agregada. Você pode aceitar ou recusar, conforme
          a LGPD.{" "}
          <a href="#/privacidade" className="underline hover:text-accent">
            Ver termos
          </a>
          .
        </p>
        <div className="flex shrink-0 gap-3">
          <button
            type="button"
            onClick={() => responder("rejeitado")}
            className="rounded-full border border-line px-5 py-2.5 font-body text-xs font-semibold uppercase tracking-[0.14em] text-fg transition-colors hover:border-accent hover:text-accent"
          >
            Rejeitar
          </button>
          <button
            type="button"
            onClick={() => responder("aceito")}
            className="rounded-full bg-accent px-5 py-2.5 font-body text-xs font-semibold uppercase tracking-[0.14em] text-accent-ink transition-colors hover:bg-fg"
          >
            Aceitar
          </button>
        </div>
      </div>
    </div>
  );
}
