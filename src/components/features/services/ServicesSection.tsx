import { ServiceShowcase } from "@/components/features/services/ServiceShowcase";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import type { ServiceOffering } from "@/types/content";

interface ServicesSectionProps {
  services: readonly ServiceOffering[];
}

export function ServicesSection({ services }: ServicesSectionProps) {
  return (
    <section id="services" aria-labelledby="services-title">
      <h2 id="services-title" className="sr-only">
        خدماتنا
      </h2>
      <Container className="flex flex-col gap-16 lg:gap-section">
        {services.map((service) => (
          <Reveal key={service.id}>
            <ServiceShowcase service={service} />
          </Reveal>
        ))}
      </Container>
    </section>
  );
}
