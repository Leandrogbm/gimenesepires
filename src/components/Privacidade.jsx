import { CONTATO } from "../data/contato";
import Reveal from "./Reveal";

// Texto fornecido pelo escritório. Datas/e-mail/telefone preenchidos a
// partir de CONTATO em vez de hardcoded — mesma fonte usada no resto do site.
const SECOES = [
  {
    titulo: "1. Introdução",
    corpo: `Este site é operado por Gimenes e Pires Advocacia (CNPJ ${CONTATO.cnpj}). Esta Política de Privacidade tem como objetivo informar como coletamos, usamos, armazenamos e protegemos os dados pessoais dos visitantes deste site, em conformidade com a Lei Geral de Proteção de Dados Pessoais (Lei nº 13.709/2018 — LGPD).\n\nAo continuar navegando neste site, você declara estar ciente desta Política. Você pode, a qualquer momento, revisar suas preferências de cookies conforme descrito abaixo.`,
  },
  {
    titulo: "2. Quais dados coletamos",
    corpo: `Podemos coletar os seguintes dados quando você utiliza este site:\n\n— Dados de navegação: endereço IP, tipo de navegador, páginas visitadas, tempo de permanência e origem do acesso, coletados de forma anônima e agregada por meio de ferramentas de análise (Google Analytics).\n— Dados fornecidos voluntariamente: nome, e-mail, telefone e demais informações inseridas em formulários de contato, caso você opte por entrar em contato conosco.\n\nNão coletamos dados sensíveis (como origem racial, convicção religiosa, dados de saúde, etc.) por meio deste site.`,
  },
  {
    titulo: "3. Finalidade do uso dos dados",
    corpo: `Os dados coletados são utilizados para:\n\n— Compreender como o site é utilizado, a fim de melhorar a experiência de navegação;\n— Responder a solicitações de contato e prestar atendimento jurídico;\n— Cumprir obrigações legais e regulatórias aplicáveis à advocacia.`,
  },
  {
    titulo: "4. Cookies",
    corpo: `Utilizamos cookies de análise (Google Analytics) para entender, de forma anônima e agregada, como o site é usado. Esses cookies não identificam você individualmente e não são utilizados para fins de publicidade direcionada.\n\nVocê pode aceitar ou rejeitar o uso de cookies de análise a qualquer momento por meio do banner exibido na primeira visita ou através das configurações do seu navegador. A rejeição dos cookies não impede o uso das funcionalidades essenciais do site.`,
  },
  {
    titulo: "5. Compartilhamento de dados",
    corpo: `Não compartilhamos, vendemos ou alugamos seus dados pessoais a terceiros para fins comerciais. Os dados podem ser compartilhados apenas:\n\n— Com prestadores de serviços que auxiliam na operação do site (ex.: hospedagem, ferramentas de análise), sob obrigação de confidencialidade;\n— Quando exigido por lei, ordem judicial ou autoridade competente.`,
  },
  {
    titulo: "6. Base legal para o tratamento",
    corpo: `O tratamento de dados pessoais realizado por este site se fundamenta, conforme o caso, nas seguintes hipóteses previstas no art. 7º da LGPD:\n\n— Consentimento do titular (cookies de análise);\n— Legítimo interesse do controlador (melhoria do site e atendimento);\n— Cumprimento de obrigação legal ou regulatória.`,
  },
  {
    titulo: "7. Direitos do titular dos dados",
    corpo: `Nos termos da LGPD, você tem direito a:\n\n— Confirmação da existência de tratamento de seus dados;\n— Acesso aos dados;\n— Correção de dados incompletos, inexatos ou desatualizados;\n— Anonimização, bloqueio ou eliminação de dados desnecessários ou tratados em desconformidade com a lei;\n— Portabilidade dos dados;\n— Eliminação dos dados tratados com consentimento;\n— Revogação do consentimento a qualquer momento;\n— Informação sobre entidades públicas e privadas com as quais o controlador realizou uso compartilhado de dados.\n\nPara exercer esses direitos, entre em contato pelo e-mail ${CONTATO.email}.`,
  },
  {
    titulo: "8. Armazenamento e segurança",
    corpo: `Adotamos medidas técnicas e administrativas razoáveis para proteger os dados pessoais coletados contra acessos não autorizados, perda, alteração ou destruição.`,
  },
  {
    titulo: "9. Alterações nesta política",
    corpo: `Esta Política de Privacidade pode ser atualizada periodicamente. Recomendamos a revisão deste documento com regularidade. Alterações relevantes serão comunicadas por meio deste site.`,
  },
  {
    titulo: "10. Contato",
    corpo: `Em caso de dúvidas sobre esta Política ou sobre o tratamento de seus dados pessoais, entre em contato:\n\nGimenes e Pires Advocacia\nCNPJ: ${CONTATO.cnpj}\nE-mail: ${CONTATO.email}\nTelefone: ${CONTATO.telefones.map((t) => t.numero).join(" · ")}`,
  },
];

const ATUALIZADO_EM = "15 de setembro de 2026";

export default function Privacidade() {
  return (
    <section className="px-6 md:px-10 pt-28 pb-16 sm:pt-32 sm:pb-24 lg:pt-40 lg:pb-32 hairline">
      <div className="mx-auto max-w-3xl">
        <Reveal>
          <p className="eyebrow mb-12">Privacidade</p>
          <h1 className="font-display font-light h-sec text-balance">
            Política de Privacidade <em className="italic text-accent">e Cookies.</em>
          </h1>
          <p className="mt-4 text-sm text-muted">Última atualização: {ATUALIZADO_EM}</p>
        </Reveal>

        <div className="mt-12 space-y-10">
          {SECOES.map((s, i) => (
            <Reveal key={s.titulo} delay={Math.min(i, 6) * 60}>
              <h2 className="font-display text-xl text-fg mb-3">{s.titulo}</h2>
              {s.corpo.split("\n\n").map((par) => (
                <p key={par.slice(0, 24)} className="text-muted leading-relaxed whitespace-pre-line mb-3">
                  {par}
                </p>
              ))}
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
