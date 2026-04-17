"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import { ShoppingBag, Heart, Star, ChevronLeft, Check, Truck, RotateCcw } from "lucide-react";
import { useProducts } from "@/lib/productStore";
import { useCartStore } from "@/lib/store";
import ProductCard from "@/components/ProductCard";

export default function ProductDetailPage() {
  const { id } = useParams();
  const router = useRouter();
  const products = useProducts();
  const product = products.find((p) => p.id === Number(id));

  const [selectedSize, setSelectedSize] = useState("");
  const [selectedColor, setSelectedColor] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);
  const [liked, setLiked] = useState(false);
  const [activeImage, setActiveImage] = useState(0);

  const addItem = useCartStore((s) => s.addItem);

  if (!product) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-32 text-center">
        <p className="text-2xl text-gray-400">Ürün bulunamadı.</p>
        <Link href="/urunler" className="mt-4 inline-block text-rose-500 hover:underline">
          Ürünlere Dön
        </Link>
      </div>
    );
  }

  const discount = product.originalPrice
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : null;

  const handleAddToCart = () => {
    if (!selectedSize || !selectedColor) return;
    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      size: selectedSize,
      color: selectedColor,
      quantity,
    });
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  const handleBuyNow = () => {
    if (!selectedSize || !selectedColor) return;
    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      size: selectedSize,
      color: selectedColor,
      quantity,
    });
    router.push("/sepet");
  };

  const related = products
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 4);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Breadcrumb */}
      <nav className="flex items-center gap-2 text-sm text-gray-400 mb-8">
        <Link href="/" className="hover:text-rose-500 transition-colors">Ana Sayfa</Link>
        <span>/</span>
        <Link href="/urunler" className="hover:text-rose-500 transition-colors">Ürünler</Link>
        <span>/</span>
        <span className="text-gray-700 font-medium line-clamp-1">{product.name}</span>
      </nav>

      <div className="grid lg:grid-cols-2 gap-12">
        {/* Images */}
        <div className="space-y-4">
          <div className="relative aspect-[4/5] rounded-3xl overflow-hidden bg-gray-50">
            <Image
              src={product.images[activeImage] || product.image}
              alt={product.name}
              fill
              className="object-cover"
              priority
            />
            {discount && (
              <span className="absolute top-4 left-4 px-3 py-1.5 bg-rose-500 text-white text-sm font-bold rounded-full">
                -{discount}%
              </span>
            )}
          </div>
          {product.images.length > 1 && (
            <div className="flex gap-3">
              {product.images.map((img, i) => (
                <button
                  key={i}
                  onClick={() => setActiveImage(i)}
                  className={`relative w-20 h-24 rounded-xl overflow-hidden border-2 transition-colors ${
                    activeImage === i ? "border-rose-500" : "border-transparent"
                  }`}
                >
                  <Image src={img} alt="" fill className="object-cover" />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Info */}
        <div>
          {product.badge && (
            <span className={`inline-block px-3 py-1 text-xs font-semibold rounded-full mb-4 ${
              product.badge === "İndirim" ? "bg-rose-100 text-rose-600" :
              product.badge === "Yeni" ? "bg-emerald-100 text-emerald-600" :
              "bg-amber-100 text-amber-600"
            }`}>
              {product.badge}
            </span>
          )}

          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">{product.name}</h1>

          {/* Rating */}
          <div className="flex items-center gap-2 mt-3">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  size={16}
                  className={i < Math.floor(product.rating) ? "fill-amber-400 text-amber-400" : "text-gray-200 fill-gray-200"}
                />
              ))}
            </div>
            <span className="text-sm font-medium text-gray-700">{product.rating}</span>
            <span className="text-sm text-gray-400">({product.reviewCount} değerlendirme)</span>
          </div>

          {/* Price */}
          <div className="flex items-end gap-3 mt-5">
            <span className="text-3xl font-bold text-gray-900">
              {product.price.toLocaleString("tr-TR")} ₺
            </span>
            {product.originalPrice && (
              <span className="text-lg text-gray-400 line-through pb-0.5">
                {product.originalPrice.toLocaleString("tr-TR")} ₺
              </span>
            )}
          </div>

          <p className="mt-5 text-gray-600 leading-relaxed">{product.description}</p>

          {/* Color */}
          <div className="mt-6">
            <h3 className="text-sm font-semibold text-gray-900 mb-3">
              Renk: <span className="font-normal text-gray-600">{selectedColor || "Seçiniz"}</span>
            </h3>
            <div className="flex flex-wrap gap-2">
              {product.colors.map((color) => (
                <button
                  key={color}
                  onClick={() => setSelectedColor(color)}
                  className={`px-4 py-2 rounded-xl border-2 text-sm transition-all ${
                    selectedColor === color
                      ? "border-rose-500 bg-rose-50 text-rose-700 font-medium"
                      : "border-gray-200 text-gray-600 hover:border-rose-300"
                  }`}
                >
                  {color}
                </button>
              ))}
            </div>
          </div>

          {/* Size */}
          <div className="mt-5">
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-sm font-semibold text-gray-900">
                Beden: <span className="font-normal text-gray-600">{selectedSize || "Seçiniz"}</span>
              </h3>
              <button className="text-xs text-rose-500 hover:underline">Beden Rehberi</button>
            </div>
            <div className="flex flex-wrap gap-2">
              {product.sizes.map((size) => (
                <button
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  className={`min-w-[46px] px-3 py-2 rounded-xl border-2 text-sm font-medium transition-all ${
                    selectedSize === size
                      ? "border-rose-500 bg-rose-500 text-white"
                      : "border-gray-200 text-gray-600 hover:border-rose-300"
                  }`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* Quantity */}
          <div className="mt-5">
            <h3 className="text-sm font-semibold text-gray-900 mb-3">Adet</h3>
            <div className="flex items-center gap-3">
              <button
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className="w-10 h-10 rounded-xl border-2 border-gray-200 flex items-center justify-center text-gray-600 hover:border-rose-400 transition-colors font-bold"
              >
                -
              </button>
              <span className="w-8 text-center font-semibold text-gray-900">{quantity}</span>
              <button
                onClick={() => setQuantity(quantity + 1)}
                className="w-10 h-10 rounded-xl border-2 border-gray-200 flex items-center justify-center text-gray-600 hover:border-rose-400 transition-colors font-bold"
              >
                +
              </button>
            </div>
          </div>

          {(!selectedSize || !selectedColor) && (
            <p className="mt-4 text-sm text-amber-600 bg-amber-50 px-3 py-2 rounded-lg">
              Lütfen renk ve beden seçimi yapınız.
            </p>
          )}

          {/* Buttons */}
          <div className="flex gap-3 mt-6">
            <button
              onClick={handleAddToCart}
              disabled={!selectedSize || !selectedColor}
              className={`flex-1 flex items-center justify-center gap-2 py-3.5 rounded-2xl font-semibold transition-all ${
                added
                  ? "bg-emerald-500 text-white"
                  : !selectedSize || !selectedColor
                  ? "bg-gray-100 text-gray-400 cursor-not-allowed"
                  : "bg-gray-900 hover:bg-gray-700 text-white"
              }`}
            >
              {added ? (
                <><Check size={18} /> Eklendi</>
              ) : (
                <><ShoppingBag size={18} /> Sepete Ekle</>
              )}
            </button>
            <button
              onClick={() => setLiked(!liked)}
              className={`p-3.5 rounded-2xl border-2 transition-all ${
                liked ? "border-rose-400 bg-rose-50" : "border-gray-200 hover:border-rose-400"
              }`}
            >
              <Heart size={20} className={liked ? "fill-rose-500 text-rose-500" : "text-gray-500"} />
            </button>
          </div>

          <button
            onClick={handleBuyNow}
            disabled={!selectedSize || !selectedColor}
            className="w-full mt-3 py-3.5 bg-rose-500 hover:bg-rose-600 disabled:bg-gray-100 disabled:text-gray-400 disabled:cursor-not-allowed text-white font-semibold rounded-2xl transition-colors"
          >
            Hemen Satın Al
          </button>

          {/* Info pills */}
          <div className="flex flex-wrap gap-4 mt-6 pt-6 border-t border-gray-100">
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <Truck size={16} className="text-rose-500" />
              Ücretsiz kargo (500 TL+)
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <RotateCcw size={16} className="text-rose-500" />
              30 gün iade
            </div>
          </div>
        </div>
      </div>

      {/* Related products */}
      {related.length > 0 && (
        <div className="mt-20">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Benzer Ürünler</h2>
          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {related.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
