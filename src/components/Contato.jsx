import { CONTATO } from "../data/contato";
import Signature from "./Signature";

export default function Contato() {
  return (
    <section id="contato" className="px-6 md:px-10 py-24 md:py-32 border-t border-ink/10">
      <div className="mx-auto max-w-6xl grid md:grid-cols-12 gap-10">
        <div className="md:col-span-5">
          <h2 className="font-display text-3xl md:text-4xl text-ink mb-6">
            Vamos conversar sobre o seu caso.
          </h2>
          <p className="text-ink/70 leading-relaxed max-w-sm">
            Atendimento presencial em São José do Rio Preto e por videochamada
            para clientes de outras cidades.
          </p>
          <Signature className="w-40 h-auto mt-10" color="#A9824F" />
        </div>

        <div className="md:col-span-6 md:col-start-7">
          <dl className="divide-y divide-ink/10 border-t border-b border-ink/10">
            <div className="py-5 flex items-baseline justify-between gap-4">
              <dt className="text-ink/50">Telefone</dt>
              <dd>
                <a href={`tel:${CONTATO.telefone.replace(/\D/g, "")}`} className="hover:text-wine">
                  {CONTATO.telefone}
                </a>
              </dd>
            </div>
            <div className="py-5 flex items-baseline justify-between gap-4">
              <dt className="text-ink/50">WhatsApp</dt>
              <dd>
                <a
                  href={`https://wa.me/${CONTATO.whatsapp}`}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-wine"
                >
                  Enviar mensagem
                </a>
              </dd>
            </div>
            <div className="py-5 flex items-baseline justify-between gap-4">
              <dt className="text-ink/50">E-mail</dt>
              <dd>
                <a href={`mailto:${CONTATO.email}`} className="hover:text-wine">
                  {CONTATO.email}
                </a>
              </dd>
            </div>
            <div className="py-5 flex items-baseline justify-between gap-4">
              <dt className="text-ink/50">Endereço</dt>
              <dd className="text-right max-w-xs">{CONTATO.endereco}</dd>
            </div>
          </dl>

          <div className="mt-8 flex gap-6 text-sm text-ink/60">
            <a href={CONTATO.instagram} target="_blank" rel="noreferrer" className="hover:text-wine">
              Instagram
            </a>
            <a href={CONTATO.linkedin} target="_blank" rel="noreferrer" className="hover:text-wine">
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
