import { AnimatePresence, motion } from "framer-motion";
import { useId } from "react";

import { SvgIcon } from "@/components/ui/SvgIcon";
import { motionTokens } from "@/config/motion";
import { cn } from "@/lib/cn";
import type { FaqEntry, IconAsset } from "@/types/content";

const toggleIcons = {
  open: { src: "/icons/faq/chevron-down.svg", width: 16, height: 16 },
  closed: { src: "/icons/faq/plus.svg", width: 14, height: 16 },
} as const satisfies Record<string, IconAsset>;

interface FaqItemProps {
  entry: FaqEntry;
  isOpen: boolean;
  onToggle: () => void;
}

export function FaqItem({ entry, isOpen, onToggle }: FaqItemProps) {
  const baseId = useId();
  const triggerId = `${baseId}-trigger`;
  const panelId = `${baseId}-panel`;
  const transition = { duration: motionTokens.duration.base, ease: motionTokens.ease.out };

  return (
    <div
      className={cn(
        "rounded-3xl border bg-surface transition-[border-color,box-shadow] duration-300 ease-out",
        isOpen ? "border-blue-light-hover shadow-card" : "border-blue-light hover:border-blue-light-hover",
      )}
    >
      <h3>
        <button
          id={triggerId}
          type="button"
          aria-expanded={isOpen}
          aria-controls={panelId}
          onClick={onToggle}
          className={cn(
            "flex w-full items-center justify-between gap-4 rounded-3xl px-6 pt-6 text-start text-body text-ink sm:px-8 sm:pt-8 sm:text-body-lg",
            "transition-[padding,color] duration-300 ease-out hover:text-primary",
            "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-secondary",
            // Collapse the bottom padding to the design's 15.4px question→answer gap while open.
            isOpen ? "pb-3 sm:pb-[15.4px]" : "pb-6 sm:pb-8",
          )}
        >
          <span>{entry.question}</span>
          <span aria-hidden className="flex size-4 shrink-0 items-center justify-center">
            <AnimatePresence initial={false} mode="wait">
              <motion.span
                key={isOpen ? "open" : "closed"}
                className="flex"
                initial={{ opacity: 0, rotate: -90 }}
                animate={{ opacity: 1, rotate: 0 }}
                exit={{ opacity: 0, rotate: 90 }}
                transition={{ duration: motionTokens.duration.fast, ease: motionTokens.ease.out }}
              >
                <SvgIcon icon={isOpen ? toggleIcons.open : toggleIcons.closed} />
              </motion.span>
            </AnimatePresence>
          </span>
        </button>
      </h3>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key="panel"
            id={panelId}
            role="region"
            aria-labelledby={triggerId}
            className="overflow-hidden"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={transition}
          >
            <p className="px-6 pb-6 text-small text-ink-muted sm:px-8 sm:pb-8 sm:text-body">{entry.answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
