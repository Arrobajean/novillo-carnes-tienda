
import { Minus, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

interface QuantitySelectorProps {
  quantity: number;
  onQuantityChange: (quantity: number) => void;
  min?: number;
  max?: number;
}

export function QuantitySelector({
  quantity,
  onQuantityChange,
  min = 1,
  max = 99,
}: QuantitySelectorProps) {
  const handleDecrease = () => {
    if (quantity > min) {
      onQuantityChange(quantity - 1);
    }
  };

  const handleIncrease = () => {
    if (quantity < max) {
      onQuantityChange(quantity + 1);
    }
  };

  return (
    <div className="flex items-center">
      <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
        <Button
          variant="outline"
          size="icon"
          className="h-10 w-10 rounded-l-md rounded-r-none bg-black hover:bg-gray-800 border-gray-600 transition-all duration-300"
          onClick={handleDecrease}
          disabled={quantity <= min}
        >
          <Minus className="h-4 w-4" />
        </Button>
      </motion.div>
      
      <div className="h-10 w-12 flex items-center justify-center border-y border-input bg-black text-white">
        {quantity}
      </div>
      
      <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
        <Button
          variant="outline"
          size="icon"
          className="h-10 w-10 rounded-r-md rounded-l-none bg-black hover:bg-gray-800 border-gray-600 transition-all duration-300"
          onClick={handleIncrease}
          disabled={quantity >= max}
        >
          <Plus className="h-4 w-4" />
        </Button>
      </motion.div>
    </div>
  );
}
