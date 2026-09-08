// Traço de assinatura conjunta — usado como marca recorrente, discreta, nunca decorativa por si só.
export default function Signature({ className = "", color = "#A9482F" }) {
  return (
    <svg
      viewBox="0 0 260 48"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M4 34C10 18 16 10 22 10C28 10 26 30 30 34C34 38 42 20 48 16C54 12 54 30 60 32C66 34 72 14 80 14C88 14 86 36 94 36C102 36 108 8 118 8C128 8 122 40 132 40C140 40 142 20 150 18C156.5 16.3 158 30 166 30C174 30 178 12 186 12C192.8 12 190 30 196 32C204 34.5 210 16 218 16C224.5 16 224 28 230 30"
        stroke={color}
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="238" cy="24" r="2.3" fill={color} />
    </svg>
  );
}
