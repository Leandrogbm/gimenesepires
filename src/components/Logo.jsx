// Identidade visual oficial (pasta gimenes_pires_identidade_visual). O traço é
// preto — em fundo escuro usar `invert` para exibir em branco.

// Logo horizontal completo (marca + "GIMENES E PIRES" + "SOCIEDADE DE ADVOGADOS").
export function Wordmark({ className = "" }) {
  return (
    <img
      src="/brand/logo.png"
      srcSet="/brand/logo.png 1x, /brand/logo@2x.png 2x"
      alt="Gimenes e Pires — Sociedade de Advogados"
      width="480"
      height="132"
      className={`w-auto invert ${className}`}
    />
  );
}

// Apenas o ícone (coluna + estrelas + arco).
export function LogoMark({ className = "", invert = true }) {
  return (
    <img
      src="/brand/icone.svg"
      alt=""
      aria-hidden="true"
      className={`${invert ? "invert" : ""} ${className}`}
    />
  );
}
