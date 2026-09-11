import { useEffect, useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import WhatsFloat from "./components/WhatsFloat";
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

const TITULOS = {
  "/": "Gimenes e Pires — Sociedade de Advogados",
  "/atuacao": "Áreas de Atuação — Gimenes e Pires",
  "/advogados": "Quadro de Advogados — Gimenes e Pires",
  "/duvidas": "Dúvidas — Gimenes e Pires",
  "/contato": "Contato — Gimenes e Pires",
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
    document.title = TITULOS[rota] ?? TITULOS["/"];
    // Page view manual — a rota é um hash (#/x), o GA4 nunca veria isso
    // sozinho, e o automático (send_page_view) só dispara uma vez no load.
    if (typeof window.gtag === "function") {
      window.gtag("event", "page_view", {
        page_path: rota,
        page_location: window.location.href,
        page_title: document.title,
      });
    }
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
      <WhatsFloat />
    </div>
  );
}
