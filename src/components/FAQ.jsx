import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Plus } from 'lucide-react';

const faqs = [
  {
    q: 'How fast can you actually get to me?',
    a: 'For emergencies inside the M25 and Surrey we average under 30 minutes. We track live ETA from the moment your call connects, so you’ll always know exactly when help arrives.',
  },
  {
    q: 'Are you available 24/7, including weekends and holidays?',
    a: 'Yes. We dispatch around the clock, every day of the year. Christmas morning, 3am Sunday — we’re on standby.',
  },
  {
    q: 'What tyre brands do you carry on the van?',
    a: 'We stock premium and mid-range options including Hankook, Goodyear, Maxxis, Michelin, Pirelli, Bridgestone and Continental. If we don’t have your exact tyre, we source it the same day where possible.',
  },
  {
    q: 'How do I pay? Do you take card?',
    a: 'Card, contactless, Apple Pay, Google Pay and bank transfer — all accepted on-site. We email a VAT-compliant receipt instantly.',
  },
  {
    q: 'Do you cover punctures and balancing as well as new tyres?',
    a: 'Absolutely. Plug-and-patch repairs to British safety standards, precision laser balancing, and systematic wheel rotations — all performed roadside or on your driveway.',
  },
  {
    q: 'Are your technicians certified?',
    a: 'Every technician is fully certified, insured, and DBS-checked. Our crews carry calibrated diagnostic equipment and follow TyreSafe protocols on every job.',
  },
];

export default function FAQ() {
  const [open, setOpen] = useState(0);

  return (
    <section id="faq" className="relative py-16 md:py-section-padding">
      <div className="max-w-3xl mx-auto px-5 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <span className="inline-block text-[10px] sm:text-[11px] uppercase tracking-[0.25em] sm:tracking-[0.3em] text-primary-container mb-3">
            Got questions?
          </span>
          <h2 className="text-3xl sm:text-headline-lg text-on-surface font-bold mb-3">
            Frequently Asked
          </h2>
          <p className="text-base text-on-surface-variant">
            The answers most drivers are looking for — straight, no fluff.
          </p>
        </motion.div>

        <div className="divide-y divide-white/10 border-y border-white/10">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <div key={f.q} className="group">
                <button
                  onClick={() => setOpen(isOpen ? -1 : i)}
                  className="w-full flex items-center justify-between gap-4 py-5 md:py-6 text-left hover:text-primary-container transition-colors"
                  aria-expanded={isOpen}
                >
                  <span className="text-base sm:text-lg font-bold text-on-surface group-hover:text-primary-container transition-colors">
                    {f.q}
                  </span>
                  <motion.span
                    animate={{ rotate: isOpen ? 45 : 0 }}
                    transition={{ duration: 0.25 }}
                    className="shrink-0 inline-flex items-center justify-center h-9 w-9 border border-white/15 group-hover:border-primary-container text-on-surface-variant group-hover:text-primary-container transition-colors"
                  >
                    <Plus size={18} />
                  </motion.span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key="content"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                      className="overflow-hidden"
                    >
                      <p className="pb-5 md:pb-6 pr-12 text-sm sm:text-base text-on-surface-variant leading-relaxed">
                        {f.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
