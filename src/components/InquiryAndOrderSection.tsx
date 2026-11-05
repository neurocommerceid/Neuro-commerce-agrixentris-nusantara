import React, { useState } from 'react';
import {
  COMPANY_PROFILE,
  PRODUCT_CATALOG_7_SKU,
} from '../data/agrixentrisData';
import {
  CartItem,
  calculateCartSummary,
  validateInquiryForm,
  InquiryFormInput,
  formatRupiah,
} from '../utils/catalogLogic';
import { CheckCircle2, Send, Plus, Minus, Trash2, ChevronDown } from 'lucide-react';

interface InquiryAndOrderSectionProps {
  cart: CartItem[];
  onUpdateCartQty: (skuId: string, newQty: number) => void;
  onClearCart: () => void;
}

interface SubmittedReceipt {
  referenceCode: string;
  submittedAt: string;
  form: InquiryFormInput;
  totalEstimatedRp: number;
  itemCount: number;
}

export const InquiryAndOrderSection: React.FC<InquiryAndOrderSectionProps> = ({
  cart,
  onUpdateCartQty,
  onClearCart,
}) => {
  const [form, setForm] = useState<InquiryFormInput>({
    fullName: '',
    organization: '',
    email: '',
    phone: '',
    inquiryType: 'Pengadaan Produk (Katalog SKU)',
    locationCity: '',
    notes: '',
  });
  const [errors, setErrors] = useState<
    Partial<Record<keyof InquiryFormInput, string>>
  >({});
  const [receipt, setReceipt] = useState<SubmittedReceipt | null>(null);
  const [showCartItems, setShowCartItems] = useState<boolean>(false);

  const summary = calculateCartSummary(cart, PRODUCT_CATALOG_7_SKU);

  const handleFieldChange = (
    field: keyof InquiryFormInput,
    value: string
  ) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => {
        const copy = { ...prev };
        delete copy[field];
        return copy;
      });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validation = validateInquiryForm(form);
    if (!validation.valid) {
      setErrors(validation.errors);
      return;
    }

    const refNum =
      'AXN-' +
      new Date().getFullYear() +
      '-' +
      String(Math.floor(1000 + Math.random() * 9000));

    setReceipt({
      referenceCode: refNum,
      submittedAt: new Date().toLocaleDateString('id-ID', {
        day: '2-digit',
        month: 'long',
        year: 'numeric',
      }),
      form,
      totalEstimatedRp: summary.grandTotal,
      itemCount: summary.totalItemsCount,
    });
  };

  return (
    <section
      id="kontak"
      className="bg-[#14281D] text-[#FAF6F1] py-10 sm:py-14 border-b border-white/15"
    >
      <div className="max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-start">
          {/* Left Column: Compact Header & Collapsible Cart Summary */}
          <div className="lg:col-span-5 space-y-4">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-widest text-[#E07A5F] mb-1">
                Pengadaan &amp; Konsultasi B2B
              </p>
              <h2 className="font-serif text-xl sm:text-3xl font-bold text-[#FAF6F1] leading-snug mb-2">
                Diskusikan Pengadaan SKU &amp; Proyek Lahan Anda
              </h2>
              <p className="text-xs text-[#D8D2C5] leading-relaxed">
                Tim komersial dan agronomi AgriXentris Nusantara di Dramaga, Bogor siap menyusun penawaran resmi.
              </p>
            </div>

            {/* Compact Collapsible Order Summary Widget */}
            <div className="bg-[#FAF6F1] text-[#2D3819] rounded-xl p-4 border border-[#E5D5C0]">
              <div className="flex items-center justify-between gap-2">
                <div>
                  <h3 className="font-serif text-sm sm:text-base font-bold text-[#1E3A2B]">
                    Ringkasan Daftar Pesanan ({summary.totalItemsCount} unit)
                  </h3>
                  <p className="font-mono text-xs font-bold text-[#B84A27]">
                    Total Estimasi: {formatRupiah(summary.grandTotal)}
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  {summary.lines.length > 0 && (
                    <button
                      type="button"
                      onClick={() => setShowCartItems((prev) => !prev)}
                      className="inline-flex items-center gap-1 px-2.5 py-1.5 rounded-lg bg-[#F0E5D7] text-xs font-semibold text-[#1E3A2B] cursor-pointer"
                    >
                      <span>{showCartItems ? 'Tutup' : 'Rincian'}</span>
                      <ChevronDown
                        className={`w-3.5 h-3.5 transition-transform duration-200 ${
                          showCartItems ? 'rotate-180 text-[#B84A27]' : ''
                        }`}
                      />
                    </button>
                  )}
                </div>
              </div>

              {showCartItems && summary.lines.length > 0 && (
                <div className="mt-3 pt-3 border-t border-[#E5D5C0] space-y-2">
                  {summary.lines.map((line) => (
                    <div
                      key={line.product.id}
                      className="p-2.5 rounded-lg bg-[#F0E5D7]/70 border border-[#E5D5C0] flex items-center justify-between gap-2"
                    >
                      <div className="min-w-0">
                        <p className="text-xs font-bold text-[#1E3A2B] truncate">
                          {line.product.shortTitle}
                        </p>
                        <p className="text-[10px] font-mono text-[#4C5520]">
                          {formatRupiah(line.unitPriceApplied)}/unit{' '}
                          {line.isWholesaleApplied ? '(Grosir)' : '(Ritel)'}
                        </p>
                      </div>

                      <div className="flex items-center gap-1.5 shrink-0">
                        <button
                          type="button"
                          onClick={() =>
                            onUpdateCartQty(line.product.id, line.quantity - 1)
                          }
                          aria-label={`Kurangi ${line.product.shortTitle}`}
                          className="p-1 rounded bg-[#FAF6F1] border border-[#E5D5C0] text-[#1E3A2B] hover:bg-[#EADDCC] cursor-pointer"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="font-mono text-xs font-bold w-6 text-center">
                          {line.quantity}
                        </span>
                        <button
                          type="button"
                          onClick={() =>
                            onUpdateCartQty(line.product.id, line.quantity + 1)
                          }
                          aria-label={`Tambah ${line.product.shortTitle}`}
                          className="p-1 rounded bg-[#FAF6F1] border border-[#E5D5C0] text-[#1E3A2B] hover:bg-[#EADDCC] cursor-pointer"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>
                    </div>
                  ))}
                  <div className="flex justify-end pt-1">
                    <button
                      type="button"
                      onClick={onClearCart}
                      className="inline-flex items-center gap-1 text-[11px] font-semibold text-[#D95338] hover:underline cursor-pointer"
                    >
                      <Trash2 className="w-3 h-3" />
                      <span>Kosongkan daftar</span>
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* Compact Contact Info */}
            <div className="bg-white/5 border border-white/10 rounded-xl p-3.5 text-xs space-y-1 text-[#D8D2C5]">
              <p>
                <strong className="text-white">Kantor Pusat:</strong> {COMPANY_PROFILE.headquarters}
              </p>
              <p className="font-mono">
                <strong className="text-white">WA / Telp:</strong> {COMPANY_PROFILE.phone} ·{' '}
                {COMPANY_PROFILE.email}
              </p>
            </div>
          </div>

          {/* Right Column: Compact Validated B2B Inquiry & Order Form */}
          <div className="lg:col-span-7 bg-[#FAF6F1] text-[#2D3819] rounded-2xl p-4 sm:p-6 border border-[#E5D5C0]">
            {receipt ? (
              <div className="py-4 space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-[#2E6F40] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-mono text-xs font-bold text-[#D95338]">
                      REFERENSI: {receipt.referenceCode}
                    </span>
                    <h3 className="font-serif text-lg sm:text-xl font-bold text-[#1E3A2B] mt-0.5">
                      Permohonan Pengadaan Berhasil Tercatat
                    </h3>
                    <p className="text-xs text-[#4C5520]">
                      Diterima pada {receipt.submittedAt} oleh Direktorat Komersial (CCO).
                    </p>
                  </div>
                </div>

                <dl className="grid grid-cols-2 gap-3 bg-[#F0E5D7]/70 border border-[#E5D5C0] rounded-xl p-3.5 text-xs">
                  <div>
                    <dt className="text-[#4C5520]">Pemohon</dt>
                    <dd className="font-bold text-[#1E3A2B]">
                      {receipt.form.fullName} ({receipt.form.organization})
                    </dd>
                  </div>
                  <div>
                    <dt className="text-[#4C5520]">Nilai SKU</dt>
                    <dd className="font-mono font-bold text-[#1E3A2B]">
                      {receipt.itemCount} Unit ({formatRupiah(receipt.totalEstimatedRp)})
                    </dd>
                  </div>
                </dl>

                <button
                  type="button"
                  onClick={() => setReceipt(null)}
                  className="px-4 py-2 text-xs font-semibold text-[#FAF6F1] bg-[#1E3A2B] rounded-lg cursor-pointer"
                >
                  Buat Permohonan Baru
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="space-y-3.5">
                <div className="pb-2.5 border-b border-[#E5D5C0]">
                  <h3 className="font-serif text-base sm:text-xl font-bold text-[#1E3A2B]">
                    Formulir Pemesanan Katalog &amp; Kemitraan B2B
                  </h3>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label
                      htmlFor="inquiry-fullname"
                      className="block text-[11px] font-semibold text-[#1E3A2B] mb-1"
                    >
                      Nama Lengkap *
                    </label>
                    <input
                      id="inquiry-fullname"
                      type="text"
                      value={form.fullName}
                      onChange={(e) => handleFieldChange('fullName', e.target.value)}
                      placeholder="Ir. Hendra Wijaya"
                      className="w-full px-3 py-2 text-xs bg-[#F0E5D7]/50 border border-[#E5D5C0] rounded-lg text-[#2D3819]"
                    />
                    {errors.fullName && (
                      <p className="text-[11px] font-medium text-[#D95338] mt-0.5">
                        {errors.fullName}
                      </p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="inquiry-organization"
                      className="block text-[11px] font-semibold text-[#1E3A2B] mb-1"
                    >
                      Instansi / Koperasi / Perusahaan *
                    </label>
                    <input
                      id="inquiry-organization"
                      type="text"
                      value={form.organization}
                      onChange={(e) => handleFieldChange('organization', e.target.value)}
                      placeholder="Kelompok Tani Karya Mandiri"
                      className="w-full px-3 py-2 text-xs bg-[#F0E5D7]/50 border border-[#E5D5C0] rounded-lg text-[#2D3819]"
                    />
                    {errors.organization && (
                      <p className="text-[11px] font-medium text-[#D95338] mt-0.5">
                        {errors.organization}
                      </p>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label
                      htmlFor="inquiry-email"
                      className="block text-[11px] font-semibold text-[#1E3A2B] mb-1"
                    >
                      Email Resmi *
                    </label>
                    <input
                      id="inquiry-email"
                      type="email"
                      value={form.email}
                      onChange={(e) => handleFieldChange('email', e.target.value)}
                      placeholder="nama@instansi.co.id"
                      className="w-full px-3 py-2 text-xs bg-[#F0E5D7]/50 border border-[#E5D5C0] rounded-lg text-[#2D3819]"
                    />
                    {errors.email && (
                      <p className="text-[11px] font-medium text-[#D95338] mt-0.5">
                        {errors.email}
                      </p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="inquiry-phone"
                      className="block text-[11px] font-semibold text-[#1E3A2B] mb-1"
                    >
                      Nomor WhatsApp *
                    </label>
                    <input
                      id="inquiry-phone"
                      type="tel"
                      value={form.phone}
                      onChange={(e) => handleFieldChange('phone', e.target.value)}
                      placeholder="081234567890"
                      className="w-full px-3 py-2 text-xs bg-[#F0E5D7]/50 border border-[#E5D5C0] rounded-lg text-[#2D3819]"
                    />
                    {errors.phone && (
                      <p className="text-[11px] font-medium text-[#D95338] mt-0.5">
                        {errors.phone}
                      </p>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label
                      htmlFor="inquiry-type"
                      className="block text-[11px] font-semibold text-[#1E3A2B] mb-1"
                    >
                      Kategori Layanan
                    </label>
                    <select
                      id="inquiry-type"
                      value={form.inquiryType}
                      onChange={(e) =>
                        handleFieldChange(
                          'inquiryType',
                          e.target.value as InquiryFormInput['inquiryType']
                        )
                      }
                      className="w-full px-3 py-2 text-xs bg-[#F0E5D7]/50 border border-[#E5D5C0] rounded-lg text-[#2D3819]"
                    >
                      <option value="Pengadaan Produk (Katalog SKU)">
                        Pengadaan Produk (Katalog SKU)
                      </option>
                      <option value="Konsultasi & Supervisi Proyek">
                        Konsultasi &amp; Supervisi Proyek
                      </option>
                      <option value="Kemitraan Investasi Agribisnis">
                        Kemitraan Investasi Agribisnis
                      </option>
                      <option value="Pelatihan SDM & Instansi Pemda">
                        Pelatihan SDM &amp; Instansi Pemda
                      </option>
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="inquiry-location"
                      className="block text-[11px] font-semibold text-[#1E3A2B] mb-1"
                    >
                      Kota / Lokasi Lahan *
                    </label>
                    <input
                      id="inquiry-location"
                      type="text"
                      value={form.locationCity}
                      onChange={(e) => handleFieldChange('locationCity', e.target.value)}
                      placeholder="Dramaga, Bogor"
                      className="w-full px-3 py-2 text-xs bg-[#F0E5D7]/50 border border-[#E5D5C0] rounded-lg text-[#2D3819]"
                    />
                    {errors.locationCity && (
                      <p className="text-[11px] font-medium text-[#D95338] mt-0.5">
                        {errors.locationCity}
                      </p>
                    )}
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="inquiry-notes"
                    className="block text-[11px] font-semibold text-[#1E3A2B] mb-1"
                  >
                    Rincian Kebutuhan / Luas Lahan *
                  </label>
                  <textarea
                    id="inquiry-notes"
                    rows={2}
                    value={form.notes}
                    onChange={(e) => handleFieldChange('notes', e.target.value)}
                    placeholder="Tuliskan luas lahan atau spesifikasi pengadaan..."
                    className="w-full px-3 py-2 text-xs bg-[#F0E5D7]/50 border border-[#E5D5C0] rounded-lg text-[#2D3819]"
                  />
                  {errors.notes && (
                    <p className="text-[11px] font-medium text-[#D95338] mt-0.5">
                      {errors.notes}
                    </p>
                  )}
                </div>

                <div className="pt-1 flex items-center justify-end">
                  <button
                    type="submit"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 text-xs font-semibold text-[#FAF6F1] bg-[#B84A27] hover:bg-[#9E3C1E] rounded-lg transition-colors cursor-pointer"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>Kirim Permohonan &amp; Pesanan</span>
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
