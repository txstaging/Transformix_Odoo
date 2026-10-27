import { Fragment } from "react";

import { cn } from "@/lib/cn";
import type { DesignLines as DesignLinesType, SectionIntro } from "@/types/content";

/** Renders design line breaks on desktop while letting text reflow on small screens. */
export function DesignLines({ lines }: { lines: DesignLinesType }) {
  return lines.map((line, index) => (
    <Fragment key={line}>
      <span className="lg:block">{line}</span>
      {index < lines.length - 1 && " "}
    </Fragment>
  ));
}

interface SectionHeadingProps {
  id?: string;
  intro: SectionIntro;
  /** `lead` = Tajawal 24px, `body` = Noto Kufi 18px. */
  descriptionTone?: "lead" | "body";
  className?: string;
}

export function SectionHeading({ id, intro, descriptionTone = "lead", className }: SectionHeadingProps) {
  return (
    <div className={cn("flex flex-col items-center gap-6 text-center", className)}>
      <h2 id={id} className="text-2xl leading-auto font-bold text-primary sm:text-[32px] lg:text-display">
        <DesignLines lines={intro.titleLines} />
      </h2>
      {intro.descriptionLines && (
        <p
          className={cn(
            "text-ink-muted",
            descriptionTone === "lead"
              ? "max-w-[918px] font-tajawal text-lg sm:text-xl lg:text-lead"
              : "max-w-[621px] text-body lg:text-body-lg",
          )}
        >
          <DesignLines lines={intro.descriptionLines} />
        </p>
      )}
    </div>
  );
}
