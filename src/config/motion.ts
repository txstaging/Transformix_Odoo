/**
 * Motion tokens. The Figma file defines no prototype animations, so these
 * follow the project defaults: short ease-out interactions, slightly longer reveals.
 */
export const motionTokens = {
  duration: {
    fast: 0.2,
    base: 0.3,
    reveal: 0.5,
    word: 0.6,
    marker: 0.8,
  },
  ease: {
    out: [0.22, 1, 0.36, 1],
  },
  stagger: 0.08,
  revealOffset: 24,
  /** Trigger slightly before an element is fully in view; animate only once. */
  viewport: { once: true, margin: "0px 0px -80px 0px" },
  /** Benefit cards: spring entrance, staggered across each grid row. */
  card: {
    rise: 56,
    scale: 0.94,
    spring: { type: "spring", duration: 0.9, bounce: 0.25 },
    iconSpring: { type: "spring", duration: 0.7, bounce: 0.5 },
    columnStagger: 0.12,
    contentDelay: 0.25,
  },
  /** Scroll-linked dashboard tilt (after Aceternity's ContainerScroll). */
  scrollTilt: {
    rotate: 20,
    scale: 1.05,
    perspective: 1000,
    /** Page scroll (px) over which above-the-fold media settles flat. */
    pageRange: 400,
  },
} as const;
