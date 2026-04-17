"use client";

import { useState } from "react";
import { useProductStore } from "@/lib/productStore";
import { Product, categories } from "@/lib/products";
import { Trash2, Plus, Check } from "lucide-react";

const ADMIN_PASSWORD = "oskan2025";

export default function AdminPage() {
  const [password, setPassword] = useState("");
  const [authenticated, setAuthenticated] = useState(false);
  const [selectedProductId, setSelectedProductId] = useState<number | null>(
    null
  );
  const [showSuccessMsg, setShowSuccessMsg] = useState(false);
  const [formData, setFormData] = useState<Omit<Product, "id"> | null>(null);

  const products = useProductStore((state) => state.products);
  const addProduct = useProductStore((state) => state.addProduct);
  const updateProduct = useProductStore((state) => state.updateProduct);
  const deleteProduct = useProductStore((state) => state.deleteProduct);
  const resetToDefaults = useProductStore((state) => state.resetToDefaults);

  if (!authenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-rose-50 to-pink-50 px-4">
        <div className="w-full max-w-sm bg-white rounded-2xl shadow-xl p-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2 text-center">
            Admin
          </h1>
          <p className="text-gray-500 text-center mb-6">Panel Girişi</p>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              if (password === ADMIN_PASSWORD) {
                setAuthenticated(true);
                setPassword("");
                setFormData(null);
                setSelectedProductId(null);
              } else {
                alert("Hatalı şifre!");
                setPassword("");
              }
            }}
          >
            <input
              type="password"
              placeholder="Şifreyi girin"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-rose-500 mb-4"
              autoFocus
            />
            <button
              type="submit"
              className="w-full px-4 py-3 bg-rose-500 hover:bg-rose-600 text-white font-semibold rounded-lg transition-colors"
            >
              Giriş Yap
            </button>
          </form>

          <div className="mt-6 p-4 bg-gray-50 rounded-lg text-xs text-gray-600 text-center">
            Demo şifresi: <code className="font-mono">oskan2025</code>
          </div>
        </div>
      </div>
    );
  }

  const selectedProduct =
    selectedProductId !== null
      ? products.find((p) => p.id === selectedProductId)
      : null;

  const isNewProduct = selectedProductId === null;

  const handleSelectProduct = (id: number) => {
    const product = products.find((p) => p.id === id);
    if (product) {
      setSelectedProductId(id);
      setFormData({ ...product });
    }
  };

  const handleNewProduct = () => {
    setSelectedProductId(null);
    setFormData({
      name: "",
      price: 0,
      category: "elbise",
      image: "",
      images: [],
      description: "",
      sizes: [],
      colors: [],
      rating: 4.5,
      reviewCount: 0,
    });
  };

  const handleSaveProduct = () => {
    if (!formData || !formData.name || formData.price <= 0) {
      alert("Lütfen ürün adı ve fiyatını girin!");
      return;
    }

    if (isNewProduct) {
      addProduct(formData);
    } else if (selectedProductId !== null) {
      updateProduct(selectedProductId, formData);
    }

    setShowSuccessMsg(true);
    setTimeout(() => setShowSuccessMsg(false), 2000);
    setSelectedProductId(null);
    setFormData(null);
  };

  const handleDeleteProduct = () => {
    if (
      selectedProductId !== null &&
      window.confirm("Bu ürünü silmek istediğinize emin misiniz?")
    ) {
      deleteProduct(selectedProductId);
      setSelectedProductId(null);
      setFormData(null);
    }
  };

  const handleResetDefaults = () => {
    if (
      window.confirm(
        "Tüm ürünleri varsayılan haline sıfırlamak istediğinize emin misiniz?"
      )
    ) {
      resetToDefaults();
      setSelectedProductId(null);
      setFormData(null);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Admin Panel</h1>
            <p className="text-sm text-gray-500">Ürün Yönetimi</p>
          </div>
          <button
            onClick={() => {
              setAuthenticated(false);
              setSelectedProductId(null);
              setFormData(null);
            }}
            className="text-sm text-gray-600 hover:text-rose-500 font-medium"
          >
            Çıkış Yap
          </button>
        </div>
      </header>

      {/* Success message */}
      {showSuccessMsg && (
        <div className="fixed top-20 right-6 flex items-center gap-2 px-4 py-3 bg-green-50 border border-green-200 rounded-lg text-green-700 font-medium">
          <Check size={18} /> Kaydedildi
        </div>
      )}

      {/* Main content */}
      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="flex gap-8">
          {/* Left: Product list */}
          <aside className="w-80 flex-shrink-0">
            <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
              <div className="p-4 border-b border-gray-200 bg-gray-50">
                <h2 className="font-semibold text-gray-900">Ürünler</h2>
                <p className="text-xs text-gray-500 mt-1">
                  {products.length} ürün
                </p>
              </div>

              <div className="max-h-96 overflow-y-auto">
                {products.map((product) => (
                  <button
                    key={product.id}
                    onClick={() => handleSelectProduct(product.id)}
                    className={`w-full text-left px-4 py-3 border-b border-gray-100 hover:bg-rose-50 transition-colors ${
                      selectedProductId === product.id
                        ? "bg-rose-100 border-l-2 border-l-rose-500"
                        : ""
                    }`}
                  >
                    <div className="font-medium text-gray-900 text-sm">
                      {product.name}
                    </div>
                    <div className="flex items-center justify-between mt-1">
                      <span className="text-xs text-gray-500">
                        {product.price} ₺
                      </span>
                      {product.badge && (
                        <span className="text-xs px-2 py-0.5 bg-rose-100 text-rose-700 rounded">
                          {product.badge}
                        </span>
                      )}
                    </div>
                  </button>
                ))}
              </div>

              <div className="p-4 border-t border-gray-200 bg-gray-50">
                <button
                  onClick={handleNewProduct}
                  className="w-full flex items-center justify-center gap-2 px-4 py-2.5 bg-rose-500 hover:bg-rose-600 text-white font-medium rounded-lg transition-colors"
                >
                  <Plus size={18} /> Yeni Ürün
                </button>
              </div>
            </div>
          </aside>

          {/* Right: Product form */}
          <div className="flex-1">
            {formData ? (
              <div className="bg-white rounded-xl border border-gray-200 p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  {isNewProduct ? "Yeni Ürün Ekle" : "Ürünü Düzenle"}
                </h2>

                <div className="grid grid-cols-2 gap-6 mb-6">
                  {/* Name */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Ürün Adı *
                    </label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:border-rose-500"
                      placeholder="örn: Çiçek Desenli Midi Elbise"
                    />
                  </div>

                  {/* Price */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Fiyat (₺) *
                    </label>
                    <input
                      type="number"
                      value={formData.price}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          price: Number(e.target.value),
                        })
                      }
                      className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:border-rose-500"
                      placeholder="649"
                    />
                  </div>

                  {/* Original Price */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      İndirimli Fiyat (₺)
                    </label>
                    <input
                      type="number"
                      value={formData.originalPrice || ""}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          originalPrice: e.target.value
                            ? Number(e.target.value)
                            : undefined,
                        })
                      }
                      className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:border-rose-500"
                      placeholder="899"
                    />
                    <p className="text-xs text-gray-500 mt-1">
                      Boş bırakırsa indirim gösterilmez
                    </p>
                  </div>

                  {/* Category */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Kategori *
                    </label>
                    <select
                      value={formData.category}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          category: e.target.value,
                        })
                      }
                      className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:border-rose-500"
                    >
                      {categories
                        .filter((c) => c.id !== "tumu")
                        .map((cat) => (
                          <option key={cat.id} value={cat.id}>
                            {cat.label}
                          </option>
                        ))}
                    </select>
                  </div>

                  {/* Main Image URL */}
                  <div className="col-span-2">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Ana Görsel URL *
                    </label>
                    <input
                      type="text"
                      value={formData.image}
                      onChange={(e) =>
                        setFormData({ ...formData, image: e.target.value })
                      }
                      className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:border-rose-500"
                      placeholder="https://images.unsplash.com/..."
                    />
                  </div>

                  {/* Additional Images */}
                  <div className="col-span-2">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Ek Görseller (virgülle ayrılmış URL'ler)
                    </label>
                    <textarea
                      value={formData.images.join("\n")}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          images: e.target.value
                            .split("\n")
                            .map((u) => u.trim())
                            .filter((u) => u),
                        })
                      }
                      className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:border-rose-500 font-mono text-sm"
                      placeholder="https://images.unsplash.com/...&#10;https://images.unsplash.com/...&#10;https://images.unsplash.com/..."
                      rows={3}
                    />
                    <p className="text-xs text-gray-500 mt-1">
                      Her URL'yi yeni satırda yazın. Ana görsel zaten yukarıda.
                    </p>
                  </div>

                  {/* Description */}
                  <div className="col-span-2">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Açıklama
                    </label>
                    <textarea
                      value={formData.description}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          description: e.target.value,
                        })
                      }
                      className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:border-rose-500"
                      placeholder="Ürün hakkında detaylı açıklama..."
                      rows={4}
                    />
                  </div>

                  {/* Sizes */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Bedenler (virgülle ayrılmış)
                    </label>
                    <input
                      type="text"
                      value={formData.sizes.join(", ")}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          sizes: e.target.value
                            .split(",")
                            .map((s) => s.trim())
                            .filter((s) => s),
                        })
                      }
                      className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:border-rose-500"
                      placeholder="XS, S, M, L, XL"
                    />
                  </div>

                  {/* Colors */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Renkler (virgülle ayrılmış)
                    </label>
                    <input
                      type="text"
                      value={formData.colors.join(", ")}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          colors: e.target.value
                            .split(",")
                            .map((c) => c.trim())
                            .filter((c) => c),
                        })
                      }
                      className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:border-rose-500"
                      placeholder="Pembe, Mavi, Krem"
                    />
                  </div>

                  {/* Badge */}
                  <div className="col-span-2">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Badge
                    </label>
                    <div className="flex gap-2">
                      {[
                        { value: undefined, label: "Hiç Yok" },
                        { value: "Yeni", label: "Yeni" },
                        { value: "İndirim", label: "İndirim" },
                        { value: "Çok Satan", label: "Çok Satan" },
                      ].map((badge) => (
                        <button
                          key={String(badge.value)}
                          onClick={() =>
                            setFormData({
                              ...formData,
                              badge: badge.value,
                            })
                          }
                          className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                            formData.badge === badge.value
                              ? "bg-rose-500 text-white"
                              : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                          }`}
                        >
                          {badge.label}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Action buttons */}
                <div className="flex gap-3 pt-6 border-t border-gray-200">
                  <button
                    onClick={handleSaveProduct}
                    className="flex-1 px-6 py-3 bg-rose-500 hover:bg-rose-600 text-white font-semibold rounded-lg transition-colors"
                  >
                    Kaydet
                  </button>
                  {!isNewProduct && (
                    <button
                      onClick={handleDeleteProduct}
                      className="px-6 py-3 bg-red-50 hover:bg-red-100 text-red-600 font-semibold rounded-lg transition-colors flex items-center gap-2"
                    >
                      <Trash2 size={18} /> Sil
                    </button>
                  )}
                </div>
              </div>
            ) : (
              <div className="bg-white rounded-xl border border-gray-200 p-12 text-center">
                <p className="text-gray-500 text-lg">
                  Bir ürün seçin veya yeni ürün ekleyin
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Reset button */}
        <div className="mt-8 flex justify-end">
          <button
            onClick={handleResetDefaults}
            className="text-sm text-gray-600 hover:text-rose-500 font-medium px-4 py-2 rounded-lg hover:bg-rose-50 transition-colors"
          >
            Varsayılana Sıfırla
          </button>
        </div>
      </div>
    </div>
  );
}
