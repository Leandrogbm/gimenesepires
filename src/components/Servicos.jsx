import WhatsButton from "./WhatsButton";
import Reveal from "./Reveal";

// Ícones minimalistas (linha, mesmo traço do resto do site) — um por área,
// só para dar uma referência visual rápida no cartão, sem ilustração literal.
function IconBase({ children }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className="w-6 h-6 text-accent"
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

const IconBalanca = () => (
  <IconBase>
    <line x1="12" y1="3" x2="12" y2="20" />
    <line x1="8" y1="20" x2="16" y2="20" />
    <line x1="4" y1="7" x2="20" y2="7" />
    <path d="M4 7 2 13a2.5 2.5 0 0 0 5 0L4 7Z" />
    <path d="M20 7l-2 6a2.5 2.5 0 0 0 5 0l-3-6Z" />
  </IconBase>
);

const IconDocumentoSelo = () => (
  <IconBase>
    <rect x="5" y="3" width="14" height="14" rx="1.5" />
    <line x1="8" y1="7" x2="16" y2="7" />
    <line x1="8" y1="10.5" x2="16" y2="10.5" />
    <line x1="8" y1="14" x2="13" y2="14" />
    <circle cx="16" cy="18" r="2.6" />
    <path d="M14.3 20l-.6 3 2.3-1.4 2.3 1.4-.6-3" />
  </IconBase>
);

const IconMaleta = () => (
  <IconBase>
    <rect x="3" y="8" width="18" height="12" rx="2" />
    <path d="M9 8V6a3 3 0 0 1 6 0v2" />
    <line x1="3" y1="13" x2="21" y2="13" />
  </IconBase>
);

const IconCracha = () => (
  <IconBase>
    <rect x="5" y="2" width="4" height="3" rx="1" />
    <rect x="4" y="5" width="16" height="16" rx="2" />
    <circle cx="12" cy="11" r="2.2" />
    <line x1="8.5" y1="16.5" x2="15.5" y2="16.5" />
  </IconBase>
);

const IconMartelo = () => (
  <IconBase>
    <g transform="rotate(45 12 10)">
      <rect x="8.5" y="3" width="7" height="4" rx="1" />
      <line x1="12" y1="7" x2="12" y2="16" />
    </g>
    <line x1="5" y1="20" x2="15" y2="20" />
  </IconBase>
);

const IconEscudo = () => (
  <IconBase>
    <path d="M12 3l7 3v5.5c0 5-3 7.8-7 9-4-1.2-7-4-7-9V6z" />
    <path d="M9 12l2.3 2.3 4.2-4.5" />
  </IconBase>
);

const IconCasa = () => (
  <IconBase>
    <path d="M4 11.5 12 4l8 7.5" />
    <path d="M6 10v10h12V10" />
    <rect x="10" y="14" width="4" height="6" />
  </IconBase>
);

const IconContrato = () => (
  <IconBase>
    <rect x="4" y="3" width="12" height="18" rx="1.5" />
    <line x1="7" y1="8" x2="13" y2="8" />
    <line x1="7" y1="11.5" x2="13" y2="11.5" />
    <path d="M13.5 17.5l4.5-4.5 2 2-4.5 4.5H13z" />
  </IconBase>
);

const IconCadeado = () => (
  <IconBase>
    <rect x="6" y="11" width="12" height="9" rx="1.5" />
    <path d="M8.5 11V8a3.5 3.5 0 0 1 7 0v3" />
    <circle cx="12" cy="15.3" r="1.2" />
  </IconBase>
);

const IconChecklist = () => (
  <IconBase>
    <rect x="6" y="4" width="12" height="17" rx="1.5" />
    <rect x="9" y="2.5" width="6" height="3" rx="1" />
    <path d="M9 12.5l2 2 4-4.5" />
  </IconBase>
);

const IconSacola = () => (
  <IconBase>
    <path d="M6.5 8h11l-1 12h-9z" />
    <path d="M9 8V6a3 3 0 0 1 6 0v2" />
  </IconBase>
);

const IconCartao = () => (
  <IconBase>
    <rect x="3" y="6" width="18" height="13" rx="2" />
    <line x1="3" y1="10" x2="21" y2="10" />
    <line x1="6" y1="14.5" x2="10" y2="14.5" />
  </IconBase>
);

const SERVICOS = [
  {
    titulo: "Direito Civil",
    texto: "Contratos, responsabilidade civil e demais relações entre particulares.",
    Icone: IconBalanca,
  },
  {
    titulo: "Família e Sucessões",
    texto: "Divórcio, guarda, pensão, inventários e partilha de bens.",
    Icone: IconDocumentoSelo,
  },
  {
    titulo: "Empresarial e Societário",
    texto: "Constituição, alteração e reorganização de sociedades.",
    Icone: IconMaleta,
  },
  {
    titulo: "Direito do Trabalho",
    texto: "Reclamações trabalhistas, rescisões e questões entre empregado e empregador.",
    Icone: IconCracha,
  },
  {
    titulo: "Direito Penal",
    texto: "Defesa em inquéritos, processos criminais e medidas cautelares.",
    Icone: IconMartelo,
  },
  {
    titulo: "Direito Previdenciário",
    texto: "Aposentadoria, benefícios e revisões junto ao INSS.",
    Icone: IconEscudo,
  },
  {
    titulo: "Direito Imobiliário",
    texto: "Compra, venda, locação e regularização de imóveis.",
    Icone: IconCasa,
  },
  {
    titulo: "Contratos",
    texto: "Elaboração, revisão e negociação de contratos em geral.",
    Icone: IconContrato,
  },
  {
    titulo: "Direito Digital e Proteção de Dados",
    texto: "Regula a internet, crimes cibernéticos e a adequação das empresas à LGPD.",
    Icone: IconCadeado,
  },
  {
    titulo: "Compliance e ESG",
    texto: "Auxilia organizações a seguirem normas éticas, regulatórias e de sustentabilidade corporativa.",
    Icone: IconChecklist,
  },
  {
    titulo: "Direito do Consumidor",
    texto: "Defende as relações de consumo, lidando com publicidade abusiva, produtos com defeito, cobranças indevidas e e-commerce.",
    Icone: IconSacola,
  },
  {
    titulo: "Direito Bancário e das Fintechs",
    texto: "Regula a atuação de bancos tradicionais, bancos digitais, arranjos de pagamento (como o Pix) e regras do Banco Central.",
    Icone: IconCartao,
  },
];

export default function Servicos() {
  return (
    <section id="atuacao" className="px-6 md:px-10 pt-28 pb-16 sm:pt-32 sm:pb-24 lg:pt-40 lg:pb-32 hairline">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <p className="eyebrow mb-12">Áreas de atuação</p>
          <h2 className="font-display font-light h-sec max-w-2xl text-balance">
            Da <em className="italic text-accent">consultoria preventiva</em> à sala de audiência.
          </h2>
        </Reveal>

        <div className="mt-12 sm:mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {SERVICOS.map((s, i) => (
            <Reveal key={s.titulo} delay={i * 70}>
              <div className="card p-7 sm:p-8 flex flex-col gap-3">
                <s.Icone />
                <h3 className="font-display text-xl text-fg">{s.titulo}</h3>
                <p className="text-muted leading-relaxed text-[15px]">{s.texto}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="mt-12">
          <WhatsButton mensagem="Olá, gostaria de saber qual área se aplica ao meu caso.">
            Saber qual área se aplica ao meu caso
          </WhatsButton>
        </div>
      </div>
    </section>
  );
}
