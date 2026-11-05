import test from 'node:test';
import assert from 'node:assert/strict';
import {
  filterProducts,
  calculateCartSummary,
  calculateInvestmentProjection,
  validateInquiryForm,
  formatRupiah,
} from './catalogLogic';
import {
  PRODUCT_CATALOG_7_SKU,
  INVESTMENT_PROJECTS,
} from '../data/agrixentrisData';

test('7-SKU catalog contains exactly 7 distinct agricultural products', () => {
  assert.equal(PRODUCT_CATALOG_7_SKU.length, 7);
  const skuCodes = new Set(PRODUCT_CATALOG_7_SKU.map((p) => p.sku));
  assert.equal(skuCodes.size, 7);
});

test('filterProducts filters by category and search query accurately', () => {
  const all = filterProducts(PRODUCT_CATALOG_7_SKU, 'Semua', '');
  assert.equal(all.length, 7);

  const seeds = filterProducts(PRODUCT_CATALOG_7_SKU, 'Benih & Bibit', '');
  assert.equal(seeds.length, 3);

  const iotSearch = filterProducts(PRODUCT_CATALOG_7_SKU, 'Semua', 'telemetry');
  assert.equal(iotSearch.length, 1);
  assert.equal(iotSearch[0].sku, 'AXN-GH-007');
});

test('calculateCartSummary applies retail price below MOQ and wholesale price at or above MOQ', () => {
  const summaryRetail = calculateCartSummary(
    [{ skuId: 'sku-1', quantity: 5 }],
    PRODUCT_CATALOG_7_SKU
  );
  assert.equal(summaryRetail.lines[0].isWholesaleApplied, false);
  assert.equal(summaryRetail.lines[0].unitPriceApplied, 165000);
  assert.equal(summaryRetail.grandTotal, 165000 * 5);
  assert.equal(summaryRetail.totalSavingsWholesale, 0);

  const summaryWholesale = calculateCartSummary(
    [{ skuId: 'sku-1', quantity: 10 }],
    PRODUCT_CATALOG_7_SKU
  );
  assert.equal(summaryWholesale.lines[0].isWholesaleApplied, true);
  assert.equal(summaryWholesale.lines[0].unitPriceApplied, 138000);
  assert.equal(summaryWholesale.grandTotal, 1380000);
  assert.equal(summaryWholesale.totalSavingsWholesale, (165000 - 138000) * 10);
});

test('calculateInvestmentProjection computes deterministic ROI and allocation breakdown', () => {
  const project = INVESTMENT_PROJECTS[0];
  const result = calculateInvestmentProjection(project, 200000000, 3);
  assert.equal(result.capitalInputRp, 200000000);
  assert.equal(result.durationYears, 3);
  assert.equal(result.annualReturnRp, 56000000);
  assert.equal(result.totalProjectedProfitRp, 168000000);
  assert.equal(result.totalProjectedValueRp, 368000000);
  const pctSum = result.allocations.reduce((sum, a) => sum + a.percentage, 0);
  assert.equal(pctSum, 100);
});

test('validateInquiryForm rejects invalid inputs and accepts valid B2B inquiry', () => {
  const invalid = validateInquiryForm({
    fullName: 'A',
    organization: '',
    email: 'not-an-email',
    phone: '123',
    inquiryType: 'Pengadaan Produk (Katalog SKU)',
    locationCity: '',
    notes: 'short',
  });
  assert.equal(invalid.valid, false);
  assert.ok(invalid.errors.fullName);
  assert.ok(invalid.errors.email);
  assert.ok(invalid.errors.phone);

  const valid = validateInquiryForm({
    fullName: 'Budi Santoso',
    organization: 'Koperasi Tani Makmur Bogor',
    email: 'budi@tanibogor.id',
    phone: '081234567890',
    inquiryType: 'Pengadaan Produk (Katalog SKU)',
    locationCity: 'Bogor, Jawa Barat',
    notes: 'Kami membutuhkan pengadaan 20 pouch Benih Cabai F1 dan 10 paket Nutrisi AB Mix.',
  });
  assert.equal(valid.valid, true);
  assert.equal(Object.keys(valid.errors).length, 0);
  assert.ok(formatRupiah(150000).includes('150.000'));
});
