"use client";

import { useState, useEffect } from "react";

interface PDFViewerProps {
  pdfPath: string;
  title: string;
  initialPage?: number;
}

export default function PDFViewer({ pdfPath, title, initialPage }: PDFViewerProps) {
  const src = initialPage && initialPage > 1 ? `${pdfPath}#page=${initialPage}` : pdfPath;
  const [isMobile, setIsMobile] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    // Detect mobile: touch device OR narrow viewport
    const checkMobile = () =>
      window.innerWidth < 768 || /iPhone|iPad|Android/i.test(navigator.userAgent);
    setIsMobile(checkMobile());
    const handler = () => setIsMobile(checkMobile());
    window.addEventListener("resize", handler);
    return () => window.removeEventListener("resize", handler);
  }, []);

  // Avoid hydration mismatch
  if (!mounted) {
    return (
      <div className="w-full flex items-center justify-center bg-muted rounded-xl" style={{ height: "calc(100dvh - 9rem)" }}>
        <div className="flex flex-col items-center gap-3">
          <div className="w-8 h-8 border-2 border-primary-500/30 border-t-primary-500 rounded-full animate-spin" />
          <p className="text-sm text-foreground/50">Memuat PDF...</p>
        </div>
      </div>
    );
  }

  // Mobile: iframe doesn't support #page=N fragment. Show card-style CTA instead.
  if (isMobile) {
    return (
      <div className="w-full flex flex-col gap-4 px-1">
        {/* Primary CTA: open at specific page */}
        <a
          href={src}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-between gap-3 p-4 bg-primary-500 hover:bg-primary-600 text-white rounded-2xl transition-colors"
        >
          <div>
            <div className="font-semibold text-sm mb-0.5">
              {initialPage && initialPage > 1 ? `Buka di Halaman ${initialPage}` : "Buka PDF"}
            </div>
            <div className="text-xs text-white/70">{title}</div>
          </div>
          <svg className="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
          </svg>
        </a>

        {/* PDF inline preview — best-effort, won't jump to page on mobile */}
        <div
          className="w-full rounded-xl overflow-hidden border border-border"
          style={{ height: "calc(100dvh - 16rem)" }}
        >
          <iframe
            src={pdfPath}
            title={title}
            className="w-full h-full"
            allow="fullscreen"
          />
        </div>

        {/* Download */}
        <a
          href={pdfPath}
          download
          className="flex items-center justify-center gap-2 w-full py-3 bg-muted border border-border hover:bg-white text-foreground/70 rounded-xl text-sm font-medium transition-colors"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
              d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
          </svg>
          Unduh PDF ke perangkat
        </a>
      </div>
    );
  }

  // Desktop: full-height iframe viewer
  return (
    <div className="w-full flex flex-col gap-3">
      {/* Subtle fallback link for desktop too */}
      <div className="flex items-center justify-end gap-3">
        <a
          href={src}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-xs text-foreground/40 hover:text-primary-500 transition-colors"
        >
          <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
              d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
          </svg>
          Buka di tab baru
        </a>
        <a
          href={pdfPath}
          download
          className="inline-flex items-center gap-1.5 text-xs text-foreground/40 hover:text-primary-500 transition-colors"
        >
          <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
              d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
          </svg>
          Unduh
        </a>
      </div>

      <iframe
        src={src}
        title={title}
        className="w-full rounded-xl border border-border"
        style={{ height: "calc(100dvh - 10rem)" }}
        allow="fullscreen"
      />
    </div>
  );
}
