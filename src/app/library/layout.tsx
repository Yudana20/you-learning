import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Perpustakaan Digital",
  description:
    "Jelajahi semua materi pembelajaran yang tersedia di you.learning. Temukan materi kepemimpinan, manajemen, dan pengembangan diri.",
};

export default function LibraryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
