import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { PhoneCall, Menu, X } from 'lucide-react';

const links = [
  { label: 'Emergency', href: '#emergency' },
  { label: 'Services', href: '#services' },
  { label: 'Why Us', href: '#why-us' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -32, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 glass transition-colors ${
        scrolled ? 'bg-surface-container-lowest/80' : 'bg-surface-container-lowest/40'
      }`}
    >
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-12 h-20 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2 group">
          <span className="relative inline-flex h-2.5 w-2.5">
            <span className="absolute inset-0 rounded-full bg-secondary animate-pulseRing" />
            <span className="relative h-2.5 w-2.5 rounded-full bg-secondary" />
          </span>
          <span className="text-headline-md font-extrabold tracking-tight text-on-surface">
            PR <span className="shimmer-text">Mobile Tyre</span>
          </span>
        </a>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="relative text-label-bold uppercase text-on-surface-variant hover:text-primary transition-colors"
            >
              {l.label}
              <span className="absolute -bottom-1 left-0 h-px w-0 bg-primary-container transition-all duration-300 group-hover:w-full hover:w-full" />
            </a>
          ))}
        </div>

        <div className="flex items-center gap-3">
          {/* System status indicator */}
          <div className="hidden lg:flex items-center gap-2 text-[11px] uppercase tracking-widest text-on-surface-variant">
            <span className="relative inline-flex h-2 w-2">
              <span className="absolute inset-0 rounded-full bg-secondary opacity-70 animate-pulseRing" />
              <span className="relative h-2 w-2 rounded-full bg-secondary" />
            </span>
            On-call · &lt; 30 min
          </div>

          {/* Emergency button */}
          <a
            href="tel:07415390448"
            className="hidden sm:inline-flex glint glow-primary items-center gap-2 bg-primary-container text-on-primary-container px-5 py-3 text-label-bold uppercase hover:brightness-110 active:scale-[0.97] transition"
          >
            <PhoneCall size={18} strokeWidth={2.4} />
            Emergency Call
          </a>

          {/* Mobile toggle */}
          <button
            aria-label="Toggle menu"
            onClick={() => setOpen((o) => !o)}
            className="md:hidden p-2 text-on-surface"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <motion.div
        initial={false}
        animate={{ height: open ? 'auto' : 0, opacity: open ? 1 : 0 }}
        transition={{ duration: 0.25 }}
        className="md:hidden overflow-hidden border-t border-white/10 bg-surface-container-lowest/95"
      >
        <div className="px-margin-mobile py-4 flex flex-col gap-4">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="text-label-bold uppercase text-on-surface-variant hover:text-primary"
            >
              {l.label}
            </a>
          ))}
          <a
            href="tel:07415390448"
            className="glint glow-primary inline-flex items-center justify-center gap-2 bg-primary-container text-on-primary-container px-5 py-3 text-label-bold uppercase"
          >
            <PhoneCall size={18} /> Emergency Call
          </a>
        </div>
      </motion.div>
    </motion.nav>
  );
}
