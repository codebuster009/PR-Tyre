import { motion } from 'framer-motion';
import { Phone, Mail, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer
      id="contact"
      className="relative bg-surface-container-lowest border-t border-white/10 pt-16 md:pt-section-padding pb-10"
    >
      {/* Top gradient line */}
      <div
        aria-hidden="true"
        className="absolute top-0 left-0 right-0 h-px"
        style={{
          background:
            'linear-gradient(to right, transparent, rgba(255,184,0,0.6), transparent)',
        }}
      />

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.6 }}
        className="max-w-container-max mx-auto px-5 md:px-12 grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-gutter"
      >
        {/* Brand */}
        <div className="space-y-stack-md">
          <div className="text-2xl md:text-headline-lg font-extrabold">
            PR <span className="shimmer-text">Mobile Tyre</span>
          </div>
          <p className="text-body-md text-on-surface-variant max-w-sm">
            Premium mobile tyre fitting and emergency roadside assistance.
            Engineered for speed, safety, and reliability.
          </p>
        </div>

        {/* Contact */}
        <div className="space-y-3">
          <h4 className="text-base font-bold text-on-surface mb-3 uppercase tracking-wider">
            Contact Information
          </h4>
          <a
            href="tel:07415390448"
            className="group flex items-center gap-2 text-body-md text-on-surface-variant hover:text-primary-container hover:translate-x-0.5 transition-all"
          >
            <Phone size={16} className="text-primary-container group-hover:-rotate-12 transition-transform" />
            Phone: 07415 390448
          </a>
          <a
            href="mailto:mobiletyres247hrs@gmail.com"
            className="group flex items-center gap-2 text-body-md text-on-surface-variant hover:text-primary-container hover:translate-x-0.5 transition-all break-all"
          >
            <Mail size={16} className="text-primary-container shrink-0 group-hover:scale-110 transition-transform" />
            mobiletyres247hrs@gmail.com
          </a>
          <div className="flex items-start gap-2 text-body-md text-on-surface-variant">
            <MapPin size={16} className="text-primary-container mt-1 shrink-0" />
            <span>
              Unit B2 Crabtree Road, Thorpe Industrial Estate, TW20 8RN
            </span>
          </div>
        </div>

        {/* Legal */}
        <div className="space-y-3 md:text-right">
          <h4 className="text-base font-bold text-on-surface mb-3 uppercase tracking-wider">
            Legal
          </h4>
          <a
            href="#"
            className="block text-body-md text-on-surface-variant hover:text-primary-container transition-colors"
          >
            Privacy Policy
          </a>
          <a
            href="#"
            className="block text-body-md text-on-surface-variant hover:text-primary-container transition-colors"
          >
            Terms of Service
          </a>
          <a
            href="#"
            className="block text-body-md text-on-surface-variant hover:text-primary-container transition-colors"
          >
            Service Areas
          </a>
        </div>
      </motion.div>

      <div className="max-w-container-max mx-auto px-5 md:px-12 mt-12 md:mt-16 pt-6 md:pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-3 md:gap-4 text-xs sm:text-sm text-on-surface-variant">
        <p>© {new Date().getFullYear()} PR Mobile Tyre. All rights reserved.</p>
        <p className="text-[11px] uppercase tracking-[0.25em]">
          Crafted in Surrey · Built for the road
        </p>
      </div>
    </footer>
  );
}
