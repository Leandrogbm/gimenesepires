// Dados do escritório. O que veio do Perfil da Empresa no Google já está preenchido;
// o que ainda falta está marcado com TODO(Leandro).
const ENDERECO_BUSCA = encodeURIComponent(
  "Gimenes e Pires Sociedade de Advogados, R. Voluntários de São Paulo, 3180, São José do Rio Preto - SP",
);

export const CONTATO = {
  // Um número por sócia — os botões de WhatsApp deixam o cliente escolher com quem falar.
  telefones: [
    { nome: "Nicole Pires", numero: "(17) 99274-1621", whatsapp: "5517992741621" },
    { nome: "Nathália Gimenes", numero: "(18) 99616-5228", whatsapp: "5518996165228" },
  ],
  email: "contato@gimenesepires.com.br", // TODO(Leandro): confirmar e-mail real
  endereco:
    "R. Voluntários de São Paulo, 3180 — Sala 71, Centro, São José do Rio Preto - SP, 15015-200",
  edificio: "Condomínio Edifício Calil Buchala",
  horario: "Segunda a sexta, a partir das 9h",
  instagram: "https://www.instagram.com/nathalia.nicoleadv/",
  facebook: "https://www.facebook.com/p/Gimenes-e-Pires-Sociedade-de-Advogados-100083034653905/",
  waze: "https://www.waze.com/pt-BR/live-map/directions/condominio-edificio-calil-buchalla-r.-voluntarios-de-sao-paulo-3180-sao-jose-do-rio-preto?to=place.w.203556408.2035695151.7963458",
  linkedin: "", // TODO(Leandro): preencher se houver LinkedIn do escritório
  // Nathália Fernandes Gimenes — inscrita em SP, RJ e BA
  oabNathalia: "OAB/SP 415.344 · OAB/RJ 233.923 · OAB/BA 71.774",
  // Nicole Rossatto Pires de Campos Lima
  oabNicole: "OAB/SP 409.327",
  oabMarco: "", // TODO(Leandro): OAB do Marco A. Pires
  oabGiovana: "", // TODO(Leandro): OAB da Giovana Alessio

  // Avaliações e localização — Perfil da Empresa no Google
  google: {
    nota: "5,0",
    avaliacoes: 20,
    url: `https://www.google.com/maps/search/?api=1&query=${ENDERECO_BUSCA}`,
    mapaEmbed: `https://www.google.com/maps?q=${ENDERECO_BUSCA}&z=16&output=embed`,
  },
};
