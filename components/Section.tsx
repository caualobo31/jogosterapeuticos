import type { ReactNode } from "react";

type SectionProps = {
  children: ReactNode;
  bg?: "cream" | "white" | "tint";
  id?: string;
  className?: string;
};

const bgClasses: Record<NonNullable<SectionProps["bg"]>, string> = {
  cream: "bg-cream",
  white: "bg-warmwhite",
  tint: "bg-brand-tint2",
};

export default function Section({
  children,
  bg = "cream",
  id,
  className = "",
}: SectionProps) {
  return (
    <section id={id} className={`${bgClasses[bg]} px-5 py-11 md:py-16`}>
      <div className={`mx-auto max-w-content text-center ${className}`}>
        {children}
      </div>
    </section>
  );
}
