import Image, { type ImageProps } from "next/image";

import { cn } from "@/lib/cn";
import type { IconAsset } from "@/types/content";

interface SvgIconProps extends Omit<ImageProps, "src" | "width" | "height" | "alt"> {
  icon: IconAsset;
  /** Leave empty for decorative icons; they are then hidden from assistive tech. */
  alt?: string;
}

/** Renders a design-exported SVG at its native size. */
export function SvgIcon({ icon, alt = "", className, ...rest }: SvgIconProps) {
  return (
    <Image
      src={icon.src}
      width={icon.width}
      height={icon.height}
      alt={alt}
      aria-hidden={alt === "" ? true : undefined}
      unoptimized
      className={cn("shrink-0", className)}
      {...rest}
    />
  );
}
