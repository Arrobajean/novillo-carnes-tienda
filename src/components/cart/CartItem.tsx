
import { useState } from 'react';
import { Trash, Minus, Plus } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useCart, CartItem as CartItemType } from '@/context/CartContext';
import { formatPrice } from '@/lib/utils';
import { Link } from 'react-router-dom';

interface CartItemProps {
  item: CartItemType;
}

export const CartItem = ({ item }: CartItemProps) => {
  const { updateQuantity, removeItem } = useCart();
  const [isHovered, setIsHovered] = useState(false);

  const handleQuantityChange = (newQuantity: number) => {
    if (newQuantity < 1) return;
    updateQuantity(item.id, newQuantity);
  };

  return (
    <div 
      className="flex items-center py-4 border-b"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="flex-shrink-0 w-20 h-20 bg-gray-100 rounded overflow-hidden">
        <Link to={`/productos/${item.id}`}>
          <img 
            src={item.image} 
            alt={item.name} 
            className="w-full h-full object-cover"
            onError={(e) => {
              e.currentTarget.src = 'https://placehold.co/80x80?text=Imagen+no+disponible';
            }}
          />
        </Link>
      </div>
      
      <div className="ml-4 flex-grow">
        <Link to={`/productos/${item.id}`} className="text-lg font-semibold text-gray-800 hover:text-novillo-red">
          {item.name}
        </Link>
        <div className="text-sm text-gray-500 mb-1">
          {formatPrice(item.price)} / {item.unit || 'unidad'}
        </div>
        
        <div className="flex items-center justify-between mt-2">
          <div className="flex items-center">
            <Button 
              variant="outline" 
              size="icon" 
              className="h-7 w-7 rounded-full"
              onClick={() => handleQuantityChange(item.quantity - 1)}
            >
              <Minus className="h-3 w-3" />
            </Button>
            <span className="mx-2 min-w-10 text-center">{item.quantity}</span>
            <Button 
              variant="outline" 
              size="icon" 
              className="h-7 w-7 rounded-full"
              onClick={() => handleQuantityChange(item.quantity + 1)}
            >
              <Plus className="h-3 w-3" />
            </Button>
          </div>
          
          <div className="flex items-center">
            <span className="font-semibold text-novillo-red mr-3">
              {formatPrice(item.price * item.quantity)}
            </span>
            <Button 
              variant="ghost" 
              size="icon" 
              className={`text-gray-500 hover:text-red-500 transition-opacity ${isHovered ? 'opacity-100' : 'opacity-0'}`}
              onClick={() => removeItem(item.id)}
            >
              <Trash className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
