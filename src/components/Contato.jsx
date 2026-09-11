import { CONTATO } from "../data/contato";
import { LogoMark } from "./Logo";
import GoogleReviews from "./GoogleReviews";
import WhatsButton from "./WhatsButton";

const LINHAS = [
  ...CONTATO.telefones.map((t) => ({
    dt: t.nome,
    href: `tel:${t.whatsapp}`,
    label: t.numero,
  })),
  { dt: "E-mail", href: `mailto:${CONTATO.email}`, label: CONTATO.email },
  { dt: "Horário", label: CONTATO.horario },
];

export default function Contato() {
  return (
    <section id="contato" className="px-6 md:px-10 pt-28 pb-16 sm:pt-32 sm:pb-24 lg:pt-40 lg:pb-32 bg-card">
      <div className="mx-auto max-w-6xl">
        <p className="eyebrow mb-12">04 — Contato</p>

        <div className="grid lg:grid-cols-12 gap-10">
          <div className="lg:col-span-5 flex flex-col items-start">
            <h2 className="font-display font-light h-sec text-balance">
              Fale conosco sobre <em className="italic text-accent">o seu caso.</em>
            </h2>
            <p className="text-fg/70 leading-relaxed max-w-sm mt-6">
              O canal mais direto é o WhatsApp: descreva a sua situação e receba
              orientação sobre os próximos passos. O atendimento também é
              realizado presencialmente e por videochamada.
            </p>
            <WhatsButton
              variant="onDark"
              className="mt-8"
              mensagem="Olá, vim pelo site da Gimenes e Pires e gostaria de falar sobre o meu caso."
            >
              Falar com o escritório
            </WhatsButton>
            <GoogleReviews className="mt-8" tone="paper" />
            <LogoMark invert className="w-20 mt-12 opacity-80" />
          </div>

          <div className="lg:col-span-6 lg:col-start-7">
            <dl className="divide-y divide-line border-y border-line">
              {LINHAS.map((l) => (
                <div key={l.label} className="py-5 flex items-baseline justify-between gap-4 min-w-0">
                  <dt className="eyebrow">{l.dt}</dt>
                  <dd className="text-right">
                    {l.href ? (
                      <a
                        href={l.href}
                        {...(l.externo ? { target: "_blank", rel: "noreferrer" } : {})}
                        className="hover:text-accent transition-colors"
                      >
                        {l.label}
                      </a>
                    ) : (
                      <span className="text-fg/80">{l.label}</span>
                    )}
                  </dd>
                </div>
              ))}
              <div className="py-5 flex items-baseline justify-between gap-4 min-w-0">
                <dt className="eyebrow">Endereço</dt>
                <dd className="text-right max-w-xs text-fg/80 break-words">
                  {CONTATO.endereco}
                  <span className="block text-fg/50">{CONTATO.edificio}</span>
                </dd>
              </div>
            </dl>

            <div className="mt-6 flex flex-wrap gap-x-6 gap-y-2 font-body text-xs uppercase tracking-[0.14em] text-muted">
              <a href={CONTATO.instagram} target="_blank" rel="noreferrer" className="hover:text-accent">
                Instagram
              </a>
              <a href={CONTATO.facebook} target="_blank" rel="noreferrer" className="hover:text-accent">
                Facebook
              </a>
              <a href={CONTATO.waze} target="_blank" rel="noreferrer" className="hover:text-accent">
                Waze
              </a>
              <a href={CONTATO.google.url} target="_blank" rel="noreferrer" className="hover:text-accent">
                Ver no Google
              </a>
            </div>

            <iframe
              title="Localização do escritório no mapa"
              src={CONTATO.google.mapaEmbed}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="mt-8 w-full h-64 rounded-2xl border border-line bg-bg/5 hover:border-accent"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
