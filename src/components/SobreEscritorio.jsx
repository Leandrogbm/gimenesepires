import Reveal from "./Reveal";
import Clientes from "./Clientes";

const PARAGRAFOS = [
  "Gimenes e Pires Sociedade de Advogados é um escritório sediado em São José do Rio Preto (SP), com mais de 10 anos de atuação, liderado por duas advogadas: Nathália Fernandes Gimenes e Nicole R. Pires de Campos Lima.",
  "Somos uma equipe de advogados qualificados com visão de negócios e foco em resultados, desenvolvendo soluções personalizadas para cada tipo de cliente, prezando pela excelência e competência dos serviços prestados.",
  "Nossos serviços englobam a esfera consultiva, preventiva e contenciosa, operando em todas as instâncias judiciárias. Temos em mente que o compromisso com o cliente é o pilar de nossa reputação. Assim, temos relacionamento com fortes valores, que nos permitem agir em prol de nossos clientes e antever oportunidades.",
  "Em resumo, o escritório traduz, na prática, a ideia de uma advocacia técnica quando o caso pede precisão, e acolhedora quando o momento pede escuta.",
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
