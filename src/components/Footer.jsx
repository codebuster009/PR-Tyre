import { motion } from 'framer-motion';
import { Phone, Mail, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer
      id="contact"
      className="relative bg-on-surface text-white pt-16 md:pt-section-padding pb-10"
    >
      {/* Top yellow accent line */}
      <div
        aria-hidden="true"
        className="absolute top-0 left-0 right-0 h-px"
        style={{
          background:
            'linear-gradient(to right, transparent, rgba(255,184,0,0.8), transparent)',
        }}
      />

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.6 }}
        className="max-w-container-max mx-auto px-5 md:px-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 md:gap-gutter"
      >
        {/* Brand */}
        <div className="space-y-stack-md md:col-span-2 lg:col-span-5">
          <div className="group flex items-center gap-3 cursor-default min-w-0">
            <motion.div
              initial={{ rotate: -540, scale: 0.4, opacity: 0 }}
              whileInView={{ rotate: 0, scale: 1, opacity: 1 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 1, ease: [0.34, 1.56, 0.64, 1] }}
              className="shrink-0 relative"
            >
              <span
                aria-hidden="true"
                className="inline-flex items-center justify-center h-10 w-10 rounded-md bg-primary-container text-on-primary-container font-extrabold text-sm tracking-tight transition-transform duration-1000 ease-out group-hover:rotate-[360deg]"
              >
                24
              </span>
              <span
                aria-hidden="true"
                className="absolute -top-0.5 -right-0.5 inline-flex h-2 w-2"
              >
                <span className="absolute inset-0 rounded-full bg-secondary/70 animate-pulseRing" />
                <span className="relative h-2 w-2 rounded-full bg-secondary ring-2 ring-on-surface" />
              </span>
            </motion.div>
            <div className="text-xl sm:text-2xl lg:text-3xl font-extrabold tracking-tight text-white truncate">
              MobileTyres<span className="text-primary-container">24Hour</span>
            </div>
          </div>
          <p className="text-sm sm:text-body-md text-white/70 max-w-sm">
            Premium mobile tyre fitting and emergency roadside assistance.
            Engineered for speed, safety, and reliability.
          </p>
        </div>

        {/* Contact */}
        <div className="space-y-3 lg:col-span-4 min-w-0">
          <h4 className="text-sm md:text-base font-bold text-white mb-3 uppercase tracking-wider">
            Contact
          </h4>
          <a
            href="tel:07415390448"
            className="group flex items-center gap-2 text-sm sm:text-body-md text-white/80 hover:text-primary-container hover:translate-x-0.5 transition-all"
          >
            <Phone size={16} className="text-primary-container shrink-0 group-hover:-rotate-12 transition-transform" />
            07415 390448
          </a>
          <a
            href="mailto:mobiletyres247hrs@gmail.com"
            className="group flex items-center gap-2 text-sm sm:text-body-md text-white/80 hover:text-primary-container hover:translate-x-0.5 transition-all break-all"
          >
            <Mail size={16} className="text-primary-container shrink-0 group-hover:scale-110 transition-transform" />
            <span className="break-all">mobiletyres247hrs@gmail.com</span>
          </a>
          <div className="flex items-start gap-2 text-sm sm:text-body-md text-white/80">
            <MapPin size={16} className="text-primary-container mt-1 shrink-0" />
            <span>
              Unit B2 Crabtree Road, Thorpe Industrial Estate, TW20 8RN
            </span>
          </div>
        </div>

        {/* Legal */}
        <div className="space-y-3 lg:col-span-3 lg:text-right">
          <h4 className="text-sm md:text-base font-bold text-white mb-3 uppercase tracking-wider">
            Legal
          </h4>
          <a
            href="#"
            className="block text-sm sm:text-body-md text-white/80 hover:text-primary-container transition-colors"
          >
            Privacy Policy
          </a>
          <a
            href="#"
            className="block text-sm sm:text-body-md text-white/80 hover:text-primary-container transition-colors"
          >
            Terms of Service
          </a>
          <a
            href="#"
            className="block text-sm sm:text-body-md text-white/80 hover:text-primary-container transition-colors"
          >
            Service Areas
          </a>
        </div>
      </motion.div>

      <div className="max-w-container-max mx-auto px-5 md:px-12 mt-10 md:mt-14 pt-6 md:pt-8 border-t border-white/10 flex flex-col md:flex-row items-center md:items-center justify-between gap-3 md:gap-4 text-xs sm:text-sm text-white/60 text-center md:text-left">
        <p>© {new Date().getFullYear()} MobileTyres24Hour. All rights reserved.</p>
        <p className="text-[10px] sm:text-[11px] uppercase tracking-[0.2em] sm:tracking-[0.25em]">
          Crafted in Surrey · Built for the road
        </p>
      </div>
    </footer>
  );
}
