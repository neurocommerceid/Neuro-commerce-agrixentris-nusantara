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
import { CheckCircle2, Send, Plus, Minus, Trash2 } from 'lucide-react';

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
      className="bg-[#1E3A2B] text-[#FAF6F1] py-16 lg:py-24 border-b border-white/15"
    >
      <div className="max-w-[1360px] mx-auto px-6">
        {/* Northeast Tomato "Let's talk production" Conversion Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Direct Contact & Live Order Cart Summary */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <p className="text-xs font-semibold text-[#EADDCC] mb-2">
                13. Mari Diskusikan Pengadaan &amp; Kemitraan
              </p>
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-[#FAF6F1] leading-tight mb-4">
                Siap Mengoptimalkan Produktivitas Lahan &amp; Rantai Pasok Anda?
              </h2>
              <p className="text-sm text-[#EADDCC] leading-relaxed">
                Tim komersial dan agronomi AgriXentris Nusantara di Dramaga, Bogor siap menyusun penawaran pengadaan 7 SKU sarana produksi, jadwal pelatihan SDM, maupun proposal supervisi proyek.
              </p>
            </div>

            {/* Live Order Summary Widget */}
            <div className="bg-[#FAF6F1] text-[#2D3819] rounded-xl p-6 border border-[#E5D5C0]">
              <div className="flex items-center justify-between pb-3 mb-4 border-b border-[#E5D5C0]">
                <div>
                  <h3 className="font-display text-lg font-bold text-[#1E3A2B]">
                    Ringkasan Daftar Pesanan SKU
                  </h3>
                  <p className="text-xs text-[#4C5520]">
                    Otomatis menerapkan harga grosir B2B sesuai MOQ
                  </p>
                </div>
                {summary.lines.length > 0 && (
                  <button
                    type="button"
                    onClick={onClearCart}
                    className="inline-flex items-center gap-1 text-xs font-semibold text-[#D95338] hover:underline cursor-pointer"
                  >
                    <Trash2 className="w-3.5 h-3.5" aria-hidden="true" />
                    <span>Kosongkan</span>
                  </button>
                )}
              </div>

              {summary.lines.length === 0 ? (
                <div className="py-6 text-center">
                  <p className="text-xs text-[#4C5520] mb-3">
                    Belum ada SKU yang dipilih di daftar pesanan. Anda tetap dapat mengirim permohonan konsultasi atau memilih produk dari katalog di atas.
                  </p>
                  <a
                    href="#katalog"
                    className="inline-block px-4 py-2 text-xs font-semibold text-[#FAF6F1] bg-[#1E3A2B] rounded-lg hover:bg-[#4C5520] transition-colors"
                  >
                    Pilih Produk dari Katalog 7 SKU
                  </a>
                </div>
              ) : (
                <div className="space-y-3">
                  {summary.lines.map((line) => (
                    <div
                      key={line.product.id}
                      className="p-3 rounded-lg bg-[#F0E5D7]/70 border border-[#E5D5C0] flex items-center justify-between gap-3"
                    >
                      <div className="min-w-0">
                        <p className="text-xs font-bold text-[#1E3A2B] truncate">
                          {line.product.shortTitle}
                        </p>
                        <p className="text-[11px] font-mono-tabular text-[#4C5520]">
                          {formatRupiah(line.unitPriceApplied)} / unit{' '}
                          {line.isWholesaleApplied ? '(Grosir B2B)' : '(Ritel)'}
                        </p>
                      </div>

                      <div className="flex items-center gap-2 shrink-0">
                        <button
                          type="button"
                          onClick={() =>
                            onUpdateCartQty(line.product.id, line.quantity - 1)
                          }
                          aria-label={`Kurangi ${line.product.shortTitle}`}
                          className="p-1 rounded bg-[#FAF6F1] border border-[#E5D5C0] text-[#1E3A2B] hover:bg-[#EADDCC] cursor-pointer"
                        >
                          <Minus className="w-3 h-3" aria-hidden="true" />
                        </button>
                        <span className="font-mono-tabular text-xs font-bold w-6 text-center">
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
                          <Plus className="w-3 h-3" aria-hidden="true" />
                        </button>
                      </div>
                    </div>
                  ))}

                  <div className="pt-3 border-t border-[#E5D5C0] space-y-1 text-xs">
                    {summary.totalSavingsWholesale > 0 && (
                      <div className="flex justify-between text-[#2E6F40] font-semibold">
                        <span>Penghematan Harga Grosir B2B:</span>
                        <span className="font-mono-tabular">
                          -{formatRupiah(summary.totalSavingsWholesale)}
                        </span>
                      </div>
                    )}
                    <div className="flex justify-between items-baseline pt-1">
                      <span className="font-semibold text-[#1E3A2B]">
                        Total Estimasi Pengadaan ({summary.totalItemsCount} unit):
                      </span>
                      <span className="font-mono-tabular text-lg font-bold text-[#1E3A2B]">
                        {formatRupiah(summary.grandTotal)}
                      </span>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Direct HQ Contact Details */}
            <div className="bg-white/10 border border-white/15 rounded-xl p-5 text-xs space-y-2 text-[#EADDCC]">
              <p>
                <strong className="text-white">Kantor Pusat:</strong>{' '}
                {COMPANY_PROFILE.headquarters}
              </p>
              <p className="font-mono-tabular">
                <strong className="text-white">Telepon / WhatsApp:</strong>{' '}
                {COMPANY_PROFILE.phone}
              </p>
              <p className="font-mono-tabular">
                <strong className="text-white">Email Resmi:</strong>{' '}
                {COMPANY_PROFILE.email}
              </p>
            </div>
          </div>

          {/* Right Column: Validated B2B Inquiry & Order Form */}
          <div className="lg:col-span-7 bg-[#FAF6F1] text-[#2D3819] rounded-2xl p-7 sm:p-9 border border-[#E5D5C0]">
            {receipt ? (
              <div className="py-6 space-y-6">
                <div className="flex items-start gap-3">
                  <CheckCircle2
                    className="w-7 h-7 text-[#2E6F40] shrink-0 mt-0.5"
                    aria-hidden="true"
                  />
                  <div>
                    <span className="font-mono-tabular text-xs font-bold text-[#D95338]">
                      REFERENSI PERMOHONAN: {receipt.referenceCode}
                    </span>
                    <h3 className="font-display text-2xl font-bold text-[#1E3A2B] mt-1">
                      Permohonan Pengadaan &amp; Konsultasi Berhasil Tercatat
                    </h3>
                    <p className="text-xs text-[#4C5520] mt-1">
                      Diterima pada {receipt.submittedAt} oleh Direktorat Komersial (CCO) AgriXentris Nusantara.
                    </p>
                  </div>
                </div>

                <dl className="grid grid-cols-1 sm:grid-cols-2 gap-4 bg-[#F0E5D7]/70 border border-[#E5D5C0] rounded-xl p-5 text-xs">
                  <div>
                    <dt className="text-[#4C5520]">Pemohon &amp; Instansi</dt>
                    <dd className="font-bold text-[#1E3A2B] mt-0.5">
                      {receipt.form.fullName} — {receipt.form.organization}
                    </dd>
                  </div>
                  <div>
                    <dt className="text-[#4C5520]">Kategori Kebutuhan</dt>
                    <dd className="font-bold text-[#1E3A2B] mt-0.5">
                      {receipt.form.inquiryType}
                    </dd>
                  </div>
                  <div>
                    <dt className="text-[#4C5520]">Kontak Konfirmasi</dt>
                    <dd className="font-mono-tabular font-medium text-[#2D3819] mt-0.5">
                      {receipt.form.email} · {receipt.form.phone}
                    </dd>
                  </div>
                  <div>
                    <dt className="text-[#4C5520]">Nilai SKU Terlampir</dt>
                    <dd className="font-mono-tabular font-bold text-[#1E3A2B] mt-0.5">
                      {receipt.itemCount > 0
                        ? `${receipt.itemCount} Unit (${formatRupiah(
                            receipt.totalEstimatedRp
                          )})`
                        : 'Konsultasi Tanpa Lampiran SKU'}
                    </dd>
                  </div>
                </dl>

                <div className="flex flex-wrap items-center gap-3 pt-2">
                  <button
                    type="button"
                    onClick={() => setReceipt(null)}
                    className="px-5 py-2.5 text-xs font-semibold text-[#FAF6F1] bg-[#1E3A2B] hover:bg-[#4C5520] rounded-lg transition-colors cursor-pointer"
                  >
                    Buat Permohonan Baru
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="space-y-5">
                <div className="pb-4 border-b border-[#E5D5C0]">
                  <h3 className="font-display text-2xl font-bold text-[#1E3A2B]">
                    Formulir Pemesanan Katalog &amp; Kemitraan B2B
                  </h3>
                  <p className="text-xs text-[#4C5520] mt-1">
                    Lengkapi data di bawah ini untuk mendapatkan faktur proforma (PO), jadwal kunjungan lahan, atau prospektus investasi.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="inquiry-fullname"
                      className="block text-xs font-semibold text-[#1E3A2B] mb-1.5"
                    >
                      Nama Lengkap Penanggung Jawab *
                    </label>
                    <input
                      id="inquiry-fullname"
                      type="text"
                      value={form.fullName}
                      onChange={(e) =>
                        handleFieldChange('fullName', e.target.value)
                      }
                      placeholder="Contoh: Ir. Hendra Wijaya"
                      className="w-full px-3.5 py-2.5 text-sm bg-[#F0E5D7]/50 border border-[#E5D5C0] rounded-lg text-[#2D3819] focus:outline-2 focus:outline-[#4C5520]"
                    />
                    {errors.fullName && (
                      <p className="text-xs font-medium text-[#D95338] mt-1">
                        {errors.fullName}
                      </p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="inquiry-organization"
                      className="block text-xs font-semibold text-[#1E3A2B] mb-1.5"
                    >
                      Instansi / Koperasi / Perusahaan *
                    </label>
                    <input
                      id="inquiry-organization"
                      type="text"
                      value={form.organization}
                      onChange={(e) =>
                        handleFieldChange('organization', e.target.value)
                      }
                      placeholder="Contoh: Kelompok Tani Karya Mandiri"
                      className="w-full px-3.5 py-2.5 text-sm bg-[#F0E5D7]/50 border border-[#E5D5C0] rounded-lg text-[#2D3819] focus:outline-2 focus:outline-[#4C5520]"
                    />
                    {errors.organization && (
                      <p className="text-xs font-medium text-[#D95338] mt-1">
                        {errors.organization}
                      </p>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="inquiry-email"
                      className="block text-xs font-semibold text-[#1E3A2B] mb-1.5"
                    >
                      Alamat Email Resmi *
                    </label>
                    <input
                      id="inquiry-email"
                      type="email"
                      value={form.email}
                      onChange={(e) =>
                        handleFieldChange('email', e.target.value)
                      }
                      placeholder="nama@instansi.co.id"
                      className="w-full px-3.5 py-2.5 text-sm bg-[#F0E5D7]/50 border border-[#E5D5C0] rounded-lg text-[#2D3819] focus:outline-2 focus:outline-[#4C5520]"
                    />
                    {errors.email && (
                      <p className="text-xs font-medium text-[#D95338] mt-1">
                        {errors.email}
                      </p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="inquiry-phone"
                      className="block text-xs font-semibold text-[#1E3A2B] mb-1.5"
                    >
                      Nomor WhatsApp / Telepon Aktif *
                    </label>
                    <input
                      id="inquiry-phone"
                      type="tel"
                      value={form.phone}
                      onChange={(e) =>
                        handleFieldChange('phone', e.target.value)
                      }
                      placeholder="081234567890"
                      className="w-full px-3.5 py-2.5 text-sm bg-[#F0E5D7]/50 border border-[#E5D5C0] rounded-lg text-[#2D3819] focus:outline-2 focus:outline-[#4C5520]"
                    />
                    {errors.phone && (
                      <p className="text-xs font-medium text-[#D95338] mt-1">
                        {errors.phone}
                      </p>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="inquiry-type"
                      className="block text-xs font-semibold text-[#1E3A2B] mb-1.5"
                    >
                      Kategori Layanan / Pengadaan
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
                      className="w-full px-3.5 py-2.5 text-sm bg-[#F0E5D7]/50 border border-[#E5D5C0] rounded-lg text-[#2D3819] focus:outline-2 focus:outline-[#4C5520]"
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
                      className="block text-xs font-semibold text-[#1E3A2B] mb-1.5"
                    >
                      Kota / Provinsi Lokasi Lahan *
                    </label>
                    <input
                      id="inquiry-location"
                      type="text"
                      value={form.locationCity}
                      onChange={(e) =>
                        handleFieldChange('locationCity', e.target.value)
                      }
                      placeholder="Contoh: Dramaga, Bogor / Jawa Barat"
                      className="w-full px-3.5 py-2.5 text-sm bg-[#F0E5D7]/50 border border-[#E5D5C0] rounded-lg text-[#2D3819] focus:outline-2 focus:outline-[#4C5520]"
                    />
                    {errors.locationCity && (
                      <p className="text-xs font-medium text-[#D95338] mt-1">
                        {errors.locationCity}
                      </p>
                    )}
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="inquiry-notes"
                    className="block text-xs font-semibold text-[#1E3A2B] mb-1.5"
                  >
                    Rincian Kebutuhan, Luas Lahan, atau Pertanyaan Teknis *
                  </label>
                  <textarea
                    id="inquiry-notes"
                    rows={3}
                    value={form.notes}
                    onChange={(e) =>
                      handleFieldChange('notes', e.target.value)
                    }
                    placeholder="Tuliskan luas lahan, jadwal tanam, atau spesifikasi pengadaan yang dibutuhkan..."
                    className="w-full px-3.5 py-2.5 text-sm bg-[#F0E5D7]/50 border border-[#E5D5C0] rounded-lg text-[#2D3819] focus:outline-2 focus:outline-[#4C5520]"
                  />
                  {errors.notes && (
                    <p className="text-xs font-medium text-[#D95338] mt-1">
                      {errors.notes}
                    </p>
                  )}
                </div>

                <div className="pt-2 flex flex-wrap items-center justify-between gap-4">
                  <p className="text-xs text-[#4C5520]">
                    *Seluruh permohonan ditangani langsung oleh tim C-Level &amp; Technical Support AgriXentris Nusantara.
                  </p>
                  <button
                    type="submit"
                    className="inline-flex items-center gap-2 px-6 py-3.5 text-xs font-semibold text-[#FAF6F1] bg-[#D95338] hover:bg-[#B84028] rounded-lg transition-colors cursor-pointer whitespace-nowrap shadow-xs"
                  >
                    <Send className="w-3.5 h-3.5" aria-hidden="true" />
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
