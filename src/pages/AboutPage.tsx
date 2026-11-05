import React, { useState } from 'react';
import {
  COMPANY_PROFILE,
  BUSINESS_PILLARS,
  ORGANIZATION_STRUCTURE,
} from '../data/agrixentrisData';
import { PageId } from '../components/Navbar';
import {
  CheckCircle2,
  ShieldCheck,
  ChevronDown,
  ArrowRight,
  Network,
} from 'lucide-react';

interface AboutPageProps {
  onNavigate: (page: PageId) => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onNavigate }) => {
  const [expandedExec, setExpandedExec] = useState<string | null>(null);

  return (
    <div className="bg-[#FAF6F1]">
      {/* 1. Executive About Summary & 4 Identity Facts */}
      <section className="py-8 sm:py-12 border-b border-[#E5D5C0]">
        <div className="max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-6">
            <p className="text-[11px] font-semibold uppercase tracking-widest text-[#D95338] mb-1">
              Tentang Perusahaan · Est. {COMPANY_PROFILE.foundedYear}
            </p>
            <h1 className="font-display text-2xl sm:text-4xl font-bold text-[#1E3A2B] mb-2.5">
              Pusat Layanan Agribisnis &amp; Teknologi Pertanian Modern
            </h1>
            <p className="text-xs sm:text-sm text-[#3A3C31] leading-relaxed">
              <strong>{COMPANY_PROFILE.name}</strong> menggabungkan ilmu pertanian, teknologi tepat guna, dan manajemen bisnis dalam satu ekosistem layanan dari hulu ke hilir untuk petani, investor, industri pangan, dan pemerintah daerah.
            </p>
          </div>

          {/* 4 Key Corporate Identity Boxes */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-2.5 sm:gap-4">
            <div className="bg-[#F6F2EA] border border-[#E5D5C0] rounded-xl p-3.5">
              <span className="block text-[10px] font-mono uppercase text-[#4C5520] mb-0.5">
                Entitas &amp; Tahun
              </span>
              <p className="font-display text-xs sm:text-sm font-bold text-[#1E3A2B]">
                {COMPANY_PROFILE.name}
              </p>
              <span className="text-[11px] text-[#3A3C31]">
                Berdiri sejak {COMPANY_PROFILE.foundedYear}
              </span>
            </div>

            <div className="bg-[#F6F2EA] border border-[#E5D5C0] rounded-xl p-3.5">
              <span className="block text-[10px] font-mono uppercase text-[#4C5520] mb-0.5">
                Bidang Usaha
              </span>
              <p className="font-display text-xs sm:text-sm font-bold text-[#1E3A2B]">
                Konsultasi &amp; Saprodi
              </p>
              <span className="text-[11px] text-[#3A3C31]">Ekosistem Hulu ke Hilir</span>
            </div>

            <div className="bg-[#F6F2EA] border border-[#E5D5C0] rounded-xl p-3.5">
              <span className="block text-[10px] font-mono uppercase text-[#4C5520] mb-0.5">
                Kantor Pusat
              </span>
              <p className="font-display text-xs sm:text-sm font-bold text-[#1E3A2B]">
                Dramaga, Bogor
              </p>
              <span className="text-[11px] text-[#3A3C31]">Sinarsari, Jawa Barat</span>
            </div>

            <div className="bg-[#F6F2EA] border border-[#E5D5C0] rounded-xl p-3.5">
              <span className="block text-[10px] font-mono uppercase text-[#4C5520] mb-0.5">
                Filosofi Nama
              </span>
              <p className="font-display text-xs sm:text-sm font-bold text-[#1E3A2B]">
                “Agri” + “Xentris”
              </p>
              <span className="text-[11px] text-[#3A3C31]">Centered Agricultural Hub</span>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Visi, 5 Misi & 5 Nilai Inti (Concise Side-by-Side Layout) */}
      <section className="py-8 sm:py-12 border-b border-[#E5D5C0] bg-[#F6F2EA]">
        <div className="max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-8 space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 items-stretch">
            {/* Visi Card */}
            <div className="lg:col-span-5 bg-[#1E3A2B] text-[#FAF6F1] rounded-xl p-4 sm:p-6 flex flex-col justify-between">
              <div>
                <span className="font-mono text-[10px] uppercase tracking-widest text-[#E07A5F] block mb-1.5">
                  Visi Perusahaan
                </span>
                <p className="font-display text-sm sm:text-lg font-semibold leading-relaxed">
                  “{COMPANY_PROFILE.vision}”
                </p>
              </div>
              <div className="pt-4 mt-4 border-t border-white/15 flex items-center justify-between text-[11px] text-[#EADDCC]">
                <span>5 Nilai Inti Perusahaan</span>
                <span className="font-mono">IPB Academic &amp; Field Driven</span>
              </div>
            </div>

            {/* 5 Misi List */}
            <div className="lg:col-span-7 bg-[#FAF6F1] border border-[#E5D5C0] rounded-xl p-4 sm:p-5">
              <span className="font-mono text-[10px] uppercase tracking-widest text-[#D95338] block mb-2">
                5 Misi Strategis
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {COMPANY_PROFILE.missions.map((mission, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-2 p-2 rounded-lg bg-[#F6F2EA] border border-[#E5D5C0]"
                  >
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#2E6F40] shrink-0 mt-0.5" />
                    <span className="text-[11px] sm:text-xs text-[#1E3A2B] leading-snug">
                      {mission}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* 5 Core Values Strip */}
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-2.5">
            {COMPANY_PROFILE.coreValues.map((val, idx) => (
              <div
                key={val.name}
                className="bg-[#FAF6F1] border border-[#E5D5C0] rounded-xl p-3"
              >
                <div className="flex items-center justify-between mb-1">
                  <span className="font-mono text-[10px] text-[#4C5520]">0{idx + 1}</span>
                  <ShieldCheck className="w-3.5 h-3.5 text-[#2E6F40]" />
                </div>
                <h3 className="font-display text-xs sm:text-sm font-bold text-[#1E3A2B]">
                  {val.name}
                </h3>
                <p className="text-[10px] text-[#4C5520] leading-snug mt-0.5 line-clamp-2">
                  {val.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Cakupan 4 Pilar Layanan & Struktur Organisasi */}
      <section className="py-8 sm:py-12">
        <div className="max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-8 space-y-8">
          {/* 4 Pillars Compact Overview */}
          <div>
            <div className="flex items-end justify-between gap-2 mb-4">
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-widest text-[#D95338]">
                  Model Bisnis
                </p>
                <h2 className="font-display text-lg sm:text-2xl font-bold text-[#1E3A2B]">
                  4 Pilar Layanan Terintegrasi
                </h2>
              </div>
              <button
                type="button"
                onClick={() => {
                  onNavigate('katalog');
                  window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior });
                }}
                className="text-xs font-semibold text-[#D95338] hover:underline inline-flex items-center gap-1 cursor-pointer"
              >
                <span>Buka Katalog SKU</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-2.5 sm:gap-4">
              {BUSINESS_PILLARS.map((pillar) => (
                <div
                  key={pillar.number}
                  className="bg-[#F6F2EA] border border-[#E5D5C0] rounded-xl overflow-hidden"
                >
                  <div className="h-24 sm:h-28 bg-[#1E3A2B] relative">
                    <img
                      src={pillar.image}
                      alt={pillar.title}
                      className="w-full h-full object-cover opacity-85"
                    />
                    <span className="absolute top-2 left-2 px-2 py-0.5 rounded bg-[#1E3A2B]/90 text-[#FAF6F1] font-mono text-[10px]">
                      Pilar {pillar.number}
                    </span>
                  </div>
                  <div className="p-3">
                    <h3 className="font-display text-xs sm:text-sm font-bold text-[#1E3A2B] leading-snug mb-1.5">
                      {pillar.title}
                    </h3>
                    <ul className="space-y-1">
                      {pillar.services.slice(0, 3).map((srv) => (
                        <li
                          key={srv}
                          className="text-[10px] sm:text-[11px] text-[#3A3C31] flex items-start gap-1.5 leading-tight"
                        >
                          <span className="w-1 h-1 rounded-full bg-[#D95338] shrink-0 mt-1.5" />
                          <span className="line-clamp-1">{srv}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Struktur Kepemimpinan Eksekutif (Compact 2-col / 5-col) */}
          <div className="pt-4 border-t border-[#E5D5C0]">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
              <div className="flex items-center gap-2">
                <Network className="w-4 h-4 text-[#1E3A2B]" />
                <h2 className="font-display text-base sm:text-xl font-bold text-[#1E3A2B]">
                  Struktur Eksekutif — CEO: {ORGANIZATION_STRUCTURE.ceo.name}
                </h2>
              </div>
              <span className="text-xs text-[#4C5520]">
                Strategic Advisor: <strong>{ORGANIZATION_STRUCTURE.strategicAdvisor.name}</strong>
              </span>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-5 gap-2.5">
              {ORGANIZATION_STRUCTURE.executives.map((exec) => {
                const isOpen = expandedExec === exec.roleCode;
                return (
                  <div
                    key={exec.roleCode}
                    className="bg-[#F6F2EA] border border-[#E5D5C0] rounded-xl p-3 flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-1">
                        <span className="px-2 py-0.5 rounded bg-[#1E3A2B] text-[#FAF6F1] font-mono text-[10px] font-bold">
                          {exec.roleCode}
                        </span>
                        <span className="text-[10px] font-mono text-[#4C5520]">
                          {exec.divisions.length} Divisi
                        </span>
                      </div>
                      <h3 className="font-display text-xs sm:text-sm font-bold text-[#1E3A2B] truncate">
                        {exec.name}
                      </h3>
                      <p className="text-[10px] text-[#4C5520] truncate">{exec.roleTitle}</p>

                      <button
                        type="button"
                        onClick={() => setExpandedExec(isOpen ? null : exec.roleCode)}
                        className="mt-2 w-full pt-1.5 border-t border-[#E5D5C0] flex items-center justify-between text-[10px] font-semibold text-[#1E3A2B] hover:text-[#D95338] cursor-pointer"
                      >
                        <span>{isOpen ? 'Tutup' : 'Divisi'}</span>
                        <ChevronDown
                          className={`w-3 h-3 transition-transform ${
                            isOpen ? 'rotate-180 text-[#D95338]' : ''
                          }`}
                        />
                      </button>

                      {isOpen && (
                        <ul className="mt-1.5 pt-1.5 border-t border-[#E5D5C0] space-y-1">
                          {exec.divisions.map((div) => (
                            <li key={div.name} className="text-[10px] text-[#2D3819] leading-tight">
                              • {div.name}
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
