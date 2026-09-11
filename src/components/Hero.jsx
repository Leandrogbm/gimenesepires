import { LogoMark } from "./Logo";
import GoogleReviews from "./GoogleReviews";
import WhatsButton from "./WhatsButton";

export default function Hero() {
  return (
    <section id="topo" className="relative pt-32 sm:pt-36 md:pt-48 pb-16 sm:pb-20 md:pb-28 px-6 md:px-10 overflow-hidden">
      <div className="mx-auto max-w-6xl">
        <p className="mb-3 font-display text-2xl md:text-3xl text-accent">
          Gimenes <span className="italic">e</span> Pires
        </p>
        <p className="eyebrow mb-8">Sociedade de Advogados · São José do Rio Preto, SP · Atuação em todo o território nacional</p>

        <h1 className="font-display font-light h-hero text-fg max-w-4xl text-balance">
          Seu caso merece <em className="italic text-accent">o rigor técnico que a advocacia exige.</em>
        </h1>

        <div className="mt-10 grid md:grid-cols-12 gap-8 md:gap-10 items-start">
          <p className="md:col-span-6 text-muted text-lg leading-relaxed">
            A Gimenes e Pires presta assessoria jurídica a pessoas físicas e
            jurídicas em todo o território nacional, com atuação consultiva e
            contenciosa. Relate a sua situação pelo WhatsApp e receba uma
            orientação clara sobre os próximos passos.
          </p>

          <div className="hidden md:flex md:col-span-4 md:col-start-9 justify-center">
            <LogoMark className="w-40 opacity-90" />
          </div>
        </div>

        <div className="mt-12 flex flex-wrap items-center gap-x-8 gap-y-4">
          <WhatsButton mensagem="Olá, gostaria de falar sobre o meu caso.">
            Falar sobre o meu caso
          </WhatsButton>
          <a
            href="#/atuacao"
            className="inline-flex items-center font-body text-xs font-semibold uppercase tracking-[0.14em] text-fg border border-line rounded-full px-6 py-3.5 hover:text-accent hover:border-accent hover:-translate-y-0.5"
          >
            Conhecer nossa atuação
          </a>
        </div>

        <GoogleReviews className="mt-10" />
      </div>
    </section>
  );
}
