import { cn } from "@/lib/cn";
import type { JourneyStep } from "@/types/content";

interface JourneyStepItemProps {
  step: JourneyStep;
  /** The final step carries an elevated badge in the design. */
  isHighlighted?: boolean;
}

export function JourneyStepItem({ step, isHighlighted = false }: JourneyStepItemProps) {
  return (
    <div className="group flex items-start gap-5 lg:flex-col lg:items-center lg:gap-6">
      <span
        aria-hidden
        className={cn(
          "flex h-[84px] w-[81px] shrink-0 items-center justify-center rounded-3xl bg-primary text-heading font-bold text-ink-inverse",
          "transition-[transform,box-shadow] duration-300 ease-out group-hover:-translate-y-1 group-hover:shadow-xl",
          isHighlighted ? "shadow-xl" : "border-2 border-blue-light",
        )}
      >
        {step.order}
      </span>
      <div className="flex flex-col gap-[10.875px] pt-4 text-start lg:w-full lg:items-center lg:px-2 lg:pt-0 lg:text-center xl:px-0">
        <h3 className="text-body-lg font-bold text-primary">{step.title}</h3>
        {/* As in Figma, copy may run slightly wider than its column (into the gutter) on desktop. */}
        <p className="text-small text-ink-muted xl:w-[250px] xl:shrink-0">{step.description}</p>
      </div>
    </div>
  );
}
