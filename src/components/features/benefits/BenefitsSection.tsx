import { BenefitCard } from "@/components/features/benefits/BenefitCard";
import { Container } from "@/components/ui/Container";
import { Reveal, RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import type { BenefitsContent } from "@/types/content";

interface BenefitsSectionProps {
  content: BenefitsContent;
}

export function BenefitsSection({ content }: BenefitsSectionProps) {
  return (
    <section id="benefits" aria-labelledby="benefits-title">
      <Container size="wide" className="flex flex-col items-center gap-10 lg:gap-[53px]">
        <Reveal className="max-w-[900px] pb-[3px]">
          <SectionHeading id="benefits-title" intro={content.intro} />
        </Reveal>

        <RevealGroup
          as="ul"
          className="grid w-full grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-x-11 lg:gap-y-[23px]"
        >
          {content.items.map((benefit) => (
            <RevealItem as="li" key={benefit.id}>
              <BenefitCard benefit={benefit} />
            </RevealItem>
          ))}
        </RevealGroup>
      </Container>
    </section>
  );
}
