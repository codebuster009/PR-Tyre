// Decorative tyre/wheel SVG. Two layers spin at different rates for depth.
// Pure CSS animation — zero JS cost.
export default function TyreWheel({ size = 220, className = '', style }) {
  const spokeCount = 5;
  const spokes = Array.from({ length: spokeCount }, (_, i) => i);

  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none ${className}`}
      style={{ width: size, height: size, ...style }}
    >
      {/* Outer tyre — slow rotation */}
      <svg
        viewBox="0 0 200 200"
        className="absolute inset-0 h-full w-full"
        style={{ animation: 'spin 22s linear infinite' }}
      >
        <defs>
          <radialGradient id="tyreGrad" cx="50%" cy="50%" r="50%">
            <stop offset="55%" stopColor="#0e0e0e" stopOpacity="0" />
            <stop offset="78%" stopColor="#0e0e0e" stopOpacity="0.85" />
            <stop offset="100%" stopColor="#0e0e0e" stopOpacity="1" />
          </radialGradient>
        </defs>

        {/* Tread ring */}
        <circle cx="100" cy="100" r="96" fill="url(#tyreGrad)" stroke="rgba(255,184,0,0.35)" strokeWidth="0.8" />
        {/* Tread blocks */}
        {Array.from({ length: 36 }, (_, i) => (
          <rect
            key={i}
            x="98"
            y="2"
            width="4"
            height="10"
            fill="rgba(255,184,0,0.25)"
            transform={`rotate(${i * 10} 100 100)`}
          />
        ))}
        {/* Inner sidewall */}
        <circle cx="100" cy="100" r="68" fill="none" stroke="rgba(255,184,0,0.18)" strokeDasharray="3 5" />
      </svg>

      {/* Inner rim — counter-rotation for parallax */}
      <svg
        viewBox="0 0 200 200"
        className="absolute inset-0 h-full w-full"
        style={{ animation: 'spinRev 12s linear infinite' }}
      >
        {/* Rim outer */}
        <circle cx="100" cy="100" r="58" fill="none" stroke="rgba(255,184,0,0.5)" strokeWidth="1" />
        {/* Spokes */}
        {spokes.map((i) => {
          const a = (i * 360) / spokeCount;
          return (
            <g key={i} transform={`rotate(${a} 100 100)`}>
              <path
                d="M 100 50 L 92 100 L 108 100 Z"
                fill="rgba(255,184,0,0.18)"
                stroke="rgba(255,184,0,0.45)"
                strokeWidth="0.6"
              />
            </g>
          );
        })}
        {/* Hub */}
        <circle cx="100" cy="100" r="14" fill="#ffb800" opacity="0.9" />
        <circle cx="100" cy="100" r="6" fill="#0e0e0e" />
        {/* Lug nuts */}
        {Array.from({ length: 5 }, (_, i) => {
          const a = (i * 360) / 5 - 90;
          const x = 100 + Math.cos((a * Math.PI) / 180) * 10;
          const y = 100 + Math.sin((a * Math.PI) / 180) * 10;
          return <circle key={i} cx={x} cy={y} r="1.6" fill="#ffe9a0" />;
        })}
      </svg>

      <style>{`
        @keyframes spin { to { transform: rotate(360deg); } }
        @keyframes spinRev { to { transform: rotate(-360deg); } }
      `}</style>
    </div>
  );
}
