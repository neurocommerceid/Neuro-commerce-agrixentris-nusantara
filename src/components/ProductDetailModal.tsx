import React, { useState } from 'react';
import { ProductSKU } from '../data/agrixentrisData';
import { formatRupiah } from '../utils/catalogLogic';
import { ProductPackageIllustration } from './ProductPackageIllustration';
import { X, Plus, Minus, ShoppingBag } from 'lucide-react';

interface ProductDetailModalProps {
  product: ProductSKU | null;
  onClose: () => void;
  onAddToCart: (skuId: string, quantity: number) => void;
}

export const ProductDetailModal: React.FC<ProductDetailModalProps> = ({
  product,
  onClose,
  onAddToCart,
}) => {
  const [quantity, setQuantity] = useState<number>(
    product ? product.wholesaleMinQty : 1
  );

  React.useEffect(() => {
    if (product) {
      setQuantity(product.wholesaleMinQty);
    }
  }, [product]);

  if (!product) return null;

  const isWholesale = quantity >= product.wholesaleMinQty;
  const activeUnitPrice = isWholesale
    ? product.wholesalePrice
    : product.retailPrice;
  const lineTotal = activeUnitPrice * quantity;
  const savings = (product.retailPrice - activeUnitPrice) * quantity;

  const handleConfirmAdd = () => {
    onAddToCart(product.id, quantity);
    onClose();
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-product-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs overflow-y-auto"
    >
      <div className="relative w-full max-w-4xl bg-[#FAF6F1] border border-[#E5D5C0] rounded-2xl overflow-hidden shadow-2xl my-8">
        {/* Top Modal Header */}
        <div className="flex items-center justify-between px-6 py-4 bg-[#F0E5D7] border-b border-[#E5D5C0]">
          <div className="flex items-center gap-2 text-xs font-mono-tabular text-[#4C5520]">
            <span>Lembar Spesifikasi Teknis &amp; SOP</span>
            <span>·</span>
            <span className="font-bold text-[#1E3A2B]">{product.sku}</span>
            <span>·</span>
            <span>{product.category}</span>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Tutup detail produk"
            className="p-1.5 rounded-lg text-[#2D3819] hover:bg-[#EADDCC] transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" aria-hidden="true" />
          </button>
        </div>

        {/* Contiguous Purchase & Specification Body */}
        <div className="grid grid-cols-1 lg:grid-cols-12 max-h-[82vh] overflow-y-auto">
          {/* Left Column: Visual & SOP */}
          <div className="lg:col-span-5 bg-[#EADDCC]/60 p-6 lg:p-8 border-b lg:border-b-0 lg:border-r border-[#E5D5C0] flex flex-col justify-between">
            <div>
              <div className="relative h-64 rounded-xl overflow-hidden border border-[#E5D5C0] bg-[#FAF6F1] flex items-center justify-center mb-6">
                <img
                  src={product.image}
                  alt={product.name}
                  referrerPolicy="no-referrer"
                  className="absolute inset-0 w-full h-full object-cover opacity-20"
                />
                <div className="relative z-10">
                  <ProductPackageIllustration product={product} size="lg" />
                </div>
              </div>

              <div className="bg-[#FAF6F1] border border-[#E5D5C0] rounded-xl p-4 mb-4">
                <h4 className="text-xs font-semibold text-[#1E3A2B] mb-1.5">
                  Panduan SOP Aplikasi Lapangan:
                </h4>
                <p className="text-xs text-[#3A3C31] leading-relaxed">
                  {product.sopSummary}
                </p>
              </div>
            </div>

            <div className="text-xs text-[#4C5520] space-y-1">
              <p>
                <strong className="text-[#1E3A2B]">Rekomendasi Pengguna:</strong>{' '}
                {product.targetUsers}
              </p>
              <p>
                <strong className="text-[#1E3A2B]">Estimasi Pengiriman:</strong>{' '}
                {product.leadTime}
              </p>
            </div>
          </div>

          {/* Right Column: Title, Specs Table & B2B Quantity Calculator */}
          <div className="lg:col-span-7 p-6 lg:p-8 flex flex-col justify-between">
            <div>
              <h3
                id="modal-product-title"
                className="font-display text-2xl sm:text-3xl font-bold text-[#1E3A2B] leading-snug mb-2"
              >
                {product.name}
              </h3>
              <p className="text-xs text-[#4C5520] mb-4">
                {product.packSize} · Status: {product.stockStatus}
              </p>
              <p className="text-sm text-[#2D3819] leading-relaxed mb-6">
                {product.description}
              </p>

              {/* Technical Specifications Table */}
              <div className="mb-6">
                <h4 className="text-xs font-semibold text-[#4C5520] mb-2.5">
                  Parameter &amp; Spesifikasi Teknis:
                </h4>
                <dl className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {product.specifications.map((spec) => (
                    <div
                      key={spec.label}
                      className="p-3 rounded-lg bg-[#F0E5D7]/60 border border-[#E5D5C0]"
                    >
                      <dt className="text-[11px] text-[#4C5520]">{spec.label}</dt>
                      <dd className="font-mono-tabular text-xs font-semibold text-[#1E3A2B] mt-0.5">
                        {spec.value}
                      </dd>
                    </div>
                  ))}
                </dl>
              </div>
            </div>

            {/* Interactive Purchase Calculator Module */}
            <div className="bg-[#F0E5D7] border border-[#E5D5C0] rounded-xl p-5">
              <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
                <div>
                  <span className="text-xs text-[#4C5520] block">
                    Simulasi Kuantitas Pengadaan:
                  </span>
                  <span className="text-xs font-semibold text-[#1E3A2B]">
                    {isWholesale
                      ? `Harga Grosir B2B Aktif (Min. ${product.wholesaleMinQty} unit)`
                      : `Harga Ritel (Tambah ${
                          product.wholesaleMinQty - quantity
                        } unit untuk Harga Grosir)`}
                  </span>
                </div>

                {/* Quantity Stepper */}
                <div className="flex items-center gap-2 bg-[#FAF6F1] border border-[#E5D5C0] rounded-lg p-1">
                  <button
                    type="button"
                    onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                    aria-label="Kurangi jumlah"
                    className="p-1.5 rounded hover:bg-[#EADDCC] text-[#1E3A2B] cursor-pointer"
                  >
                    <Minus className="w-3.5 h-3.5" aria-hidden="true" />
                  </button>
                  <input
                    type="number"
                    min={1}
                    aria-label="Jumlah unit pesanan"
                    value={quantity}
                    onChange={(e) =>
                      setQuantity(Math.max(1, parseInt(e.target.value, 10) || 1))
                    }
                    className="w-14 text-center font-mono-tabular text-sm font-bold text-[#1E3A2B] bg-transparent focus:outline-none"
                  />
                  <button
                    type="button"
                    onClick={() => setQuantity((q) => q + 1)}
                    aria-label="Tambah jumlah"
                    className="p-1.5 rounded hover:bg-[#EADDCC] text-[#1E3A2B] cursor-pointer"
                  >
                    <Plus className="w-3.5 h-3.5" aria-hidden="true" />
                  </button>
                </div>
              </div>

              <div className="flex flex-wrap items-center justify-between gap-4 pt-3 border-t border-[#E5D5C0]">
                <div>
                  <p className="text-xs text-[#4C5520]">
                    Total Estimasi ({quantity} &times; {formatRupiah(activeUnitPrice)}):
                  </p>
                  <div className="flex items-baseline gap-2">
                    <span className="font-mono-tabular text-xl font-bold text-[#1E3A2B]">
                      {formatRupiah(lineTotal)}
                    </span>
                    {savings > 0 && (
                      <span className="font-mono-tabular text-xs font-semibold text-[#2E6F40]">
                        Hemat {formatRupiah(savings)}
                      </span>
                    )}
                  </div>
                </div>

                <button
                  type="button"
                  onClick={handleConfirmAdd}
                  className="inline-flex items-center gap-2 px-5 py-3 text-xs font-semibold text-[#FAF6F1] bg-[#D95338] hover:bg-[#1E3A2B] rounded-lg transition-colors cursor-pointer whitespace-nowrap"
                >
                  <ShoppingBag className="w-4 h-4" aria-hidden="true" />
                  <span>Masukkan ke Daftar Pesanan</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
