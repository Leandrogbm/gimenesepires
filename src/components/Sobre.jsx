const SOCIAS = [
  {
    iniciais: "NG",
    nome: "Nathalia Gimenes",
    linha: "Sócia-fundadora",
    texto:
      "Conduz as frentes tributária e contratual do escritório, com foco em planejamento fiscal para empresas do Simples Nacional e assessoria jurídica contínua a pequenos e médios negócios da região.",
    cor: "bg-wine",
  },
  {
    iniciais: "NP",
    nome: "Nicole Pires",
    linha: "Sócia-fundadora",
    texto:
      "Responde pelo contencioso cível e pelo acompanhamento processual do escritório, da notificação extrajudicial à condução de ações em juízo.",
    cor: "bg-ink",
  },
];

export default function Sobre() {
  return (
    <section id="sobre" className="px-6 md:px-10 py-24 md:py-32 border-t border-ink/10">
      <div className="mx-auto max-w-6xl">
        <div className="grid md:grid-cols-12 gap-10 mb-16">
          <div className="md:col-span-4">
            <h2 className="font-display text-3xl md:text-4xl text-ink">
              Duas advogadas, <em className="italic text-wine">um só compromisso.</em>
            </h2>
          </div>
          <div className="md:col-span-7 md:col-start-6 text-ink/70 text-lg leading-relaxed">
            <p>
              O Gimenes &amp; Pires nasceu da sociedade entre duas advogadas que dividem a
              mesma mesa de trabalho e o mesmo padrão de exigência. Cada processo que
              entra no escritório passa pelas duas — não por protocolo, mas porque foi
              assim que decidiram trabalhar desde o primeiro caso.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-px bg-ink/10">
          {SOCIAS.map((s) => (
            <div key={s.iniciais} className="bg-paper p-8 md:p-10 flex flex-col gap-6">
              <div
                className={`${s.cor} text-paper w-16 h-16 flex items-center justify-center font-display italic text-xl`}
              >
                {s.iniciais}
              </div>
              <div>
                <h3 className="font-display text-2xl text-ink">{s.nome}</h3>
                <p className="text-brass text-sm mt-1">{s.linha}</p>
              </div>
              <p className="text-ink/70 leading-relaxed">{s.texto}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
