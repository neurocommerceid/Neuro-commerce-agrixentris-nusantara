import React from 'react';
import {
  COMPANY_PROFILE,
  BUSINESS_PILLARS,
  PRODUCT_CATALOG_7_SKU,
  CUSTOMER_TESTIMONIALS,
  ProductSKU,
} from '../data/agrixentrisData';
import { formatRupiah } from '../utils/catalogLogic';
import { ProductPackageIllustration } from '../components/ProductPackageIllustration';
import { PageId } from '../components/Navbar';
import {
  ArrowRight,
  FileDown,
  Briefcase,
  PackageCheck,
  Sprout,
  Cpu,
  Plus,
  Quote,
} from 'lucide-react';

interface HomePageProps {
  onNavigate: (page: PageId) => void;
  onSelectProduct: (product: ProductSKU) => void;
  onQuickAddProduct: (skuId: string) => void;
}

const PILLAR_ICONS: Record<string, React.ReactNode> = {
  '01': <Briefcase className="w-4 h-4" />,
  '02': <PackageCheck className="w-4 h-4" />,
  '03': <Sprout className="w-4 h-4" />,
  '04': <Cpu className="w-4 h-4" />,
};

export const HomePage: React.FC<HomePageProps> = ({
  onNavigate,
  onSelectProduct,
  onQuickAddProduct,
}) => {
  const featuredSkus = PRODUCT_CATALOG_7_SKU.slice(0, 4);
  const featuredTestimonials = CUSTOMER_TESTIMONIALS.slice(0, 3);

  const goToPage = (page: PageId) => {
    onNavigate(page);
    window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior });
  };

  return (
    <div className="bg-[#FAF6F1]">
      {/* 1. Crisp Corporate Hero */}
      <section className="border-b border-[#E5D5C0] py-8 sm:py-12">
        <div className="max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-center">
            <div className="lg:col-span-7 space-y-4">
              <p className="text-[11px] font-semibold uppercase tracking-widest text-[#D95338]">
                Agribisnis &amp; Sarana Produksi Terintegrasi · Est. 2020 · Bogor
              </p>

              <h1 className="font-display text-2xl sm:text-4xl lg:text-5xl font-bold text-[#1E3A2B] leading-[1.12] tracking-tight">
                Solusi Agribisnis Terintegrasi dari Benih Unggul hingga Panen Presisi.
              </h1>

              <p className="text-xs sm:text-sm text-[#2D3819] leading-relaxed max-w-xl">
                Mitra strategis pertanian modern Indonesia yang menyatukan konsultasi teknis, penyediaan 7 SKU sarana produksi teruji, pelatihan SDM tani, dan teknologi greenhouse.
              </p>

              <div className="flex flex-wrap items-center gap-2.5 pt-1">
                <button
                  type="button"
                  onClick={() => goToPage('katalog')}
                  className="inline-flex items-center gap-2 px-4 py-2.5 text-xs font-semibold text-[#FAF6F1] bg-[#D95338] hover:bg-[#B84028] rounded-lg transition-colors cursor-pointer"
                >
                  <span>Buka Katalog 7 SKU</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>

                <button
                  type="button"
                  onClick={() => goToPage('about')}
                  className="inline-flex items-center gap-2 px-4 py-2.5 text-xs font-semibold text-[#1E3A2B] bg-[#F0E5D7] hover:bg-[#EADDCC] border border-[#E5D5C0] rounded-lg transition-colors cursor-pointer"
                >
                  <span>Tentang Perusahaan</span>
                </button>

                <a
                  href={COMPANY_PROFILE.comproPdfUrl}
                  download="Company_Profile_AgriXentris_Nusantara.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3.5 py-2.5 text-xs font-semibold text-[#4C5520] hover:text-[#1E3A2B] transition-colors"
                >
                  <FileDown className="w-3.5 h-3.5" />
                  <span>Unduh PDF</span>
                </a>
              </div>

              {/* 4 Key Corporate Metrics */}
              <div className="pt-4 border-t border-[#E5D5C0] grid grid-cols-4 gap-2">
                <div>
                  <span className="block font-mono text-sm sm:text-lg font-bold text-[#1E3A2B]">
                    2020
                  </span>
                  <span className="text-[10px] sm:text-xs text-[#4C5520]">Tahun Berdiri</span>
                </div>
                <div>
                  <span className="block font-mono text-sm sm:text-lg font-bold text-[#1E3A2B]">
                    4 Pilar
                  </span>
                  <span className="text-[10px] sm:text-xs text-[#4C5520]">Lini Layanan</span>
                </div>
                <div>
                  <span className="block font-mono text-sm sm:text-lg font-bold text-[#1E3A2B]">
                    7 SKU
                  </span>
                  <span className="text-[10px] sm:text-xs text-[#4C5520]">Katalog Inti</span>
                </div>
                <div>
                  <span className="block font-mono text-sm sm:text-lg font-bold text-[#1E3A2B]">
                    &ge;92%
                  </span>
                  <span className="text-[10px] sm:text-xs text-[#4C5520]">Vigor Benih</span>
                </div>
              </div>
            </div>

            {/* Right Visual Card */}
            <div className="lg:col-span-5">
              <div className="relative rounded-2xl overflow-hidden border border-[#E5D5C0] bg-[#1E3A2B] aspect-16/10 sm:aspect-4/3 shadow-sm">
                <img
                  src="/assets/compro/img_16.jpg"
                  alt="Greenhouse komersial AgriXentris Nusantara"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#14281D]/90 via-[#14281D]/20 to-transparent" />
                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between gap-3 text-[#FAF6F1]">
                  <div className="flex items-center gap-2.5">
                    <img
                      src={COMPANY_PROFILE.logoUrl}
                      alt="Logo AgriXentris"
                      className="w-9 h-9 rounded-lg object-contain bg-white p-1 shrink-0"
                    />
                    <div>
                      <p className="text-[10px] font-mono text-[#EADDCC]">
                        Dramaga, Bogor · Jawa Barat
                      </p>
                      <p className="font-display text-xs sm:text-sm font-semibold">
                        Pusat Layanan Pertanian Terintegrasi
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Ringkasan 4 Pilar Layanan Utama (Compact 2x2 / 4-col) */}
      <section className="py-8 sm:py-12 border-b border-[#E5D5C0] bg-[#F6F2EA]">
        <div className="max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between gap-2 mb-5">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-widest text-[#D95338]">
                Layanan Hulu ke Hilir
              </p>
              <h2 className="font-display text-lg sm:text-2xl font-bold text-[#1E3A2B]">
                4 Pilar Bisnis AgriXentris
              </h2>
            </div>
            <button
              type="button"
              onClick={() => goToPage('about')}
              className="text-xs font-semibold text-[#1E3A2B] hover:text-[#D95338] inline-flex items-center gap-1 cursor-pointer shrink-0"
            >
              <span>Detail Profil</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-2.5 sm:gap-4">
            {BUSINESS_PILLARS.map((pillar) => (
              <div
                key={pillar.number}
                className="bg-[#FAF6F1] border border-[#E5D5C0] rounded-xl p-3.5 sm:p-4 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-mono text-[10px] font-bold px-2 py-0.5 rounded bg-[#F0E5D7] text-[#1E3A2B]">
                      Pilar {pillar.number}
                    </span>
                    <div className="w-7 h-7 rounded-lg bg-[#1E3A2B] text-[#FAF6F1] flex items-center justify-center">
                      {PILLAR_ICONS[pillar.number]}
                    </div>
                  </div>
                  <h3 className="font-display text-xs sm:text-base font-bold text-[#1E3A2B] leading-snug mb-1.5">
                    {pillar.title}
                  </h3>
                  <p className="text-[11px] text-[#4C5520] leading-snug line-clamp-2">
                    {pillar.representation}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Preview Katalog Produk Unggulan (4 Kotak Kecil) */}
      <section className="py-8 sm:py-12 border-b border-[#E5D5C0]">
        <div className="max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between gap-2 mb-5">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-widest text-[#D95338]">
                Sarana Produksi Teruji
              </p>
              <h2 className="font-display text-lg sm:text-2xl font-bold text-[#1E3A2B]">
                Katalog Produk Unggulan
              </h2>
            </div>
            <button
              type="button"
              onClick={() => goToPage('katalog')}
              className="text-xs font-semibold text-[#D95338] hover:underline inline-flex items-center gap-1 cursor-pointer shrink-0"
            >
              <span>Lihat Semua 7 SKU</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-2.5 sm:gap-4">
            {featuredSkus.map((product) => (
              <article
                key={product.id}
                className="bg-[#F0E5D7]/60 border border-[#E5D5C0] rounded-xl overflow-hidden flex flex-col justify-between"
              >
                <div>
                  <button
                    type="button"
                    onClick={() => onSelectProduct(product)}
                    className="relative w-full h-24 sm:h-32 bg-[#EADDCC] border-b border-[#E5D5C0] overflow-hidden flex items-center justify-center p-2 cursor-pointer text-left"
                  >
                    <img
                      src={product.image}
                      alt={product.shortTitle}
                      className="absolute inset-0 w-full h-full object-cover opacity-20"
                    />
                    <span className="absolute top-1.5 left-2 z-20 px-1.5 py-0.5 rounded bg-[#FAF6F1]/90 font-mono text-[9px] font-bold text-[#1E3A2B]">
                      {product.sku}
                    </span>
                    <div className="relative z-10 scale-[0.58] sm:scale-75 translate-y-1.5">
                      <ProductPackageIllustration product={product} size="sm" />
                    </div>
                  </button>

                  <div className="p-2.5 sm:p-3.5">
                    <p className="text-[10px] text-[#4C5520] truncate">{product.category}</p>
                    <h3 className="font-display text-xs sm:text-sm font-bold text-[#1E3A2B] leading-snug line-clamp-1 mt-0.5">
                      {product.shortTitle}
                    </h3>
                    <div className="mt-1.5 flex items-baseline justify-between gap-1">
                      <span className="font-mono text-xs sm:text-sm font-bold text-[#1E3A2B]">
                        {formatRupiah(product.wholesalePrice)}
                      </span>
                      <span className="font-mono text-[9px] text-[#4C5520]">
                        MOQ &ge;{product.wholesaleMinQty}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="px-2.5 pb-2.5 flex items-center gap-1.5">
                  <button
                    type="button"
                    onClick={() => onSelectProduct(product)}
                    className="px-2 py-1.5 text-[10px] font-semibold text-[#1E3A2B] bg-[#FAF6F1] border border-[#E5D5C0] rounded-lg cursor-pointer"
                  >
                    Detail
                  </button>
                  <button
                    type="button"
                    onClick={() => onQuickAddProduct(product.id)}
                    className="flex-1 py-1.5 px-2 text-[10px] font-semibold text-[#FAF6F1] bg-[#1E3A2B] hover:bg-[#D95338] rounded-lg inline-flex items-center justify-center gap-1 cursor-pointer"
                  >
                    <Plus className="w-3 h-3" />
                    <span>Pesan</span>
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Sekilas Rekam Jejak & Mitra (3 Kartu Ringkas) */}
      <section className="py-8 sm:py-12 bg-[#F6F2EA]">
        <div className="max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between gap-2 mb-5">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-widest text-[#D95338]">
                Dipercaya Instansi &amp; Korporasi
              </p>
              <h2 className="font-display text-lg sm:text-2xl font-bold text-[#1E3A2B]">
                Mitra Proyek Lapangan
              </h2>
            </div>
            <button
              type="button"
              onClick={() => goToPage('portofolio')}
              className="text-xs font-semibold text-[#1E3A2B] hover:text-[#D95338] inline-flex items-center gap-1 cursor-pointer shrink-0"
            >
              <span>Lihat Portofolio</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {featuredTestimonials.map((item) => (
              <div
                key={item.id}
                className="bg-[#FAF6F1] border border-[#E5D5C0] rounded-xl p-3.5 sm:p-4 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-1.5">
                    <Quote className="w-3.5 h-3.5 text-[#D95338]" />
                    <span className="text-[10px] font-mono text-[#4C5520] truncate">
                      {item.sector}
                    </span>
                  </div>
                  <h3 className="font-display text-xs sm:text-sm font-bold text-[#1E3A2B]">
                    {item.client}
                  </h3>
                  <p className="text-[10px] font-semibold text-[#D95338] mb-1.5">
                    {item.program}
                  </p>
                  <p className="text-[11px] text-[#3A3C31] line-clamp-2 leading-relaxed">
                    “{item.quote}”
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
