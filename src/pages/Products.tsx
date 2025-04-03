
import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { products, getProductsByCategory } from '@/data/products';
import { ProductGrid } from '@/components/product/ProductGrid';
import { CategoryFilter } from '@/components/product/CategoryFilter';
import { Product } from '@/types';

const Products = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [filteredProducts, setFilteredProducts] = useState<Product[]>(products);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  // Get category from URL params
  useEffect(() => {
    const categoryParam = searchParams.get('categoria');
    if (categoryParam) {
      setSelectedCategory(categoryParam);
      setFilteredProducts(getProductsByCategory(categoryParam));
    } else {
      setSelectedCategory(null);
      setFilteredProducts(products);
    }
  }, [searchParams]);

  // Handle category selection
  const handleCategorySelect = (category: string | null) => {
    if (category) {
      setSearchParams({ categoria: category });
    } else {
      setSearchParams({});
    }
  };

  return (
    <div className="container mx-auto py-10 px-4">
      <div className="mb-8">
        <h1 className="text-3xl font-serif font-bold mb-2">Nuestros Productos</h1>
        <p className="text-gray-600">
          Explora nuestra selección de cortes frescos y productos de alta calidad
        </p>
      </div>

      <CategoryFilter 
        selectedCategory={selectedCategory} 
        onSelectCategory={handleCategorySelect} 
      />

      <ProductGrid products={filteredProducts} />
    </div>
  );
};

export default Products;
