import React, { useState } from 'react';
import {
  INVESTMENT_PROJECTS,
  ORGANIZATION_STRUCTURE,
  COMPANY_PROFILE,
} from '../data/agrixentrisData';
import {
  calculateInvestmentProjection,
  formatRupiah,
} from '../utils/catalogLogic';
import { Eye, Calculator, Users } from 'lucide-react';

export const InvestmentAndOrgSection: React.FC = () => {
  const [selectedProjectId, setSelectedProjectId] = useState<string>(
    INVESTMENT_PROJECTS[0].id
  );
  const [capitalInput, setCapitalInput] = useState<number>(
    INVESTMENT_PROJECTS[0].minInvestmentRp
  );
  const [durationYears, setDurationYears] = useState<number>(3);
  const [selectedExecCode, setSelectedExecCode] = useState<string>('COO');
  const [showOrgChartImage, setShowOrgChartImage] = useState<boolean>(false);

  const activeProject =
    INVESTMENT_PROJECTS.find((p) => p.id === selectedProjectId) ||
    INVESTMENT_PROJECTS[0];

  const handleSelectProject = (projectId: string) => {
    setSelectedProjectId(projectId);
    const found = INVESTMENT_PROJECTS.find((p) => p.id === projectId);
    if (found) {
      setCapitalInput(found.minInvestmentRp);
    }
  };

  const simulation = calculateInvestmentProjection(
    activeProject,
    capitalInput,
    durationYears
  );

  const activeExec =
    ORGANIZATION_STRUCTURE.executives.find(
      (e) => e.roleCode === selectedExecCode
    ) || ORGANIZATION_STRUCTURE.executives[0];

  return (
    <section
      id="investasi"
      className="bg-[#FAF6F1] border-b border-[#E5D5C0] py-16 lg:py-24"
    >
      <div className="max-w-[1360px] mx-auto px-6">
        {/* 08 & 09. Proyek Investasi yang Ditawarkan & Komitmen Investor */}
        <div className="pb-16 border-b border-[#E5D5C0]">
          <div className="max-w-3xl mb-10">
            <p className="text-xs font-semibold text-[#D95338] mb-2">
              08 &amp; 09. Peluang Pendanaan &amp; Komitmen Investor
            </p>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-[#1E3A2B] leading-tight mb-3">
              Proyek Investasi Agribisnis Terukur dengan Transparansi Operasional.
            </h2>
            <p className="text-sm text-[#4C5520] leading-relaxed">
              Estimasi kebutuhan dana, proyeksi ROI, dan skema kerja sama dapat disesuaikan dengan profil calon investor. Pilih salah satu dari 4 proyek prioritas di bawah ini untuk mensimulasikan alokasi modal dan proyeksi hasil.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            {/* Left: 4 Offered Investment Projects + Investor Commitments */}
            <div className="lg:col-span-5 flex flex-col justify-between gap-6">
              <div className="space-y-3">
                {INVESTMENT_PROJECTS.map((proj, index) => {
                  const isSelected = proj.id === activeProject.id;
                  return (
                    <button
                      key={proj.id}
                      type="button"
                      onClick={() => handleSelectProject(proj.id)}
                      className={`w-full text-left p-5 rounded-xl border transition-all cursor-pointer ${
                        isSelected
                          ? 'bg-[#1E3A2B] text-[#FAF6F1] border-[#1E3A2B]'
                          : 'bg-[#F0E5D7]/60 text-[#2D3819] border-[#E5D5C0] hover:bg-[#F0E5D7]'
                      }`}
                    >
                      <div className="flex items-center justify-between text-xs font-mono-tabular mb-1">
                        <span className={isSelected ? 'text-[#EADDCC]' : 'text-[#D95338]'}>
                          Proyek 0{index + 1} · Target ROI ~{proj.targetRoiPercentAnnual}%/Thn
                        </span>
                        <span className={isSelected ? 'text-[#EADDCC]' : 'text-[#4C5520]'}>
                          Min. {formatRupiah(proj.minInvestmentRp)}
                        </span>
                      </div>
                      <h3 className="font-display text-lg font-bold">
                        {proj.title}
                      </h3>
                    </button>
                  );
                })}
              </div>

              {/* 5 Komitmen kepada Investor (PDF Page 10) */}
              <div className="bg-[#F0E5D7] border border-[#E5D5C0] rounded-xl p-6">
                <h3 className="font-display text-lg font-bold text-[#1E3A2B] mb-3">
                  5 Komitmen AgriXentris kepada Investor:
                </h3>
                <ul className="space-y-2">
                  {COMPANY_PROFILE.investorCommitments.map((com, idx) => (
                    <li
                      key={com}
                      className="text-xs text-[#2D3819] flex items-start gap-2.5"
                    >
                      <span className="font-mono-tabular font-bold text-[#4C5520]">
                        0{idx + 1}.
                      </span>
                      <span>{com}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Right: Interactive Investment & Allocation Simulator */}
            <div className="lg:col-span-7 bg-[#F0E5D7]/70 border border-[#E5D5C0] rounded-xl p-7 lg:p-9 flex flex-col justify-between">
              <div>
                <div className="flex flex-wrap items-center justify-between gap-2 pb-4 mb-5 border-b border-[#E5D5C0]">
                  <div className="flex items-center gap-2 text-xs font-semibold text-[#1E3A2B]">
                    <Calculator className="w-4 h-4 text-[#D95338]" aria-hidden="true" />
                    <span>Simulasi Proyeksi Pendanaan &amp; ROI</span>
                  </div>
                  <span className="font-mono-tabular text-xs text-[#4C5520]">
                    Siklus: {activeProject.cycleDuration}
                  </span>
                </div>

                <h3 className="font-display text-2xl font-bold text-[#1E3A2B] mb-2">
                  {activeProject.title}
                </h3>
                <p className="text-sm text-[#3A3C31] leading-relaxed mb-6">
                  {activeProject.summary}
                </p>

                {/* Interactive Sliders / Inputs */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 p-5 rounded-xl bg-[#FAF6F1] border border-[#E5D5C0] mb-6">
                  <div>
                    <label
                      htmlFor="investment-capital-input"
                      className="block text-xs font-semibold text-[#1E3A2B] mb-1.5"
                    >
                      Nilai Modal Investasi (Rp)
                    </label>
                    <input
                      id="investment-capital-input"
                      type="range"
                      min={activeProject.minInvestmentRp}
                      max={1500000000}
                      step={25000000}
                      value={capitalInput}
                      onChange={(e) => setCapitalInput(Number(e.target.value))}
                      className="w-full accent-[#1E3A2B] cursor-pointer"
                    />
                    <div className="flex justify-between text-xs font-mono-tabular text-[#4C5520] mt-1">
                      <span>Min: {formatRupiah(activeProject.minInvestmentRp)}</span>
                      <span className="font-bold text-[#1E3A2B]">
                        {formatRupiah(simulation.capitalInputRp)}
                      </span>
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="investment-years-input"
                      className="block text-xs font-semibold text-[#1E3A2B] mb-1.5"
                    >
                      Horison Kerja Sama ({durationYears} Tahun)
                    </label>
                    <input
                      id="investment-years-input"
                      type="range"
                      min={1}
                      max={5}
                      step={1}
                      value={durationYears}
                      onChange={(e) => setDurationYears(Number(e.target.value))}
                      className="w-full accent-[#D95338] cursor-pointer"
                    />
                    <div className="flex justify-between text-xs font-mono-tabular text-[#4C5520] mt-1">
                      <span>1 Tahun</span>
                      <span className="font-bold text-[#1E3A2B]">
                        {durationYears} Tahun (BEP ~{simulation.estimatedPaybackMonths} Bln)
                      </span>
                      <span>5 Tahun</span>
                    </div>
                  </div>
                </div>

                {/* Output Metrics Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-6">
                  <div className="p-4 rounded-xl bg-[#FAF6F1] border border-[#E5D5C0]">
                    <span className="block text-[11px] text-[#4C5520]">
                      Estimasi Bagi Hasil / Tahun ({activeProject.targetRoiPercentAnnual}%)
                    </span>
                    <span className="font-mono-tabular text-lg font-bold text-[#1E3A2B] mt-1 block">
                      {formatRupiah(simulation.annualReturnRp)}
                    </span>
                  </div>
                  <div className="p-4 rounded-xl bg-[#FAF6F1] border border-[#E5D5C0]">
                    <span className="block text-[11px] text-[#4C5520]">
                      Akumulasi Imbal Hasil ({simulation.durationYears} Thn)
                    </span>
                    <span className="font-mono-tabular text-lg font-bold text-[#2E6F40] mt-1 block">
                      +{formatRupiah(simulation.totalProjectedProfitRp)}
                    </span>
                  </div>
                  <div className="p-4 rounded-xl bg-[#1E3A2B] text-[#FAF6F1]">
                    <span className="block text-[11px] text-[#EADDCC]">
                      Total Proyeksi Nilai Aset &amp; Hasil
                    </span>
                    <span className="font-mono-tabular text-lg font-bold mt-1 block">
                      {formatRupiah(simulation.totalProjectedValueRp)}
                    </span>
                  </div>
                </div>

                {/* Capital Allocation Breakdown */}
                <div>
                  <h4 className="text-xs font-semibold text-[#1E3A2B] mb-2.5">
                    Rencana Alokasi Penggunaan Dana:
                  </h4>
                  <div className="space-y-2">
                    {simulation.allocations.map((alloc) => (
                      <div
                        key={alloc.label}
                        className="p-3 rounded-lg bg-[#FAF6F1] border border-[#E5D5C0] flex items-center justify-between gap-4 text-xs"
                      >
                        <span className="font-medium text-[#2D3819]">
                          {alloc.label} ({alloc.percentage}%)
                        </span>
                        <span className="font-mono-tabular font-bold text-[#1E3A2B] shrink-0">
                          {formatRupiah(alloc.amountRp)}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-[#E5D5C0] flex flex-wrap items-center justify-between gap-4">
                <p className="text-[11px] text-[#4C5520]">
                  *Simulasi bersifat indikatif. Proposal RAB &amp; studi kelayakan spesifik lokasi disusun bersama tim CFO &amp; COO.
                </p>
                <a
                  href="#kontak"
                  className="px-4 py-2.5 text-xs font-semibold text-[#FAF6F1] bg-[#D95338] hover:bg-[#1E3A2B] rounded-lg transition-colors whitespace-nowrap"
                >
                  Minta Proposal Investasi Proyek Ini
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* 10. Struktur Organisasi AgriXentris Nusantara (PDF Page 11) */}
        <div className="pt-16">
          <div className="flex flex-wrap items-end justify-between gap-6 mb-10">
            <div className="max-w-2xl">
              <p className="text-xs font-semibold text-[#4C5520] mb-2">
                10. Struktur Organisasi &amp; Tata Kelola Korporasi
              </p>
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-[#1E3A2B] leading-tight">
                Dipimpin oleh Sinergi Akademisi Pertanian &amp; Eksekutif Profesional.
              </h2>
            </div>

            <button
              type="button"
              onClick={() => setShowOrgChartImage((prev) => !prev)}
              className="inline-flex items-center gap-2 px-4 py-2.5 text-xs font-semibold text-[#1E3A2B] bg-[#F0E5D7] hover:bg-[#EADDCC] border border-[#E5D5C0] rounded-lg transition-colors cursor-pointer whitespace-nowrap shrink-0"
            >
              <Eye className="w-3.5 h-3.5 text-[#4C5520]" aria-hidden="true" />
              <span>
                {showOrgChartImage
                  ? 'Sembunyikan Bagan Struktur Asli'
                  : 'Lihat Bagan Struktur Organisasi (PDF Hal. 11)'}
              </span>
            </button>
          </div>

          {showOrgChartImage && (
            <div className="mb-10 bg-[#F0E5D7]/60 border border-[#E5D5C0] rounded-xl p-6">
              <img
                src="/assets/compro/img_37.jpg"
                alt="Bagan Struktur Organisasi AgriXentris Nusantara"
                referrerPolicy="no-referrer"
                className="w-full max-h-[560px] object-contain rounded-lg border border-[#E5D5C0] bg-white p-2"
              />
            </div>
          )}

          {/* Top Leadership Hierarchy: Board of Advisors, CEO, Strategic Advisor */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-8">
            <div className="bg-[#F0E5D7]/70 border border-[#E5D5C0] rounded-xl p-5">
              <p className="text-xs font-mono-tabular text-[#4C5520] mb-1">
                DEWAN PENGARAH &amp; PANEL AHLI
              </p>
              <h3 className="font-display text-lg font-bold text-[#1E3A2B]">
                {ORGANIZATION_STRUCTURE.boardOfAdvisors.title} &amp;{' '}
                {ORGANIZATION_STRUCTURE.expertPanel.title}
              </h3>
              <p className="text-xs text-[#3A3C31] mt-1 mb-3">
                {ORGANIZATION_STRUCTURE.boardOfAdvisors.subtitle}
              </p>
              <div className="text-xs text-[#4C5520]">
                {ORGANIZATION_STRUCTURE.expertPanel.areas.join(' · ')}
              </div>
            </div>

            <div className="bg-[#1E3A2B] text-[#FAF6F1] rounded-xl p-6 flex flex-col justify-between">
              <div>
                <p className="text-xs font-mono-tabular text-[#EADDCC] mb-1">
                  PIMPINAN EKSEKUTIF UTAMA
                </p>
                <h3 className="font-display text-xl font-bold">
                  {ORGANIZATION_STRUCTURE.ceo.name}
                </h3>
                <p className="text-xs text-[#EADDCC] mt-0.5">
                  {ORGANIZATION_STRUCTURE.ceo.role}
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-white/15 text-[11px] text-[#EADDCC]">
                Didukung unit: {ORGANIZATION_STRUCTURE.governanceUnits.join(' · ')}
              </div>
            </div>

            <div className="bg-[#F0E5D7]/70 border border-[#E5D5C0] rounded-xl p-5 flex flex-col justify-between">
              <div>
                <p className="text-xs font-mono-tabular text-[#D95338] mb-1">
                  PENASIHAT STRATEGIS &amp; BISNIS
                </p>
                <h3 className="font-display text-xl font-bold text-[#1E3A2B]">
                  {ORGANIZATION_STRUCTURE.strategicAdvisor.name}
                </h3>
                <p className="text-xs text-[#4C5520] mt-0.5">
                  {ORGANIZATION_STRUCTURE.strategicAdvisor.role}
                </p>
              </div>
              <p className="text-xs text-[#3A3C31] mt-3">
                Mengarahkan kemitraan strategis, kelayakan investasi, dan pengembangan bisnis jangka panjang.
              </p>
            </div>
          </div>

          {/* 5 C-Level Directorate Cards (Interactive Selector) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3 mb-6">
            {ORGANIZATION_STRUCTURE.executives.map((exec) => {
              const isSelected = exec.roleCode === activeExec.roleCode;
              return (
                <button
                  key={exec.roleCode}
                  type="button"
                  onClick={() => setSelectedExecCode(exec.roleCode)}
                  className={`p-4 rounded-xl border text-left transition-all cursor-pointer ${
                    isSelected
                      ? 'bg-[#4C5520] text-[#FAF6F1] border-[#4C5520]'
                      : 'bg-[#F0E5D7]/50 text-[#2D3819] border-[#E5D5C0] hover:bg-[#F0E5D7]'
                  }`}
                >
                  <span
                    className={`font-mono-tabular text-xs font-bold block mb-1 ${
                      isSelected ? 'text-[#EADDCC]' : 'text-[#D95338]'
                    }`}
                  >
                    {exec.roleCode}
                  </span>
                  <h4 className="font-display text-base font-bold leading-snug">
                    {exec.name}
                  </h4>
                  <p
                    className={`text-[11px] mt-1 ${
                      isSelected ? 'text-[#FAF6F1]/90' : 'text-[#4C5520]'
                    }`}
                  >
                    {exec.roleTitle}
                  </p>
                </button>
              );
            })}
          </div>

          {/* Active C-Level 3 Sub-Divisions Detail Panel */}
          <div className="bg-[#F0E5D7]/70 border border-[#E5D5C0] rounded-xl p-6">
            <div className="flex flex-wrap items-center justify-between gap-2 pb-4 mb-5 border-b border-[#E5D5C0]">
              <div className="flex items-center gap-2">
                <Users className="w-4 h-4 text-[#4C5520]" aria-hidden="true" />
                <span className="text-sm font-bold text-[#1E3A2B]">
                  Direktorat {activeExec.roleTitle} — {activeExec.name}
                </span>
              </div>
              <span className="text-xs text-[#4C5520]">
                {activeExec.focusArea}
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {activeExec.divisions.map((div) => (
                <div
                  key={div.name}
                  className="bg-[#FAF6F1] border border-[#E5D5C0] rounded-xl p-5"
                >
                  <h5 className="font-display text-base font-bold text-[#1E3A2B] mb-3">
                    {div.name}
                  </h5>
                  <ul className="space-y-1.5">
                    {div.tasks.map((task) => (
                      <li
                        key={task}
                        className="text-xs text-[#3A3C31] flex items-center gap-2"
                      >
                        <span className="text-[#D95338] font-bold">&middot;</span>
                        <span>{task}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
