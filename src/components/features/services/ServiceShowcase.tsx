import { Button } from "@/components/ui/Button";
import { MediaFrame } from "@/components/ui/MediaFrame";
import { cn } from "@/lib/cn";
import type { ServiceOffering } from "@/types/content";

interface ServiceShowcaseProps {
  service: ServiceOffering;
}

export function ServiceShowcase({ service }: ServiceShowcaseProps) {
  const { id, title, description, cta, media, mediaPlacement } = service;
  const titleId = `service-${id}-title`;

  return (
    <article
      aria-labelledby={titleId}
      className="flex flex-col justify-center overflow-hidden rounded-3xl border border-blue-light-hover bg-surface-card px-5 py-8 shadow-panel sm:px-10 sm:py-12 lg:min-h-[500px] lg:px-[76px] lg:py-[78px]"
    >
      <div
        className={cn(
          "flex flex-col items-center gap-10 lg:justify-between lg:gap-12",
          mediaPlacement === "end" ? "lg:flex-row" : "lg:flex-row-reverse",
        )}
      >
        <div className="flex w-full flex-col items-start gap-6 lg:max-w-[509px]">
          <h3 id={titleId} className="text-2xl leading-auto font-bold text-ink sm:text-[28px] lg:text-title">
            {title}
          </h3>
          <p className="font-tajawal text-xl leading-[1.6] text-ink-muted sm:text-2xl lg:text-title lg:leading-[1.6]">
            {description}
          </p>
          <Button href={cta.href} withArrow>
            {cta.label}
          </Button>
        </div>

        <MediaFrame
          media={media}
          sizes="(min-width: 1024px) 591px, 112vw"
          className={cn("lg:w-[45%] lg:shrink-0", media.rounded && "rounded-media-lg")}
        />
      </div>
    </article>
  );
}
