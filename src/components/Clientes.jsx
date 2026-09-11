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

export default function Clientes() {
  return (
    <section className="px-6 md:px-10 py-16 sm:py-24 hairline">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <p className="eyebrow mb-4">Clientes</p>
          <h2 className="font-display font-light text-2xl text-fg max-w-xl text-balance">
            Empresas que confiam no nosso trabalho.
          </h2>
        </Reveal>

        <div className="mt-12 grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-7 gap-x-4 gap-y-8">
          {CLIENTES.map((c, i) => (
            <Reveal key={c.arquivo} delay={i * 40} className="flex flex-col items-center gap-2 text-center">
              <img
                src={`/brand/clientes/${c.arquivo}.jpg`}
                alt={c.nome}
                loading="lazy"
                className="h-16 w-16 sm:h-20 sm:w-20 rounded-full border border-line object-cover"
              />
              <span className="text-[11px] uppercase tracking-[0.1em] text-muted leading-tight">{c.nome}</span>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
