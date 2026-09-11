import WhatsButton from "./WhatsButton";

const SERVICOS = [
  {
    titulo: "Contratos",
    texto: "Elaboração, revisão e negociação de contratos empresariais, de prestação de serviços e societários.",
  },
  {
    titulo: "Cobranças e negociações",
    texto: "Notificação extrajudicial, negociação e recuperação de créditos, com solução amigável sempre que possível.",
  },
  {
    titulo: "Estruturação societária",
    texto: "Constituição, alteração e reorganização de sociedades, com elaboração de acordos de sócios.",
  },
  {
    titulo: "Ações judiciais",
    texto: "Condução de ações judiciais do início ao trânsito em julgado, com acompanhamento de cada andamento processual.",
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
        <p className="eyebrow mb-12">01 — Áreas de atuação</p>
        <h2 className="font-display font-light h-sec max-w-2xl text-balance">
          Da <em className="italic text-accent">consultoria preventiva</em> à sala de audiência.
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
          <WhatsButton mensagem="Olá, gostaria de saber qual serviço se aplica ao meu caso.">
            Saber qual serviço se aplica ao meu caso
          </WhatsButton>
        </div>
      </div>
    </section>
  );
}
