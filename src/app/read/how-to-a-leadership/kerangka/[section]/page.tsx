import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import PDFViewer from "@/components/PDFViewer";

interface PageProps {
  params: Promise<{ section: string }>;
}

const KERANGKA_MAP: Record<string, { title: string; desc: string; pdfPath: string; prev?: string; next?: string }> = {
  "00": { title: "Pembuka",                    desc: "Kata Pengantar · Tentang Buku · Cara Menggunakannya",                    pdfPath: "/assets/pdfs/how-to-a-leadership/kerangka-00-pembuka.pdf",          next: "01" },
  "01": { title: "Mind Map: Peta Besar",        desc: "Visual seluruh konsep buku dalam satu pandang",                          pdfPath: "/assets/pdfs/how-to-a-leadership/kerangka-01-mind-map.pdf",         prev: "00", next: "02" },
  "02": { title: "Fondasi: Mengapa Leadership?",desc: "Definisi · Leadership vs Management · Self-Assessment",                  pdfPath: "/assets/pdfs/how-to-a-leadership/kerangka-02-fondasi.pdf",          prev: "01", next: "03" },
  "03": { title: "Roadmap: 3 Fase",             desc: "Foundation → Growth → Leadership · Indikator Naik Fase",                 pdfPath: "/assets/pdfs/how-to-a-leadership/kerangka-03-roadmap.pdf",          prev: "02", next: "06" },
  "06": { title: "Sistem Belajar & Dokumentasi",desc: "Practice Log · Evidence Portfolio · Feedback · Mentor Sessions",         pdfPath: "/assets/pdfs/how-to-a-leadership/kerangka-06-sistem-belajar.pdf",   prev: "03", next: "07" },
  "07": { title: "Sumber Belajar",              desc: "Priority Reading List · TED Talks · Referensi Online",                   pdfPath: "/assets/pdfs/how-to-a-leadership/kerangka-07-sumber-belajar.pdf",   prev: "06", next: "08" },
  "08": { title: "Penutup & Komitmen",          desc: "30-Day Commitment · Catatan Akhir",                                      pdfPath: "/assets/pdfs/how-to-a-leadership/kerangka-08-penutup.pdf",          prev: "07" },
};

export async function generateStaticParams() {
  return Object.keys(KERANGKA_MAP).map((section) => ({ section }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { section } = await params;
  const item = KERANGKA_MAP[section];
  if (!item) return { title: "Tidak Ditemukan" };
  return { title: `${section}: ${item.title} — How to a Leadership` };
}

export default async function KerangkaReaderPage({ params }: PageProps) {
  const { section } = await params;
  const item = KERANGKA_MAP[section];
  if (!item) notFound();

  const prevItem = item.prev ? KERANGKA_MAP[item.prev] : null;
  const nextItem = item.next ? KERANGKA_MAP[item.next] : null;

  return (
    <div className="flex flex-col min-h-[calc(100vh-4rem)]">
      {/* Top bar */}
      <div className="bg-white border-b border-gray-200 sticky top-16 z-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-14 gap-4">
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
                <span className="text-xs font-black text-[#151345]">{section}</span>
                <span className="text-xs font-semibold text-gray-700 hidden sm:inline truncate max-w-[200px]">{item.title}</span>
              </div>
            </div>
            <div className="flex items-center gap-2 flex-shrink-0">
              <a
                href={item.pdfPath}
                download
                className="flex items-center gap-1.5 px-3 py-1.5 bg-gray-50 border border-gray-200 hover:bg-white text-gray-600 rounded-lg text-xs font-medium transition-colors"
              >
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
                Unduh
              </a>
              <a
                href={item.pdfPath}
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
        <PDFViewer pdfPath={item.pdfPath} title={`${section}: ${item.title}`} />
      </div>

      {/* Bottom nav */}
      <div className="bg-white border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <div className="flex items-center justify-between">
            <div className="w-36">
              {prevItem && item.prev && (
                <Link
                  href={`/read/how-to-a-leadership/kerangka/${item.prev}`}
                  className="flex items-center gap-2 text-sm text-gray-500 hover:text-gray-800 transition-colors"
                >
                  <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                  <span>
                    <span className="block text-xs text-gray-400">Sebelumnya</span>
                    <span className="font-semibold truncate block max-w-[100px]">{item.prev}: {prevItem.title}</span>
                  </span>
                </Link>
              )}
            </div>

            <Link
              href="/library/how-to-a-leadership"
              className="text-center text-xs text-gray-400 hover:text-gray-600 transition-colors"
            >
              <div className="mx-auto w-8 h-8 rounded-full bg-[#e8e7f8] flex items-center justify-center mb-0.5">
                <span className="text-xs font-black text-[#151345]">{section}</span>
              </div>
              <span>Kembali ke Mind Map</span>
            </Link>

            <div className="w-36 flex justify-end">
              {nextItem && item.next && (
                <Link
                  href={`/read/how-to-a-leadership/kerangka/${item.next}`}
                  className="flex items-center gap-2 text-sm text-gray-500 hover:text-gray-800 transition-colors text-right"
                >
                  <span>
                    <span className="block text-xs text-gray-400">Selanjutnya</span>
                    <span className="font-semibold truncate block max-w-[100px]">{item.next}: {nextItem.title}</span>
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
