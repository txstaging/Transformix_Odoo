import Image from "next/image";

import { ScrollTilt, type ScrollTiltTrigger } from "@/components/ui/ScrollTilt";
import { cn } from "@/lib/cn";
import type { FramedImage } from "@/types/content";

interface MediaFrameProps {
  media: FramedImage;
  /** Responsive `sizes` hint; defaults to the rendered width at design size. */
  sizes?: string;
  preload?: boolean;
  /** Scroll-linked 3D tilt for showcase media; omit for a static frame. */
  tilt?: ScrollTiltTrigger;
  className?: string;
}

/**
 * Fluid frame that keeps the Figma aspect ratio and reproduces its image-fill
 * crop, so the visible region of the picture matches the design at any width.
 */
export function MediaFrame({ media, sizes, preload = false, tilt, className }: MediaFrameProps) {
  const { image, frameWidth, frameHeight, crop } = media;
  const renderedWidth = Math.ceil(frameWidth * ((crop?.width ?? 100) / 100));

  const frameProps = {
    className: cn("relative w-full overflow-hidden", className),
    style: { aspectRatio: `${frameWidth} / ${frameHeight}`, maxWidth: frameWidth },
  };

  const picture = (
    <Image
      src={image.src}
      alt={image.alt}
      width={image.width}
      height={image.height}
      sizes={sizes ?? `${renderedWidth}px`}
      preload={preload}
      className={cn("absolute max-w-none", !crop && "inset-0 size-full object-cover")}
      style={
        crop
          ? {
              left: `${crop.left}%`,
              top: `${crop.top}%`,
              width: `${crop.width}%`,
              height: `${crop.height}%`,
            }
          : undefined
      }
    />
  );

  return tilt ? (
    <ScrollTilt trigger={tilt} {...frameProps}>
      {picture}
    </ScrollTilt>
  ) : (
    <div {...frameProps}>{picture}</div>
  );
}
