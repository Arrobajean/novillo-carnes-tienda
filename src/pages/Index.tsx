
import { useState, useEffect } from 'react';
import { getFeaturedProducts, categories } from '@/data/products';
import { Product } from '@/types';
import { HeroSection } from '@/components/home/HeroSection';
import { AboutSection } from '@/components/home/AboutSection';
import { CategoriesSection } from '@/components/home/CategoriesSection';
import { FeaturedProductsSection } from '@/components/home/FeaturedProductsSection';
import { CTASection } from '@/components/home/CTASection';
import { GoogleReviews } from '@/components/reviews/GoogleReviews';

const Index = () => {
  const [featuredProducts, setFeaturedProducts] = useState<Product[]>([]);
  
  useEffect(() => {
    // Get featured products for homepage
    setFeaturedProducts(getFeaturedProducts());
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <HeroSection />

      {/* About Section */}
      <AboutSection />

      {/* Categories Section */}
      <CategoriesSection categories={categories} />

      {/* Featured Products Section */}
      <FeaturedProductsSection products={featuredProducts} />
      
      {/* Google Reviews Section - Moved from Contact page */}
      <GoogleReviews />

      {/* CTA Section with Online Purchase Process */}
      <CTASection />
    </div>
  );
};

export default Index;
