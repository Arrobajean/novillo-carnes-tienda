
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
    <section className="pt-10 pb-5 px-4 bg-background relative">
      {/* Wave superior negro */}
      <svg
        className="w-full block pointer-events-none -mt-1"
        viewBox="0 0 1440 60"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path fill="#000000" d="M0,60 C360,30 1080,30 1440,0 L1440,0 L0,0 Z" />
      </svg>

      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h2 className="text-3xl font-semibold mb-2 text-center text-foreground">
            Nuestras Categorías
          </h2>
          <p className="text-center text-foreground/70 mb-10 max-w-2xl mx-auto text-base md:text-lg">
            Explora nuestra variedad de cortes frescos y productos seleccionados
            para cada ocasión
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {categories.slice(0, 4).map((category, index) => (
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
                  <div className="p-4">
                    <h3 className="text-xl font-semibold text-foreground mb-2">
                      {category.name}
                    </h3>
                    <p className="text-foreground/70 mb-4 line-clamp-2">
                      {category.description}
                    </p>
                    <span className="text-primary font-medium inline-flex items-center">
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
          className="text-center mt-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <Button asChild className="bg-primary hover:bg-primary/80 text-white">
            <Link to="/productos">Ver todas las categorías</Link>
          </Button>
        </motion.div>
      </div>

      {/* Wave inferior */}
      <svg
        className="absolute bottom-0 left-0 w-full h-[40px] block pointer-events-none"
        viewBox="0 0 1440 40"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path fill="#810000" d="M0,0 C360,20 1080,0 1440,20 L1440,40 L0,40 Z" />
      </svg>
    </section>
  );
};
