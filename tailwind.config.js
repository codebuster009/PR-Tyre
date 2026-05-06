/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        // Light, warm, automotive-service palette.
        // Surfaces are layered off-whites; ink is a warm near-black.
        surface: '#ffffff',
        'surface-dim': '#f4f3f0',
        'surface-bright': '#ffffff',
        'surface-container-lowest': '#fafaf7',
        'surface-container-low': '#f4f3f0',
        'surface-container': '#eeece7',
        'surface-container-high': '#e6e4dd',
        'surface-container-highest': '#dcdad2',

        // Text & strokes
        'on-surface': '#171717',
        'on-surface-variant': '#525252',
        outline: '#d4d2cc',
        'outline-variant': '#e5e3df',

        // Accents
        'surface-tint': '#ffb800',
        primary: '#b97f00',
        'on-primary': '#ffffff',
        'primary-container': '#ffb800',
        'on-primary-container': '#1a1100',

        // Secondary kept as a cleaner emerald that reads well on white
        secondary: '#0f9d58',
        'on-secondary': '#ffffff',
        'secondary-container': '#0f9d58',

        background: '#fafaf7',
        'on-background': '#171717',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'headline-xl': ['clamp(2.25rem, 5vw + 1rem, 4rem)', { lineHeight: '1.05', letterSpacing: '-0.02em', fontWeight: '800' }],
        'headline-lg': ['clamp(1.75rem, 2.5vw + 0.5rem, 2.5rem)', { lineHeight: '1.15', letterSpacing: '-0.01em', fontWeight: '700' }],
        'headline-md': ['1.5rem', { lineHeight: '1.3', fontWeight: '700' }],
        'body-lg': ['1.125rem', { lineHeight: '1.6', fontWeight: '400' }],
        'body-md': ['1rem', { lineHeight: '1.6', fontWeight: '400' }],
        'label-bold': ['0.875rem', { lineHeight: '1.0', letterSpacing: '0.05em', fontWeight: '700' }],
      },
      spacing: {
        'stack-sm': '8px',
        'stack-md': '16px',
        'stack-lg': '32px',
        gutter: '24px',
        'margin-mobile': '20px',
        'section-padding': '112px',
      },
      maxWidth: {
        'container-max': '1280px',
      },
      borderRadius: {
        DEFAULT: '6px',
        sm: '4px',
        md: '8px',
        lg: '12px',
        xl: '16px',
        full: '9999px',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        floatY: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        pulseRing: {
          '0%': { transform: 'scale(1)', opacity: '0.55' },
          '100%': { transform: 'scale(1.8)', opacity: '0' },
        },
        roadDash: {
          '0%': { backgroundPosition: '0 0' },
          '100%': { backgroundPosition: '32px 0' },
        },
        treadDown: {
          '0%': { backgroundPosition: '0 0' },
          '100%': { backgroundPosition: '0 8px' },
        },
      },
      animation: {
        marquee: 'marquee 35s linear infinite',
        floatY: 'floatY 4s ease-in-out infinite',
        pulseRing: 'pulseRing 2.4s cubic-bezier(0.4,0,0.6,1) infinite',
        roadDash: 'roadDash 1.6s linear infinite',
        treadDown: 'treadDown 1.4s linear infinite',
      },
    },
  },
  plugins: [],
};
