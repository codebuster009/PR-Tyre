import { motion } from 'framer-motion';
import {
  CheckCheck,
  ShieldCheck,
  Gauge,
  BadgeCheck,
  Star,
} from 'lucide-react';
import TyreWheel from './TyreWheel.jsx';
import Counter from './Counter.jsx';

const pillars = [
  { icon: CheckCheck, title: 'Precision', desc: 'Laser-accurate fitting.' },
  { icon: ShieldCheck, title: 'Reliability', desc: 'Always there when needed.' },
  { icon: Gauge, title: 'Efficiency', desc: 'Rapid dispatch & completion.' },
  { icon: BadgeCheck, title: 'Expertise', desc: 'Certified technicians.' },
];

export default function WhyUs() {
  return (
    <section
      id="why-us"
      className="relative py-16 md:py-section-padding bg-surface-container-low overflow-hidden"
    >
      <div className="max-w-container-max mx-auto px-5 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-section-padding items-center">
          {/* Text column */}
          <motion.div
            initial={{ opacity: 0, x: -32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="space-y-6 md:space-y-stack-lg"
          >
            <div>
              <span className="inline-block text-[10px] sm:text-[11px] uppercase tracking-[0.22em] sm:tracking-[0.28em] text-primary mb-3 font-bold">
                Why choose us
              </span>
              <h2 className="text-3xl sm:text-headline-lg text-on-surface mb-stack-sm font-bold">
                Built on Trust, Run by Experts
              </h2>
              <p className="text-base sm:text-body-lg text-on-surface-variant max-w-lg">
                We don't just change tyres — we deliver a careful, professional
                roadside service. Our work rests on four core pillars.
              </p>
            </div>

            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              variants={{
                hidden: {},
                show: { transition: { staggerChildren: 0.08 } },
              }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-stack-md"
            >
              {pillars.map(({ icon: Icon, title, desc }) => (
                <motion.div
                  key={title}
                  variants={{
                    hidden: { opacity: 0, y: 16 },
                    show: { opacity: 1, y: 0 },
                  }}
                  transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                  className="group flex items-start gap-4 py-2"
                >
                  <span className="shrink-0 inline-flex items-center justify-center h-10 w-10 rounded-md bg-primary-container/15 border border-primary-container/40 text-primary group-hover:bg-primary-container/25 group-hover:border-primary-container transition-colors">
                    <Icon size={18} strokeWidth={2.2} />
                  </span>
                  <div className="pt-0.5">
                    <h4 className="text-base font-bold text-on-surface mb-1">
                      {title}
                    </h4>
                    <p className="text-sm text-on-surface-variant leading-relaxed">
                      {desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Animated wheel + stats stage */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="relative aspect-square lg:aspect-auto lg:h-[560px] rounded-xl border border-outline-variant bg-surface overflow-hidden shadow-[0_20px_60px_-24px_rgba(0,0,0,0.18)]"
          >
            {/* Warm radial wash */}
            <div
              aria-hidden="true"
              className="absolute inset-0"
              style={{
                background:
                  'radial-gradient(ellipse at 50% 45%, rgba(255,184,0,0.14), transparent 65%)',
              }}
            />

            {/* Subtle diagonal tread texture */}
            <div
              aria-hidden="true"
              className="absolute inset-0 opacity-[0.04]"
              style={{
                backgroundImage:
                  'repeating-linear-gradient(45deg, #171717 0 1px, transparent 1px 14px)',
              }}
            />

            {/* Wheel — rolls in from the left on scroll, then floats gently */}
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
              <motion.div
                initial={{ x: -420, rotate: -360, opacity: 0 }}
                whileInView={{ x: 0, rotate: 0, opacity: 1 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
              >
                <motion.div
                  animate={{ y: [0, -8, 0] }}
                  transition={{
                    duration: 6,
                    repeat: Infinity,
                    ease: 'easeInOut',
                    delay: 1.4,
                  }}
                >
                  <TyreWheel size={420} className="hidden md:block" />
                  <TyreWheel size={280} className="md:hidden" />
                </motion.div>
              </motion.div>
            </div>

            {/* Top-left: years on the road */}
            <motion.div
              initial={{ opacity: 0, y: -16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ delay: 0.4, duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
              className="absolute top-4 left-4 md:top-6 md:left-6 rounded-lg border border-outline-variant bg-surface/95 backdrop-blur-sm px-3 md:px-4 py-2.5 md:py-3 shadow-[0_8px_24px_-14px_rgba(0,0,0,0.25)]"
            >
              <div className="text-xl md:text-3xl font-extrabold text-on-surface leading-tight">
                <Counter to={12} suffix="+" />
              </div>
              <div className="text-[9px] md:text-[10px] uppercase tracking-[0.18em] font-semibold text-on-surface-variant">
                Years on the road
              </div>
            </motion.div>

            {/* Top-right: rating */}
            <motion.div
              initial={{ opacity: 0, y: -16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ delay: 0.55, duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
              className="absolute top-4 right-4 md:top-6 md:right-6 rounded-lg border border-outline-variant bg-surface/95 backdrop-blur-sm px-3 md:px-4 py-2.5 md:py-3 shadow-[0_8px_24px_-14px_rgba(0,0,0,0.25)]"
            >
              <div className="flex items-center gap-1 text-xl md:text-3xl font-extrabold text-on-surface leading-tight">
                <Counter to={4.9} decimals={1} />
                <Star
                  size={18}
                  className="text-primary-container fill-primary-container"
                />
              </div>
              <div className="text-[9px] md:text-[10px] uppercase tracking-[0.18em] font-semibold text-on-surface-variant">
                Driver rating
              </div>
            </motion.div>

            {/* Bottom: live status strip */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ delay: 0.7, duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
              className="absolute bottom-4 left-4 right-4 md:bottom-6 md:left-6 md:right-6 rounded-lg border border-outline-variant bg-surface/95 backdrop-blur-sm px-3 md:px-4 py-2.5 md:py-3 flex items-center justify-between gap-3 shadow-[0_8px_24px_-14px_rgba(0,0,0,0.25)]"
            >
              <div className="flex items-center gap-2.5 min-w-0">
                <span className="relative inline-flex h-2 w-2 shrink-0">
                  <span className="absolute inset-0 rounded-full bg-secondary animate-pulseRing" />
                  <span className="relative h-2 w-2 rounded-full bg-secondary" />
                </span>
                <div className="min-w-0">
                  <div className="text-[9px] md:text-[10px] uppercase tracking-[0.18em] font-semibold text-secondary">
                    Crew available now
                  </div>
                  <div className="text-xs md:text-sm font-bold text-on-surface">
                    Avg ETA <Counter to={22} /> min
                  </div>
                </div>
              </div>
              <div className="text-[9px] md:text-[10px] uppercase tracking-[0.18em] font-semibold text-on-surface-variant whitespace-nowrap hidden sm:block">
                M25 · Surrey
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
