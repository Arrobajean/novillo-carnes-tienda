
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
  
  // Filtrar las categorías excluyendo cordero y parrilleros
  const filteredCategories = categories.filter(
    category => category.id !== "cordero" && category.id !== "parrilleros"
  );

  useEffect(() => {
    // Asegurar que la página cargue desde arriba
    window.scrollTo(0, 0);
    setFeaturedProducts(getFeaturedProducts());
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <HeroSection />
      
      {/* Combined CTA and About Section */}
      <CTASection />
      
      {/* Moved Categories before Featured Products */}
      <CategoriesSection categories={filteredCategories} />
      <FeaturedProductsSection products={featuredProducts} />
      <AboutSection />
      
      {/* Testimonials section with carousel */}
      <TestimonialsSection />
    </div>
  );
};

export default Index;
