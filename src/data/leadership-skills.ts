export type LeadershipSkill = {
  id: string;
  code: string;
  title: string;
  subtitle: string;
  category: "leadership" | "managerial";
  phase: 1 | 2 | 3;
  pdfPath: string;
  slug: string;
};

export const LEADERSHIP_PHASES = [
  { phase: 1, label: "Foundation", duration: "Bulan 1–12", color: "#423ccf", desc: "Kenali dirimu sebelum memimpin" },
  { phase: 2, label: "Growth", duration: "Bulan 13–24", color: "#ebb000", desc: "Bertindak seperti leader sebelum punya jabatan" },
  { phase: 3, label: "Leadership", duration: "Bulan 25–42", color: "#02462E", desc: "Bangun dan kelola tim, bukan hanya diri sendiri" },
];

export const leadershipSkills: LeadershipSkill[] = [
  {
    id: "l1", code: "L1", title: "Self-Awareness",
    subtitle: "Kenali pola pikir, emosi, dan bias dirimu sebelum memimpin orang lain.",
    category: "leadership", phase: 1,
    slug: "l1-self-awareness",
    pdfPath: "/assets/pdfs/how-to-a-leadership/l1-self-awareness.pdf",
  },
  {
    id: "l2", code: "L2", title: "Communication",
    subtitle: "Sampaikan pesan dengan jelas, dengarkan secara aktif, dan sesuaikan gaya komunikasi.",
    category: "leadership", phase: 1,
    slug: "l2-communication",
    pdfPath: "/assets/pdfs/how-to-a-leadership/l2-communication.pdf",
  },
  {
    id: "l3", code: "L3", title: "Decision Making",
    subtitle: "Ambil keputusan yang terukur dan berani bahkan di tengah ketidakpastian.",
    category: "leadership", phase: 1,
    slug: "l3-decision-making",
    pdfPath: "/assets/pdfs/how-to-a-leadership/l3-decision-making.pdf",
  },
  {
    id: "l4", code: "L4", title: "Influence Without Authority",
    subtitle: "Gerakkan orang lain bukan karena jabatan, tapi karena kepercayaan dan relevansi.",
    category: "leadership", phase: 1,
    slug: "l4-influence-without-authority",
    pdfPath: "/assets/pdfs/how-to-a-leadership/l4-influence-without-authority.pdf",
  },
  {
    id: "l5", code: "L5", title: "Vision & Direction",
    subtitle: "Bangun gambaran masa depan yang jelas dan arahkan tim menuju tujuan bersama.",
    category: "leadership", phase: 2,
    slug: "l5-vision-direction",
    pdfPath: "/assets/pdfs/how-to-a-leadership/l5-vision-direction.pdf",
  },
  {
    id: "l6", code: "L6", title: "Emotional Intelligence",
    subtitle: "Kelola emosimu dan baca emosi orang lain untuk memimpin dengan empati.",
    category: "leadership", phase: 2,
    slug: "l6-emotional-intelligence",
    pdfPath: "/assets/pdfs/how-to-a-leadership/l6-emotional-intelligence.pdf",
  },
  {
    id: "l7", code: "L7", title: "Negotiation",
    subtitle: "Ciptakan kesepakatan yang menguntungkan semua pihak melalui dialog yang terstruktur.",
    category: "leadership", phase: 2,
    slug: "l7-negotiation",
    pdfPath: "/assets/pdfs/how-to-a-leadership/l7-negotiation.pdf",
  },
  {
    id: "l8", code: "L8", title: "Presentation & Public Speaking",
    subtitle: "Sampaikan ide dengan percaya diri dan buat audiens benar-benar mendengarkan.",
    category: "leadership", phase: 2,
    slug: "l8-presentation-public-speaking",
    pdfPath: "/assets/pdfs/how-to-a-leadership/l8-presentation-public-speaking.pdf",
  },
  {
    id: "m1", code: "M1", title: "Planning & Prioritization",
    subtitle: "Susun rencana yang realistis dan fokus pada hal yang benar-benar penting.",
    category: "managerial", phase: 1,
    slug: "m1-planning-prioritization",
    pdfPath: "/assets/pdfs/how-to-a-leadership/m1-planning-prioritization.pdf",
  },
  {
    id: "m2", code: "M2", title: "Delegation",
    subtitle: "Percayakan tugas kepada orang yang tepat agar kamu bisa fokus pada hal strategis.",
    category: "managerial", phase: 1,
    slug: "m2-delegation",
    pdfPath: "/assets/pdfs/how-to-a-leadership/m2-delegation.pdf",
  },
  {
    id: "m3", code: "M3", title: "Performance Management",
    subtitle: "Pantau, ukur, dan tingkatkan kinerja tim secara konsisten dan adil.",
    category: "managerial", phase: 2,
    slug: "m3-performance-management",
    pdfPath: "/assets/pdfs/how-to-a-leadership/m3-performance-management.pdf",
  },
  {
    id: "m4", code: "M4", title: "Meeting & Facilitation",
    subtitle: "Pimpin rapat yang produktif dan jadikan setiap diskusi menghasilkan keputusan nyata.",
    category: "managerial", phase: 2,
    slug: "m4-meeting-facilitation",
    pdfPath: "/assets/pdfs/how-to-a-leadership/m4-meeting-facilitation.pdf",
  },
  {
    id: "m5", code: "M5", title: "Project Management",
    subtitle: "Kelola proyek dari awal hingga selesai: scope, waktu, tim, dan risiko.",
    category: "managerial", phase: 2,
    slug: "m5-project-management",
    pdfPath: "/assets/pdfs/how-to-a-leadership/m5-project-management.pdf",
  },
  {
    id: "m6", code: "M6", title: "Reporting & Accountability",
    subtitle: "Buat laporan yang bermakna dan bangun budaya tanggung jawab di dalam tim.",
    category: "managerial", phase: 3,
    slug: "m6-reporting-accountability",
    pdfPath: "/assets/pdfs/how-to-a-leadership/m6-reporting-accountability.pdf",
  },
  {
    id: "m7", code: "M7", title: "Problem Solving & Critical Thinking",
    subtitle: "Analisis masalah secara sistematis dan temukan solusi yang tepat sasaran.",
    category: "managerial", phase: 3,
    slug: "m7-problem-solving",
    pdfPath: "/assets/pdfs/how-to-a-leadership/m7-problem-solving.pdf",
  },
  {
    id: "m8", code: "M8", title: "Time Management & Productivity",
    subtitle: "Kuasai waktumu sendiri sebelum kamu bisa mengatur waktu dan energi tim.",
    category: "managerial", phase: 3,
    slug: "m8-time-management",
    pdfPath: "/assets/pdfs/how-to-a-leadership/m8-time-management.pdf",
  },
];

export function getSkillBySlug(slug: string): LeadershipSkill | undefined {
  return leadershipSkills.find((s) => s.slug === slug);
}

export function getAdjacentSkills(slug: string): { prev: LeadershipSkill | null; next: LeadershipSkill | null } {
  const idx = leadershipSkills.findIndex((s) => s.slug === slug);
  return {
    prev: idx > 0 ? leadershipSkills[idx - 1] : null,
    next: idx < leadershipSkills.length - 1 ? leadershipSkills[idx + 1] : null,
  };
}
