type PlaceholderProps = {
  label: string;
  className?: string;
};

export default function Placeholder({ label, className = "" }: PlaceholderProps) {
  return (
    <div
      className={`flex items-center justify-center rounded-card border border-dashed border-brand-lavender bg-brand-tint2 px-4 py-3 text-center font-body text-xs text-brand ${className}`}
    >
      {label}
    </div>
  );
}
