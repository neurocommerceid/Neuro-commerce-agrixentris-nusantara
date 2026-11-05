import React, { useState } from 'react';
import { COMPANY_PROFILE } from '../data/agrixentrisData';
import { FileDown, GitBranch, X, Copy, Check, MapPin, Phone, Mail } from 'lucide-react';
import { PageId } from './Navbar';

interface FooterProps {
  activePage: PageId;
  onNavigate: (page: PageId) => void;
}

export const Footer: React.FC<FooterProps> = ({ activePage, onNavigate }) => {
  const [showDeployModal, setShowDeployModal] = useState<boolean>(false);
  const [copiedKey, setCopiedKey] = useState<string | null>(null);

  const handleCopy = (key: string, text: string) => {
    navigator.clipboard?.writeText(text);
    setCopiedKey(key);
    window.setTimeout(() => {
      setCopiedKey((prev) => (prev === key ? null : prev));
    }, 1500);
  };

  const handlePageSelect = (page: PageId) => {
    onNavigate(page);
    window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior });
  };

  const gitCommands = `git add .
git commit -m "feat: multi-page corporate website (Home, About, Katalog, Portofolio)"
git push origin main`;

  const vercelCommands = `npx vercel --prod --yes --scope neuro-commerce`;

  return (
    <footer className="bg-[#FAF6F1] text-[#2D3819] border-t border-[#E5D5C0]">
      {/* Prominent Company Profile PDF Download Strip */}
      <div className="bg-[#F0E5D7] border-b border-[#E5D5C0]">
        <div className="max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-8 py-4 sm:py-5 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-wider text-[#D95338]">
              Dokumen Resmi Perusahaan
            </p>
            <h3 className="font-display text-sm sm:text-lg font-bold text-[#1E3A2B]">
              Ingin membaca rincian lengkap 15 halaman Company Profile?
            </h3>
          </div>
          <div className="flex flex-wrap items-center gap-2 shrink-0">
            <a
              href={COMPANY_PROFILE.comproPdfUrl}
              download="Company_Profile_AgriXentris_Nusantara.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 text-xs font-semibold text-[#FAF6F1] bg-[#1E3A2B] hover:bg-[#2E6F40] rounded-lg transition-colors"
            >
              <FileDown className="w-4 h-4 text-[#EADDCC]" />
              <span>Download Company Profile PDF</span>
            </a>
            <button
              type="button"
              onClick={() => setShowDeployModal(true)}
              className="inline-flex items-center gap-1.5 px-3 py-2.5 text-xs font-semibold text-[#2D3819] bg-[#FAF6F1] hover:bg-[#EADDCC] border border-[#E5D5C0] rounded-lg transition-colors cursor-pointer"
            >
              <GitBranch className="w-3.5 h-3.5 text-[#D95338]" />
              <span>GitHub &amp; Vercel</span>
            </button>
          </div>
        </div>
      </div>

      {/* Compact Corporate Footer Info */}
      <div className="max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 pb-6 border-b border-[#E5D5C0]">
          {/* Brand Identity */}
          <div className="md:col-span-5 flex items-start gap-3">
            <img
              src={COMPANY_PROFILE.logoUrl}
              alt="Logo AgriXentris Nusantara"
              referrerPolicy="no-referrer"
              className="w-11 h-11 rounded-lg object-contain border border-[#E5D5C0] bg-white p-1 shrink-0"
            />
            <div className="min-w-0">
              <p className="font-display text-base sm:text-lg font-bold text-[#1E3A2B]">
                {COMPANY_PROFILE.name}
              </p>
              <p className="text-xs text-[#4C5520] mb-1.5">
                {COMPANY_PROFILE.legalField}
              </p>
              <p className="text-[11px] text-[#3A3C31] leading-relaxed">
                Solusi agribisnis terintegrasi dari hulu ke hilir sejak {COMPANY_PROFILE.foundedYear}.
              </p>
            </div>
          </div>

          {/* 4 Page Links */}
          <div className="md:col-span-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#1E3A2B] mb-2">
              Halaman Website
            </h4>
            <div className="grid grid-cols-2 gap-1.5 text-xs">
              {(
                [
                  { id: 'home', label: 'Home' },
                  { id: 'about', label: 'About' },
                  { id: 'katalog', label: 'Katalog 7 SKU' },
                  { id: 'portofolio', label: 'Portofolio' },
                ] as { id: PageId; label: string }[]
              ).map((item) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => handlePageSelect(item.id)}
                  className={`text-left py-1 cursor-pointer hover:underline ${
                    activePage === item.id
                      ? 'font-bold text-[#D95338]'
                      : 'text-[#4C5520]'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>

          {/* Headquarters Contact */}
          <div className="md:col-span-4 space-y-1.5 text-xs text-[#3A3C31]">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#1E3A2B] mb-2">
              Kantor Pusat Bogor
            </h4>
            <p className="flex items-start gap-2 text-[11px]">
              <MapPin className="w-3.5 h-3.5 text-[#D95338] shrink-0 mt-0.5" />
              <span>{COMPANY_PROFILE.headquarters}</span>
            </p>
            <p className="flex items-center gap-2 font-mono text-[11px]">
              <Phone className="w-3.5 h-3.5 text-[#2E6F40] shrink-0" />
              <span>{COMPANY_PROFILE.phone}</span>
            </p>
            <p className="flex items-center gap-2 font-mono text-[11px]">
              <Mail className="w-3.5 h-3.5 text-[#1E3A2B] shrink-0" />
              <span>{COMPANY_PROFILE.email}</span>
            </p>
          </div>
        </div>

        <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-2 text-[11px] text-[#4C5520]">
          <p>&copy; {new Date().getFullYear()} {COMPANY_PROFILE.name}. Hak cipta dilindungi.</p>
          <p className="font-mono text-[10px]">
            Integrity · Profesional · Innovation · Collaboration · Sustainability
          </p>
        </div>
      </div>

      {showDeployModal && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="deploy-modal-title"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs"
        >
          <div className="w-full max-w-2xl bg-[#FAF6F1] border border-[#E5D5C0] rounded-2xl overflow-hidden shadow-2xl">
            <div className="px-5 py-3.5 bg-[#F0E5D7] border-b border-[#E5D5C0] flex items-center justify-between">
              <div className="flex items-center gap-2">
                <GitBranch className="w-4 h-4 text-[#D95338]" />
                <h3 id="deploy-modal-title" className="font-display text-base font-bold text-[#1E3A2B]">
                  Update ke GitHub &amp; Vercel
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setShowDeployModal(false)}
                aria-label="Tutup panduan deploy"
                className="p-1.5 rounded-lg text-[#2D3819] hover:bg-[#EADDCC] cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="p-5 space-y-4 text-xs text-[#2D3819] max-h-[80vh] overflow-y-auto">
              <div className="space-y-1.5">
                <div className="flex items-center justify-between">
                  <span className="font-semibold text-[#1E3A2B]">1. Push Update ke GitHub</span>
                  <button
                    type="button"
                    onClick={() => handleCopy('git', gitCommands)}
                    className="inline-flex items-center gap-1 px-2.5 py-1 rounded bg-[#F0E5D7] hover:bg-[#EADDCC] font-semibold text-[#1E3A2B] cursor-pointer"
                  >
                    {copiedKey === 'git' ? <Check className="w-3.5 h-3.5 text-[#2E6F40]" /> : <Copy className="w-3.5 h-3.5" />}
                    <span>{copiedKey === 'git' ? 'Tersalin' : 'Salin'}</span>
                  </button>
                </div>
                <pre className="p-3 rounded-xl bg-[#1E3A2B] text-[#FAF6F1] font-mono text-[11px] overflow-x-auto">
                  {gitCommands}
                </pre>
              </div>

              <div className="space-y-1.5">
                <div className="flex items-center justify-between">
                  <span className="font-semibold text-[#1E3A2B]">2. Deploy via CLI Vercel</span>
                  <button
                    type="button"
                    onClick={() => handleCopy('vercel', vercelCommands)}
                    className="inline-flex items-center gap-1 px-2.5 py-1 rounded bg-[#F0E5D7] hover:bg-[#EADDCC] font-semibold text-[#1E3A2B] cursor-pointer"
                  >
                    {copiedKey === 'vercel' ? <Check className="w-3.5 h-3.5 text-[#2E6F40]" /> : <Copy className="w-3.5 h-3.5" />}
                    <span>{copiedKey === 'vercel' ? 'Tersalin' : 'Salin'}</span>
                  </button>
                </div>
                <pre className="p-3 rounded-xl bg-[#1E3A2B] text-[#FAF6F1] font-mono text-[11px] overflow-x-auto">
                  {vercelCommands}
                </pre>
              </div>
            </div>
          </div>
        </div>
      )}
    </footer>
  );
};
