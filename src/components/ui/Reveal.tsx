"use client";

import { motion, type Variants } from "framer-motion";
import { Fragment, type ReactNode } from "react";

import { motionTokens } from "@/config/motion";
import type { DesignLines } from "@/types/content";

const { duration, ease, stagger, revealOffset, viewport } = motionTokens;

const itemVariants: Variants = {
  hidden: { opacity: 0, y: revealOffset },
  visible: (delay: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: duration.reveal, ease: ease.out, delay },
  }),
};

const groupVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: stagger } },
};

// Delays are explicit (not staggerChildren) so words nested in the marker keep their order.
const wordVariants: Variants = {
  hidden: { opacity: 0, y: "0.35em", filter: "blur(8px)" },
  visible: (index: number) => ({
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: duration.word, ease: ease.out, delay: index * stagger },
  }),
};

const markerVariants: Variants = {
  hidden: { backgroundSize: "0% 0.32em" },
  visible: (delay: number) => ({
    backgroundSize: "100% 0.32em",
    transition: { duration: duration.marker, ease: ease.out, delay },
  }),
};

interface RevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

/** Fades and lifts its content in when scrolled into view. */
export function Reveal({ children, className, delay = 0 }: RevealProps) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={viewport}
      variants={itemVariants}
      custom={delay}
    >
      {children}
    </motion.div>
  );
}

interface RevealGroupProps {
  children: ReactNode;
  className?: string;
  as?: "div" | "ul" | "ol";
}

/** Staggers the entrance of its `RevealItem` descendants. */
export function RevealGroup({ children, className, as = "div" }: RevealGroupProps) {
  const props = {
    className,
    initial: "hidden",
    whileInView: "visible",
    viewport,
    variants: groupVariants,
  } as const;

  if (as === "ul") return <motion.ul {...props}>{children}</motion.ul>;
  if (as === "ol") return <motion.ol {...props}>{children}</motion.ol>;
  return <motion.div {...props}>{children}</motion.div>;
}

interface RevealItemProps {
  children: ReactNode;
  className?: string;
  as?: "div" | "li";
}

interface RevealWordsProps {
  lines: DesignLines;
  /** Sweeps a highlighter stroke under the closing line once its words are in. */
  markLastLine?: boolean;
}

/**
 * Brings a heading in word by word, each word rising out of a blur, keeping the
 * design line breaks of `DesignLines`. Splits on spaces only: Arabic letters
 * join, so per-character spans would break the shaping.
 */
export function RevealWords({ lines, markLastLine = false }: RevealWordsProps) {
  const lineWords = lines.map((line) => line.split(" "));
  const markerDelay = lineWords.flat().length * stagger;

  return (
    <motion.span className="block" initial="hidden" whileInView="visible" viewport={viewport}>
      {lineWords.map((words, lineIndex) => {
        const firstWordIndex = lineWords.slice(0, lineIndex).flat().length;
        const content = words.map((word, index) => (
          <Fragment key={index}>
            <motion.span className="inline-block" variants={wordVariants} custom={firstWordIndex + index}>
              {word}
            </motion.span>
            {index < words.length - 1 && " "}
          </Fragment>
        ));
        const isMarked = markLastLine && lineIndex === lineWords.length - 1;

        return (
          <Fragment key={lineIndex}>
            <span className="lg:block">
              {isMarked ? (
                // Anchored right so the stroke grows from the RTL start edge.
                <motion.span
                  className="bg-linear-to-l from-secondary/35 to-glow/45 bg-no-repeat"
                  style={{ backgroundPosition: "right 0 bottom 0.3em" }}
                  variants={markerVariants}
                  custom={markerDelay}
                >
                  {content}
                </motion.span>
              ) : (
                content
              )}
            </span>
            {lineIndex < lineWords.length - 1 && " "}
          </Fragment>
        );
      })}
    </motion.span>
  );
}

export function RevealItem({ children, className, as = "div" }: RevealItemProps) {
  if (as === "li") {
    return (
      <motion.li className={className} variants={itemVariants}>
        {children}
      </motion.li>
    );
  }
  return (
    <motion.div className={className} variants={itemVariants}>
      {children}
    </motion.div>
  );
}
