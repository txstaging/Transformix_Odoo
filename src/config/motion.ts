/**
 * Motion tokens. The Figma file defines no prototype animations, so these
 * follow the project defaults: short ease-out interactions, slightly longer reveals.
 */
export const motionTokens = {
  duration: {
    fast: 0.2,
    base: 0.3,
    reveal: 0.5,
  },
  ease: {
    out: [0.22, 1, 0.36, 1],
  },
  stagger: 0.08,
  revealOffset: 24,
} as const;
