import React, { useState } from 'react';
import {
  PRODUCT_CATALOG_7_SKU,
  ProductSKU,
} from '../data/agrixentrisData';
import {
  filterProducts,
  formatRupiah,
  CartItem,
} from '../utils/catalogLogic';
import { ProductPackageIllustration } from './ProductPackageIllustration';
import { Search, Plus, Check, ChevronDown, FileSpreadsheet, LayoutGrid } from 'lucide-react';

interface ProductCatalogSectionProps {
  cart: CartItem[];
  onSelectProduct: (product: ProductSKU) => void;
  onAddProductToCart: (skuId: string, quantity: number) => void;
  onOpenCartDrawer: () => void;
}

const CATEGORIES = [
  'Semua',
  'Benih & Bibit',
  'Pupuk & Biokonversi',
  'Irigasi & Greenhouse',
  'Teknologi & IoT',
] as const;

export const ProductCatalogSection: React.FC<ProductCatalogSectionProps> = ({
  cart,
  onSelectProduct,
  onAddProductToCart,
  onOpenCartDrawer,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('Semua');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [viewMode, setViewMode] = useState<'grid' | 'table'>('grid');
  const [expandedCardId, setExpandedCardId] = useState<string | null>(null);
  const [recentlyAddedId, setRecentlyAddedId] = useState<string | null>(null);

  const filteredProducts = filterProducts(
    PRODUCT_CATALOG_7_SKU,
    selectedCategory,
    searchQuery
  );

  const handleQuickAdd = (skuId: string, qty: number) => {
    onAddProductToCart(skuId, qty);
    setRecentlyAddedId(skuId);
    window.setTimeout(() => {
      setRecentlyAddedId((prev) => (prev === skuId ? null : prev));
    }, 1000);
  };

  const getCartQuantity = (skuId: string): number => {
    const found = cart.find((c) => c.skuId === skuId);
    return found ? found.quantity : 0;
  };

  return (
    <section
      id="katalog"
      className="bg-[#FAF6F1] border-b border-[#E5D5C0] py-10 sm:py-14"
    >
      <div className="max-w-[1360px] mx-auto px-4 sm:px-6">
        {/* Compact Section Header */}
        <div className="flex flex-wrap items-end justify-between gap-3 pb-4 border-b border-[#E5D5C0]">
          <div>
            <p className="text-xs font-semibold text-[#D95338] mb-0.5">
              Katalog Produk Resmi · 7 SKU Inti
            </p>
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-[#1E3A2B]">
              Sarana Produksi &amp; Teknologi Pertanian
            </h2>
          </div>

          <button
            type="button"
            onClick={onOpenCartDrawer}
            className="text-xs font-semibold text-[#1E3A2B] hover:text-[#D95338] underline underline-offset-4 cursor-pointer"
          >
            Buka Kalkulator Grosir B2B &rarr;
          </button>
        </div>

        {/* Compact Filter & Search Bar */}
        <div className="py-3.5 flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-[#E5D5C0]">
          {/* Horizontal Scrollable Category Filter Tabs on Mobile */}
          <div
            role="group"
            aria-label="Filter Kategori Produk"
            className="flex items-center gap-1 overflow-x-auto pb-1 sm:pb-0 no-scrollbar"
          >
            {CATEGORIES.map((category) => {
              const isActive = selectedCategory === category;
              const count =
                category === 'Semua'
                  ? PRODUCT_CATALOG_7_SKU.length
                  : PRODUCT_CATALOG_7_SKU.filter((p) => p.category === category).length;
              return (
                <button
                  key={category}
                  type="button"
                  onClick={() => setSelectedCategory(category)}
                  className={`px-2.5 py-1.5 text-xs font-semibold rounded-md transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                    isActive
                      ? 'bg-[#1E3A2B] text-[#FAF6F1]'
                      : 'bg-[#F0E5D7] text-[#2D3819] hover:bg-[#EADDCC]'
                  }`}
                >
                  {category} ({count})
                </button>
              );
            })}
          </div>

          {/* Search & View Toggle */}
          <div className="flex items-center gap-2">
            <div className="relative flex-1 sm:flex-initial">
              <label htmlFor="catalog-search" className="sr-only">
                Cari nama produk atau kode SKU
              </label>
              <Search
                className="w-3.5 h-3.5 text-[#4C5520] absolute left-2.5 top-1/2 -translate-y-1/2 pointer-events-none"
                aria-hidden="true"
              />
              <input
                id="catalog-search"
                type="search"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Cari SKU / produk..."
                className="w-full sm:w-48 pl-8 pr-3 py-1.5 text-xs bg-[#F0E5D7]/60 border border-[#E5D5C0] rounded-lg text-[#2D3819] placeholder:text-[#4C5520]/70 focus:outline-2 focus:outline-[#4C5520]"
              />
            </div>

            <div
              role="group"
              aria-label="Mode Tampilan Katalog"
              className="flex items-center gap-1 p-0.5 bg-[#F0E5D7] border border-[#E5D5C0] rounded-lg shrink-0"
            >
              <button
                type="button"
                onClick={() => setViewMode('grid')}
                className={`inline-flex items-center gap-1 px-2.5 py-1 text-xs font-semibold rounded transition-colors cursor-pointer ${
                  viewMode === 'grid'
                    ? 'bg-[#1E3A2B] text-[#FAF6F1]'
                    : 'text-[#2D3819]'
                }`}
              >
                <LayoutGrid className="w-3 h-3" aria-hidden="true" />
                <span>Grid</span>
              </button>
              <button
                type="button"
                onClick={() => setViewMode('table')}
                className={`inline-flex items-center gap-1 px-2.5 py-1 text-xs font-semibold rounded transition-colors cursor-pointer ${
                  viewMode === 'table'
                    ? 'bg-[#1E3A2B] text-[#FAF6F1]'
                    : 'text-[#2D3819]'
                }`}
              >
                <FileSpreadsheet className="w-3 h-3" aria-hidden="true" />
                <span>Tabel</span>
              </button>
            </div>
          </div>
        </div>

        {/* Empty State */}
        {filteredProducts.length === 0 ? (
          <div className="py-10 text-center bg-[#F0E5D7]/40 rounded-xl border border-[#E5D5C0] my-6">
            <p className="font-display text-base font-semibold text-[#1E3A2B] mb-2">
              Tidak ada SKU untuk &ldquo;{searchQuery}&rdquo;
            </p>
            <button
              type="button"
              onClick={() => {
                setSelectedCategory('Semua');
                setSearchQuery('');
              }}
              className="px-3.5 py-1.5 text-xs font-semibold text-[#FAF6F1] bg-[#1E3A2B] rounded-lg cursor-pointer"
            >
              Tampilkan Semua 7 SKU
            </button>
          </div>
        ) : viewMode === 'grid' ? (
          /* COMPACT 2-Column Mobile / 4-Column Desktop Grid — 4 cards fit in 1 screen! */
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 pt-5">
            {filteredProducts.map((product) => {
              const inCartQty = getCartQuantity(product.id);
              const isJustAdded = recentlyAddedId === product.id;
              const isExpanded = expandedCardId === product.id;

              return (
                <article
                  key={product.id}
                  className="bg-[#F0E5D7]/60 hover:bg-[#F0E5D7] border border-[#E5D5C0] rounded-xl overflow-hidden flex flex-col justify-between transition-colors"
                >
                  <div>
                    {/* Compact Visual Stage (h-28 on mobile, h-36 on desktop) */}
                    <button
                      type="button"
                      onClick={() => onSelectProduct(product)}
                      aria-label={`Buka spesifikasi ${product.shortTitle}`}
                      className="relative w-full h-28 sm:h-36 bg-[#EADDCC] border-b border-[#E5D5C0] overflow-hidden flex items-center justify-center p-2 cursor-pointer text-left"
                    >
                      <img
                        src={product.image}
                        alt={product.shortTitle}
                        referrerPolicy="no-referrer"
                        className="absolute inset-0 w-full h-full object-cover opacity-20"
                      />
                      <span className="absolute top-1.5 left-2 z-20 px-1.5 py-0.5 rounded bg-[#FAF6F1]/90 font-mono-tabular text-[9px] font-bold text-[#1E3A2B]">
                        {product.sku}
                      </span>
                      <span className="absolute top-1.5 right-2 z-20 px-1.5 py-0.5 rounded bg-[#FAF6F1]/90 font-mono-tabular text-[9px] text-[#4C5520]">
                        MOQ &ge;{product.wholesaleMinQty}
                      </span>

                      <div className="relative z-10 scale-[0.62] sm:scale-80 translate-y-2">
                        <ProductPackageIllustration product={product} size="sm" />
                      </div>
                    </button>

                    {/* Compact Card Body */}
                    <div className="p-3 sm:p-4">
                      <p className="text-[10px] text-[#4C5520] truncate">
                        {product.category} · {product.unit.split('(')[0]}
                      </p>
                      <h3 className="font-display text-xs sm:text-sm font-bold text-[#1E3A2B] leading-snug line-clamp-2 mt-0.5 min-h-[2.25rem]">
                        {product.shortTitle}
                      </h3>

                      {/* Price Row */}
                      <div className="mt-2 pt-2 border-t border-[#E5D5C0] flex items-baseline justify-between gap-1">
                        <div>
                          <span className="block text-[10px] text-[#4C5520]">
                            Grosir B2B
                          </span>
                          <span className="font-mono-tabular text-xs sm:text-sm font-bold text-[#1E3A2B]">
                            {formatRupiah(product.wholesalePrice)}
                          </span>
                        </div>
                        <span className="font-mono-tabular text-[10px] text-[#4C5520] line-through">
                          {formatRupiah(product.retailPrice)}
                        </span>
                      </div>

                      {/* Expandable Details Arrow Button ("kalo mau baca klik panah biar kebuka") */}
                      <button
                        type="button"
                        onClick={() =>
                          setExpandedCardId(isExpanded ? null : product.id)
                        }
                        aria-expanded={isExpanded}
                        className="mt-2 w-full flex items-center justify-between text-[11px] font-semibold text-[#4C5520] hover:text-[#1E3A2B] py-1 cursor-pointer"
                      >
                        <span>{isExpanded ? 'Tutup info' : 'Info & keunggulan'}</span>
                        <ChevronDown
                          className={`w-3.5 h-3.5 transition-transform duration-150 ${
                            isExpanded ? 'rotate-180' : ''
                          }`}
                          aria-hidden="true"
                        />
                      </button>

                      {isExpanded && (
                        <div className="mt-1.5 pt-2 border-t border-[#E5D5C0] text-[11px] text-[#2D3819] space-y-1.5">
                          <p className="leading-relaxed">{product.tagline}</p>
                          <button
                            type="button"
                            onClick={() => onSelectProduct(product)}
                            className="text-[11px] font-bold text-[#D95338] hover:underline cursor-pointer block"
                          >
                            Lihat Tabel Spek &amp; SOP Lengkap &rarr;
                          </button>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Compact Action Footer */}
                  <div className="px-3 pb-3 pt-1 flex items-center gap-1.5">
                    <button
                      type="button"
                      onClick={() => onSelectProduct(product)}
                      className="px-2.5 py-2 text-[11px] font-semibold text-[#1E3A2B] bg-[#FAF6F1] hover:bg-[#EADDCC] border border-[#E5D5C0] rounded-lg cursor-pointer shrink-0"
                    >
                      SOP
                    </button>

                    <button
                      type="button"
                      onClick={() => handleQuickAdd(product.id, 1)}
                      className={`flex-1 inline-flex items-center justify-center gap-1 px-2.5 py-2 text-[11px] font-semibold rounded-lg transition-colors cursor-pointer whitespace-nowrap ${
                        isJustAdded
                          ? 'bg-[#2E6F40] text-white'
                          : 'bg-[#1E3A2B] hover:bg-[#D95338] text-[#FAF6F1]'
                      }`}
                    >
                      {isJustAdded ? (
                        <>
                          <Check className="w-3 h-3" aria-hidden="true" />
                          <span>+{inCartQty}</span>
                        </>
                      ) : (
                        <>
                          <Plus className="w-3 h-3" aria-hidden="true" />
                          <span>
                            {inCartQty > 0 ? `Pesan (${inCartQty})` : 'Pesan'}
                          </span>
                        </>
                      )}
                    </button>
                  </div>
                </article>
              );
            })}
          </div>
        ) : (
          /* Compact B2B Table View */
          <div className="mt-5 overflow-x-auto bg-[#F0E5D7]/50 border border-[#E5D5C0] rounded-xl">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-[#E5D5C0] bg-[#F0E5D7] text-xs font-semibold text-[#1E3A2B]">
                  <th className="py-2.5 px-3">SKU</th>
                  <th className="py-2.5 px-3">Produk</th>
                  <th className="py-2.5 px-3 text-right">Grosir B2B</th>
                  <th className="py-2.5 px-3 text-center">MOQ</th>
                  <th className="py-2.5 px-3 text-right">Aksi</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#E5D5C0] text-xs">
                {filteredProducts.map((product) => {
                  const inCartQty = getCartQuantity(product.id);
                  return (
                    <tr key={product.id} className="hover:bg-[#FAF6F1]">
                      <td className="py-2.5 px-3 font-mono-tabular font-semibold text-[#D95338] whitespace-nowrap">
                        {product.sku}
                      </td>
                      <td className="py-2.5 px-3">
                        <button
                          type="button"
                          onClick={() => onSelectProduct(product)}
                          className="font-semibold text-[#1E3A2B] hover:underline text-left cursor-pointer"
                        >
                          {product.shortTitle}
                        </button>
                      </td>
                      <td className="py-2.5 px-3 font-mono-tabular text-right font-bold text-[#1E3A2B] whitespace-nowrap">
                        {formatRupiah(product.wholesalePrice)}
                      </td>
                      <td className="py-2.5 px-3 font-mono-tabular text-center whitespace-nowrap">
                        &ge;{product.wholesaleMinQty}
                      </td>
                      <td className="py-2.5 px-3 text-right whitespace-nowrap">
                        <button
                          type="button"
                          onClick={() =>
                            handleQuickAdd(product.id, product.wholesaleMinQty)
                          }
                          className="px-2.5 py-1 font-semibold text-[#FAF6F1] bg-[#1E3A2B] hover:bg-[#D95338] rounded cursor-pointer"
                        >
                          +MOQ {inCartQty > 0 ? `(${inCartQty})` : ''}
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </section>
  );
};
