import { LogoMark } from "./Logo";
import GoogleReviews from "./GoogleReviews";

export default function Hero() {
  return (
    <section id="topo" className="relative pt-36 md:pt-48 pb-20 md:pb-28 px-6 md:px-10 overflow-hidden">
      <div className="mx-auto max-w-6xl">
        <p className="eyebrow mb-8">Sociedade de Advogados · São José do Rio Preto, SP</p>

        <h1 className="font-display font-light text-[2rem] leading-[1.12] sm:text-[2.7rem] sm:leading-[1.06] md:text-[5rem] md:leading-[1.02] text-ink max-w-4xl text-balance">
          Cada caso leva a{" "}
          <em className="italic text-wine">assinatura</em> de quem o conduz.
        </h1>

        <div className="mt-12 grid md:grid-cols-12 gap-10 items-start">
          <p className="md:col-span-6 text-ink/70 text-lg leading-relaxed">
            Fundado pelas advogadas Nathalia Gimenes e Nicole Pires, o escritório
            acompanha pessoas físicas e empresas do interior paulista em questões
            tributárias, cíveis, empresariais e contenciosas — do planejamento à
            sala de audiência.
          </p>

          <div className="md:col-span-4 md:col-start-9 flex flex-col items-start">
            <LogoMark className="w-28 h-28 text-wine" />
            <p className="mt-4 font-brand text-xs tracking-[0.24em] text-ink/60">
              GIMENES E PIRES
            </p>
          </div>
        </div>

        <div className="mt-14 flex flex-wrap items-center gap-x-8 gap-y-4">
          <a
            href="#contato"
            className="bg-ink text-paper px-8 py-4 font-body text-sm uppercase tracking-[0.14em] hover:bg-wine transition-colors"
          >
            Marcar uma conversa
          </a>
          <a
            href="#atuacao"
            className="font-body text-sm uppercase tracking-[0.14em] text-ink/60 border-b border-brass/60 pb-1 hover:text-wine hover:border-wine transition-colors"
          >
            Ver áreas de atuação
          </a>
        </div>

        <GoogleReviews className="mt-10" />
      </div>
    </section>
  );
}
