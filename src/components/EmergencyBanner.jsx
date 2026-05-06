import { motion } from 'framer-motion';
import { TriangleAlert, PhoneCall, ArrowUpRight } from 'lucide-react';
import Counter from './Counter.jsx';

export default function EmergencyBanner() {
  return (
    <motion.section
      id="emergency"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="relative overflow-hidden bg-surface-container-low text-on-surface border-y border-white/[0.06]"
    >
      {/* Subtle warm-amber wash on the left to anchor the priority feel */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'linear-gradient(90deg, rgba(255,184,0,0.06) 0%, rgba(255,184,0,0.02) 35%, transparent 70%)',
        }}
      />

      {/* Very faint diagonal pattern (much lower opacity than before) */}
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-[0.025] pointer-events-none"
        style={{
          backgroundImage:
            'repeating-linear-gradient(45deg, #ffb800 0 1px, transparent 1px 18px)',
        }}
      />

      {/* Single accent rail on the left edge */}
      <div
        aria-hidden="true"
        className="absolute left-0 top-0 bottom-0 w-[2px] bg-primary-container/70"
      />

      <div className="relative max-w-container-max mx-auto px-5 md:px-12 py-5 md:py-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-5">
        <div className="flex items-start md:items-center gap-3 md:gap-5 min-w-0">
          {/* Calmer warning icon — gentle pulse instead of shake */}
          <motion.span
            animate={{ opacity: [0.85, 1, 0.85] }}
            transition={{ duration: 2.4, repeat: Infinity, ease: 'easeInOut' }}
            className="relative shrink-0 inline-flex items-center justify-center h-11 w-11 md:h-12 md:w-12 bg-primary-container/10 border border-primary-container/30 text-primary-container"
          >
            <TriangleAlert size={20} strokeWidth={2.2} className="md:hidden" />
            <TriangleAlert size={22} strokeWidth={2.2} className="hidden md:block" />
          </motion.span>

          <div className="min-w-0">
            <div className="flex items-center gap-2 mb-1">
              <span className="relative inline-flex h-1.5 w-1.5">
                <span className="absolute inset-0 rounded-full bg-secondary/70 animate-pulseRing" />
                <span className="relative h-1.5 w-1.5 rounded-full bg-secondary" />
              </span>
              <span className="text-[10px] uppercase tracking-[0.25em] font-semibold text-on-surface-variant">
                Live · Priority dispatch
              </span>
            </div>
            <h2 className="text-lg sm:text-xl md:text-[1.4rem] leading-tight font-extrabold tracking-tight text-on-surface">
              Emergency Tyre Change Service
            </h2>
            {/* Live data ticker */}
            <div className="flex flex-wrap items-center gap-x-4 gap-y-1 mt-1.5 text-xs sm:text-sm text-on-surface-variant">
              <span className="flex items-center gap-1.5">
                <Counter to={3} />
                <span className="opacity-80">crews on the road</span>
              </span>
              <span className="opacity-30">·</span>
              <span>
                <span className="opacity-80">ETA ~</span>
                <Counter to={22} />
                <span className="opacity-80"> min</span>
              </span>
              <span className="opacity-30 hidden sm:inline">·</span>
              <span className="hidden sm:inline">
                <Counter to={47} />
                <span className="opacity-80"> jobs sorted today</span>
              </span>
            </div>
          </div>
        </div>

        {/* CTA — yellow lives here, where it works hardest */}
        <a
          href="tel:07415390448"
          className="glint group relative inline-flex w-full md:w-auto items-center justify-center gap-2 bg-primary-container text-on-primary-container px-5 md:px-7 py-3.5 md:py-4 text-xs sm:text-label-bold uppercase font-extrabold hover:brightness-110 active:scale-[0.98] transition whitespace-nowrap"
          style={{ boxShadow: '0 8px 30px -12px rgba(255,184,0,0.45)' }}
        >
          <PhoneCall
            size={16}
            strokeWidth={2.6}
            className="group-hover:rotate-[15deg] transition-transform"
          />
          Call 07415 390448 Now
          <ArrowUpRight
            size={14}
            strokeWidth={2.6}
            className="opacity-70 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all"
          />
        </a>
      </div>
    </motion.section>
  );
}
