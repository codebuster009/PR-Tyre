const brands = [
  'HANKOOK',
  'GOODYEAR',
  'MAXXIS',
  'MATADOR',
  'MICHELIN',
  'PIRELLI',
  'BRIDGESTONE',
  'CONTINENTAL',
];

export default function Brands() {
  // Duplicate list for seamless marquee loop
  const loop = [...brands, ...brands];

  return (
    <section className="relative py-10 md:py-12 border-y border-white/5 bg-surface-container-lowest/40">
      <div className="max-w-container-max mx-auto px-5 md:px-12 text-center">
        <p className="text-[10px] sm:text-[11px] uppercase tracking-[0.25em] sm:tracking-[0.3em] text-on-surface-variant mb-6 md:mb-8">
          Premium Brands · Supplied & Fitted
        </p>
      </div>

      <div className="relative overflow-hidden group">
        {/* Edge fades */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-12 sm:w-24 z-10 bg-gradient-to-r from-surface to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-12 sm:w-24 z-10 bg-gradient-to-l from-surface to-transparent" />

        <div className="flex w-max animate-marquee gap-8 sm:gap-12 md:gap-16 px-6 sm:px-12 will-change-transform group-hover:[animation-play-state:paused]">
          {loop.map((brand, i) => (
            <span
              key={`${brand}-${i}`}
              className="text-xl sm:text-2xl md:text-headline-md font-extrabold tracking-widest text-on-surface-variant/60 hover:text-primary-container transition-colors duration-300 whitespace-nowrap"
            >
              {brand}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
