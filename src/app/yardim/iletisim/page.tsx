"use client";

import { useState } from "react";
import { ChevronLeft, Mail, Phone, Clock, MapPin, CheckCircle } from "lucide-react";
import Link from "next/link";

export default function IletisimPage() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Form gönderme entegrasyonu (EmailJS, Resend vb.)
    setSent(true);
  };

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <Link
        href="/"
        className="inline-flex items-center gap-1.5 text-sm text-gray-500 hover:text-rose-500 transition-colors mb-8"
      >
        <ChevronLeft size={16} /> Ana Sayfaya Dön
      </Link>

      <div className="mb-10">
        <h1 className="text-3xl font-bold text-gray-900">İletişim</h1>
        <p className="mt-2 text-gray-500">Size yardımcı olmaktan mutluluk duyarız.</p>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Info cards */}
        <div className="space-y-4">
          {[
            {
              icon: Mail,
              title: "E-posta",
              lines: ["info@gunaydinexport.com", "iade@gunaydinexport.com"],
            },
            {
              icon: Phone,
              title: "Telefon",
              lines: ["Yakında aktif olacak"],
            },
            {
              icon: Clock,
              title: "Çalışma Saatleri",
              lines: ["Pazartesi – Cuma: 09:00 – 18:00", "Cumartesi: 10:00 – 15:00"],
            },
            {
              icon: MapPin,
              title: "Adres",
              lines: ["Türkiye"],
            },
          ].map((item) => (
            <div key={item.title} className="bg-white rounded-2xl border border-gray-100 p-5 flex gap-4">
              <div className="w-10 h-10 bg-rose-100 rounded-xl flex items-center justify-center flex-shrink-0">
                <item.icon size={18} className="text-rose-500" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 text-sm">{item.title}</h3>
                {item.lines.map((line) => (
                  <p key={line} className="text-sm text-gray-500 mt-0.5">{line}</p>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Form */}
        <div className="lg:col-span-2 bg-white rounded-2xl border border-gray-100 p-8">
          {sent ? (
            <div className="flex flex-col items-center justify-center h-full py-12 text-center">
              <CheckCircle size={48} className="text-emerald-500 mb-4" />
              <h2 className="text-xl font-bold text-gray-900 mb-2">Mesajınız Alındı!</h2>
              <p className="text-gray-500 mb-6">
                En kısa sürede size geri dönüş yapacağız.
              </p>
              <button
                onClick={() => { setSent(false); setForm({ name: "", email: "", subject: "", message: "" }); }}
                className="px-6 py-2.5 bg-rose-500 hover:bg-rose-600 text-white font-semibold rounded-xl transition-colors text-sm"
              >
                Yeni Mesaj Gönder
              </button>
            </div>
          ) : (
            <>
              <h2 className="text-lg font-bold text-gray-900 mb-6">Mesaj Gönderin</h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-gray-700 mb-1.5">Adınız *</label>
                    <input
                      required
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className="w-full px-4 py-2.5 border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-rose-400 transition-colors"
                      placeholder="Ad Soyad"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-gray-700 mb-1.5">E-posta *</label>
                    <input
                      required
                      type="email"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      className="w-full px-4 py-2.5 border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-rose-400 transition-colors"
                      placeholder="ornek@email.com"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-medium text-gray-700 mb-1.5">Konu *</label>
                  <select
                    required
                    value={form.subject}
                    onChange={(e) => setForm({ ...form, subject: e.target.value })}
                    className="w-full px-4 py-2.5 border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-rose-400 transition-colors bg-white"
                  >
                    <option value="">Konu seçin</option>
                    <option>Sipariş Hakkında</option>
                    <option>İade / Değişim</option>
                    <option>Ürün Bilgisi</option>
                    <option>Ödeme Sorunu</option>
                    <option>Kargo / Teslimat</option>
                    <option>Diğer</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-medium text-gray-700 mb-1.5">Mesajınız *</label>
                  <textarea
                    required
                    rows={5}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="w-full px-4 py-2.5 border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-rose-400 transition-colors resize-none"
                    placeholder="Mesajınızı buraya yazın..."
                  />
                </div>
                <button
                  type="submit"
                  className="w-full py-3 bg-rose-500 hover:bg-rose-600 text-white font-semibold rounded-xl transition-colors"
                >
                  Gönder
                </button>
              </form>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
