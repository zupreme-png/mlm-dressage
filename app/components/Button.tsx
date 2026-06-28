import Link from "next/link";
import type { ComponentProps } from "react";

type Variant = "primary" | "secondary" | "ghost";

const base =
  "inline-flex h-12 items-center justify-center gap-2 rounded-full px-7 text-sm font-semibold transition-colors min-h-[44px]";

const variants: Record<Variant, string> = {
  primary: "bg-gold text-forest hover:bg-[#c89a55]",
  secondary:
    "border border-cream/40 text-cream hover:border-cream hover:bg-cream/10",
  ghost:
    "border border-forest/20 text-forest hover:border-forest hover:bg-forest/5",
};

type LinkButtonProps = { href: string; variant?: Variant } & Omit<
  ComponentProps<typeof Link>,
  "href"
>;

export function LinkButton({
  href,
  variant = "primary",
  className = "",
  ...props
}: LinkButtonProps) {
  return (
    <Link
      href={href}
      className={`${base} ${variants[variant]} ${className}`}
      {...props}
    />
  );
}

type ButtonProps = { variant?: Variant } & ComponentProps<"button">;

export function Button({
  variant = "primary",
  className = "",
  ...props
}: ButtonProps) {
  return (
    <button
      className={`${base} ${variants[variant]} ${className}`}
      {...props}
    />
  );
}
