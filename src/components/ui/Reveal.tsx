"use client";

import { motion, type Variants } from "framer-motion";
import type { ReactNode } from "react";

import { motionTokens } from "@/config/motion";

const { duration, ease, stagger, revealOffset } = motionTokens;

// Trigger slightly before the element is fully in view; animate only once.
const viewport = { once: true, margin: "0px 0px -80px 0px" } as const;

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
