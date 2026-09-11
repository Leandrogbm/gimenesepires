import { CONTATO } from "../data/contato";

const SOCIOS = [
  {
    iniciais: "NG",
    nome: "Nathalia Gimenes",
    genero: "Sócia-fundadora",
    oab: CONTATO.oabNathalia,
    texto:
      "Atua com rigor técnico e proximidade, buscando sempre a solução mais clara e segura para cada cliente.",
    cor: "bg-accent text-accent-ink",
  },
  {
    iniciais: "NP",
    nome: "Nicole Pires",
    genero: "Sócia-fundadora",
    oab: CONTATO.oabNicole,
    texto:
      "Conduz cada caso com atenção aos detalhes e compromisso com o resultado, do primeiro contato até a decisão final.",
    cor: "bg-card text-accent border border-line",
  },
  {
    iniciais: "MP",
    nome: "Marco A. Pires",
    genero: "Advogado",
    oab: CONTATO.oabMarco,
    texto: "Traz experiência e visão estratégica para a definição do melhor caminho em cada processo.",
    cor: "bg-card text-accent border border-line",
  },
  {
    iniciais: "GA",
    nome: "Giovana Alessio",
    genero: "Advogada",
    oab: CONTATO.oabGiovana,
    texto: "Cuida de cada etapa com organização e cuidado, mantendo o cliente sempre informado.",
    cor: "bg-accent text-accent-ink",
  },
];

export default function Sobre() {
  return (
    <section id="sobre" className="px-6 md:px-10 py-16 sm:py-24 lg:py-32 hairline">
      <div className="mx-auto max-w-6xl">
        <p className="eyebrow mb-12">Quadro de advogados</p>

        <div className="grid lg:grid-cols-12 gap-8 lg:gap-10 mb-12 sm:mb-16">
          <h2 className="lg:col-span-6 font-display font-light h-sec text-fg text-balance">
            Você fala direto com <em className="italic text-accent">quem cuida do caso.</em>
          </h2>
          <p className="lg:col-span-5 lg:col-start-8 text-muted text-lg leading-relaxed self-end">
            O escritório é dos sócios, e é assim que trabalham desde o primeiro caso:
            cada processo passa por quem está à frente dele — não por protocolo,
            por escolha.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-4">
          {SOCIOS.map((s) => (
            <div key={s.iniciais} className="card p-7 sm:p-8 lg:p-10 flex flex-col gap-6">
              <div
                className={`${s.cor} w-16 h-16 rounded-2xl flex items-center justify-center font-display italic text-2xl`}
              >
                {s.iniciais}
              </div>
              <div>
                <h3 className="font-display text-2xl text-fg">{s.nome}</h3>
                <p className="eyebrow mt-2">
                  {s.genero}
                  {s.oab ? ` · ${s.oab}` : ""}
                </p>
              </div>
              <p className="text-muted leading-relaxed">{s.texto}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
