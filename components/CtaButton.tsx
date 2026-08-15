"use client";

import { CHECKOUT_URL } from "@/lib/config";

type CtaButtonProps = {
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  className?: string;
  href?: string;
};

export default function CtaButton({
  children,
  variant = "primary",
  className = "",
  href = CHECKOUT_URL,
}: CtaButtonProps) {
  const base =
    "inline-block rounded-card px-8 py-3.5 text-center font-heading text-sm font-medium transition-transform hover:scale-[1.02] active:scale-[0.99]";
  const styles =
    variant === "primary"
      ? "bg-gradient-to-r from-brand-dark to-brand-vivid text-white shadow-lg shadow-brand/25"
      : "bg-brand-lavender text-graphite";

  function handleClick(e: React.MouseEvent<HTMLAnchorElement>) {
    // Âncoras internas (#planos etc.) navegam normalmente, sem redirecionamento forçado.
    if (href.startsWith("#")) return;

    e.preventDefault();
    const params = window.location.search;
    const separator = href.includes("?") ? "&" : "?";
    const destino = params ? `${href}${separator}${params.slice(1)}` : href;
    window.location.href = destino;
  }

  return (
    <a
      href={href}
      onClick={handleClick}
      className={`${base} ${styles} ${className}`}
    >
      {children}
    </a>
  );
}
