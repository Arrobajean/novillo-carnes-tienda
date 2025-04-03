
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag, ArrowRight, ClipboardCheck } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useCart } from '@/context/CartContext';
import { CartItem } from '@/components/cart/CartItem';
import { formatPrice, generateWhatsAppUrl } from '@/lib/utils';

const Cart = () => {
  const { items, getTotalPrice, clearCart } = useCart();
  const totalPrice = getTotalPrice();
  
  // WhatsApp phone number (example format: 56912345678)
  const whatsappNumber = "56912345678";

  const handleCheckout = () => {
    // You could add analytics tracking here
    window.open(
      generateWhatsAppUrl(whatsappNumber, items, totalPrice),
      '_blank'
    );
  };

  if (items.length === 0) {
    return (
      <div className="container mx-auto py-20 px-4">
        <div className="text-center max-w-md mx-auto">
          <div className="bg-gray-100 rounded-full p-6 w-24 h-24 mx-auto mb-6 flex items-center justify-center">
            <ShoppingBag className="h-10 w-10 text-gray-400" />
          </div>
          <h1 className="text-2xl font-serif font-semibold mb-4">Tu carrito está vacío</h1>
          <p className="text-gray-600 mb-8">
            Parece que aún no has agregado productos a tu carrito. Explora nuestro catálogo para encontrar los mejores cortes.
          </p>
          <Button asChild className="bg-novillo-red hover:bg-red-900 text-white">
            <Link to="/productos">Ver Productos</Link>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto py-10 px-4">
      <h1 className="text-3xl font-serif font-bold mb-6">Tu Carrito</h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        {/* Cart Items */}
        <div className="lg:col-span-2">
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="border-b pb-4 mb-4">
              <h2 className="text-xl font-semibold">Productos ({items.length})</h2>
            </div>
            
            <div className="divide-y">
              {items.map((item) => (
                <CartItem key={item.id} item={item} />
              ))}
            </div>
            
            <div className="mt-6 text-right">
              <Button 
                variant="outline" 
                className="text-gray-500"
                onClick={clearCart}
              >
                Vaciar Carrito
              </Button>
            </div>
          </div>
        </div>
        
        {/* Order Summary */}
        <div className="lg:col-span-1">
          <div className="bg-white rounded-lg shadow-md p-6 sticky top-24">
            <h2 className="text-xl font-semibold font-serif mb-4">Resumen del Pedido</h2>
            
            <div className="space-y-3 mb-6">
              <div className="flex justify-between text-gray-600">
                <span>Subtotal</span>
                <span>{formatPrice(totalPrice)}</span>
              </div>
              
              <div className="border-t pt-3 flex justify-between text-xl font-semibold">
                <span>Total</span>
                <span className="text-novillo-red">{formatPrice(totalPrice)}</span>
              </div>
            </div>
            
            <Button 
              className="w-full bg-novillo-red hover:bg-red-900 text-white text-lg py-6 mb-4"
              onClick={handleCheckout}
            >
              Finalizar Compra
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            
            <div className="text-gray-600 text-sm">
              <p className="flex items-start mb-2">
                <ClipboardCheck className="h-5 w-5 mr-2 shrink-0 text-novillo-gold" />
                <span>Al finalizar serás redirigido a WhatsApp para confirmar tu pedido</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
