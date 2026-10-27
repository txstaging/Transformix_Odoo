import { SvgIcon } from "@/components/ui/SvgIcon";
import type { Benefit } from "@/types/content";

interface BenefitCardProps {
  benefit: Benefit;
}

export function BenefitCard({ benefit }: BenefitCardProps) {
  return (
    <article className="group flex h-full flex-col items-start gap-6 rounded-4xl border border-blue-light bg-surface p-6 shadow-card transition-[transform,box-shadow,border-color] duration-300 ease-out hover:-translate-y-1 hover:border-blue-light-hover hover:shadow-card-hover sm:p-8 lg:min-h-[334px] lg:p-10">
      <span className="flex size-14 items-center justify-center rounded-2xl bg-secondary/10 transition-colors duration-300 ease-out group-hover:bg-secondary/20">
        <SvgIcon icon={benefit.icon} />
      </span>
      <div className="flex flex-col gap-3">
        <h3 className="text-xl leading-auto font-bold text-primary lg:text-heading">{benefit.title}</h3>
        <p className="text-body text-ink-muted lg:text-body-lg">{benefit.description}</p>
      </div>
    </article>
  );
}
