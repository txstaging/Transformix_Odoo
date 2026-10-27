import { MediaFrame } from "@/components/ui/MediaFrame";
import type { ClientLogo } from "@/types/content";

interface ClientsMarqueeProps {
  logos: readonly ClientLogo[];
}

// Each half of the track must be wider than the widest supported viewport.
const SETS_PER_HALF = 2;

/**
 * Infinite logo strip. The track holds two identical halves and slides by
 * exactly one half (see `marquee-rtl` in tailwind.config.ts), so it loops seamlessly.
 */
export function ClientsMarquee({ logos }: ClientsMarqueeProps) {
  const half = Array.from({ length: SETS_PER_HALF }, () => logos).flat();

  return (
    <section id="clients" aria-labelledby="clients-title" className="relative bg-surface">
      <h2 id="clients-title" className="sr-only">
        عملاؤنا
      </h2>
      <div className="group flex h-[108px] items-center overflow-hidden">
        <div className="flex w-max animate-marquee-rtl group-hover:[animation-play-state:paused] motion-reduce:animate-none">
          {[0, 1].map((copy) => (
            <ul key={copy} aria-hidden={copy > 0 ? true : undefined} className="flex shrink-0">
              {half.map((logo, index) => (
                <li
                  key={`${logo.id}-${index}`}
                  aria-hidden={index >= logos.length ? true : undefined}
                  className="flex h-[104px] min-w-[220px] shrink-0 items-center justify-center px-6 sm:min-w-[288px]"
                >
                  <MediaFrame media={logo} />
                </li>
              ))}
            </ul>
          ))}
        </div>
      </div>
    </section>
  );
}
