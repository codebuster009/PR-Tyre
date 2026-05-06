import { motion } from 'framer-motion';
import { ShieldCheck, Award, BadgeCheck, Lock, Zap, Leaf } from 'lucide-react';

const accreditations = [
  { icon: ShieldCheck, label: 'TyreSafe Member' },
  { icon: Award, label: 'BSI Certified' },
  { icon: BadgeCheck, label: 'MOT Approved' },
  { icon: Lock, label: 'DBS Checked Crew' },
  { icon: Zap, label: 'ISO 9001' },
  { icon: Leaf, label: 'Eco Disposal' },
];

const areas = [
  'Egham',
  'Staines',
  'Windsor',
  'Heathrow',
  'Slough',
  'Weybridge',
  'Chertsey',
  'Sunbury',
  'Twickenham',
  'Richmond',
  'Kingston',
  'Woking',
  'Esher',
  'Walton',
  'Ashford',
];

export default function TrustRow() {
  return (
    <section className="relative py-16 md:py-20 bg-surface-container-lowest/60 border-y border-white/5">
      <div className="max-w-container-max mx-auto px-5 md:px-12">
        {/* Accreditations */}
        <div className="text-center mb-12 md:mb-14">
          <p className="text-[10px] sm:text-[11px] uppercase tracking-[0.25em] sm:tracking-[0.3em] text-on-surface-variant mb-6 md:mb-8">
            Vetted · Certified · Insured
          </p>
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-60px' }}
            variants={{
              hidden: {},
              show: { transition: { staggerChildren: 0.06 } },
            }}
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3"
          >
            {accreditations.map(({ icon: Icon, label }) => (
              <motion.div
                key={label}
                variants={{
                  hidden: { opacity: 0, y: 14 },
                  show: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 0.5 }}
                className="group flex items-center gap-2 px-3 py-3 border border-white/10 hover:border-primary-container/50 hover:bg-surface-container-low transition-colors"
              >
                <Icon
                  size={18}
                  className="shrink-0 text-on-surface-variant group-hover:text-primary-container transition-colors"
                />
                <span className="text-[11px] sm:text-xs uppercase tracking-wider text-on-surface-variant group-hover:text-on-surface transition-colors leading-tight">
                  {label}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Service area chips */}
        <div className="text-center pt-10 md:pt-12 border-t border-white/5">
          <p className="text-[10px] sm:text-[11px] uppercase tracking-[0.25em] sm:tracking-[0.3em] text-on-surface-variant mb-6 md:mb-8">
            Coverage · Surrey & M25
          </p>
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-60px' }}
            variants={{
              hidden: {},
              show: { transition: { staggerChildren: 0.04 } },
            }}
            className="flex flex-wrap justify-center gap-2"
          >
            {areas.map((a) => (
              <motion.span
                key={a}
                variants={{
                  hidden: { opacity: 0, scale: 0.85 },
                  show: { opacity: 1, scale: 1 },
                }}
                whileHover={{ y: -2 }}
                transition={{ duration: 0.4 }}
                className="px-3 py-1.5 text-xs sm:text-sm border border-white/10 hover:border-primary-container/60 hover:text-primary-container hover:bg-primary-container/5 transition-colors text-on-surface-variant cursor-default"
              >
                {a}
              </motion.span>
            ))}
            <span className="px-3 py-1.5 text-xs sm:text-sm bg-primary-container/10 border border-primary-container/40 text-primary-container">
              + 20 more
            </span>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
