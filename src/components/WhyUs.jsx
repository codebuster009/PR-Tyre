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
    <section id="why-us" className="relative py-16 md:py-section-padding bg-surface">
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
              <span className="inline-block text-[10px] sm:text-[11px] uppercase tracking-[0.25em] sm:tracking-[0.3em] text-primary-container mb-3">
                Why choose us
              </span>
              <h2 className="text-3xl sm:text-headline-lg text-on-surface mb-stack-sm font-bold">
                Engineered for Excellence
              </h2>
              <p className="text-base sm:text-body-lg text-on-surface-variant max-w-lg">
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
                  className="group flex items-start gap-4 py-2"
                >
                  <span className="shrink-0 inline-flex items-center justify-center h-10 w-10 bg-primary-container/10 border border-primary-container/25 text-primary-container group-hover:border-primary-container/60 transition-colors">
                    <Icon size={18} strokeWidth={2.2} />
                  </span>
                  <div className="pt-0.5">
                    <h4 className="text-base font-bold text-on-surface mb-1">{title}</h4>
                    <p className="text-sm text-on-surface-variant leading-relaxed">{desc}</p>
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
            className="relative aspect-[4/3] sm:aspect-[5/4] lg:aspect-auto lg:h-[560px] overflow-hidden border border-white/10 group"
          >
            <img
              src={FEATURE_IMG}
              alt="Mobile tyre service operation"
              loading="lazy"
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-[1.2s] ease-out"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-surface via-surface/20 to-transparent" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
