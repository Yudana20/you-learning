import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { getMaterialBySlug, materials } from "@/data/materials";
import CategoryBadge from "@/components/CategoryBadge";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const material = getMaterialBySlug(slug);
  if (!material) return { title: "Materi Tidak Ditemukan" };

  return {
    title: material.title,
    description: material.description,
  };
}

export function generateStaticParams() {
  return materials.map((m) => ({ slug: m.slug }));
}

export default async function MaterialDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const material = getMaterialBySlug(slug);

  if (!material) notFound();

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14">
      {/* Breadcrumb */}
      <nav className="flex items-center gap-2 text-sm text-foreground/50 mb-8">
        <Link href="/" className="hover:text-primary-500 transition-colors">
          Beranda
        </Link>
        <span>/</span>
        <Link href="/library" className="hover:text-primary-500 transition-colors">
          Perpustakaan
        </Link>
        <span>/</span>
        <span className="text-foreground/70 line-clamp-1">{material.title}</span>
      </nav>

      {/* Cover banner */}
      <div className="relative w-full h-48 sm:h-64 rounded-2xl overflow-hidden mb-8">
        {material.coverImage ? (
          <Image
            src={material.coverImage}
            alt={`Cover ${material.title}`}
            fill
            className="object-cover"
            priority
            sizes="(max-width: 768px) 100vw, 896px"
          />
        ) : (
          <div
            className={`absolute inset-0 bg-gradient-to-br ${material.coverGradient} flex items-center justify-center`}
          >
            <svg
              className={`w-16 h-16 ${
                material.coverGradient.includes("accent") ? "text-amber-800/40" : "text-white/40"
              }`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
              />
            </svg>
            <div className="absolute top-4 right-4 w-24 h-24 rounded-full bg-white/10" />
            <div className="absolute bottom-4 left-8 w-16 h-16 rounded-full bg-white/10" />
          </div>
        )}
      </div>

      {/* Title area */}
      <div className="mb-6">
        <div className="flex flex-wrap items-center gap-2 mb-3">
          <CategoryBadge
            category={material.category}
            colorVariant={material.categoryColor}
          />
          <span className="flex items-center gap-1 text-xs text-foreground/50">
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            Estimasi {material.readingTimeMinutes} menit baca
          </span>
        </div>
        <h1 className="text-2xl sm:text-3xl font-bold text-foreground leading-tight tracking-tight">
          {material.title}
        </h1>
        {material.subtitle && (
          <p className="mt-1.5 text-foreground/50 text-base">{material.subtitle}</p>
        )}
      </div>

      {/* Primary CTA */}
      <div className="flex flex-col sm:flex-row gap-3 mb-10">
        <Link
          href={`/read/${material.slug}`}
          className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-primary-500 hover:bg-primary-600 text-white font-semibold rounded-xl transition-colors text-sm"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
          </svg>
          Baca Materi Sekarang
        </Link>
        <a
          href={material.pdfPath}
          download
          className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-muted border border-border hover:bg-card text-foreground font-medium rounded-xl transition-colors text-sm"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
          </svg>
          Unduh PDF
        </a>
        <a
          href={material.pdfPath}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-muted border border-border hover:bg-card text-foreground font-medium rounded-xl transition-colors text-sm"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
          </svg>
          Buka di Tab Baru
        </a>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main content */}
        <div className="lg:col-span-2 space-y-6">
          {/* Description */}
          <div className="bg-card border border-border rounded-2xl p-6">
            <h2 className="text-base font-semibold text-foreground mb-3">Tentang Materi Ini</h2>
            <p className="text-sm text-foreground/70 leading-relaxed">{material.description}</p>
          </div>

          {/* Summary */}
          <div className="bg-card border border-border rounded-2xl p-6">
            <h2 className="text-base font-semibold text-foreground mb-3">Ringkasan</h2>
            <p className="text-sm text-foreground/70 leading-relaxed">{material.summary}</p>
          </div>

          {/* Key Highlights */}
          <div className="bg-card border border-border rounded-2xl p-6">
            <h2 className="text-base font-semibold text-foreground mb-4">
              Yang Akan Anda Pelajari
            </h2>
            <ul className="space-y-3">
              {material.highlights.map((highlight, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="flex-shrink-0 mt-0.5 w-5 h-5 rounded-full bg-primary-50 border border-primary-200 flex items-center justify-center">
                    <svg
                      className="w-3 h-3 text-primary-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2.5}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </span>
                  <span className="text-sm text-foreground/70 leading-relaxed">{highlight}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-4">
          {/* Meta */}
          <div className="bg-card border border-border rounded-2xl p-5">
            <h3 className="text-sm font-semibold text-foreground mb-4">Detail Materi</h3>
            <div className="space-y-3">
              <div className="flex items-center justify-between text-sm">
                <span className="text-foreground/50">Kategori</span>
                <CategoryBadge
                  category={material.category}
                  colorVariant={material.categoryColor}
                  size="sm"
                />
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-foreground/50">Estimasi Baca</span>
                <span className="font-medium text-foreground">
                  {material.readingTimeMinutes} menit
                </span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-foreground/50">Format</span>
                <span className="font-medium text-foreground">PDF</span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-foreground/50">Tahun</span>
                <span className="font-medium text-foreground">2026</span>
              </div>
            </div>
          </div>

          {/* Tags */}
          <div className="bg-card border border-border rounded-2xl p-5">
            <h3 className="text-sm font-semibold text-foreground mb-3">Tag</h3>
            <div className="flex flex-wrap gap-2">
              {material.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-2.5 py-1 bg-muted text-foreground/60 text-xs rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* CTA sidebar */}
          <Link
            href={`/read/${material.slug}`}
            className="block w-full text-center px-4 py-3 bg-accent-400 hover:bg-accent-500 text-primary-900 font-semibold rounded-xl transition-colors text-sm"
          >
            Mulai Membaca →
          </Link>
        </div>
      </div>

      {/* Back link */}
      <div className="mt-10 pt-6 border-t border-border">
        <Link
          href="/library"
          className="inline-flex items-center gap-2 text-sm text-foreground/50 hover:text-primary-500 transition-colors"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Kembali ke Perpustakaan
        </Link>
      </div>
    </div>
  );
}
