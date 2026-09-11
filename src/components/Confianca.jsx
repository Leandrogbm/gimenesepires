import WhatsButton from "./WhatsButton";

const PROMESSAS = [
  {
    titulo: "Sem juridiquês",
    texto: "A gente explica o que está acontecendo e quais são as opções, em português claro.",
  },
  {
    titulo: "Toda a equipe em cada caso",
    texto: "A equipe acompanha o processo de perto — não só a estratégia inicial.",
  },
  {
    titulo: "Você sempre sabe onde está",
    texto: "Cliente informado a cada andamento relevante, sem precisar ligar cobrando notícia.",
  },
  {
    titulo: "Sigilo total",
    texto: "O que você conta fica entre você e o escritório. Seus dados são tratados conforme a LGPD.",
  },
];

export default function Confianca() {
  return (
    <section id="diferenciais" className="px-6 md:px-10 py-16 sm:py-24 lg:py-32 bg-card">
      <div className="mx-auto max-w-6xl">
        <p className="eyebrow mb-12">02 — Por que a Gimenes e Pires</p>
        <h2 className="font-display font-light h-sec max-w-2xl text-balance">
          Você não precisa <em className="italic text-accent">resolver isso sozinho.</em>
        </h2>

        <div className="mt-12 sm:mt-16 grid sm:grid-cols-2 gap-4">
          {PROMESSAS.map((p) => (
            <div key={p.titulo} className="card p-7 sm:p-8 md:p-10">
              <h3 className="font-display italic text-xl text-accent mb-3">{p.titulo}</h3>
              <p className="text-fg/75 leading-relaxed">{p.texto}</p>
            </div>
          ))}
        </div>

        <div className="mt-12">
          <WhatsButton
            variant="link"
            mensagem="Olá! Gostaria de conversar sobre o meu caso com o escritório."
          >
            Conversar agora, sem compromisso
          </WhatsButton>
        </div>
      </div>
    </section>
  );
}
