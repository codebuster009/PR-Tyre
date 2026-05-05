import { motion } from 'framer-motion';
import { Siren, MessageCircle, ChevronDown, Clock, MapPin, Wrench } from 'lucide-react';

const HERO_IMG =
  'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=1920&q=80';

const fadeUp = {
  hidden: { y: 24, opacity: 0 },
  show: { y: 0, opacity: 1 },
};

export default function Hero() {
  return (
    <header className="relative isolate min-h-[92vh] flex items-center pt-24 overflow-hidden hud-scan">
      {/* Background image */}
      <div className="absolute inset-0 -z-10">
        <img
          src={HERO_IMG}
          alt=""
          className="w-full h-full object-cover scale-105"
          loading="eager"
        />
        {/* Layered overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-surface via-surface/85 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-surface via-transparent to-transparent" />
        <div
          className="absolute inset-0 mix-blend-overlay opacity-30"
          style={{
            background:
              'radial-gradient(circle at 30% 60%, rgba(255,184,0,0.35), transparent 60%)',
          }}
        />
      </div>

      <div className="relative z-10 w-full max-w-container-max mx-auto px-margin-mobile md:px-12">
        <motion.div
          initial="hidden"
          animate="show"
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.12, delayChildren: 0.15 } },
          }}
          className="max-w-2xl space-y-stack-lg"
        >
          {/* 24/7 badge */}
          <motion.div
            variants={fadeUp}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="inline-flex items-center gap-2 border border-white/15 bg-surface-container-lowest/60 px-3 py-1.5 backdrop-blur-md"
          >
            <span className="relative inline-flex h-2 w-2">
              <span className="absolute inset-0 rounded-full bg-secondary animate-pulseRing" />
              <span className="relative h-2 w-2 rounded-full bg-secondary" />
            </span>
            <span className="text-[11px] uppercase tracking-[0.18em] text-on-surface-variant">
              Live · 24/7 dispatch
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            variants={fadeUp}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="text-headline-xl text-on-surface"
          >
            Mobile Tyres 24/7:{' '}
            <span className="shimmer-text">Anywhere, Anytime,</span>
            <br className="hidden sm:block" /> Just a Call Away
          </motion.h1>

          <motion.p
            variants={fadeUp}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="text-body-lg text-on-surface-variant max-w-xl"
          >
            Premium roadside concierge delivering high-speed, professional tyre
            replacement and repair directly to your location. Fast, reliable,
            and engineered for your safety.
          </motion.p>

          {/* CTA */}
          <motion.div
            variants={fadeUp}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col sm:flex-row gap-stack-md pt-stack-sm"
          >
            <a
              href="tel:07415390448"
              className="glint glow-primary group bg-primary-container text-on-primary-container px-7 py-4 text-label-bold uppercase flex items-center justify-center gap-2 hover:brightness-110 active:scale-[0.97] transition"
            >
              <Siren size={20} strokeWidth={2.4} className="group-hover:rotate-12 transition-transform" />
              Emergency Call
            </a>
            <a
              href="https://wa.me/447415390448"
              target="_blank"
              rel="noreferrer"
              className="glow-secondary group bg-secondary text-on-secondary px-7 py-4 text-label-bold uppercase flex items-center justify-center gap-2 hover:brightness-110 active:scale-[0.97] transition"
            >
              <MessageCircle size={20} strokeWidth={2.4} className="group-hover:scale-110 transition-transform" />
              Live Chat via WhatsApp
            </a>
          </motion.div>

          {/* Stat strip */}
          <motion.div
            variants={fadeUp}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="grid grid-cols-3 gap-px bg-white/10 border border-white/10 mt-8 max-w-xl"
          >
            {[
              { icon: Clock, label: 'Avg Response', value: '< 30 min' },
              { icon: MapPin, label: 'Coverage', value: 'M25 + Surrey' },
              { icon: Wrench, label: 'Jobs Done', value: '10K+' },
            ].map(({ icon: Icon, label, value }) => (
              <div
                key={label}
                className="bg-surface-container-lowest/85 backdrop-blur-md p-4 flex flex-col gap-1"
              >
                <Icon size={16} className="text-primary-container" />
                <div className="text-[10px] uppercase tracking-widest text-on-surface-variant">
                  {label}
                </div>
                <div className="text-base font-bold text-on-surface">{value}</div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.a
        href="#services"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 text-on-surface-variant flex flex-col items-center gap-1 text-[10px] uppercase tracking-widest"
      >
        Scroll
        <ChevronDown size={18} className="animate-floatY" />
      </motion.a>
    </header>
  );
}
