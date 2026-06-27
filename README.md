# you.learning

> Platform E-Library & E-Learning yang modern, minimal, dan siap produksi.

Built with Next.js 15, TypeScript, dan Tailwind CSS. Deployment-ready untuk Vercel.

---

## Tech Stack

- **Framework:** Next.js 15 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS 3
- **Runtime:** Node.js 20+
- **Deployment:** Vercel (recommended)

---

## Prerequisites

- Node.js >= 20.x
- npm >= 9.x (atau pnpm / yarn)

---

## 1. Install Dependencies

```bash
# Masuk ke folder project
cd you-learning

# Install semua dependencies
npm install
```

---

## 2. Jalankan di Lokal (Development)

```bash
npm run dev
```

Buka browser di: [http://localhost:3000](http://localhost:3000)

Hot reload aktif otomatis saat ada perubahan file.

---

## 3. Build untuk Produksi

```bash
npm run build
```

Jika build berhasil, jalankan server produksi lokal:

```bash
npm start
```

---

## 4. Deploy ke Vercel

### Opsi A — Via Vercel CLI

```bash
# Install Vercel CLI (jika belum ada)
npm install -g vercel

# Login ke akun Vercel
vercel login

# Deploy langsung dari folder project
vercel --prod
```

### Opsi B — Via GitHub + Vercel Dashboard

1. Push project ke GitHub repository
2. Buka [vercel.com](https://vercel.com) → **Add New Project**
3. Import repository GitHub Anda
4. Vercel otomatis detect Next.js — klik **Deploy**
5. Done. Project Anda live!

### Catatan Penting untuk Vercel

- File PDF disimpan di `public/assets/pdfs/` dan otomatis tersedia sebagai static asset
- Vercel melayani file dari `public/` tanpa konfigurasi tambahan
- Jika file PDF besar (> 100 MB), pertimbangkan menyimpan di Vercel Blob Storage atau CDN eksternal

---

## 5. Menambahkan Materi PDF Baru

### Langkah 1 — Tambahkan file PDF

Letakkan file PDF baru ke:

```
public/assets/pdfs/nama-file-anda.pdf
```

Gunakan penamaan lowercase dengan tanda hubung:
```
✅ panduan-kepemimpinan-2026.pdf
❌ Panduan Kepemimpinan 2026.pdf
```

### Langkah 2 — Tambahkan metadata di `src/data/materials.ts`

Buka file `src/data/materials.ts` dan tambahkan entri baru di array `materials`:

```typescript
{
  id: "3",                                         // Unique ID (increment)
  slug: "panduan-kepemimpinan-2026",               // URL slug, harus unik
  title: "Panduan Kepemimpinan 2026",              // Judul yang ditampilkan
  subtitle: "Subtitle opsional",                   // Opsional
  category: "Kepemimpinan",                        // Salah satu dari CATEGORIES
  categoryColor: "green",                          // "green" | "yellow" | "blue" | "purple"
  description: "Deskripsi singkat materi ini...",  // 1-2 kalimat
  summary: "Ringkasan lebih panjang...",           // Paragraf ringkasan
  highlights: [                                    // 4-6 poin highlight
    "Poin pertama yang akan dipelajari",
    "Poin kedua",
    // ...
  ],
  readingTimeMinutes: 30,                          // Estimasi waktu baca
  pdfPath: "/assets/pdfs/panduan-kepemimpinan-2026.pdf", // Path ke PDF
  coverGradient: "from-primary-500 to-primary-700",       // Gradient cover
  tags: ["kepemimpinan", "panduan", "2026"],              // Tag pencarian
  publishedAt: "2026-01-01",                              // Tanggal publikasi
},
```

### Langkah 3 — Update CATEGORIES (jika perlu)

Jika kategori baru belum ada, tambahkan ke array `CATEGORIES` di file yang sama:

```typescript
export const CATEGORIES = [
  "Semua",
  "Kepemimpinan",
  "Manajemen",
  "Pengembangan Diri",
  "Strategi Bisnis",
  "Kategori Baru Anda",  // ← tambahkan di sini
];
```

### Langkah 4 — Deploy

```bash
# Build dan deploy
npm run build
vercel --prod
```

---

## Struktur Folder

```
you-learning/
├── public/
│   └── assets/
│       └── pdfs/                    ← File PDF disimpan di sini
├── src/
│   ├── app/
│   │   ├── layout.tsx               ← Root layout (Navbar + Footer)
│   │   ├── page.tsx                 ← Homepage
│   │   ├── globals.css              ← Global styles
│   │   ├── not-found.tsx            ← 404 page
│   │   ├── library/
│   │   │   ├── page.tsx             ← Halaman daftar materi
│   │   │   └── [slug]/
│   │   │       └── page.tsx         ← Detail materi
│   │   └── read/
│   │       └── [slug]/
│   │           └── page.tsx         ← PDF reader page
│   ├── components/
│   │   ├── BrandLogo.tsx            ← Logo wordmark
│   │   ├── CategoryBadge.tsx        ← Badge kategori
│   │   ├── CategoryFilter.tsx       ← Filter tombol kategori
│   │   ├── EmptyState.tsx           ← State kosong
│   │   ├── Footer.tsx               ← Footer global
│   │   ├── MaterialCard.tsx         ← Kartu materi
│   │   ├── Navbar.tsx               ← Navigasi global
│   │   ├── PDFViewer.tsx            ← Komponen iframe PDF
│   │   ├── SearchBar.tsx            ← Input pencarian
│   │   └── SectionHeading.tsx       ← Heading section
│   └── data/
│       └── materials.ts             ← Semua metadata materi
├── package.json
├── tailwind.config.ts
├── tsconfig.json
└── next.config.ts
```

---

## Color System

| Token | Hex | Penggunaan |
|-------|-----|------------|
| Primary | `#02462E` | Navbar, CTA, headings |
| Accent | `#FEC700` | Highlight, badge, CTA sekunder |
| Background | `#FAFAF8` | Latar halaman |
| Card | `#FFFFFF` | Background kartu |
| Muted | `#F5F5F2` | Section background |
| Border | `#E5E7E4` | Garis pembatas |
| Foreground | `#0F1A14` | Teks utama |

---

## Roadmap (Coming Soon)

- [ ] Authentication & user accounts
- [ ] Bookmark / save for later (sudah ada foundation via localStorage)
- [ ] Progress tracking per materi
- [ ] Admin panel untuk upload materi
- [ ] Quiz / assessment setelah membaca
- [ ] Notifikasi materi baru
- [ ] Dark mode

---

*built with Claude*
