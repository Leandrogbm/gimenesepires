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
        <div className="grid md:grid-cols-12 gap-10 mb-14">
          <div className="md:col-span-4">
            <h2 className="font-display text-3xl md:text-4xl text-ink">Diferenciais</h2>
          </div>
        </div>

        <div className="grid md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-ink/10 border-t border-b border-ink/10">
          {ITENS.map((item) => (
            <div key={item.titulo} className="py-10 md:px-8 first:md:pl-0">
              <h3 className="font-display italic text-xl text-wine mb-3">{item.titulo}</h3>
              <p className="text-ink/70 leading-relaxed">{item.texto}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
