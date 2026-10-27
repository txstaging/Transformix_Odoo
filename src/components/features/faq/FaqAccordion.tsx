"use client";

import { useState } from "react";

import { FaqItem } from "@/components/features/faq/FaqItem";
import type { FaqEntry } from "@/types/content";

interface FaqAccordionProps {
  items: readonly FaqEntry[];
  defaultOpenId?: string;
}

/** Single-expand accordion: opening one answer closes the previous one. */
export function FaqAccordion({ items, defaultOpenId }: FaqAccordionProps) {
  const [openId, setOpenId] = useState<string | null>(defaultOpenId ?? null);

  return (
    <ul className="flex w-full flex-col gap-4">
      {items.map((entry) => (
        <li key={entry.id}>
          <FaqItem
            entry={entry}
            isOpen={openId === entry.id}
            onToggle={() => setOpenId((current) => (current === entry.id ? null : entry.id))}
          />
        </li>
      ))}
    </ul>
  );
}
