import React, { useState } from 'react';
import {
  CUSTOMER_TESTIMONIALS,
  FAQ_ITEMS,
} from '../data/agrixentrisData';
import { ChevronDown } from 'lucide-react';

export const TestimonialsAndFaqSection: React.FC = () => {
  const [openFaqId, setOpenFaqId] = useState<string>(FAQ_ITEMS[0].id);

  const toggleFaq = (id: string) => {
    setOpenFaqId((prev) => (prev === id ? '' : id));
  };

  return (
    <section className="bg-[#F0E5D7] border-b border-[#E5D5C0] py-16 lg:py-24">
      <div className="max-w-[1360px] mx-auto px-6">
        {/* 11. Testimoni Pelanggan (All 8 Real Testimonials from PDF) */}
        <div className="pb-16 border-b border-[#E5D5C0]">
          <div className="flex flex-wrap items-end justify-between gap-6 mb-10">
            <div className="max-w-2xl">
              <p className="text-xs font-semibold text-[#D95338] mb-2">
                11. Testimoni Pelanggan &amp; Mitra Strategis
              </p>
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-[#1E3A2B] leading-tight">
                Dipercaya oleh Dinas Pemerintah Daerah, BUMD, Kampus Vokasi, Korporasi &amp; Kelompok Tani.
              </h2>
            </div>
            <p className="text-xs text-[#4C5520] max-w-sm">
              Dokumentasi testimoni nyata dari mitra pelaksanaan proyek greenhouse, pelatihan SDM, dan pengguna benih unggul AgriXentris Nusantara.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {CUSTOMER_TESTIMONIALS.map((item) => (
              <blockquote
                key={item.id}
                className="bg-[#FAF6F1] border border-[#E5D5C0] rounded-xl p-6 flex flex-col justify-between"
              >
                <div>
                  <div className="text-xs text-[#4C5520] mb-3 pb-3 border-b border-[#E5D5C0]">
                    <cite className="not-italic font-display text-base font-bold text-[#1E3A2B] block">
                      {item.client}
                    </cite>
                    <span className="block mt-0.5 text-[11px]">
                      {item.sector} · {item.program}
                    </span>
                  </div>
                  <p className="text-xs text-[#2D3819] leading-relaxed">
                    &ldquo;{item.quote}&rdquo;
                  </p>
                </div>
              </blockquote>
            ))}
          </div>
        </div>

        {/* Northeast Tomato "Questions, answered" Style Editorial FAQ */}
        <div className="pt-16 grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          <div className="lg:col-span-5">
            <p className="text-xs font-semibold text-[#4C5520] mb-2">
              12. Pertanyaan Umum (FAQ)
            </p>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-[#1E3A2B] leading-tight mb-4">
              Pertanyaan Seputar Pengadaan, Pendampingan &amp; Investasi.
            </h2>
            <p className="text-sm text-[#3A3C31] leading-relaxed">
              Jawaban langsung atas pertanyaan yang paling sering diajukan oleh calon mitra kelompok tani, instansi pemerintah, pembeli grosir sarana produksi, dan investor.
            </p>
          </div>

          <div className="lg:col-span-7 divide-y divide-[#E5D5C0] border-t border-b border-[#E5D5C0]">
            {FAQ_ITEMS.map((faq) => {
              const isOpen = openFaqId === faq.id;
              return (
                <div key={faq.id} className="py-4">
                  <button
                    type="button"
                    onClick={() => toggleFaq(faq.id)}
                    aria-expanded={isOpen}
                    className="w-full flex items-center justify-between gap-4 text-left py-2 cursor-pointer"
                  >
                    <div>
                      <span className="block text-[11px] font-mono-tabular text-[#D95338] mb-0.5">
                        {faq.category}
                      </span>
                      <span className="font-display text-lg font-bold text-[#1E3A2B]">
                        {faq.question}
                      </span>
                    </div>
                    <ChevronDown
                      className={`w-5 h-5 text-[#4C5520] shrink-0 transition-transform duration-150 ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                      aria-hidden="true"
                    />
                  </button>
                  {isOpen && (
                    <div className="pt-2 pb-3 pr-8 text-sm text-[#2D3819] leading-relaxed">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
