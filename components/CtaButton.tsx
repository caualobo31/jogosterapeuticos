"use client";

import { CHECKOUT_URL } from "@/lib/config";

type CtaButtonProps = {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "text";
  className?: string;
  href?: string;
  onClick?: () => void;
};

export default function CtaButton({
  children,
  variant = "primary",
  className = "",
  href = CHECKOUT_URL,
  onClick,
}: CtaButtonProps) {
  const styles =
    variant === "primary"
      ? "inline-block rounded-card px-8 py-3.5 text-center font-heading text-sm font-medium transition-transform hover:scale-[1.02] active:scale-[0.99] bg-gradient-to-r from-brand-dark to-brand-vivid text-white shadow-lg shadow-brand/25"
      : variant === "secondary"
        ? "inline-block rounded-card px-8 py-3.5 text-center font-heading text-sm font-medium transition-transform hover:scale-[1.02] active:scale-[0.99] bg-brand-lavender text-graphite"
        : "inline-block font-body text-[13px] text-muted underline-offset-2 hover:underline";

  function handleClick(e: React.MouseEvent<HTMLAnchorElement>) {
    // Se o botão tem uma ação própria (ex: abrir um modal), ela substitui a navegação.
    if (onClick) {
      e.preventDefault();
      onClick();
      return;
    }

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
      className={`${styles} ${className}`}
    >
      {children}
    </a>
  );
}
