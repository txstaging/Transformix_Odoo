"use client";

import { motion, useScroll, useTransform, type HTMLMotionProps } from "framer-motion";
import { useRef } from "react";

import { motionTokens } from "@/config/motion";
import { cn } from "@/lib/cn";

const { rotate, scale, perspective, pageRange } = motionTokens.scrollTilt;

/**
 * `view`: settles as the element travels from the bottom of the viewport to its centre.
 * `page`: for media already on screen at load; settles over the first stretch of page scroll.
 */
export type ScrollTiltTrigger = "view" | "page";

interface ScrollTiltProps extends Omit<HTMLMotionProps<"div">, "ref"> {
  trigger?: ScrollTiltTrigger;
}

/**
 * Scroll-linked 3D tilt adapted from Aceternity's ContainerScroll: the element
 * starts leaning back and slightly enlarged, then settles flat as the page scrolls.
 */
export function ScrollTilt({ trigger = "view", className, style, ...props }: ScrollTiltProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollY, scrollYProgress } = useScroll(
    trigger === "view" ? { target: ref, offset: ["start end", "center center"] } : undefined,
  );
  const pageProgress = useTransform(scrollY, [0, pageRange], [0, 1]);
  const progress = trigger === "page" ? pageProgress : scrollYProgress;

  const rotateX = useTransform(progress, [0, 1], [rotate, 0]);
  const tiltScale = useTransform(progress, [0, 1], [scale, 1]);

  return (
    <motion.div
      ref={ref}
      // Scroll-bound values bypass MotionConfig's reducedMotion, so flatten in CSS;
      // the important flag beats the inline transform.
      className={cn("motion-reduce:transform-none!", className)}
      style={{ ...style, rotateX, scale: tiltScale, transformPerspective: perspective }}
      {...props}
    />
  );
}
