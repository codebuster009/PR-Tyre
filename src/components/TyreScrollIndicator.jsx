import { useEffect, useRef } from 'react';

// Vertical scroll indicator pinned to the left edge:
//   - thin yellow road-dash track (with a faint base line)
//   - a 32px tyre rolls down the track in lock-step with scroll position
//   - rotates clockwise on scroll-down, anticlockwise on scroll-up
//   - hidden when at the top of the page; desktop-only (mobile is too narrow)
//   - updates via DOM refs + rAF — zero React re-renders during scroll
export default function TyreScrollIndicator() {
  const wrapperRef = useRef(null);
  const fillRef = useRef(null);
  const tyreRef = useRef(null);

  useEffect(() => {
    let ticking = false;
    let lastY = window.scrollY;
    let rotation = 0;

    const update = () => {
      const docH =
        document.documentElement.scrollHeight - window.innerHeight;
      const progress =
        docH > 0 ? Math.max(0, Math.min(1, window.scrollY / docH)) : 0;

      const delta = window.scrollY - lastY;
      lastY = window.scrollY;
      rotation += delta * 0.7;

      const wrapper = wrapperRef.current;
      if (wrapper) {
        wrapper.style.opacity = progress > 0.005 ? '1' : '0';
      }
      if (fillRef.current) {
        fillRef.current.style.height = `${progress * 100}%`;
      }
      if (tyreRef.current && wrapper) {
        // Pixel-based positioning so the tyre stays inside the track
        // bounds at progress=0 and progress=1 (no half-clipped wheel).
        const trackH = wrapper.offsetHeight;
        const tyrePx = progress * Math.max(0, trackH - 32);
        tyreRef.current.style.top = `${tyrePx}px`;
        tyreRef.current.style.transform = `translateX(-50%) rotate(${rotation}deg)`;
      }

      ticking = false;
    };

    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(update);
        ticking = true;
      }
    };

    update();
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, []);

  return (
    <div
      ref={wrapperRef}
      aria-hidden="true"
      className="fixed top-[140px] bottom-[100px] right-4 lg:right-6 w-8 z-40 pointer-events-none hidden md:block transition-opacity duration-300"
      style={{ opacity: 0 }}
    >
      <div className="relative h-full w-full">
        {/* faint full-height track */}
        <div className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-px bg-on-surface/[0.10]" />

        {/* yellow road-dash fill, grows downward with progress */}
        <div
          ref={fillRef}
          className="absolute top-0 left-1/2 -translate-x-1/2 w-px"
          style={{
            height: '0%',
            backgroundImage:
              'repeating-linear-gradient(to bottom, rgba(255,184,0,0.7) 0 8px, transparent 8px 14px)',
          }}
        />

        {/* rolling tyre — proper-sized so it reads as a wheel, not a glitch */}
        <div
          ref={tyreRef}
          className="absolute left-1/2"
          style={{
            top: '0px',
            transform: 'translateX(-50%) rotate(0deg)',
          }}
        >
          <svg
            width="32"
            height="32"
            viewBox="0 0 32 32"
            className="drop-shadow-[0_3px_6px_rgba(0,0,0,0.2)]"
          >
            <defs>
              <radialGradient id="tyreScrollRimGrad" cx="35%" cy="32%" r="65%">
                <stop offset="0%" stopColor="#f4f3f0" />
                <stop offset="55%" stopColor="#a3a3a3" />
                <stop offset="100%" stopColor="#404040" />
              </radialGradient>
            </defs>
            {/* rubber band */}
            <circle cx="16" cy="16" r="14.5" fill="#0a0a0a" stroke="#ffb800" strokeWidth="0.6" />
            {/* tread blocks */}
            {Array.from({ length: 16 }, (_, i) => (
              <rect
                key={i}
                x="15.5"
                y="1.2"
                width="1"
                height="2.2"
                fill="#ffb800"
                opacity="0.55"
                transform={`rotate(${i * 22.5} 16 16)`}
              />
            ))}
            {/* metallic rim */}
            <circle cx="16" cy="16" r="10" fill="url(#tyreScrollRimGrad)" stroke="#ffb800" strokeWidth="0.5" />
            {/* spokes */}
            {[0, 72, 144, 216, 288].map((a) => (
              <path
                key={a}
                d="M 16 7.5 L 14.5 16 L 17.5 16 Z"
                fill="rgba(64,64,64,0.5)"
                stroke="#ffb800"
                strokeWidth="0.4"
                transform={`rotate(${a} 16 16)`}
              />
            ))}
            {/* hub */}
            <circle cx="16" cy="16" r="3" fill="#ffb800" />
            <circle cx="16" cy="16" r="1.5" fill="#0a0a0a" />
          </svg>
        </div>
      </div>
    </div>
  );
}
