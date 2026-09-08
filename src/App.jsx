import Header from "./components/Header";
import Hero from "./components/Hero";
import Sobre from "./components/Sobre";
import Atuacao from "./components/Atuacao";
import Diferenciais from "./components/Diferenciais";
import Contato from "./components/Contato";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Sobre />
        <Atuacao />
        <Diferenciais />
        <Contato />
      </main>
      <Footer />
    </div>
  );
}
