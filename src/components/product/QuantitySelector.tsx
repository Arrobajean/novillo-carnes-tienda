
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Minus, Plus } from "lucide-react";

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
  
  if (isCombo) {
    return null; // No selector for combos
  }

  // Weight-based products (kg, gr)
  if (unit === "kg" || unit === "gr") {
    return (
      <div className="mt-3">
        <p className="mb-2 text-sm text-gray-300">Seleccione cantidad:</p>
        <div className="flex flex-wrap gap-2">
          <Button 
            variant="outline" 
            onClick={() => onQuantityChange(0.25)}
            className="bg-black hover:bg-gray-900 text-white border-gray-600"
          >
            250gr
          </Button>
          <Button 
            variant="outline"
            onClick={() => onQuantityChange(0.5)}
            className="bg-black hover:bg-gray-900 text-white border-gray-600"
          >
            500gr
          </Button>
          <Button 
            variant="outline"
            onClick={() => onQuantityChange(1)}
            className="bg-black hover:bg-gray-900 text-white border-gray-600"
          >
            1kg
          </Button>
        </div>
      </div>
    );
  }
  
  // Unit-based products
  return (
    <div className="mt-3">
      <p className="mb-2 text-sm text-gray-300">Cantidad:</p>
      <div className="flex items-center">
        <Button 
          variant="outline" 
          size="icon"
          onClick={() => {
            const newValue = Math.max(1, customQuantity - 1);
            setCustomQuantity(newValue);
            onQuantityChange(newValue);
          }}
          className="h-9 w-9 bg-black hover:bg-gray-900 text-white border-gray-600"
        >
          <Minus className="h-4 w-4" />
        </Button>
        <Input 
          type="number" 
          min="1"
          value={customQuantity}
          onChange={(e) => {
            const value = Math.max(1, parseInt(e.target.value) || 1);
            setCustomQuantity(value);
            onQuantityChange(value);
          }}
          className="w-16 mx-2 text-center bg-black text-white border-gray-600"
        />
        <Button 
          variant="outline" 
          size="icon"
          onClick={() => {
            const newValue = customQuantity + 1;
            setCustomQuantity(newValue);
            onQuantityChange(newValue);
          }}
          className="h-9 w-9 bg-black hover:bg-gray-900 text-white border-gray-600"
        >
          <Plus className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
};
