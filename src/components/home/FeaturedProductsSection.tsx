import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ProductCard } from "@/components/product/ProductCard";
import { Product } from "@/types";

interface FeaturedProductsSectionProps {
  products: Product[];
}

export const FeaturedProductsSection = ({
  products,
}: FeaturedProductsSectionProps) => {
  return (
    <section className="relative pt-14 pb-14 px-4 bg-[#810000] text-white font-poppins overflow-hidden">
      <div className="container mx-auto relative z-10">
        <div className="flex justify-between items-center mb-10 flex-wrap gap-4">
          <div>
            <h2 className="text-3xl font-semibold">Productos Destacados</h2>
            <p className="text-white/80">
              Nuestras mejores selecciones para ti
            </p>
          </div>
          <Button
            asChild
            variant="link"
            className="text-novillo-gold hover:text-white font-semibold"
          >
            <Link to="/productos" className="inline-flex items-center">
              Ver todos los productos
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
          {products.map((product) => (
            <div key={product.id} className="w-full max-w-xs">
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
