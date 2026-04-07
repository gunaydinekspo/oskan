"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ChevronLeft, Lock, CreditCard, Building2, Smartphone } from "lucide-react";
import { useCartStore } from "@/lib/store";

type PaymentMethod = "card" | "transfer" | "eft";

export default function OdemePage() {
  const { items, getTotalPrice, clearCart } = useCartStore();
  const total = getTotalPrice();
  const shipping = total >= 500 ? 0 : 59.99;
  const grandTotal = total + shipping;

  const [paymentMethod, setPaymentMethod] = useState<PaymentMethod>("card");
  const [step, setStep] = useState<"info" | "payment" | "success">("info");

  const [info, setInfo] = useState({
    firstName: "", lastName: "", email: "", phone: "",
    address: "", city: "", district: "", zip: "",
  });

  const [cardInfo, setCardInfo] = useState({
    number: "", name: "", expiry: "", cvv: "",
  });

  const handleInfoSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStep("payment");
  };

  const handlePaymentSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Gerçek ödeme entegrasyonu buraya eklenecek
    setStep("success");
    clearCart();
  };

  if (items.length === 0 && step !== "success") {
    return (
      <div className="max-w-7xl mx-auto px-4 py-24 text-center">
        <p className="text-xl text-gray-500 mb-6">Sepetiniz boş.</p>
        <Link href="/urunler" className="text-rose-500 font-semibold hover:underline">
          Alışverişe Başla
        </Link>
      </div>
    );
  }

  if (step === "success") {
    return (
      <div className="max-w-lg mx-auto px-4 py-24 text-center">
        <div className="w-20 h-20 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <svg className="w-10 h-10 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h1 className="text-3xl font-bold text-gray-900 mb-3">Siparişiniz Alındı!</h1>
        <p className="text-gray-500 mb-2">
          Teşekkürler! Siparişiniz başarıyla oluşturuldu.
        </p>
        <p className="text-gray-500 mb-8">
          Sipariş detayları e-posta adresinize gönderildi.
        </p>
        <Link
          href="/"
          className="inline-flex items-center gap-2 px-7 py-3.5 bg-rose-500 hover:bg-rose-600 text-white font-semibold rounded-full transition-colors"
        >
          Ana Sayfaya Dön
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      {/* Header */}
      <div className="flex items-center gap-4 mb-8">
        <Link href="/sepet" className="p-2 text-gray-400 hover:text-gray-700 transition-colors">
          <ChevronLeft size={22} />
        </Link>
        <h1 className="text-2xl font-bold text-gray-900">Ödeme</h1>
        <div className="flex items-center gap-1.5 ml-auto text-sm text-emerald-600 font-medium">
          <Lock size={14} />
          Güvenli Bağlantı
        </div>
      </div>

      {/* Steps */}
      <div className="flex items-center gap-2 mb-8">
        {["Bilgiler", "Ödeme"].map((s, i) => (
          <div key={s} className="flex items-center gap-2">
            <div className={`flex items-center gap-2 ${i === 0 ? (step === "info" ? "text-rose-500" : "text-emerald-500") : (step === "payment" ? "text-rose-500" : "text-gray-300")}`}>
              <div className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold border-2 ${
                (i === 0 && step !== "info") ? "border-emerald-500 bg-emerald-500 text-white" :
                (i === 0 && step === "info") || (i === 1 && step === "payment") ? "border-rose-500 bg-rose-50 text-rose-500" :
                "border-gray-200 text-gray-300"
              }`}>
                {i === 0 && step !== "info" ? "✓" : i + 1}
              </div>
              <span className="text-sm font-medium">{s}</span>
            </div>
            {i === 0 && <div className="w-12 h-px bg-gray-200" />}
          </div>
        ))}
      </div>

      <div className="grid lg:grid-cols-3 gap-10">
        {/* Forms */}
        <div className="lg:col-span-2">
          {step === "info" && (
            <form onSubmit={handleInfoSubmit} className="space-y-6">
              <div className="bg-white rounded-2xl border border-gray-100 p-6">
                <h2 className="font-bold text-gray-900 mb-5">Kişisel Bilgiler</h2>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-gray-700 mb-1.5">Ad *</label>
                    <input
                      required
                      value={info.firstName}
                      onChange={(e) => setInfo({ ...info, firstName: e.target.value })}
                      className="w-full px-4 py-2.5 border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-rose-400 transition-colors"
                      placeholder="Adınız"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-gray-700 mb-1.5">Soyad *</label>
                    <input
                      required
                      value={info.lastName}
                      onChange={(e) => setInfo({ ...info, lastName: e.target.value })}
                      className="w-full px-4 py-2.5 border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-rose-400 transition-colors"
                      placeholder="Soyadınız"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-gray-700 mb-1.5">E-posta *</label>
                    <input
                      required
                      type="email"
                      value={info.email}
                      onChange={(e) => setInfo({ ...info, email: e.target.value })}
                      className="w-full px-4 py-2.5 border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-rose-400 transition-colors"
                      placeholder="ornek@email.com"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-gray-700 mb-1.5">Telefon *</label>
                    <input
                      required
                      type="tel"
                      value={info.phone}
                      onChange={(e) => setInfo({ ...info, phone: e.target.value })}
                      className="w-full px-4 py-2.5 border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-rose-400 transition-colors"
                      placeholder="05XX XXX XX XX"
                    />
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl border border-gray-100 p-6">
                <h2 className="font-bold text-gray-900 mb-5">Teslimat Adresi</h2>
                <div className="space-y-4">
                  <div>
                    <label className="block text-xs font-medium text-gray-700 mb-1.5">Açık Adres *</label>
                    <textarea
                      required
                      rows={3}
                      value={info.address}
                      onChange={(e) => setInfo({ ...info, address: e.target.value })}
                      className="w-full px-4 py-2.5 border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-rose-400 transition-colors resize-none"
                      placeholder="Mahalle, cadde, sokak, no, daire..."
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-gray-700 mb-1.5">İl *</label>
                      <input
                        required
                        value={info.city}
                        onChange={(e) => setInfo({ ...info, city: e.target.value })}
                        className="w-full px-4 py-2.5 border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-rose-400 transition-colors"
                        placeholder="İstanbul"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-gray-700 mb-1.5">İlçe *</label>
                      <input
                        required
                        value={info.district}
                        onChange={(e) => setInfo({ ...info, district: e.target.value })}
                        className="w-full px-4 py-2.5 border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-rose-400 transition-colors"
                        placeholder="Kadıköy"
                      />
                    </div>
                  </div>
                </div>
              </div>

              <button
                type="submit"
                className="w-full py-3.5 bg-rose-500 hover:bg-rose-600 text-white font-semibold rounded-2xl transition-colors"
              >
                Ödemeye Geç
              </button>
            </form>
          )}

          {step === "payment" && (
            <form onSubmit={handlePaymentSubmit} className="space-y-6">
              {/* Payment method selector */}
              <div className="bg-white rounded-2xl border border-gray-100 p-6">
                <h2 className="font-bold text-gray-900 mb-5">Ödeme Yöntemi</h2>
                <div className="grid grid-cols-3 gap-3">
                  {[
                    { id: "card" as PaymentMethod, label: "Kredi Kartı", icon: CreditCard },
                    { id: "transfer" as PaymentMethod, label: "Havale/EFT", icon: Building2 },
                    { id: "eft" as PaymentMethod, label: "Mobil Ödeme", icon: Smartphone },
                  ].map((m) => (
                    <button
                      key={m.id}
                      type="button"
                      onClick={() => setPaymentMethod(m.id)}
                      className={`flex flex-col items-center gap-2 p-4 rounded-xl border-2 transition-all ${
                        paymentMethod === m.id
                          ? "border-rose-500 bg-rose-50"
                          : "border-gray-200 hover:border-rose-200"
                      }`}
                    >
                      <m.icon size={20} className={paymentMethod === m.id ? "text-rose-500" : "text-gray-400"} />
                      <span className={`text-xs font-medium ${paymentMethod === m.id ? "text-rose-600" : "text-gray-500"}`}>
                        {m.label}
                      </span>
                    </button>
                  ))}
                </div>
              </div>

              {paymentMethod === "card" && (
                <div className="bg-white rounded-2xl border border-gray-100 p-6">
                  <h3 className="font-semibold text-gray-900 mb-5">Kart Bilgileri</h3>

                  {/* Placeholder notice */}
                  <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 mb-5">
                    <p className="text-sm text-amber-700 font-medium">Ödeme Entegrasyonu Bekleniyor</p>
                    <p className="text-xs text-amber-600 mt-1">
                      Bu alan yakında gerçek ödeme altyapısıyla (İyzico / PayTR / Stripe) entegre edilecek.
                    </p>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <label className="block text-xs font-medium text-gray-700 mb-1.5">Kart Numarası</label>
                      <input
                        value={cardInfo.number}
                        onChange={(e) => setCardInfo({ ...cardInfo, number: e.target.value })}
                        className="w-full px-4 py-2.5 border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-rose-400 font-mono tracking-widest"
                        placeholder="0000 0000 0000 0000"
                        maxLength={19}
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-gray-700 mb-1.5">Kart Üzerindeki İsim</label>
                      <input
                        value={cardInfo.name}
                        onChange={(e) => setCardInfo({ ...cardInfo, name: e.target.value })}
                        className="w-full px-4 py-2.5 border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-rose-400"
                        placeholder="AD SOYAD"
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-medium text-gray-700 mb-1.5">Son Kullanma Tarihi</label>
                        <input
                          value={cardInfo.expiry}
                          onChange={(e) => setCardInfo({ ...cardInfo, expiry: e.target.value })}
                          className="w-full px-4 py-2.5 border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-rose-400 font-mono"
                          placeholder="AA/YY"
                          maxLength={5}
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-medium text-gray-700 mb-1.5">CVV</label>
                        <input
                          value={cardInfo.cvv}
                          onChange={(e) => setCardInfo({ ...cardInfo, cvv: e.target.value })}
                          type="password"
                          className="w-full px-4 py-2.5 border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-rose-400 font-mono"
                          placeholder="•••"
                          maxLength={4}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {paymentMethod === "transfer" && (
                <div className="bg-white rounded-2xl border border-gray-100 p-6">
                  <h3 className="font-semibold text-gray-900 mb-4">Havale/EFT Bilgileri</h3>
                  <div className="bg-blue-50 rounded-xl p-4 space-y-3 text-sm">
                    <p className="text-blue-700 font-medium">Ödeme bilgileri yakında eklenecek.</p>
                    <p className="text-blue-600">Havale/EFT bilgileriniz sipariş onayı e-postasında paylaşılacaktır.</p>
                  </div>
                </div>
              )}

              {paymentMethod === "eft" && (
                <div className="bg-white rounded-2xl border border-gray-100 p-6">
                  <h3 className="font-semibold text-gray-900 mb-4">Mobil Ödeme</h3>
                  <div className="bg-purple-50 rounded-xl p-4 text-sm">
                    <p className="text-purple-700 font-medium">Mobil ödeme entegrasyonu yakında!</p>
                    <p className="text-purple-600 mt-1">Bu özellik çok yakında aktif olacak.</p>
                  </div>
                </div>
              )}

              <div className="flex gap-3">
                <button
                  type="button"
                  onClick={() => setStep("info")}
                  className="px-6 py-3.5 border-2 border-gray-200 text-gray-600 font-semibold rounded-2xl hover:border-gray-300 transition-colors"
                >
                  Geri
                </button>
                <button
                  type="submit"
                  className="flex-1 py-3.5 bg-rose-500 hover:bg-rose-600 text-white font-semibold rounded-2xl transition-colors flex items-center justify-center gap-2"
                >
                  <Lock size={16} />
                  Siparişi Tamamla — {grandTotal.toLocaleString("tr-TR")} ₺
                </button>
              </div>
            </form>
          )}
        </div>

        {/* Order summary */}
        <div className="lg:col-span-1">
          <div className="bg-white rounded-2xl border border-gray-100 p-5 sticky top-24">
            <h2 className="font-bold text-gray-900 mb-5">Sipariş Özeti</h2>

            <div className="space-y-3 mb-4">
              {items.map((item) => (
                <div key={`${item.id}-${item.size}-${item.color}`} className="flex gap-3">
                  <div className="relative w-12 h-14 rounded-lg overflow-hidden bg-gray-50 flex-shrink-0">
                    <Image src={item.image} alt={item.name} fill className="object-cover" />
                    <span className="absolute -top-1 -right-1 w-4 h-4 bg-rose-500 text-white text-xs rounded-full flex items-center justify-center font-bold">
                      {item.quantity}
                    </span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-xs font-medium text-gray-800 line-clamp-2">{item.name}</p>
                    <p className="text-xs text-gray-400">{item.size} / {item.color}</p>
                  </div>
                  <span className="text-xs font-semibold text-gray-900 whitespace-nowrap">
                    {(item.price * item.quantity).toLocaleString("tr-TR")} ₺
                  </span>
                </div>
              ))}
            </div>

            <div className="border-t border-gray-100 pt-4 space-y-2 text-sm">
              <div className="flex justify-between text-gray-600">
                <span>Ara Toplam</span>
                <span>{total.toLocaleString("tr-TR")} ₺</span>
              </div>
              <div className="flex justify-between text-gray-600">
                <span>Kargo</span>
                <span className={shipping === 0 ? "text-emerald-600 font-medium" : ""}>
                  {shipping === 0 ? "Ücretsiz" : `${shipping.toFixed(2)} ₺`}
                </span>
              </div>
              <div className="flex justify-between font-bold text-gray-900 text-base pt-2 border-t border-gray-100">
                <span>Toplam</span>
                <span>{grandTotal.toLocaleString("tr-TR")} ₺</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
