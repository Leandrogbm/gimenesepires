// Dados do escritório. O que veio do Perfil da Empresa no Google já está preenchido;
// o que ainda falta está marcado com TODO(Leandro).
const ENDERECO_BUSCA = encodeURIComponent(
  "Gimenes e Pires Sociedade de Advogados, R. Voluntários de São Paulo, 3180, São José do Rio Preto - SP",
);

export const CONTATO = {
  telefones: ["(17) 99274-1621", "(18) 99616-5228"],
  whatsapp: "5518996165228", // (18) 99616-5228 — apenas números, com DDI 55
  email: "contato@gimenesepires.com.br", // TODO(Leandro): confirmar e-mail real
  endereco:
    "R. Voluntários de São Paulo, 3180 — Sala 71, Centro, São José do Rio Preto - SP, 15015-200",
  edificio: "Condomínio Edifício Calil Buchala",
  horario: "Segunda a sexta, a partir das 9h",
  instagram: "https://www.instagram.com/nathalia.nicoleadv/",
  linkedin: "", // TODO(Leandro): preencher se houver LinkedIn do escritório
  oabNathalia: "OAB/SP 000.000", // TODO(Leandro)
  oabNicole: "OAB/SP 000.000", // TODO(Leandro)

  // Avaliações e localização — Perfil da Empresa no Google
  google: {
    nota: "5,0",
    avaliacoes: 20,
    url: `https://www.google.com/maps/search/?api=1&query=${ENDERECO_BUSCA}`,
    mapaEmbed: `https://www.google.com/maps?q=${ENDERECO_BUSCA}&z=16&output=embed`,
  },
};
