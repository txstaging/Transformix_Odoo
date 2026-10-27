import Link from "next/link";

import { cn } from "@/lib/cn";
import type { NavItem } from "@/types/content";

interface NavLinkProps {
  item: NavItem;
  isActive: boolean;
  className?: string;
  onNavigate?: () => void;
}

export function NavLink({ item, isActive, className, onNavigate }: NavLinkProps) {
  return (
    <Link
      href={item.href}
      aria-current={isActive ? "page" : undefined}
      onClick={onNavigate}
      className={cn(
        "rounded-md text-body-lg transition-colors duration-200 ease-out hover:text-primary",
        "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-secondary",
        isActive ? "text-primary underline decoration-[1.35px] underline-offset-[6px]" : "text-ink",
        className,
      )}
    >
      {item.label}
    </Link>
  );
}
