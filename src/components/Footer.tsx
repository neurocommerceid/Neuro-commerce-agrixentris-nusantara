import React, { useState } from 'react';
import { COMPANY_PROFILE, PRODUCT_CATALOG_7_SKU } from '../data/agrixentrisData';
import { FileDown, GitBranch, X, Copy, Check } from 'lucide-react';

export const Footer: React.FC = () => {
  const [showDeployModal, setShowDeployModal] = useState<boolean>(false);
  const [copiedKey, setCopiedKey] = useState<string | null>(null);

  const handleCopy = (key: string, text: string) => {
    navigator.clipboard?.writeText(text);
    setCopiedKey(key);
    window.setTimeout(() => {
      setCopiedKey((prev) => (prev === key ? null : prev));
    }, 1500);
  };

  const gitCommands = `git init
git add .
git commit -m "feat: initial release AgriXentris Nusantara profile & 7-SKU catalog"
git branch -M main
git remote add origin https://github.com/neuro-commerce/agrixentris-nusantara.git
git push -u origin main`;

  const vercelCommands = `npx vercel --prod --yes --scope neuro-commerce`;

  return (
    <footer className="bg-[#FAF6F1] text-[#2D3819] border-t border-[#E5D5C0]">
      <div className="max-w-[1360px] mx-auto px-6 py-16">
        {/* Top Structured Grid (Northeast Tomato Footer Architecture) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-[#E5D5C0]">
          {/* Column 1: Brand & Philosophy */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <img
                src={COMPANY_PROFILE.logoUrl}
                alt="Logo AgriXentris Nusantara"
                referrerPolicy="no-referrer"
                className="w-12 h-12 rounded-lg object-contain border border-[#E5D5C0] bg-white p-1"
              />
              <div>
                <p className="font-display text-xl font-bold text-[#1E3A2B]">
                  {COMPANY_PROFILE.name}
                </p>
                <p className="text-xs text-[#4C5520]">
                  {COMPANY_PROFILE.legalField}
                </p>
              </div>
            </div>
            <p className="text-xs text-[#3A3C31] leading-relaxed">
              Pusat layanan pertanian terintegrasi di Indonesia yang menjembatani kebutuhan petani, koperasi, industri pangan, pemerintah daerah, dan investor sejak {COMPANY_PROFILE.foundedYear}.
            </p>
            <div className="pt-1 flex flex-wrap items-center gap-2">
              <a
                href={COMPANY_PROFILE.comproPdfUrl}
                download="Company_Profile_AgriXentris_Nusantara.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold text-[#1E3A2B] bg-[#F0E5D7] hover:bg-[#EADDCC] border border-[#E5D5C0] rounded-lg transition-colors"
              >
                <FileDown className="w-3.5 h-3.5 text-[#4C5520]" aria-hidden="true" />
                <span>Company Profile PDF</span>
              </a>

              <button
                type="button"
                onClick={() => setShowDeployModal(true)}
                className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold text-[#2D3819] bg-[#F0E5D7]/60 hover:bg-[#EADDCC] border border-[#E5D5C0] rounded-lg transition-colors cursor-pointer"
              >
                <GitBranch className="w-3.5 h-3.5 text-[#D95338]" aria-hidden="true" />
                <span>Konfigurasi GitHub &amp; Vercel</span>
              </button>
            </div>
          </div>

          {/* Column 2: Navigation Mirror */}
          <div className="lg:col-span-2 space-y-2.5">
            <h3 className="text-xs font-semibold text-[#1E3A2B]">
              Navigasi Halaman
            </h3>
            <ul className="space-y-2 text-xs text-[#4C5520]">
              <li>
                <a href="#beranda" className="hover:text-[#1E3A2B] hover:underline">
                  Beranda Utama
                </a>
              </li>
              <li>
                <a href="#profil" className="hover:text-[#1E3A2B] hover:underline">
                  Tentang Kami &amp; Visi Misi
                </a>
              </li>
              <li>
                <a href="#model-bisnis" className="hover:text-[#1E3A2B] hover:underline">
                  4 Pilar Model Bisnis
                </a>
              </li>
              <li>
                <a href="#katalog" className="hover:text-[#1E3A2B] hover:underline">
                  Katalog 7 SKU Produk
                </a>
              </li>
              <li>
                <a href="#portofolio" className="hover:text-[#1E3A2B] hover:underline">
                  Portofolio &amp; Target Market
                </a>
              </li>
              <li>
                <a href="#investasi" className="hover:text-[#1E3A2B] hover:underline">
                  Peluang Investasi &amp; Struktur
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: 7 SKU Direct List */}
          <div className="lg:col-span-3 space-y-2.5">
            <h3 className="text-xs font-semibold text-[#1E3A2B]">
              Lini Katalog 7 SKU Inti
            </h3>
            <ul className="space-y-1.5 text-xs text-[#4C5520]">
              {PRODUCT_CATALOG_7_SKU.map((sku) => (
                <li key={sku.id} className="truncate">
                  <a
                    href="#katalog"
                    className="hover:text-[#1E3A2B] hover:underline font-mono-tabular"
                  >
                    {sku.sku} — {sku.shortTitle}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Headquarters & Contact */}
          <div className="lg:col-span-3 space-y-2.5">
            <h3 className="text-xs font-semibold text-[#1E3A2B]">
              Kantor Pusat &amp; Kontak
            </h3>
            <p className="text-xs text-[#3A3C31] leading-relaxed">
              {COMPANY_PROFILE.headquarters}
            </p>
            <div className="text-xs font-mono-tabular text-[#2D3819] space-y-1 pt-1">
              <p>Telp/WA: {COMPANY_PROFILE.phone}</p>
              <p>Email: {COMPANY_PROFILE.email}</p>
              <p>Web: {COMPANY_PROFILE.website}</p>
            </div>
          </div>
        </div>

        {/* Bottom Copyright & Brand Signature */}
        <div className="pt-8 flex flex-wrap items-center justify-between gap-4 text-xs text-[#4C5520]">
          <p>
            &copy; {new Date().getFullYear()} {COMPANY_PROFILE.name}. Seluruh hak cipta dilindungi undang-undang.
          </p>
          <p>
            Integrity · Profesional · Innovation · Collaboration · Sustainability
          </p>
        </div>
      </div>

      {/* GitHub & Vercel Neuro Commerce Deployment Modal */}
      {showDeployModal && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="deploy-modal-title"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs"
        >
          <div className="w-full max-w-2xl bg-[#FAF6F1] border border-[#E5D5C0] rounded-2xl overflow-hidden shadow-2xl">
            <div className="px-6 py-4 bg-[#F0E5D7] border-b border-[#E5D5C0] flex items-center justify-between">
              <div className="flex items-center gap-2">
                <GitBranch className="w-4 h-4 text-[#D95338]" aria-hidden="true" />
                <h3
                  id="deploy-modal-title"
                  className="font-display text-lg font-bold text-[#1E3A2B]"
                >
                  Konfigurasi Deploy GitHub &amp; Vercel (Neuro Commerce)
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setShowDeployModal(false)}
                aria-label="Tutup panduan deploy"
                className="p-1.5 rounded-lg text-[#2D3819] hover:bg-[#EADDCC] cursor-pointer"
              >
                <X className="w-4 h-4" aria-hidden="true" />
              </button>
            </div>

            <div className="p-6 space-y-5 text-xs text-[#2D3819] max-h-[80vh] overflow-y-auto">
              <p className="leading-relaxed">
                Repositori proyek ini telah dilengkapi berkas konfigurasi produksi{' '}
                <code className="font-mono-tabular bg-[#F0E5D7] px-1.5 py-0.5 rounded">
                  vercel.json
                </code>{' '}
                dan pipeline CI/CD{' '}
                <code className="font-mono-tabular bg-[#F0E5D7] px-1.5 py-0.5 rounded">
                  .github/workflows/deploy.yml
                </code>
                . Ikuti langkah berikut untuk menghubungkan ke akun GitHub dan organisasi Vercel <strong>Neuro Commerce</strong>:
              </p>

              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="font-semibold text-[#1E3A2B]">
                    1. Push ke GitHub Repository (neuro-commerce/agrixentris-nusantara)
                  </span>
                  <button
                    type="button"
                    onClick={() => handleCopy('git', gitCommands)}
                    className="inline-flex items-center gap-1 px-2.5 py-1 rounded bg-[#F0E5D7] hover:bg-[#EADDCC] font-semibold text-[#1E3A2B] cursor-pointer"
                  >
                    {copiedKey === 'git' ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-[#2E6F40]" />
                        <span>Tersalin</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span>Salin Perintah Git</span>
                      </>
                    )}
                  </button>
                </div>
                <pre className="p-3.5 rounded-xl bg-[#1E3A2B] text-[#FAF6F1] font-mono-tabular text-[11px] overflow-x-auto leading-relaxed">
                  {gitCommands}
                </pre>
              </div>

              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="font-semibold text-[#1E3A2B]">
                    2. Deploy Langsung ke Vercel (Scope: Neuro Commerce)
                  </span>
                  <button
                    type="button"
                    onClick={() => handleCopy('vercel', vercelCommands)}
                    className="inline-flex items-center gap-1 px-2.5 py-1 rounded bg-[#F0E5D7] hover:bg-[#EADDCC] font-semibold text-[#1E3A2B] cursor-pointer"
                  >
                    {copiedKey === 'vercel' ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-[#2E6F40]" />
                        <span>Tersalin</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span>Salin Perintah Vercel</span>
                      </>
                    )}
                  </button>
                </div>
                <pre className="p-3.5 rounded-xl bg-[#1E3A2B] text-[#FAF6F1] font-mono-tabular text-[11px] overflow-x-auto">
                  {vercelCommands}
                </pre>
              </div>

              <div className="p-4 rounded-xl bg-[#F0E5D7] border border-[#E5D5C0] space-y-1">
                <p className="font-semibold text-[#1E3A2B]">
                  Pengaturan Build Vercel (Otomatis Terdeteksi via vercel.json):
                </p>
                <p className="font-mono-tabular text-[11px] text-[#4C5520]">
                  Framework Preset: Vite · Build Command: npm run build · Output Directory: dist
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </footer>
  );
};
