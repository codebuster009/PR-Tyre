import { motion } from 'framer-motion';
import { PhoneCall, MessageCircle } from 'lucide-react';

// Mobile-only sticky action bar — two equal-width tappable targets.
export default function BottomActionBar() {
  return (
    <motion.div
      initial={{ y: 80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.8, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className="md:hidden fixed bottom-0 inset-x-0 z-50 grid grid-cols-2 border-t border-outline-variant bg-surface shadow-[0_-8px_24px_-12px_rgba(0,0,0,0.15)]"
      style={{ paddingBottom: 'env(safe-area-inset-bottom)' }}
    >
      <a
        href="tel:07415390448"
        className="group flex items-center justify-center gap-2 bg-primary-container text-on-primary-container py-4 text-label-bold uppercase active:scale-[0.97] transition"
      >
        <PhoneCall
          size={18}
          strokeWidth={2.6}
          className="group-active:rotate-12 transition-transform"
        />
        Call
      </a>
      <a
        href="https://wa.me/447415390448"
        target="_blank"
        rel="noreferrer"
        className="group flex items-center justify-center gap-2 bg-secondary text-on-secondary py-4 text-label-bold uppercase active:scale-[0.97] transition"
      >
        <MessageCircle
          size={18}
          strokeWidth={2.6}
          className="group-active:scale-110 transition-transform"
        />
        WhatsApp
      </a>
    </motion.div>
  );
}
