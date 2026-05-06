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
      'Sidewall tear on a holiday morning — every shop closed. MobileTyres24Hour picked up first ring, drove out to Egham, fitted a matching tyre on the spot.',
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
      className="relative py-16 md:py-section-padding overflow-hidden bg-surface-container-low"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="relative max-w-container-max mx-auto px-5 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 md:gap-12 items-center">
          {/* Heading + summary */}
          <div className="lg:col-span-4">
            <span className="inline-block text-[10px] sm:text-[11px] uppercase tracking-[0.22em] sm:tracking-[0.28em] text-primary mb-3 font-bold">
              What drivers say
            </span>
            <h2 className="text-3xl sm:text-headline-lg text-on-surface mb-4 font-bold">
              Trusted at <span className="text-primary-container">3am</span> as much as 3pm.
            </h2>
            <p className="text-base text-on-surface-variant mb-6">
              Real drivers, real moments. Here’s what people say after we’ve
              shown up.
            </p>

            <div className="grid grid-cols-2 gap-px bg-outline-variant border border-outline-variant rounded-lg overflow-hidden max-w-sm">
              <div className="bg-surface p-4">
                <div className="text-[10px] uppercase tracking-widest text-on-surface-variant font-semibold">
                  Avg rating
                </div>
                <div className="text-2xl font-extrabold text-on-surface flex items-center gap-1">
                  <Counter to={4.9} decimals={1} />
                  <Star size={18} className="text-primary-container fill-primary-container" />
                </div>
              </div>
              <div className="bg-surface p-4">
                <div className="text-[10px] uppercase tracking-widest text-on-surface-variant font-semibold">
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
            <div className="relative min-h-[300px] sm:min-h-[260px] rounded-xl border border-outline-variant bg-surface p-7 md:p-12 overflow-hidden shadow-[0_8px_32px_-16px_rgba(0,0,0,0.10)]">
              <Quote
                size={72}
                className="absolute -top-3 -left-2 text-primary-container/15"
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
                      className="shrink-0 inline-flex items-center justify-center h-10 w-10 rounded-full bg-primary-container/15 border border-primary-container/40 text-primary text-sm font-extrabold"
                    >
                      {r.name
                        .split(' ')
                        .map((p) => p[0])
                        .join('')
                        .slice(0, 2)}
                    </span>
                    <div className="flex flex-wrap items-baseline gap-x-2 gap-y-0.5 text-xs sm:text-sm min-w-0">
                      <span className="font-bold text-on-surface">{r.name}</span>
                      <span className="text-on-surface-variant/40 hidden sm:inline">·</span>
                      <span className="text-on-surface-variant">{r.vehicle}</span>
                      <span className="text-on-surface-variant/40 hidden sm:inline">·</span>
                      <span className="text-primary">{r.location}</span>
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
                    className={`h-1.5 rounded-full transition-all duration-300 ${
                      n === i
                        ? 'w-8 bg-primary-container'
                        : 'w-3 bg-outline-variant hover:bg-on-surface-variant'
                    }`}
                  />
                ))}
              </div>
              <div className="flex gap-2">
                <button
                  onClick={() => setI((n) => (n - 1 + reviews.length) % reviews.length)}
                  aria-label="Previous review"
                  className="h-9 w-9 rounded-md border border-outline-variant text-on-surface-variant hover:border-primary-container hover:text-primary transition flex items-center justify-center"
                >
                  <ChevronLeft size={18} />
                </button>
                <button
                  onClick={() => setI((n) => (n + 1) % reviews.length)}
                  aria-label="Next review"
                  className="h-9 w-9 rounded-md border border-outline-variant text-on-surface-variant hover:border-primary-container hover:text-primary transition flex items-center justify-center"
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
