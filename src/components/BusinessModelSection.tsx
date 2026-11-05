import React, { useState } from 'react';
import { BUSINESS_PILLARS } from '../data/agrixentrisData';
import { ArrowUpRight, Eye } from 'lucide-react';

export const BusinessModelSection: React.FC = () => {
  const [activePillarIndex, setActivePillarIndex] = useState<number>(0);
  const [showDiagramModal, setShowDiagramModal] = useState<boolean>(false);

  const activePillar = BUSINESS_PILLARS[activePillarIndex];

  return (
    <section
      id="model-bisnis"
      className="bg-[#F0E5D7] border-b border-[#E5D5C0] py-16 lg:py-24"
    >
      <div className="max-w-[1360px] mx-auto px-6">
        <div className="flex flex-wrap items-end justify-between gap-6 mb-10">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold text-[#4C5520] mb-2">
              04. Skema Model Bisnis Terintegrasi
            </p>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-[#1E3A2B] leading-tight">
              Empat Pilar Lini Bisnis yang Saling Terhubung dalam Satu Ekosistem.
            </h2>
          </div>

          <button
            type="button"
            onClick={() => setShowDiagramModal((prev) => !prev)}
            className="inline-flex items-center gap-2 px-4 py-2.5 text-xs font-semibold text-[#1E3A2B] bg-[#FAF6F1] hover:bg-[#EADDCC] border border-[#E5D5C0] rounded-lg transition-colors cursor-pointer whitespace-nowrap shrink-0"
          >
            <Eye className="w-3.5 h-3.5 text-[#4C5520]" aria-hidden="true" />
            <span>
              {showDiagramModal
                ? 'Sembunyikan Infografis Skema Asli'
                : 'Lihat Infografis Skema Model Bisnis'}
            </span>
          </button>
        </div>

        {showDiagramModal && (
          <div className="mb-10 bg-[#FAF6F1] border border-[#E5D5C0] rounded-xl p-6">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h3 className="text-sm font-semibold text-[#1E3A2B]">
                  Infografis Resmi Skema Model Bisnis Terintegrasi (Halaman 5 Company Profile)
                </h3>
                <p className="text-xs text-[#4C5520]">
                  Keempat pilar saling mendukung dari perencanaan lahan, suplai sarana produksi, pelatihan SDM, hingga digitalisasi monitoring.
                </p>
              </div>
              <button
                type="button"
                onClick={() => setShowDiagramModal(false)}
                className="text-xs font-semibold text-[#D95338] hover:underline cursor-pointer"
              >
                Tutup Pratinjau
              </button>
            </div>
            <div className="max-h-[540px] overflow-auto rounded-lg border border-[#E5D5C0] bg-[#1E3A2B]/5 flex justify-center p-4">
              <img
                src="/assets/compro/img_11.jpg"
                alt="Skema Model Bisnis Terintegrasi AgriXentris Nusantara"
                referrerPolicy="no-referrer"
                className="max-h-[480px] w-auto object-contain rounded"
              />
            </div>
          </div>
        )}

        {/* Interactive 4-Pillar Tabs + Detailed Split View */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left Column: 4 Pillar Selector Buttons */}
          <div className="lg:col-span-5 flex flex-col gap-3">
            {BUSINESS_PILLARS.map((pillar, idx) => {
              const isSelected = idx === activePillarIndex;
              return (
                <button
                  key={pillar.number}
                  type="button"
                  onClick={() => setActivePillarIndex(idx)}
                  className={`text-left p-5 rounded-xl border transition-all duration-150 cursor-pointer ${
                    isSelected
                      ? 'bg-[#1E3A2B] text-[#FAF6F1] border-[#1E3A2B]'
                      : 'bg-[#FAF6F1] text-[#2D3819] border-[#E5D5C0] hover:bg-[#EADDCC]/70'
                  }`}
                >
                  <div className="flex items-center justify-between gap-2 mb-1.5">
                    <span
                      className={`font-mono-tabular text-xs font-semibold ${
                        isSelected ? 'text-[#EADDCC]' : 'text-[#D95338]'
                      }`}
                    >
                      Pilar {pillar.number}
                    </span>
                    <span
                      className={`text-xs ${
                        isSelected ? 'text-[#EADDCC]' : 'text-[#4C5520]'
                      }`}
                    >
                      {pillar.representation.split(',')[0]}
                    </span>
                  </div>
                  <h3 className="font-display text-lg font-bold">
                    {pillar.title}
                  </h3>
                </button>
              );
            })}
          </div>

          {/* Right Column: Active Pillar Deep-Dive Card */}
          <div className="lg:col-span-7 bg-[#FAF6F1] border border-[#E5D5C0] rounded-xl p-7 lg:p-9 flex flex-col justify-between">
            <div>
              <div className="flex flex-wrap items-center justify-between gap-2 pb-4 mb-5 border-b border-[#E5D5C0] text-xs text-[#4C5520]">
                <span>Pilar Lini Bisnis {activePillar.number} dari 04</span>
                <span>·</span>
                <span>Representasi: {activePillar.representation}</span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start mb-6">
                <div className="md:col-span-7">
                  <h3 className="font-display text-2xl font-bold text-[#1E3A2B] mb-3">
                    {activePillar.title}
                  </h3>
                  <p className="text-sm text-[#3A3C31] leading-relaxed mb-5">
                    {activePillar.summary}
                  </p>

                  <h4 className="text-xs font-semibold text-[#4C5520] mb-2.5">
                    Cakupan Layanan &amp; Operasional:
                  </h4>
                  <ul className="space-y-2">
                    {activePillar.services.map((service) => (
                      <li
                        key={service}
                        className="flex items-start gap-2.5 text-sm text-[#2D3819]"
                      >
                        <span className="font-mono-tabular text-xs font-bold text-[#D95338] mt-0.5">
                          &rarr;
                        </span>
                        <span>{service}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="md:col-span-5">
                  <div className="rounded-xl overflow-hidden border border-[#E5D5C0] h-56 bg-[#1E3A2B]">
                    <img
                      src={activePillar.image}
                      alt={activePillar.title}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-5 border-t border-[#E5D5C0] flex flex-wrap items-center justify-between gap-4">
              <div>
                <p className="text-xs text-[#4C5520]">Output Utama Lini Bisnis:</p>
                <p className="text-xs font-semibold text-[#1E3A2B]">
                  {activePillar.deliverable}
                </p>
              </div>
              <a
                href="#kontak"
                className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-[#FAF6F1] bg-[#4C5520] hover:bg-[#1E3A2B] rounded-lg transition-colors whitespace-nowrap shrink-0"
              >
                <span>Konsultasikan Lini Ini</span>
                <ArrowUpRight className="w-3.5 h-3.5" aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
