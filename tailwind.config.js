/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        // Modo escuro é a identidade — não há tema claro.
        bg: "oklch(15.9% 0 0)", // preto levemente acinzentado — fundo
        fg: "oklch(95.5% 0.008 90)", // branco quente — texto
        muted: "oklch(72% 0.012 80)", // texto secundário / parágrafos
        card: "oklch(21.5% 0 0)", // superfície de cartão / seções destacadas
        accent: "oklch(75% 0.11 85)", // DOURADO — assinatura da marca, uso pontual
        "accent-ink": "oklch(15.9% 0 0)", // texto escuro sobre dourado
        line: "oklch(75% 0.11 85 / 0.22)", // bordas = dourado translúcido
      },
      fontFamily: {
        display: ['"Libre Baskerville"', "Georgia", "serif"],
        body: ['"IBM Plex Sans"', "system-ui", "sans-serif"],
      },
      borderRadius: {
        sm: "0.25rem",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      animation: {
        // percorre a faixa duplicada (ver Clientes.jsx) — -50% = uma volta completa
        marquee: "marquee 36s linear infinite",
      },
    },
  },
  plugins: [],
};
