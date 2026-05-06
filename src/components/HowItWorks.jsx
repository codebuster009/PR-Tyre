import { motion, useInView } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import { PhoneCall, Crosshair, Truck } from 'lucide-react';

const steps = [
  {
    icon: PhoneCall,
    title: 'Call or Chat',
    desc: 'One ring or one tap on WhatsApp — share your location and vehicle.',
  },
  {
    icon: Crosshair,
    title: 'We Pinpoint You',
    desc: 'Live GPS sync so the closest crew gets routed to you in seconds.',
  },
  {
    icon: Truck,
    title: 'Crew Dispatched',
    desc: 'Fully-stocked mobile unit on the way with a real-time ETA you can track.',
  },
  {
    icon: null, // tick is drawn manually
    title: 'Tyre Sorted',
    desc: 'Fitted, balanced, and tested — you’re back on the road, fast.',
  },
];

const STEP_DELAY_MS = 1100;
const INITIAL_DELAY_MS = 500;
const LOOP_PAUSE_MS = 5000;

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

export default function HowItWorks() {
  const ref = useRef(null);
  const inView = useInView(ref, { margin: '-120px' });
  const [activeStep, setActiveStep] = useState(-1);

  useEffect(() => {
    if (!inView) return undefined;
    let cancelled = false;

    const run = async () => {
      while (!cancelled) {
        setActiveStep(-1);
        await sleep(INITIAL_DELAY_MS);
        for (let i = 0; i < steps.length; i++) {
          if (cancelled) return;
          setActiveStep(i);
          await sleep(STEP_DELAY_MS);
        }
        await sleep(LOOP_PAUSE_MS);
      }
    };
    run();
    return () => {
      cancelled = true;
    };
  }, [inView]);

  const progress = activeStep < 0 ? 0 : activeStep / (steps.length - 1);

  return (
    <section
      ref={ref}
      id="how"
      className="relative py-16 md:py-section-padding overflow-hidden bg-background"
    >
      <div className="relative max-w-container-max mx-auto px-5 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="text-center max-w-2xl mx-auto mb-12 md:mb-16"
        >
          <span className="inline-block text-[10px] sm:text-[11px] uppercase tracking-[0.22em] sm:tracking-[0.28em] text-secondary mb-3 font-bold">
            From SOS to sorted
          </span>
          <h2 className="text-3xl sm:text-headline-lg text-on-surface mb-3 font-bold">
            How It Works
          </h2>
          <p className="text-base sm:text-body-lg text-on-surface-variant">
            Four steps. No drama. Engineered for the moment you need help most.
          </p>
        </motion.div>

        <div className="relative">
          {/* Desktop horizontal connecting line */}
          <div
            aria-hidden="true"
            className="hidden lg:block absolute top-8 left-[12.5%] right-[12.5%] pointer-events-none"
            style={{ height: 1 }}
          >
            <div className="absolute inset-x-0 top-0 h-px bg-outline-variant" />
            <motion.div
              className="absolute left-0 top-0 h-px bg-gradient-to-r from-primary-container/40 via-primary-container to-primary-container origin-left"
              style={{ transformOrigin: 'left center' }}
              animate={{ scaleX: progress }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            />
            <motion.div
              className="absolute top-0 -translate-y-1/2 -translate-x-1/2 h-3 w-3 rounded-full bg-primary-container"
              animate={{
                left: `${progress * 100}%`,
                opacity: activeStep < 0 ? 0 : 1,
              }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
              style={{ boxShadow: '0 0 14px 3px rgba(255,184,0,0.55)' }}
            />
          </div>

          {/* Mobile vertical connecting line */}
          <div
            aria-hidden="true"
            className="lg:hidden absolute top-8 bottom-8 left-1/2 -translate-x-1/2 w-px pointer-events-none"
          >
            <div className="absolute inset-0 bg-outline-variant" />
            <motion.div
              className="absolute top-0 left-0 right-0 bg-gradient-to-b from-primary-container/40 via-primary-container to-primary-container origin-top"
              style={{ transformOrigin: 'top center' }}
              animate={{ scaleY: progress }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            />
            <motion.div
              className="absolute left-1/2 h-3 w-3 rounded-full bg-primary-container"
              animate={{
                top: `${progress * 100}%`,
                opacity: activeStep < 0 ? 0 : 1,
              }}
              transition={{
                top: { duration: 1, ease: [0.22, 1, 0.36, 1] },
                opacity: { duration: 0.4 },
              }}
              style={{
                boxShadow: '0 0 14px 3px rgba(255,184,0,0.55)',
                x: '-50%',
                y: '-50%',
              }}
            />
          </div>

          <ol className="relative grid grid-cols-1 lg:grid-cols-4 gap-12 lg:gap-8">
            {steps.map((s, i) => (
              <Step
                key={s.title}
                step={s}
                index={i}
                activeStep={activeStep}
              />
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}

function Step({ step, index, activeStep }) {
  const Icon = step.icon;
  const reached = activeStep >= index;
  const isCurrent = activeStep === index;
  const isFinal = index === steps.length - 1;

  return (
    <motion.li
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ delay: 0.08 * index, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="relative text-center"
    >
      <div className="relative mx-auto h-16 w-16 mb-5">
        <motion.span
          className="absolute inset-0 rounded-full"
          animate={{
            backgroundColor: reached
              ? 'rgba(255,184,0,0.22)'
              : 'rgba(255,184,0,0.08)',
          }}
          transition={{ duration: 0.4 }}
        />
        <motion.span
          className="absolute inset-0 rounded-full border"
          animate={{
            borderColor: reached
              ? 'rgba(255,184,0,1)'
              : 'rgba(255,184,0,0.3)',
            boxShadow: reached
              ? '0 0 18px 2px rgba(255,184,0,0.3)'
              : '0 0 0 0 rgba(255,184,0,0)',
          }}
          transition={{ duration: 0.4 }}
        />
        {isCurrent && !isFinal && (
          <span className="absolute inset-0 rounded-full border border-primary-container/60 animate-pulseRing" />
        )}

        <span className="relative h-full w-full flex items-center justify-center">
          {isFinal ? (
            <CheckDraw active={reached} />
          ) : (
            <motion.span
              animate={
                reached
                  ? index === 0
                    ? { rotate: [0, -14, 14, -8, 8, 0] }
                    : index === 1
                    ? { scale: [1, 1.25, 1] }
                    : index === 2
                    ? { x: [-6, 6, 0] }
                    : {}
                  : {}
              }
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="inline-flex"
            >
              <Icon
                size={26}
                strokeWidth={2}
                className={`transition-colors duration-300 ${
                  reached
                    ? 'text-primary'
                    : 'text-primary/40'
                }`}
              />
            </motion.span>
          )}
        </span>

        <motion.span
          animate={{
            backgroundColor: reached ? '#ffb800' : '#dcdad2',
            color: reached ? '#1a1100' : '#171717',
          }}
          transition={{ duration: 0.4 }}
          className="absolute -top-2 -right-2 h-7 w-7 rounded-full text-xs font-extrabold flex items-center justify-center"
        >
          0{index + 1}
        </motion.span>

        {isCurrent && (
          <motion.span
            key={`burst-${activeStep}-${index}`}
            initial={{ scale: 0.5, opacity: 0.7 }}
            animate={{ scale: 2, opacity: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="absolute inset-0 rounded-full border border-primary-container pointer-events-none"
          />
        )}
      </div>

      <h3
        className={`text-lg md:text-xl font-bold mb-2 transition-colors duration-300 ${
          reached ? 'text-on-surface' : 'text-on-surface/60'
        }`}
      >
        {step.title}
      </h3>
      <p className="text-sm text-on-surface-variant max-w-xs mx-auto leading-relaxed">
        {step.desc}
      </p>
    </motion.li>
  );
}

function CheckDraw({ active }) {
  return (
    <svg
      width="28"
      height="28"
      viewBox="0 0 24 24"
      className="text-primary"
      aria-hidden="true"
    >
      <motion.path
        d="M5 12.5l4.2 4.2L19 7.2"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.4"
        strokeLinecap="round"
        strokeLinejoin="round"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{
          pathLength: active ? 1 : 0,
          opacity: active ? 1 : 0,
        }}
        transition={{
          pathLength: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
          opacity: { duration: 0.2 },
        }}
      />
    </svg>
  );
}
