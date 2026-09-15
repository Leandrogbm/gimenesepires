import { CONTATO } from "../data/contato";
import { LogoMark } from "./Logo";
import GoogleReviews from "./GoogleReviews";
import WhatsButton from "./WhatsButton";
import Reveal from "./Reveal";

function IconeRede({ children }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className="w-6 h-6"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {children}
    </svg>
  );
}

const IconeInstagram = () => (
  <IconeRede>
    <rect x="4" y="4" width="16" height="16" rx="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="16.3" cy="7.7" r="0.6" fill="currentColor" stroke="none" />
  </IconeRede>
);

const IconeFacebook = () => (
  <IconeRede>
    <circle cx="12" cy="12" r="9" />
    <path
      d="M13.8 7.5h-1.3c-1 0-1.8.8-1.8 1.8V11H9v2.2h1.7V20h2.4v-6.8h1.9L15.3 11h-2.2V9.6c0-.4.3-.7.7-.7h1.3z"
      fill="currentColor"
      stroke="none"
    />
  </IconeRede>
);

// Logomarca oficial do Waze (Simple Icons, fill sólido — não é traço como as demais).
const IconeWaze = () => (
  <svg viewBox="0 0 24 24" className="w-6 h-6" fill="currentColor" aria-hidden="true">
    <path d="M13.218 0C9.915 0 6.835 1.49 4.723 4.148c-1.515 1.913-2.31 4.272-2.31 6.706v1.739c0 .894-.62 1.738-1.862 1.813-.298.025-.547.224-.547.522-.05.82.82 2.31 2.012 3.502.82.844 1.788 1.515 2.832 2.036a3 3 0 0 0 2.955 3.528 2.966 2.966 0 0 0 2.931-2.385h2.509c.323 1.689 2.086 2.856 3.974 2.21 1.64-.546 2.36-2.409 1.763-3.924a12.84 12.84 0 0 0 1.838-1.465 10.73 10.73 0 0 0 3.18-7.65c0-2.882-1.118-5.589-3.155-7.625A10.899 10.899 0 0 0 13.218 0zm0 1.217c2.558 0 4.967.994 6.78 2.807a9.525 9.525 0 0 1 2.807 6.78A9.526 9.526 0 0 1 20 17.585a9.647 9.647 0 0 1-6.78 2.807h-2.46a3.008 3.008 0 0 0-2.93-2.41 3.03 3.03 0 0 0-2.534 1.367v.024a8.945 8.945 0 0 1-2.41-1.788c-.844-.844-1.316-1.614-1.515-2.11a2.858 2.858 0 0 0 1.441-.846 2.959 2.959 0 0 0 .795-2.036v-1.789c0-2.11.696-4.197 2.012-5.861 1.863-2.385 4.62-3.726 7.6-3.726zm-2.41 5.986a1.192 1.192 0 0 0-1.191 1.192 1.192 1.192 0 0 0 1.192 1.193A1.192 1.192 0 0 0 12 8.395a1.192 1.192 0 0 0-1.192-1.192zm7.204 0a1.192 1.192 0 0 0-1.192 1.192 1.192 1.192 0 0 0 1.192 1.193 1.192 1.192 0 0 0 1.192-1.193 1.192 1.192 0 0 0-1.192-1.192zm-7.377 4.769a.596.596 0 0 0-.546.845 4.813 4.813 0 0 0 4.346 2.757 4.77 4.77 0 0 0 4.347-2.757.596.596 0 0 0-.547-.845h-.025a.561.561 0 0 0-.521.348 3.59 3.59 0 0 1-3.254 2.061 3.591 3.591 0 0 1-3.254-2.061.64.64 0 0 0-.546-.348z" />
  </svg>
);

const IconeGoogle = () => (
  <IconeRede>
    <path d="M4 6l5-2 6 2 5-2v14l-5 2-6-2-5 2Z" />
    <path d="M9 4v14M15 6v14" />
  </IconeRede>
);

const REDES = [
  { nome: "Instagram", href: CONTATO.instagram, Icone: IconeInstagram },
  { nome: "Facebook", href: CONTATO.facebook, Icone: IconeFacebook },
  { nome: "Waze — como chegar", href: CONTATO.waze, Icone: IconeWaze },
  { nome: "Ver no Google", href: CONTATO.google.url, Icone: IconeGoogle },
];

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
        <Reveal>
          <p className="eyebrow mb-12">Contato</p>
        </Reveal>

        <div className="grid lg:grid-cols-12 gap-10">
          <Reveal className="lg:col-span-5">
            <div className="flex flex-col items-start">
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
          </Reveal>

          <Reveal delay={120} className="lg:col-span-6 lg:col-start-7">
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

            <div className="mt-6 flex flex-wrap gap-3">
              {REDES.map((r) => (
                <a
                  key={r.nome}
                  href={r.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={r.nome}
                  title={r.nome}
                  className="group flex h-14 w-14 items-center justify-center rounded-full border-2 border-line bg-bg/30 text-fg/90 transition-colors hover:border-accent hover:bg-bg/60 hover:text-accent"
                >
                  <span className="group-hover:animate-ring">
                    <r.Icone />
                  </span>
                </a>
              ))}
            </div>

            <iframe
              title="Localização do escritório no mapa"
              src={CONTATO.google.mapaEmbed}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="mt-8 w-full h-64 rounded-2xl border border-line bg-bg/5 hover:border-accent"
            />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
