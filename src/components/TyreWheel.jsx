// Animated wheel illustration — black tyre, metallic rim, yellow accents.
// Two layers spin at different rates for parallax depth. Pure CSS animation.
export default function TyreWheel({ size = 220, className = '', style }) {
  const spokeCount = 5;
  const spokes = Array.from({ length: spokeCount }, (_, i) => i);

  return (
    <div
      aria-hidden="true"
      className={`relative pointer-events-none ${className}`}
      style={{ width: size, height: size, ...style }}
    >
      {/* Outer tyre — slow rotation */}
      <svg
        viewBox="0 0 200 200"
        className="absolute inset-0 h-full w-full"
        style={{ animation: 'tyreSpin 22s linear infinite' }}
      >
        <defs>
          {/* Tyre rubber — solid charcoal with subtle inner shading */}
          <radialGradient id="tyreGrad" cx="50%" cy="50%" r="50%">
            <stop offset="50%" stopColor="#171717" stopOpacity="0" />
            <stop offset="74%" stopColor="#1a1a1a" stopOpacity="1" />
            <stop offset="100%" stopColor="#0a0a0a" stopOpacity="1" />
          </radialGradient>
        </defs>

        {/* Tyre band */}
        <circle
          cx="100"
          cy="100"
          r="96"
          fill="url(#tyreGrad)"
          stroke="rgba(255,184,0,0.5)"
          strokeWidth="0.8"
        />
        {/* Tread blocks */}
        {Array.from({ length: 36 }, (_, i) => (
          <rect
            key={i}
            x="98"
            y="2.5"
            width="4"
            height="9"
            fill="rgba(255,184,0,0.55)"
            transform={`rotate(${i * 10} 100 100)`}
          />
        ))}
        {/* Inner sidewall dashed ring */}
        <circle
          cx="100"
          cy="100"
          r="68"
          fill="none"
          stroke="rgba(255,184,0,0.6)"
          strokeWidth="0.7"
          strokeDasharray="3 5"
        />
      </svg>

      {/* Inner rim — counter-rotation */}
      <svg
        viewBox="0 0 200 200"
        className="absolute inset-0 h-full w-full"
        style={{ animation: 'tyreSpinRev 14s linear infinite' }}
      >
        <defs>
          {/* Metallic rim face */}
          <radialGradient id="rimGrad" cx="35%" cy="32%" r="70%">
            <stop offset="0%" stopColor="#f4f3f0" />
            <stop offset="55%" stopColor="#a3a3a3" />
            <stop offset="100%" stopColor="#404040" />
          </radialGradient>
        </defs>

        {/* Rim face */}
        <circle
          cx="100"
          cy="100"
          r="62"
          fill="url(#rimGrad)"
          stroke="#0a0a0a"
          strokeWidth="1.2"
        />
        {/* Inner accent ring */}
        <circle
          cx="100"
          cy="100"
          r="56"
          fill="none"
          stroke="#ffb800"
          strokeWidth="1.4"
        />
        {/* Spokes */}
        {spokes.map((i) => {
          const a = (i * 360) / spokeCount;
          return (
            <g key={i} transform={`rotate(${a} 100 100)`}>
              <path
                d="M 100 48 L 91 100 L 109 100 Z"
                fill="rgba(64,64,64,0.55)"
                stroke="#ffb800"
                strokeWidth="0.7"
              />
            </g>
          );
        })}
        {/* Hub center cap */}
        <circle cx="100" cy="100" r="18" fill="#ffb800" />
        <circle cx="100" cy="100" r="14" fill="#0a0a0a" />
        <circle cx="100" cy="100" r="5" fill="#ffb800" />
        {/* Lug nuts */}
        {Array.from({ length: 5 }, (_, i) => {
          const a = (i * 360) / 5 - 90;
          const x = 100 + Math.cos((a * Math.PI) / 180) * 30;
          const y = 100 + Math.sin((a * Math.PI) / 180) * 30;
          return (
            <g key={i}>
              <circle cx={x} cy={y} r="3" fill="#0a0a0a" />
              <circle cx={x} cy={y} r="1.4" fill="#737373" />
            </g>
          );
        })}
      </svg>

      <style>{`
        @keyframes tyreSpin { to { transform: rotate(360deg); } }
        @keyframes tyreSpinRev { to { transform: rotate(-360deg); } }
      `}</style>
    </div>
  );
}
