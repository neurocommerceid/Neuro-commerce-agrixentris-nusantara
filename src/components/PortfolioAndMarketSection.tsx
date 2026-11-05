import React, { useState } from 'react';
import {
  PORTFOLIO_PROGRAMS,
  TARGET_MARKETS,
  COMPANY_PROFILE,
} from '../data/agrixentrisData';
import { Eye } from 'lucide-react';

export const PortfolioAndMarketSection: React.FC = () => {
  const [activeMarketId, setActiveMarketId] = useState<string>(TARGET_MARKETS[0].id);
  const [showPortfolioDiagram, setShowPortfolioDiagram] = useState<boolean>(false);

  const selectedMarket =
    TARGET_MARKETS.find((m) => m.id === activeMarketId) || TARGET_MARKETS[0];

  return (
    <section
      id="portofolio"
      className="bg-[#F0E5D7] border-b border-[#E5D5C0] py-16 lg:py-24"
    >
      <div className="max-w-[1360px] mx-auto px-6">
        {/* 05. Portofolio & Pengalaman Program */}
        <div className="flex flex-wrap items-end justify-between gap-6 pb-10 border-b border-[#E5D5C0]">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold text-[#4C5520] mb-2">
              05. Portofolio &amp; Pengalaman Program
            </p>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-[#1E3A2B] leading-tight">
              Rekam Jejak Pendampingan, Pelatihan SDM &amp; Produksi Komersial.
            </h2>
          </div>

          <button
            type="button"
            onClick={() => setShowPortfolioDiagram((prev) => !prev)}
            className="inline-flex items-center gap-2 px-4 py-2.5 text-xs font-semibold text-[#1E3A2B] bg-[#FAF6F1] hover:bg-[#EADDCC] border border-[#E5D5C0] rounded-lg transition-colors cursor-pointer whitespace-nowrap shrink-0"
          >
            <Eye className="w-3.5 h-3.5 text-[#4C5520]" aria-hidden="true" />
            <span>
              {showPortfolioDiagram
                ? 'Sembunyikan Infografis Portofolio & Pasar'
                : 'Lihat Infografis Portofolio & Strategi Pasar'}
            </span>
          </button>
        </div>

        {showPortfolioDiagram && (
          <div className="my-8 grid grid-cols-1 md:grid-cols-2 gap-6 bg-[#FAF6F1] border border-[#E5D5C0] rounded-xl p-6">
            <div>
              <h3 className="text-xs font-semibold text-[#1E3A2B] mb-2">
                Infografis Portofolio &amp; Pengalaman Program (Halaman 6 PDF)
              </h3>
              <img
                src="/assets/compro/img_20.jpg"
                alt="Infografis Portofolio dan Pengalaman Program AgriXentris Nusantara"
                referrerPolicy="no-referrer"
                className="w-full max-h-[440px] object-contain rounded-lg border border-[#E5D5C0]"
              />
            </div>
            <div>
              <h3 className="text-xs font-semibold text-[#1E3A2B] mb-2">
                Infografis Target Market &amp; Strategi Pasar (Halaman 7 PDF)
              </h3>
              <img
                src="/assets/compro/img_25.jpg"
                alt="Infografis Target Market AgriXentris Nusantara"
                referrerPolicy="no-referrer"
                className="w-full max-h-[440px] object-contain rounded-lg border border-[#E5D5C0]"
              />
            </div>
          </div>
        )}

        {/* 4 Portfolio Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 py-12 border-b border-[#E5D5C0]">
          {PORTFOLIO_PROGRAMS.map((prog, index) => (
            <article
              key={prog.id}
              className="bg-[#FAF6F1] border border-[#E5D5C0] rounded-xl overflow-hidden flex flex-col justify-between"
            >
              <div>
                <div className="relative h-56 bg-[#1E3A2B] overflow-hidden">
                  <img
                    src={prog.image}
                    alt={prog.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/25 to-transparent flex flex-col justify-end p-5">
                    <div className="text-xs text-[#EADDCC] font-mono-tabular mb-1">
                      0{index + 1} · {prog.category} · {prog.locationHighlight}
                    </div>
                    <h3 className="font-display text-xl font-bold text-white">
                      {prog.title}
                    </h3>
                  </div>
                </div>

                <div className="p-6">
                  <p className="text-xs font-semibold text-[#4C5520] mb-3">
                    Skala Implementasi: {prog.scale}
                  </p>
                  <ul className="space-y-2">
                    {prog.points.map((pt) => (
                      <li
                        key={pt}
                        className="text-sm text-[#2D3819] flex items-start gap-2.5"
                      >
                        <span className="font-mono-tabular text-xs font-bold text-[#D95338] mt-0.5">
                          &rarr;
                        </span>
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="px-6 py-3.5 bg-[#F0E5D7]/60 border-t border-[#E5D5C0] text-xs font-medium text-[#1E3A2B]">
                <strong className="text-[#4C5520]">Hasil Terukur:</strong>{' '}
                {prog.impactMetric}
              </div>
            </article>
          ))}
        </div>

        {/* 06. Keunggulan Kompetitif & Target Market */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 py-14 border-b border-[#E5D5C0] items-stretch">
          <div className="lg:col-span-5 flex flex-col justify-between bg-[#FAF6F1] border border-[#E5D5C0] rounded-xl p-7">
            <div>
              <p className="text-xs font-semibold text-[#D95338] mb-2">
                06. Keunggulan Kompetitif
              </p>
              <h3 className="font-display text-2xl font-bold text-[#1E3A2B] mb-5">
                Standar Operasional Berbasis Riset &amp; SOP Terukur
              </h3>

              <ul className="space-y-3">
                {COMPANY_PROFILE.competitiveAdvantages.map((adv, idx) => (
                  <li
                    key={adv}
                    className="flex items-start gap-3 text-sm text-[#2D3819] pb-3 border-b border-[#E5D5C0] last:border-b-0"
                  >
                    <span className="font-mono-tabular text-xs font-bold text-[#4C5520] mt-0.5">
                      0{idx + 1}.
                    </span>
                    <span>{adv}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-6 pt-4 border-t border-[#E5D5C0] text-xs text-[#4C5520]">
              Strategi pasar terintegrasi berbasis data memastikan penyusunan SOP dan monitoring proyek berjalan presisi.
            </div>
          </div>

          <div className="lg:col-span-7 flex flex-col justify-between bg-[#FAF6F1] border border-[#E5D5C0] rounded-xl p-7">
            <div>
              <p className="text-xs font-semibold text-[#4C5520] mb-2">
                Segmen Mitra &amp; Target Market
              </p>
              <h3 className="font-display text-2xl font-bold text-[#1E3A2B] mb-5">
                4 Kelompok Mitra Strategis AgriXentris Nusantara
              </h3>

              {/* Target Market Selector Tabs */}
              <div
                role="group"
                aria-label="Pilih Segmen Target Market"
                className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-6"
              >
                {TARGET_MARKETS.map((tm) => {
                  const isActive = tm.id === selectedMarket.id;
                  return (
                    <button
                      key={tm.id}
                      type="button"
                      onClick={() => setActiveMarketId(tm.id)}
                      className={`p-3.5 rounded-lg border text-left transition-colors cursor-pointer ${
                        isActive
                          ? 'bg-[#1E3A2B] text-[#FAF6F1] border-[#1E3A2B]'
                          : 'bg-[#F0E5D7]/60 text-[#2D3819] border-[#E5D5C0] hover:bg-[#EADDCC]'
                      }`}
                    >
                      <span className="block text-xs font-bold leading-snug">
                        {tm.title}
                      </span>
                    </button>
                  );
                })}
              </div>

              {/* Active Target Market Detail */}
              <div className="p-5 rounded-xl bg-[#F0E5D7]/70 border border-[#E5D5C0]">
                <p className="text-xs text-[#4C5520] mb-1">
                  {selectedMarket.subtitle}
                </p>
                <h4 className="font-display text-xl font-bold text-[#1E3A2B] mb-4">
                  {selectedMarket.title}
                </h4>

                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-4">
                  {selectedMarket.offerings.map((off) => (
                    <li
                      key={off}
                      className="bg-[#FAF6F1] border border-[#E5D5C0] rounded-lg p-3 text-xs font-medium text-[#2D3819]"
                    >
                      {off}
                    </li>
                  ))}
                </ul>

                <p className="text-xs text-[#1E3A2B]">
                  <strong>Dampak Kemitraan:</strong> {selectedMarket.outcome}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* 07. Rencana Pengembangan Usaha 5 Tahun ke Depan */}
        <div className="pt-14">
          <div className="flex flex-wrap items-end justify-between gap-4 mb-8">
            <div>
              <p className="text-xs font-semibold text-[#4C5520] mb-1">
                07. Peta Jalan Ekspansi (5 Tahun ke Depan)
              </p>
              <h3 className="font-display text-2xl sm:text-3xl font-bold text-[#1E3A2B]">
                Rencana Pengembangan Usaha AgriXentris Nusantara
              </h3>
            </div>
            <p className="text-xs text-[#4C5520] max-w-md">
              Lima target strategis perusahaan dalam memperluas ekosistem layanan pertanian modern secara nasional.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {COMPANY_PROFILE.fiveYearRoadmap.map((milestone, idx) => (
              <div
                key={milestone.step}
                className="bg-[#FAF6F1] border border-[#E5D5C0] rounded-xl p-5 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between text-xs font-mono-tabular text-[#D95338] font-bold mb-2">
                    <span>Target 0{idx + 1}</span>
                    <span>{milestone.step}</span>
                  </div>
                  <h4 className="font-display text-base font-bold text-[#1E3A2B] mb-2">
                    {milestone.title}
                  </h4>
                  <p className="text-xs text-[#3A3C31] leading-relaxed">
                    {milestone.detail}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
