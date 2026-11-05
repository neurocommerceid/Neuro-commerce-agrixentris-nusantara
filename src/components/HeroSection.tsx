import React, { useState } from 'react';
import { ArrowRight, FileDown, ChevronDown } from 'lucide-react';
import { COMPANY_PROFILE } from '../data/agrixentrisData';

export const HeroSection: React.FC = () => {
  const [showFullIntro, setShowFullIntro] = useState<boolean>(false);

  return (
    <section
      id="beranda"
      className="bg-[#FAF6F1] border-b border-[#E5D5C0] py-6 sm:py-10 lg:py-14"
    >
      <div className="max-w-[1360px] mx-auto px-4 sm:px-6">
        {/* Compact Metadata Bar */}
        <div className="flex flex-wrap items-center justify-between gap-2 pb-4 border-b border-[#E5D5C0] text-[11px] sm:text-xs text-[#4C5520]">
          <span>Agribisnis &amp; Sarana Produksi · Est. 2020 · Dramaga, Bogor</span>
          <span className="font-mono-tabular font-semibold text-[#1E3A2B]">
            7 SKU Inti · Solusi Hulu–Hilir
          </span>
        </div>

        {/* Split Hero — Concise, Executive, Anti-Ebook */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-center pt-6">
          <div className="lg:col-span-7">
            <p className="text-xs font-semibold text-[#D95338] mb-2">
              Mitra Strategis Pertanian Modern Indonesia
            </p>
            <h1 className="font-display text-2xl sm:text-4xl lg:text-5xl font-bold text-[#1E3A2B] leading-[1.12] tracking-tight mb-3">
              Solusi Agribisnis Terintegrasi dari Benih Unggul hingga Panen Presisi.
            </h1>

            <p className="text-xs sm:text-sm text-[#3A3C31] leading-relaxed max-w-xl">
              Pusat layanan konsultasi agribisnis, penyediaan 7 SKU sarana produksi teruji, pelatihan SDM tani, dan teknologi greenhouse modern di Indonesia.
            </p>

            {/* Collapsible full detail so Hero stays compact */}
            <div className="mt-2">
              <button
                type="button"
                onClick={() => setShowFullIntro((prev) => !prev)}
                aria-expanded={showFullIntro}
                className="inline-flex items-center gap-1 text-xs font-semibold text-[#4C5520] hover:text-[#1E3A2B] cursor-pointer py-1"
              >
                <span>
                  {showFullIntro
                    ? 'Sembunyikan penjelasan lengkap'
                    : 'Baca pengantar lengkap perusahaan'}
                </span>
                <ChevronDown
                  className={`w-3.5 h-3.5 transition-transform duration-150 ${
                    showFullIntro ? 'rotate-180' : ''
                  }`}
                  aria-hidden="true"
                />
              </button>

              {showFullIntro && (
                <div className="mt-2 p-3.5 rounded-xl bg-[#F0E5D7]/70 border border-[#E5D5C0] text-xs text-[#2D3819] leading-relaxed space-y-2">
                  <p>{COMPANY_PROFILE.introParagraph1}</p>
                  <p>{COMPANY_PROFILE.introParagraph2}</p>
                </div>
              )}
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-2.5 mt-5">
              <a
                href="#katalog"
                className="inline-flex items-center gap-2 px-4 sm:px-5 py-2.5 sm:py-3 text-xs sm:text-sm font-semibold text-[#FAF6F1] bg-[#D95338] hover:bg-[#B84028] rounded-lg transition-colors whitespace-nowrap shrink-0"
              >
                <span>Lihat Katalog 7 SKU</span>
                <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
              </a>

              <a
                href={COMPANY_PROFILE.comproPdfUrl}
                download="Company_Profile_AgriXentris_Nusantara.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2.5 sm:py-3 text-xs sm:text-sm font-semibold text-[#1E3A2B] bg-[#F0E5D7] hover:bg-[#EADDCC] border border-[#E5D5C0] rounded-lg transition-colors whitespace-nowrap shrink-0"
              >
                <FileDown className="w-3.5 h-3.5 text-[#4C5520]" aria-hidden="true" />
                <span>Company Profile PDF</span>
              </a>
            </div>

            {/* 4 Key Metrics Strip */}
            <div className="grid grid-cols-4 gap-2 mt-6 pt-5 border-t border-[#E5D5C0]">
              <div>
                <span className="block font-mono-tabular text-sm sm:text-lg font-bold text-[#1E3A2B]">
                  2020
                </span>
                <span className="block text-[10px] sm:text-xs text-[#4C5520]">
                  Tahun Berdiri
                </span>
              </div>
              <div>
                <span className="block font-mono-tabular text-sm sm:text-lg font-bold text-[#1E3A2B]">
                  4 Pilar
                </span>
                <span className="block text-[10px] sm:text-xs text-[#4C5520]">
                  Lini Bisnis
                </span>
              </div>
              <div>
                <span className="block font-mono-tabular text-sm sm:text-lg font-bold text-[#1E3A2B]">
                  7 SKU
                </span>
                <span className="block text-[10px] sm:text-xs text-[#4C5520]">
                  Katalog Inti
                </span>
              </div>
              <div>
                <span className="block font-mono-tabular text-sm sm:text-lg font-bold text-[#1E3A2B]">
                  &ge;92%
                </span>
                <span className="block text-[10px] sm:text-xs text-[#4C5520]">
                  Vigor Benih
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Compact Visual Showcase */}
          <div className="lg:col-span-5">
            <div className="relative h-52 sm:h-64 lg:h-72 rounded-xl overflow-hidden border border-[#E5D5C0] bg-[#1E3A2B]">
              <img
                src="/assets/compro/img_36.jpg"
                alt="Greenhouse komersial AgriXentris Nusantara"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent flex items-end p-4 sm:p-5">
                <div className="flex items-center gap-3">
                  <img
                    src={COMPANY_PROFILE.logoUrl}
                    alt="Logo AgriXentris Nusantara"
                    referrerPolicy="no-referrer"
                    className="w-9 h-9 rounded-lg object-contain bg-white p-1 shrink-0"
                  />
                  <div>
                    <p className="text-[11px] text-[#EADDCC]">
                      Filosofi &ldquo;Agri&rdquo; + &ldquo;Xentris&rdquo;
                    </p>
                    <p className="text-xs sm:text-sm font-semibold text-white">
                      Pusat Solusi Pertanian Modern Indonesia
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
