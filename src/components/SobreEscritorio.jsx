import Reveal from "./Reveal";
import Clientes from "./Clientes";

const PARAGRAFOS = [
  "A Gimenes e Pires é um escritório de advocacia sediado em São José do Rio Preto (SP), fundado e liderado por duas advogadas: Nathália Fernandes Gimenes e Nicole Pires. Juntas, as sócias constituíram uma banca conduzida integralmente por mulheres, com uma proposta que une técnica jurídica a um olhar humano sobre cada caso — combinando empatia, excelência e visão estratégica no atendimento aos clientes.",
  "O trabalho das duas se apoia em uma atuação marcada por sensibilidade e firmeza ao mesmo tempo: buscam soluções que respeitem a individualidade de cada cliente, sem abrir mão da responsabilidade e do rigor técnico que os processos exigem. Essa combinação se reflete diretamente nas áreas em que o escritório atua, boa parte delas ligada a momentos delicados na vida das pessoas — como divórcios, guarda de filhos e pensão alimentícia — tratados com profissionalismo e cuidado.",
  "Além do direito de família, a dupla também representa trabalhadores em questões trabalhistas, atuando para garantir justiça e equidade nas relações de trabalho, e presta consultoria e representação em matérias contratuais, de responsabilidade civil e de direito do consumidor. No dia a dia, isso significa transitar entre audiências, pareceres e negociações, sempre com o objetivo de entregar ao cliente não só uma solução jurídica, mas uma experiência de acompanhamento próximo.",
  "Em resumo, Nathália e Nicole traduzem, na prática, a ideia de uma advocacia feita por mulheres para pessoas: técnica quando o caso pede precisão, e acolhedora quando o momento pede escuta.",
];

export default function SobreEscritorio() {
  return (
    <>
      <section id="sobre-escritorio" className="px-6 md:px-10 pt-28 pb-16 sm:pt-32 sm:pb-24 lg:pt-40 lg:pb-32 hairline">
        <div className="mx-auto max-w-6xl">
          <Reveal>
            <p className="eyebrow mb-12">Sobre</p>
            <h2 className="font-display font-light h-sec max-w-3xl text-balance">
              Gimenes e Pires <em className="italic text-accent">Sociedade de Advogados.</em>
            </h2>
          </Reveal>

          <div className="mt-10 max-w-3xl space-y-6">
            {PARAGRAFOS.map((p, i) => (
              <Reveal key={p.slice(0, 24)} delay={i * 90}>
                <p className="text-muted leading-relaxed">{p}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <Clientes />
    </>
  );
}
