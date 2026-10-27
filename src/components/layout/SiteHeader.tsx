"use client";

import { useMotionValueEvent, useScroll } from "framer-motion";
import { Menu } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCallback, useRef, useState } from "react";

import { MobileNav, type CloseMenuOptions } from "@/components/layout/MobileNav";
import { NavLink } from "@/components/layout/NavLink";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/cn";

const MOBILE_NAV_ID = "mobile-nav";
const SCROLL_THRESHOLD = 8;

export function SiteHeader() {
  const pathname = usePathname();
  const { scrollY } = useScroll();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);

  useMotionValueEvent(scrollY, "change", (latest) => setIsScrolled(latest > SCROLL_THRESHOLD));

  const isActive = useCallback((href: string) => href === pathname, [pathname]);

  const closeMenu = useCallback((options?: CloseMenuOptions) => {
    setIsMenuOpen(false);
    if (options?.restoreFocus) menuButtonRef.current?.focus();
  }, []);

  const { logo, mainNav, headerCta } = siteConfig;

  // The drawer is rendered as a sibling of <header>: the header's backdrop-filter
  // would otherwise become the containing block of the drawer's fixed overlay.
  return (
    <>
      <header
        className={cn(
          "sticky top-0 z-40 bg-surface/90 backdrop-blur-md transition-shadow duration-300 ease-out",
          isScrolled && "shadow-[0_1px_0_0_var(--tfx-blue-light),0_8px_24px_-16px_rgb(10_24_54/0.25)]",
        )}
      >
        <Container className="flex h-header items-center justify-between gap-6 lg:grid lg:grid-cols-[1fr_auto_1fr]">
          <Link
            href="/"
            className="justify-self-start rounded-md focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-secondary"
          >
            <Image
              src={logo.src}
              alt={logo.alt}
              width={logo.width}
              height={logo.height}
              preload
              sizes="190px"
              className="h-[47px] w-[140px] object-cover lg:h-16 lg:w-[190px]"
            />
          </Link>

          <nav aria-label="القائمة الرئيسية" className="hidden lg:block">
            <ul className="flex items-center gap-6">
              {mainNav.map((item) => (
                <li key={item.href}>
                  <NavLink item={item} isActive={isActive(item.href)} className="px-4 py-5" />
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex items-center gap-3 justify-self-end">
            <Button href={headerCta.href} variant="glossy" className="hidden sm:inline-flex">
              {headerCta.label}
            </Button>
            <button
              ref={menuButtonRef}
              type="button"
              aria-label="فتح القائمة"
              aria-expanded={isMenuOpen}
              aria-controls={MOBILE_NAV_ID}
              onClick={() => setIsMenuOpen(true)}
              className="flex size-11 items-center justify-center rounded-full text-primary transition-colors duration-200 ease-out hover:bg-blue-light focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-secondary active:bg-blue-light-active lg:hidden"
            >
              <Menu aria-hidden className="size-6" />
            </button>
          </div>
        </Container>
      </header>

      <MobileNav
        id={MOBILE_NAV_ID}
        isOpen={isMenuOpen}
        onClose={closeMenu}
        items={mainNav}
        cta={headerCta}
        isActive={isActive}
      />
    </>
  );
}
