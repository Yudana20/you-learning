"use client";

import { CATEGORIES } from "@/data/materials";

interface CategoryFilterProps {
  selected: string;
  onChange: (category: string) => void;
}

export default function CategoryFilter({
  selected,
  onChange,
}: CategoryFilterProps) {
  return (
    <div className="flex flex-wrap gap-2">
      {CATEGORIES.map((cat) => (
        <button
          key={cat}
          onClick={() => onChange(cat)}
          className={`px-3.5 py-1.5 rounded-full text-sm font-medium transition-all ${
            selected === cat
              ? "bg-primary-500 text-white shadow-sm"
              : "bg-muted text-foreground/60 hover:bg-primary-50 hover:text-primary-600"
          }`}
        >
          {cat}
        </button>
      ))}
    </div>
  );
}
