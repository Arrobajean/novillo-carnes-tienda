
import { useState } from "react";
import { Trash, Minus, Plus, Scale } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useCart } from "@/context/CartContext";
import { formatPrice } from "@/lib/utils";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { QuantitySelector } from "@/components/ui/quantity-selector";

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
    
    if (item.weightQuantity === 0.25) return '250gr';
    if (item.weightQuantity === 0.5) return '500gr';
    if (item.weightQuantity === 1) return '1kg';
    
    return `${item.weightQuantity}kg`;
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
    <motion.div
      className="group flex flex-col py-6 border-b border-gray-700/50 transition-all duration-300 hover:bg-gray-800/30 rounded-lg px-4"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="flex items-center gap-4">
        {/* Product image */}
        <div className="flex-shrink-0 w-20 h-20 bg-[#191919] rounded-lg overflow-hidden border border-gray-700/50">
          <Link to={`/productos/${item.id}`}>
            <motion.img
              src={item.image}
              alt={item.name}
              className="w-full h-full object-cover"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
              onError={(e) => {
                e.currentTarget.src =
                  "https://placehold.co/80x80?text=Imagen+no+disponible";
              }}
            />
          </Link>
        </div>

        {/* Product details */}
        <div className="flex-grow">
          <Link
            to={`/productos/${item.id}`}
            className="text-lg font-semibold text-white hover:text-novillo-red transition-colors"
          >
            {item.name}
          </Link>
          
          {isWeightProduct && (
            <div className="flex items-center text-sm text-gray-300 mt-1">
              <Scale className="h-3 w-3 mr-1 text-novillo-gold" />
              <span>{getWeightDisplay()}</span>
            </div>
          )}
        </div>

        {/* Delete button */}
        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <Button
            variant="ghost"
            size="icon"
            className="text-gray-400 hover:text-novillo-red hover:bg-black/20 transition-all duration-300"
            onClick={() => removeItem(item.id)}
          >
            <Trash className="h-4 w-4" />
          </Button>
        </motion.div>
      </div>

      {/* Quantity controls and subtotal */}
      <div className="flex flex-wrap md:flex-nowrap items-center justify-between mt-3 px-2 gap-3">
        <div className="flex items-center">
          {!isWeightProduct && (
            <QuantitySelector
              quantity={item.quantity}
              onQuantityChange={handleQuantityChange}
              min={1}
              max={99}
            />
          )}
          
          {isWeightProduct && (
            <div className="bg-black/40 px-3 py-1.5 rounded-md border border-gray-700/50 text-gray-200 text-sm font-medium flex items-center gap-1.5">
              <Scale className="h-3.5 w-3.5 text-novillo-gold" />
              {getWeightDisplay()}
            </div>
          )}
        </div>
        
        <div className="flex flex-col items-end bg-black/20 px-3 py-1.5 rounded-md border border-gray-700/30">
          <div className="text-sm text-gray-300">
            <span className="font-medium">{getUnitPriceDisplay()}</span>
            <span className="mx-1">×</span>
            <span>{getQuantityDisplay()}</span>
          </div>
          <span className="font-semibold text-novillo-gold">
            {formatPrice(getTotalPrice())}
          </span>
        </div>
      </div>
    </motion.div>
  );
};
