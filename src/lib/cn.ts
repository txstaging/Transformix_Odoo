import { clsx, type ClassValue } from "clsx";
import { extendTailwindMerge } from "tailwind-merge";

// Teach tailwind-merge the custom tokens from tailwind.config.ts so that,
// e.g., `text-display` is treated as a font size rather than a text color.
const twMerge = extendTailwindMerge({
  extend: {
    theme: {
      text: ["caption", "small", "body", "body-lg", "lead", "heading", "title", "display"],
      shadow: ["card", "card-hover", "panel", "glossy"],
      radius: ["media", "media-lg"],
    },
  },
});

export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs));
}
