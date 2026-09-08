import { useState } from "react";

const AREAS = [
  {
    titulo: "Direito Tributário",
    resumo: "Simples Nacional e planejamento fiscal",
    texto:
      "Apuração e correção de DAS, enquadramento e reenquadramento no Simples Nacional, consultoria tributária recorrente para pequenas e médias empresas.",
  },
  {
    titulo: "Direito Civil e Contratual",
    resumo: "Contratos, cobranças e relações de consumo",
    texto:
      "Elaboração e revisão de contratos, notificações extrajudiciais, negociação e resolução de conflitos antes que virem processo — quando é possível evitá-lo.",
  },
  {
    titulo: "Direito Empresarial",
    resumo: "Consultoria societária contínua",
    texto:
      "Estruturação societária, contratos entre sócios e assessoria jurídica de rotina para empresários que preferem prevenir problema a apagar incêndio.",
  },
  {
    titulo: "Contencioso Cível",
    resumo: "Acompanhamento processual de ponta a ponta",
    texto:
      "Condução de ações judiciais com acompanhamento próximo de cada andamento processual, da petição inicial à execução da sentença.",
  },
];

export default function Atuacao() {
  const [ativo, setAtivo] = useState(0);

  return (
    <section id="atuacao" className="px-6 md:px-10 py-24 md:py-32 bg-ink text-paper">
      <div className="mx-auto max-w-6xl">
        <p className="eyebrow mb-12">02 — Áreas de atuação</p>
        <h2 className="font-display font-light text-4xl md:text-[3.4rem] md:leading-[1.05] mb-16 max-w-2xl">
          Quatro frentes, <em className="italic text-brass">um só escritório.</em>
        </h2>

        <div className="grid md:grid-cols-12 gap-x-10 gap-y-12">
          <div className="md:col-span-5 flex md:flex-col overflow-x-auto md:overflow-visible">
            {AREAS.map((a, i) => (
              <button
                key={a.titulo}
                onClick={() => setAtivo(i)}
                className={`group text-left shrink-0 md:shrink flex items-baseline gap-4 px-5 first:pl-0 md:px-0 py-5 border-b border-paper/15 transition-colors focus-visible:outline-brass ${
                  ativo === i ? "text-paper" : "text-paper/60 hover:text-paper"
                }`}
              >
                <span className="font-body text-xs tabular-nums text-brass">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="font-display italic text-xl md:text-2xl">{a.titulo}</span>
              </button>
            ))}
          </div>

          <div className="md:col-span-6 md:col-start-7 md:pt-4">
            <p className="eyebrow mb-5">{AREAS[ativo].resumo}</p>
            <p className="font-display font-light text-2xl md:text-[2rem] leading-snug max-w-xl">
              {AREAS[ativo].texto}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
