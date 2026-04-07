import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Truck, RotateCcw, Shield, Headphones } from "lucide-react";
import ProductCard from "@/components/ProductCard";
import { getFeaturedProducts, categories, products } from "@/lib/products";

export default function HomePage() {
  const featured = getFeaturedProducts();
  const newArrivals = products.filter((p) => p.badge === "Yeni");

  return (
    <>
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-rose-50 via-white to-pink-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center py-16 lg:py-24">
            <div className="text-center lg:text-left">
              <span className="inline-block px-4 py-1.5 bg-rose-100 text-rose-600 text-sm font-semibold rounded-full mb-5">
                Yeni Sezon 2025
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Tarzını{" "}
                <span className="text-rose-500">Keşfet,</span>
                <br />
                Kendini Hisset
              </h1>
              <p className="mt-5 text-lg text-gray-500 max-w-lg mx-auto lg:mx-0">
                Günlük hayatın her anı için tasarlanmış şık ve kaliteli kadın giyim koleksiyonu.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Link
                  href="/urunler"
                  className="inline-flex items-center gap-2 px-7 py-3.5 bg-rose-500 hover:bg-rose-600 text-white font-semibold rounded-full transition-colors shadow-lg shadow-rose-200"
                >
                  Alışverişe Başla <ArrowRight size={18} />
                </Link>
                <Link
                  href="/urunler?kategori=yeni"
                  className="inline-flex items-center gap-2 px-7 py-3.5 border-2 border-gray-200 hover:border-rose-400 text-gray-700 hover:text-rose-500 font-semibold rounded-full transition-colors"
                >
                  Yeni Gelenler
                </Link>
              </div>
            </div>

            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div className="relative h-64 rounded-3xl overflow-hidden shadow-xl">
                    <Image
                      src="https://images.unsplash.com/photo-1572804013427-4d7ca7268217?w=600&q=80"
                      alt="Hero 1"
                      fill
                      className="object-cover"
                      priority
                    />
                  </div>
                  <div className="relative h-40 rounded-3xl overflow-hidden shadow-xl">
                    <Image
                      src="https://images.unsplash.com/photo-1551028719-00167b16eac5?w=600&q=80"
                      alt="Hero 2"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
                <div className="space-y-4 mt-8">
                  <div className="relative h-40 rounded-3xl overflow-hidden shadow-xl">
                    <Image
                      src="https://images.unsplash.com/photo-1583496661160-fb5886a0aaaa?w=600&q=80"
                      alt="Hero 3"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="relative h-64 rounded-3xl overflow-hidden shadow-xl">
                    <Image
                      src="https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=600&q=80"
                      alt="Hero 4"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>

              {/* Floating badge */}
              <div className="absolute -bottom-4 -left-4 bg-white rounded-2xl shadow-xl p-4 flex items-center gap-3">
                <div className="w-10 h-10 bg-rose-100 rounded-xl flex items-center justify-center">
                  <span className="text-rose-500 font-bold text-lg">%</span>
                </div>
                <div>
                  <p className="text-xs text-gray-500">Özel İndirim</p>
                  <p className="text-sm font-bold text-gray-900">30&apos;a varan %</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-gray-900">Kategoriler</h2>
            <p className="mt-2 text-gray-500">İstediğiniz kategoriye göz atın</p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {categories.slice(1).map((cat) => (
              <Link
                key={cat.id}
                href={`/urunler?kategori=${cat.id}`}
                className="group flex flex-col items-center gap-3 p-4 bg-gray-50 hover:bg-rose-50 rounded-2xl transition-colors"
              >
                <div className="w-14 h-14 bg-white rounded-xl flex items-center justify-center shadow-sm group-hover:shadow-md transition-shadow text-2xl">
                  {cat.id === "elbise" && "👗"}
                  {cat.id === "bluz" && "👚"}
                  {cat.id === "pantolon" && "👖"}
                  {cat.id === "etek" && "🩱"}
                  {cat.id === "dis-giyim" && "🧥"}
                  {cat.id === "triko" && "🧶"}
                </div>
                <span className="text-xs font-semibold text-gray-700 group-hover:text-rose-600 text-center transition-colors">
                  {cat.label}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-10">
            <div>
              <h2 className="text-3xl font-bold text-gray-900">Öne Çıkan Ürünler</h2>
              <p className="mt-1 text-gray-500">Haftanın en çok satılan ve indirimli ürünleri</p>
            </div>
            <Link
              href="/urunler"
              className="hidden sm:inline-flex items-center gap-1.5 text-rose-500 font-semibold hover:text-rose-600 transition-colors"
            >
              Tümünü Gör <ArrowRight size={16} />
            </Link>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {featured.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          <div className="mt-8 text-center sm:hidden">
            <Link
              href="/urunler"
              className="inline-flex items-center gap-1.5 text-rose-500 font-semibold"
            >
              Tümünü Gör <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* Banner */}
      <section className="py-16 bg-rose-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-rose-100 font-medium mb-2">Sınırlı Süre</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Yeni Sezon %30&apos;a Varan İndirim
          </h2>
          <p className="text-rose-100 mb-8 max-w-xl mx-auto">
            Seçili ürünlerde büyük indirimler! Kaçırmadan hemen keşfedin.
          </p>
          <Link
            href="/urunler"
            className="inline-flex items-center gap-2 px-8 py-3.5 bg-white text-rose-500 font-bold rounded-full hover:bg-rose-50 transition-colors shadow-lg"
          >
            Fırsatları Keşfet <ArrowRight size={18} />
          </Link>
        </div>
      </section>

      {/* New Arrivals */}
      {newArrivals.length > 0 && (
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between mb-10">
              <div>
                <h2 className="text-3xl font-bold text-gray-900">Yeni Gelenler</h2>
                <p className="mt-1 text-gray-500">En taze koleksiyonlar</p>
              </div>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {newArrivals.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Features */}
      <section className="py-14 bg-gray-50 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Truck, title: "Ücretsiz Kargo", desc: "500 TL ve üzeri siparişlerde" },
              { icon: RotateCcw, title: "Kolay İade", desc: "30 gün içinde ücretsiz iade" },
              { icon: Shield, title: "Güvenli Ödeme", desc: "SSL şifreli güvenli alışveriş" },
              { icon: Headphones, title: "7/24 Destek", desc: "Her zaman yanınızdayız" },
            ].map((f) => (
              <div key={f.title} className="flex flex-col items-center text-center gap-3">
                <div className="w-12 h-12 bg-rose-100 rounded-xl flex items-center justify-center">
                  <f.icon size={22} className="text-rose-500" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 text-sm">{f.title}</h3>
                  <p className="text-xs text-gray-500 mt-0.5">{f.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
