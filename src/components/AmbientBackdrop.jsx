// Fixed-position decorative layer: drifting gradient blobs + faint grid.
// Pure CSS animations — zero JS cost after mount.
export default function AmbientBackdrop() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
    >
      {/* Faint engineering grid */}
      <div
        className="absolute inset-0 opacity-[0.35] bg-grid-pattern bg-grid-40 animate-gridShift"
        style={{
          maskImage:
            'radial-gradient(ellipse at 50% 30%, black 30%, transparent 75%)',
          WebkitMaskImage:
            'radial-gradient(ellipse at 50% 30%, black 30%, transparent 75%)',
        }}
      />

      {/* Amber glow blob */}
      <div
        className="absolute -top-40 left-1/2 h-[700px] w-[700px] -translate-x-1/2 rounded-full blur-[140px] animate-floatY"
        style={{ background: 'radial-gradient(closest-side, rgba(255,184,0,0.18), transparent)' }}
      />

      {/* Green glow blob */}
      <div
        className="absolute bottom-[-200px] left-[-150px] h-[500px] w-[500px] rounded-full blur-[140px] animate-floatY"
        style={{
          background: 'radial-gradient(closest-side, rgba(77,224,130,0.10), transparent)',
          animationDelay: '1.4s',
        }}
      />

      {/* Soft purple/blue accent */}
      <div
        className="absolute top-[40%] right-[-200px] h-[600px] w-[600px] rounded-full blur-[160px] animate-floatY"
        style={{
          background: 'radial-gradient(closest-side, rgba(120,140,255,0.07), transparent)',
          animationDelay: '2.8s',
        }}
      />

      {/* Vignette to keep content focus */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse at center, transparent 30%, rgba(14,14,14,0.6) 100%)',
        }}
      />
    </div>
  );
}
