import { Link } from "react-router-dom";
import { ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useCart } from "@/context/CartContext";
import { Product } from "@/types";
import { formatPrice } from "@/lib/utils";

interface ProductCardProps {
  product: Product;
}

export const ProductCard = ({ product }: ProductCardProps) => {
  const { addItem } = useCart();

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    addItem(product, 1);
  };

  return (
    <div
      className="product-card group bg-black text-[#EEEBDD] shadow-md hover:shadow-lg transition-shadow duration-300 rounded-lg overflow-hidden"
      aria-label={`Producto: ${product.name}`}
    >
      <Link to={`/productos/${product.id}`} className="block">
        {/* Imagen con hover-zoom y overlay oscuro */}
        <div className="relative h-64 overflow-hidden">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            onError={(e) => {
              e.currentTarget.src =
                "https://placehold.co/400x300?text=Imagen+no+disponible";
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>

        {/* Contenido textual */}
        <div className="p-4">
          <h3 className="text-lg font-semibold mb-1 text-white transition-transform duration-300 group-hover:scale-[1.02]">
            {product.name}
          </h3>

          <p className="text-sm text-[#CCC] mb-2 line-clamp-2">
            {product.description}
          </p>

          <div className="flex items-center justify-between mt-4">
            <span className="font-semibold text-novillo-red">
              {formatPrice(product.price)}{" "}
              <span className="text-sm text-[#AAA]">/ {product.unit}</span>
            </span>

            <Button
              size="sm"
              className="bg-novillo-red hover:bg-novillo-dark text-white transition-colors"
              onClick={handleAddToCart}
              aria-label={`Agregar ${product.name} al carrito`}
            >
              <ShoppingCart className="h-4 w-4 mr-1" />
              Agregar
            </Button>
          </div>
        </div>
      </Link>
    </div>
  );
};
