
import { Product } from "@/types";
import { ProductCard } from "@/components/product/ProductCard";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

interface FeaturedProductsSectionProps {
  products: Product[];
}

export const FeaturedProductsSection = ({
  products,
}: FeaturedProductsSectionProps) => {
  return (
    <section className="py-12 md:py-16 bg-[#810000]">
      {/* Upper wave decoration */}
      <svg
        className="w-full block pointer-events-none"
        viewBox="0 0 1440 150"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ marginTop: "-60px" }}
      >
        <path
          fill="#810000"
          d="M0,0 C360,120 1080,0 1440,120 L1440,150 L0,150 Z"
          transform="rotate(180 720 75)"
        />
      </svg>
      
      <div className="container mx-auto px-4">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-3 text-white">
            Productos <span className="text-[#D4AF37]">Destacados</span>
          </h2>
          <p className="text-white/80 max-w-2xl mx-auto">
            Selección especial de nuestros mejores cortes, frescos y listos para
            entregar
          </p>
        </div>

        {/* Products grid with improved responsive sizing */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6 justify-items-center">
          {products.map((product) => (
            <div key={product.id} className="w-full max-w-xs">
              <ProductCard product={product} />
            </div>
          ))}
        </div>

        <div className="text-center mt-8 md:mt-12">
          <Button
            asChild
            className="bg-[#D4AF37] hover:bg-[#D4AF37]/80 text-black"
          >
            <Link to="/productos" className="inline-flex items-center">
              Ver todos los productos
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};
