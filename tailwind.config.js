/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        surface: '#131313',
        'surface-dim': '#131313',
        'surface-bright': '#393939',
        'surface-container-lowest': '#0e0e0e',
        'surface-container-low': '#1c1b1b',
        'surface-container': '#201f1f',
        'surface-container-high': '#2a2a2a',
        'surface-container-highest': '#353534',
        'on-surface': '#e5e2e1',
        'on-surface-variant': '#d5c4ab',
        outline: '#9e8f78',
        'outline-variant': '#514532',
        'surface-tint': '#ffba20',
        primary: '#ffdca1',
        'on-primary': '#412d00',
        'primary-container': '#ffb800',
        'on-primary-container': '#6b4c00',
        secondary: '#4de082',
        'on-secondary': '#003919',
        'secondary-container': '#00b55d',
        background: '#131313',
        'on-background': '#e5e2e1',
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
        DEFAULT: '0px',
        sm: '0px',
        md: '0px',
        lg: '0px',
        xl: '0px',
        full: '9999px',
      },
      keyframes: {
        glint: {
          '0%': { transform: 'translateX(-150%) skewX(-20deg)' },
          '60%, 100%': { transform: 'translateX(350%) skewX(-20deg)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        floatY: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        pulseRing: {
          '0%': { transform: 'scale(1)', opacity: '0.6' },
          '100%': { transform: 'scale(1.8)', opacity: '0' },
        },
        gridShift: {
          '0%': { backgroundPosition: '0 0' },
          '100%': { backgroundPosition: '40px 40px' },
        },
        shimmerText: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
      animation: {
        glint: 'glint 3.5s ease-in-out infinite',
        marquee: 'marquee 35s linear infinite',
        floatY: 'floatY 4s ease-in-out infinite',
        pulseRing: 'pulseRing 2.4s cubic-bezier(0.4,0,0.6,1) infinite',
        gridShift: 'gridShift 12s linear infinite',
        shimmerText: 'shimmerText 4s linear infinite',
      },
      backgroundImage: {
        'grid-pattern':
          'linear-gradient(to right, rgba(255,184,0,0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,184,0,0.06) 1px, transparent 1px)',
      },
      backgroundSize: {
        'grid-40': '40px 40px',
      },
    },
  },
  plugins: [],
};
