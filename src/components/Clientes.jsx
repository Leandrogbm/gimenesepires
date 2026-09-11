import Reveal from "./Reveal";

const CLIENTES = [
  { nome: "Ale Motos.Carros", arquivo: "ale-motos-carros" },
  { nome: "Brandão Motors", arquivo: "brandao-motors" },
  { nome: "J&F Multimarcas", arquivo: "jf-multimarcas" },
  { nome: "JM", arquivo: "jm" },
  { nome: "Lótus", arquivo: "lotus" },
  { nome: "Norte Veículos", arquivo: "norte-veiculos" },
  { nome: "Patas de Ouro", arquivo: "patas-de-ouro" },
  { nome: "Pet Chow Norte", arquivo: "pet-chow-norte" },
  { nome: "Sportime", arquivo: "sportime" },
  { nome: "Oestesom", arquivo: "oestesom" },
  { nome: "Referência Automóveis", arquivo: "referencia-automoveis" },
  { nome: "Surmani & Woltra", arquivo: "surmani-woltra" },
  { nome: "Cliente", arquivo: "cliente-13" },
  { nome: "TH Finanças & Consórcios", arquivo: "th-financas-consorcios" },
];

// Faixa duplicada (2x) pra dar loop perfeito: a animação desloca -50%,
// ou seja, exatamente uma cópia inteira, e reinicia sem "salto" visível.
const FAIXA = [...CLIENTES, ...CLIENTES];

function Logo({ c }) {
  return (
    <div className="flex w-24 sm:w-28 shrink-0 flex-col items-center gap-2 text-center">
      <img
        src={`/brand/clientes/${c.arquivo}.jpg`}
        alt={c.nome}
        loading="lazy"
        className="h-16 w-16 sm:h-20 sm:w-20 rounded-full border border-line object-cover"
      />
      <span className="text-[11px] uppercase tracking-[0.1em] text-muted leading-tight">{c.nome}</span>
    </div>
  );
}

export default function Clientes() {
  return (
    <section className="py-16 sm:py-24 hairline overflow-hidden">
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <Reveal>
          <p className="eyebrow mb-4">Clientes</p>
          <h2 className="font-display font-light text-2xl text-fg max-w-xl text-balance">
            Empresas que confiam no nosso trabalho.
          </h2>
        </Reveal>
      </div>

      <Reveal delay={150} className="mt-12">
        {/* mascara nas bordas: os logos "surgem" suave em vez de cortar seco */}
        <div className="relative [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
          <div className="flex w-max gap-8 sm:gap-10 animate-marquee hover:[animation-play-state:paused]">
            {FAIXA.map((c, i) => (
              <Logo key={`${c.arquivo}-${i}`} c={c} />
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  );
}
