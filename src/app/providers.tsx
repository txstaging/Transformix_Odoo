"use client";

import { MotionConfig } from "framer-motion";
import type { ReactNode } from "react";

/** App-wide client providers. Honors the OS "reduce motion" preference. */
export function Providers({ children }: { children: ReactNode }) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}
