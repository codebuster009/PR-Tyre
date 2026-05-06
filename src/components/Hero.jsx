import { motion } from 'framer-motion';
import {
  Siren,
  MessageCircle,
  Clock,
  MapPin,
  Wrench,
  PhoneCall,
} from 'lucide-react';
import Counter from './Counter.jsx';

const fadeUp = {
  hidden: { y: 24, opacity: 0 },
  show: { y: 0, opacity: 1 },
};

export default function Hero() {
  return (
    <header className="relative isolate min-h-[100svh] lg:min-h-[92vh] flex items-center pt-28 md:pt-40 pb-16 md:pb-12 overflow-hidden">
      <div className="relative z-10 w-full max-w-container-max mx-auto px-5 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-10 lg:gap-12 items-center">
          {/* LEFT — copy */}
          <motion.div
            initial="hidden"
            animate="show"
            variants={{
              hidden: {},
              show: { transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
            }}
            className="lg:col-span-7 space-y-6 md:space-y-stack-lg order-2 lg:order-1"
          >
            <motion.div
              variants={fadeUp}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="inline-flex items-center gap-2 rounded-full border border-outline-variant bg-surface px-3 py-1.5"
            >
              <span className="relative inline-flex h-2 w-2">
                <span className="absolute inset-0 rounded-full bg-secondary animate-pulseRing" />
                <span className="relative h-2 w-2 rounded-full bg-secondary" />
              </span>
              <span className="text-[10px] sm:text-[11px] uppercase tracking-[0.18em] font-semibold text-on-surface-variant">
                Open now · 24/7 mobile service
              </span>
            </motion.div>

            <motion.h1
              variants={fadeUp}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="text-[2rem] leading-[1.08] sm:text-[2.5rem] md:text-[3rem] lg:text-headline-xl font-extrabold tracking-tight text-on-surface"
            >
              <span className="block">Mobile Tyres <span className="text-primary-container">24/7</span></span>
              <span className="block">Anywhere, Anytime,</span>
              <span className="block">
                Just a <span className="text-primary-container">Call Away</span>
              </span>
            </motion.h1>

            <motion.p
              variants={fadeUp}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="text-base sm:text-body-lg text-on-surface-variant max-w-xl"
            >
              Fast, professional tyre replacement and puncture repair brought
              directly to your driveway or roadside. Surrey & the M25 corridor,
              day or night.
            </motion.p>

            {/* Big tap-to-call number — primary visual hook */}
            <motion.a
              variants={fadeUp}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              href="tel:07415390448"
              className="group flex items-center gap-3 sm:gap-4 rounded-lg border border-outline-variant bg-surface px-4 sm:px-5 py-3.5 sm:py-4 max-w-xl hover:border-primary-container transition-colors"
            >
              <span className="shrink-0 inline-flex items-center justify-center h-11 w-11 sm:h-12 sm:w-12 rounded-md bg-primary-container text-on-primary-container">
                <PhoneCall size={20} strokeWidth={2.4} />
              </span>
              <div className="min-w-0">
                <div className="text-[10px] sm:text-[11px] uppercase tracking-[0.2em] text-on-surface-variant font-semibold">
                  Tap to call · 24/7 dispatch
                </div>
                <div className="text-xl sm:text-2xl md:text-3xl font-extrabold tracking-tight text-on-surface group-hover:text-primary transition-colors">
                  07415 390448
                </div>
              </div>
            </motion.a>

            <motion.div
              variants={fadeUp}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-col sm:flex-row gap-3 md:gap-stack-md pt-1"
            >
              <a
                href="tel:07415390448"
                className="group rounded-md bg-primary-container text-on-primary-container px-5 sm:px-7 py-3.5 sm:py-4 text-label-bold uppercase flex items-center justify-center gap-2 hover:brightness-105 active:scale-[0.97] transition shadow-[0_6px_24px_-10px_rgba(255,184,0,0.55)]"
              >
                <Siren size={18} strokeWidth={2.4} className="group-hover:rotate-12 transition-transform" />
                Emergency Call
              </a>
              <a
                href="https://wa.me/447415390448"
                target="_blank"
                rel="noreferrer"
                className="group rounded-md bg-secondary text-on-secondary px-5 sm:px-7 py-3.5 sm:py-4 text-label-bold uppercase flex items-center justify-center gap-2 hover:brightness-105 active:scale-[0.97] transition"
              >
                <MessageCircle size={18} strokeWidth={2.4} className="group-hover:scale-110 transition-transform" />
                <span className="hidden sm:inline">WhatsApp Us</span>
                <span className="sm:hidden">WhatsApp</span>
              </a>
            </motion.div>

            <motion.div
              variants={fadeUp}
              transition={{ duration: 0.7, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}
              className="grid grid-cols-3 rounded-lg border border-outline-variant bg-surface overflow-hidden max-w-xl divide-x divide-outline-variant"
            >
              {[
                {
                  icon: Clock,
                  label: 'Avg Response',
                  value: <><Counter to={30} />&nbsp;min</>,
                },
                {
                  icon: Wrench,
                  label: 'Jobs Done',
                  value: <><Counter to={10} suffix="K+" /></>,
                },
                {
                  icon: MapPin,
                  label: 'Coverage',
                  value: 'M25 + Surrey',
                },
              ].map(({ icon: Icon, label, value }) => (
                <div
                  key={label}
                  className="p-3 sm:p-4 flex flex-col gap-1"
                >
                  <Icon size={16} className="text-primary-container" />
                  <div className="text-[9px] sm:text-[10px] uppercase tracking-wider sm:tracking-widest text-on-surface-variant font-semibold">
                    {label}
                  </div>
                  <div className="text-sm sm:text-base font-bold text-on-surface leading-tight">
                    {value}
                  </div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* RIGHT — framed mechanics image */}
          <motion.div
            initial={{ opacity: 0, y: 24, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
            className="lg:col-span-5 order-1 lg:order-2 w-full"
          >
            <div className="relative aspect-[4/3] sm:aspect-[5/4] lg:aspect-[4/5] rounded-xl border border-outline-variant overflow-hidden max-w-md sm:max-w-lg lg:max-w-none mx-auto bg-surface-container-low">
              <img
                src="/hero-mechanics.jpg"
                alt="Two professional tyre technicians at work"
                className="absolute inset-0 h-full w-full object-cover"
                loading="eager"
              />

              {/* Soft bottom fade so the corner caption sits cleanly */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-black/0 to-transparent" />

              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.5 }}
                className="absolute left-3 right-3 sm:left-4 sm:right-4 bottom-3 sm:bottom-4 rounded-lg bg-white/95 backdrop-blur-sm border border-outline-variant p-3 sm:p-4"
              >
                <div className="flex items-center gap-2 text-[10px] sm:text-[11px] uppercase tracking-[0.18em] font-semibold text-secondary mb-1">
                  <span className="relative inline-flex h-2 w-2">
                    <span className="absolute inset-0 rounded-full bg-secondary animate-pulseRing" />
                    <span className="relative h-2 w-2 rounded-full bg-secondary" />
                  </span>
                  Crew on standby
                </div>
                <p className="text-xs sm:text-sm text-on-surface">
                  Certified team · ETA <span className="font-bold">~25 min</span>
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator — tiny rolling wheel */}
      <motion.a
        href="#services"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        aria-label="Scroll to services"
        className="hidden md:flex absolute bottom-8 left-1/2 -translate-x-1/2 flex-col items-center gap-2 text-on-surface-variant group"
      >
        <span className="text-[10px] uppercase tracking-[0.3em] group-hover:text-on-surface transition-colors font-semibold">
          Scroll
        </span>
        <motion.div
          animate={{ rotate: 360, y: [0, 4, 0] }}
          transition={{
            rotate: { duration: 3, repeat: Infinity, ease: 'linear' },
            y: { duration: 1.5, repeat: Infinity, ease: 'easeInOut' },
          }}
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            className="text-primary-container"
            aria-hidden="true"
          >
            <circle
              cx="10"
              cy="10"
              r="8.5"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.6"
            />
            <line x1="10" y1="3.5" x2="10" y2="6.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            <line x1="10" y1="13.5" x2="10" y2="16.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            <line x1="3.5" y1="10" x2="6.5" y2="10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            <line x1="13.5" y1="10" x2="16.5" y2="10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            <circle cx="10" cy="10" r="2" fill="currentColor" />
          </svg>
        </motion.div>
      </motion.a>
    </header>
  );
}
