
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Minus, Plus, Scale } from "lucide-react";
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
    useEffect(() => {
      // Select 1kg by default when component mounts
      if (selectedOption === null) {
        setSelectedOption(1);
        onQuantityChange(1);
      }
    }, []);

    const weightOptions = [
      { value: 0.25, label: '250gr' },
      { value: 0.5, label: '500gr' },
      { value: 1, label: '1kg' }
    ];

    return (
      <div className="mt-3">
        <p className="mb-2 text-sm text-gray-300 flex items-center gap-1">
          <Scale className="h-4 w-4 text-novillo-gold" />
          Seleccione cantidad:
        </p>
        <div className="flex flex-wrap gap-2">
          {weightOptions.map((option) => (
            <motion.div 
              key={option.value}
              whileHover={{ scale: 1.05 }} 
              whileTap={{ scale: 0.95 }}
            >
              <Button 
                variant="outline" 
                onClick={() => {
                  setSelectedOption(option.value);
                  onQuantityChange(option.value);
                }}
                className={`bg-black hover:bg-gray-800 transition-all duration-300 
                ${selectedOption === option.value 
                  ? 'border-novillo-gold text-novillo-gold ring-2 ring-novillo-gold/50' 
                  : 'text-white border-gray-600'}`}
              >
                {option.label}
              </Button>
            </motion.div>
          ))}
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
            className="h-9 w-9 bg-black hover:bg-gray-800 text-white border-gray-600 hover:border-novillo-gold hover:text-novillo-gold transition-all duration-300"
          >
            <Minus className="h-4 w-4" />
          </Button>
        </motion.div>
        
        <motion.div
          whileTap={{ scale: 0.97 }}
          transition={{ duration: 0.1 }}
          className="mx-2 w-16"
        >
          <Input 
            type="number" 
            min="1"
            value={customQuantity}
            onChange={(e) => {
              const value = Math.max(1, parseInt(e.target.value) || 1);
              setCustomQuantity(value);
              onQuantityChange(value);
            }}
            className="w-full text-center bg-black text-white border-gray-600 focus:border-novillo-gold focus:ring-1 focus:ring-novillo-gold/50"
          />
        </motion.div>
        
        <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
          <Button 
            variant="outline" 
            size="icon"
            onClick={() => {
              const newValue = customQuantity + 1;
              setCustomQuantity(newValue);
              onQuantityChange(newValue);
            }}
            className="h-9 w-9 bg-black hover:bg-gray-800 text-white border-gray-600 hover:border-novillo-gold hover:text-novillo-gold transition-all duration-300"
          >
            <Plus className="h-4 w-4" />
          </Button>
        </motion.div>
      </div>
    </div>
  );
};
