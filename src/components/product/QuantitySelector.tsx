
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Minus, Plus } from "lucide-react";
import { motion } from "framer-motion";

interface QuantitySelectorProps {
  unit?: string;
  onQuantityChange: (amount: number) => void;
  isCombo?: boolean;
}

export const ProductQuantitySelector = ({
  unit = "kg",
  onQuantityChange,
  isCombo = false
}: QuantitySelectorProps) => {
  const [customQuantity, setCustomQuantity] = useState(1);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  
  if (isCombo) {
    // Empty placeholder for combos to maintain consistent card height
    return (
      <div className="mt-3">
        <p className="mb-2 text-sm text-gray-300">Pack completo</p>
        <div className="h-[42px]"></div>
      </div>
    );
  }

  // Weight-based products (kg, gr)
  if (unit === "kg" || unit === "gr") {
    return (
      <div className="mt-3">
        <p className="mb-2 text-sm text-gray-300">Seleccione cantidad:</p>
        <div className="flex flex-wrap gap-2">
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button 
              variant="outline" 
              onClick={() => {
                setSelectedOption(0.25);
                onQuantityChange(0.25);
              }}
              className={`bg-black hover:bg-gray-800 text-white border-gray-600 transition-all duration-300 
              ${selectedOption === 0.25 ? 'border-novillo-gold text-novillo-gold ring-1 ring-novillo-gold/50' : ''}`}
            >
              250gr
            </Button>
          </motion.div>
          
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button 
              variant="outline"
              onClick={() => {
                setSelectedOption(0.5);
                onQuantityChange(0.5);
              }}
              className={`bg-black hover:bg-gray-800 text-white border-gray-600 transition-all duration-300 
              ${selectedOption === 0.5 ? 'border-novillo-gold text-novillo-gold ring-1 ring-novillo-gold/50' : ''}`}
            >
              500gr
            </Button>
          </motion.div>
          
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button 
              variant="outline"
              onClick={() => {
                setSelectedOption(1);
                onQuantityChange(1);
              }}
              className={`bg-black hover:bg-gray-800 text-white border-gray-600 transition-all duration-300 
              ${selectedOption === 1 ? 'border-novillo-gold text-novillo-gold ring-1 ring-novillo-gold/50' : ''}`}
            >
              1kg
            </Button>
          </motion.div>
        </div>
      </div>
    );
  }
  
  // Unit-based products
  return (
    <div className="mt-3">
      <p className="mb-2 text-sm text-gray-300">Cantidad:</p>
      <div className="flex items-center">
        <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
          <Button 
            variant="outline" 
            size="icon"
            onClick={() => {
              const newValue = Math.max(1, customQuantity - 1);
              setCustomQuantity(newValue);
              onQuantityChange(newValue);
            }}
            className="h-9 w-9 bg-black hover:bg-gray-800 text-white border-gray-600 transition-all duration-300"
          >
            <Minus className="h-4 w-4" />
          </Button>
        </motion.div>
        
        <Input 
          type="number" 
          min="1"
          value={customQuantity}
          onChange={(e) => {
            const value = Math.max(1, parseInt(e.target.value) || 1);
            setCustomQuantity(value);
            onQuantityChange(value);
          }}
          className="w-16 mx-2 text-center bg-black text-white border-gray-600 focus:border-novillo-gold focus:ring-1 focus:ring-novillo-gold/50"
        />
        
        <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
          <Button 
            variant="outline" 
            size="icon"
            onClick={() => {
              const newValue = customQuantity + 1;
              setCustomQuantity(newValue);
              onQuantityChange(newValue);
            }}
            className="h-9 w-9 bg-black hover:bg-gray-800 text-white border-gray-600 transition-all duration-300"
          >
            <Plus className="h-4 w-4" />
          </Button>
        </motion.div>
      </div>
    </div>
  );
};
