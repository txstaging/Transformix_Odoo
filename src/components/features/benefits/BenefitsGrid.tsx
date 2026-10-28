"use client";

import { useSyncExternalStore } from "react";

import { BenefitCard } from "@/components/features/benefits/BenefitCard";
import { motionTokens } from "@/config/motion";
import type { Benefit } from "@/types/content";

// Mirrors the grid's `sm:grid-cols-2 lg:grid-cols-3`, widest first.
const COLUMN_QUERIES = [
  ["(min-width: 1024px)", 3],
  ["(min-width: 640px)", 2],
] as const;

function subscribeToColumns(onChange: () => void) {
  const lists = COLUMN_QUERIES.map(([query]) => window.matchMedia(query));
  lists.forEach((list) => list.addEventListener("change", onChange));
  return () => lists.forEach((list) => list.removeEventListener("change", onChange));
}

function getColumns() {
  return COLUMN_QUERIES.find(([query]) => window.matchMedia(query).matches)?.[1] ?? 1;
}

interface BenefitsGridProps {
  items: readonly Benefit[];
}

/** Each card enters as its row scrolls in; cards in a row follow one another from the RTL start. */
export function BenefitsGrid({ items }: BenefitsGridProps) {
  const columns = useSyncExternalStore(subscribeToColumns, getColumns, () => 1);

  return (
    <ul className="grid w-full grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-x-11 lg:gap-y-[23px]">
      {items.map((benefit, index) => (
        <li key={benefit.id}>
          <BenefitCard benefit={benefit} delay={(index % columns) * motionTokens.card.columnStagger} />
        </li>
      ))}
    </ul>
  );
}
