import React, { useState } from 'react';
import { ChevronDown, CheckCircle2, ShieldCheck, Sprout, Award, Compass } from 'lucide-react';
import { COMPANY_PROFILE } from '../data/agrixentrisData';

export const AboutAndVisionSection: React.FC = () => {
  const [openPanel, setOpenPanel] = useState<string | null>(null);

  const togglePanel = (id: string) => {
    setOpenPanel((prev) => (prev === id ? null : id));
  };

  return (
    <section id="tentang" className="py-10 sm:py-14 bg-[#F6F4EE] border-b border-[#E2DDD2]">
      <div className="max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-8">
        {/* Compact Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2 mb-5">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-widest text-[#B84A27] mb-1">
              Profil Korporat · Est. {COMPANY_PROFILE.foundedYear}
            </p>
            <h2 className="font-serif text-xl sm:text-3xl font-bold text-[#14281D]">
              Identitas, Visi &amp; Nilai Perusahaan
            </h2>
          </div>
          <p className="text-xs text-[#4A554E]">
            Klik panah pada setiap baris untuk membaca detail profil.
          </p>
        </div>

        {/* Compact 2x2 Identity Summary Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-2.5 sm:gap-3.5 mb-5">
          <div className="bg-[#FDFBF7] border border-[#E2DDD2] rounded-xl p-3 sm:p-4">
            <span className="block text-[10px] uppercase tracking-wider text-[#68736B] mb-0.5">
              Entitas Resmi
            </span>
            <p className="font-serif text-xs sm:text-sm font-bold text-[#14281D] line-clamp-1">
              {COMPANY_PROFILE.name}
            </p>
            <span className="text-[11px] text-[#4A554E] line-clamp-1">
              Berdiri {COMPANY_PROFILE.foundedYear}
            </span>
          </div>

          <div className="bg-[#FDFBF7] border border-[#E2DDD2] rounded-xl p-3 sm:p-4">
            <span className="block text-[10px] uppercase tracking-wider text-[#68736B] mb-0.5">
              Bidang Usaha
            </span>
            <p className="font-serif text-xs sm:text-sm font-bold text-[#14281D] line-clamp-1">
              Konsultasi &amp; Saprodi
            </p>
            <span className="text-[11px] text-[#4A554E] line-clamp-1">
              Layanan Hulu ke Hilir
            </span>
          </div>

          <div className="bg-[#FDFBF7] border border-[#E2DDD2] rounded-xl p-3 sm:p-4">
            <span className="block text-[10px] uppercase tracking-wider text-[#68736B] mb-0.5">
              Kantor Pusat
            </span>
            <p className="font-serif text-xs sm:text-sm font-bold text-[#14281D] line-clamp-1">
              Dramaga, Bogor
            </p>
            <span className="text-[11px] text-[#4A554E] line-clamp-1">
              Sinarsari, Jawa Barat
            </span>
          </div>

          <div className="bg-[#FDFBF7] border border-[#E2DDD2] rounded-xl p-3 sm:p-4">
            <span className="block text-[10px] uppercase tracking-wider text-[#68736B] mb-0.5">
              Filosofi Nama
            </span>
            <p className="font-serif text-xs sm:text-sm font-bold text-[#14281D] line-clamp-1">
              Agri + Xentris
            </p>
            <span className="text-[11px] text-[#4A554E] line-clamp-1">
              Centered Agricultural Hub
            </span>
          </div>
        </div>

        {/* 3 Collapsible Corporate Disclosure Rows (Hidden by Default) */}
        <div className="space-y-2.5">
          {/* Panel 1: Tentang Kami & 3 Keunggulan Utama */}
          <div className="bg-[#FDFBF7] border border-[#D8D2C5] rounded-xl overflow-hidden">
            <button
              type="button"
              onClick={() => togglePanel('about')}
              data-testid="accordion-about"
              aria-expanded={openPanel === 'about'}
              className="w-full px-4 py-3.5 flex items-center justify-between gap-3 text-left hover:bg-[#F3EFE6]/60 transition-colors cursor-pointer"
            >
              <div className="flex items-center gap-3 min-w-0">
                <div className="w-8 h-8 rounded-lg bg-[#14281D]/10 text-[#14281D] flex items-center justify-center shrink-0">
                  <Sprout className="w-4 h-4" />
                </div>
                <div className="min-w-0">
                  <h3 className="font-serif text-sm sm:text-base font-bold text-[#14281D] truncate">
                    Tentang Kami &amp; Mengapa Memilih AgriXentris
                  </h3>
                  <p className="text-[11px] text-[#68736B] truncate">
                    Filosofi perusahaan, latar belakang akademik Bogor &amp; 3 fokus pendekatan
                  </p>
                </div>
              </div>
              <span className="inline-flex items-center gap-1 text-xs font-semibold text-[#14281D] shrink-0">
                <span className="hidden sm:inline">{openPanel === 'about' ? 'Tutup' : 'Baca'}</span>
                <ChevronDown
                  className={`w-4 h-4 transition-transform duration-200 ${
                    openPanel === 'about' ? 'rotate-180 text-[#B84A27]' : ''
                  }`}
                />
              </span>
            </button>

            {openPanel === 'about' && (
              <div className="px-4 pb-4 pt-2 border-t border-[#E6E1D6] space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs sm:text-sm text-[#4A554E] leading-relaxed">
                  <p>{COMPANY_PROFILE.philosophy}</p>
                  <p>{COMPANY_PROFILE.introParagraph2}</p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 pt-1">
                  {COMPANY_PROFILE.whyUs.map((pillar) => (
                    <div
                      key={pillar.number}
                      className="p-3 rounded-lg bg-[#F6F4EE] border border-[#E2DDD2]"
                    >
                      <span className="font-mono text-[10px] font-semibold text-[#B84A27]">
                        {pillar.number}
                      </span>
                      <h4 className="font-serif text-xs sm:text-sm font-bold text-[#14281D] mt-0.5 mb-1">
                        {pillar.title}
                      </h4>
                      <p className="text-[11px] text-[#4A554E] leading-relaxed">
                        {pillar.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Panel 2: Visi & 5 Misi Perusahaan */}
          <div className="bg-[#FDFBF7] border border-[#D8D2C5] rounded-xl overflow-hidden">
            <button
              type="button"
              onClick={() => togglePanel('vision')}
              data-testid="accordion-vision"
              aria-expanded={openPanel === 'vision'}
              className="w-full px-4 py-3.5 flex items-center justify-between gap-3 text-left hover:bg-[#F3EFE6]/60 transition-colors cursor-pointer"
            >
              <div className="flex items-center gap-3 min-w-0">
                <div className="w-8 h-8 rounded-lg bg-[#B84A27]/10 text-[#B84A27] flex items-center justify-center shrink-0">
                  <Compass className="w-4 h-4" />
                </div>
                <div className="min-w-0">
                  <h3 className="font-serif text-sm sm:text-base font-bold text-[#14281D] truncate">
                    Visi &amp; 5 Misi Strategis Perusahaan
                  </h3>
                  <p className="text-[11px] text-[#68736B] truncate">
                    Menjadi perusahaan agribisnis terintegrasi terkemuka di Indonesia
                  </p>
                </div>
              </div>
              <span className="inline-flex items-center gap-1 text-xs font-semibold text-[#14281D] shrink-0">
                <span className="hidden sm:inline">{openPanel === 'vision' ? 'Tutup' : 'Baca'}</span>
                <ChevronDown
                  className={`w-4 h-4 transition-transform duration-200 ${
                    openPanel === 'vision' ? 'rotate-180 text-[#B84A27]' : ''
                  }`}
                />
              </span>
            </button>

            {openPanel === 'vision' && (
              <div className="px-4 pb-4 pt-2 border-t border-[#E6E1D6] space-y-3">
                <div className="p-3 rounded-lg bg-[#14281D] text-[#FDFBF7]">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-[#E07A5F] block mb-1">
                    Visi Utama
                  </span>
                  <p className="font-serif text-xs sm:text-sm leading-relaxed">
                    “{COMPANY_PROFILE.vision}”
                  </p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {COMPANY_PROFILE.missions.map((mission, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-2 p-2.5 rounded-lg bg-[#F6F4EE] border border-[#E2DDD2]"
                    >
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#2D6A4F] shrink-0 mt-0.5" />
                      <p className="text-xs text-[#14281D] leading-snug">{mission}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Panel 3: 5 Nilai Inti (Core Values) */}
          <div className="bg-[#FDFBF7] border border-[#D8D2C5] rounded-xl overflow-hidden">
            <button
              type="button"
              onClick={() => togglePanel('values')}
              data-testid="accordion-values"
              aria-expanded={openPanel === 'values'}
              className="w-full px-4 py-3.5 flex items-center justify-between gap-3 text-left hover:bg-[#F3EFE6]/60 transition-colors cursor-pointer"
            >
              <div className="flex items-center gap-3 min-w-0">
                <div className="w-8 h-8 rounded-lg bg-[#2D6A4F]/10 text-[#2D6A4F] flex items-center justify-center shrink-0">
                  <Award className="w-4 h-4" />
                </div>
                <div className="min-w-0">
                  <h3 className="font-serif text-sm sm:text-base font-bold text-[#14281D] truncate">
                    5 Nilai Perusahaan (Core Values)
                  </h3>
                  <p className="text-[11px] text-[#68736B] truncate">
                    Integrity · Profesional · Innovation · Collaboration · Sustainability
                  </p>
                </div>
              </div>
              <span className="inline-flex items-center gap-1 text-xs font-semibold text-[#14281D] shrink-0">
                <span className="hidden sm:inline">{openPanel === 'values' ? 'Tutup' : 'Baca'}</span>
                <ChevronDown
                  className={`w-4 h-4 transition-transform duration-200 ${
                    openPanel === 'values' ? 'rotate-180 text-[#B84A27]' : ''
                  }`}
                />
              </span>
            </button>

            {openPanel === 'values' && (
              <div className="px-4 pb-4 pt-2 border-t border-[#E6E1D6]">
                <div className="grid grid-cols-2 sm:grid-cols-5 gap-2.5">
                  {COMPANY_PROFILE.coreValues.map((val, idx) => (
                    <div
                      key={val.name}
                      className="p-3 rounded-lg bg-[#F6F4EE] border border-[#E2DDD2]"
                    >
                      <div className="flex items-center justify-between mb-1">
                        <span className="font-mono text-[10px] text-[#68736B]">0{idx + 1}</span>
                        <ShieldCheck className="w-3.5 h-3.5 text-[#2D6A4F]" />
                      </div>
                      <h4 className="font-serif text-xs sm:text-sm font-bold text-[#14281D] mb-1">
                        {val.name}
                      </h4>
                      <p className="text-[11px] text-[#4A554E] leading-snug">{val.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
