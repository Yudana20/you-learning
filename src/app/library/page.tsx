"use client";

import { useState, useMemo } from "react";
import { materials, searchMaterials, getMaterialsByCategory } from "@/data/materials";
import MaterialCard from "@/components/MaterialCard";
import SearchBar from "@/components/SearchBar";
import CategoryFilter from "@/components/CategoryFilter";
import SectionHeading from "@/components/SectionHeading";
import EmptyState from "@/components/EmptyState";
import Link from "next/link";

export default function LibraryPage() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("Semua");

  const filtered = useMemo(() => {
    let results = query ? searchMaterials(query) : materials;
    if (category !== "Semua") {
      results = results.filter((m) => m.category === category);
    }
    return results;
  }, [query, category]);

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14">
      {/* Header */}
      <div className="mb-8">
        <SectionHeading
          label="Perpustakaan Digital"
          title="Semua Materi Pembelajaran"
          description="Temukan dan pelajari materi yang relevan untuk pengembangan kompetensi Anda."
        />
      </div>

      {/* Filters */}
      <div className="flex flex-col sm:flex-row gap-3 mb-8">
        <div className="w-full sm:max-w-xs">
          <SearchBar
            value={query}
            onChange={(v) => {
              setQuery(v);
            }}
            placeholder="Cari judul, kategori, tag..."
          />
        </div>
        <CategoryFilter
          selected={category}
          onChange={(c) => {
            setCategory(c);
          }}
        />
      </div>

      {/* Results count */}
      <div className="mb-5 flex items-center justify-between">
        <p className="text-sm text-foreground/50">
          {filtered.length} materi{filtered.length !== 1 ? "" : ""} ditemukan
          {query ? ` untuk "${query}"` : ""}
          {category !== "Semua" ? ` di ${category}` : ""}
        </p>
        {(query || category !== "Semua") && (
          <button
            onClick={() => {
              setQuery("");
              setCategory("Semua");
            }}
            className="text-sm text-primary-500 hover:underline font-medium"
          >
            Reset filter
          </button>
        )}
      </div>

      {/* Grid or Empty */}
      {filtered.length === 0 ? (
        <EmptyState
          title="Materi tidak ditemukan"
          description={`Tidak ada materi yang cocok dengan "${query}". Coba kata kunci yang berbeda.`}
          action={
            <button
              onClick={() => {
                setQuery("");
                setCategory("Semua");
              }}
              className="px-4 py-2 bg-primary-500 text-white rounded-lg text-sm font-medium hover:bg-primary-600 transition-colors"
            >
              Lihat semua materi
            </button>
          }
        />
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {filtered.map((material) => (
            <MaterialCard key={material.id} material={material} />
          ))}
        </div>
      )}

      {/* Add more CTA - for admins later */}
      {filtered.length > 0 && (
        <div className="mt-12 text-center p-8 bg-muted rounded-2xl border border-border">
          <p className="text-sm text-foreground/50">
            Menampilkan {filtered.length} dari {materials.length} materi
          </p>
          <p className="text-xs text-foreground/40 mt-1">
            Lebih banyak materi akan ditambahkan secara berkala
          </p>
        </div>
      )}
    </div>
  );
}
