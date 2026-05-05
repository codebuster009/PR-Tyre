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
      className="relative py-section-padding overflow-hidden"
    >
      {/* Glow */}
      <div
        aria-hidden="true"
        className="absolute top-0 left-1/2 -translate-x-1/2 h-[500px] w-[1000px] max-w-full rounded-full blur-[120px] opacity-60 pointer-events-none"
        style={{
          background:
            'radial-gradient(closest-side, rgba(255,184,0,0.10), transparent)',
        }}
      />

      <div className="relative max-w-container-max mx-auto px-margin-mobile md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="text-center max-w-2xl mx-auto mb-12"
        >
          <span className="inline-block text-[11px] uppercase tracking-[0.3em] text-primary-container mb-3">
            What we do
          </span>
          <h2 className="text-headline-lg text-on-surface mb-3">
            Precision Services
          </h2>
          <p className="text-body-lg text-on-surface-variant">
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
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-gutter"
        >
          {services.map(({ icon: Icon, title, desc }) => (
            <motion.div
              key={title}
              variants={{
                hidden: { opacity: 0, y: 28 },
                show: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -4 }}
              className="group relative p-stack-lg border border-white/10 bg-surface-container-lowest/40 backdrop-blur-sm hover:border-primary-container/40 hover:bg-surface-container-high transition-colors"
            >
              {/* Hover sheen */}
              <div
                aria-hidden="true"
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"
                style={{
                  background:
                    'radial-gradient(400px circle at 0% 0%, rgba(255,184,0,0.08), transparent 60%)',
                }}
              />

              <div className="relative">
                <div className="w-14 h-14 rounded-full flex items-center justify-center bg-surface-container-high border border-primary-container/20 group-hover:border-primary-container/60 group-hover:rotate-[8deg] transition-all duration-500">
                  <Icon size={26} className="text-primary-container" strokeWidth={2} />
                </div>
                <h3 className="text-headline-md text-on-surface mt-stack-md mb-2">
                  {title}
                </h3>
                <p className="text-body-md text-on-surface-variant">{desc}</p>

                {/* Reveal arrow on hover */}
                <div className="mt-4 flex items-center gap-1 text-[11px] uppercase tracking-widest text-primary-container opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                  Learn more
                  <span aria-hidden="true">→</span>
                </div>
              </div>

              {/* Corner accents */}
              <span className="absolute top-0 left-0 h-3 w-3 border-t border-l border-primary-container/40" />
              <span className="absolute bottom-0 right-0 h-3 w-3 border-b border-r border-primary-container/40" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
