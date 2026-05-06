import { motion } from 'framer-motion';
import { Disc3, Settings, RotateCcw, Wrench } from 'lucide-react';

const services = [
  {
    icon: Disc3,
    title: 'Onsite Fitting',
    desc: 'Professional tyre mounting and balancing performed wherever you are parked.',
  },
  {
    icon: Settings,
    title: 'Tyre Balancing',
    desc: 'Precision laser balancing ensures a smooth, vibration-free ride at all speeds.',
  },
  {
    icon: RotateCcw,
    title: 'Wheel Rotations',
    desc: 'Maximize tyre lifespan with systematic rotation patterns tailored to your vehicle.',
  },
  {
    icon: Wrench,
    title: 'Puncture Repair',
    desc: 'Swift, safe, and permanent plug-and-patch repairs meeting strict British safety standards.',
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="relative py-16 md:py-section-padding overflow-hidden bg-background"
    >
      {/* Soft warm glow */}
      <div
        aria-hidden="true"
        className="absolute top-0 left-1/2 -translate-x-1/2 h-[400px] w-[1000px] max-w-full rounded-full blur-[120px] opacity-50 pointer-events-none"
        style={{
          background:
            'radial-gradient(closest-side, rgba(255,184,0,0.12), transparent)',
        }}
      />

      <div className="relative max-w-container-max mx-auto px-5 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="text-center max-w-2xl mx-auto mb-12 md:mb-16"
        >
          <span className="inline-block text-[10px] sm:text-[11px] uppercase tracking-[0.22em] sm:tracking-[0.28em] text-primary mb-3 font-bold">
            What we do
          </span>
          <h2 className="text-3xl sm:text-headline-lg text-on-surface mb-3 font-bold">
            Precision Services
          </h2>
          <p className="text-base sm:text-body-lg text-on-surface-variant">
            Expertise delivered to your driveway or roadside. Our mobile units
            are fully equipped with state-of-the-art diagnostic and fitting
            technology.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-60px' }}
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.1 } },
          }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-gutter"
        >
          {services.map(({ icon: Icon, title, desc }, i) => (
            <motion.div
              key={title}
              variants={{
                hidden: { opacity: 0, y: 28 },
                show: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -3 }}
              className="group relative p-6 md:p-8 rounded-lg border border-outline-variant bg-surface hover:border-primary-container hover:shadow-[0_12px_32px_-16px_rgba(255,184,0,0.35)] transition-all"
            >
              <span className="absolute top-5 right-5 text-[10px] tracking-[0.2em] font-mono text-on-surface-variant/40">
                0{i + 1}
              </span>

              <motion.div
                initial={{ rotate: -180, opacity: 0 }}
                whileInView={{ rotate: 0, opacity: 1 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{
                  duration: 0.8,
                  delay: i * 0.1 + 0.2,
                  ease: [0.34, 1.56, 0.64, 1],
                }}
                className="w-11 h-11 md:w-12 md:h-12 rounded-full flex items-center justify-center bg-primary-container/15 border border-primary-container/30 group-hover:border-primary-container group-hover:bg-primary-container/25 transition-colors duration-300 mb-5 md:mb-6"
              >
                <Icon
                  size={20}
                  className="text-primary md:hidden transition-transform duration-1000 ease-out group-hover:rotate-[360deg]"
                  strokeWidth={2}
                />
                <Icon
                  size={22}
                  className="text-primary hidden md:block transition-transform duration-1000 ease-out group-hover:rotate-[360deg]"
                  strokeWidth={2}
                />
              </motion.div>
              <h3 className="text-lg md:text-xl text-on-surface mb-2 font-bold tracking-tight">
                {title}
              </h3>
              <p className="text-sm md:text-[15px] leading-relaxed text-on-surface-variant">{desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
