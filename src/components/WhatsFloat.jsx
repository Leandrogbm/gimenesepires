import { CONTATO } from "../data/contato";
import { WhatsIcon } from "./WhatsButton";

const MENSAGEM = "Olá, gostaria de falar com o escritório.";

// Botão flutuante de WhatsApp — fixo no canto, acompanha a rolagem em
// todas as páginas (montado uma vez em App.jsx, fora do <main>). Mesma
// lógica de escolha da sócia do WhatsButton, só que como <details> que
// abre pra cima (o botão fica no rodapé da tela).
//
// Ilustração decorativa ao fundo: "A Confident Cartoon Businesswoman" por
// Clip Art by Vector Toons, CC BY-SA 4.0, via Wikimedia Commons — crédito
// no rodapé (Footer.jsx), exigido pela licença.
export default function WhatsFloat() {
  return (
    <details className="group fixed right-4 bottom-4 z-40 lg:right-6 lg:bottom-6">
      <summary
        aria-label="Falar no WhatsApp"
        className="relative flex h-20 w-20 cursor-pointer list-none items-end justify-start marker:content-none [&::-webkit-details-marker]:hidden sm:h-24 sm:w-24"
      >
        <span className="block h-full w-full overflow-hidden rounded-full border-2 border-line bg-card shadow-lg shadow-black/40">
          <img
            src="/brand/whatsfloat-advogada.svg"
            alt=""
            aria-hidden="true"
            className="h-full w-full object-cover object-top"
          />
        </span>
        <span className="absolute -right-1 -top-1 flex h-9 w-9 items-center justify-center rounded-full bg-accent text-accent-ink shadow-md shadow-black/40 transition duration-200 group-hover:-translate-y-0.5 group-hover:shadow-lg sm:h-10 sm:w-10">
          <WhatsIcon className="w-5 h-5" />
        </span>
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
