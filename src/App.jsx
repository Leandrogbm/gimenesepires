import Header from "./components/Header";
import Hero from "./components/Hero";
import Servicos from "./components/Servicos";
import Sobre from "./components/Sobre";
import Confianca from "./components/Confianca";
import FAQ from "./components/FAQ";
import Contato from "./components/Contato";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen">
      <a
        href="#conteudo"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:bg-bg focus:px-4 focus:py-3 focus:text-fg"
      >
        Pular para o conteúdo
      </a>
      <Header />
      <main id="conteudo">
        <Hero />
        <Servicos />
        <Sobre />
        <Confianca />
        <FAQ />
        <Contato />
      </main>
      <Footer />
    </div>
  );
}
