"use client";

import Link from "next/link";
import { ShoppingBag, Search, Menu, X, Heart } from "lucide-react";
import { useState } from "react";
import { useCartStore } from "@/lib/store";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const totalItems = useCartStore((s) => s.getTotalItems());

  const navLinks = [
    { href: "/urunler", label: "Tüm Ürünler" },
    { href: "/urunler?kategori=elbise", label: "Elbise" },
    { href: "/urunler?kategori=bluz", label: "Bluz & Gömlek" },
    { href: "/urunler?kategori=pantolon", label: "Pantolon" },
    { href: "/urunler?kategori=etek", label: "Etek" },
    { href: "/urunler?kategori=dis-giyim", label: "Dış Giyim" },
  ];

  return (
    <header className="bg-white border-b border-gray-100 sticky top-0 z-50">
      {/* Top bar */}
      <div className="bg-rose-500 text-white text-center py-2 text-sm font-medium tracking-wide">
        Ücretsiz Kargo — 500 TL ve üzeri siparişlerde
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Mobile menu button */}
          <button
            className="lg:hidden p-2 text-gray-600 hover:text-rose-500 transition-colors"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>

          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <span className="text-2xl font-bold tracking-tight text-gray-900">
              oskan<span className="text-rose-500">.</span>
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-7">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-gray-600 hover:text-rose-500 transition-colors whitespace-nowrap"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Icons */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => setSearchOpen(!searchOpen)}
              className="p-2 text-gray-600 hover:text-rose-500 transition-colors"
            >
              <Search size={20} />
            </button>
            <Link href="/favoriler" className="p-2 text-gray-600 hover:text-rose-500 transition-colors hidden sm:block">
              <Heart size={20} />
            </Link>
            <Link href="/sepet" className="relative p-2 text-gray-600 hover:text-rose-500 transition-colors">
              <ShoppingBag size={20} />
              {totalItems > 0 && (
                <span className="absolute -top-0.5 -right-0.5 bg-rose-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center font-bold">
                  {totalItems}
                </span>
              )}
            </Link>
          </div>
        </div>

        {/* Search bar */}
        {searchOpen && (
          <div className="pb-4">
            <form action="/urunler" method="get">
              <div className="relative">
                <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  name="q"
                  placeholder="Ürün ara..."
                  autoFocus
                  className="w-full pl-9 pr-4 py-2.5 border border-gray-200 rounded-full text-sm focus:outline-none focus:border-rose-400 transition-colors"
                />
              </div>
            </form>
          </div>
        )}
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="lg:hidden border-t border-gray-100 bg-white">
          <nav className="max-w-7xl mx-auto px-4 py-4 flex flex-col gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="px-3 py-2.5 text-sm font-medium text-gray-700 hover:text-rose-500 hover:bg-rose-50 rounded-lg transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
