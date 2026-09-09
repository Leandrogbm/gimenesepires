import { CONTATO } from "../data/contato";

export default function Footer() {
  const ano = new Date().getFullYear();
  return (
    <footer className="px-6 md:px-10 py-12">
      <div className="mx-auto max-w-6xl flex flex-col md:flex-row items-start md:items-center justify-between gap-4 font-body text-xs uppercase tracking-[0.14em] text-ink/50">
        <p>
          &copy; {ano} Gimenes e Pires · Sociedade de Advogados · Nathalia Gimenes {CONTATO.oabNathalia} ·
          Nicole Pires {CONTATO.oabNicole}
        </p>
        <p>São José do Rio Preto, SP</p>
      </div>
    </footer>
  );
}
