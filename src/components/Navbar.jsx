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

  // Lock body scroll while the mobile menu is open so the page sits still
  // and the user clearly sees the menu items.
  useEffect(() => {
    if (open) {
      const prev = document.body.style.overflow;
      document.body.style.overflow = 'hidden';
      return () => {
        document.body.style.overflow = prev;
      };
    }
    return undefined;
  }, [open]);

  const scrollToSection = (e, href) => {
    e.preventDefault();
    const id = href.slice(1);
    const wasOpen = open;
    setOpen(false);
    // Wait for the mobile menu collapse animation so the scroll target
    // is computed against the final layout, not the in-flight one.
    const delay = wasOpen ? 280 : 0;
    setTimeout(() => {
      const el = document.getElementById(id);
      if (!el) return;
      // Offset for the fixed navbar (~64px on mobile, 72px on desktop)
      const navOffset = window.innerWidth >= 768 ? 88 : 72;
      const top =
        el.getBoundingClientRect().top + window.scrollY - navOffset;
      window.scrollTo({ top, behavior: 'smooth' });
    }, delay);
  };

  return (
    <motion.nav
      initial={{ y: -32, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="fixed top-0 left-0 right-0 z-50"
    >
      {/* TIER 1 — utility strip (desktop only, auto-hides on scroll) */}
      <div
        className={`hidden md:block overflow-hidden transition-all duration-300 ${
          scrolled
            ? 'max-h-0 opacity-0 -translate-y-1'
            : 'max-h-9 opacity-100 translate-y-0'
        } bg-on-surface text-white border-b border-on-surface/60`}
      >
        <div className="max-w-container-max mx-auto px-12 h-9 flex items-center justify-between text-[11px] uppercase tracking-[0.18em] text-white/80">
          <div className="flex items-center gap-5">
            <a
              href="tel:07415390448"
              className="flex items-center gap-2 hover:text-primary-container transition-colors font-semibold"
            >
              <PhoneCall size={11} className="text-primary-container" />
              07415 390448
            </a>
            <span className="text-white/20">|</span>
            <a
              href="mailto:mobiletyres247hrs@gmail.com"
              className="flex items-center gap-2 hover:text-primary-container transition-colors"
            >
              <Mail size={11} className="text-white/60" />
              mobiletyres247hrs@gmail.com
            </a>
            <span className="text-white/20">|</span>
            <span className="flex items-center gap-2">
              <MapPin size={11} className="text-white/60" />
              Surrey · M25 corridor
            </span>
          </div>
          <div className="flex items-center gap-2">
            <span className="relative inline-flex h-1.5 w-1.5">
              <span className="absolute inset-0 rounded-full bg-secondary/70 animate-pulseRing" />
              <span className="relative h-1.5 w-1.5 rounded-full bg-secondary" />
            </span>
            <span className="text-secondary">Open now</span>
            <span className="text-white/20">·</span>
            <span>Avg response &lt; 30 min</span>
          </div>
        </div>
      </div>

      {/* TIER 2 — main nav */}
      <div
        className={`transition-colors ${
          scrolled
            ? 'bg-surface/95 shadow-[0_4px_24px_-12px_rgba(0,0,0,0.12)]'
            : 'bg-surface/85'
        } backdrop-blur-md border-b border-outline-variant`}
      >
        <div className="max-w-container-max mx-auto px-5 md:px-12 h-16 md:h-[72px] flex items-center justify-between gap-3">
          {/* Logo */}
          <a
            href="#"
            aria-label="MobileTyres24Hour — home"
            className="flex items-center gap-3 group min-w-0"
          >
            <motion.div
              initial={{ rotate: -540, scale: 0.4, opacity: 0 }}
              animate={{ rotate: 0, scale: 1, opacity: 1 }}
              transition={{
                duration: 1,
                ease: [0.34, 1.56, 0.64, 1],
                delay: 0.2,
              }}
              className="shrink-0 relative"
            >
              <span
                aria-hidden="true"
                className="inline-flex items-center justify-center h-9 w-9 rounded-md bg-primary-container text-on-primary-container font-extrabold text-sm tracking-tight transition-transform duration-1000 ease-out group-hover:rotate-[360deg]"
              >
                24
              </span>
              <span
                aria-hidden="true"
                className="absolute -top-0.5 -right-0.5 inline-flex h-2 w-2"
              >
                <span className="absolute inset-0 rounded-full bg-secondary/70 animate-pulseRing" />
                <span className="relative h-2 w-2 rounded-full bg-secondary ring-2 ring-surface" />
              </span>
            </motion.div>
            <div className="leading-none flex flex-col">
              <span className="text-[9px] md:text-[10px] uppercase tracking-[0.25em] text-on-surface-variant hidden md:block mb-1 font-semibold">
                Always Open · Roadside Service
              </span>
              <span className="text-base sm:text-lg md:text-xl font-extrabold tracking-tight text-on-surface truncate">
                MobileTyres<span className="text-primary-container">24Hour</span>
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
                  onClick={(e) => scrollToSection(e, l.href)}
                  className={`relative px-4 py-2 text-[11px] uppercase tracking-[0.16em] font-bold transition-colors ${
                    isActive
                      ? 'text-on-surface'
                      : 'text-on-surface-variant hover:text-on-surface'
                  }`}
                >
                  {l.label}
                  {isActive && (
                    <motion.span
                      layoutId="nav-active"
                      className="absolute left-3 right-3 -bottom-px h-0.5 rounded-full bg-primary-container"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </a>
              );
            })}
          </div>

          <div className="flex items-center gap-2 sm:gap-3">
            {/* Desktop CTA — hidden on mobile (BottomActionBar already
                provides Call + WhatsApp, so the navbar stays uncluttered). */}
            <a
              href="tel:07415390448"
              aria-label="Emergency call"
              className="hidden lg:inline-flex group items-center gap-2 rounded-md bg-primary-container text-on-primary-container px-5 md:px-6 py-3 md:py-3.5 text-label-bold uppercase hover:brightness-105 active:scale-[0.97] transition shadow-[0_4px_16px_-8px_rgba(255,184,0,0.6)]"
            >
              <PhoneCall size={16} strokeWidth={2.4} className="group-hover:rotate-12 transition-transform" />
              <span>Emergency Call</span>
              <ArrowUpRight
                size={14}
                strokeWidth={2.6}
                className="-mr-1 opacity-70 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all"
              />
            </a>

            {/* Mobile toggle */}
            <button
              aria-label={open ? 'Close menu' : 'Open menu'}
              aria-expanded={open}
              onClick={() => setOpen((o) => !o)}
              className="lg:hidden inline-flex items-center justify-center h-10 w-10 -mr-1 rounded-md text-on-surface hover:bg-surface-container-low active:scale-95 transition"
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
        className="lg:hidden overflow-hidden border-b border-outline-variant bg-surface backdrop-blur-md"
      >
        <div className="px-5 py-4 flex flex-col gap-1">
          {links.map((l) => {
            const id = l.href.slice(1);
            const isActive = active === id;
            return (
              <a
                key={l.href}
                href={l.href}
                onClick={(e) => scrollToSection(e, l.href)}
                className={`py-3 text-label-bold uppercase tracking-[0.16em] border-b border-outline-variant last:border-b-0 transition-colors ${
                  isActive
                    ? 'text-primary'
                    : 'text-on-surface-variant hover:text-primary'
                }`}
              >
                {l.label}
              </a>
            );
          })}
          <div className="pt-4 grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs uppercase tracking-widest text-on-surface-variant">
            <a
              href="tel:07415390448"
              className="flex items-center gap-2 font-semibold"
            >
              <PhoneCall size={12} className="text-primary-container" />
              07415 390448
            </a>
            <a
              href="mailto:mobiletyres247hrs@gmail.com"
              className="flex items-center gap-2 break-all"
            >
              <Mail size={12} className="text-primary-container shrink-0" />
              Email us
            </a>
          </div>
        </div>
      </motion.div>
    </motion.nav>
  );
}
