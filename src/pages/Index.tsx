
import { useState, useEffect } from "react";
import { getFeaturedProducts, categories } from "@/data/products";
import { Product } from "@/types";
import { HeroSection } from "@/components/home/HeroSection";
import { AboutSection } from "@/components/home/AboutSection";
import { CategoriesAndFeaturedSection } from "@/components/home/CategoriesAndFeaturedSection";
import { WhyChooseUsSection } from "@/components/home/WhyChooseUsSection";
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
      
      {/* Fusioned Categories and Featured Products Section */}
      <CategoriesAndFeaturedSection 
        categories={filteredCategories} 
        products={featuredProducts} 
      />
      
      {/* Why Choose Us Section */}
      <WhyChooseUsSection />
      
      <AboutSection />
      
      {/* Testimonials section with carousel */}
      <TestimonialsSection />
    </div>
  );
};

export default Index;
