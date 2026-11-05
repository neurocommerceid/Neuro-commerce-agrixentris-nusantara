import React from 'react';
import { COMPANY_PROFILE } from '../data/agrixentrisData';

export const AboutAndVisionSection: React.FC = () => {
  return (
    <section
      id="profil"
      className="bg-[#FAF6F1] border-b border-[#E5D5C0] py-16 lg:py-24"
    >
      <div className="max-w-[1360px] mx-auto px-6">
        {/* Section Editorial Header (Northeast Tomato "California tomatoes. New Jersey canning." rhythm) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 pb-14 border-b border-[#E5D5C0] items-start">
          <div className="lg:col-span-5">
            <p className="text-xs font-semibold text-[#4C5520] mb-2">
              01. Perkenalan &amp; Tentang Kami
            </p>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-[#1E3A2B] leading-tight mb-4">
              Riset Akademik Bogor. Eksekusi Lapangan Nasional.
            </h2>
            <p className="text-sm text-[#4C5520] leading-relaxed">
              {COMPANY_PROFILE.philosophy}
            </p>
          </div>

          <div className="lg:col-span-7 space-y-6">
            <p className="text-base text-[#2D3819] leading-relaxed">
              {COMPANY_PROFILE.introParagraph2}
            </p>

            {/* Official Corporate Identity Grid from PDF Page 3 */}
            <div className="bg-[#F0E5D7]/80 border border-[#E5D5C0] rounded-xl p-6">
              <div className="flex flex-wrap items-center justify-between gap-4 pb-4 mb-4 border-b border-[#E5D5C0]">
                <div>
                  <h3 className="text-base font-semibold text-[#1E3A2B]">
                    Identitas Resmi Perusahaan
                  </h3>
                  <p className="text-xs text-[#4C5520]">
                    Sesuai dokumen Company Profile AgriXentris Nusantara
                  </p>
                </div>
                <span className="font-mono-tabular text-xs font-semibold text-[#2D3819]">
                  Est. {COMPANY_PROFILE.foundedYear} · Dramaga, Bogor
                </span>
              </div>

              <dl className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4 text-sm">
                <div>
                  <dt className="text-xs text-[#4C5520]">Nama Perusahaan</dt>
                  <dd className="font-semibold text-[#1E3A2B] mt-0.5">
                    {COMPANY_PROFILE.name}
                  </dd>
                </div>
                <div>
                  <dt className="text-xs text-[#4C5520]">Bidang Usaha</dt>
                  <dd className="font-semibold text-[#1E3A2B] mt-0.5">
                    {COMPANY_PROFILE.legalField}
                  </dd>
                </div>
                <div>
                  <dt className="text-xs text-[#4C5520]">Kantor Pusat</dt>
                  <dd className="font-medium text-[#2D3819] mt-0.5">
                    {COMPANY_PROFILE.headquarters}
                  </dd>
                </div>
                <div>
                  <dt className="text-xs text-[#4C5520]">Kontak &amp; Korespondensi</dt>
                  <dd className="font-mono-tabular text-xs font-medium text-[#2D3819] mt-0.5">
                    {COMPANY_PROFILE.email} · {COMPANY_PROFILE.phone}
                  </dd>
                </div>
              </dl>
            </div>
          </div>
        </div>

        {/* Core Values (5 Nilai Utama) */}
        <div className="py-14 border-b border-[#E5D5C0]">
          <div className="flex flex-wrap items-end justify-between gap-4 mb-8">
            <div>
              <p className="text-xs font-semibold text-[#4C5520] mb-1">
                Nilai Dasar Operasional
              </p>
              <h3 className="font-display text-2xl font-bold text-[#1E3A2B]">
                5 Core Values AgriXentris Nusantara
              </h3>
            </div>
            <p className="text-xs text-[#4C5520] max-w-md">
              Nilai ini menjadi dasar setiap keputusan bisnis, pengadaan sarana produksi, dan supervisi operasional perusahaan di lapangan.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {COMPANY_PROFILE.coreValues.map((val, idx) => (
              <div
                key={val.name}
                className="bg-[#F0E5D7]/50 border border-[#E5D5C0] rounded-xl p-5 flex flex-col justify-between"
              >
                <div>
                  <span className="font-mono-tabular text-xs font-semibold text-[#D95338]">
                    0{idx + 1}.
                  </span>
                  <h4 className="font-display text-lg font-bold text-[#1E3A2B] mt-1 mb-2">
                    {val.name}
                  </h4>
                  <p className="text-xs text-[#3A3C31] leading-relaxed">
                    {val.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Visi & 5 Misi + Real Photography Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 py-14 border-b border-[#E5D5C0] items-stretch">
          <div className="lg:col-span-5 flex flex-col justify-between bg-[#1E3A2B] text-[#FAF6F1] rounded-xl p-8">
            <div>
              <p className="text-xs font-medium text-[#EADDCC] mb-2">
                02. Visi Perusahaan
              </p>
              <h3 className="font-display text-2xl sm:text-3xl font-bold leading-snug mb-6">
                &ldquo;{COMPANY_PROFILE.vision}&rdquo;
              </h3>
              <p className="text-xs text-[#EADDCC] leading-relaxed">
                Menghadirkan standar baru agribisnis Indonesia melalui perpaduan sains agronomi, kualitas sarana produksi, dan tata kelola investasi yang akuntabel.
              </p>
            </div>

            <div className="mt-8 pt-6 border-t border-white/15 grid grid-cols-2 gap-4">
              <div className="rounded-lg overflow-hidden h-28 border border-white/15">
                <img
                  src="/assets/compro/img_5.jpg"
                  alt="Lahan pertanian presisi AgriXentris"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="rounded-lg overflow-hidden h-28 border border-white/15">
                <img
                  src="/assets/compro/img_4.jpg"
                  alt="Pendampingan SDM petani di lapangan"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 flex flex-col justify-between">
            <div>
              <p className="text-xs font-semibold text-[#4C5520] mb-2">
                03. Misi Strategis Perusahaan
              </p>
              <h3 className="font-display text-2xl font-bold text-[#1E3A2B] mb-6">
                5 Langkah Konkret Membangun Ekosistem Pertanian
              </h3>

              <ol className="space-y-3">
                {COMPANY_PROFILE.missions.map((mission, index) => (
                  <li
                    key={mission}
                    className="flex items-start gap-4 p-4 rounded-xl bg-[#F0E5D7]/60 border border-[#E5D5C0]"
                  >
                    <span className="font-mono-tabular text-sm font-bold text-[#D95338] shrink-0 mt-0.5">
                      0{index + 1}.
                    </span>
                    <span className="text-sm font-medium text-[#2D3819] leading-relaxed">
                      {mission}
                    </span>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>

        {/* Mengapa AgriXentris Nusantara (PDF Page 12 "WHY?") */}
        <div className="pt-14">
          <div className="mb-8">
            <p className="text-xs font-semibold text-[#D95338] mb-1">
              Keunggulan Pendekatan Kami
            </p>
            <h3 className="font-display text-2xl sm:text-3xl font-bold text-[#1E3A2B]">
              Mengapa Bermitra dengan AgriXentris Nusantara?
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {COMPANY_PROFILE.whyUs.map((item) => (
              <div
                key={item.number}
                className="bg-[#F0E5D7] border border-[#E5D5C0] rounded-xl p-7 flex flex-col justify-between"
              >
                <div>
                  <span className="font-mono-tabular text-xs font-bold text-[#4C5520]">
                    {item.number}. Fokus Keunggulan
                  </span>
                  <h4 className="font-display text-xl font-bold text-[#1E3A2B] mt-2 mb-3">
                    {item.title}
                  </h4>
                  <p className="text-sm text-[#3A3C31] leading-relaxed">
                    {item.description}
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
