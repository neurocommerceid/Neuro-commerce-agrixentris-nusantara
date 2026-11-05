import React, { useState } from 'react';
import { Quote, ChevronDown, HelpCircle } from 'lucide-react';
import { CUSTOMER_TESTIMONIALS, FAQ_ITEMS } from '../data/agrixentrisData';

export const TestimonialsAndFaqSection: React.FC = () => {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);
  const [expandedQuoteIdx, setExpandedQuoteIdx] = useState<number | null>(null);
  const [showAllTestimonials, setShowAllTestimonials] = useState(false);

  const visibleTestimonials = showAllTestimonials
    ? CUSTOMER_TESTIMONIALS
    : CUSTOMER_TESTIMONIALS.slice(0, 4);

  return (
    <section className="py-10 sm:py-14 bg-[#FDFBF7] border-b border-[#E2DDD2]">
      <div className="max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-8 space-y-10">
        {/* Compact Testimonials Grid */}
        <div>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2 mb-5">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-widest text-[#B84A27] mb-1">
                Suara Mitra &amp; Klien
              </p>
              <h2 className="font-serif text-xl sm:text-3xl font-bold text-[#14281D]">
                Testimoni Mitra Lapangan
              </h2>
            </div>
            <button
              type="button"
              onClick={() => setShowAllTestimonials((prev) => !prev)}
              className="self-start sm:self-auto inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-[#D8D2C5] bg-[#F6F4EE] text-xs font-semibold text-[#14281D] hover:border-[#14281D] cursor-pointer"
            >
              <span>
                {showAllTestimonials
                  ? 'Tampilkan 4 Testimoni Utama'
                  : `Lihat Semua (${CUSTOMER_TESTIMONIALS.length} Testimoni)`}
              </span>
              <ChevronDown
                className={`w-3.5 h-3.5 transition-transform duration-200 ${
                  showAllTestimonials ? 'rotate-180 text-[#B84A27]' : ''
                }`}
              />
            </button>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-2.5 sm:gap-4">
            {visibleTestimonials.map((item, idx) => {
              const isExpanded = expandedQuoteIdx === idx;
              return (
                <div
                  key={item.id}
                  className="p-3 sm:p-4 rounded-xl bg-[#F6F4EE] border border-[#E2DDD2] flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-1.5">
                      <Quote className="w-3.5 h-3.5 text-[#B84A27]/60 shrink-0" />
                      <span className="text-[10px] font-mono text-[#68736B] truncate max-w-[110px]">
                        {item.sector}
                      </span>
                    </div>
                    <h3 className="font-serif text-xs sm:text-sm font-bold text-[#14281D] leading-snug line-clamp-1">
                      {item.client}
                    </h3>
                    <p className="text-[10px] text-[#B84A27] mb-1.5 line-clamp-1">
                      {item.program}
                    </p>

                    <p
                      className={`text-[11px] text-[#4A554E] leading-relaxed ${
                        isExpanded ? '' : 'line-clamp-2'
                      }`}
                    >
                      “{item.quote}”
                    </p>
                  </div>

                  <button
                    type="button"
                    onClick={() => setExpandedQuoteIdx(isExpanded ? null : idx)}
                    className="mt-2 pt-2 border-t border-[#E2DDD2] flex items-center justify-between text-[10px] font-semibold text-[#14281D] hover:text-[#B84A27] cursor-pointer"
                  >
                    <span>{isExpanded ? 'Ringkas' : 'Baca kutipan'}</span>
                    <ChevronDown
                      className={`w-3 h-3 transition-transform duration-200 ${
                        isExpanded ? 'rotate-180 text-[#B84A27]' : ''
                      }`}
                    />
                  </button>
                </div>
              );
            })}
          </div>
        </div>

        {/* Compact FAQ Accordion */}
        <div className="pt-4 border-t border-[#E2DDD2]">
          <div className="flex items-center gap-2 mb-4">
            <HelpCircle className="w-4 h-4 text-[#B84A27]" />
            <h3 className="font-serif text-lg sm:text-2xl font-bold text-[#14281D]">
              Pertanyaan Umum (FAQ)
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5">
            {FAQ_ITEMS.map((faq, idx) => {
              const isOpen = openFaqIndex === idx;
              return (
                <div
                  key={faq.id}
                  className="rounded-xl border border-[#D8D2C5] bg-[#F6F4EE] overflow-hidden self-start"
                >
                  <button
                    type="button"
                    onClick={() => setOpenFaqIndex(isOpen ? null : idx)}
                    data-testid={`faq-toggle-${idx}`}
                    className="w-full px-4 py-3 text-left flex items-center justify-between gap-3 hover:bg-[#EFECE4] transition-colors cursor-pointer"
                  >
                    <span className="font-serif text-xs sm:text-sm font-bold text-[#14281D] leading-snug">
                      {faq.question}
                    </span>
                    <ChevronDown
                      className={`w-4 h-4 text-[#4A554E] shrink-0 transition-transform duration-200 ${
                        isOpen ? 'rotate-180 text-[#B84A27]' : ''
                      }`}
                    />
                  </button>
                  {isOpen && (
                    <div className="px-4 pb-3.5 pt-1 text-xs text-[#4A554E] leading-relaxed border-t border-[#E2DDD2]">
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
