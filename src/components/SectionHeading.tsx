interface SectionHeadingProps {
  label?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
}

export default function SectionHeading({
  label,
  title,
  description,
  align = "left",
  className = "",
}: SectionHeadingProps) {
  return (
    <div
      className={`${align === "center" ? "text-center" : "text-left"} ${className}`}
    >
      {label && (
        <span className="inline-block text-xs font-semibold uppercase tracking-widest text-accent-500 mb-2">
          {label}
        </span>
      )}
      <h2 className="text-2xl sm:text-3xl font-bold text-foreground tracking-tight">
        {title}
      </h2>
      {description && (
        <p className="mt-3 text-foreground/60 text-base leading-relaxed max-w-2xl">
          {description}
        </p>
      )}
    </div>
  );
}
