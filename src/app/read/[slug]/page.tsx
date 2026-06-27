import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { getMaterialBySlug, materials } from "@/data/materials";
import PDFViewer from "@/components/PDFViewer";
import CategoryBadge from "@/components/CategoryBadge";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const material = getMaterialBySlug(slug);
  if (!material) return { title: "Materi Tidak Ditemukan" };

  return {
    title: `Baca: ${material.title}`,
    description: material.description,
  };
}

export function generateStaticParams() {
  return materials.map((m) => ({ slug: m.slug }));
}

export default async function ReadPage({ params }: PageProps) {
  const { slug } = await params;
  const material = getMaterialBySlug(slug);

  if (!material) notFound();

  return (
    <div className="flex flex-col min-h-[calc(100vh-4rem)]">
      {/* Reader top bar */}
      <div className="bg-white border-b border-border sticky top-16 z-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-14 gap-4">
            {/* Left: back + title */}
            <div className="flex items-center gap-3 min-w-0">
              <Link
                href={`/library/${material.slug}`}
                className="flex-shrink-0 flex items-center gap-1.5 text-sm text-foreground/50 hover:text-primary-500 transition-colors"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
                <span className="hidden sm:inline">Kembali</span>
              </Link>
              <span className="text-border hidden sm:inline">|</span>
              <div className="min-w-0 flex items-center gap-2">
                <CategoryBadge
                  category={material.category}
                  colorVariant={material.categoryColor}
                  size="sm"
                />
                <h1 className="text-sm font-semibold text-foreground truncate hidden sm:block">
                  {material.title}
                </h1>
              </div>
            </div>

            {/* Right: actions */}
            <div className="flex items-center gap-2 flex-shrink-0">
              <span className="hidden sm:flex items-center gap-1 text-xs text-foreground/40">
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                {material.readingTimeMinutes} mnt
              </span>
              <a
                href={material.pdfPath}
                download
                className="flex items-center gap-1.5 px-3 py-1.5 bg-muted border border-border hover:bg-white text-foreground/70 rounded-lg text-xs font-medium transition-colors"
              >
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
                Unduh
              </a>
              <a
                href={material.pdfPath}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 px-3 py-1.5 bg-primary-500 hover:bg-primary-600 text-white rounded-lg text-xs font-semibold transition-colors"
              >
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
                <span className="hidden sm:inline">Tab Baru</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* PDF Content — no horizontal padding on mobile so PDF fills width */}
      <div className="flex-1 w-full max-w-7xl mx-auto px-0 sm:px-6 lg:px-8 py-0 sm:py-4">
        <PDFViewer pdfPath={material.pdfPath} title={material.title} />
      </div>

      {/* Bottom bar — hidden on mobile to maximize reading space */}
      <div className="hidden sm:block bg-white border-t border-border">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-3">
          <div className="flex items-center justify-between text-sm">
            <span className="text-foreground/50 truncate max-w-xs">
              <span className="font-medium text-foreground">{material.title}</span>
              {" · "}{material.readingTimeMinutes} menit baca
            </span>
            <div className="flex items-center gap-4 flex-shrink-0">
              <Link href="/library" className="text-foreground/50 hover:text-primary-500 transition-colors">
                ← Perpustakaan
              </Link>
              <Link href={`/library/${material.slug}`} className="text-primary-500 hover:underline font-medium">
                Detail →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
