import Link from "next/link";
import Image from "next/image";
import type { Material } from "@/data/materials";
import CategoryBadge from "./CategoryBadge";

interface MaterialCardProps {
  material: Material;
  variant?: "default" | "featured";
}

function CoverIllustration({
  gradient,
  coverImage,
  title,
}: {
  gradient: string;
  coverImage?: string;
  title: string;
}) {
  if (coverImage) {
    return (
      <div className="relative w-full h-full overflow-hidden">
        <Image
          src={coverImage}
          alt={`Cover ${title}`}
          fill
          className="object-cover"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
      </div>
    );
  }

  const isYellow = gradient.includes("accent");
  return (
    <div
      className={`relative w-full h-full bg-gradient-to-br ${gradient} flex items-center justify-center overflow-hidden`}
    >
      <div className="absolute top-3 right-3 w-12 h-12 rounded-full bg-white/10" />
      <div className="absolute bottom-4 left-4 w-8 h-8 rounded-full bg-white/10" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 rounded-2xl bg-white/10 rotate-12" />
      <svg
        className={`relative z-10 w-10 h-10 ${isYellow ? "text-amber-800/60" : "text-white/60"}`}
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
      </svg>
    </div>
  );
}

export default function MaterialCard({
  material,
  variant = "default",
}: MaterialCardProps) {
  return (
    <Link
      href={`/library/${material.slug}`}
      className={`group flex flex-col bg-card rounded-2xl border border-border overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-200 hover:-translate-y-0.5 ${
        variant === "featured" ? "h-full" : ""
      }`}
    >
      {/* Cover */}
      <div className="h-40 w-full flex-shrink-0">
        <CoverIllustration
          gradient={material.coverGradient}
          coverImage={material.coverImage}
          title={material.title}
        />
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-5 gap-3">
        <div className="flex items-start justify-between gap-2">
          <CategoryBadge
            category={material.category}
            colorVariant={material.categoryColor}
          />
          <span className="flex-shrink-0 flex items-center gap-1 text-xs text-foreground/50">
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            {material.readingTimeMinutes} mnt
          </span>
        </div>

        <div className="flex-1">
          <h3 className="font-semibold text-foreground text-sm leading-snug group-hover:text-primary-600 transition-colors line-clamp-2">
            {material.title}
          </h3>
          {material.subtitle && (
            <p className="text-xs text-foreground/50 mt-0.5 line-clamp-1">
              {material.subtitle}
            </p>
          )}
          <p className="text-xs text-foreground/60 mt-2 leading-relaxed line-clamp-2">
            {material.description}
          </p>
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between pt-2 border-t border-border">
          <div className="flex gap-1.5 flex-wrap">
            {material.tags.slice(0, 2).map((tag) => (
              <span
                key={tag}
                className="text-[10px] px-2 py-0.5 rounded-full bg-muted text-foreground/50"
              >
                {tag}
              </span>
            ))}
          </div>
          <span className="text-xs text-primary-500 font-medium group-hover:underline">
            Baca →
          </span>
        </div>
      </div>
    </Link>
  );
}
