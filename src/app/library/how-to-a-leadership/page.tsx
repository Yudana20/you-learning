import type { Metadata } from "next";
import Link from "next/link";
import MindMap from "@/components/MindMap";
import { leadershipSkills, LEADERSHIP_PHASES } from "@/data/leadership-skills";

export const metadata: Metadata = {
  title: "How to a Leadership — Mind Map Interaktif",
  description:
    "Jelajahi 16 skill modul kepemimpinan dan manajerial melalui mind map interaktif. Klik skill untuk langsung membaca modulnya.",
};

const KERANGKA = [
  { label: "00", title: "Pembuka", desc: "Kata Pengantar · Tentang Buku · Cara Menggunakannya", page: 3 },
  { label: "01", title: "Mind Map: Peta Besar", desc: "Visual seluruh konsep buku dalam satu pandang", page: 4 },
  { label: "02", title: "Fondasi: Mengapa Leadership?", desc: "Definisi · Leadership vs Management · Self-Assessment", page: 5 },
  { label: "03", title: "Roadmap: 3 Fase", desc: "Foundation → Growth → Leadership · Indikator Naik Fase", page: 6 },
  { label: "06", title: "Sistem Belajar & Dokumentasi", desc: "Practice Log · Evidence Portfolio · Feedback · Mentor Sessions", page: null },
  { label: "07", title: "Sumber Belajar", desc: "Priority Reading List · TED Talks · Referensi Online", page: null },
  { label: "08", title: "Penutup & Komitmen", desc: "30-Day Commitment · Catatan Akhir", page: null },
];

const FULL_PDF = "/assets/pdfs/how-to-a-leadership/how-to-a-leadership-full.pdf";

