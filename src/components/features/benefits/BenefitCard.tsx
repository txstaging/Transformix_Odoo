"use client";

import { motion, type Variants } from "framer-motion";
import type { CSSProperties, PointerEvent } from "react";

import { SvgIcon } from "@/components/ui/SvgIcon";
import { motionTokens } from "@/config/motion";
import type { Benefit } from "@/types/content";

const { duration, ease, revealOffset, viewport, card } = motionTokens;

// The card springs up, then hands off to its icon and copy.
const cardVariants: Variants = {
  hidden: { opacity: 0, y: card.rise, scale: card.scale },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      ...card.spring,
      delay,
      opacity: { duration: duration.reveal, ease: ease.out, delay },
      delayChildren: delay + card.contentDelay,
      staggerChildren: card.columnStagger,
    },
  }),
};

const iconVariants: Variants = {
  hidden: { opacity: 0, scale: 0.4, rotate: -45 },
  visible: { opacity: 1, scale: 1, rotate: 0, transition: card.iconSpring },
};

const copyVariants: Variants = {
  hidden: { opacity: 0, y: revealOffset / 2 },
  visible: { opacity: 1, y: 0, transition: { duration: duration.reveal, ease: ease.out } },
};

const spotlightFill: CSSProperties = {
  backgroundImage:
    "radial-gradient(260px circle at var(--spot-x) var(--spot-y), color-mix(in srgb, var(--tfx-secondary) 12%, transparent), transparent 70%)",
};

const spotlightRim: CSSProperties = {
  backgroundImage: "radial-gradient(240px circle at var(--spot-x) var(--spot-y), var(--tfx-secondary), transparent 70%)",
  // Cut the content box out of the border box so only the 1px ring is painted.
  mask: "linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0)",
  maskComposite: "exclude",
};

/** Feeds the pointer position to the spotlight layers as CSS variables. */
function trackPointer(event: PointerEvent<HTMLElement>) {
  const target = event.currentTarget;
  const rect = target.getBoundingClientRect();
  target.style.setProperty("--spot-x", `${event.clientX - rect.left}px`);
  target.style.setProperty("--spot-y", `${event.clientY - rect.top}px`);
}

interface BenefitCardProps {
  benefit: Benefit;
  /** Entrance delay (s), used to stagger cards that share a row. */
  delay?: number;
}

export function BenefitCard({ benefit, delay = 0 }: BenefitCardProps) {
  return (
    <motion.article
      className="group relative flex h-full flex-col items-start gap-6 rounded-4xl border border-blue-light bg-surface p-6 shadow-card transition-[translate,box-shadow,border-color] duration-300 ease-out [--spot-x:50%] [--spot-y:0%] hover:-translate-y-1 hover:border-blue-light-hover hover:shadow-card-hover sm:p-8 lg:min-h-[334px] lg:p-10"
      initial="hidden"
      whileInView="visible"
      viewport={viewport}
      variants={cardVariants}
      custom={delay}
      onPointerMove={trackPointer}
    >
      <span
        aria-hidden
        className="pointer-events-none absolute inset-0 rounded-[inherit] opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={spotlightFill}
      />
      <span
        aria-hidden
        className="pointer-events-none absolute -inset-px rounded-[inherit] p-px opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={spotlightRim}
      />

      <motion.span
        variants={iconVariants}
        className="relative flex size-14 items-center justify-center rounded-2xl bg-secondary/10 transition-[background-color,scale,rotate] duration-300 ease-out group-hover:scale-110 group-hover:-rotate-6 group-hover:bg-secondary/20"
      >
        <SvgIcon icon={benefit.icon} />
      </motion.span>
      <div className="relative flex flex-col gap-3">
        <motion.h3 variants={copyVariants} className="text-xl leading-auto font-bold text-primary lg:text-heading">
          {benefit.title}
        </motion.h3>
        <motion.p variants={copyVariants} className="text-body text-ink-muted lg:text-body-lg">
          {benefit.description}
        </motion.p>
      </div>
    </motion.article>
  );
}
