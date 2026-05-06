import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';
import TyreWheel from './TyreWheel.jsx';
import { getCtx, tryResume, playSkidThud } from '../lib/audio.js';

// Page-load greeting: tyre rolls in from the left, brakes at viewport
// centre with a dust puff and a short skid+thud, then rolls off the right.
// Audio fires on first gesture or directly at the brake moment if the
// origin already has autoplay permission.
export default function TyreEntranceGreeting() {
  const [show, setShow] = useState(true);

  useEffect(() => {
    let played = false;
    const animationStart = performance.now();

    const tryPlay = () => {
      if (played) return;
      const ctx = getCtx();
      if (!ctx || ctx.state !== 'running') return;
      played = true;
      playSkidThud(ctx);
    };

    // Schedule the brake sound to land with the visual brake (~1.2s in).
    tryResume();
    const audioTimer = setTimeout(() => {
      tryResume();
      setTimeout(tryPlay, 30);
    }, 1200);

    // If audio is still locked at the brake, fire on first gesture
    // — but only while the dust visual is still present (≤ 2s in).
    const onGesture = () => {
      tryResume();
      setTimeout(() => {
        if (played) return;
        const elapsed = performance.now() - animationStart;
        if (elapsed < 2000) tryPlay();
      }, 30);
    };

    const gestures = ['pointerdown', 'keydown', 'touchstart', 'click'];
    gestures.forEach((e) =>
      document.addEventListener(e, onGesture, { passive: true })
    );

    const dismissTimer = setTimeout(() => setShow(false), 3700);

    return () => {
      clearTimeout(audioTimer);
      clearTimeout(dismissTimer);
      gestures.forEach((e) => document.removeEventListener(e, onGesture));
    };
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.35 }}
          className="fixed inset-0 z-[60] pointer-events-none overflow-hidden"
          aria-hidden="true"
        >
          {/* Lane-marker trail laid down behind the tyre */}
          <div className="absolute top-1/2 left-0 right-0 h-1.5 -translate-y-1/2">
            <motion.div
              initial={{ scaleX: 0, opacity: 0 }}
              animate={{
                scaleX: [0, 0.5, 0.5, 1.05],
                opacity: [0, 0.9, 0.9, 0],
              }}
              transition={{
                duration: 3.5,
                times: [0, 0.35, 0.6, 1],
                ease: 'linear',
              }}
              style={{
                transformOrigin: 'left center',
                backgroundImage:
                  'repeating-linear-gradient(to right, rgba(255,184,0,0.75) 0 14px, transparent 14px 28px)',
              }}
              className="absolute inset-0"
            />
          </div>

          {/* Rolling tyre — outer translates X, inner Y bounces & rotates */}
          <div className="absolute inset-0 flex items-center">
            <motion.div
              initial={{ x: '-30vw' }}
              animate={{ x: ['-30vw', '50vw', '50vw', '110vw'] }}
              transition={{
                duration: 3.5,
                times: [0, 0.35, 0.6, 1],
                ease: [0.4, 0.0, 0.2, 1],
              }}
            >
              <motion.div
                animate={{
                  y: [0, 0, -36, 0, 0],
                  rotate: [0, 720, 720, 720, 1440],
                }}
                transition={{
                  duration: 3.5,
                  times: [0, 0.35, 0.5, 0.6, 1],
                  ease: [0.4, 0.0, 0.2, 1],
                }}
              >
                <TyreWheel size={120} className="hidden md:block" />
                <TyreWheel size={80} className="md:hidden" />
              </motion.div>
            </motion.div>
          </div>

          <DustPuff />
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function DustPuff() {
  const particles = Array.from({ length: 8 }, (_, i) => {
    const angle = (i / 8) * Math.PI * 2;
    return {
      dx: Math.cos(angle),
      dy: Math.sin(angle) * 0.6,
    };
  });

  return (
    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
      <div className="relative translate-y-[40px] md:translate-y-[60px]">
        {particles.map((p, i) => (
          <motion.div
            key={i}
            initial={{ x: 0, y: 0, opacity: 0, scale: 0 }}
            animate={{
              x: p.dx * (50 + i * 6),
              y: p.dy * (40 + i * 4),
              opacity: [0, 0.45, 0],
              scale: [0, 1.2, 1.8],
            }}
            transition={{
              delay: 1.2 + i * 0.015,
              duration: 0.9,
              ease: 'easeOut',
            }}
            className="absolute h-2.5 w-2.5 md:h-3 md:w-3 rounded-full bg-on-surface-variant/45"
            style={{ filter: 'blur(2.5px)', left: -6, top: -6 }}
          />
        ))}
      </div>
    </div>
  );
}
