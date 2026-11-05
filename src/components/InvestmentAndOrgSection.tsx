import React, { useState, useMemo } from 'react';
import {
  TrendingUp,
  CheckCircle2,
  Network,
  Calculator,
  ArrowRight,
  ChevronDown,
  ShieldCheck,
} from 'lucide-react';
import {
  COMPANY_PROFILE,
  INVESTMENT_PROJECTS,
  ORGANIZATION_STRUCTURE,
} from '../data/agrixentrisData';
import {
  calculateInvestmentProjection,
  formatRupiah,
} from '../utils/catalogLogic';

export const InvestmentAndOrgSection: React.FC = () => {
  const [selectedProjectId, setSelectedProjectId] = useState<string>(INVESTMENT_PROJECTS[0].id);
  const [capitalInputRp, setCapitalInputRp] = useState<number>(200000000);
  const [durationYears, setDurationYears] = useState<number>(3);
  const [showCommitments, setShowCommitments] = useState(false);
  const [expandedExec, setExpandedExec] = useState<string | null>(null);

  const selectedProject = useMemo(
    () => INVESTMENT_PROJECTS.find((p) => p.id === selectedProjectId) ?? INVESTMENT_PROJECTS[0],
    [selectedProjectId]
  );

  const roiResult = useMemo(
    () => calculateInvestmentProjection(selectedProject, capitalInputRp, durationYears),
    [selectedProject, capitalInputRp, durationYears]
  );

  const whatsappInvestUrl = useMemo(() => {
    const text = [
      `Halo Tim Investasi *${COMPANY_PROFILE.name}*,`,
      `Saya tertarik mendiskusikan kemitraan investasi proyek:`,
      `• Proyek: ${roiResult.projectTitle}`,
      `• Modal Estimasi: ${formatRupiah(roiResult.capitalInputRp)} (${roiResult.durationYears} tahun)`,
      `Mohon jadwal presentasi prospektus & studi kelayakan.`,
    ].join('\n');
    return `https://wa.me/${COMPANY_PROFILE.whatsappNumber}?text=${encodeURIComponent(text)}`;
  }, [roiResult]);

  return (
    <section id="investasi" className="py-10 sm:py-14 bg-[#F6F4EE] border-b border-[#E2DDD2]">
      <div className="max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-8 space-y-8">
        {/* Compact Investment Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-widest text-[#B84A27] mb-1">
              Kemitraan &amp; Tata Kelola
            </p>
            <h2 className="font-serif text-xl sm:text-3xl font-bold text-[#14281D]">
              Simulasi Investasi &amp; Struktur Organisasi
            </h2>
          </div>
          <p className="text-xs text-[#4A554E]">
            Estimasi kelayakan usaha tani &amp; struktur kepemimpinan AgriXentris.
          </p>
        </div>

        {/* Compact ROI Simulator Card */}
        <div className="bg-[#FDFBF7] border border-[#D8D2C5] rounded-2xl p-4 sm:p-6 shadow-xs">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-start">
            {/* Controls */}
            <div className="lg:col-span-6 space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Calculator className="w-4 h-4 text-[#B84A27]" />
                  <h3 className="font-serif text-sm sm:text-lg font-bold text-[#14281D]">
                    Kalkulator Kelayakan Proyek
                  </h3>
                </div>
                <span className="font-mono text-[10px] text-[#68736B]">4 Klaster Investasi</span>
              </div>

              {/* 2x2 Project Selector */}
              <div className="grid grid-cols-2 gap-2">
                {INVESTMENT_PROJECTS.map((proj) => {
                  const active = selectedProject.id === proj.id;
                  return (
                    <button
                      key={proj.id}
                      type="button"
                      onClick={() => {
                        setSelectedProjectId(proj.id);
                        setCapitalInputRp(proj.minInvestmentRp);
                      }}
                      data-testid={`roi-cluster-${proj.id}`}
                      className={`p-2.5 rounded-xl border text-left transition-all cursor-pointer ${
                        active
                          ? 'bg-[#14281D] text-[#FDFBF7] border-[#14281D]'
                          : 'bg-[#F6F4EE] text-[#14281D] border-[#D8D2C5] hover:border-[#14281D]/40'
                      }`}
                    >
                      <span
                        className={`block font-mono text-[9px] uppercase tracking-wider mb-0.5 truncate ${
                          active ? 'text-[#E07A5F]' : 'text-[#B84A27]'
                        }`}
                      >
                        ROI ±{proj.targetRoiPercentAnnual}% / thn
                      </span>
                      <span className="font-semibold text-[11px] sm:text-xs leading-tight line-clamp-2">
                        {proj.title}
                      </span>
                    </button>
                  );
                })}
              </div>

              {/* Capital & Duration Sliders */}
              <div className="p-3 rounded-xl bg-[#F6F4EE] border border-[#E2DDD2] space-y-3">
                <div>
                  <div className="flex items-center justify-between text-xs mb-1">
                    <span className="font-semibold text-[#14281D]">Modal Proyek</span>
                    <span className="font-mono text-[11px] font-bold text-[#B84A27]">
                      {formatRupiah(roiResult.capitalInputRp)}
                    </span>
                  </div>
                  <input
                    type="range"
                    min={selectedProject.minInvestmentRp}
                    max={1000000000}
                    step={25000000}
                    value={roiResult.capitalInputRp}
                    onChange={(e) => setCapitalInputRp(Number(e.target.value))}
                    data-testid="roi-scale-slider"
                    className="w-full accent-[#14281D] cursor-pointer"
                  />
                </div>

                <div>
                  <div className="flex items-center justify-between text-xs mb-1">
                    <span className="font-semibold text-[#14281D]">Tenor Proyeksi</span>
                    <span className="font-mono text-[11px] text-[#14281D]">
                      {durationYears} Tahun ({selectedProject.cycleDuration})
                    </span>
                  </div>
                  <input
                    type="range"
                    min={1}
                    max={5}
                    value={durationYears}
                    onChange={(e) => setDurationYears(Number(e.target.value))}
                    className="w-full accent-[#14281D] cursor-pointer"
                  />
                </div>
              </div>

              {/* Collapsible 5 Investor Commitments */}
              <div className="border border-[#E2DDD2] rounded-xl bg-[#F6F4EE] overflow-hidden">
                <button
                  type="button"
                  onClick={() => setShowCommitments((prev) => !prev)}
                  className="w-full px-3.5 py-2.5 flex items-center justify-between text-xs font-semibold text-[#14281D] cursor-pointer"
                >
                  <span className="flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-[#2D6A4F]" />
                    Lihat 5 Komitmen Pengelolaan Investor
                  </span>
                  <ChevronDown
                    className={`w-4 h-4 transition-transform duration-200 ${
                      showCommitments ? 'rotate-180 text-[#B84A27]' : ''
                    }`}
                  />
                </button>
                {showCommitments && (
                  <div className="px-3.5 pb-3 pt-1.5 border-t border-[#E2DDD2] space-y-1.5">
                    {COMPANY_PROFILE.investorCommitments.map((item) => (
                      <div key={item} className="flex items-start gap-2 text-[11px] text-[#4A554E]">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#2D6A4F] shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* Output Metrics Box */}
            <div className="lg:col-span-6 bg-[#14281D] text-[#FDFBF7] rounded-xl p-4 sm:p-5 space-y-4">
              <div className="grid grid-cols-2 gap-3 pb-3 border-b border-[#FDFBF7]/15">
                <div>
                  <span className="block text-[10px] font-mono uppercase tracking-wider text-[#A3B18A]">
                    Modal Kerja &amp; Capex
                  </span>
                  <span
                    data-testid="roi-capex-output"
                    className="font-mono text-base sm:text-xl font-bold text-[#FDFBF7]"
                  >
                    {formatRupiah(roiResult.capitalInputRp)}
                  </span>
                </div>
                <div>
                  <span className="block text-[10px] font-mono uppercase tracking-wider text-[#A3B18A]">
                    Proyeksi Bagi Hasil / Thn
                  </span>
                  <span
                    data-testid="roi-net-profit-output"
                    className="font-mono text-base sm:text-xl font-bold text-[#74C69D]"
                  >
                    {formatRupiah(roiResult.annualReturnRp)}
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-2 text-center">
                <div className="p-2.5 rounded-lg bg-[#FDFBF7]/5 border border-[#FDFBF7]/10">
                  <span className="block text-[10px] text-[#D8D2C5]">
                    Akumulasi ({roiResult.durationYears} Thn)
                  </span>
                  <span className="font-mono text-xs sm:text-sm font-semibold text-[#FDFBF7]">
                    {formatRupiah(roiResult.totalProjectedProfitRp)}
                  </span>
                </div>
                <div className="p-2.5 rounded-lg bg-[#FDFBF7]/5 border border-[#FDFBF7]/10">
                  <span className="block text-[10px] text-[#D8D2C5]">Target ROI</span>
                  <span className="font-mono text-xs sm:text-sm font-bold text-[#E07A5F]">
                    {selectedProject.targetRoiPercentAnnual}% / thn
                  </span>
                </div>
                <div className="p-2.5 rounded-lg bg-[#FDFBF7]/5 border border-[#FDFBF7]/10">
                  <span className="block text-[10px] text-[#D8D2C5]">Payback (BEP)</span>
                  <span className="font-mono text-xs sm:text-sm font-semibold text-[#FDFBF7]">
                    ±{roiResult.estimatedPaybackMonths} bln
                  </span>
                </div>
              </div>

              <a
                href={whatsappInvestUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 px-4 rounded-xl bg-[#B84A27] hover:bg-[#9E3C1E] text-[#FDFBF7] text-xs font-semibold flex items-center justify-center gap-2 transition-colors"
              >
                <TrendingUp className="w-4 h-4" />
                Diskusikan Proposal Proyek Ini via WhatsApp
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>

        {/* Compact Organization Chart (2-Column Grid on Mobile, 5-Column on Desktop) */}
        <div id="organisasi" className="pt-2">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
            <div className="flex items-center gap-2">
              <Network className="w-4 h-4 text-[#14281D]" />
              <h3 className="font-serif text-base sm:text-xl font-bold text-[#14281D]">
                Struktur Eksekutif — CEO: {ORGANIZATION_STRUCTURE.ceo.name}
              </h3>
            </div>
            <span className="text-[11px] text-[#68736B]">
              Advisor: {ORGANIZATION_STRUCTURE.strategicAdvisor.name} · Klik panah untuk divisi
            </span>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-5 gap-2.5 sm:gap-3">
            {ORGANIZATION_STRUCTURE.executives.map((exec) => {
              const isOpen = expandedExec === exec.roleCode;
              return (
                <div
                  key={exec.roleCode}
                  className="bg-[#FDFBF7] border border-[#D8D2C5] rounded-xl p-3 sm:p-3.5 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-1">
                      <span className="px-2 py-0.5 rounded bg-[#14281D] text-[#FDFBF7] font-mono text-[10px] font-bold">
                        {exec.roleCode}
                      </span>
                      <span className="text-[10px] font-mono text-[#68736B]">
                        {exec.divisions.length} Divisi
                      </span>
                    </div>
                    <h4 className="font-serif text-xs sm:text-sm font-bold text-[#14281D] leading-snug truncate">
                      {exec.name}
                    </h4>
                    <p className="text-[10px] text-[#68736B] truncate">{exec.roleTitle}</p>

                    <button
                      type="button"
                      onClick={() => setExpandedExec(isOpen ? null : exec.roleCode)}
                      className="mt-2.5 w-full pt-2 border-t border-[#E2DDD2] flex items-center justify-between text-[11px] font-semibold text-[#14281D] hover:text-[#B84A27] cursor-pointer"
                    >
                      <span>{isOpen ? 'Tutup divisi' : 'Lihat divisi'}</span>
                      <ChevronDown
                        className={`w-3.5 h-3.5 transition-transform duration-200 ${
                          isOpen ? 'rotate-180 text-[#B84A27]' : ''
                        }`}
                      />
                    </button>

                    {isOpen && (
                      <ul className="mt-2 pt-2 border-t border-[#E2DDD2] space-y-1.5">
                        {exec.divisions.map((div) => (
                          <li key={div.name} className="text-[11px] text-[#14281D]">
                            <span className="font-semibold block">{div.name}</span>
                            <span className="text-[10px] text-[#68736B]">
                              {div.tasks.join(' · ')}
                            </span>
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
  );
};
