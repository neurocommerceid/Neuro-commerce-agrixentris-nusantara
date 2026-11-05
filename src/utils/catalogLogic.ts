import { ProductSKU, InvestmentProject } from '../data/agrixentrisData';

export interface CartItem {
  skuId: string;
  quantity: number;
}

export interface CartLineSummary {
  product: ProductSKU;
  quantity: number;
  isWholesaleApplied: boolean;
  unitPriceApplied: number;
  lineTotal: number;
  lineSavings: number;
}

export interface CartSummary {
  lines: CartLineSummary[];
  totalItemsCount: number;
  totalDistinctSkus: number;
  subtotalRetail: number;
  totalSavingsWholesale: number;
  grandTotal: number;
}

export interface InquiryFormInput {
  fullName: string;
  organization: string;
  email: string;
  phone: string;
  inquiryType: 'Pengadaan Produk (Katalog SKU)' | 'Konsultasi & Supervisi Proyek' | 'Kemitraan Investasi Agribisnis' | 'Pelatihan SDM & Instansi Pemda';
  locationCity: string;
  notes: string;
}

export interface InquiryValidationResult {
  valid: boolean;
  errors: Partial<Record<keyof InquiryFormInput, string>>;
}

export interface InvestmentSimulationResult {
  projectId: string;
  projectTitle: string;
  capitalInputRp: number;
  durationYears: number;
  annualReturnRp: number;
  totalProjectedProfitRp: number;
  totalProjectedValueRp: number;
  estimatedPaybackMonths: number;
  allocations: { label: string; percentage: number; amountRp: number }[];
}

export function filterProducts(
  products: ProductSKU[],
  category: string,
  searchQuery: string
): ProductSKU[] {
  const normalizedQuery = searchQuery.trim().toLowerCase();
  return products.filter((item) => {
    const matchesCategory =
      category === 'Semua' || category === '' || item.category === category;
    if (!matchesCategory) return false;
    if (!normalizedQuery) return true;
    const searchableText = [
      item.sku,
      item.name,
      item.shortTitle,
      item.category,
      item.tagline,
      item.description,
      item.targetUsers,
    ]
      .join(' ')
      .toLowerCase();
    return searchableText.includes(normalizedQuery);
  });
}

export function calculateCartSummary(
  cartItems: CartItem[],
  catalog: ProductSKU[]
): CartSummary {
  const lines: CartLineSummary[] = [];
  let totalItemsCount = 0;
  let subtotalRetail = 0;
  let grandTotal = 0;

  for (const item of cartItems) {
    if (item.quantity <= 0) continue;
    const product = catalog.find((p) => p.id === item.skuId);
    if (!product) continue;

    const isWholesaleApplied = item.quantity >= product.wholesaleMinQty;
    const unitPriceApplied = isWholesaleApplied
      ? product.wholesalePrice
      : product.retailPrice;
    const retailTotal = product.retailPrice * item.quantity;
    const lineTotal = unitPriceApplied * item.quantity;
    const lineSavings = retailTotal - lineTotal;

    lines.push({
      product,
      quantity: item.quantity,
      isWholesaleApplied,
      unitPriceApplied,
      lineTotal,
      lineSavings,
    });

    totalItemsCount += item.quantity;
    subtotalRetail += retailTotal;
    grandTotal += lineTotal;
  }

  return {
    lines,
    totalItemsCount,
    totalDistinctSkus: lines.length,
    subtotalRetail,
    totalSavingsWholesale: subtotalRetail - grandTotal,
    grandTotal,
  };
}

export function calculateInvestmentProjection(
  project: InvestmentProject,
  capitalInputRp: number,
  durationYears: number
): InvestmentSimulationResult {
  const safeCapital = Math.max(project.minInvestmentRp, capitalInputRp);
  const safeYears = Math.max(1, Math.min(10, Math.round(durationYears)));
  const annualReturnRp = Math.round(
    safeCapital * (project.targetRoiPercentAnnual / 100)
  );
  const totalProjectedProfitRp = annualReturnRp * safeYears;
  const totalProjectedValueRp = safeCapital + totalProjectedProfitRp;

  const allocations = project.allocationBreakdown.map((entry) => ({
    label: entry.label,
    percentage: entry.percentage,
    amountRp: Math.round((safeCapital * entry.percentage) / 100),
  }));

  return {
    projectId: project.id,
    projectTitle: project.title,
    capitalInputRp: safeCapital,
    durationYears: safeYears,
    annualReturnRp,
    totalProjectedProfitRp,
    totalProjectedValueRp,
    estimatedPaybackMonths: project.paybackMonths,
    allocations,
  };
}

export function validateInquiryForm(
  input: InquiryFormInput
): InquiryValidationResult {
  const errors: Partial<Record<keyof InquiryFormInput, string>> = {};

  if (!input.fullName || input.fullName.trim().length < 3) {
    errors.fullName = 'Nama lengkap wajib diisi (minimal 3 karakter).';
  }

  if (!input.organization || input.organization.trim().length < 2) {
    errors.organization = 'Nama instansi / kelompok tani / perusahaan wajib diisi.';
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!input.email || !emailRegex.test(input.email.trim())) {
    errors.email = 'Masukkan alamat email aktif yang valid.';
  }

  const cleanedPhone = (input.phone || '').replace(/[\s\-()]/g, '');
  if (!cleanedPhone || !/^\+?[0-9]{9,15}$/.test(cleanedPhone)) {
    errors.phone = 'Nomor WhatsApp / telepon wajib berupa 9–15 digit angka.';
  }

  if (!input.locationCity || input.locationCity.trim().length < 2) {
    errors.locationCity = 'Kota / lokasi proyek wajib diisi.';
  }

  if (!input.notes || input.notes.trim().length < 10) {
    errors.notes = 'Rincian kebutuhan atau catatan wajib diisi (minimal 10 karakter).';
  }

  return {
    valid: Object.keys(errors).length === 0,
    errors,
  };
}

export function formatRupiah(amount: number): string {
  return 'Rp ' + Math.round(amount).toLocaleString('id-ID');
}
