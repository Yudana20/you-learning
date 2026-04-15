import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: {
    default: "you.learning — Platform E-Learning & E-Library",
    template: "%s | you.learning",
  },
  description:
    "Platform pembelajaran digital yang membantu Anda mengakses materi berkualitas dan mengembangkan kompetensi secara terstruktur.",
  keywords: ["e-learning", "e-library", "pembelajaran", "kepemimpinan", "manajemen"],
  authors: [{ name: "you.learning" }],
  creator: "you.learning",
  manifest: "/manifest.json",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "you.learning",
  },
  formatDetection: {
    telephone: false,
  },
  openGraph: {
    type: "website",
    siteName: "you.learning",
    title: "you.learning — Platform E-Learning & E-Library",
    description:
      "Platform pembelajaran digital yang membantu Anda mengakses materi berkualitas dan mengembangkan kompetensi secara terstruktur.",
  },
  twitter: {
    card: "summary_large_image",
    title: "you.learning",
    description: "Platform pembelajaran digital yang modern dan terstruktur.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <head>
        <meta name="theme-color" content="#02462E" />
        <link rel="apple-touch-icon" href="/icons/icon-192.png" />
      </head>
      <body className="min-h-screen flex flex-col bg-background">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
