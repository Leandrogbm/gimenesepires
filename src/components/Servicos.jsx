import WhatsButton from "./WhatsButton";

const SERVICOS = [
  {
    titulo: "Contratos",
    texto: "Elaboração e revisão de contratos — comerciais, de prestação de serviço e entre sócios.",
  },
  {
    titulo: "Cobranças e negociações",
    texto: "Notificação extrajudicial, acordo e recuperação de valores antes de virar processo.",
  },
  {
    titulo: "Estruturação societária",
    texto: "Abertura, alteração e organização de sociedades, com acordo de sócios bem feito.",
  },
  {
    titulo: "Ações judiciais",
    texto: "Condução do processo do início ao fim, com acompanhamento de cada andamento.",
  },
];

function Check() {
  return (
    <svg viewBox="0 0 24 24" className="w-5 h-5 shrink-0 text-accent" fill="none" aria-hidden="true">
      <path d="m5 13 4 4L19 7" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function Servicos() {
  return (
    <section id="atuacao" className="px-6 md:px-10 py-16 sm:py-24 lg:py-32 hairline">
      <div className="mx-auto max-w-6xl">
        <p className="eyebrow mb-12">01 — Como podemos ajudar</p>
        <h2 className="font-display font-light h-sec max-w-2xl text-balance">
          Do <em className="italic text-accent">planejamento</em> à sala de audiência.
        </h2>

        <div className="mt-12 sm:mt-16 grid sm:grid-cols-2 gap-4">
          {SERVICOS.map((s) => (
            <div key={s.titulo} className="card p-7 sm:p-8 flex flex-col gap-3">
              <Check />
              <h3 className="font-display text-xl text-fg">{s.titulo}</h3>
              <p className="text-muted leading-relaxed text-[15px]">{s.texto}</p>
            </div>
          ))}
        </div>

        <div className="mt-12">
          <WhatsButton mensagem="Olá! Vi os serviços no site e queria entender qual se aplica ao meu caso.">
            Não sei por onde começar — me ajudem
          </WhatsButton>
        </div>
      </div>
    </section>
  );
}
