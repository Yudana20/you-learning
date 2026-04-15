import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-primary-500 text-white mt-auto">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="mb-3">
              <span className="font-bold text-2xl tracking-tight text-white">
                you
              </span>
              <span className="font-bold text-2xl tracking-tight text-white">
                .
              </span>
              <span className="font-bold text-2xl tracking-tight text-accent-400">
                learning
              </span>
            </div>
            <p className="text-white/70 text-sm leading-relaxed max-w-xs">
              Platform pembelajaran digital yang membantu Anda mengakses materi
              berkualitas dan mengembangkan kompetensi secara terstruktur.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-sm font-semibold text-white/90 uppercase tracking-wider mb-4">
              Navigasi
            </h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/"
                  className="text-white/70 hover:text-accent-400 text-sm transition-colors"
                >
                  Beranda
                </Link>
              </li>
              <li>
                <Link
                  href="/library"
                  className="text-white/70 hover:text-accent-400 text-sm transition-colors"
                >
                  Perpustakaan
                </Link>
              </li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h4 className="text-sm font-semibold text-white/90 uppercase tracking-wider mb-4">
              Kategori
            </h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/library?category=Kepemimpinan"
                  className="text-white/70 hover:text-accent-400 text-sm transition-colors"
                >
                  Kepemimpinan
                </Link>
              </li>
              <li>
                <Link
                  href="/library?category=Manajemen"
                  className="text-white/70 hover:text-accent-400 text-sm transition-colors"
                >
                  Manajemen
                </Link>
              </li>
              <li>
                <Link
                  href="/library?category=Pengembangan+Diri"
                  className="text-white/70 hover:text-accent-400 text-sm transition-colors"
                >
                  Pengembangan Diri
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-white/10 flex items-center justify-center">
          <p className="text-white/50 text-xs">
            © {new Date().getFullYear()} you.learning. Semua hak dilindungi.
          </p>
        </div>
      </div>
    </footer>
  );
}
