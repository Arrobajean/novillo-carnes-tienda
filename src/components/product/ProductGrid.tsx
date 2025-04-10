
import { ProductCard } from '@/components/product/ProductCard';
import { Product } from '@/types';

interface ProductGridProps {
  products: Product[];
}

export const ProductGrid = ({ products }: ProductGridProps) => {
  if (products.length === 0) {
    return (
      <div className="text-center py-10">
        <p className="text-gray-300">No se encontraron productos.</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 justify-items-center">
      {products.map((product) => (
        <div key={product.id} className="w-full max-w-xs">
          <ProductCard key={product.id} product={product} />
        </div>
      ))}
    </div>
  );
};
