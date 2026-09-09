import { CONTATO } from "../data/contato";

const SOCIAS = [
  {
    iniciais: "NG",
    nome: "Nathalia Gimenes",
    oab: CONTATO.oabNathalia,
    texto:
      "Conduz as frentes tributária e contratual, com foco em planejamento fiscal para empresas do Simples Nacional e assessoria jurídica contínua a pequenos e médios negócios da região.",
    cor: "bg-wine",
  },
  {
    iniciais: "NP",
    nome: "Nicole Pires",
    oab: CONTATO.oabNicole,
    texto:
      "Responde pelo contencioso cível e pelo acompanhamento processual, da notificação extrajudicial à condução de ações em juízo.",
    cor: "bg-ink",
  },
];

export default function Sobre() {
  return (
    <section id="sobre" className="px-6 md:px-10 py-24 md:py-32 hairline">
      <div className="mx-auto max-w-6xl">
        <p className="eyebrow mb-12">As sócias</p>

        <div className="grid md:grid-cols-12 gap-10 mb-16">
          <h2 className="md:col-span-6 font-display font-light text-[1.9rem] leading-[1.15] sm:text-4xl sm:leading-tight md:text-[3.4rem] md:leading-[1.05] text-ink text-balance">
            Você fala direto com <em className="italic text-wine">quem cuida do caso.</em>
          </h2>
          <p className="md:col-span-5 md:col-start-8 text-ink/70 text-lg leading-relaxed self-end">
            O escritório é das duas, e é assim que trabalham desde o primeiro caso:
            cada processo passa pela Nathalia e pela Nicole — não por protocolo,
            por escolha.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-px bg-ink/10">
          {SOCIAS.map((s) => (
            <div key={s.iniciais} className="bg-paper p-8 md:p-12 flex flex-col gap-6">
              <div
                className={`${s.cor} text-paper w-16 h-16 flex items-center justify-center font-display italic text-2xl`}
              >
                {s.iniciais}
              </div>
              <div>
                <h3 className="font-display text-2xl text-ink">{s.nome}</h3>
                <p className="eyebrow mt-2">Sócia-fundadora · {s.oab}</p>
              </div>
              <p className="text-ink/70 leading-relaxed">{s.texto}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
