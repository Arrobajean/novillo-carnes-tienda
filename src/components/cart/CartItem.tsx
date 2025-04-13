
import { useState } from "react";
import { Trash, Minus, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useCart, CartItem as CartItemType } from "@/context/CartContext";
import { formatPrice } from "@/lib/utils";
import { Link } from "react-router-dom";
import { Separator } from "@/components/ui/separator";

interface CartItemProps {
  item: CartItemType;
}

export const CartItem = ({ item }: CartItemProps) => {
  const { updateQuantity, removeItem } = useCart();
  const [isHovered, setIsHovered] = useState(false);
  
  const isWeightProduct = item.unit === 'kg' || item.unit === 'gr';

  const handleQuantityChange = (newQuantity: number) => {
    if (newQuantity < 1) return;
    updateQuantity(item.id, newQuantity);
  };
  
  // Format the weight display
  const getWeightDisplay = () => {
    if (!item.weightQuantity) return '';
    
    if (item.weightQuantity === 0.25) return '(250gr)';
    if (item.weightQuantity === 0.5) return '(500gr)';
    if (item.weightQuantity === 1) return '(1kg)';
    
    return `(${item.weightQuantity}kg)`;
  };
  
  // Calculate the total price based on product type
  const getTotalPrice = () => {
    if (isWeightProduct && item.weightQuantity) {
      return item.price * item.weightQuantity;
    }
    
    return item.price * item.quantity;
  };

  // Format unit price display
  const getUnitPriceDisplay = () => {
    if (isWeightProduct) {
      return `${formatPrice(item.price)}/kg`;
    }
    return formatPrice(item.price);
  };

  // Format quantity display
  const getQuantityDisplay = () => {
    if (isWeightProduct && item.weightQuantity) {
      if (item.weightQuantity === 0.25) return '250gr';
      if (item.weightQuantity === 0.5) return '500gr';
      if (item.weightQuantity === 1) return '1kg';
      return `${item.weightQuantity}kg`;
    }
    return `${item.quantity} unid.`;
  };

  return (
    <div
      className="group flex flex-col py-5 border-b border-[#333] transition-all duration-300 hover:bg-black/30 rounded-lg px-2"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="flex items-center">
        {/* Product image */}
        <div className="flex-shrink-0 w-20 h-20 bg-[#111] rounded overflow-hidden">
          <Link to={`/productos/${item.id}`}>
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-full object-cover"
              onError={(e) => {
                e.currentTarget.src =
                  "https://placehold.co/80x80?text=Imagen+no+disponible";
              }}
            />
          </Link>
        </div>

        {/* Product details */}
        <div className="ml-4 flex-grow">
          <Link
            to={`/productos/${item.id}`}
            className="text-lg font-semibold text-[#EEEBDD] hover:text-[#CE1212] transition-colors"
          >
            {item.name}
          </Link>
          
          <div className="text-sm text-gray-400 mt-1">
            {getUnitPriceDisplay()}
          </div>
        </div>

        {/* Delete button */}
        <Button
          variant="ghost"
          size="icon"
          className={`text-gray-400 hover:text-[#CE1212] transition-opacity duration-200 ${
            isHovered ? "opacity-100" : "opacity-0"
          }`}
          onClick={() => removeItem(item.id)}
        >
          <Trash className="h-4 w-4" />
        </Button>
      </div>

      {/* Quantity controls and subtotal */}
      <div className="flex items-center justify-between mt-4 px-2">
        <div className="flex items-center">
          {!isWeightProduct && (
            <>
              <Button
                variant="outline"
                size="icon"
                className="h-7 w-7 rounded-full border-gray-500 text-white hover:bg-[#CE1212]/80"
                onClick={() => handleQuantityChange(item.quantity - 1)}
              >
                <Minus className="h-3 w-3" />
              </Button>
              <span className="mx-2 min-w-10 text-center text-white">
                {item.quantity}
              </span>
              <Button
                variant="outline"
                size="icon"
                className="h-7 w-7 rounded-full border-gray-500 text-white hover:bg-[#CE1212]/80"
                onClick={() => handleQuantityChange(item.quantity + 1)}
              >
                <Plus className="h-3 w-3" />
              </Button>
            </>
          )}
          
          {isWeightProduct && (
            <div className="text-white text-sm">
              {item.quantity} {item.unit === 'kg' ? 'paquete' : 'unidad'}
              {item.quantity > 1 ? 's' : ''}
            </div>
          )}
        </div>
        
        <div className="flex flex-col items-end">
          <div className="text-sm text-gray-400">
            {getUnitPriceDisplay()} × {getQuantityDisplay()}
          </div>
          <span className="font-semibold text-[#CE1212]">
            {formatPrice(getTotalPrice())}
          </span>
        </div>
      </div>
    </div>
  );
};
