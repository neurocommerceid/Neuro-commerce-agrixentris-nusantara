import React, { useState } from 'react';
import { ShoppingBag, Menu, X } from 'lucide-react';

export type PageId = 'home' | 'about' | 'katalog' | 'portofolio';

interface NavbarProps {
  activePage: PageId;
  onNavigate: (page: PageId) => void;
  cartCount: number;
  onOpenCartDrawer: () => void;
}

const NAV_ITEMS: { id: PageId; label: string }[] = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'katalog', label: 'Katalog' },
  { id: 'portofolio', label: 'Portofolio' },
];

export const Navbar: React.FC<NavbarProps> = ({
  activePage,
  onNavigate,
  cartCount,
  onOpenCartDrawer,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);

  const handleSelectPage = (page: PageId) => {
    onNavigate(page);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior });
  };

  return (
    <header className="sticky top-0 z-40 bg-[#FAF6F1]/95 backdrop-blur-md border-b border-[#E5D5C0] w-full">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-2 sm:gap-6 px-3.5 sm:px-6 lg:px-8 py-3">
        {/* Zone 1: Corporate Brand Wordmark */}
        <button
          type="button"
          onClick={() => handleSelectPage('home')}
          className="font-display text-base sm:text-xl font-bold tracking-tight text-[#1E3A2B] whitespace-nowrap truncate max-w-[180px] sm:max-w-none shrink-0 text-left cursor-pointer"
        >
          AgriXentris Nusantara
        </button>

        {/* Zone 2: 4 Corporate Page Links on Desktop */}
        <nav
          aria-label="Navigasi Halaman Utama"
          className="hidden md:flex items-center gap-1 bg-[#F0E5D7]/70 p-1 rounded-xl border border-[#E5D5C0]"
        >
          {NAV_ITEMS.map((item) => {
            const isActive = activePage === item.id;
            return (
              <button
                key={item.id}
                type="button"
                onClick={() => handleSelectPage(item.id)}
                data-testid={`nav-${item.id}`}
                className={`px-4 py-1.5 rounded-lg text-xs sm:text-sm font-semibold transition-colors cursor-pointer ${
                  isActive
                    ? 'bg-[#1E3A2B] text-[#FAF6F1] shadow-2xs'
                    : 'text-[#2D3819] hover:text-[#1E3A2B] hover:bg-[#EADDCC]/60'
                }`}
              >
                {item.label}
              </button>
            );
          })}
        </nav>

        {/* Zone 3: Cart Drawer Trigger & Mobile Hamburger */}
        <div className="flex items-center gap-1.5 sm:gap-2.5 shrink-0">
          <button
            type="button"
            onClick={onOpenCartDrawer}
            aria-label={`Daftar Pesanan (${cartCount} item)`}
            className="inline-flex items-center gap-1.5 px-2.5 sm:px-4 py-2 text-xs font-semibold text-[#FAF6F1] bg-[#1E3A2B] hover:bg-[#2E6F40] rounded-lg transition-colors whitespace-nowrap shrink-0 cursor-pointer"
          >
            <ShoppingBag className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
            <span className="sm:hidden">Pesanan ({cartCount})</span>
            <span className="hidden sm:inline">Daftar Pesanan ({cartCount})</span>
          </button>

          <button
            type="button"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            aria-label="Menu navigasi"
            aria-expanded={mobileMenuOpen}
            className="md:hidden p-2 rounded-lg text-[#1E3A2B] bg-[#F0E5D7] border border-[#E5D5C0] cursor-pointer shrink-0"
          >
            {mobileMenuOpen ? (
              <X className="w-4 h-4" aria-hidden="true" />
            ) : (
              <Menu className="w-4 h-4" aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Quick Page Bar (Always visible on mobile so switching 4 pages is 1 tap) */}
      <div className="md:hidden border-t border-[#E5D5C0] bg-[#F6F2EA] px-3 py-1.5 grid grid-cols-4 gap-1.5">
        {NAV_ITEMS.map((item) => {
          const isActive = activePage === item.id;
          return (
            <button
              key={item.id}
              type="button"
              onClick={() => handleSelectPage(item.id)}
              data-testid={`mobile-tab-${item.id}`}
              className={`py-1.5 rounded-lg text-xs font-semibold text-center transition-colors cursor-pointer ${
                isActive
                  ? 'bg-[#1E3A2B] text-[#FAF6F1]'
                  : 'text-[#2D3819] hover:bg-[#EADDCC]/70'
              }`}
            >
              {item.label}
            </button>
          );
        })}
      </div>

      {/* Optional Mobile Dropdown Drawer */}
      {mobileMenuOpen && (
        <nav
          aria-label="Menu Mobile Tambahan"
          className="md:hidden border-t border-[#E5D5C0] bg-[#FAF6F1] px-3.5 py-3 space-y-2 text-xs font-semibold text-[#1E3A2B]"
        >
          <div className="grid grid-cols-2 gap-2">
            {NAV_ITEMS.map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => handleSelectPage(item.id)}
                className={`px-3 py-2 rounded-lg text-left cursor-pointer ${
                  activePage === item.id
                    ? 'bg-[#1E3A2B] text-[#FAF6F1]'
                    : 'bg-[#F0E5D7]/70 text-[#1E3A2B]'
                }`}
              >
                Halaman {item.label}
              </button>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
};
