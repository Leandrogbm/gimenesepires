import { CONTATO } from "../data/contato";
import Signature from "./Signature";

const LINHAS = [
  { dt: "Telefone", href: `tel:${CONTATO.telefone.replace(/\D/g, "")}`, label: CONTATO.telefone },
  { dt: "WhatsApp", href: `https://wa.me/${CONTATO.whatsapp}`, label: "Enviar mensagem", externo: true },
  { dt: "E-mail", href: `mailto:${CONTATO.email}`, label: CONTATO.email },
];

export default function Contato() {
  return (
    <section id="contato" className="px-6 md:px-10 py-24 md:py-32 bg-ink text-paper">
      <div className="mx-auto max-w-6xl">
        <p className="eyebrow mb-12">04 — Contato</p>

        <div className="grid md:grid-cols-12 gap-10">
          <div className="md:col-span-5">
            <h2 className="font-display font-light text-4xl md:text-[3.4rem] md:leading-[1.05]">
              Vamos conversar sobre o <em className="italic text-brass">seu caso.</em>
            </h2>
            <p className="text-paper/70 leading-relaxed max-w-sm mt-6">
              Atendimento presencial em São José do Rio Preto e por videochamada
              para clientes de outras cidades.
            </p>
            <Signature className="w-44 h-auto mt-12" color="#9C7C4A" />
          </div>

          <div className="md:col-span-6 md:col-start-7">
            <dl className="divide-y divide-paper/15 border-y border-paper/15">
              {LINHAS.map((l) => (
                <div key={l.dt} className="py-5 flex items-baseline justify-between gap-4">
                  <dt className="eyebrow">{l.dt}</dt>
                  <dd>
                    <a
                      href={l.href}
                      {...(l.externo ? { target: "_blank", rel: "noreferrer" } : {})}
                      className="hover:text-brass transition-colors"
                    >
                      {l.label}
                    </a>
                  </dd>
                </div>
              ))}
              <div className="py-5 flex items-baseline justify-between gap-4">
                <dt className="eyebrow">Endereço</dt>
                <dd className="text-right max-w-xs text-paper/80">{CONTATO.endereco}</dd>
              </div>
            </dl>

            <div className="mt-8 flex gap-6 font-body text-xs uppercase tracking-[0.14em] text-paper/60">
              <a href={CONTATO.instagram} target="_blank" rel="noreferrer" className="hover:text-brass">
                Instagram
              </a>
              <a href={CONTATO.linkedin} target="_blank" rel="noreferrer" className="hover:text-brass">
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
