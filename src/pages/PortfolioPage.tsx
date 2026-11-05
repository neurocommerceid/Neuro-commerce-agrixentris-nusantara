import React, { useState } from 'react';
import {
  PORTFOLIO_PROGRAMS,
  TARGET_MARKETS,
  CUSTOMER_TESTIMONIALS,
} from '../data/agrixentrisData';
import { CheckCircle2, ChevronDown, Quote } from 'lucide-react';
import { InquiryAndOrderSection } from '../components/InquiryAndOrderSection';
import { CartItem } from '../utils/catalogLogic';

interface PortfolioPageProps {
  cart: CartItem[];
  onUpdateCartQty: (skuId: string, newQty: number) => void;
  onClearCart: () => void;
}

export const PortfolioPage: React.FC<PortfolioPageProps> = ({
  cart,
  onUpdateCartQty,
  onClearCart,
}) => {
  const [expandedProgId, setExpandedProgId] = useState<string | null>(null);
  const [showAllTestimonials, setShowAllTestimonials] = useState<boolean>(false);

  const visibleTestimonials = showAllTestimonials
    ? CUSTOMER_TESTIMONIALS
    : CUSTOMER_TESTIMONIALS.slice(0, 4);

  return (
    <div className="bg-[#FAF6F1]">
      {/* 1. 4 Rekam Jejak Proyek Utama (Compact 2-Col Mobile / 4-Col Desktop) */}
      <section className="py-8 sm:py-12 border-b border-[#E5D5C0]">
        <div className="max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-6">
            <p className="text-[11px] font-semibold uppercase tracking-widest text-[#D95338] mb-1">
              Portofolio &amp; Rekam Jejak
            </p>
            <h1 className="font-display text-2xl sm:text-4xl font-bold text-[#1E3A2B] mb-2">
              Program Pendampingan &amp; Proyek Lapangan
            </h1>
            <p className="text-xs sm:text-sm text-[#3A3C31]">
              4 klaster proyek utama yang telah dijalankan bersama instansi pemerintah daerah, BUMD, kelompok tani, dan mitra korporasi.
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-2.5 sm:gap-4">
            {PORTFOLIO_PROGRAMS.map((prog, idx) => {
              const isOpen = expandedProgId === prog.id;
              return (
                <article
                  key={prog.id}
                  className="bg-[#F6F2EA] border border-[#E5D5C0] rounded-xl overflow-hidden flex flex-col justify-between"
                >
                  <div>
                    <div className="relative h-28 sm:h-36 bg-[#1E3A2B]">
                      <img
                        src={prog.image}
                        alt={prog.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#14281D]/80 via-transparent to-transparent" />
                      <span className="absolute top-2 left-2 px-2 py-0.5 rounded bg-[#1E3A2B]/90 text-[#FAF6F1] font-mono text-[10px]">
                        Proyek 0{idx + 1}
                      </span>
                    </div>

                    <div className="p-3 sm:p-4">
                      <span className="block text-[10px] font-mono uppercase text-[#D95338] truncate mb-0.5">
                        {prog.locationHighlight}
                      </span>
                      <h2 className="font-display text-xs sm:text-sm font-bold text-[#1E3A2B] leading-snug line-clamp-2 min-h-[2rem]">
                        {prog.title}
                      </h2>
                      <p className="mt-1.5 text-[10px] sm:text-[11px] text-[#2E6F40] font-semibold leading-snug line-clamp-2">
                        {prog.impactMetric}
                      </p>

                      <button
                        type="button"
                        onClick={() => setExpandedProgId(isOpen ? null : prog.id)}
                        className="mt-2.5 w-full pt-2 border-t border-[#E5D5C0] flex items-center justify-between text-[10px] sm:text-[11px] font-semibold text-[#1E3A2B] hover:text-[#D95338] cursor-pointer"
                      >
                        <span>{isOpen ? 'Tutup cakupan' : 'Lihat cakupan'}</span>
                        <ChevronDown
                          className={`w-3.5 h-3.5 transition-transform ${
                            isOpen ? 'rotate-180 text-[#D95338]' : ''
                          }`}
                        />
                      </button>

                      {isOpen && (
                        <ul className="mt-2 pt-2 border-t border-[#E5D5C0] space-y-1">
                          {prog.points.map((pt) => (
                            <li
                              key={pt}
                              className="flex items-start gap-1.5 text-[10px] sm:text-[11px] text-[#3A3C31] leading-tight"
                            >
                              <CheckCircle2 className="w-3 h-3 text-[#2E6F40] shrink-0 mt-0.5" />
                              <span>{pt}</span>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* 2. 4 Segmen Mitra & Target Market (Compact 2x2 / 4-col) */}
      <section className="py-8 sm:py-10 border-b border-[#E5D5C0] bg-[#F6F2EA]">
        <div className="max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-8">
          <div className="mb-4">
            <p className="text-[11px] font-semibold uppercase tracking-widest text-[#D95338]">
              Cakupan Kemitraan
            </p>
            <h2 className="font-display text-lg sm:text-2xl font-bold text-[#1E3A2B]">
              4 Segmen Mitra Strategis
            </h2>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-2.5 sm:gap-4">
            {TARGET_MARKETS.map((tm, idx) => (
              <div
                key={tm.id}
                className="bg-[#FAF6F1] border border-[#E5D5C0] rounded-xl p-3 sm:p-4"
              >
                <span className="font-mono text-[10px] text-[#4C5520]">Segmen 0{idx + 1}</span>
                <h3 className="font-display text-xs sm:text-sm font-bold text-[#1E3A2B] mt-0.5 mb-1 leading-snug">
                  {tm.title}
                </h3>
                <p className="text-[11px] text-[#4C5520] leading-snug line-clamp-2">
                  {tm.outcome}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Testimoni Mitra (Compact 2-Col / 4-Col) */}
      <section className="py-8 sm:py-10 border-b border-[#E5D5C0]">
        <div className="max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between gap-2 mb-4">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-widest text-[#D95338]">
                Evaluasi Klien
              </p>
              <h2 className="font-display text-lg sm:text-2xl font-bold text-[#1E3A2B]">
                Testimoni Instansi &amp; Kelompok Tani
              </h2>
            </div>
            <button
              type="button"
              onClick={() => setShowAllTestimonials((prev) => !prev)}
              className="text-xs font-semibold text-[#1E3A2B] hover:text-[#D95338] inline-flex items-center gap-1 cursor-pointer"
            >
              <span>{showAllTestimonials ? 'Ringkas (4)' : `Semua (${CUSTOMER_TESTIMONIALS.length})`}</span>
              <ChevronDown
                className={`w-3.5 h-3.5 transition-transform ${
                  showAllTestimonials ? 'rotate-180' : ''
                }`}
              />
            </button>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-2.5 sm:gap-4">
            {visibleTestimonials.map((item) => (
              <div
                key={item.id}
                className="bg-[#F6F2EA] border border-[#E5D5C0] rounded-xl p-3 sm:p-4 flex flex-col justify-between"
              >
                <div>
                  <Quote className="w-3.5 h-3.5 text-[#D95338] mb-1" />
                  <h3 className="font-display text-xs sm:text-sm font-bold text-[#1E3A2B] line-clamp-1">
                    {item.client}
                  </h3>
                  <p className="text-[10px] text-[#D95338] font-medium mb-1.5 line-clamp-1">
                    {item.program}
                  </p>
                  <p className="text-[11px] text-[#3A3C31] leading-relaxed line-clamp-3">
                    “{item.quote}”
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Compact Inquiry & B2B Contact Section */}
      <InquiryAndOrderSection
        cart={cart}
        onUpdateCartQty={onUpdateCartQty}
        onClearCart={onClearCart}
      />
    </div>
  );
};
