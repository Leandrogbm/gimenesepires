import { useState } from "react";
import { CONTATO } from "../data/contato";
import { WhatsIcon } from "./WhatsButton";

const MENSAGEM = "Olá, gostaria de falar com o escritório.";

// Botão flutuante de WhatsApp — fixo no canto, acompanha a rolagem em
// todas as páginas (montado uma vez em App.jsx, fora do <main>). O menu
// de escolha da sócia abre ao passar o mouse (desktop); clicar no botão
// também alterna, pra funcionar em touch/teclado. Arte fornecida pelo
// cliente (public/brand/whatsfloat-mascote.png, fundo transparente) já
// traz o celular com "Fale comigo no WhatsApp" — por isso não tem selo extra.
export default function WhatsFloat() {
  const [open, setOpen] = useState(false);

  return (
    <div className="group fixed right-2 bottom-0 z-40 sm:right-4 lg:right-6">
      <button
        type="button"
        aria-label="Falar no WhatsApp"
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
        className="block cursor-pointer transition duration-200 hover:-translate-y-1"
      >
        <img
          src="/brand/whatsfloat-mascote.png"
          alt="Falar no WhatsApp"
          className="h-36 w-auto drop-shadow-2xl sm:h-44 lg:h-52"
        />
      </button>
      <div
        className={`absolute right-2 bottom-[85%] z-10 min-w-[14rem] rounded-2xl border border-line bg-card p-1.5 shadow-lg shadow-black/40 transition duration-150 group-hover:visible group-hover:opacity-100 group-hover:pointer-events-auto ${
          open ? "visible opacity-100 pointer-events-auto" : "invisible opacity-0 pointer-events-none"
        }`}
      >
        {CONTATO.telefones.map((t) => (
          <a
            key={t.whatsapp}
            href={`https://wa.me/${t.whatsapp}?text=${encodeURIComponent(MENSAGEM)}`}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2.5 whitespace-nowrap rounded-xl px-4 py-3 font-body text-sm text-fg hover:bg-bg hover:text-accent transition-colors"
          >
            <WhatsIcon className="w-4 h-4 text-accent" />
            Falar com {t.nome.split(" ")[0]}
          </a>
        ))}
      </div>
    </div>
  );
}
