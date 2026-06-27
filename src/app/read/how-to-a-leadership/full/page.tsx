import type { Metadata } from "next";
import Link from "next/link";
import PDFViewer from "@/components/PDFViewer";

interface PageProps {
  searchParams: Promise<{ page?: string; section?: string }>;
}

const SECTION_LABELS: Record<string, string> = {
  "00": "Pembuka",
  "01": "Mind Map: Peta Besar",
  "02": "Fondasi: Mengapa Leadership?",
  "03": "Roadmap: 3 Fase",
  "06": "Sistem Belajar & Dokumentasi",
  "07": "Sumber Belajar",
  "08": "Penutup & Komitmen",
};

const FULL_PDF = "/assets/pdfs/how-to-a-leadership/how-to-a-leadership-full.pdf";

export async function generateMetadata({ searchParams }: PageProps): Promise<Metadata> {
  const { section } = await searchParams;
  const label = section ? SECTION_LABELS[section] : null;
  return {
    title: label
      ? `${label} — How to a Leadership`
      : "Buku Lengkap — How to a Leadership",
  };
}

export default async function FullReaderPage({ searchParams }: PageProps) {
  const { page, section } = await searchParams;
  const initialPage = page ? parseInt(page, 10) : undefined;
  const sectionLabel = section ? SECTION_LABELS[section] : null;

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
              <div className="flex items-center gap-2 px-2.5 py-1 rounded-lg bg-[#e8e7f8] flex-shrink-0">
                <span className="text-xs font-black text-[#151345]">
                  {sectionLabel ?? "Buku Lengkap"}
                </span>
              </div>
            </div>

            {/* Right: actions */}
            <div className="flex items-center gap-2 flex-shrink-0">
              <a
                href={FULL_PDF}
                download
                className="flex items-center gap-1.5 px-3 py-1.5 bg-gray-50 border border-gray-200 hover:bg-white text-gray-600 rounded-lg text-xs font-medium transition-colors"
              >
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
                Unduh
              </a>
              <a
                href={FULL_PDF}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 px-3 py-1.5 text-white rounded-lg text-xs font-semibold transition-colors bg-[#423ccf]"
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
        <PDFViewer
          pdfPath={FULL_PDF}
          title={sectionLabel ?? "How to a Leadership — Buku Lengkap"}
          initialPage={initialPage}
        />
      </div>

      {/* Bottom bar */}
      <div className="bg-white border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex justify-center">
          <Link
            href="/library/how-to-a-leadership"
            className="flex items-center gap-2 text-sm text-gray-500 hover:text-gray-800 transition-colors"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Kembali ke Mind Map
          </Link>
        </div>
      </div>
    </div>
  );
}
