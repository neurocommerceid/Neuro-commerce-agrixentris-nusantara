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
import { Search, Plus, Check, FileSpreadsheet, LayoutGrid, SlidersHorizontal } from 'lucide-react';

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
    }, 1200);
  };

  const getCartQuantity = (skuId: string): number => {
    const found = cart.find((c) => c.skuId === skuId);
    return found ? found.quantity : 0;
  };

  return (
    <section
      id="katalog"
      className="bg-[#FAF6F1] border-b border-[#E5D5C0] py-16 lg:py-24"
    >
      <div className="max-w-[1360px] mx-auto px-6">
        {/* Northeast Tomato "Our full line" Editorial Header */}
        <div className="flex flex-wrap items-end justify-between gap-6 pb-8 border-b border-[#E5D5C0]">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold text-[#D95338] mb-2">
              Katalog Produk Resmi · 7 SKU Inti
            </p>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1E3A2B] leading-tight">
              Lini Sarana Produksi &amp; Teknologi Pertanian.
            </h2>
          </div>
          <p className="text-sm text-[#4C5520] max-w-md leading-relaxed">
            Setiap produk dalam katalog 7 SKU AgriXentris Nusantara telah melewati uji adaptasi lapangan, dilengkapi SOP aplikasi terukur, dan melayani pengadaan ritel maupun grosir B2B.
          </p>
        </div>

        {/* Interactive Toolbar: Category Filter Buttons + Search + View Switcher */}
        <div className="py-6 flex flex-wrap items-center justify-between gap-4 border-b border-[#E5D5C0]">
          {/* Functional Category Filter Buttons */}
          <div
            role="group"
            aria-label="Filter Kategori Produk"
            className="flex flex-wrap items-center gap-1.5 p-1 bg-[#F0E5D7] border border-[#E5D5C0] rounded-lg"
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
                  className={`px-3.5 py-2 text-xs font-semibold rounded-md transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                    isActive
                      ? 'bg-[#1E3A2B] text-[#FAF6F1] shadow-xs'
                      : 'text-[#2D3819] hover:bg-[#EADDCC]'
                  }`}
                >
                  {category} ({count})
                </button>
              );
            })}
          </div>

          {/* Right Controls: Search Input & View Mode Toggle */}
          <div className="flex flex-wrap items-center gap-3">
            <div className="relative">
              <label htmlFor="catalog-search" className="sr-only">
                Cari nama produk atau kode SKU
              </label>
              <Search
                className="w-4 h-4 text-[#4C5520] absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none"
                aria-hidden="true"
              />
              <input
                id="catalog-search"
                type="search"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Cari SKU, cabai, AB mix, IoT..."
                className="pl-9 pr-4 py-2 text-xs bg-[#F0E5D7]/60 border border-[#E5D5C0] rounded-lg text-[#2D3819] placeholder:text-[#4C5520]/70 focus:outline-2 focus:outline-[#4C5520] w-56 sm:w-64"
              />
            </div>

            <div
              role="group"
              aria-label="Mode Tampilan Katalog"
              className="flex items-center gap-1 p-1 bg-[#F0E5D7] border border-[#E5D5C0] rounded-lg"
            >
              <button
                type="button"
                onClick={() => setViewMode('grid')}
                className={`inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-md transition-colors cursor-pointer whitespace-nowrap ${
                  viewMode === 'grid'
                    ? 'bg-[#1E3A2B] text-[#FAF6F1]'
                    : 'text-[#2D3819] hover:bg-[#EADDCC]'
                }`}
              >
                <LayoutGrid className="w-3.5 h-3.5" aria-hidden="true" />
                <span>Kartu</span>
              </button>
              <button
                type="button"
                onClick={() => setViewMode('table')}
                className={`inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-md transition-colors cursor-pointer whitespace-nowrap ${
                  viewMode === 'table'
                    ? 'bg-[#1E3A2B] text-[#FAF6F1]'
                    : 'text-[#2D3819] hover:bg-[#EADDCC]'
                }`}
              >
                <FileSpreadsheet className="w-3.5 h-3.5" aria-hidden="true" />
                <span>Tabel B2B</span>
              </button>
            </div>
          </div>
        </div>

        {/* Empty State if Search Doesn't Match */}
        {filteredProducts.length === 0 ? (
          <div className="py-16 text-center bg-[#F0E5D7]/40 rounded-xl border border-[#E5D5C0] my-8">
            <p className="font-display text-xl font-semibold text-[#1E3A2B] mb-2">
              Tidak ada SKU yang cocok dengan pencarian &ldquo;{searchQuery}&rdquo;
            </p>
            <p className="text-xs text-[#4C5520] mb-5">
              Coba kata kunci lain atau tampilkan kembali seluruh 7 SKU katalog AgriXentris Nusantara.
            </p>
            <button
              type="button"
              onClick={() => {
                setSelectedCategory('Semua');
                setSearchQuery('');
              }}
              className="px-4 py-2 text-xs font-semibold text-[#FAF6F1] bg-[#1E3A2B] rounded-lg hover:bg-[#4C5520] transition-colors cursor-pointer"
            >
              Reset Filter Katalog
            </button>
          </div>
        ) : viewMode === 'grid' ? (
          /* 3-Column Storefront Product Grid (Northeast Tomato Product Card Architecture) */
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 pt-8">
            {filteredProducts.map((product) => {
              const inCartQty = getCartQuantity(product.id);
              const isJustAdded = recentlyAddedId === product.id;

              return (
                <article
                  key={product.id}
                  className="group bg-[#F0E5D7]/60 hover:bg-[#F0E5D7] border border-[#E5D5C0] rounded-xl overflow-hidden flex flex-col justify-between transition-all duration-150 hover:-translate-y-0.5"
                >
                  <div>
                    {/* Visual Stage: 65%+ visual showcase with subtle photo backdrop + custom package illustration */}
                    <div className="relative h-64 bg-[#EADDCC] border-b border-[#E5D5C0] overflow-hidden flex items-center justify-center p-6">
                      <img
                        src={product.image}
                        alt={product.name}
                        referrerPolicy="no-referrer"
                        className="absolute inset-0 w-full h-full object-cover opacity-25 group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#F0E5D7]/90 via-[#FAF6F1]/40 to-transparent" />

                      {/* Top Unboxed Metadata Row */}
                      <div className="absolute top-3.5 left-4 right-4 flex items-center justify-between text-xs font-mono-tabular text-[#1E3A2B]">
                        <span className="font-semibold">{product.sku}</span>
                        <span>{product.stockStatus}</span>
                      </div>

                      {/* Center Package Illustration */}
                      <div className="relative z-10 mt-3 transition-transform duration-200 group-hover:scale-105">
                        <ProductPackageIllustration product={product} size="md" />
                      </div>

                      {/* Bottom Unit Caption */}
                      <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-[11px] text-[#3A3C31]">
                        <span>{product.category}</span>
                        <span className="font-mono-tabular font-semibold">
                          MOQ Grosir: &ge;{product.wholesaleMinQty} unit
                        </span>
                      </div>
                    </div>

                    {/* Product Copy & Specifications Preview */}
                    <div className="p-6">
                      <h3 className="font-display text-xl font-bold text-[#1E3A2B] leading-snug mb-2">
                        {product.name}
                      </h3>
                      <p className="text-xs text-[#4C5520] mb-3">
                        Kemasan: {product.unit}
                      </p>
                      <p className="text-sm text-[#3A3C31] leading-relaxed mb-4">
                        {product.tagline}
                      </p>

                      <ul className="space-y-1.5 mb-5 border-t border-[#E5D5C0] pt-3">
                        {product.highlights.slice(0, 2).map((hl) => (
                          <li
                            key={hl}
                            className="text-xs text-[#2D3819] flex items-start gap-2"
                          >
                            <span className="text-[#D95338] font-bold">&middot;</span>
                            <span>{hl}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Contiguous Pricing & Action Footer */}
                  <div className="px-6 pb-6 pt-4 border-t border-[#E5D5C0] bg-[#FAF6F1]/70">
                    <div className="flex items-baseline justify-between gap-2 mb-4">
                      <div>
                        <span className="block text-[11px] text-[#4C5520]">
                          Harga Grosir B2B (&ge;{product.wholesaleMinQty} unit)
                        </span>
                        <span className="font-mono-tabular text-lg font-bold text-[#1E3A2B]">
                          {formatRupiah(product.wholesalePrice)}
                        </span>
                      </div>
                      <div className="text-right">
                        <span className="block text-[11px] text-[#4C5520]">
                          Harga Ritel Satuan
                        </span>
                        <span className="font-mono-tabular text-sm font-medium text-[#3A3C31]">
                          {formatRupiah(product.retailPrice)}
                        </span>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-2.5">
                      <button
                        type="button"
                        onClick={() => onSelectProduct(product)}
                        className="inline-flex items-center justify-center gap-1.5 px-3 py-2.5 text-xs font-semibold text-[#1E3A2B] bg-[#F0E5D7] hover:bg-[#EADDCC] border border-[#E5D5C0] rounded-lg transition-colors whitespace-nowrap shrink-0 cursor-pointer"
                      >
                        <SlidersHorizontal className="w-3.5 h-3.5" aria-hidden="true" />
                        <span>Spesifikasi &amp; SOP</span>
                      </button>

                      <button
                        type="button"
                        onClick={() => handleQuickAdd(product.id, 1)}
                        className={`inline-flex items-center justify-center gap-1.5 px-3 py-2.5 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                          isJustAdded
                            ? 'bg-[#2E6F40] text-white'
                            : 'bg-[#1E3A2B] hover:bg-[#D95338] text-[#FAF6F1]'
                        }`}
                      >
                        {isJustAdded ? (
                          <>
                            <Check className="w-3.5 h-3.5" aria-hidden="true" />
                            <span>Ditambahkan ({inCartQty})</span>
                          </>
                        ) : (
                          <>
                            <Plus className="w-3.5 h-3.5" aria-hidden="true" />
                            <span>
                              {inCartQty > 0
                                ? `Tambah Lagi (${inCartQty})`
                                : 'Tambah Pesanan'}
                            </span>
                          </>
                        )}
                      </button>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        ) : (
          /* B2B Specification & Wholesale Table View */
          <div className="mt-8 overflow-x-auto bg-[#F0E5D7]/50 border border-[#E5D5C0] rounded-xl">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-[#E5D5C0] bg-[#F0E5D7] text-xs font-semibold text-[#1E3A2B]">
                  <th className="py-3.5 px-4">Kode SKU</th>
                  <th className="py-3.5 px-4">Nama Produk &amp; Kategori</th>
                  <th className="py-3.5 px-4">Satuan Kemasan</th>
                  <th className="py-3.5 px-4 text-right">Harga Ritel</th>
                  <th className="py-3.5 px-4 text-right">Harga Grosir B2B</th>
                  <th className="py-3.5 px-4 text-center">MOQ Grosir</th>
                  <th className="py-3.5 px-4 text-right">Aksi Pengadaan</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#E5D5C0] text-sm">
                {filteredProducts.map((product) => {
                  const inCartQty = getCartQuantity(product.id);
                  return (
                    <tr
                      key={product.id}
                      className="hover:bg-[#FAF6F1] transition-colors"
                    >
                      <td className="py-4 px-4 font-mono-tabular text-xs font-semibold text-[#D95338] whitespace-nowrap">
                        {product.sku}
                      </td>
                      <td className="py-4 px-4">
                        <button
                          type="button"
                          onClick={() => onSelectProduct(product)}
                          className="font-semibold text-[#1E3A2B] hover:underline text-left cursor-pointer"
                        >
                          {product.name}
                        </button>
                        <p className="text-xs text-[#4C5520] mt-0.5">
                          {product.category} · {product.stockStatus}
                        </p>
                      </td>
                      <td className="py-4 px-4 text-xs text-[#3A3C31]">
                        {product.unit}
                      </td>
                      <td className="py-4 px-4 font-mono-tabular text-right text-xs text-[#3A3C31] whitespace-nowrap">
                        {formatRupiah(product.retailPrice)}
                      </td>
                      <td className="py-4 px-4 font-mono-tabular text-right font-bold text-[#1E3A2B] whitespace-nowrap">
                        {formatRupiah(product.wholesalePrice)}
                      </td>
                      <td className="py-4 px-4 font-mono-tabular text-center text-xs text-[#2D3819] whitespace-nowrap">
                        &ge; {product.wholesaleMinQty} unit
                      </td>
                      <td className="py-4 px-4 text-right whitespace-nowrap">
                        <div className="inline-flex items-center gap-2">
                          <button
                            type="button"
                            onClick={() => onSelectProduct(product)}
                            className="px-2.5 py-1.5 text-xs font-medium text-[#1E3A2B] bg-[#F0E5D7] hover:bg-[#EADDCC] border border-[#E5D5C0] rounded-md cursor-pointer"
                          >
                            Detail
                          </button>
                          <button
                            type="button"
                            onClick={() =>
                              handleQuickAdd(product.id, product.wholesaleMinQty)
                            }
                            className="px-3 py-1.5 text-xs font-semibold text-[#FAF6F1] bg-[#1E3A2B] hover:bg-[#D95338] rounded-md cursor-pointer"
                          >
                            + MOQ ({product.wholesaleMinQty})
                            {inCartQty > 0 ? ` [${inCartQty}]` : ''}
                          </button>
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        )}

        {/* Bottom B2B Procurement Callout Strip */}
        <div className="mt-10 bg-[#1E3A2B] text-[#FAF6F1] rounded-xl p-6 sm:p-8 flex flex-wrap items-center justify-between gap-6">
          <div>
            <p className="text-xs text-[#EADDCC] mb-1">
              Pengadaan Koperasi Tani, Korporasi &amp; Dinas Pemerintah Daerah
            </p>
            <h3 className="font-display text-xl sm:text-2xl font-bold">
              Butuh Paket Bundling Proyek atau Penawaran Harga Grosir (PO)?
            </h3>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <button
              type="button"
              onClick={onOpenCartDrawer}
              className="px-5 py-3 text-xs font-semibold text-[#1E3A2B] bg-[#FAF6F1] hover:bg-[#EADDCC] rounded-lg transition-colors cursor-pointer whitespace-nowrap"
            >
              Buka Kalkulator Pesanan B2B
            </button>
            <a
              href="#kontak"
              className="px-5 py-3 text-xs font-semibold text-[#FAF6F1] bg-[#D95338] hover:bg-[#B84028] rounded-lg transition-colors whitespace-nowrap"
            >
              Ajukan Permintaan Penawaran (RFQ)
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
