// Shared audio plumbing for tyre-themed UI sounds.
//
// Browsers block AudioContext until the page has received a user gesture
// (click / keypress / touch). The first interaction anywhere on the page
// primes the context for every later sound; until then helpers no-op silently.

let cachedCtx = null;

export function getCtx() {
  if (cachedCtx) return cachedCtx;
  try {
    const Ctor =
      typeof window !== 'undefined' &&
      (window.AudioContext || window.webkitAudioContext);
    if (!Ctor) return null;
    cachedCtx = new Ctor();
  } catch (_) {
    return null;
  }
  return cachedCtx;
}

export function tryResume() {
  const ctx = getCtx();
  if (!ctx) return;
  if (ctx.state === 'suspended') {
    ctx.resume().catch(() => {});
  }
}

// One-time, app-wide gesture priming.
if (typeof window !== 'undefined') {
  tryResume();
  setTimeout(tryResume, 50);
  setTimeout(tryResume, 300);

  const events = ['pointerdown', 'keydown', 'touchstart', 'click'];
  const onGesture = () => tryResume();
  events.forEach((e) =>
    document.addEventListener(e, onGesture, { passive: true })
  );
}

// Short tyre brake sound: high-Q bandpass screech + low sine thud (~0.55s).
export function playSkidThud(ctx) {
  if (!ctx || ctx.state !== 'running') return;
  const t0 = ctx.currentTime;

  // Skid screech
  const skidDur = 0.55;
  const buf = ctx.createBuffer(
    1,
    Math.floor(ctx.sampleRate * skidDur),
    ctx.sampleRate
  );
  const data = buf.getChannelData(0);
  for (let i = 0; i < data.length; i++) data[i] = Math.random() * 2 - 1;

  const noise = ctx.createBufferSource();
  noise.buffer = buf;

  const skidFilter = ctx.createBiquadFilter();
  skidFilter.type = 'bandpass';
  skidFilter.Q.value = 5;
  skidFilter.frequency.setValueAtTime(2400, t0);
  skidFilter.frequency.exponentialRampToValueAtTime(800, t0 + 0.5);

  const skidGain = ctx.createGain();
  skidGain.gain.setValueAtTime(0, t0);
  skidGain.gain.linearRampToValueAtTime(0.22, t0 + 0.025);
  skidGain.gain.exponentialRampToValueAtTime(0.001, t0 + 0.5);

  noise.connect(skidFilter);
  skidFilter.connect(skidGain);
  skidGain.connect(ctx.destination);
  noise.start(t0);
  noise.stop(t0 + skidDur);

  // Impact thud
  const osc = ctx.createOscillator();
  osc.type = 'sine';
  osc.frequency.setValueAtTime(85, t0);
  osc.frequency.exponentialRampToValueAtTime(38, t0 + 0.18);

  const oscGain = ctx.createGain();
  oscGain.gain.setValueAtTime(0, t0);
  oscGain.gain.linearRampToValueAtTime(0.28, t0 + 0.012);
  oscGain.gain.exponentialRampToValueAtTime(0.001, t0 + 0.22);

  osc.connect(oscGain);
  oscGain.connect(ctx.destination);
  osc.start(t0);
  osc.stop(t0 + 0.25);
}
