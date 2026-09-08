/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#16283D",     // navio profundo — texto e seções escuras
        paper: "#FAF7F2",    // marfim quente — fundo
        wine: "#A9482F",     // terracota — acento único
        brass: "#9C7C4A",    // ouro velho — rótulos e detalhes
      },
      fontFamily: {
        display: ["Newsreader", "Georgia", "serif"],
        body: ["Inter", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
