import type { Material } from "@/data/materials";

interface CategoryBadgeProps {
  category: string;
  colorVariant?: Material["categoryColor"];
  size?: "sm" | "md";
}

const variantStyles: Record<string, string> = {
  green: "bg-primary-50 text-primary-600 border border-primary-200",
  yellow: "bg-accent-50 text-amber-700 border border-accent-200",
  blue: "bg-blue-50 text-blue-700 border border-blue-200",
  purple: "bg-purple-50 text-purple-700 border border-purple-200",
};

export default function CategoryBadge({
  category,
  colorVariant = "green",
  size = "md",
}: CategoryBadgeProps) {
  const base = variantStyles[colorVariant] || variantStyles.green;
  const sizeClass = size === "sm" ? "px-2 py-0.5 text-xs" : "px-2.5 py-1 text-xs";

  return (
    <span
      className={`inline-flex items-center rounded-full font-medium ${base} ${sizeClass}`}
    >
      {category}
    </span>
  );
}
