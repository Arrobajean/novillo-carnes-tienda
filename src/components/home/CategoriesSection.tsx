import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CategoryInfo } from "@/types";

interface CategoriesSectionProps {
  categories: CategoryInfo[];
}

export const CategoriesSection = ({ categories }: CategoriesSectionProps) => {
  return (
    <>
      <svg
        className="-mt-1 w-full block pointer-events-none animate-wave"
        viewBox="0 0 1440 150"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path fill="#3d0000" d="M0,150 C600,100 900,0 1440,80 L1440,0 L0,0 Z" />
      </svg>

      <section className="py-20 px-4 bg-background">
        <div className="container mx-auto">
          <h2 className="text-3xl font-semibold mb-2 text-center text-foreground">
            Nuestras Categorías
          </h2>
          <p className="text-center text-foreground/70 mb-12 max-w-2xl mx-auto">
            Explora nuestra variedad de cortes frescos y productos seleccionados
            para cada ocasión
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {categories.slice(0, 4).map((category) => (
              <Link
                key={category.id}
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
            ))}
          </div>

          <div className="text-center mt-10">
            <Button
              asChild
              className="bg-primary hover:bg-primary/80 text-white"
            >
              <Link to="/productos">Ver todas las categorías</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
};
