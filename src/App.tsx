/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { ProductSKU, PRODUCT_CATALOG_7_SKU } from './data/agrixentrisData';
import { CartItem, calculateCartSummary } from './utils/catalogLogic';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { AboutAndVisionSection } from './components/AboutAndVisionSection';
import { BusinessModelSection } from './components/BusinessModelSection';
import { ProductCatalogSection } from './components/ProductCatalogSection';
import { ProductDetailModal } from './components/ProductDetailModal';
import { PortfolioAndMarketSection } from './components/PortfolioAndMarketSection';
import { InvestmentAndOrgSection } from './components/InvestmentAndOrgSection';
import { TestimonialsAndFaqSection } from './components/TestimonialsAndFaqSection';
import { InquiryAndOrderSection } from './components/InquiryAndOrderSection';
import { OrderDrawerModal } from './components/OrderDrawerModal';
import { Footer } from './components/Footer';

export default function App() {
  const [cart, setCart] = useState<CartItem[]>([
    { skuId: 'sku-1', quantity: 10 },
    { skuId: 'sku-3', quantity: 2 },
  ]);
  const [selectedProduct, setSelectedProduct] = useState<ProductSKU | null>(null);
  const [isCartDrawerOpen, setIsCartDrawerOpen] = useState<boolean>(false);

  const handleAddProductToCart = (skuId: string, addQty: number = 1) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.skuId === skuId);
      if (existing) {
        return prev.map((item) =>
          item.skuId === skuId
            ? { ...item, quantity: item.quantity + addQty }
            : item
        );
      }
      return [...prev, { skuId, quantity: addQty }];
    });
  };

  const handleUpdateCartQty = (skuId: string, newQty: number) => {
    setCart((prev) => {
      if (newQty <= 0) {
        return prev.filter((item) => item.skuId !== skuId);
      }
      const exists = prev.some((item) => item.skuId === skuId);
      if (!exists) {
        return [...prev, { skuId, quantity: newQty }];
      }
      return prev.map((item) =>
        item.skuId === skuId ? { ...item, quantity: newQty } : item
      );
    });
  };

  const handleClearCart = () => {
    setCart([]);
  };

  const handleLoadStarterBundle = () => {
    setCart([
      { skuId: 'sku-1', quantity: 10 },
      { skuId: 'sku-3', quantity: 8 },
      { skuId: 'sku-4', quantity: 20 },
      { skuId: 'sku-6', quantity: 1 },
    ]);
  };

  const cartSummary = calculateCartSummary(cart, PRODUCT_CATALOG_7_SKU);

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF6F1] text-[#2D3819]">
      <Navbar
        cartCount={cartSummary.totalItemsCount}
        onOpenCartDrawer={() => setIsCartDrawerOpen(true)}
      />

      <main className="flex-1">
        <HeroSection
          onSelectProduct={(product) => setSelectedProduct(product)}
          onQuickAddProduct={(skuId, qty) => handleAddProductToCart(skuId, qty ?? 1)}
        />

        <AboutAndVisionSection />

        <BusinessModelSection />

        <ProductCatalogSection
          cart={cart}
          onSelectProduct={(product) => setSelectedProduct(product)}
          onAddProductToCart={handleAddProductToCart}
          onOpenCartDrawer={() => setIsCartDrawerOpen(true)}
        />

        <PortfolioAndMarketSection />

        <InvestmentAndOrgSection />

        <TestimonialsAndFaqSection />

        <InquiryAndOrderSection
          cart={cart}
          onUpdateCartQty={handleUpdateCartQty}
          onClearCart={handleClearCart}
        />
      </main>

      <Footer />

      <ProductDetailModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
        onAddToCart={(skuId, qty) => handleAddProductToCart(skuId, qty)}
      />

      <OrderDrawerModal
        isOpen={isCartDrawerOpen}
        cart={cart}
        onClose={() => setIsCartDrawerOpen(false)}
        onUpdateQty={handleUpdateCartQty}
        onClearCart={handleClearCart}
        onLoadStarterBundle={handleLoadStarterBundle}
      />
    </div>
  );
}
