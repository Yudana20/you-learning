import type { Metadata } from "next";
import Link from "next/link";
import MindMap from "@/components/MindMap";
import { leadershipSkills, LEADERSHIP_PHASES } from "@/data/leadership-skills";

export const metadata: Metadata = {
  title: "How to a Leadership — Mind Map Interaktif",
  description:
    "Jelajahi 16 skill modul kepemimpinan dan manajerial melalui mind map interaktif. Klik skill untuk langsung membaca modulnya.",
};

export default function HowToLeadershipPage() {
  const lCount = leadershipSkills.filter((s) => s.category === "leadership").length;
  const mCount = leadershipSkills.filter((s) => s.category === "managerial").length;

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
            </div>

            {/* Stats */}
            <div className="flex gap-4 flex-shrink-0">
              {[
                { value: "16", label: "Skill Modul" },
                { value: "3", label: "Fase" },
                { value: "202", label: "Halaman" },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="text-2xl font-black text-[#ebb000]">{stat.value}</div>
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
                <span
                  className="w-2.5 h-2.5 rounded-full flex-shrink-0"
                  style={{ background: p.color }}
                />
                <span className="text-xs font-semibold text-white/80">
                  Fase {p.phase}: {p.label}
                </span>
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
          <p className="text-sm text-gray-500">
            Hover untuk preview · Klik node untuk membaca modul
          </p>
        </div>

        <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6">
          <MindMap />
        </div>
      </section>

      {/* Skill list: Leadership */}
      <section className="max-w-5xl mx-auto px-4 pb-6">
        <div className="grid md:grid-cols-2 gap-6">
          {/* Leadership Skills */}
          <div>
            <h3 className="text-base font-bold text-[#423ccf] mb-4 flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-[#423ccf] inline-block" />
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
            <h3 className="text-base font-bold text-[#92400e] mb-4 flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-[#ebb000] inline-block" />
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

      {/* Bottom spacer */}
      <div className="h-12" />
    </main>
  );
}
