const FOCUSABLE_SELECTOR = [
  "a[href]",
  "button:not([disabled])",
  "input:not([disabled])",
  "select:not([disabled])",
  "textarea:not([disabled])",
  '[tabindex]:not([tabindex="-1"])',
].join(",");

/** Keeps Tab / Shift+Tab cycling inside `container` (e.g. a modal drawer). */
export function trapFocus(event: KeyboardEvent, container: HTMLElement | null): void {
  if (event.key !== "Tab" || !container) return;

  const focusable = Array.from(container.querySelectorAll<HTMLElement>(FOCUSABLE_SELECTOR));
  const first = focusable[0];
  const last = focusable[focusable.length - 1];
  if (!first || !last) return;

  const active = document.activeElement;
  const isOutside = !container.contains(active);

  if (event.shiftKey && (active === first || isOutside)) {
    event.preventDefault();
    last.focus();
  } else if (!event.shiftKey && (active === last || isOutside)) {
    event.preventDefault();
    first.focus();
  }
}
