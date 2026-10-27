import { FaqAccordion } from "@/components/features/faq/FaqAccordion";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import type { FaqContent } from "@/types/content";

interface FaqSectionProps {
  content: FaqContent;
}

export function FaqSection({ content }: FaqSectionProps) {
  return (
    <section id="faq" aria-labelledby="faq-title">
      <Container size="faq" className="flex flex-col items-center gap-10 lg:gap-[60px]">
        <Reveal>
          <SectionHeading id="faq-title" intro={content.intro} descriptionTone="body" />
        </Reveal>
        <Reveal className="w-full">
          <FaqAccordion items={content.items} defaultOpenId={content.defaultOpenId} />
        </Reveal>
      </Container>
    </section>
  );
}
