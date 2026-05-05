import { motion } from 'framer-motion';
import { CheckCheck, ShieldCheck, Gauge, BadgeCheck } from 'lucide-react';

const FEATURE_IMG =
  'https://images.unsplash.com/photo-1486754735734-325b5831c3ad?auto=format&fit=crop&w=1400&q=80';

const pillars = [
  { icon: CheckCheck, title: 'Precision', desc: 'Laser-accurate fitting.' },
  { icon: ShieldCheck, title: 'Reliability', desc: 'Always there when needed.' },
  { icon: Gauge, title: 'Efficiency', desc: 'Rapid dispatch & completion.' },
  { icon: BadgeCheck, title: 'Expertise', desc: 'Certified technicians.' },
];

export default function WhyUs() {
  return (
    <section id="why-us" className="relative py-section-padding bg-surface">
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-section-padding items-center">
          {/* Text column */}
          <motion.div
            initial={{ opacity: 0, x: -32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="space-y-stack-lg"
          >
            <div>
              <span className="inline-block text-[11px] uppercase tracking-[0.3em] text-primary-container mb-3">
                Why choose us
              </span>
              <h2 className="text-headline-lg text-on-surface mb-stack-sm">
                Engineered for Excellence
              </h2>
              <p className="text-body-lg text-on-surface-variant max-w-lg">
                We don't just change tyres; we provide a high-end automotive
                care experience. Our service is built on four core pillars.
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
                  className="group flex items-start gap-3 p-4 border border-white/5 hover:border-primary-container/40 transition-colors"
                >
                  <span className="shrink-0 inline-flex items-center justify-center h-9 w-9 bg-primary-container/10 border border-primary-container/30 text-primary-container group-hover:bg-primary-container group-hover:text-on-primary-container transition-colors">
                    <Icon size={18} strokeWidth={2.4} />
                  </span>
                  <div>
                    <h4 className="text-base font-bold text-on-surface">{title}</h4>
                    <p className="text-sm text-on-surface-variant">{desc}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Image column */}
          <motion.div
            initial={{ opacity: 0, x: 32, scale: 0.97 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="relative h-[500px] lg:h-[600px] overflow-hidden border border-white/10 group"
          >
            <img
              src={FEATURE_IMG}
              alt="Mobile tyre service operation"
              loading="lazy"
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-[1.2s] ease-out"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-surface via-surface/30 to-transparent" />

            {/* HUD card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="absolute bottom-6 left-6 right-6 md:right-auto md:max-w-xs glass p-4 border border-white/15"
            >
              <div className="flex items-center gap-2 text-[10px] uppercase tracking-[0.25em] text-secondary mb-2">
                <span className="relative inline-flex h-2 w-2">
                  <span className="absolute inset-0 rounded-full bg-secondary animate-pulseRing" />
                  <span className="relative h-2 w-2 rounded-full bg-secondary" />
                </span>
                Live status
              </div>
              <p className="text-sm text-on-surface">
                <span className="font-bold text-primary">3 vans</span> currently
                on the road · next slot{' '}
                <span className="font-bold text-primary">12 min</span> away.
              </p>
            </motion.div>

            {/* Corner accents */}
            <span className="absolute top-3 left-3 h-4 w-4 border-t-2 border-l-2 border-primary-container/70" />
            <span className="absolute top-3 right-3 h-4 w-4 border-t-2 border-r-2 border-primary-container/70" />
            <span className="absolute bottom-3 right-3 h-4 w-4 border-b-2 border-r-2 border-primary-container/70" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
