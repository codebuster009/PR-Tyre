// Calm warm wash for the page — replaces the prior tech-grid + glow-blob layer.
// Pure CSS, no JS cost after mount.
export default function AmbientBackdrop() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-background"
    >
      {/* Soft warm glow at the top to lift the hero — subtle, not "tech" */}
      <div
        className="absolute -top-40 left-1/2 h-[600px] w-[1100px] max-w-[140vw] -translate-x-1/2 rounded-full blur-[120px]"
        style={{
          background:
            'radial-gradient(closest-side, rgba(255,184,0,0.10), transparent 70%)',
        }}
      />
    </div>
  );
}
