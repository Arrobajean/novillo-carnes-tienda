import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { products, getProductsByCategory } from "@/data/products";
import { ProductGrid } from "@/components/product/ProductGrid";
import { CategoryFilter } from "@/components/product/CategoryFilter";
import { Product } from "@/types";

const Products = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [filteredProducts, setFilteredProducts] = useState<Product[]>(products);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  useEffect(() => {
    const categoryParam = searchParams.get("categoria");
    if (categoryParam) {
      setSelectedCategory(categoryParam);
      setFilteredProducts(getProductsByCategory(categoryParam));
    } else {
      setSelectedCategory(null);
      setFilteredProducts(products);
    }
  }, [searchParams]);

  const handleCategorySelect = (category: string | null) => {
    if (category) {
      setSearchParams({ categoria: category });
    } else {
      setSearchParams({});
    }
  };

  return (
    <div className="bg-[#7D0A0A] min-h-screen">
      <div className="container mx-auto py-10 px-4">
        {/* Encabezado centrado */}
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold text-white font-sans mb-2">
            Nuestros Productos
          </h1>
          <p className="text-[#EEEBDD] font-sans">
            Explora nuestra selección de cortes frescos y productos de alta
            calidad
          </p>
        </div>

        {/* Filtro de categorías */}
        <CategoryFilter
          selectedCategory={selectedCategory}
          onSelectCategory={handleCategorySelect}
        />

        {/* Lista de productos */}
        <ProductGrid products={filteredProducts} />
      </div>
    </div>
  );
};

export default Products;
