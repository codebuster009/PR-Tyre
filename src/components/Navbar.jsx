import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { PhoneCall, Menu, X, Mail, MapPin, ArrowUpRight } from 'lucide-react';

const links = [
  { label: 'Emergency', href: '#emergency' },
  { label: 'Services', href: '#services' },
  { label: 'How it works', href: '#how' },
  { label: 'Why us', href: '#why-us' },
  { label: 'FAQ', href: '#faq' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState('');

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 12);
      // basic active section tracking
      const ids = links.map((l) => l.href.slice(1));
      let current = '';
      for (const id of ids) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top - 140 <= 0) current = id;
      }
      setActive(current);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -32, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="fixed top-0 left-0 right-0 z-50"
    >
      {/* Top hairline accent */}
      <div
        aria-hidden="true"
        className="h-px"
        style={{
          background:
            'linear-gradient(to right, transparent, rgba(255,184,0,0.4) 40%, rgba(77,224,130,0.4) 60%, transparent)',
        }}
      />

      {/* TIER 1 — utility strip (desktop only, auto-hides on scroll) */}
      <div
        className={`hidden md:block overflow-hidden transition-all duration-300 ${
          scrolled
            ? 'max-h-0 opacity-0 -translate-y-1'
            : 'max-h-9 opacity-100 translate-y-0'
        } bg-surface-container-lowest/40 backdrop-blur-xl border-b border-white/[0.04]`}
      >
        <div className="max-w-container-max mx-auto px-12 h-9 flex items-center justify-between text-[10.5px] uppercase tracking-[0.2em] text-on-surface-variant/80">
          <div className="flex items-center gap-5">
            <a
              href="tel:07415390448"
              className="flex items-center gap-2 hover:text-on-surface transition-colors"
            >
              <PhoneCall size={11} className="text-on-surface-variant/60" />
              07415 390448
            </a>
            <span className="text-white/10">|</span>
            <a
              href="mailto:mobiletyres247hrs@gmail.com"
              className="flex items-center gap-2 hover:text-on-surface transition-colors"
            >
              <Mail size={11} className="text-on-surface-variant/60" />
              mobiletyres247hrs@gmail.com
            </a>
            <span className="text-white/10">|</span>
            <span className="flex items-center gap-2">
              <MapPin size={11} className="text-on-surface-variant/60" />
              Surrey · M25 corridor
            </span>
          </div>
          <div className="flex items-center gap-2">
            <span className="relative inline-flex h-1.5 w-1.5">
              <span className="absolute inset-0 rounded-full bg-secondary/70 animate-pulseRing" />
              <span className="relative h-1.5 w-1.5 rounded-full bg-secondary" />
            </span>
            <span className="text-secondary/90">On-call</span>
            <span className="text-white/15">·</span>
            <span>Avg response &lt; 30 min</span>
          </div>
        </div>
      </div>

      {/* TIER 2 — main nav */}
      <div
        className={`transition-colors ${
          scrolled
            ? 'bg-surface-container-lowest/95'
            : 'bg-surface-container-lowest/65'
        } backdrop-blur-xl border-b border-white/[0.06]`}
      >
        <div className="max-w-container-max mx-auto px-5 md:px-12 h-16 md:h-[72px] flex items-center justify-between gap-3">
          {/* Logo */}
          <a href="#" className="flex items-center gap-3 group min-w-0">
            <span className="relative inline-flex h-2.5 w-2.5 shrink-0">
              <span className="absolute inset-0 rounded-full bg-secondary animate-pulseRing" />
              <span className="relative h-2.5 w-2.5 rounded-full bg-secondary" />
            </span>
            <div className="leading-none flex flex-col">
              <span className="text-[9px] md:text-[10px] uppercase tracking-[0.3em] text-on-surface-variant hidden md:block mb-1">
                24/7 · Mobile Tyre Service
              </span>
              <span className="text-base sm:text-lg md:text-2xl font-extrabold tracking-tight text-on-surface truncate">
                PR <span className="shimmer-text">Mobile Tyre</span>
              </span>
            </div>
          </a>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-1">
            {links.map((l) => {
              const id = l.href.slice(1);
              const isActive = active === id;
              return (
                <a
                  key={l.href}
                  href={l.href}
                  className={`relative px-4 py-2 text-[11px] uppercase tracking-[0.18em] font-bold transition-colors ${
                    isActive
                      ? 'text-primary-container'
                      : 'text-on-surface-variant hover:text-on-surface'
                  }`}
                >
                  {l.label}
                  {isActive && (
                    <motion.span
                      layoutId="nav-active"
                      className="absolute left-3 right-3 -bottom-px h-px bg-primary-container"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </a>
              );
            })}
          </div>

          <div className="flex items-center gap-3">
            {/* CTA */}
            <a
              href="tel:07415390448"
              aria-label="Emergency call"
              className="glint glow-primary group inline-flex items-center gap-2 bg-primary-container text-on-primary-container px-3 sm:px-5 md:px-6 py-2.5 md:py-3.5 text-label-bold uppercase hover:brightness-110 active:scale-[0.97] transition relative"
            >
              <PhoneCall size={16} strokeWidth={2.4} className="group-hover:rotate-12 transition-transform" />
              <span className="hidden sm:inline">Emergency Call</span>
              <span className="sm:hidden text-xs">SOS</span>
              <ArrowUpRight
                size={14}
                strokeWidth={2.6}
                className="hidden md:inline -mr-1 opacity-70 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all"
              />
            </a>

            {/* Mobile toggle */}
            <button
              aria-label="Toggle menu"
              onClick={() => setOpen((o) => !o)}
              className="lg:hidden p-2 -mr-2 text-on-surface"
            >
              {open ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <motion.div
        initial={false}
        animate={{ height: open ? 'auto' : 0, opacity: open ? 1 : 0 }}
        transition={{ duration: 0.25 }}
        className="lg:hidden overflow-hidden border-b border-white/10 bg-surface-container-lowest/95 backdrop-blur-xl"
      >
        <div className="px-5 py-5 flex flex-col gap-1">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="py-3 text-label-bold uppercase tracking-[0.18em] text-on-surface-variant hover:text-primary-container border-b border-white/5 last:border-b-0"
            >
              {l.label}
            </a>
          ))}
          <div className="pt-4 grid grid-cols-2 gap-2 text-xs uppercase tracking-widest text-on-surface-variant">
            <a href="tel:07415390448" className="flex items-center gap-2">
              <PhoneCall size={12} className="text-primary-container" />
              07415 390448
            </a>
            <a
              href="mailto:mobiletyres247hrs@gmail.com"
              className="flex items-center gap-2"
            >
              <Mail size={12} className="text-primary-container" />
              Email us
            </a>
          </div>
        </div>
      </motion.div>
    </motion.nav>
  );
}
