"use client";

import Image from "next/image";
import Link from "next/link";
import { Trash2, Plus, Minus, ShoppingBag, ArrowRight, Tag } from "lucide-react";
import { useCartStore } from "@/lib/store";

export default function SepetPage() {
  const { items, removeItem, updateQuantity, getTotalPrice } = useCartStore();
  const total = getTotalPrice();
  const shipping = total >= 500 ? 0 : 59.99;
  const grandTotal = total + shipping;

  if (items.length === 0) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
        <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <ShoppingBag size={32} className="text-gray-400" />
        </div>
        <h1 className="text-2xl font-bold text-gray-900 mb-2">Sepetiniz Boş</h1>
        <p className="text-gray-500 mb-8">Sepetinize ürün ekleyerek alışverişe başlayın.</p>
        <Link
          href="/urunler"
          className="inline-flex items-center gap-2 px-7 py-3.5 bg-rose-500 hover:bg-rose-600 text-white font-semibold rounded-full transition-colors"
        >
          Alışverişe Başla <ArrowRight size={18} />
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Sepetim</h1>

      <div className="grid lg:grid-cols-3 gap-10">
        {/* Items */}
        <div className="lg:col-span-2 space-y-4">
          {items.map((item) => (
            <div
              key={`${item.id}-${item.size}-${item.color}`}
              className="bg-white rounded-2xl border border-gray-100 p-4 flex gap-4 hover:shadow-sm transition-shadow"
            >
              <div className="relative w-24 h-28 rounded-xl overflow-hidden bg-gray-50 flex-shrink-0">
                <Image src={item.image} alt={item.name} fill className="object-cover" />
              </div>

              <div className="flex-1 min-w-0">
                <div className="flex justify-between">
                  <div>
                    <h3 className="font-semibold text-gray-900 text-sm line-clamp-2">{item.name}</h3>
                    <div className="flex gap-3 mt-1">
                      <span className="text-xs text-gray-500 bg-gray-100 px-2 py-0.5 rounded-full">{item.size}</span>
                      <span className="text-xs text-gray-500 bg-gray-100 px-2 py-0.5 rounded-full">{item.color}</span>
                    </div>
                  </div>
                  <button
                    onClick={() => removeItem(item.id, item.size, item.color)}
                    className="text-gray-300 hover:text-rose-500 transition-colors flex-shrink-0 p-1"
                  >
                    <Trash2 size={16} />
                  </button>
                </div>

                <div className="flex items-center justify-between mt-3">
                  <div className="flex items-center gap-2 bg-gray-50 rounded-xl p-1">
                    <button
                      onClick={() => updateQuantity(item.id, item.size, item.color, item.quantity - 1)}
                      className="w-7 h-7 flex items-center justify-center rounded-lg hover:bg-white hover:shadow-sm transition-all text-gray-600"
                    >
                      <Minus size={13} />
                    </button>
                    <span className="w-6 text-center text-sm font-semibold">{item.quantity}</span>
                    <button
                      onClick={() => updateQuantity(item.id, item.size, item.color, item.quantity + 1)}
                      className="w-7 h-7 flex items-center justify-center rounded-lg hover:bg-white hover:shadow-sm transition-all text-gray-600"
                    >
                      <Plus size={13} />
                    </button>
                  </div>
                  <span className="font-bold text-gray-900">
                    {(item.price * item.quantity).toLocaleString("tr-TR")} ₺
                  </span>
                </div>
              </div>
            </div>
          ))}

          {/* Coupon */}
          <div className="bg-white rounded-2xl border border-gray-100 p-4">
            <div className="flex items-center gap-2 mb-3">
              <Tag size={16} className="text-rose-500" />
              <span className="text-sm font-semibold text-gray-900">İndirim Kuponu</span>
            </div>
            <div className="flex gap-2">
              <input
                type="text"
                placeholder="Kupon kodu girin"
                className="flex-1 px-4 py-2.5 border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-rose-400 transition-colors"
              />
              <button className="px-5 py-2.5 bg-gray-900 text-white text-sm font-semibold rounded-xl hover:bg-gray-700 transition-colors">
                Uygula
              </button>
            </div>
          </div>
        </div>

        {/* Summary */}
        <div className="lg:col-span-1">
          <div className="bg-white rounded-2xl border border-gray-100 p-6 sticky top-24">
            <h2 className="text-lg font-bold text-gray-900 mb-6">Sipariş Özeti</h2>

            <div className="space-y-3 text-sm">
              <div className="flex justify-between text-gray-600">
                <span>Ara Toplam ({items.reduce((s, i) => s + i.quantity, 0)} ürün)</span>
                <span>{total.toLocaleString("tr-TR")} ₺</span>
              </div>
              <div className="flex justify-between text-gray-600">
                <span>Kargo</span>
                <span className={shipping === 0 ? "text-emerald-600 font-medium" : ""}>
                  {shipping === 0 ? "Ücretsiz" : `${shipping.toFixed(2)} ₺`}
                </span>
              </div>
              {shipping > 0 && (
                <p className="text-xs text-amber-600 bg-amber-50 px-3 py-2 rounded-lg">
                  {(500 - total).toFixed(0)} ₺ daha alışveriş yapın, ücretsiz kargo kazanın!
                </p>
              )}
            </div>

            <div className="border-t border-gray-100 mt-4 pt-4 flex justify-between font-bold text-gray-900 text-lg">
              <span>Toplam</span>
              <span>{grandTotal.toLocaleString("tr-TR")} ₺</span>
            </div>

            <Link
              href="/odeme"
              className="block w-full mt-6 py-3.5 bg-rose-500 hover:bg-rose-600 text-white font-semibold rounded-2xl text-center transition-colors"
            >
              Ödemeye Geç
            </Link>

            <Link
              href="/urunler"
              className="block w-full mt-3 py-3 text-center text-sm text-gray-500 hover:text-rose-500 transition-colors"
            >
              Alışverişe Devam Et
            </Link>

            <div className="mt-6 pt-5 border-t border-gray-100 flex items-center justify-center gap-6">
              {["visa", "mastercard", "troy"].map((card) => (
                <div key={card} className="text-xs font-bold text-gray-400 uppercase tracking-wider border border-gray-200 rounded px-2 py-1">
                  {card}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
