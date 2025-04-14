import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ProductCard } from "@/components/product/ProductCard";
import { Product } from "@/types";
import { motion } from "framer-motion";

interface FeaturedProductsSectionProps {
  products: Product[];
}

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export const FeaturedProductsSection = ({
  products,
}: FeaturedProductsSectionProps) => {
  return (
    <section className="relative pt-14 pb-14 px-4 bg-[#810000] text-white font-poppins overflow-hidden">
      <div className="container mx-auto relative z-10">
        <motion.div
          className="text-center mb-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-semibold">Productos Destacados</h2>
          <p className="text-white/80">
            ¡Nuestras mejores selecciones para ti!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center mb-10">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              className="w-full max-w-xs"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <ProductCard product={product} />
            </motion.div>
          ))}
        </div>

        <div className="flex justify-center mt-10">
          <Button
            asChild
            className="bg-[#CE1212] hover:bg-[#CE1212]/80 text-white font-medium transition-colors"
          >
            <Link to="/productos" className="inline-flex items-center">
              Ver todos los productos
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};
