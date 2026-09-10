import WhatsButton from "./WhatsButton";

const PERGUNTAS = [
  {
    q: "A primeira conversa tem custo?",
    a: "O contato inicial pelo WhatsApp para entender a sua situação e explicar como podemos ajudar é sem compromisso. Honorários só são combinados depois, por escrito, se você decidir seguir.",
  },
  {
    q: "O escritório atende só em São José do Rio Preto?",
    a: "O atendimento presencial é em São José do Rio Preto, mas acompanhamos clientes de outras cidades por videochamada e WhatsApp, com a mesma proximidade.",
  },
  {
    q: "Vocês atendem pessoa física ou só empresa?",
    a: "Os dois. Empresas do Simples Nacional e pequenos e médios negócios são a maior parte, mas também cuidamos de contratos, cobranças e ações de pessoas físicas.",
  },
  {
    q: "Quanto tempo demora um processo?",
    a: "Depende do tipo de ação e da vara. Na primeira conversa damos uma estimativa realista para o seu caso — e evitamos processo sempre que dá para resolver por acordo.",
  },
  {
    q: "Como recebo notícias do andamento?",
    a: "Você é avisado a cada movimentação relevante pelo canal que preferir. Não precisa ficar perguntando.",
  },
  {
    q: "Meus dados e o que eu contar ficam em sigilo?",
    a: "Sim. Tudo que você compartilha é protegido pelo sigilo profissional e tratado conforme a LGPD.",
  },
];

export default function FAQ() {
  return (
    <section id="faq" className="px-6 md:px-10 py-24 md:py-32 hairline">
      <div className="mx-auto max-w-6xl">
        <p className="eyebrow mb-12">03 — Perguntas frequentes</p>

        <div className="grid md:grid-cols-12 gap-10">
          <h2 className="md:col-span-4 font-display font-light text-[1.9rem] leading-[1.15] sm:text-4xl sm:leading-tight md:text-[3rem] md:leading-[1.05] text-balance">
            Antes de <em className="italic text-accent">chamar no WhatsApp.</em>
          </h2>

          <div className="md:col-span-7 md:col-start-6 border-t border-line">
            {PERGUNTAS.map((p) => (
              <details key={p.q} className="group border-b border-line py-5">
                <summary className="flex items-start justify-between gap-4 cursor-pointer list-none font-display text-lg text-fg marker:content-none">
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
              mensagem="Olá! Tenho uma dúvida que não estava nas perguntas frequentes do site."
            >
              Minha dúvida não está aqui
            </WhatsButton>
          </div>
        </div>
      </div>
    </section>
  );
}
