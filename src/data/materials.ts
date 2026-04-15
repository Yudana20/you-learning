export type Material = {
  id: string;
  slug: string;
  title: string;
  subtitle?: string;
  category: string;
  categoryColor: "green" | "yellow" | "blue" | "purple";
  description: string;
  summary: string;
  highlights: string[];
  readingTimeMinutes: number;
  pdfPath: string;
  coverImage?: string;
  coverGradient: string;
  tags: string[];
  publishedAt: string;
};

export const CATEGORIES = [
  "Semua",
  "Kepemimpinan",
  "Manajemen",
  "Pengembangan Diri",
  "Strategi Bisnis",
  "Teknologi & Web",
  "Desain & Kreatif",
];

export const materials: Material[] = [
  {
    id: "1",
    slug: "materi-pembelajaran-manajemen-kepemimpinan-2026",
    title: "Materi Pembelajaran Manajemen Kepemimpinan",
    subtitle: "Panduan Komprehensif untuk Pemimpin Modern",
    category: "Kepemimpinan",
    categoryColor: "green",
    description:
      "Materi pembelajaran lengkap yang membahas konsep dan praktik manajemen kepemimpinan untuk konteks organisasi modern di tahun 2026. Dirancang untuk membangun fondasi kepemimpinan yang kuat dan terukur.",
    summary:
      "Dokumen ini menyajikan materi pembelajaran yang komprehensif tentang manajemen kepemimpinan, mencakup teori dan praktik terkini yang relevan untuk pemimpin di berbagai level organisasi. Konten dirancang dengan pendekatan berbasis kompetensi yang dapat langsung diterapkan di lingkungan kerja.",
    highlights: [
      "Prinsip dasar kepemimpinan efektif dan gaya kepemimpinan adaptif",
      "Teknik pengambilan keputusan strategis berbasis data",
      "Manajemen tim lintas generasi dan divisi",
      "Komunikasi kepemimpinan yang berdampak tinggi",
      "Membangun budaya organisasi yang produktif dan inklusif",
      "Framework evaluasi kinerja dan pengembangan talenta",
    ],
    readingTimeMinutes: 45,
    pdfPath: "/assets/pdfs/materi-pembelajaran-manajemen-kepemimpinan-2026.pdf",
    coverImage: "/assets/covers/Leadership.jpg",
    coverGradient: "from-primary-500 to-primary-700",
    tags: ["kepemimpinan", "manajemen", "organisasi", "2026"],
    publishedAt: "2026-01-01",
  },
  {
    id: "2",
    slug: "playbook-peserta-manajemen-kepemimpinan-2026",
    title: "Playbook Peserta Manajemen Kepemimpinan",
    subtitle: "Panduan Praktis & Lembar Kerja Peserta",
    category: "Manajemen",
    categoryColor: "yellow",
    description:
      "Buku panduan praktis untuk peserta program manajemen kepemimpinan 2026. Berisi lembar kerja, latihan refleksi, dan alat bantu pengembangan diri yang dapat langsung digunakan selama dan setelah program.",
    summary:
      "Playbook ini adalah pendamping praktis dari program manajemen kepemimpinan, dirancang untuk memandu peserta melalui serangkaian aktivitas pembelajaran yang terstruktur. Setiap bagian menyediakan alat refleksi, lembar kerja interaktif, dan panduan aksi yang mendorong penerapan langsung di lapangan.",
    highlights: [
      "Lembar kerja self-assessment kepemimpinan yang terstruktur",
      "Template rencana aksi pengembangan diri (90 hari)",
      "Panduan sesi diskusi dan studi kasus kelompok",
      "Alat refleksi harian dan mingguan untuk pemimpin",
      "Checklist implementasi keterampilan kepemimpinan",
      "Framework feedback dan coaching rekan sejawat",
    ],
    readingTimeMinutes: 35,
    pdfPath:
      "/assets/pdfs/playbook-peserta-manajemen-kepemimpinan-2026.pdf",
    coverImage: "/assets/covers/Manajemen.jpeg",
    coverGradient: "from-accent-400 to-amber-500",
    tags: ["playbook", "peserta", "lembar kerja", "praktik"],
    publishedAt: "2026-01-01",
  },
  {
    id: "3",
    slug: "ebook-wordpress-101",
    title: "E-book WordPress 101",
    subtitle: "Panduan Lengkap Membangun Website dengan WordPress",
    category: "Teknologi & Web",
    categoryColor: "blue",
    description:
      "Panduan komprehensif untuk memulai dan mengelola website menggunakan WordPress. Dari instalasi dasar hingga konfigurasi lanjutan, e-book ini membekali pembaca dengan keterampilan praktis membangun website profesional tanpa perlu coding.",
    summary:
      "E-book ini membahas seluruh aspek penggunaan WordPress sebagai platform website, mulai dari konsep dasar CMS, instalasi, manajemen konten, tema dan plugin, hingga optimasi performa dan keamanan. Cocok untuk pemula maupun praktisi yang ingin memperdalam kemampuan WordPress mereka secara terstruktur.",
    highlights: [
      "Pengenalan WordPress dan ekosistem CMS modern",
      "Panduan instalasi dan konfigurasi hosting WordPress",
      "Manajemen konten: halaman, posting, media, dan kategori",
      "Pemilihan dan kustomisasi tema WordPress",
      "Plugin esensial untuk fungsionalitas website bisnis",
      "Optimasi SEO, performa, dan keamanan WordPress",
    ],
    readingTimeMinutes: 60,
    pdfPath: "/assets/pdfs/ebook-wordpress-101.pdf",
    coverImage: "/assets/covers/E-book_Wordpress.jpg",
    coverGradient: "from-primary-500 to-primary-700",
    tags: ["wordpress", "website", "cms", "web development", "digital"],
    publishedAt: "2026-01-01",
  },
  {
    id: "4",
    slug: "framework-design-ui-untuk-pitching",
    title: "Framework Design UI untuk Pitching",
    subtitle: "Panduan Desain Antarmuka yang Memenangkan Presentasi",
    category: "Desain & Kreatif",
    categoryColor: "purple",
    description:
      "Framework praktis untuk merancang tampilan antarmuka (UI) yang persuasif dan profesional dalam konteks pitching bisnis dan presentasi klien. Panduan ini membantu desainer dan pebisnis mengkomunikasikan ide lewat visual yang kuat.",
    summary:
      "Dokumen ini menyajikan kerangka kerja terstruktur untuk membangun desain UI yang efektif dalam skenario pitching. Mencakup prinsip visual hierarchy, pemilihan palet warna, tipografi, hingga penyusunan alur presentasi yang mampu meyakinkan audiens dan klien secara visual.",
    highlights: [
      "Prinsip visual hierarchy dalam desain UI untuk presentasi",
      "Pemilihan palet warna dan tipografi yang komunikatif",
      "Framework menyusun alur desain yang bercerita (storytelling)",
      "Template dan komponen UI siap pakai untuk pitching",
      "Teknik menyesuaikan desain dengan ekspektasi klien",
      "Checklist review desain sebelum presentasi final",
    ],
    readingTimeMinutes: 30,
    pdfPath: "/assets/pdfs/framework-design-ui-untuk-pitching.pdf",
    coverImage: "/assets/covers/Framework_UI_Design.jpeg",
    coverGradient: "from-accent-400 to-amber-500",
    tags: ["ui design", "pitching", "presentasi", "desain", "kreatif"],
    publishedAt: "2026-01-01",
  },
];

export function getMaterialBySlug(slug: string): Material | undefined {
  return materials.find((m) => m.slug === slug);
}

export function getMaterialsByCategory(category: string): Material[] {
  if (category === "Semua") return materials;
  return materials.filter((m) => m.category === category);
}

export function searchMaterials(query: string): Material[] {
  const q = query.toLowerCase().trim();
  if (!q) return materials;
  return materials.filter(
    (m) =>
      m.title.toLowerCase().includes(q) ||
      m.description.toLowerCase().includes(q) ||
      m.category.toLowerCase().includes(q) ||
      m.tags.some((t) => t.toLowerCase().includes(q))
  );
}
