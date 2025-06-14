
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ProductCard } from "@/components/product/ProductCard";
import { CategoryInfo, Product } from "@/types";
import { motion } from "framer-motion";

// Función helper para obtener la ruta de la imagen
const getCategoryImage = (category: CategoryInfo): string => {
  return `/images/products/${category.id}/asiento-${category.id}.webp`;
};

interface CategoriesAndFeaturedSectionProps {
  categories: CategoryInfo[];
  products: Product[];
}

export const CategoriesAndFeaturedSection = ({ 
  categories, 
  products 
}: CategoriesAndFeaturedSectionProps) => {
  return (
    <section className="relative py-12 px-4 overflow-hidden bg-[url('/ui/background.png')] bg-repeat bg-center font-poppins">
      {/* Máscara para oscurecer la imagen de fondo */}
      <div className="absolute inset-0 bg-black/65 z-0 pointer-events-none"></div>

      {/* Wave superior negro */}
      <svg
        className="absolute top-0 left-0 w-full block pointer-events-none"
        viewBox="0 0 1440 40"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path fill="#000000" d="M0,40 C360,20 1080,20 1440,0 L1440,0 L0,0 Z" />
      </svg>

      <div className="container mx-auto pt-8 relative z-10">
        {/* Encabezado principal */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-4 text-white">
            Nuestros Productos
          </h2>
          <p className="text-center mb-8 max-w-3xl mx-auto text-lg text-white/90">
            Explora nuestra variedad de cortes frescos y productos seleccionados para cada ocasión
          </p>
        </motion.div>

        {/* Sección de Categorías */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-16"
        >
          <h3 className="text-2xl font-semibold mb-6 text-center text-white">
            Nuestras Categorías
          </h3>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 relative z-10">
            {categories
              .filter(
                (category) =>
                  category.id !== "cordero" && category.id !== "parrilleros"
              )
              .slice(0, 4)
              .map((category, index) => (
                <motion.div
                  key={category.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Link
                    to={`/productos?categoria=${category.id}`}
                    className="block group"
                  >
                    <div className="bg-white rounded-lg overflow-hidden shadow-md transition-transform duration-300 group-hover:-translate-y-1 group-hover:shadow-lg">
                      <div className="h-44 bg-accent/10 flex items-center justify-center">
                        <img
                          src={getCategoryImage(category)}
                          alt={category.name}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                      </div>
                      <div className="p-4 text-black">
                        <h4 className="text-xl font-semibold mb-2">
                          {category.name}
                        </h4>
                        <p className="mb-4 line-clamp-2">
                          {category.description}
                        </p>
                        <span className="text-[#CE1212] font-medium inline-flex items-center">
                          Ver productos
                          <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                        </span>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
          </div>
        </motion.div>

        {/* Divisor visual */}
        <div className="flex items-center justify-center mb-16">
          <div className="h-px bg-white/30 flex-grow max-w-xs"></div>
          <div className="mx-6 w-3 h-3 bg-[#CE1212] rounded-full"></div>
          <div className="h-px bg-white/30 flex-grow max-w-xs"></div>
        </div>

        {/* Sección de Productos Destacados */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mb-12"
        >
          <h3 className="text-2xl font-semibold mb-6 text-center text-white">
            Productos Destacados
          </h3>
          <p className="text-center mb-8 text-white/80">
            ¡Nuestras mejores selecciones para ti!
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center mb-10">
            {products.map((product, index) => (
              <motion.div
                key={product.id}
                className="w-full max-w-xs"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <ProductCard product={product} />
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Botón principal para ver todos los productos */}
        <motion.div
          className="flex justify-center mt-8 relative z-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <Button
            asChild
            className="bg-[#CE1212] hover:bg-[#B50F0F] text-white px-8 py-3 text-lg font-medium transition-colors"
          >
            <Link to="/productos">Ver todos los productos</Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};
