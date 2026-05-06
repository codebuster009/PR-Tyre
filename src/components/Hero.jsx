import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import {
  Siren,
  MessageCircle,
  ChevronDown,
  Clock,
  MapPin,
  Wrench,
} from 'lucide-react';
import Counter from './Counter.jsx';
import TyreWheel from './TyreWheel.jsx';

const fadeUp = {
  hidden: { y: 24, opacity: 0 },
  show: { y: 0, opacity: 1 },
};

export default function Hero() {
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const rotateY = useSpring(useTransform(mx, [-0.5, 0.5], [-6, 6]), {
    stiffness: 120,
    damping: 14,
  });
  const rotateX = useSpring(useTransform(my, [-0.5, 0.5], [4, -4]), {
    stiffness: 120,
    damping: 14,
  });

  const onMove = (e) => {
    const r = e.currentTarget.getBoundingClientRect();
    mx.set((e.clientX - r.left) / r.width - 0.5);
    my.set((e.clientY - r.top) / r.height - 0.5);
  };
  const onLeave = () => {
    mx.set(0);
    my.set(0);
  };

  return (
    <header className="relative isolate min-h-[100svh] lg:min-h-[92vh] flex items-center pt-28 md:pt-40 pb-16 md:pb-12 overflow-hidden hud-scan">
      {/* Decorative rotating tyre — partially off-screen for premium negative space */}
      <TyreWheel
        size={520}
        className="absolute -bottom-40 -left-40 hidden md:block opacity-40"
      />
      <TyreWheel
        size={280}
        className="absolute -top-20 -right-20 lg:hidden opacity-30"
      />

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
              className="inline-flex items-center gap-2 border border-white/15 bg-surface-container-lowest/60 px-3 py-1.5 backdrop-blur-md"
            >
              <span className="relative inline-flex h-2 w-2">
                <span className="absolute inset-0 rounded-full bg-secondary animate-pulseRing" />
                <span className="relative h-2 w-2 rounded-full bg-secondary" />
              </span>
              <span className="text-[10px] sm:text-[11px] uppercase tracking-[0.18em] text-on-surface-variant">
                Live · 24/7 dispatch
              </span>
            </motion.div>

            <motion.h1
              variants={fadeUp}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="text-[2rem] leading-[1.08] sm:text-[2.5rem] md:text-[3rem] lg:text-headline-xl font-extrabold tracking-tight text-on-surface"
            >
              <span className="block">Mobile Tyres <span className="text-primary-container/90">24/7</span></span>
              <span className="block">Anywhere, Anytime,</span>
              <span className="block">
                Just a <span className="shimmer-text">Call Away</span>
              </span>
            </motion.h1>

            <motion.p
              variants={fadeUp}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="text-base sm:text-body-lg text-on-surface-variant max-w-xl"
            >
              Premium roadside concierge delivering high-speed, professional
              tyre replacement and repair directly to your location. Fast,
              reliable, and engineered for your safety.
            </motion.p>

            <motion.div
              variants={fadeUp}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-col sm:flex-row gap-3 md:gap-stack-md pt-1"
            >
              <a
                href="tel:07415390448"
                className="glint glow-primary group bg-primary-container text-on-primary-container px-5 sm:px-7 py-3.5 sm:py-4 text-label-bold uppercase flex items-center justify-center gap-2 hover:brightness-110 active:scale-[0.97] transition"
              >
                <Siren size={18} strokeWidth={2.4} className="group-hover:rotate-12 transition-transform" />
                Emergency Call
              </a>
              <a
                href="https://wa.me/447415390448"
                target="_blank"
                rel="noreferrer"
                className="glow-secondary group bg-secondary text-on-secondary px-5 sm:px-7 py-3.5 sm:py-4 text-label-bold uppercase flex items-center justify-center gap-2 hover:brightness-110 active:scale-[0.97] transition"
              >
                <MessageCircle size={18} strokeWidth={2.4} className="group-hover:scale-110 transition-transform" />
                <span className="hidden sm:inline">Live Chat via WhatsApp</span>
                <span className="sm:hidden">WhatsApp Chat</span>
              </a>
            </motion.div>

            <motion.div
              variants={fadeUp}
              transition={{ duration: 0.7, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}
              className="grid grid-cols-3 gap-px bg-white/10 border border-white/10 max-w-xl"
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
                  className="group/stat relative bg-surface-container-lowest/85 backdrop-blur-md p-3 sm:p-4 flex flex-col gap-1 transition-colors hover:bg-surface-container-low cursor-default"
                >
                  <span
                    aria-hidden="true"
                    className="absolute left-0 top-0 bottom-0 w-px bg-primary-container/0 group-hover/stat:bg-primary-container/70 transition-colors"
                  />
                  <Icon size={14} className="text-primary-container sm:hidden group-hover/stat:scale-110 transition-transform" />
                  <Icon size={16} className="text-primary-container hidden sm:block group-hover/stat:scale-110 transition-transform" />
                  <div className="text-[9px] sm:text-[10px] uppercase tracking-wider sm:tracking-widest text-on-surface-variant">
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
            style={{ perspective: '1200px' }}
          >
            <motion.div
              onMouseMove={onMove}
              onMouseLeave={onLeave}
              style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }}
              className="relative aspect-[4/3] sm:aspect-[5/4] lg:aspect-[4/5] border border-white/15 overflow-hidden group will-change-transform max-w-md sm:max-w-lg lg:max-w-none mx-auto"
            >
              <img
                src="/hero-mechanics.jpg"
                alt="Two professional tyre technicians at work"
                className="absolute inset-0 h-full w-full object-cover scale-105 group-hover:scale-110 transition-transform duration-[1.4s] ease-out"
                loading="eager"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-surface via-surface/30 to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-r from-surface/40 via-transparent to-transparent" />
              <div
                className="absolute inset-0 mix-blend-overlay opacity-40"
                style={{
                  background:
                    'radial-gradient(circle at 50% 30%, rgba(255,184,0,0.18), transparent 65%)',
                }}
              />

              <div
                aria-hidden="true"
                className="absolute inset-x-0 top-0 h-px"
                style={{
                  background:
                    'linear-gradient(to right, transparent, rgba(255,184,0,0.45), transparent)',
                  animation: 'hud-scan 5s linear infinite',
                }}
              />

              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9, duration: 0.6 }}
                className="absolute left-3 right-3 sm:left-4 sm:right-4 bottom-3 sm:bottom-4 glass border border-white/15 p-3 sm:p-4"
                style={{ transform: 'translateZ(40px)' }}
              >
                <div className="flex items-center gap-2 text-[9px] sm:text-[10px] uppercase tracking-[0.2em] sm:tracking-[0.25em] text-secondary mb-1">
                  <span className="relative inline-flex h-2 w-2">
                    <span className="absolute inset-0 rounded-full bg-secondary animate-pulseRing" />
                    <span className="relative h-2 w-2 rounded-full bg-secondary" />
                  </span>
                  Crew on standby
                </div>
                <p className="text-xs sm:text-sm text-on-surface">
                  <span className="font-bold text-primary">Certified team</span>{' '}
                  · ETA{' '}
                  <span className="font-bold text-primary">~25 min</span>
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.1, duration: 0.5 }}
                className="absolute top-3 right-3 sm:top-4 sm:right-4 px-2.5 sm:px-3 py-1 sm:py-1.5 bg-white/10 backdrop-blur-md border border-white/20 text-on-surface text-[9px] sm:text-[10px] font-bold tracking-widest uppercase"
                style={{ transform: 'translateZ(60px)' }}
              >
                <span className="text-primary-container">★</span> Pro Crew
              </motion.div>

            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Sleek scroll indicator: thin vertical line with traveling pulse */}
      <motion.a
        href="#services"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.6 }}
        aria-label="Scroll to services"
        className="hidden md:flex absolute bottom-8 left-1/2 -translate-x-1/2 flex-col items-center gap-3 text-on-surface-variant group"
      >
        <span className="text-[9px] uppercase tracking-[0.45em] group-hover:text-primary-container transition-colors">
          Scroll to explore
        </span>
        <div className="relative h-16 w-px overflow-hidden">
          <span className="absolute inset-0 bg-gradient-to-b from-transparent via-white/25 to-transparent" />
          <motion.span
            animate={{ y: ['-100%', '100%'] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: [0.4, 0, 0.2, 1] }}
            className="absolute left-1/2 -translate-x-1/2 h-6 w-px bg-primary-container"
            style={{ boxShadow: '0 0 12px 3px rgba(255,184,0,0.7)' }}
          />
        </div>
        <ChevronDown
          size={14}
          strokeWidth={2.4}
          className="text-primary-container group-hover:translate-y-0.5 transition-transform"
        />
      </motion.a>
    </header>
  );
}
