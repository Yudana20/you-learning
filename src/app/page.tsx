import type { Metadata } from "next";
import Link from "next/link";
import { materials } from "@/data/materials";
import MaterialCard from "@/components/MaterialCard";
import SectionHeading from "@/components/SectionHeading";

export const metadata: Metadata = {
  title: "you.learning — Platform E-Learning & E-Library",
  description:
    "Platform pembelajaran digital modern untuk mengakses materi berkualitas dan mengembangkan kompetensi kepemimpinan secara terstruktur.",
};

const stats = [
  { value: "2+", label: "Materi Tersedia" },
  { value: "100%", label: "Gratis Diakses" },
  { value: "PDF", label: "Format Mudah Dibaca" },
];

export default function HomePage() {
  const featuredMaterials = materials.slice(0, 2);

  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden bg-primary-500">
        {/* Background decoration */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-white/5" />
          <div className="absolute -bottom-32 -left-16 w-80 h-80 rounded-full bg-white/5" />
          <div className="absolute top-1/2 left-1/3 w-64 h-64 rounded-full bg-accent-400/10" />
        </div>

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28">
          <div className="max-w-3xl">
            {/* Label */}
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 text-accent-400 text-xs font-semibold uppercase tracking-widest mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-accent-400" />
              E-Library & E-Learning Platform
            </span>

            {/* Heading */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight tracking-tight text-balance">
              Belajar lebih{" "}
              <span className="text-accent-400">terstruktur</span>,<br />
              berkembang lebih cepat.
            </h1>

            <p className="mt-6 text-lg text-white/70 leading-relaxed max-w-xl">
              Akses materi pembelajaran berkualitas, pelajari dengan kecepatan
              Anda sendiri, dan kembangkan kompetensi yang relevan untuk karier
              dan organisasi Anda.
            </p>

            {/* CTAs */}
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <Link
                href="/library"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-accent-400 hover:bg-accent-500 text-primary-900 font-semibold rounded-xl transition-all hover:shadow-lg hover:shadow-accent-400/30 text-sm"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
                Jelajahi Perpustakaan
              </Link>
              <Link
                href="/library"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-xl transition-all border border-white/20 text-sm"
              >
                Lihat Semua Materi
              </Link>
            </div>

            {/* Stats */}
            <div className="mt-12 flex flex-wrap gap-6 sm:gap-10">
              {stats.map((stat) => (
                <div key={stat.label}>
                  <div className="text-2xl font-bold text-accent-400">{stat.value}</div>
                  <div className="text-sm text-white/50 mt-0.5">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FEATURED MATERIALS */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
          <SectionHeading
            label="Materi Terbaru"
            title="Mulai belajar dari sini"
            description="Materi pilihan yang tersedia di perpustakaan digital you.learning."
          />
          <Link
            href="/library"
            className="flex-shrink-0 text-sm text-primary-500 font-semibold hover:underline"
          >
            Lihat semua →
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {featuredMaterials.map((material) => (
            <MaterialCard key={material.id} material={material} variant="featured" />
          ))}
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="bg-muted border-y border-border">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <SectionHeading
            label="Cara Menggunakan"
            title="Sederhana dan langsung ke intinya"
            description="Tidak perlu registrasi atau instalasi. Buka, baca, dan berkembang."
            align="center"
            className="mb-12"
          />
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[
              {
                step: "01",
                icon: (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                ),
                title: "Temukan Materi",
                desc: "Cari materi yang relevan dengan kebutuhan belajar atau peran Anda di perpustakaan.",
              },
              {
                step: "02",
                icon: (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                ),
                title: "Pelajari Detailnya",
                desc: "Baca ringkasan, highlight utama, dan estimasi waktu baca sebelum membuka PDF.",
              },
              {
                step: "03",
                icon: (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                ),
                title: "Baca & Terapkan",
                desc: "Buka PDF langsung di browser, baca dengan nyaman, dan terapkan ilmunya.",
              },
            ].map((item) => (
              <div key={item.step} className="bg-card rounded-2xl p-6 border border-border shadow-card">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-primary-500 text-white flex items-center justify-center">
                    {item.icon}
                  </div>
                  <div>
                    <span className="text-xs font-bold text-accent-500 uppercase tracking-wider">
                      Langkah {item.step}
                    </span>
                    <h3 className="mt-0.5 font-semibold text-foreground text-sm">{item.title}</h3>
                    <p className="mt-1.5 text-xs text-foreground/55 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA BAND */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <div className="bg-primary-500 rounded-2xl p-8 sm:p-12 relative overflow-hidden">
          <div className="absolute -top-12 -right-12 w-48 h-48 rounded-full bg-white/5" />
          <div className="absolute -bottom-8 left-8 w-32 h-32 rounded-full bg-accent-400/15" />
          <div className="relative flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-white leading-tight">
                Siap mulai belajar hari ini?
              </h2>
              <p className="mt-2 text-white/60 text-sm">
                Akses semua materi secara gratis. Tidak perlu akun atau registrasi.
              </p>
            </div>
            <Link
              href="/library"
              className="flex-shrink-0 inline-flex items-center gap-2 px-6 py-3 bg-accent-400 hover:bg-accent-500 text-primary-900 font-semibold rounded-xl transition-all text-sm hover:shadow-lg"
            >
              Buka Perpustakaan
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
