// Marca do escritório: coluna clássica sob arco, com estrelas — recriada em SVG,
// monocromática (herda currentColor), escala sem perda. Substitui o antigo traço
// de assinatura pela identidade real da Gimenes e Pires.

// posições das estrelas ao longo do arco superior (círculo r=34 em torno de 50,54)
const ESTRELAS = [-152, -128, -104, -76, -52, -28].map((deg) => {
  const r = (deg * Math.PI) / 180;
  return { x: 50 + 34 * Math.cos(r), y: 54 + 34 * Math.sin(r) };
});

const STAR = "m0-3 .92 1.87 2.06.3-1.49 1.45.35 2.05L0 2.9l-1.84.97.35-2.05L-2.98.37l2.06-.3z";

export function LogoMark({ className = "" }) {
  return (
    <svg viewBox="0 0 100 100" className={className} fill="none" aria-hidden="true">
      {/* arco */}
      <path
        d="M20 84a38 38 0 1 1 60 0"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      {ESTRELAS.map((s, i) => (
        <path key={i} d={STAR} fill="currentColor" transform={`translate(${s.x} ${s.y})`} />
      ))}
      {/* capitel */}
      <rect x="31" y="35" width="38" height="5" fill="currentColor" />
      <rect x="34.5" y="40" width="31" height="3.5" fill="currentColor" />
      {/* fuste canelado */}
      <g stroke="currentColor" strokeWidth="2.1">
        <path d="M37 44v34M43.6 44v34M50 44v34M56.4 44v34M63 44v34" />
      </g>
      {/* base */}
      <rect x="34.5" y="78" width="31" height="3.5" fill="currentColor" />
      <rect x="31" y="81.5" width="38" height="5" fill="currentColor" />
    </svg>
  );
}

export function Wordmark({ className = "", subtitulo = true }) {
  return (
    <span className={`inline-flex items-center gap-3 ${className}`}>
      <LogoMark className="h-9 w-9 shrink-0" />
      <span className="flex flex-col leading-none">
        <span className="font-brand text-lg tracking-[0.14em]">GIMENES E PIRES</span>
        {subtitulo && (
          <span className="font-body text-[9px] tracking-[0.28em] opacity-60 mt-1">
            SOCIEDADE DE ADVOGADOS
          </span>
        )}
      </span>
    </span>
  );
}
