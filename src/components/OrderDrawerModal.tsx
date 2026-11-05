import React from 'react';
import { PRODUCT_CATALOG_7_SKU } from '../data/agrixentrisData';
import {
  CartItem,
  calculateCartSummary,
  formatRupiah,
} from '../utils/catalogLogic';
import { X, Plus, Minus, Trash2, ArrowRight, PackagePlus } from 'lucide-react';

interface OrderDrawerModalProps {
  isOpen: boolean;
  cart: CartItem[];
  onClose: () => void;
  onUpdateQty: (skuId: string, newQty: number) => void;
  onClearCart: () => void;
  onLoadStarterBundle: () => void;
}

export const OrderDrawerModal: React.FC<OrderDrawerModalProps> = ({
  isOpen,
  cart,
  onClose,
  onUpdateQty,
  onClearCart,
  onLoadStarterBundle,
}) => {
  if (!isOpen) return null;

  const summary = calculateCartSummary(cart, PRODUCT_CATALOG_7_SKU);

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="drawer-order-title"
      className="fixed inset-0 z-50 flex justify-end bg-black/50 backdrop-blur-xs"
    >
      <div className="relative w-full max-w-lg bg-[#FAF6F1] h-full flex flex-col justify-between border-l border-[#E5D5C0] shadow-2xl">
        {/* Top Header */}
        <div className="px-6 py-5 bg-[#F0E5D7] border-b border-[#E5D5C0] flex items-center justify-between">
          <div>
            <h2
              id="drawer-order-title"
              className="font-display text-xl font-bold text-[#1E3A2B]"
            >
              Daftar Pesanan &amp; Kalkulator B2B
            </h2>
            <p className="text-xs text-[#4C5520]">
              {summary.totalDistinctSkus} SKU dipilih ({summary.totalItemsCount}{' '}
              total unit)
            </p>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Tutup daftar pesanan"
            className="p-2 rounded-lg text-[#2D3819] hover:bg-[#EADDCC] cursor-pointer"
          >
            <X className="w-5 h-5" aria-hidden="true" />
          </button>
        </div>

        {/* Cart Items List */}
        <div className="flex-1 overflow-y-auto p-6 space-y-4">
          {summary.lines.length === 0 ? (
            <div className="py-12 text-center bg-[#F0E5D7]/50 border border-[#E5D5C0] rounded-xl p-6">
              <p className="font-display text-lg font-bold text-[#1E3A2B] mb-2">
                Daftar Pesanan Masih Kosong
              </p>
              <p className="text-xs text-[#4C5520] leading-relaxed mb-5">
                Pilih produk dari 7 SKU katalog AgriXentris Nusantara atau muat paket contoh pengadaan kebun komersial di bawah ini.
              </p>
              <button
                type="button"
                onClick={onLoadStarterBundle}
                className="inline-flex items-center gap-2 px-4 py-2.5 text-xs font-semibold text-[#FAF6F1] bg-[#1E3A2B] hover:bg-[#4C5520] rounded-lg transition-colors cursor-pointer"
              >
                <PackagePlus className="w-4 h-4" aria-hidden="true" />
                <span>Muat Paket Contoh Kebun Cabai 1.000 m²</span>
              </button>
            </div>
          ) : (
            <>
              <div className="flex items-center justify-between text-xs text-[#4C5520]">
                <span>Item Pengadaan Katalog</span>
                <button
                  type="button"
                  onClick={onClearCart}
                  className="inline-flex items-center gap-1 font-semibold text-[#D95338] hover:underline cursor-pointer"
                >
                  <Trash2 className="w-3.5 h-3.5" aria-hidden="true" />
                  <span>Hapus Semua</span>
                </button>
              </div>

              {summary.lines.map((line) => (
                <div
                  key={line.product.id}
                  className="p-4 rounded-xl bg-[#F0E5D7]/70 border border-[#E5D5C0] space-y-3"
                >
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <span className="font-mono-tabular text-[11px] font-semibold text-[#D95338]">
                        {line.product.sku} ·{' '}
                        {line.isWholesaleApplied
                          ? 'Harga Grosir B2B Aktif'
                          : `MOQ Grosir ${line.product.wholesaleMinQty} unit`}
                      </span>
                      <h3 className="font-display text-base font-bold text-[#1E3A2B]">
                        {line.product.name}
                      </h3>
                      <p className="text-xs text-[#4C5520]">
                        {line.product.unit}
                      </p>
                    </div>
                    <button
                      type="button"
                      onClick={() => onUpdateQty(line.product.id, 0)}
                      aria-label={`Hapus ${line.product.shortTitle}`}
                      className="text-xs text-[#4C5520] hover:text-[#D95338] cursor-pointer"
                    >
                      Hapus
                    </button>
                  </div>

                  <div className="flex items-center justify-between pt-2 border-t border-[#E5D5C0]">
                    <div className="flex items-center gap-2 bg-[#FAF6F1] border border-[#E5D5C0] rounded-lg p-1">
                      <button
                        type="button"
                        onClick={() =>
                          onUpdateQty(line.product.id, line.quantity - 1)
                        }
                        aria-label={`Kurangi jumlah ${line.product.shortTitle}`}
                        className="p-1 rounded hover:bg-[#EADDCC] text-[#1E3A2B] cursor-pointer"
                      >
                        <Minus className="w-3.5 h-3.5" aria-hidden="true" />
                      </button>
                      <span className="font-mono-tabular text-xs font-bold w-8 text-center">
                        {line.quantity}
                      </span>
                      <button
                        type="button"
                        onClick={() =>
                          onUpdateQty(line.product.id, line.quantity + 1)
                        }
                        aria-label={`Tambah jumlah ${line.product.shortTitle}`}
                        className="p-1 rounded hover:bg-[#EADDCC] text-[#1E3A2B] cursor-pointer"
                      >
                        <Plus className="w-3.5 h-3.5" aria-hidden="true" />
                      </button>
                    </div>

                    <div className="text-right">
                      <span className="block font-mono-tabular text-sm font-bold text-[#1E3A2B]">
                        {formatRupiah(line.lineTotal)}
                      </span>
                      <span className="block font-mono-tabular text-[11px] text-[#4C5520]">
                        @{formatRupiah(line.unitPriceApplied)} / unit
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </>
          )}
        </div>

        {/* Drawer Footer Totals & Checkout Jump */}
        <div className="p-6 bg-[#F0E5D7] border-t border-[#E5D5C0] space-y-4">
          <div className="space-y-1.5 text-xs">
            <div className="flex justify-between text-[#4C5520]">
              <span>Subtotal Harga Ritel:</span>
              <span className="font-mono-tabular">
                {formatRupiah(summary.subtotalRetail)}
              </span>
            </div>
            <div className="flex justify-between text-[#2E6F40] font-semibold">
              <span>Potongan Grosir B2B:</span>
              <span className="font-mono-tabular">
                -{formatRupiah(summary.totalSavingsWholesale)}
              </span>
            </div>
            <div className="flex justify-between items-baseline pt-2 border-t border-[#E5D5C0]">
              <span className="text-sm font-bold text-[#1E3A2B]">
                Total Estimasi PO:
              </span>
              <span className="font-mono-tabular text-xl font-bold text-[#1E3A2B]">
                {formatRupiah(summary.grandTotal)}
              </span>
            </div>
          </div>

          <a
            href="#kontak"
            onClick={onClose}
            className="w-full inline-flex items-center justify-center gap-2 px-5 py-3.5 text-xs font-semibold text-[#FAF6F1] bg-[#D95338] hover:bg-[#1E3A2B] rounded-lg transition-colors whitespace-nowrap"
          >
            <span>Lanjutkan ke Formulir Pengadaan (PO)</span>
            <ArrowRight className="w-4 h-4" aria-hidden="true" />
          </a>
        </div>
      </div>
    </div>
  );
};
