import { CONTATO } from "../data/contato";

export default function Footer() {
  const ano = new Date().getFullYear();
  const fundacao = 2019;
  return (
    <footer className="px-6 md:px-10 py-10 sm:py-12 hairline">
      <div className="mx-auto max-w-6xl font-body text-xs uppercase tracking-[0.14em] text-muted">
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4">
          <p>
            &copy; {fundacao}&ndash;{ano} <span className="text-accent font-medium">Gimenes e Pires</span> · Sociedade
            de Advogados · Nathalia Gimenes {CONTATO.oabNathalia} · Nicole Pires {CONTATO.oabNicole}
          </p>
          <p>São José do Rio Preto, SP</p>
        </div>
        <p className="mt-4 normal-case tracking-normal text-muted max-w-xl">
          Este site é informativo e não substitui a consulta a um advogado. O contato
          inicial não gera vínculo nem cobrança. Seus dados são tratados com sigilo,
          conforme a LGPD.
        </p>
      </div>
    </footer>
  );
}
