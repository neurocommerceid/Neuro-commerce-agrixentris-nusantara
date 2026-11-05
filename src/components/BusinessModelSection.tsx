import React, { useState } from 'react';
import {
  Briefcase,
  PackageCheck,
  Sprout,
  Cpu,
  Check,
  ChevronDown,
  ArrowUpRight,
} from 'lucide-react';
import { BUSINESS_PILLARS } from '../data/agrixentrisData';

const PILLAR_ICONS: Record<string, React.ReactNode> = {
  '01': <Briefcase className="w-4 h-4" />,
  '02': <PackageCheck className="w-4 h-4" />,
  '03': <Sprout className="w-4 h-4" />,
  '04': <Cpu className="w-4 h-4" />,
};

export const BusinessModelSection: React.FC = () => {
  const [expandedNum, setExpandedNum] = useState<string | null>(null);

  const togglePillar = (num: string) => {
    setExpandedNum((prev) => (prev === num ? null : num));
  };

  return (
    <section id="model-bisnis" className="py-10 sm:py-14 bg-[#FDFBF7] border-b border-[#E2DDD2]">
      <div className="max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2 mb-5">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-widest text-[#B84A27] mb-1">
              Ekosistem Terintegrasi
            </p>
            <h2 className="font-serif text-xl sm:text-3xl font-bold text-[#14281D]">
              4 Pilar Model Bisnis Utama
            </h2>
          </div>
          <p className="text-xs text-[#4A554E]">
            Klik panah pada kartu pilar untuk melihat rincian layanan.
          </p>
        </div>

        {/* Compact 2-Column Grid on Mobile & 4-Column on Desktop */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-2.5 sm:gap-4">
          {BUSINESS_PILLARS.map((pillar) => {
            const isOpen = expandedNum === pillar.number;
            return (
              <div
                key={pillar.number}
                className="bg-[#F6F4EE] border border-[#D8D2C5] rounded-xl overflow-hidden flex flex-col justify-between transition-all"
              >
                <div>
                  {/* Compact Photo Header */}
                  <div className="relative h-24 sm:h-32 overflow-hidden bg-[#14281D]">
                    <img
                      src={pillar.image}
                      alt={pillar.title}
                      className="w-full h-full object-cover opacity-85"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0D1B13]/80 via-transparent to-transparent" />
                    <span className="absolute top-2 left-2 px-2 py-0.5 rounded bg-[#14281D]/85 text-[#FDFBF7] font-mono text-[10px]">
                      Pilar {pillar.number}
                    </span>
                    <div className="absolute bottom-2 right-2 w-7 h-7 rounded-lg bg-[#FDFBF7]/90 text-[#14281D] flex items-center justify-center">
                      {PILLAR_ICONS[pillar.number]}
                    </div>
                  </div>

                  {/* Compact Title & Toggle */}
                  <div className="p-3 sm:p-4">
                    <p className="text-[10px] font-mono uppercase tracking-wider text-[#B84A27] truncate mb-0.5">
                      {pillar.representation}
                    </p>
                    <h3 className="font-serif text-xs sm:text-base font-bold text-[#14281D] leading-snug line-clamp-2 min-h-[2.25rem]">
                      {pillar.title}
                    </h3>

                    <button
                      type="button"
                      onClick={() => togglePillar(pillar.number)}
                      className="mt-2.5 w-full pt-2 border-t border-[#E2DDD2] flex items-center justify-between text-[11px] font-semibold text-[#14281D] hover:text-[#B84A27] transition-colors cursor-pointer"
                    >
                      <span>{isOpen ? 'Tutup rincian' : `${pillar.services.length} layanan`}</span>
                      <ChevronDown
                        className={`w-3.5 h-3.5 transition-transform duration-200 ${
                          isOpen ? 'rotate-180 text-[#B84A27]' : ''
                        }`}
                      />
                    </button>

                    {isOpen && (
                      <div className="mt-2.5 pt-2 border-t border-[#E2DDD2] space-y-1.5">
                        <p className="text-[11px] text-[#4A554E] leading-relaxed mb-2">
                          {pillar.summary}
                        </p>
                        {pillar.services.map((service) => (
                          <div key={service} className="flex items-start gap-1.5 text-[11px] text-[#14281D]">
                            <Check className="w-3 h-3 text-[#2D6A4F] shrink-0 mt-0.5" />
                            <span className="leading-tight">{service}</span>
                          </div>
                        ))}
                        {pillar.number === '02' && (
                          <a
                            href="#katalog"
                            className="mt-2 inline-flex items-center gap-1 text-[11px] font-semibold text-[#B84A27] hover:underline"
                          >
                            Buka Katalog 7 SKU
                            <ArrowUpRight className="w-3 h-3" />
                          </a>
                        )}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
