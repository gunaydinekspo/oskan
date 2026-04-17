"use client";

import { useState } from "react";
import { useProductStore } from "@/lib/productStore";
import { Product, categories } from "@/lib/products";
import { Trash2, Plus, Check, Upload, X } from "lucide-react";
import { uploadImage } from "./upload-action";

const ADMIN_PASSWORD = "oskan2025";

export default function AdminPage() {
  const [password, setPassword] = useState("");
  const [authenticated, setAuthenticated] = useState(false);
  const [selectedProductId, setSelectedProductId] = useState<number | null>(
    null
  );
  const [showSuccessMsg, setShowSuccessMsg] = useState(false);
  const [formData, setFormData] = useState<Omit<Product, "id"> | null>(null);
  const [uploading, setUploading] = useState(false);

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

  const handleFileUpload = async (
    files: FileList | null,
    isMainImage: boolean
  ) => {
    if (!files || files.length === 0 || !formData) return;

    setUploading(true);
    try {
      for (const file of Array.from(files)) {
        const formDataToSend = new FormData();
        formDataToSend.append("file", file);
        const result = await uploadImage(formDataToSend);

        if (isMainImage) {
          setFormData({ ...formData, image: result.url });
        } else {
          setFormData({
            ...formData,
            images: [...formData.images, result.url],
          });
        }
      }
    } catch (error) {
      alert("Dosya yükleme başarısız!");
    } finally {
      setUploading(false);
    }
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    e.currentTarget.classList.add("bg-rose-50", "border-rose-300");
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.currentTarget.classList.remove("bg-rose-50", "border-rose-300");
  };

  const handleDrop = (
    e: React.DragEvent,
    isMainImage: boolean
  ) => {
    e.preventDefault();
    e.currentTarget.classList.remove("bg-rose-50", "border-rose-300");
    handleFileUpload(e.dataTransfer.files, isMainImage);
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

                  {/* Main Image Upload */}
                  <div className="col-span-2">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Ana Görsel *
                    </label>
                    <div
                      onDragOver={handleDragOver}
                      onDragLeave={handleDragLeave}
                      onDrop={(e) => handleDrop(e, true)}
                      className="border-2 border-dashed border-gray-200 rounded-lg p-6 text-center transition-colors cursor-pointer hover:border-rose-300 hover:bg-rose-50"
                    >
                      <Upload size={24} className="mx-auto text-gray-400 mb-2" />
                      <p className="text-sm text-gray-600 mb-1">
                        Görseli sürükle bırak veya tıkla
                      </p>
                      <p className="text-xs text-gray-500 mb-3">
                        PNG, JPG (Max 5MB)
                      </p>
                      <input
                        type="file"
                        accept="image/*"
                        onChange={(e) => handleFileUpload(e.target.files, true)}
                        className="hidden"
                        id="main-image-input"
                        disabled={uploading}
                      />
                      <label
                        htmlFor="main-image-input"
                        className="inline-block px-4 py-2 bg-rose-500 text-white text-sm font-medium rounded-lg hover:bg-rose-600 transition-colors"
                      >
                        {uploading ? "Yükleniyor..." : "Dosya Seç"}
                      </label>
                    </div>
                    {formData.image && (
                      <div className="mt-3">
                        <p className="text-xs text-gray-600 mb-2">
                          Yüklenen görsel:
                        </p>
                        <div className="relative w-20 h-20 rounded-lg overflow-hidden bg-gray-100">
                          <img
                            src={formData.image}
                            alt="Main"
                            className="w-full h-full object-cover"
                          />
                          <button
                            onClick={() => setFormData({ ...formData, image: "" })}
                            className="absolute inset-0 flex items-center justify-center bg-black/50 opacity-0 hover:opacity-100 transition-opacity"
                          >
                            <X size={16} className="text-white" />
                          </button>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Additional Images Upload */}
                  <div className="col-span-2">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Ek Görseller
                    </label>
                    <div
                      onDragOver={handleDragOver}
                      onDragLeave={handleDragLeave}
                      onDrop={(e) => handleDrop(e, false)}
                      className="border-2 border-dashed border-gray-200 rounded-lg p-6 text-center transition-colors cursor-pointer hover:border-rose-300 hover:bg-rose-50"
                    >
                      <Upload size={24} className="mx-auto text-gray-400 mb-2" />
                      <p className="text-sm text-gray-600 mb-1">
                        Görselleri sürükle bırak (birden fazla) veya tıkla
                      </p>
                      <p className="text-xs text-gray-500 mb-3">
                        Aynı anda birden fazla dosya yükleyebilirsiniz
                      </p>
                      <input
                        type="file"
                        accept="image/*"
                        onChange={(e) => handleFileUpload(e.target.files, false)}
                        className="hidden"
                        id="images-input"
                        multiple
                        disabled={uploading}
                      />
                      <label
                        htmlFor="images-input"
                        className="inline-block px-4 py-2 bg-rose-500 text-white text-sm font-medium rounded-lg hover:bg-rose-600 transition-colors"
                      >
                        {uploading ? "Yükleniyor..." : "Dosya Seç"}
                      </label>
                    </div>
                    {formData.images.length > 0 && (
                      <div className="mt-3">
                        <p className="text-xs text-gray-600 mb-2">
                          Yüklenen görseller ({formData.images.length}):
                        </p>
                        <div className="flex gap-2 flex-wrap">
                          {formData.images.map((img, idx) => (
                            <div
                              key={idx}
                              className="relative w-20 h-20 rounded-lg overflow-hidden bg-gray-100 group"
                            >
                              <img
                                src={img}
                                alt={`Extra ${idx}`}
                                className="w-full h-full object-cover"
                              />
                              <button
                                onClick={() =>
                                  setFormData({
                                    ...formData,
                                    images: formData.images.filter(
                                      (_, i) => i !== idx
                                    ),
                                  })
                                }
                                className="absolute inset-0 flex items-center justify-center bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity"
                              >
                                <X size={16} className="text-white" />
                              </button>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
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
