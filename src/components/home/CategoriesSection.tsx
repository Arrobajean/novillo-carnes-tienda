import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CategoryInfo } from "@/types";
import { motion } from "framer-motion";

interface CategoriesSectionProps {
  categories: CategoryInfo[];
}

export const CategoriesSection = ({ categories }: CategoriesSectionProps) => {
  return (
    <section className="relative py-12 px-4 overflow-hidden bg-[url('/public/images/ui/background.png')] bg-repeat bg-center font-poppins">
      {/* Máscara para oscurecer la imagen de fondo, igual que en el Hero */}
      <div className="absolute inset-0 bg-black/65 z-0 pointer-events-none"></div>

      <div className="container mx-auto pt-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h2 className="text-3xl font-semibold mb-2 text-center text-white">
            Nuestras Categorías
          </h2>
          <p className="text-center mb-8 max-w-2xl mx-auto text-base md:text-lg text-white">
            Explora nuestra variedad de cortes frescos y productos seleccionados
            para cada ocasión
          </p>
        </motion.div>

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
                        src={`https://source.unsplash.com/random/300x200/?meat,${category.id}`}
                        alt={category.name}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                    <div className="p-4 text-black">
                      <h3 className="text-xl font-semibold mb-2">
                        {category.name}
                      </h3>
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

        <motion.div
          className="flex justify-center mt-8 relative z-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <Button
            asChild
            className="bg-[#CE1212] hover:bg-[#B50F0F] text-white transition-colors"
          >
            <Link to="/productos">Ver todas las categorías</Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};
