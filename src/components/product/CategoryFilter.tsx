
import { Button } from '@/components/ui/button';
import { categories } from '@/data/products';
import { CategoryInfo } from '@/types';

interface CategoryFilterProps {
  selectedCategory: string | null;
  onSelectCategory: (category: string | null) => void;
}

export const CategoryFilter = ({ selectedCategory, onSelectCategory }: CategoryFilterProps) => {
  return (
    <div className="mb-8">
      <h2 className="text-xl font-serif font-semibold mb-4">Categorías</h2>
      <div className="flex flex-wrap gap-2">
        <Button
          variant={selectedCategory === null ? "default" : "outline"}
          className={selectedCategory === null ? "bg-novillo-red text-white" : ""}
          onClick={() => onSelectCategory(null)}
        >
          Todos
        </Button>
        {categories.map((category: CategoryInfo) => (
          <Button
            key={category.id}
            variant={selectedCategory === category.id ? "default" : "outline"}
            className={selectedCategory === category.id ? "bg-novillo-red text-white" : ""}
            onClick={() => onSelectCategory(category.id)}
          >
            {category.name}
          </Button>
        ))}
      </div>
    </div>
  );
};
