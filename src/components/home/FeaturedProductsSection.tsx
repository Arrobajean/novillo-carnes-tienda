
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ProductCard } from '@/components/product/ProductCard';
import { Product } from '@/types';

interface FeaturedProductsSectionProps {
  products: Product[];
}

export const FeaturedProductsSection = ({ products }: FeaturedProductsSectionProps) => {
  return (
    <section className="py-16 px-4 bg-white">
      <div className="container mx-auto">
        <div className="flex justify-between items-center mb-10">
          <div>
            <h2 className="text-3xl font-serif font-semibold text-gray-800">Productos Destacados</h2>
            <p className="text-gray-600">Nuestras mejores selecciones para ti</p>
          </div>
          <Button 
            asChild
            variant="link" 
            className="text-novillo-red hover:text-red-900"
          >
            <Link to="/productos" className="inline-flex items-center">
              Ver todos los productos
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};
