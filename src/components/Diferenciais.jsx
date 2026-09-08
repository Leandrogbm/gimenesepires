const ITENS = [
  {
    titulo: "Duas assinaturas em cada caso",
    texto: "As sócias participam diretamente do acompanhamento, não apenas da estratégia inicial.",
  },
  {
    titulo: "Acompanhamento processual próximo",
    texto: "Cliente informado a cada andamento relevante, sem precisar perguntar.",
  },
  {
    titulo: "Atendimento no interior paulista",
    texto: "Conhecimento direto do fórum, das varas e da rotina de São José do Rio Preto e região.",
  },
];

export default function Diferenciais() {
  return (
    <section id="diferenciais" className="px-6 md:px-10 py-24 md:py-32">
      <div className="mx-auto max-w-6xl">
        <p className="eyebrow mb-12">03 — Diferenciais</p>

        <div className="grid md:grid-cols-3 gap-px bg-ink/10 border-y border-ink/10">
          {ITENS.map((item, i) => (
            <div key={item.titulo} className="bg-paper py-12 md:px-8 first:md:pl-0">
              <span className="font-display italic text-brass text-3xl">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="font-display text-xl text-ink mt-4 mb-3">{item.titulo}</h3>
              <p className="text-ink/70 leading-relaxed">{item.texto}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
