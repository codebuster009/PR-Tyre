import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import Counter from './Counter.jsx';

const reviews = [
  {
    quote:
      'Punctured at 11pm on the M25. They had a tech with me in 22 minutes, balanced and back on the road in under an hour. Genuine lifesavers.',
    name: 'James Whitlock',
    vehicle: 'BMW 3 Series',
    location: 'Junction 13, M25',
  },
  {
    quote:
      'Booked a fleet rotation for our delivery vans. Professional, on-time, paperwork sorted on the spot. Best mobile service we’ve used.',
    name: 'Priya Shah',
    vehicle: 'Fleet · 6 vans',
    location: 'Slough',
  },
  {
    quote:
      'Sidewall tear on a holiday morning — every shop closed. PR Mobile picked up first ring, drove out to Egham, fitted a matching tyre on the spot.',
    name: 'Marcus Reid',
    vehicle: 'Audi Q5',
    location: 'Egham',
  },
  {
    quote:
      'They quoted, they delivered, no surprises. Card payment on arrival, a real receipt, polite crew. Texted me a check-up reminder a month later.',
    name: 'Hannah Kowalski',
    vehicle: 'Range Rover Evoque',
    location: 'Windsor',
  },
];

export default function Testimonials() {
  const [i, setI] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const t = setTimeout(() => setI((n) => (n + 1) % reviews.length), 5500);
    return () => clearTimeout(t);
  }, [i, paused]);

  const r = reviews[i];

  return (
    <section
      className="relative py-16 md:py-section-padding overflow-hidden"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* Backdrop glow */}
      <div
        aria-hidden="true"
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[400px] w-[800px] max-w-full blur-[140px] opacity-40 pointer-events-none rounded-full"
        style={{
          background:
            'radial-gradient(closest-side, rgba(255,184,0,0.12), transparent)',
        }}
      />

      <div className="relative max-w-container-max mx-auto px-5 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 md:gap-12 items-center">
          {/* Heading + summary */}
          <div className="lg:col-span-4">
            <span className="inline-block text-[10px] sm:text-[11px] uppercase tracking-[0.25em] sm:tracking-[0.3em] text-primary-container mb-3">
              Client voices
            </span>
            <h2 className="text-3xl sm:text-headline-lg text-on-surface mb-4 font-bold">
              Trusted at <span className="shimmer-text">3am</span> as much as 3pm.
            </h2>
            <p className="text-base text-on-surface-variant mb-6">
              Real drivers, real moments. Here’s what people say after we’ve
              shown up.
            </p>

            <div className="grid grid-cols-2 gap-px bg-white/10 border border-white/10 max-w-sm">
              <div className="bg-surface-container-lowest p-4">
                <div className="text-[10px] uppercase tracking-widest text-on-surface-variant">
                  Avg rating
                </div>
                <div className="text-2xl font-extrabold text-on-surface flex items-center gap-1">
                  <Counter to={4.9} decimals={1} />
                  <Star size={18} className="text-primary-container fill-primary-container" />
                </div>
              </div>
              <div className="bg-surface-container-lowest p-4">
                <div className="text-[10px] uppercase tracking-widest text-on-surface-variant">
                  5-star reviews
                </div>
                <div className="text-2xl font-extrabold text-on-surface">
                  <Counter to={1240} suffix="+" />
                </div>
              </div>
            </div>
          </div>

          {/* Card */}
          <div className="lg:col-span-8 relative">
            <div className="relative min-h-[300px] sm:min-h-[260px] border border-white/10 bg-surface-container-lowest/40 backdrop-blur-md p-7 md:p-12 overflow-hidden">
              <Quote
                size={72}
                className="absolute -top-3 -left-2 text-primary-container/[0.07]"
              />

              <AnimatePresence mode="wait">
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -16 }}
                  transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                  className="relative"
                >
                  {/* Stars */}
                  <div className="flex items-center gap-1 mb-4">
                    {Array.from({ length: 5 }, (_, n) => (
                      <Star
                        key={n}
                        size={16}
                        className="text-primary-container fill-primary-container"
                      />
                    ))}
                  </div>

                  <p className="text-base sm:text-lg md:text-xl text-on-surface leading-relaxed mb-6">
                    “{r.quote}”
                  </p>

                  <div className="flex items-center gap-3">
                    <span
                      aria-hidden="true"
                      className="shrink-0 inline-flex items-center justify-center h-10 w-10 rounded-full bg-primary-container/15 border border-primary-container/40 text-primary-container text-sm font-extrabold"
                    >
                      {r.name
                        .split(' ')
                        .map((p) => p[0])
                        .join('')
                        .slice(0, 2)}
                    </span>
                    <div className="flex flex-wrap items-baseline gap-x-2 gap-y-0.5 text-xs sm:text-sm min-w-0">
                      <span className="font-bold text-on-surface">{r.name}</span>
                      <span className="text-on-surface-variant/50 hidden sm:inline">·</span>
                      <span className="text-on-surface-variant">{r.vehicle}</span>
                      <span className="text-on-surface-variant/50 hidden sm:inline">·</span>
                      <span className="text-primary-container">{r.location}</span>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Controls */}
            <div className="flex items-center justify-between mt-5">
              <div className="flex gap-2">
                {reviews.map((_, n) => (
                  <button
                    key={n}
                    onClick={() => setI(n)}
                    aria-label={`Show review ${n + 1}`}
                    className={`h-1.5 transition-all duration-300 ${
                      n === i
                        ? 'w-8 bg-primary-container'
                        : 'w-3 bg-white/20 hover:bg-white/40'
                    }`}
                  />
                ))}
              </div>
              <div className="flex gap-2">
                <button
                  onClick={() => setI((n) => (n - 1 + reviews.length) % reviews.length)}
                  aria-label="Previous review"
                  className="h-9 w-9 border border-white/15 hover:border-primary-container hover:text-primary-container transition flex items-center justify-center"
                >
                  <ChevronLeft size={18} />
                </button>
                <button
                  onClick={() => setI((n) => (n + 1) % reviews.length)}
                  aria-label="Next review"
                  className="h-9 w-9 border border-white/15 hover:border-primary-container hover:text-primary-container transition flex items-center justify-center"
                >
                  <ChevronRight size={18} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