export default function HowToLeadershipPage() {
  return (
    <main className="min-h-screen bg-[#f8fafc]">
      {/* Hero header */}
      <section className="bg-[#151345] text-white py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <Link
            href="/library"
            className="inline-flex items-center gap-1.5 text-sm text-white/50 hover:text-white/80 transition-colors mb-6"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Kembali ke Perpustakaan
          </Link>

          <div className="flex items-start justify-between gap-6 flex-wrap">
            <div>
              <div className="inline-block px-3 py-1 bg-[#423ccf] rounded-full text-xs font-bold tracking-wide mb-4">
                KEPEMIMPINAN
              </div>
              <h1 className="text-3xl sm:text-4xl font-black mb-3 leading-tight">
                How to a Leadership
              </h1>
              <p className="text-white/70 text-base max-w-xl leading-relaxed">
                Panduan personal pengembangan kepemimpinan dengan 16 skill modul interaktif.
                Klik node di mind map untuk langsung membaca modul skill tersebut.
              </p>
              {/* Full PDF button */}
              <div className="flex flex-wrap gap-3 mt-5">
                <a
                  href={FULL_PDF}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#ebb000] hover:bg-[#d4a000] text-[#151345] font-bold rounded-xl text-sm transition-colors"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                  Baca Buku Lengkap (202 hal)
                </a>
                <a
                  href={FULL_PDF}
                  download
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-xl text-sm transition-colors"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                  </svg>
                  Unduh PDF
                </a>
              </div>
            </div>

            {/* Stats */}
            <div className="flex gap-6 flex-shrink-0">
              {[
                { value: "16", label: "Skill Modul" },
                { value: "3", label: "Fase" },
                { value: "202", label: "Halaman" },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="text-3xl font-black text-[#ebb000]">{stat.value}</div>
                  <div className="text-xs text-white/50 mt-0.5">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Phase pills */}
          <div className="flex flex-wrap gap-3 mt-6">
            {LEADERSHIP_PHASES.map((p) => (
              <div
                key={p.phase}
                className="flex items-center gap-2 bg-white/10 rounded-full px-3 py-1.5"
              >
                <span className="w-2.5 h-2.5 rounded-full flex-shrink-0" style={{ background: p.color }} />
                <span className="text-xs font-semibold text-white/80">Fase {p.phase}: {p.label}</span>
                <span className="text-xs text-white/40">{p.duration}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mind Map Section */}
      <section className="max-w-5xl mx-auto px-4 py-10">
        <div className="text-center mb-8">
          <h2 className="text-xl font-bold text-[#151345] mb-2">Peta Skill Interaktif</h2>
          <p className="text-sm text-gray-500">Hover untuk preview · Klik node untuk membaca modul</p>
        </div>
        <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6">
          <MindMap />
        </div>
      </section>

      {/* Kerangka Buku */}
      <section className="max-w-5xl mx-auto px-4 pb-8">
        <div className="flex items-center justify-between mb-5">
          <h2 className="text-lg font-bold text-[#151345]">Kerangka Buku</h2>
          <a
            href={FULL_PDF}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-[#423ccf] hover:underline font-medium"
          >
            Baca semua →
          </a>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {KERANGKA.map((item) => (
            <a
              key={item.label}
              href={FULL_PDF}
              target="_blank"
              rel="noopener noreferrer"
              className="flex gap-3 p-4 bg-white rounded-xl border border-gray-100 hover:border-[#423ccf] hover:shadow-sm transition-all group"
            >
              <div className="w-9 h-9 rounded-lg bg-[#f1f5f9] flex items-center justify-center flex-shrink-0 group-hover:bg-[#151345] transition-colors">
                <span className="text-xs font-black text-gray-400 group-hover:text-white transition-colors">{item.label}</span>
              </div>
              <div className="min-w-0">
                <div className="text-sm font-semibold text-gray-800 leading-tight mb-0.5">{item.title}</div>
                <div className="text-xs text-gray-400 leading-relaxed">{item.desc}</div>
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* 16 Skill Modul */}
      <section className="max-w-5xl mx-auto px-4 pb-10">
        <h2 className="text-lg font-bold text-[#151345] mb-5">16 Skill Modul</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {/* Leadership Skills */}
          <div>
            <h3 className="text-sm font-bold text-[#423ccf] mb-3 flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#423ccf] inline-block" />
              Leadership Skills (L1–L8)
            </h3>
            <div className="space-y-2">
              {leadershipSkills.filter((s) => s.category === "leadership").map((skill) => (
                <Link
                  key={skill.id}
                  href={`/read/how-to-a-leadership/${skill.slug}`}
                  className="flex items-center gap-3 p-3 rounded-xl border border-gray-100 bg-white hover:border-[#423ccf] hover:shadow-sm transition-all group"
                >
                  <div className="w-9 h-9 rounded-lg bg-[#e0e7ff] flex items-center justify-center flex-shrink-0 group-hover:bg-[#423ccf] transition-colors">
                    <span className="text-xs font-black text-[#423ccf] group-hover:text-white transition-colors">{skill.code}</span>
                  </div>
                  <div className="min-w-0">
                    <div className="text-sm font-semibold text-gray-800 truncate">{skill.title}</div>
                    <div className="text-xs text-gray-400 truncate">{skill.subtitle.slice(0, 50)}…</div>
                  </div>
                  <svg className="w-4 h-4 text-gray-300 group-hover:text-[#423ccf] flex-shrink-0 ml-auto transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              ))}
            </div>
          </div>

          {/* Managerial Skills */}
          <div>
            <h3 className="text-sm font-bold text-[#92400e] mb-3 flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#ebb000] inline-block" />
              Managerial Skills (M1–M8)
            </h3>
            <div className="space-y-2">
              {leadershipSkills.filter((s) => s.category === "managerial").map((skill) => (
                <Link
                  key={skill.id}
                  href={`/read/how-to-a-leadership/${skill.slug}`}
                  className="flex items-center gap-3 p-3 rounded-xl border border-gray-100 bg-white hover:border-[#ebb000] hover:shadow-sm transition-all group"
                >
                  <div className="w-9 h-9 rounded-lg bg-[#fef9c3] flex items-center justify-center flex-shrink-0 group-hover:bg-[#ebb000] transition-colors">
                    <span className="text-xs font-black text-[#92400e] group-hover:text-white transition-colors">{skill.code}</span>
                  </div>
                  <div className="min-w-0">
                    <div className="text-sm font-semibold text-gray-800 truncate">{skill.title}</div>
                    <div className="text-xs text-gray-400 truncate">{skill.subtitle.slice(0, 50)}…</div>
                  </div>
                  <svg className="w-4 h-4 text-gray-300 group-hover:text-[#ebb000] flex-shrink-0 ml-auto transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <div className="h-8" />
    </main>
  );
}
