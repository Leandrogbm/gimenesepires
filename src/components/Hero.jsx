import { LogoMark } from "./Logo";
import GoogleReviews from "./GoogleReviews";
import WhatsButton from "./WhatsButton";

export default function Hero() {
  return (
    <section id="topo" className="relative pt-36 md:pt-48 pb-20 md:pb-28 px-6 md:px-10 overflow-hidden">
      <div className="mx-auto max-w-6xl">
        <p className="eyebrow mb-8">Sociedade de Advogados · São José do Rio Preto, SP</p>

        <h1 className="font-display font-light text-[2rem] leading-[1.12] sm:text-[2.7rem] sm:leading-[1.06] md:text-[4.6rem] md:leading-[1.03] text-ink max-w-4xl text-balance">
          O seu caso merece a <em className="italic text-wine">atenção das duas.</em>
        </h1>

        <div className="mt-10 grid md:grid-cols-12 gap-10 items-start">
          <p className="md:col-span-6 text-ink/70 text-lg leading-relaxed">
            Nathalia Gimenes e Nicole Pires acompanham pessoas e empresas do
            interior paulista em questões tributárias, cíveis, empresariais e
            contenciosas. Explique a sua situação pelo WhatsApp — a gente diz,
            com clareza, como pode ajudar.
          </p>

          <div className="hidden md:flex md:col-span-4 md:col-start-9 justify-center">
            <LogoMark className="w-40 opacity-90" />
          </div>
        </div>

        <div className="mt-12 flex flex-wrap items-center gap-x-8 gap-y-4">
          <WhatsButton mensagem="Olá! Vim pelo site e gostaria de explicar a minha situação para o escritório.">
            Explicar meu caso agora
          </WhatsButton>
          <a
            href="#atuacao"
            className="font-body text-sm uppercase tracking-[0.14em] text-ink/60 border-b border-brass/60 pb-1 hover:text-wine hover:border-wine transition-colors"
          >
            Ver como ajudamos
          </a>
        </div>

        <GoogleReviews className="mt-10" />
      </div>
    </section>
  );
}
