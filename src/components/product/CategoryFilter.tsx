import { Button } from "@/components/ui/button";
import { categories } from "@/data/products";
import { CategoryInfo } from "@/types";

interface CategoryFilterProps {
  selectedCategory: string | null;
  onSelectCategory: (category: string | null) => void;
}

export const CategoryFilter = ({
  selectedCategory,
  onSelectCategory,
}: CategoryFilterProps) => {
  return (
    <div className="mb-8 w-full max-w-5xl mx-auto">
      <h2 className="text-xl font-semibold mb-4 text-white font-sans text-center">
        Categorías
      </h2>
      <div className="flex flex-wrap justify-center gap-2">
        <Button
          onClick={() => onSelectCategory(null)}
          className={`font-sans transition-colors duration-300 ${
            selectedCategory === null
              ? "bg-[#CE1212] text-white"
              : "bg-[#1B1717] text-white hover:bg-[#CE1212]"
          }`}
        >
          Todos
        </Button>

        {categories.map((category: CategoryInfo) => {
          const isSelected = selectedCategory === category.id;
          return (
            <Button
              key={category.id}
              onClick={() => onSelectCategory(category.id)}
              className={`font-sans transition-colors duration-300 ${
                isSelected
                  ? "bg-[#CE1212] text-white"
                  : "bg-[#1B1717] text-white hover:bg-[#CE1212]"
              }`}
            >
              {category.name}
            </Button>
          );
        })}
      </div>
    </div>
  );
};
