---
name: Premium Automotive Dark
colors:
  surface: '#131313'
  surface-dim: '#131313'
  surface-bright: '#393939'
  surface-container-lowest: '#0e0e0e'
  surface-container-low: '#1c1b1b'
  surface-container: '#201f1f'
  surface-container-high: '#2a2a2a'
  surface-container-highest: '#353534'
  on-surface: '#e5e2e1'
  on-surface-variant: '#d5c4ab'
  inverse-surface: '#e5e2e1'
  inverse-on-surface: '#313030'
  outline: '#9e8f78'
  outline-variant: '#514532'
  surface-tint: '#ffba20'
  primary: '#ffdca1'
  on-primary: '#412d00'
  primary-container: '#ffb800'
  on-primary-container: '#6b4c00'
  inverse-primary: '#7c5800'
  secondary: '#4de082'
  on-secondary: '#003919'
  secondary-container: '#00b55d'
  on-secondary-container: '#003e1c'
  tertiary: '#e0e1e1'
  on-tertiary: '#2f3131'
  tertiary-container: '#c4c5c5'
  on-tertiary-container: '#505252'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#ffdea8'
  primary-fixed-dim: '#ffba20'
  on-primary-fixed: '#271900'
  on-primary-fixed-variant: '#5e4200'
  secondary-fixed: '#6dfe9c'
  secondary-fixed-dim: '#4de082'
  on-secondary-fixed: '#00210c'
  on-secondary-fixed-variant: '#005227'
  tertiary-fixed: '#e2e2e2'
  tertiary-fixed-dim: '#c6c6c7'
  on-tertiary-fixed: '#1a1c1c'
  on-tertiary-fixed-variant: '#454747'
  background: '#131313'
  on-background: '#e5e2e1'
  surface-variant: '#353534'
typography:
  headline-xl:
    fontFamily: Inter
    fontSize: 48px
    fontWeight: '800'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Inter
    fontSize: 32px
    fontWeight: '700'
    lineHeight: '1.2'
    letterSpacing: -0.01em
  headline-md:
    fontFamily: Inter
    fontSize: 24px
    fontWeight: '700'
    lineHeight: '1.3'
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
  label-bold:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '700'
    lineHeight: '1.0'
    letterSpacing: 0.05em
spacing:
  container-max: 1280px
  gutter: 24px
  margin-mobile: 20px
  section-padding: 80px
  stack-sm: 8px
  stack-md: 16px
  stack-lg: 32px
---

## Brand & Style

The design system is engineered to evoke a sense of urgent reliability and high-end automotive precision. It targets a demographic that values efficiency and professionalism, positioning the service not just as a utility, but as a premium roadside concierge. 

The aesthetic style is **High-Contrast Modern**, blending the raw power of automotive industry standards with the sleekness of contemporary tech interfaces. It utilizes a predominantly dark environment to allow vibrant call-to-action colors to "glow," mimicking the look of dashboard instrumentation and emergency lighting. The use of glassmorphism adds a layer of sophistication, suggesting a high-tech, transparent service process.

## Colors

This design system utilizes a deep-space palette to maximize contrast and focus. 

- **Primary (Emergency Yellow):** Used for critical conversion points and highlighting urgent services. It commands attention against the dark backdrop.
- **Secondary (Impact Green):** Reserved for live communication (Live Chat) and success states, providing a clear psychological "go" signal.
- **Neutral (Deep Charcoal):** The foundation of the UI. Backgrounds use #121212 to create depth, while #1E1E1E is used for secondary containers to provide subtle layering.
- **Accents:** Subtle linear gradients are applied to buttons, moving from the base brand color to a slightly lighter tint to simulate a metallic or backlit sheen.

## Typography

The typography system relies on **Inter** for its industrial clarity and geometric balance. 

Headings are rendered with heavy weights and tight letter-spacing to mirror the bold branding seen on performance tires and automotive liveries. Body text maintains generous line-height for effortless scanning during stressful emergency situations. Labels and utility text use uppercase styling with increased letter-spacing to mimic technical specifications and high-end automotive badging.

## Layout & Spacing

The layout follows a **Fixed Grid** system for desktop (12 columns) and a fluid single-column system for mobile. 

A high-premium feel is achieved through "Industrial Whitespace"—generous vertical padding (80px+) between sections that allows high-quality automotive photography to breathe. Elements are aligned to a strict 8px rhythmic grid to ensure a disciplined, engineered appearance. Content should never feel crowded; the hierarchy must guide the user's eye from the hero value proposition directly to the primary action.

## Elevation & Depth

This design system avoids traditional drop shadows in favor of **Tonal Layering** and **Glassmorphism**:

- **Tier 1 (Surface):** The base background (#121212).
- **Tier 2 (Container):** Slightly lighter surfaces (#1E1E1E) with a 1px solid border (white at 10% opacity) to define edges without adding bulk.
- **Tier 3 (Overlays):** For navigation bars and floating buttons, use a backdrop-blur (20px) with a semi-transparent black fill (60% opacity). This creates a "heads-up display" (HUD) effect.
- **Interactions:** Hover states on cards should increase the border opacity from 10% to 30%, rather than lifting the element, maintaining a flat, sleek profile.

## Shapes

To reinforce the professional and "sharp" nature of automotive engineering, this design system utilizes **Sharp Corners (0px)** for all primary components. 

Rectangular containers, buttons, and image frames should remain strictly 90-degree angles. The only exceptions are specific brand icons or the "Live Chat" pill which uses a full radius to stand out as a unique, organic touchpoint within the rigid, technical environment.

## Components

- **Navigation Bar:** A fixed, glassmorphic bar with a blurred background. Links use the `label-bold` style. The brand logo is anchored left, with a prominent "Emergency Call" button anchored right.
- **Hero Section:** Full-width high-resolution photography with a dark radial overlay to ensure typography legibility. Use `headline-xl` for the primary hook.
- **Primary Buttons:** Sharp-edged, #FFB800 fill, black text. Include a subtle "glint" gradient (linear, 45deg, white at 5% to transparent).
- **Services Grid:** Use custom thin-line icons in #FFB800. Cards should have a 1px border and no background fill, turning to #1E1E1E on hover.
- **Live Chat Pill:** A floating component in the bottom right using the secondary Impact Green (#4ADE80) with white text and a high-blur drop shadow to separate it from the UI.
- **Input Fields:** Dark backgrounds (#1E1E1E), sharp corners, and 1px borders that glow #FFB800 upon focus.
- **Footer:** Deep black background with a multi-column layout. Include a dedicated section for "Trust Signals" (accreditation logos) in greyscale, only gaining color on hover.