import React from 'react';
import { ArrowRight, FileDown, Plus } from 'lucide-react';
import { COMPANY_PROFILE, PRODUCT_CATALOG_7_SKU, ProductSKU } from '../data/agrixentrisData';
import { formatRupiah } from '../utils/catalogLogic';
import { ProductPackageIllustration } from './ProductPackageIllustration';

interface HeroSectionProps {
  onSelectProduct: (product: ProductSKU) => void;
  onQuickAddProduct: (skuId: string, qty?: number) => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onSelectProduct,
  onQuickAddProduct,
}) => {
  return (
    <section
      id="beranda"
      className="relative bg-[#FAF6F1] border-b border-[#E5D5C0] pt-10 pb-16 lg:pt-14 lg:pb-20"
    >
      <div className="max-w-[1360px] mx-auto px-6">
        {/* Top Editorial Kicker Row (Northeast Tomato style) */}
        <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-[#E5D5C0] text-xs text-[#4C5520]">
          <div className="flex flex-wrap items-center gap-2 font-medium">
            <span>Pusat Layanan Agribisnis &amp; Sarana Produksi Terintegrasi</span>
            <span aria-hidden="true">·</span>
            <span>Berdiri Sejak {COMPANY_PROFILE.foundedYear}</span>
            <span aria-hidden="true">·</span>
            <span>Dramaga, Bogor, Jawa Barat</span>
          </div>
          <div className="font-mono-tabular text-[#2D3819]">
            <span>7 SKU Inti Tersedia</span>
            <span aria-hidden="true" className="mx-2">·</span>
            <span>Solusi Hulu ke Hilir</span>
          </div>
        </div>

        {/* Main Split Editorial Headline & Value Proposition */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch pt-10 pb-12">
          <div className="lg:col-span-7 flex flex-col justify-between">
            <div>
              <p className="text-sm font-semibold text-[#D95338] mb-3">
                Mitra Strategis Pertanian Modern Indonesia
              </p>
              <h1 className="font-display text-4xl sm:text-5xl lg:text-[3.5rem] font-bold text-[#1E3A2B] leading-[1.08] tracking-tight mb-6">
                Solusi Agribisnis Terintegrasi dari Benih Unggul hingga Panen Presisi.
              </h1>
              <p className="text-base sm:text-lg text-[#3A3C31] leading-relaxed max-w-2xl mb-8">
                {COMPANY_PROFILE.introParagraph1}
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="#katalog"
                className="inline-flex items-center gap-2.5 px-6 py-3.5 text-sm font-semibold text-[#FAF6F1] bg-[#D95338] hover:bg-[#B84028] rounded-lg transition-colors whitespace-nowrap shrink-0 shadow-xs"
              >
                <span>Jelajahi Katalog 7 SKU</span>
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </a>

              <a
                href={COMPANY_PROFILE.comproPdfUrl}
                download="Company_Profile_AgriXentris_Nusantara.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3.5 text-sm font-semibold text-[#1E3A2B] bg-[#F0E5D7] hover:bg-[#EADDCC] border border-[#E5D5C0] rounded-lg transition-colors whitespace-nowrap shrink-0"
              >
                <FileDown className="w-4 h-4 text-[#4C5520]" aria-hidden="true" />
                <span>Unduh Company Profile (PDF)</span>
              </a>
            </div>
          </div>

          {/* Right Column: Featured Visual Card from Official PDF */}
          <div className="lg:col-span-5 flex flex-col">
            <div className="relative flex-1 min-h-[320px] rounded-xl overflow-hidden border border-[#E5D5C0] bg-[#1E3A2B]">
              <img
                src="/assets/compro/img_36.jpg"
                alt="Budidaya hortikultura komersial di dalam greenhouse modern AgriXentris Nusantara"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent flex flex-col justify-end p-6">
                <div className="flex items-center gap-3 mb-3">
                  <img
                    src={COMPANY_PROFILE.logoUrl}
                    alt="Logo AgriXentris Nusantara"
                    referrerPolicy="no-referrer"
                    className="w-11 h-11 rounded-lg object-contain bg-white p-1"
                  />
                  <div>
                    <p className="text-xs text-[#F0E5D7]">Filosofi &ldquo;Agri&rdquo; + &ldquo;Xentris&rdquo;</p>
                    <p className="text-sm font-semibold text-white">
                      Pusat Inovasi &amp; Solusi Pertanian Nasional
                    </p>
                  </div>
                </div>
                <p className="text-xs text-[#EADDCC] leading-relaxed">
                  Menjembatani kebutuhan petani, koperasi, industri pangan, pemerintah daerah, dan investor melalui SOP terstandarisasi dan sarana produksi teruji.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Northeast Tomato Inspired Product Line Strip: Quick-View of All 7 SKUs */}
        <div className="pt-8 border-t border-[#E5D5C0]">
          <div className="flex flex-wrap items-center justify-between gap-4 mb-5">
            <div>
              <h2 className="font-display text-lg font-semibold text-[#1E3A2B]">
                Lini Produk Sarana Produksi (7 SKU Inti)
              </h2>
              <p className="text-xs text-[#4C5520]">
                Klik kartu produk untuk melihat spesifikasi teknis &amp; SOP aplikasi, atau tambahkan langsung ke daftar pengadaan.
              </p>
            </div>
            <a
              href="#katalog"
              className="text-xs font-semibold text-[#D95338] hover:text-[#1E3A2B] transition-colors whitespace-nowrap"
            >
              Lihat Tabel &amp; Filter Katalog Lengkap &rarr;
            </a>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-7 gap-3">
            {PRODUCT_CATALOG_7_SKU.map((item) => (
              <div
                key={item.id}
                className="group bg-[#F0E5D7]/70 hover:bg-[#F0E5D7] border border-[#E5D5C0] rounded-xl p-3 flex flex-col justify-between transition-all duration-150"
              >
                <button
                  type="button"
                  onClick={() => onSelectProduct(item)}
                  aria-label={`Lihat detail ${item.shortTitle}`}
                  className="text-left flex flex-col items-center cursor-pointer w-full"
                >
                  <div className="w-full flex items-center justify-between text-[11px] font-mono-tabular text-[#4C5520] mb-1">
                    <span>{item.sku}</span>
                  </div>
                  <div className="my-1 transition-transform duration-150 group-hover:-translate-y-0.5">
                    <ProductPackageIllustration product={item} size="sm" />
                  </div>
                  <h3 className="text-xs font-semibold text-[#1E3A2B] line-clamp-2 text-center mt-1">
                    {item.shortTitle}
                  </h3>
                </button>

                <div className="mt-3 pt-2 border-t border-[#E5D5C0] flex items-center justify-between gap-1">
                  <span className="font-mono-tabular text-xs font-semibold text-[#2D3819]">
                    {formatRupiah(item.wholesalePrice)}
                  </span>
                  <button
                    type="button"
                    onClick={() => onQuickAddProduct(item.id, 1)}
                    aria-label={`Tambah ${item.shortTitle} ke pesanan`}
                    className="p-1.5 rounded-md bg-[#1E3A2B] text-[#FAF6F1] hover:bg-[#D95338] transition-colors cursor-pointer"
                  >
                    <Plus className="w-3.5 h-3.5" aria-hidden="true" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
