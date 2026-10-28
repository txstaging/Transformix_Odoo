import { BenefitsGrid } from "@/components/features/benefits/BenefitsGrid";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import type { BenefitsContent } from "@/types/content";

interface BenefitsSectionProps {
  content: BenefitsContent;
}

export function BenefitsSection({ content }: BenefitsSectionProps) {
  return (
    <section id="benefits" aria-labelledby="benefits-title">
      <Container size="wide" className="flex flex-col items-center gap-10 lg:gap-[53px]">
        <div className="max-w-[900px] pb-[3px]">
          <SectionHeading id="benefits-title" intro={content.intro} animateTitle />
        </div>

        <BenefitsGrid items={content.items} />
      </Container>
    </section>
  );
}
