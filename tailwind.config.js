/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#1D1E20",     // quase-preto — texto e seções escuras
        paper: "#F1F2F3",    // cinza claro neutro — fundo
        wine: "#1D1E20",     // preto — acento e ênfase (destaque do nome)
        brass: "#B08968",    // marrom claro — rótulos, números, detalhes em fundo escuro
        card: "#FBFBFB",     // branco quase puro — cartões sobre o fundo cinza
      },
      fontFamily: {
        display: ["Newsreader", "Georgia", "serif"],
        body: ["Inter", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
