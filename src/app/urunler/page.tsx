"use client";

import { useState, useMemo } from "react";
import { useSearchParams } from "next/navigation";
import { SlidersHorizontal, ChevronDown, X } from "lucide-react";
import ProductCard from "@/components/ProductCard";
import { categories } from "@/lib/products";
import { useProducts } from "@/lib/productStore";
import { Suspense } from "react";

const sortOptions = [
  { value: "default", label: "Önerilen" },
  { value: "price-asc", label: "Fiyat: Düşükten Yükseğe" },
  { value: "price-desc", label: "Fiyat: Yüksekten Düşüğe" },
  { value: "rating", label: "En Çok Değerlendirilen" },
  { value: "new", label: "Yeni Gelenler" },
];

function ProductsContent() {
  const searchParams = useSearchParams();
  const paramKategori = searchParams.get("kategori") || "tumu";
  const products = useProducts();

  const [selectedCategory, setSelectedCategory] = useState(paramKategori);
  const [sortBy, setSortBy] = useState("default");
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 2000]);
  const [filterOpen, setFilterOpen] = useState(false);

  const filtered = useMemo(() => {
    let list = [...products];

    if (selectedCategory !== "tumu") {
      list = list.filter((p) => p.category === selectedCategory);
    }

    list = list.filter(
      (p) => p.price >= priceRange[0] && p.price <= priceRange[1]
    );

    switch (sortBy) {
      case "price-asc":
        list.sort((a, b) => a.price - b.price);
        break;
      case "price-desc":
        list.sort((a, b) => b.price - a.price);
        break;
      case "rating":
        list.sort((a, b) => b.rating - a.rating || b.reviewCount - a.reviewCount);
        break;
      case "new":
        list = list.filter((p) => p.badge === "Yeni").concat(list.filter((p) => p.badge !== "Yeni"));
        break;
    }

    return list;
  }, [selectedCategory, sortBy, priceRange]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">
          {selectedCategory === "tumu"
            ? "Tüm Ürünler"
            : categories.find((c) => c.id === selectedCategory)?.label || "Ürünler"}
        </h1>
        <p className="text-gray-500 mt-1">{filtered.length} ürün bulundu</p>
      </div>

      {/* Category pills */}
      <div className="flex gap-2 flex-wrap mb-6">
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setSelectedCategory(cat.id)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              selectedCategory === cat.id
                ? "bg-rose-500 text-white"
                : "bg-gray-100 text-gray-600 hover:bg-rose-50 hover:text-rose-500"
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      <div className="flex flex-col lg:flex-row gap-8">
        {/* Sidebar filters */}
        <aside className={`lg:w-56 flex-shrink-0 ${filterOpen ? "block" : "hidden lg:block"}`}>
          <div className="bg-white rounded-2xl border border-gray-100 p-5 sticky top-24">
            <h3 className="font-semibold text-gray-900 mb-4">Filtreler</h3>

            {/* Price filter */}
            <div className="mb-6">
              <h4 className="text-sm font-medium text-gray-700 mb-3">Fiyat Aralığı</h4>
              <div className="flex items-center gap-2 text-sm text-gray-600 mb-2">
                <span>{priceRange[0]} ₺</span>
                <span>—</span>
                <span>{priceRange[1]} ₺</span>
              </div>
              <input
                type="range"
                min={0}
                max={2000}
                step={50}
                value={priceRange[1]}
                onChange={(e) => setPriceRange([priceRange[0], +e.target.value])}
                className="w-full accent-rose-500"
              />
            </div>

            {/* Clear */}
            <button
              onClick={() => {
                setSelectedCategory("tumu");
                setSortBy("default");
                setPriceRange([0, 2000]);
              }}
              className="flex items-center gap-1.5 text-xs text-gray-400 hover:text-rose-500 transition-colors"
            >
              <X size={12} /> Filtreleri Temizle
            </button>
          </div>
        </aside>

        {/* Main content */}
        <div className="flex-1">
          {/* Toolbar */}
          <div className="flex items-center justify-between mb-6">
            <button
              onClick={() => setFilterOpen(!filterOpen)}
              className="lg:hidden flex items-center gap-2 px-4 py-2 border border-gray-200 rounded-full text-sm font-medium text-gray-600 hover:border-rose-400 hover:text-rose-500 transition-colors"
            >
              <SlidersHorizontal size={15} /> Filtrele
            </button>

            <div className="relative ml-auto">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="appearance-none pr-8 pl-4 py-2 border border-gray-200 rounded-full text-sm font-medium text-gray-700 focus:outline-none focus:border-rose-400 cursor-pointer bg-white"
              >
                {sortOptions.map((o) => (
                  <option key={o.value} value={o.value}>
                    {o.label}
                  </option>
                ))}
              </select>
              <ChevronDown size={14} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
            </div>
          </div>

          {filtered.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-gray-400 text-lg">Bu kriterlere uygun ürün bulunamadı.</p>
              <button
                onClick={() => { setSelectedCategory("tumu"); setPriceRange([0, 2000]); }}
                className="mt-4 text-rose-500 font-medium hover:underline"
              >
                Filtreleri temizle
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-5">
              {filtered.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default function UrunlerPage() {
  return (
    <Suspense fallback={<div className="flex items-center justify-center py-32 text-gray-400">Yükleniyor...</div>}>
      <ProductsContent />
    </Suspense>
  );
}
