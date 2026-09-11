import WhatsButton from "./WhatsButton";

const PERGUNTAS = [
  {
    q: "O primeiro atendimento tem custo?",
    a: "O contato inicial, destinado à análise preliminar da situação, não possui custo. Os honorários são definidos posteriormente, por escrito, caso haja decisão de contratação dos serviços.",
  },
  {
    q: "O atendimento é restrito a São José do Rio Preto?",
    a: "O atendimento presencial ocorre em São José do Rio Preto, mas o escritório presta assistência a clientes de todo o território nacional por videochamada e WhatsApp, com o mesmo nível de proximidade.",
  },
  {
    q: "O escritório atende pessoas físicas ou apenas empresas?",
    a: "Ambos. Pequenas e médias empresas representam parte significativa dos casos, mas também são conduzidos contratos, cobranças e ações envolvendo pessoas físicas.",
  },
  {
    q: "Qual a duração média de um processo?",
    a: "O prazo depende da natureza da ação e da vara responsável. Já no primeiro contato é apresentada uma estimativa realista, priorizando-se a solução extrajudicial sempre que viável.",
  },
  {
    q: "Como o cliente é informado sobre o andamento do processo?",
    a: "O cliente é comunicado a cada movimentação relevante, pelo canal de sua preferência, sem necessidade de solicitação.",
  },
  {
    q: "As informações compartilhadas permanecem em sigilo?",
    a: "Sim. Todas as informações compartilhadas são protegidas pelo sigilo profissional e tratadas em conformidade com a Lei Geral de Proteção de Dados (LGPD).",
  },
];

export default function FAQ() {
  return (
    <section id="faq" className="px-6 md:px-10 py-16 sm:py-24 lg:py-32 hairline">
      <div className="mx-auto max-w-6xl">
        <p className="eyebrow mb-12">03 — Perguntas frequentes</p>

        <div className="grid lg:grid-cols-12 gap-8 lg:gap-10">
          <h2 className="lg:col-span-4 font-display font-light h-sec text-balance">
            Esclarecimentos antes do <em className="italic text-accent">primeiro contato.</em>
          </h2>

          <div className="lg:col-span-7 lg:col-start-6 border-t border-line">
            {PERGUNTAS.map((p) => (
              <details key={p.q} className="group border-b border-line py-5">
                <summary className="flex items-start justify-between gap-4 cursor-pointer list-none font-display text-lg text-fg marker:content-none hover:text-accent">
                  {p.q}
                  <span className="mt-1 text-accent transition-transform group-open:rotate-45" aria-hidden="true">
                    +
                  </span>
                </summary>
                <p className="mt-3 text-muted leading-relaxed max-w-xl">{p.a}</p>
              </details>
            ))}

            <WhatsButton
              variant="link"
              className="mt-8"
              mensagem="Olá, ainda tenho uma dúvida que não está nas perguntas frequentes do site."
            >
              Ainda tenho uma dúvida
            </WhatsButton>
          </div>
        </div>
      </div>
    </section>
  );
}
