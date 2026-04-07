import Link from "next/link";
import { Globe, Rss, Share2 } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link href="/">
              <span className="text-2xl font-bold text-white">
                oskan<span className="text-rose-400">.</span>
              </span>
            </Link>
            <p className="mt-3 text-sm leading-relaxed text-gray-400">
              Modern kadının tarzını yansıtan kaliteli ve şık giyim koleksiyonu.
            </p>
            <div className="flex gap-4 mt-5">
              <a href="#" className="text-gray-400 hover:text-rose-400 transition-colors">
                <Globe size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-rose-400 transition-colors">
                <Rss size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-rose-400 transition-colors">
                <Share2 size={20} />
              </a>
            </div>
          </div>

          {/* Shop */}
          <div>
            <h3 className="text-white font-semibold mb-4">Alışveriş</h3>
            <ul className="space-y-2.5 text-sm">
              {[
                { href: "/urunler", label: "Tüm Ürünler" },
                { href: "/urunler?kategori=elbise", label: "Elbiseler" },
                { href: "/urunler?kategori=dis-giyim", label: "Dış Giyim" },
                { href: "/urunler?kategori=pantolon", label: "Pantolon & Jean" },
                { href: "/urunler?kategori=etek", label: "Etekler" },
              ].map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="hover:text-rose-400 transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Help */}
          <div>
            <h3 className="text-white font-semibold mb-4">Yardım</h3>
            <ul className="space-y-2.5 text-sm">
              {[
                { href: "/yardim/siparis-takip", label: "Sipariş Takibi" },
                { href: "/yardim/iade", label: "İade & Değişim" },
                { href: "/yardim/beden-rehberi", label: "Beden Rehberi" },
                { href: "/yardim/iletisim", label: "İletişim" },
                { href: "/yardim/sss", label: "Sık Sorulan Sorular" },
              ].map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="hover:text-rose-400 transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-white font-semibold mb-4">Bülten</h3>
            <p className="text-sm text-gray-400 mb-4">
              Yeni koleksiyonlar ve özel indirimler için abone olun.
            </p>
            <form className="flex flex-col gap-2">
              <input
                type="email"
                placeholder="E-posta adresiniz"
                className="px-4 py-2.5 bg-gray-800 border border-gray-700 rounded-lg text-sm text-white placeholder-gray-500 focus:outline-none focus:border-rose-500 transition-colors"
              />
              <button
                type="submit"
                className="px-4 py-2.5 bg-rose-500 hover:bg-rose-600 text-white text-sm font-medium rounded-lg transition-colors"
              >
                Abone Ol
              </button>
            </form>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800 flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-gray-500">
          <p>© 2025 oskan. Tüm hakları saklıdır.</p>
          <div className="flex gap-6">
            <Link href="/gizlilik" className="hover:text-rose-400 transition-colors">Gizlilik Politikası</Link>
            <Link href="/kullanim-sartlari" className="hover:text-rose-400 transition-colors">Kullanım Şartları</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
