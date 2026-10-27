import { BenefitsSection } from "@/components/features/benefits/BenefitsSection";
import { ClientsMarquee } from "@/components/features/clients/ClientsMarquee";
import { FaqSection } from "@/components/features/faq/FaqSection";
import { HeroSection } from "@/components/features/hero/HeroSection";
import { JourneySection } from "@/components/features/journey/JourneySection";
import { ServicesSection } from "@/components/features/services/ServicesSection";
import { homeContent } from "@/config/home-content";

export default function HomePage() {
  return (
    <main
      id="main"
      tabIndex={-1}
      className="flex flex-col gap-16 pt-8 pb-16 outline-none sm:gap-20 lg:gap-section lg:pt-[101px] lg:pb-section"
    >
      <HeroSection content={homeContent.hero} />
      <ClientsMarquee logos={homeContent.clients} />
      <BenefitsSection content={homeContent.benefits} />
      <ServicesSection services={homeContent.services} />
      <JourneySection content={homeContent.journey} />
      <FaqSection content={homeContent.faq} />
    </main>
  );
}
