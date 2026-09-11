import { CONTATO } from "../data/contato";
import { WhatsIcon } from "./WhatsButton";

const MENSAGEM = "Olá, gostaria de falar com o escritório.";

// Botão flutuante de WhatsApp — fixo no canto, acompanha a rolagem em
// todas as páginas (montado uma vez em App.jsx, fora do <main>). Clicar
// abre o mesmo menu de escolha da sócia do WhatsButton, só que pra cima
// (o botão fica no rodapé da tela). Arte fornecida pelo cliente
// (public/brand/whatsfloat-mascote.png, fundo transparente) já traz o
// celular com "Fale comigo no WhatsApp" — por isso não tem selo extra.
export default function WhatsFloat() {
  return (
    <details className="group fixed right-2 bottom-0 z-40 sm:right-4 lg:right-6">
      <summary
        aria-label="Falar no WhatsApp"
        className="block cursor-pointer list-none marker:content-none [&::-webkit-details-marker]:hidden transition duration-200 hover:-translate-y-1"
      >
        <img
          src="/brand/whatsfloat-mascote.png"
          alt="Falar no WhatsApp"
          className="h-36 w-auto drop-shadow-2xl sm:h-44 lg:h-52"
        />
      </summary>
      <div className="absolute right-2 bottom-[85%] z-10 min-w-[14rem] rounded-2xl border border-line bg-card p-1.5 shadow-lg shadow-black/40">
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
