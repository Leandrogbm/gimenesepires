import { CONTATO } from "../data/contato";
import { WhatsIcon } from "./WhatsButton";

const MENSAGEM = "Olá, gostaria de falar com o escritório.";

// Botão flutuante de WhatsApp — fixo no canto, acompanha a rolagem em
// todas as páginas (montado uma vez em App.jsx, fora do <main>). Mesma
// lógica de escolha da sócia do WhatsButton, só que como <details> que
// abre pra cima (o botão fica no rodapé da tela).
//
// ponytail: só o ícone por enquanto. A mascote ilustrada foi tirada (era
// um clipart genérico, sem parecer com as sócias) — troca por
// /brand/<arquivo> aqui quando tiver a arte definitiva.
export default function WhatsFloat() {
  return (
    <details className="group fixed right-5 bottom-5 z-40 lg:right-8 lg:bottom-8">
      <summary
        aria-label="Falar no WhatsApp"
        className="flex h-14 w-14 items-center justify-center rounded-full bg-accent text-accent-ink shadow-lg shadow-black/40 cursor-pointer list-none marker:content-none [&::-webkit-details-marker]:hidden transition duration-200 hover:-translate-y-0.5 hover:shadow-xl"
      >
        <WhatsIcon className="w-7 h-7" />
      </summary>
      <div className="absolute right-0 bottom-full mb-3 min-w-[14rem] rounded-2xl border border-line bg-card p-1.5 shadow-lg shadow-black/40">
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
    </details>
  );
}
