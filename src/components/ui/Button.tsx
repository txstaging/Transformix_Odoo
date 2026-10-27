import Link from "next/link";
import type { ComponentPropsWithoutRef, ReactNode } from "react";

import { SvgIcon } from "@/components/ui/SvgIcon";
import { cn } from "@/lib/cn";
import type { IconAsset } from "@/types/content";

export type ButtonVariant = "primary" | "outline" | "glossy";

interface ButtonOwnProps {
  variant?: ButtonVariant;
  /** Adds the circular "forward" arrow used on primary CTAs. */
  withArrow?: boolean;
  className?: string;
  children: ReactNode;
}

type LinkButtonProps = ButtonOwnProps &
  Omit<ComponentPropsWithoutRef<typeof Link>, keyof ButtonOwnProps | "href"> & { href: string };

type NativeButtonProps = ButtonOwnProps &
  Omit<ComponentPropsWithoutRef<"button">, keyof ButtonOwnProps> & { href?: never };

export type ButtonProps = LinkButtonProps | NativeButtonProps;

const arrowIcon: IconAsset = { src: "/icons/ui/arrow-right.svg", width: 16, height: 16 };

const baseClasses =
  "group/button relative inline-flex shrink-0 select-none items-center justify-center whitespace-nowrap rounded-full " +
  "transition-[background-color,border-color,color,box-shadow,transform] duration-300 ease-out " +
  "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-secondary active:scale-[0.98] " +
  "disabled:pointer-events-none disabled:opacity-50 aria-disabled:pointer-events-none aria-disabled:opacity-50";

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    "h-[47px] gap-[18px] bg-primary px-[22px] text-body leading-6 text-ink-inverse backdrop-blur-[4px] " +
    "hover:bg-primary-strong hover:shadow-[0_10px_24px_-10px_rgb(28_68_153/0.7)]",
  outline:
    "h-[47px] border-2 border-primary px-5 text-body leading-6 text-primary backdrop-blur-[4px] " +
    "hover:bg-blue-light active:bg-blue-light-active",
  glossy:
    "h-[47.5px] border-[1.829px] border-ink-inverse bg-primary px-8 font-tajawal text-small leading-none font-bold " +
    "tracking-[-0.07px] text-ink-inverse shadow-glossy hover:bg-primary-strong",
};

export function buttonClasses({
  variant = "primary",
  withArrow = false,
  className,
}: Pick<ButtonOwnProps, "variant" | "withArrow" | "className">): string {
  return cn(baseClasses, variantClasses[variant], withArrow && "ps-[22px] pe-[10px]", className);
}

function ButtonContent({ withArrow, children }: Pick<ButtonOwnProps, "withArrow" | "children">) {
  return (
    <>
      <span>{children}</span>
      {withArrow && (
        <span
          aria-hidden
          className="flex size-7 shrink-0 items-center justify-center rounded-full bg-surface transition-transform duration-300 ease-out ltr:group-hover/button:translate-x-1 rtl:group-hover/button:-translate-x-1"
        >
          <SvgIcon icon={arrowIcon} className="rtl:-scale-x-100" />
        </span>
      )}
    </>
  );
}

function isLinkButton(props: ButtonProps): props is LinkButtonProps {
  return typeof props.href === "string";
}

export function Button(props: ButtonProps) {
  if (isLinkButton(props)) {
    const { variant, withArrow, className, children, ...linkProps } = props;
    return (
      <Link {...linkProps} className={buttonClasses({ variant, withArrow, className })}>
        <ButtonContent withArrow={withArrow}>{children}</ButtonContent>
      </Link>
    );
  }

  const { variant, withArrow, className, children, type = "button", ...buttonProps } = props;
  return (
    <button {...buttonProps} type={type} className={buttonClasses({ variant, withArrow, className })}>
      <ButtonContent withArrow={withArrow}>{children}</ButtonContent>
    </button>
  );
}
