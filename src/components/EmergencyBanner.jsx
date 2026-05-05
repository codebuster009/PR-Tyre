import { motion } from 'framer-motion';
import { TriangleAlert, PhoneCall } from 'lucide-react';

export default function EmergencyBanner() {
  return (
    <motion.section
      id="emergency"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="relative overflow-hidden bg-primary-container text-on-primary-container"
    >
      {/* Diagonal stripe pattern */}
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-[0.08] pointer-events-none"
        style={{
          backgroundImage:
            'repeating-linear-gradient(45deg, #000 0 12px, transparent 12px 28px)',
        }}
      />

      <div className="relative max-w-container-max mx-auto px-margin-mobile md:px-12 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-4">
          <motion.span
            animate={{ rotate: [0, -8, 8, -6, 6, 0] }}
            transition={{ duration: 1.6, repeat: Infinity, repeatDelay: 1.4 }}
            className="inline-flex items-center justify-center h-12 w-12 bg-on-primary-container/10 border border-on-primary-container/20"
          >
            <TriangleAlert size={26} strokeWidth={2.4} />
          </motion.span>
          <div>
            <h2 className="text-headline-md leading-tight">
              Emergency Tyre Change Service
            </h2>
            <p className="text-sm md:text-base opacity-90">
              Stuck on the road? We dispatch immediately · 24/7 Rapid Response.
            </p>
          </div>
        </div>

        <a
          href="tel:07415390448"
          className="group inline-flex items-center gap-2 bg-on-primary-container text-primary-container px-6 py-3.5 text-label-bold uppercase hover:bg-black/85 transition whitespace-nowrap"
        >
          <PhoneCall
            size={18}
            strokeWidth={2.6}
            className="group-hover:rotate-[15deg] transition-transform"
          />
          Call 07415 390448 Now
        </a>
      </div>
    </motion.section>
  );
}
