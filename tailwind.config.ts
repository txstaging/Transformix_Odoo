import type { Config } from "tailwindcss";

/**
 * Design tokens extracted from the Figma file "transformix-2".
 * Raw values live as CSS custom properties in `src/styles/globals.css`
 * so they can be themed at runtime; this file maps them onto Tailwind's scale.
 */
const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "var(--tfx-primary)",
          strong: "var(--tfx-primary-strong)",
        },
        secondary: "var(--tfx-secondary)",
        tertiary: "var(--tfx-tertiary)",
        ink: {
          DEFAULT: "var(--tfx-ink)",
          muted: "var(--tfx-ink-muted)",
          inverse: "var(--tfx-ink-inverse)",
        },
        surface: {
          DEFAULT: "var(--tfx-surface)",
          card: "var(--tfx-surface-card)",
        },
        "blue-light": {
          DEFAULT: "var(--tfx-blue-light)",
          hover: "var(--tfx-blue-light-hover)",
          active: "var(--tfx-blue-light-active)",
        },
        "yellow-light": "var(--tfx-yellow-light)",
        navy: "var(--tfx-navy)",
        glow: "var(--tfx-glow)",
        copyright: "var(--tfx-copyright)",
      },
      fontFamily: {
        sans: ["var(--font-kufi)", "system-ui", "sans-serif"],
        kufi: ["var(--font-kufi)", "system-ui", "sans-serif"],
        tajawal: ["var(--font-tajawal)", "system-ui", "sans-serif"],
      },
      // Figma text styles use "auto" line height, i.e. the font's own metrics.
      // `lead` is the Tajawal paragraph style; Figma resolves its auto line height
      // to 1.2, whereas browsers add the font's line gap, so it is pinned here.
      fontSize: {
        caption: ["12px", { lineHeight: "normal" }],
        small: ["14px", { lineHeight: "normal" }],
        body: ["16px", { lineHeight: "normal" }],
        "body-lg": ["18px", { lineHeight: "normal" }],
        lead: ["24px", { lineHeight: "1.2" }],
        heading: ["24px", { lineHeight: "normal" }],
        title: ["32px", { lineHeight: "normal" }],
        display: ["40px", { lineHeight: "normal" }],
      },
      lineHeight: {
        auto: "normal",
      },
      spacing: {
        header: "82px",
        section: "119px",
      },
      maxWidth: {
        content: "1240px",
        wide: "1264px",
        faq: "747px",
      },
      borderRadius: {
        media: "25px",
        "media-lg": "30px",
      },
      boxShadow: {
        card: "0 1px 1px 0 rgb(0 0 0 / 0.05)",
        "card-hover": "0 12px 32px -12px rgb(28 68 153 / 0.18)",
        panel: "0 0 4px 0 rgb(0 0 0 / 0.25)",
        glossy:
          "inset 0 0 0 1.829px var(--tfx-glow), inset 0 3.658px 1.829px 0 rgb(255 255 255 / 0.8), 0 0.915px 2.744px 0 rgb(0 0 0 / 0.2)",
      },
      transitionTimingFunction: {
        "out-soft": "cubic-bezier(0.22, 1, 0.36, 1)",
      },
      keyframes: {
        "marquee-rtl": {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(50%)" },
        },
      },
      animation: {
        "marquee-rtl": "marquee-rtl 60s linear infinite",
      },
    },
  },
};

export default config;
