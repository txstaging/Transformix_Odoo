import Image from "next/image";

import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { MediaFrame } from "@/components/ui/MediaFrame";
import { Reveal } from "@/components/ui/Reveal";
import { DesignLines } from "@/components/ui/SectionHeading";
import type { HeroContent } from "@/types/content";

interface HeroSectionProps {
  content: HeroContent;
}

export function HeroSection({ content }: HeroSectionProps) {
  const { badge, titleLines, description, primaryCta, secondaryCta, media, decoration } = content;

  return (
    <section id="top" aria-labelledby="hero-title" className="relative overflow-x-clip">
      <Container className="relative">
        {/* Circuit pattern bleeds past the content edge, behind the dashboard. */}
        <Image
          src={decoration.src}
          alt=""
          aria-hidden
          width={decoration.width}
          height={decoration.height}
          className="pointer-events-none absolute -end-[100px] top-[75px] hidden h-[617px] w-[299px] max-w-none select-none lg:block"
        />

        <div className="relative flex flex-col items-center gap-10 lg:min-h-[506px] lg:flex-row lg:justify-between lg:gap-12 xl:gap-[85px]">
          <Reveal className="flex w-full flex-col items-start gap-[21px] lg:max-w-[626px] lg:flex-1">
            <div className="flex flex-col items-start gap-[38px]">
              <Badge className="mb-4">{badge}</Badge>
              <div className="flex flex-col gap-[25px]">
                <h1
                  id="hero-title"
                  className="text-3xl leading-auto font-bold text-primary sm:text-4xl lg:text-display"
                >
                  <DesignLines lines={titleLines} />
                </h1>
                <p className="font-tajawal text-lg text-ink-muted sm:text-xl lg:max-w-[601px] lg:text-lead">
                  {description}
                </p>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-4">
              <Button href={primaryCta.href} withArrow>
                {primaryCta.label}
              </Button>
              <Button href={secondaryCta.href} variant="outline">
                {secondaryCta.label}
              </Button>
            </div>
          </Reveal>

          <MediaFrame
            media={media}
            preload
            sizes="(min-width: 1024px) 591px, 112vw"
            className="rounded-media lg:w-[44%] lg:shrink-0"
          />
        </div>
      </Container>
    </section>
  );
}
