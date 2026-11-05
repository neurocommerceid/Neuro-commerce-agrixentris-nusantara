import React, { useState } from 'react';
import { CheckCircle2, ChevronDown, Target, Layers, TrendingUp } from 'lucide-react';
import {
  COMPANY_PROFILE,
  PORTFOLIO_PROGRAMS,
  TARGET_MARKETS,
} from '../data/agrixentrisData';

export const PortfolioAndMarketSection: React.FC = () => {
  const [expandedPortfolio, setExpandedPortfolio] = useState<string | null>(null);
  const [openSection, setOpenSection] = useState<string | null>(null);

  const togglePortfolioCard = (id: string) => {
    setExpandedPortfolio((prev) => (prev === id ? null : id));
  };

  const toggleSection = (key: string) => {
    setOpenSection((prev) => (prev === key ? null : key));
  };

  return (
    <section id="portofolio" className="py-10 sm:py-14 bg-[#FDFBF7] border-b border-[#E2DDD2]">
      <div className="max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2 mb-5">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-widest text-[#B84A27] mb-1">
              Rekam Jejak &amp; Peta Jalan
            </p>
            <h2 className="font-serif text-xl sm:text-3xl font-bold text-[#14281D]">
              Portofolio Program &amp; Rencana Strategis
            </h2>
          </div>
          <p className="text-xs text-[#4A554E]">
            4 klaster proyek utama. Klik panah untuk rincian teknis.
          </p>
        </div>

        {/* Compact 2-Column Mobile / 4-Column Desktop Portfolio Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-2.5 sm:gap-4 mb-5">
          {PORTFOLIO_PROGRAMS.map((program, idx) => {
            const isOpen = expandedPortfolio === program.id;
            return (
              <div
                key={program.id}
                className="bg-[#F6F4EE] border border-[#D8D2C5] rounded-xl overflow-hidden flex flex-col justify-between"
              >
                <div>
                  <div className="relative h-24 sm:h-32 overflow-hidden bg-[#14281D]">
                    <img
                      src={program.image}
                      alt={program.title}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0D1B13]/80 via-transparent to-transparent" />
                    <span className="absolute top-2 left-2 px-2 py-0.5 rounded bg-[#14281D]/85 text-[#FDFBF7] font-mono text-[10px]">
                      Proyek 0{idx + 1}
                    </span>
                  </div>

                  <div className="p-3 sm:p-4">
                    <span className="block text-[10px] font-mono uppercase tracking-wider text-[#B84A27] truncate mb-0.5">
                      {program.category}
                    </span>
                    <h3 className="font-serif text-xs sm:text-sm font-bold text-[#14281D] leading-snug line-clamp-2 min-h-[2rem]">
                      {program.title}
                    </h3>

                    <button
                      type="button"
                      onClick={() => togglePortfolioCard(program.id)}
                      className="mt-2.5 w-full pt-2 border-t border-[#E2DDD2] flex items-center justify-between text-[11px] font-semibold text-[#14281D] hover:text-[#B84A27] transition-colors cursor-pointer"
                    >
                      <span>{isOpen ? 'Tutup detail' : 'Lihat cakupan'}</span>
                      <ChevronDown
                        className={`w-3.5 h-3.5 transition-transform duration-200 ${
                          isOpen ? 'rotate-180 text-[#B84A27]' : ''
                        }`}
                      />
                    </button>

                    {isOpen && (
                      <div className="mt-2 pt-2 border-t border-[#E2DDD2] space-y-1.5">
                        <p className="text-[10px] font-mono text-[#68736B]">
                          Lokasi: {program.locationHighlight}
                        </p>
                        <ul className="space-y-1">
                          {program.points.map((item) => (
                            <li
                              key={item}
                              className="flex items-start gap-1.5 text-[11px] text-[#4A554E] leading-tight"
                            >
                              <CheckCircle2 className="w-3 h-3 text-[#2D6A4F] shrink-0 mt-0.5" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Collapsible Strategic Accordions (Competitive Advantage, Target Market, 5-Year Roadmap) */}
        <div className="space-y-2.5">
          {/* 1. Keunggulan Kompetitif */}
          <div className="bg-[#F6F4EE] border border-[#D8D2C5] rounded-xl overflow-hidden">
            <button
              type="button"
              onClick={() => toggleSection('advantages')}
              className="w-full px-4 py-3.5 flex items-center justify-between gap-3 text-left hover:bg-[#EFECE4] transition-colors cursor-pointer"
            >
              <div className="flex items-center gap-3 min-w-0">
                <div className="w-8 h-8 rounded-lg bg-[#14281D]/10 text-[#14281D] flex items-center justify-center shrink-0">
                  <Layers className="w-4 h-4" />
                </div>
                <div className="min-w-0">
                  <h3 className="font-serif text-sm sm:text-base font-bold text-[#14281D] truncate">
                    6 Keunggulan Kompetitif AgriXentris
                  </h3>
                  <p className="text-[11px] text-[#68736B] truncate">
                    Pendekatan ilmiah · Tim multidisiplin · Solusi terintegrasi hulu-hilir
                  </p>
                </div>
              </div>
              <ChevronDown
                className={`w-4 h-4 text-[#14281D] shrink-0 transition-transform duration-200 ${
                  openSection === 'advantages' ? 'rotate-180 text-[#B84A27]' : ''
                }`}
              />
            </button>

            {openSection === 'advantages' && (
              <div className="px-4 pb-4 pt-2 border-t border-[#E2DDD2] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5">
                {COMPANY_PROFILE.competitiveAdvantages.map((adv, index) => (
                  <div
                    key={adv}
                    className="p-3 rounded-lg bg-[#FDFBF7] border border-[#E2DDD2] flex items-start gap-2"
                  >
                    <span className="font-mono text-[10px] font-semibold text-[#B84A27] shrink-0 mt-0.5">
                      0{index + 1}
                    </span>
                    <p className="text-xs text-[#14281D] leading-snug">{adv}</p>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* 2. Segmen Target Market */}
          <div className="bg-[#F6F4EE] border border-[#D8D2C5] rounded-xl overflow-hidden">
            <button
              type="button"
              onClick={() => toggleSection('markets')}
              className="w-full px-4 py-3.5 flex items-center justify-between gap-3 text-left hover:bg-[#EFECE4] transition-colors cursor-pointer"
            >
              <div className="flex items-center gap-3 min-w-0">
                <div className="w-8 h-8 rounded-lg bg-[#B84A27]/10 text-[#B84A27] flex items-center justify-center shrink-0">
                  <Target className="w-4 h-4" />
                </div>
                <div className="min-w-0">
                  <h3 className="font-serif text-sm sm:text-base font-bold text-[#14281D] truncate">
                    4 Segmen Target Market Utama
                  </h3>
                  <p className="text-[11px] text-[#68736B] truncate">
                    Investor &amp; Korporasi · Pemerintah Daerah · Kelompok Tani · Lembaga Edukasi
                  </p>
                </div>
              </div>
              <ChevronDown
                className={`w-4 h-4 text-[#14281D] shrink-0 transition-transform duration-200 ${
                  openSection === 'markets' ? 'rotate-180 text-[#B84A27]' : ''
                }`}
              />
            </button>

            {openSection === 'markets' && (
              <div className="px-4 pb-4 pt-2 border-t border-[#E2DDD2] grid grid-cols-2 lg:grid-cols-4 gap-2.5">
                {TARGET_MARKETS.map((segment, idx) => (
                  <div
                    key={segment.id}
                    className="p-3 rounded-lg bg-[#FDFBF7] border border-[#E2DDD2]"
                  >
                    <span className="font-mono text-[10px] text-[#68736B]">Segmen 0{idx + 1}</span>
                    <h4 className="font-serif text-xs sm:text-sm font-bold text-[#14281D] mt-0.5 mb-1">
                      {segment.title}
                    </h4>
                    <p className="text-[11px] text-[#4A554E] leading-snug mb-2">
                      {segment.subtitle}
                    </p>
                    <p className="text-[10px] font-semibold text-[#2D6A4F] pt-1.5 border-t border-[#E2DDD2]">
                      {segment.outcome}
                    </p>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* 3. Rencana Pengembangan 5 Tahun */}
          <div className="bg-[#F6F4EE] border border-[#D8D2C5] rounded-xl overflow-hidden">
            <button
              type="button"
              onClick={() => toggleSection('roadmap')}
              className="w-full px-4 py-3.5 flex items-center justify-between gap-3 text-left hover:bg-[#EFECE4] transition-colors cursor-pointer"
            >
              <div className="flex items-center gap-3 min-w-0">
                <div className="w-8 h-8 rounded-lg bg-[#2D6A4F]/10 text-[#2D6A4F] flex items-center justify-center shrink-0">
                  <TrendingUp className="w-4 h-4" />
                </div>
                <div className="min-w-0">
                  <h3 className="font-serif text-sm sm:text-base font-bold text-[#14281D] truncate">
                    Rencana Pengembangan 5 Tahun Ke Depan
                  </h3>
                  <p className="text-[11px] text-[#68736B] truncate">
                    Demo-plot modern · Ekspansi layanan · Platform IoT · Kemitraan komersial · Distribusi
                  </p>
                </div>
              </div>
              <ChevronDown
                className={`w-4 h-4 text-[#14281D] shrink-0 transition-transform duration-200 ${
                  openSection === 'roadmap' ? 'rotate-180 text-[#B84A27]' : ''
                }`}
              />
            </button>

            {openSection === 'roadmap' && (
              <div className="px-4 pb-4 pt-2 border-t border-[#E2DDD2] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-2.5">
                {COMPANY_PROFILE.fiveYearRoadmap.map((step, idx) => (
                  <div
                    key={step.step}
                    className="p-3 rounded-lg bg-[#FDFBF7] border border-[#E2DDD2]"
                  >
                    <div className="flex items-center justify-between font-mono text-[10px] text-[#B84A27] mb-1">
                      <span>Target 0{idx + 1}</span>
                      <span>{step.step}</span>
                    </div>
                    <h4 className="font-serif text-xs sm:text-sm font-bold text-[#14281D] mb-1">
                      {step.title}
                    </h4>
                    <p className="text-[11px] text-[#4A554E] leading-snug">{step.detail}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
