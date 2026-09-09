import { CONTATO } from "../data/contato";
import { LogoMark } from "./Logo";
import GoogleReviews from "./GoogleReviews";

const LINHAS = [
  ...CONTATO.telefones.map((t, i) => ({
    dt: i === 0 ? "Telefone" : "",
    href: `tel:${t.replace(/\D/g, "")}`,
    label: t,
  })),
  { dt: "WhatsApp", href: `https://wa.me/${CONTATO.whatsapp}`, label: "Enviar mensagem", externo: true },
  { dt: "E-mail", href: `mailto:${CONTATO.email}`, label: CONTATO.email },
  { dt: "Horário", label: CONTATO.horario },
];

export default function Contato() {
  return (
    <section id="contato" className="px-6 md:px-10 py-24 md:py-32 bg-ink text-paper">
      <div className="mx-auto max-w-6xl">
        <p className="eyebrow mb-12">04 — Contato</p>

        <div className="grid md:grid-cols-12 gap-10">
          <div className="md:col-span-5">
            <h2 className="font-display font-light text-[1.9rem] leading-[1.15] sm:text-4xl sm:leading-tight md:text-[3.4rem] md:leading-[1.05] text-balance">
              Vamos conversar sobre o <em className="italic text-brass">seu caso.</em>
            </h2>
            <p className="text-paper/70 leading-relaxed max-w-sm mt-6">
              Atendimento presencial em São José do Rio Preto e por videochamada
              para clientes de outras cidades.
            </p>
            <GoogleReviews className="mt-8" tone="paper" />
            <LogoMark className="w-20 h-20 mt-12 text-brass" />
          </div>

          <div className="md:col-span-6 md:col-start-7">
            <dl className="divide-y divide-paper/15 border-y border-paper/15">
              {LINHAS.map((l) => (
                <div key={l.label} className="py-5 flex items-baseline justify-between gap-4">
                  <dt className="eyebrow">{l.dt}</dt>
                  <dd className="text-right">
                    {l.href ? (
                      <a
                        href={l.href}
                        {...(l.externo ? { target: "_blank", rel: "noreferrer" } : {})}
                        className="hover:text-brass transition-colors"
                      >
                        {l.label}
                      </a>
                    ) : (
                      <span className="text-paper/80">{l.label}</span>
                    )}
                  </dd>
                </div>
              ))}
              <div className="py-5 flex items-baseline justify-between gap-4">
                <dt className="eyebrow">Endereço</dt>
                <dd className="text-right max-w-xs text-paper/80">
                  {CONTATO.endereco}
                  <span className="block text-paper/50">{CONTATO.edificio}</span>
                </dd>
              </div>
            </dl>

            <div className="mt-6 flex gap-6 font-body text-xs uppercase tracking-[0.14em] text-paper/60">
              <a href={CONTATO.instagram} target="_blank" rel="noreferrer" className="hover:text-brass">
                Instagram
              </a>
              <a href={CONTATO.google.url} target="_blank" rel="noreferrer" className="hover:text-brass">
                Ver no Google
              </a>
            </div>

            <iframe
              title="Localização do escritório no mapa"
              src={CONTATO.google.mapaEmbed}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="mt-8 w-full h-64 border border-paper/15 bg-paper/5 grayscale contrast-125"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
