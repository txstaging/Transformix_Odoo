import type { HTMLAttributes } from "react";

import { cn } from "@/lib/cn";

export type ContainerSize = "content" | "wide" | "faq";

const sizeClasses: Record<ContainerSize, string> = {
  content: "max-w-content",
  wide: "max-w-wide",
  faq: "max-w-faq",
};

interface ContainerProps extends HTMLAttributes<HTMLDivElement> {
  size?: ContainerSize;
}

/**
 * Centers content at the Figma frame widths. Gutters live on an outer wrapper
 * so the inner box keeps its exact design width on wide viewports.
 */
export function Container({ size = "content", className, children, ...rest }: ContainerProps) {
  return (
    <div className="w-full px-4 sm:px-6 lg:px-8">
      <div className={cn("mx-auto w-full", sizeClasses[size], className)} {...rest}>
        {children}
      </div>
    </div>
  );
}
