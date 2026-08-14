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

  return (
    <a href={href} className={`${base} ${styles} ${className}`}>
      {children}
    </a>
  );
}
