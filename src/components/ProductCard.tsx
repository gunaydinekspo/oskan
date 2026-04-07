"use client";

import Link from "next/link";
import Image from "next/image";
import { Heart, Star } from "lucide-react";
import { useState } from "react";
import { Product } from "@/lib/products";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const [liked, setLiked] = useState(false);
  const discount = product.originalPrice
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : null;

  return (
    <div className="group relative">
      <div className="relative overflow-hidden rounded-2xl bg-gray-50 aspect-[3/4]">
        <Link href={`/urunler/${product.id}`}>
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
            sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
          />
        </Link>

        {/* Badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-1.5">
          {product.badge && (
            <span
              className={`px-2.5 py-1 text-xs font-semibold rounded-full text-white ${
                product.badge === "İndirim"
                  ? "bg-rose-500"
                  : product.badge === "Yeni"
                  ? "bg-emerald-500"
                  : "bg-amber-500"
              }`}
            >
              {product.badge}
            </span>
          )}
          {discount && (
            <span className="px-2.5 py-1 text-xs font-semibold rounded-full bg-rose-100 text-rose-700">
              -{discount}%
            </span>
          )}
        </div>

        {/* Like button */}
        <button
          onClick={() => setLiked(!liked)}
          className="absolute top-3 right-3 p-2 bg-white rounded-full shadow-sm hover:shadow-md transition-all"
        >
          <Heart
            size={16}
            className={liked ? "fill-rose-500 text-rose-500" : "text-gray-400"}
          />
        </button>

        {/* Quick add */}
        <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/60 to-transparent translate-y-full group-hover:translate-y-0 transition-transform duration-300">
          <Link
            href={`/urunler/${product.id}`}
            className="block w-full text-center py-2 bg-white text-gray-900 text-sm font-semibold rounded-xl hover:bg-rose-500 hover:text-white transition-colors"
          >
            Hızlı İncele
          </Link>
        </div>
      </div>

      <div className="mt-3 px-1">
        <Link href={`/urunler/${product.id}`}>
          <h3 className="text-sm font-medium text-gray-800 hover:text-rose-500 transition-colors line-clamp-2">
            {product.name}
          </h3>
        </Link>

        <div className="flex items-center gap-1.5 mt-1">
          <div className="flex">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                size={11}
                className={
                  i < Math.floor(product.rating)
                    ? "fill-amber-400 text-amber-400"
                    : "text-gray-200 fill-gray-200"
                }
              />
            ))}
          </div>
          <span className="text-xs text-gray-400">({product.reviewCount})</span>
        </div>

        <div className="flex items-center gap-2 mt-1.5">
          <span className="text-base font-bold text-gray-900">
            {product.price.toLocaleString("tr-TR")} ₺
          </span>
          {product.originalPrice && (
            <span className="text-sm text-gray-400 line-through">
              {product.originalPrice.toLocaleString("tr-TR")} ₺
            </span>
          )}
        </div>
      </div>
    </div>
  );
}
