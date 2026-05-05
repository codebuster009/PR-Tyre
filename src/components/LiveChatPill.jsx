import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';

export default function LiveChatPill() {
  return (
    <motion.a
      href="https://wa.me/447415390448"
      target="_blank"
      rel="noreferrer"
      initial={{ opacity: 0, y: 24, scale: 0.9 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ delay: 1, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="fixed bottom-5 right-5 z-50 flex items-center gap-2 bg-secondary text-on-secondary px-5 py-3.5 rounded-full glow-secondary backdrop-blur-md border border-white/20"
      aria-label="Open WhatsApp chat"
    >
      {/* Pulse ring */}
      <span aria-hidden="true" className="absolute inset-0 rounded-full">
        <span className="absolute inset-0 rounded-full border border-secondary/60 animate-pulseRing" />
      </span>
      <MessageCircle size={20} strokeWidth={2.4} className="relative" />
      <span className="relative text-label-bold uppercase hidden sm:inline">
        Live Chat
      </span>
    </motion.a>
  );
}
