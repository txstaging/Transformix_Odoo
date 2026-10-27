import { JourneyStepItem } from "@/components/features/journey/JourneyStepItem";
import { Container } from "@/components/ui/Container";
import { Reveal, RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SvgIcon } from "@/components/ui/SvgIcon";
import type { IconAsset, JourneyContent } from "@/types/content";

const progressLine: IconAsset = { src: "/icons/ui/journey-line.svg", width: 1134.5, height: 17.3205 };

interface JourneySectionProps {
  content: JourneyContent;
}

export function JourneySection({ content }: JourneySectionProps) {
  const lastIndex = content.steps.length - 1;

  return (
    <section id="journey" aria-labelledby="journey-title" className="bg-surface lg:min-h-[650px] lg:py-[100px]">
      <Container className="flex flex-col items-center gap-12 lg:gap-20">
        <Reveal className="max-w-[918px]">
          <SectionHeading id="journey-title" intro={content.intro} />
        </Reveal>

        <div className="relative w-full">
          {/* Desktop progress arrow, running from step 01 towards the final step. */}
          <div
            aria-hidden
            className="pointer-events-none absolute start-[85.5px] end-[21.5px] top-[39.34px] hidden h-[17.32px] lg:block"
          >
            <SvgIcon icon={progressLine} className="block size-full rtl:rotate-180" />
          </div>

          <RevealGroup as="ol" className="flex flex-col gap-8 lg:flex-row lg:items-start lg:gap-4">
            {content.steps.map((step, index) => (
              <RevealItem
                as="li"
                key={step.id}
                className="relative after:absolute after:start-[39.5px] after:top-[96px] after:-bottom-5 after:w-0.5 after:rounded-full after:bg-blue-light-active last:after:hidden lg:min-w-0 lg:flex-1 lg:after:hidden"
              >
                <JourneyStepItem step={step} isHighlighted={index === lastIndex} />
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </Container>
    </section>
  );
}
