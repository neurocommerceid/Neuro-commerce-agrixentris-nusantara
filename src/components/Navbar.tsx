import React from 'react';
import { ShoppingBag } from 'lucide-react';

interface NavbarProps {
  cartCount: number;
  onOpenCartDrawer: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ cartCount, onOpenCartDrawer }) => {
  return (
    <header className="sticky top-0 z-40 bg-[#FAF6F1]/95 backdrop-blur-md border-b border-[#E5D5C0]">
      <div className="max-w-[1360px] mx-auto flex items-center justify-between gap-8 px-6 py-4">
        {/* Zone 1: Single text element wordmark (Top Bar Contract) */}
        <a
          href="#beranda"
          className="font-display text-xl font-bold tracking-tight text-[#2D3819] whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-[#4C5520]"
        >
          AgriXentris Nusantara
        </a>

        {/* Zone 2: 5 concise single-line text navigation links */}
        <nav
          aria-label="Navigasi Utama"
          className="hidden md:flex items-center gap-7 text-sm font-medium text-[#4C5520]"
        >
          <a
            href="#profil"
            className="hover:text-[#1E3A2B] hover:underline underline-offset-4 transition-colors whitespace-nowrap shrink-0"
          >
            Profil
          </a>
          <a
            href="#model-bisnis"
            className="hover:text-[#1E3A2B] hover:underline underline-offset-4 transition-colors whitespace-nowrap shrink-0"
          >
            Model Bisnis
          </a>
          <a
            href="#katalog"
            className="hover:text-[#1E3A2B] hover:underline underline-offset-4 transition-colors whitespace-nowrap shrink-0"
          >
            Katalog Produk
          </a>
          <a
            href="#portofolio"
            className="hover:text-[#1E3A2B] hover:underline underline-offset-4 transition-colors whitespace-nowrap shrink-0"
          >
            Portofolio
          </a>
          <a
            href="#investasi"
            className="hover:text-[#1E3A2B] hover:underline underline-offset-4 transition-colors whitespace-nowrap shrink-0"
          >
            Investasi &amp; Struktur
          </a>
        </nav>

        {/* Zone 3: 1 primary action */}
        <div className="flex items-center gap-3 shrink-0">
          <button
            type="button"
            onClick={onOpenCartDrawer}
            aria-label={`Daftar Pesanan dan Konsultasi (${cartCount} item)`}
            className="inline-flex items-center gap-2 px-4 py-2.5 text-xs font-semibold text-[#FAF6F1] bg-[#1E3A2B] hover:bg-[#4C5520] rounded-lg transition-colors whitespace-nowrap shrink-0 cursor-pointer shadow-xs"
          >
            <ShoppingBag className="w-3.5 h-3.5" aria-hidden="true" />
            <span>Daftar Pesanan ({cartCount})</span>
          </button>
        </div>
      </div>
    </header>
  );
};
