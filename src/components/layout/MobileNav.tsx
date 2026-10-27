"use client";

import { AnimatePresence, motion, type Variants } from "framer-motion";
import { X } from "lucide-react";
import Image from "next/image";
import { useEffect, useRef } from "react";

import { NavLink } from "@/components/layout/NavLink";
import { Button } from "@/components/ui/Button";
import { motionTokens } from "@/config/motion";
import { siteConfig } from "@/config/site";
import { trapFocus } from "@/lib/focus-trap";
import type { CallToAction, NavItem } from "@/types/content";

export interface CloseMenuOptions {
  restoreFocus?: boolean;
}

interface MobileNavProps {
  id: string;
  isOpen: boolean;
  onClose: (options?: CloseMenuOptions) => void;
  items: readonly NavItem[];
  cta: CallToAction;
  isActive: (href: string) => boolean;
}

const DESKTOP_QUERY = "(min-width: 1024px)";
// The drawer enters from the inline-start edge (right in RTL).
const offscreenX = siteConfig.dir === "rtl" ? "100%" : "-100%";

const transition = { duration: motionTokens.duration.base, ease: motionTokens.ease.out };

const backdropVariants: Variants = { closed: { opacity: 0 }, open: { opacity: 1 } };
const panelVariants: Variants = { closed: { x: offscreenX }, open: { x: 0 } };
const listVariants: Variants = {
  closed: {},
  open: { transition: { staggerChildren: 0.05, delayChildren: 0.1 } },
};
const itemVariants: Variants = {
  closed: { opacity: 0, x: siteConfig.dir === "rtl" ? 16 : -16 },
  open: { opacity: 1, x: 0, transition },
};

export function MobileNav({ id, isOpen, onClose, items, cta, isActive }: MobileNavProps) {
  const panelRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!isOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeButtonRef.current?.focus();

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose({ restoreFocus: true });
      else trapFocus(event, panelRef.current);
    };
    const desktop = window.matchMedia(DESKTOP_QUERY);
    const handleViewportChange = (event: MediaQueryListEvent) => {
      if (event.matches) onClose();
    };

    document.addEventListener("keydown", handleKeyDown);
    desktop.addEventListener("change", handleViewportChange);
    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", handleKeyDown);
      desktop.removeEventListener("change", handleViewportChange);
    };
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div key="mobile-nav" className="fixed inset-0 z-50 lg:hidden" initial="closed" animate="open" exit="closed">
          <motion.div
            aria-hidden
            className="absolute inset-0 bg-navy/40 backdrop-blur-[2px]"
            variants={backdropVariants}
            transition={transition}
            onClick={() => onClose({ restoreFocus: true })}
          />

          <motion.div
            ref={panelRef}
            id={id}
            role="dialog"
            aria-modal="true"
            aria-label="القائمة الرئيسية"
            className="absolute inset-y-0 start-0 flex w-[min(320px,85vw)] flex-col gap-8 bg-surface p-6 shadow-2xl"
            variants={panelVariants}
            transition={transition}
          >
            <div className="flex items-center justify-between">
              <Image
                src={siteConfig.logo.src}
                alt={siteConfig.logo.alt}
                width={siteConfig.logo.width}
                height={siteConfig.logo.height}
                sizes="120px"
                className="h-10 w-[120px] object-cover"
              />
              <button
                ref={closeButtonRef}
                type="button"
                aria-label="إغلاق القائمة"
                onClick={() => onClose({ restoreFocus: true })}
                className="flex size-11 items-center justify-center rounded-full text-primary transition-colors duration-200 ease-out hover:bg-blue-light focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-secondary active:bg-blue-light-active"
              >
                <X aria-hidden className="size-6" />
              </button>
            </div>

            <nav aria-label="روابط الموقع">
              <motion.ul className="flex flex-col gap-1" variants={listVariants}>
                {items.map((item) => (
                  <motion.li key={item.href} variants={itemVariants}>
                    <NavLink
                      item={item}
                      isActive={isActive(item.href)}
                      onNavigate={() => onClose()}
                      className="block rounded-xl px-4 py-3 hover:bg-blue-light"
                    />
                  </motion.li>
                ))}
              </motion.ul>
            </nav>

            <Button href={cta.href} withArrow onClick={() => onClose()} className="mt-auto self-stretch">
              {cta.label}
            </Button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
