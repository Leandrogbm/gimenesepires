import WhatsButton from "./WhatsButton";
import Reveal from "./Reveal";

const PROMESSAS = [
  {
    titulo: "Sem juridiquês",
    texto: "Explicamos os fatos e as opções disponíveis em linguagem clara, sem juridiquês.",
  },
  {
    titulo: "Acompanhamento próximo em cada etapa",
    texto: "A equipe acompanha o processo de perto, do planejamento inicial à conclusão.",
  },
  {
    titulo: "Transparência processual",
    texto: "O cliente é informado a cada andamento relevante, sem necessidade de solicitar atualizações.",
  },
  {
    titulo: "Confidencialidade e sigilo",
    texto: "As informações compartilhadas são protegidas pelo sigilo profissional e tratadas em conformidade com a LGPD.",
  },
];

export default function Confianca() {
  return (
    <section id="diferenciais" className="px-6 md:px-10 py-16 sm:py-24 lg:py-32 bg-card">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <p className="eyebrow mb-12">Por que a Gimenes e Pires</p>
          <h2 className="font-display font-light h-sec max-w-2xl text-balance">
            Você não precisa <em className="italic text-accent">enfrentar essa questão sozinho.</em>
          </h2>
        </Reveal>

        <div className="mt-12 sm:mt-16 grid sm:grid-cols-2 gap-4">
          {PROMESSAS.map((p, i) => (
            <Reveal key={p.titulo} delay={i * 70}>
              <div className="card p-7 sm:p-8 md:p-10">
                <h3 className="font-display italic text-xl text-accent mb-3">{p.titulo}</h3>
                <p className="text-fg/75 leading-relaxed">{p.texto}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="mt-12">
          <WhatsButton
            variant="link"
            mensagem="Olá, gostaria de solicitar uma orientação inicial sobre o meu caso."
          >
            Solicitar uma orientação inicial
          </WhatsButton>
        </div>
      </div>
    </section>
  );
}
