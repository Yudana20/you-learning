import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] px-4 text-center">
      <div className="w-20 h-20 rounded-2xl bg-primary-50 border border-primary-100 flex items-center justify-center mb-6">
        <span className="text-3xl font-bold text-primary-500">404</span>
      </div>
      <h1 className="text-2xl font-bold text-foreground mb-2">Halaman Tidak Ditemukan</h1>
      <p className="text-foreground/50 text-sm max-w-xs mb-6">
        Halaman yang Anda cari tidak ada atau sudah dipindahkan.
      </p>
      <div className="flex gap-3">
        <Link
          href="/"
          className="px-5 py-2.5 bg-primary-500 hover:bg-primary-600 text-white rounded-xl text-sm font-semibold transition-colors"
        >
          Ke Beranda
        </Link>
        <Link
          href="/library"
          className="px-5 py-2.5 bg-muted border border-border hover:bg-card text-foreground rounded-xl text-sm font-medium transition-colors"
        >
          Perpustakaan
        </Link>
      </div>
    </div>
  );
}
