/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#1B1B18",     // quase-preto — texto e seções escuras (cor da logo)
        paper: "#F0F0EE",    // cinza bem claro — fundo
        wine: "#7C5A2E",     // bronze profundo — acento e ênfase
        brass: "#B08E56",    // ouro claro — rótulos, números, detalhes em fundo escuro
      },
      fontFamily: {
        display: ["Newsreader", "Georgia", "serif"],
        body: ["Inter", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
