
import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { products, getProductsByCategory } from "@/data/products";
import { ProductGrid } from "@/components/product/ProductGrid";
import { CategoryFilter } from "@/components/product/CategoryFilter";
import { Product } from "@/types";

const Products = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  useEffect(() => {
    const categoryParam = searchParams.get("categoria");
    
    // Filter out "cordero" and "parrilleros" categories
    const availableProducts = products.filter(
      product => product.category !== "cordero" && product.category !== "parrilleros"
    );
    
    if (categoryParam) {
      setSelectedCategory(categoryParam);
      // Apply both filters - remove unwanted categories and filter by selected category
      setFilteredProducts(
        availableProducts.filter(product => product.category === categoryParam)
      );
    } else {
      setSelectedCategory(null);
      setFilteredProducts(availableProducts);
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
      {/* Upper wave decoration */}
      <svg
        className="w-full block pointer-events-none -mt-1"
        viewBox="0 0 1440 150"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill="#7D0A0A"
          d="M0,150 C600,100 900,0 1440,80 L1440,0 L0,0 Z"
        />
      </svg>
      
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
      
      {/* Bottom wave decoration */}
      <svg
        className="w-full block pointer-events-none"
        viewBox="0 0 1440 150"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill="#000000"
          d="M0,0 C360,120 1080,0 1440,120 L1440,150 L0,150 Z"
        />
      </svg>
    </div>
  );
};

export default Products;
