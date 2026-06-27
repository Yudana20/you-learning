import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { getSkillBySlug, getAdjacentSkills, leadershipSkills } from "@/data/leadership-skills";
import PDFViewer from "@/components/PDFViewer";

interface PageProps {
  params: Promise<{ skill: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { skill } = await params;
  const s = getSkillBySlug(skill);
  if (!s) return { title: "Modul Tidak Ditemukan" };
  return {
    title: `${s.code}: ${s.title} — How to a Leadership`,
    description: s.subtitle,
  };
}

export function generateStaticParams() {
  return leadershipSkills.map((s) => ({ skill: s.slug }));
}

export default async function SkillReaderPage({ params }: PageProps) {
  const { skill } = await params;
  const s = getSkillBySlug(skill);
  if (!s) notFound();

  const { prev, next } = getAdjacentSkills(skill);
  const isLeadership = s.category === "leadership";
  const accentColor = isLeadership ? "#423ccf" : "#ebb000";
  const accentLight = isLeadership ? "#e0e7ff" : "#fef9c3";
  const accentDark = isLeadership ? "#423ccf" : "#92400e";

  return (
    <div className="flex flex-col min-h-[calc(100vh-4rem)]">
      {/* Top bar */}
      <div className="bg-white border-b border-gray-200 sticky top-16 z-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-14 gap-4">
            {/* Left: breadcrumb */}
            <div className="flex items-center gap-2 min-w-0 text-sm">
              <Link
                href="/library/how-to-a-leadership"
                className="flex items-center gap-1 text-gray-400 hover:text-gray-700 transition-colors flex-shrink-0"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
                <span className="hidden sm:inline">Mind Map</span>
              </Link>
              <span className="text-gray-300 hidden sm:inline">/</span>
              <div
                className="flex items-center gap-2 px-2.5 py-1 rounded-lg flex-shrink-0"
                style={{ background: accentLight }}
              >
                <span className="text-xs font-black" style={{ color: accentDark }}>{s.code}</span>
                <span className="text-xs font-semibold text-gray-700 hidden sm:inline">{s.title}</span>
              </div>
            </div>

            {/* Right: actions */}
            <div className="flex items-center gap-2 flex-shrink-0">
              <a
                href={s.pdfPath}
                download
                className="flex items-center gap-1.5 px-3 py-1.5 bg-gray-50 border border-gray-200 hover:bg-white text-gray-600 rounded-lg text-xs font-medium transition-colors"
              >
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
                Unduh
              </a>
              <a
                href={s.pdfPath}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 px-3 py-1.5 text-white rounded-lg text-xs font-semibold transition-colors"
                style={{ background: accentColor }}
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

      {/* PDF viewer */}
      <div className="flex-1 w-full max-w-7xl mx-auto px-0 sm:px-6 lg:px-8 py-0 sm:py-4">
        <PDFViewer pdfPath={s.pdfPath} title={`${s.code}: ${s.title}`} />
      </div>

      {/* Bottom nav bar */}
      <div className="bg-white border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <div className="flex items-center justify-between">
            {/* Prev */}
            <div className="w-36">
              {prev && (
                <Link
                  href={`/read/how-to-a-leadership/${prev.slug}`}
                  className="flex items-center gap-2 text-sm text-gray-500 hover:text-gray-800 transition-colors"
                >
                  <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                  <span>
                    <span className="block text-xs text-gray-400">Sebelumnya</span>
                    <span className="font-semibold truncate block max-w-[100px]">{prev.code}: {prev.title}</span>
                  </span>
                </Link>
              )}
            </div>

            {/* Center: skill indicator */}
            <Link
              href="/library/how-to-a-leadership"
              className="text-center text-xs text-gray-400 hover:text-gray-600 transition-colors"
            >
              <div
                className="mx-auto w-8 h-8 rounded-full flex items-center justify-center mb-0.5"
                style={{ background: accentLight }}
              >
                <span className="text-xs font-black" style={{ color: accentDark }}>{s.code}</span>
              </div>
              <span>Kembali ke Mind Map</span>
            </Link>

            {/* Next */}
            <div className="w-36 flex justify-end">
              {next && (
                <Link
                  href={`/read/how-to-a-leadership/${next.slug}`}
                  className="flex items-center gap-2 text-sm text-gray-500 hover:text-gray-800 transition-colors text-right"
                >
                  <span>
                    <span className="block text-xs text-gray-400">Selanjutnya</span>
                    <span className="font-semibold truncate block max-w-[100px]">{next.code}: {next.title}</span>
                  </span>
                  <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
