
import { useState, useEffect } from "react";
import { getFeaturedProducts, categories } from "@/data/products";
import { Product } from "@/types";
import { HeroSection } from "@/components/home/HeroSection";
import { AboutSection } from "@/components/home/AboutSection";
import { CategoriesSection } from "@/components/home/CategoriesSection";
import { FeaturedProductsSection } from "@/components/home/FeaturedProductsSection";
import { CTASection } from "@/components/home/CTASection";
import { TestimonialsSection } from "@/components/home/TestimonialsSection";

const Index = () => {
  const [featuredProducts, setFeaturedProducts] = useState<Product[]>([]);

  useEffect(() => {
    setFeaturedProducts(getFeaturedProducts());
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <HeroSection />
      
      {/* Combined CTA and About Section */}
      <CTASection />
      
      {/* Moved Categories before Featured Products */}
      <CategoriesSection categories={categories} />
      <FeaturedProductsSection products={featuredProducts} />
      <AboutSection />
      
      {/* Use custom Testimonials instead of external Google Reviews */}
      <TestimonialsSection />
    </div>
  );
};

export default Index;
