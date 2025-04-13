
import React, { createContext, useContext, useReducer, useEffect } from 'react';
import { Product } from '@/types';
import { toast } from '@/components/ui/use-toast';

// Types
export interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
  image: string;
  unit?: string;
  // Para productos con unidad de peso, almacenamos la cantidad en kg
  weightQuantity?: number;
}

interface CartState {
  items: CartItem[];
}

type CartAction =
  | { type: 'ADD_ITEM'; payload: Product; quantity: number }
  | { type: 'REMOVE_ITEM'; payload: { id: number } }
  | { type: 'UPDATE_QUANTITY'; payload: { id: number; quantity: number } }
  | { type: 'CLEAR_CART' };

interface CartContextType extends CartState {
  addItem: (product: Product, quantity: number) => void;
  removeItem: (id: number) => void;
  updateQuantity: (id: number, quantity: number) => void;
  clearCart: () => void;
  getTotalPrice: () => number;
}

// Create context
const CartContext = createContext<CartContextType | undefined>(undefined);

// Reducer function
const cartReducer = (state: CartState, action: CartAction): CartState => {
  switch (action.type) {
    case 'ADD_ITEM': {
      const existingItemIndex = state.items.findIndex(
        (item) => item.id === action.payload.id
      );

      // Determinar si el producto se vende por peso
      const isWeightProduct = action.payload.unit === 'kg' || action.payload.unit === 'gr';
      
      if (existingItemIndex >= 0) {
        // Item exists, update quantity
        const updatedItems = [...state.items];
        
        // Si es un producto de peso, podemos sumar las cantidades
        if (isWeightProduct) {
          updatedItems[existingItemIndex] = {
            ...updatedItems[existingItemIndex],
            quantity: updatedItems[existingItemIndex].quantity + 1,
            weightQuantity: (updatedItems[existingItemIndex].weightQuantity || 0) + action.quantity
          };
        } else {
          // Para productos por unidad, incrementamos la cantidad
          updatedItems[existingItemIndex] = {
            ...updatedItems[existingItemIndex],
            quantity: updatedItems[existingItemIndex].quantity + action.quantity,
          };
        }
        
        return { ...state, items: updatedItems };
      } else {
        // New item
        return {
          ...state,
          items: [
            ...state.items,
            {
              id: action.payload.id,
              name: action.payload.name,
              price: action.payload.price,
              image: action.payload.image,
              quantity: isWeightProduct ? 1 : action.quantity, // Si es por peso, la cantidad es 1 (1 ítem)
              weightQuantity: isWeightProduct ? action.quantity : undefined, // Si es por peso, guardamos la cantidad en kg
              unit: action.payload.unit,
            },
          ],
        };
      }
    }
    case 'REMOVE_ITEM':
      return {
        ...state,
        items: state.items.filter((item) => item.id !== action.payload.id),
      };
    case 'UPDATE_QUANTITY': {
      const { id, quantity } = action.payload;
      return {
        ...state,
        items: state.items.map((item) =>
          item.id === id ? { ...item, quantity } : item
        ),
      };
    }
    case 'CLEAR_CART':
      return { ...state, items: [] };
    default:
      return state;
  }
};

// Initial state from localStorage if available
const getInitialState = (): CartState => {
  if (typeof window === 'undefined') {
    return { items: [] };
  }
  
  try {
    const storedCart = localStorage.getItem('cart');
    return storedCart ? JSON.parse(storedCart) : { items: [] };
  } catch (error) {
    console.error('Error loading cart from localStorage', error);
    return { items: [] };
  }
};

// Provider component
export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, getInitialState());

  // Save to localStorage when cart changes
  useEffect(() => {
    try {
      localStorage.setItem('cart', JSON.stringify(state));
    } catch (error) {
      console.error('Error saving cart to localStorage', error);
    }
  }, [state]);

  // Actions
  const addItem = (product: Product, quantity: number) => {
    dispatch({ type: 'ADD_ITEM', payload: product, quantity });
    
    // Mensaje personalizado según el tipo de producto
    const isWeightProduct = product.unit === 'kg' || product.unit === 'gr';
    let qtyMessage = "";
    
    if (isWeightProduct) {
      qtyMessage = ` (${quantity === 1 ? '1kg' : quantity === 0.5 ? '500gr' : '250gr'})`;
    } else if (quantity > 1) {
      qtyMessage = ` (${quantity} unidades)`;
    }
    
    toast({
      title: "Producto agregado",
      description: `${product.name}${qtyMessage} agregado al carrito`,
    });
  };

  const removeItem = (id: number) => {
    dispatch({ type: 'REMOVE_ITEM', payload: { id } });
    toast({
      title: "Producto eliminado",
      description: "Producto eliminado del carrito",
    });
  };

  const updateQuantity = (id: number, quantity: number) => {
    dispatch({ type: 'UPDATE_QUANTITY', payload: { id, quantity } });
  };

  const clearCart = () => {
    dispatch({ type: 'CLEAR_CART' });
  };

  const getTotalPrice = () => {
    return state.items.reduce(
      (total, item) => {
        // Si es un producto por peso, calculamos el precio basado en el peso seleccionado
        if (item.weightQuantity !== undefined) {
          return total + item.price * item.weightQuantity;
        }
        // Para productos por unidad o combos
        return total + item.price * item.quantity;
      },
      0
    );
  };

  return (
    <CartContext.Provider
      value={{
        ...state,
        addItem,
        removeItem,
        updateQuantity,
        clearCart,
        getTotalPrice,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

// Hook for using the context
export const useCart = () => {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};
