import Signature from "./Signature";

export default function Hero() {
  return (
    <section id="topo" className="relative pt-32 md:pt-40 pb-24 md:pb-32 px-6 md:px-10 overflow-hidden">
      <div className="mx-auto max-w-6xl grid md:grid-cols-12 gap-10 items-end">
        <div className="md:col-span-8">
          <p className="font-body text-sm text-wine mb-6">
            Gimenes &amp; Pires Advogadas · São José do Rio Preto, SP
          </p>
          <h1 className="font-display text-[2.6rem] leading-[1.08] md:text-[4.2rem] md:leading-[1.05] text-ink max-w-3xl">
            Cada caso leva a assinatura de quem o conduz.
          </h1>
          <p className="mt-8 max-w-md text-ink/70 text-lg leading-relaxed">
            Fundado pelas advogadas Nathalia Gimenes e Nicole Pires, o escritório
            acompanha pessoas físicas e empresas do interior paulista em questões
            tributárias, cíveis, empresariais e contenciosas — do planejamento à
            sala de audiência.
          </p>
          <div className="mt-10 flex items-center gap-6">
            <a
              href="#contato"
              className="bg-ink text-paper px-7 py-3.5 font-body text-[15px] hover:bg-wine transition-colors"
            >
              Marcar uma conversa
            </a>
            <a href="#atuacao" className="font-body text-[15px] text-ink/70 hover:text-wine transition-colors">
              Ver áreas de atuação
            </a>
          </div>
        </div>

        <div className="md:col-span-4 md:pb-2">
          <Signature className="w-full h-auto max-w-[260px]" />
          <p className="mt-2 font-display italic text-ink/60 text-sm">
            N. Gimenes &amp; N. Pires
          </p>
        </div>
      </div>

      {/* Dispositivo gráfico: pilha de "processos" — referência material, não ícone genérico */}
      <div className="hidden lg:block absolute right-10 top-24 w-40 h-56">
        <div className="absolute inset-0 border border-ink/15 bg-paper rotate-[-4deg]" />
        <div className="absolute inset-0 border border-ink/20 bg-paper rotate-[2deg] translate-x-3 translate-y-2" />
        <div className="absolute inset-0 border border-brass/50 bg-paper translate-x-6 translate-y-4 flex items-start p-4">
          <span className="font-display italic text-ink/40 text-sm">Processo</span>
        </div>
      </div>
    </section>
  );
}
