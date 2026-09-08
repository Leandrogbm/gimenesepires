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
        <h2 className="font-display text-3xl md:text-4xl mb-16 max-w-lg">
          Áreas de atuação
        </h2>

        <div className="grid md:grid-cols-12 gap-10">
          <div className="md:col-span-4 flex md:flex-col overflow-x-auto md:overflow-visible border-t border-paper/15 md:border-t-0">
            {AREAS.map((a, i) => (
              <button
                key={a.titulo}
                onClick={() => setAtivo(i)}
                className={`text-left shrink-0 md:shrink px-5 md:px-0 py-5 border-b md:border-b border-paper/15 md:border-b-paper/15 transition-colors ${
                  ativo === i ? "text-paper" : "text-paper/45 hover:text-paper/80"
                }`}
              >
                <span className="font-display italic text-lg block">{a.titulo}</span>
                {ativo === i && (
                  <span className="hidden md:block text-xs text-brass mt-1">{a.resumo}</span>
                )}
              </button>
            ))}
          </div>

          <div className="md:col-span-7 md:col-start-6 pt-2">
            <p className="text-brass text-sm mb-4">{AREAS[ativo].resumo}</p>
            <p className="font-display italic text-2xl md:text-3xl leading-snug max-w-xl">
              {AREAS[ativo].texto}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
