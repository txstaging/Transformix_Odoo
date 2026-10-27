import type { ReactNode } from "react";

import { cn } from "@/lib/cn";

interface BadgeProps {
  children: ReactNode;
  className?: string;
}

/** Pill label led by a status dot (inline-start side). */
export function Badge({ children, className }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-3 rounded-full bg-blue-light px-6 py-2 text-body text-primary shadow-card",
        className,
      )}
    >
      <span aria-hidden className="size-2 shrink-0 rounded-full bg-primary" />
      {children}
    </span>
  );
}
