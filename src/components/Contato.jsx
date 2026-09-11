import { CONTATO } from "../data/contato";
import { LogoMark } from "./Logo";
import GoogleReviews from "./GoogleReviews";
import WhatsButton from "./WhatsButton";

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

const IconeWaze = () => (
  <IconeRede>
    <path d="M12 21s7-7.5 7-12a7 7 0 1 0-14 0c0 4.5 7 12 7 12Z" />
    <circle cx="12" cy="9" r="2.4" />
  </IconeRede>
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

            <div className="mt-6 flex flex-wrap gap-3">
              {REDES.map((r) => (
                <a
                  key={r.nome}
                  href={r.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={r.nome}
                  title={r.nome}
                  className="flex h-14 w-14 items-center justify-center rounded-full border-2 border-line bg-bg/30 text-fg/90 transition-colors hover:border-accent hover:bg-bg/60 hover:text-accent"
                >
                  <r.Icone />
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
          </div>
        </div>
      </div>
    </section>
  );
}
