import { useEffect, useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Servicos from "./components/Servicos";
import Sobre from "./components/Sobre";
import FAQ from "./components/FAQ";
import Contato from "./components/Contato";

// Páginas reais via hash (#/rota) — sem lib de rotas: o GitHub Pages não
// reescreve URL pro servidor, então hash routing evita o problema de 404
// em link direto/refresh. Rotas usam "/", hashes sem "/" (ex.: o skip link
// "#conteudo") são ignorados pelo router e continuam como âncora nativa.
const ROTAS = {
  "/": Home,
  "/atuacao": Servicos,
  "/advogados": Sobre,
  "/duvidas": FAQ,
  "/contato": Contato,
};

function rotaAtual() {
  const h = window.location.hash.slice(1);
  return h.startsWith("/") && ROTAS[h] ? h : "/";
}

function useRota() {
  const [rota, setRota] = useState(rotaAtual);
  useEffect(() => {
    const onHashChange = () => {
      const h = window.location.hash.slice(1);
      if (h.startsWith("/")) setRota(ROTAS[h] ? h : "/");
    };
    window.addEventListener("hashchange", onHashChange);
    return () => window.removeEventListener("hashchange", onHashChange);
  }, []);
  return rota;
}

export default function App() {
  const rota = useRota();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [rota]);

  const Pagina = ROTAS[rota];

  return (
    <div className="min-h-screen">
      <a
        href="#conteudo"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:bg-bg focus:px-4 focus:py-3 focus:text-fg"
      >
        Pular para o conteúdo
      </a>
      <Header rota={rota} />
      <main id="conteudo">
        <Pagina />
      </main>
      <Footer />
    </div>
  );
}
