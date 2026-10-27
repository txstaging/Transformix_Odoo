import Image from "next/image";
import Link from "next/link";

import { Container } from "@/components/ui/Container";
import { SvgIcon } from "@/components/ui/SvgIcon";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/cn";
import type { ContactChannel, FooterLinkGroup, IconAsset } from "@/types/content";

const divider: IconAsset = { src: "/icons/ui/footer-divider.svg", width: 909, height: 0.5 };

const focusRing = "rounded-sm focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-secondary";

function FooterHeading({ children }: { children: string }) {
  return <h2 className="text-body-lg leading-[26px] font-medium text-ink-inverse">{children}</h2>;
}

function FooterLinkColumn({ group }: { group: FooterLinkGroup }) {
  return (
    <div className="flex flex-col items-start gap-4">
      <FooterHeading>{group.title}</FooterHeading>
      <ul className="flex flex-col items-start gap-2">
        {group.links.map((link) => (
          <li key={link.label}>
            <Link
              href={link.href}
              className={cn(
                "text-body text-yellow-light underline-offset-4 transition-colors duration-200 ease-out hover:text-ink-inverse hover:underline",
                focusRing,
              )}
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

function ContactLine({ channel }: { channel: ContactChannel }) {
  const isLatin = channel.kind === "email" || channel.kind === "phone";

  return (
    <li className="flex items-start gap-4">
      <SvgIcon icon={channel.icon} />
      {channel.href ? (
        <a
          href={channel.href}
          dir={isLatin ? "ltr" : undefined}
          className={cn(
            "text-small text-ink-inverse transition-colors duration-200 ease-out hover:text-secondary",
            channel.kind === "email" && "underline",
            focusRing,
          )}
        >
          {channel.label}
        </a>
      ) : (
        <span className="text-small text-yellow-light">{channel.label}</span>
      )}
    </li>
  );
}

export function SiteFooter() {
  const { footer } = siteConfig;

  return (
    <footer id="contact" className="bg-navy text-ink-inverse">
      <Container className="flex flex-col gap-12 pt-10 pb-[27px] lg:flex-row lg:items-start lg:gap-12 xl:gap-[100px]">
        <div className="flex shrink-0 flex-col items-start gap-2 lg:w-[208px]">
          <div className="flex flex-col items-start gap-[25px]">
            <Link href="/" className={focusRing}>
              <Image
                src={footer.logo.src}
                alt={footer.logo.alt}
                width={footer.logo.width}
                height={footer.logo.height}
                unoptimized
                className="h-[110.448px] w-[173px]"
              />
            </Link>
            <p className="text-caption leading-[26px] text-ink-inverse">{footer.tagline}</p>
          </div>
          <ul className="flex items-center lg:self-center">
            {footer.socials.map((social) => (
              <li key={social.id}>
                <a
                  href={social.href}
                  aria-label={social.label}
                  className={cn(
                    "block rounded-full transition-[opacity,transform] duration-200 ease-out hover:-translate-y-0.5 hover:opacity-80",
                    focusRing,
                  )}
                >
                  <SvgIcon icon={social.icon} />
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex min-w-0 flex-1 flex-col gap-[35px] lg:max-w-[909px]">
          <div className="grid grid-cols-2 gap-x-6 gap-y-10 md:grid-cols-[123px_123px_115px_240px] xl:gap-x-[79px]">
            {footer.linkGroups.map((group) => (
              <FooterLinkColumn key={group.id} group={group} />
            ))}
            <div className="col-span-2 flex flex-col items-start gap-4 md:col-span-1">
              <FooterHeading>{footer.contact.title}</FooterHeading>
              <ul className="flex flex-col items-start gap-4">
                {footer.contact.channels.map((channel) => (
                  <ContactLine key={channel.id} channel={channel} />
                ))}
              </ul>
            </div>
          </div>

          <div className="flex flex-col items-center gap-[23px]">
            <SvgIcon icon={divider} className="h-[0.5px] w-full" />
            <p className="text-center text-body text-copyright lg:text-body-lg">{footer.copyright}</p>
          </div>
        </div>
      </Container>
    </footer>
  );
}
