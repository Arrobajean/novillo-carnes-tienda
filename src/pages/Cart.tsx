
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ShoppingBag, ArrowRight, ClipboardCheck, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useCart } from "@/context/CartContext";
import { CartItem } from "@/components/cart/CartItem";
import { formatPrice, generateWhatsAppUrl } from "@/lib/utils";
import { motion } from "framer-motion";

const Cart = () => {
  const { items, getTotalPrice, clearCart } = useCart();
  const totalPrice = getTotalPrice();
  const navigate = useNavigate();

  const whatsappNumber = "56912345678";

  const handleCheckout = () => {
    window.open(
      generateWhatsAppUrl(whatsappNumber, items, totalPrice),
      "_blank"
    );
  };

  const handleClose = () => {
    navigate(-1); // Navigate back
  };

  if (items.length === 0) {
    return (
      <div className="container mx-auto py-20 px-4 bg-[#1B1717] text-white min-h-screen">
        <div className="relative max-w-md mx-auto">
          <Button 
            variant="ghost" 
            className="absolute right-0 top-0 text-gray-400 hover:text-white"
            onClick={handleClose}
          >
            <X className="h-6 w-6" />
          </Button>
          
          <div className="text-center">
            <div className="bg-[#333] rounded-full p-6 w-24 h-24 mx-auto mb-6 flex items-center justify-center">
              <ShoppingBag className="h-10 w-10 text-novillo-gold" />
            </div>
            <h1 className="text-2xl font-sans font-semibold mb-4">
              Tu carrito está vacío
            </h1>
            <p className="text-gray-400 mb-8">
              Parece que aún no has agregado productos. Explora nuestro catálogo
              para encontrar los mejores cortes.
            </p>
            <Button
              asChild
              className="bg-novillo-red hover:bg-red-900 text-white"
            >
              <Link to="/productos">Ver Productos</Link>
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto py-10 px-4 bg-[#1B1717] text-white min-h-screen font-sans">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-3xl font-bold">Tu Carrito</h1>
        <Button 
          variant="ghost" 
          className="text-gray-400 hover:text-white"
          onClick={handleClose}
          aria-label="Cerrar carrito"
        >
          <X className="h-6 w-6" />
        </Button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        {/* Cart Items */}
        <div className="lg:col-span-2">
          <div className="bg-black rounded-lg shadow-md p-6">
            <div className="border-b border-gray-700 pb-4 mb-4">
              <h2 className="text-xl font-semibold">
                Productos ({items.length})
              </h2>
            </div>

            <div className="divide-y divide-gray-700">
              {items.map((item) => (
                <CartItem key={item.id} item={item} />
              ))}
            </div>

            <div className="mt-6 text-right">
              <Button
                variant="outline"
                className="border border-gray-600 text-gray-400 hover:text-white"
                onClick={clearCart}
              >
                Vaciar Carrito
              </Button>
            </div>
          </div>
        </div>

        {/* Order Summary */}
        <div className="lg:col-span-1">
          <motion.div 
            className="bg-black rounded-lg shadow-md p-6 sticky top-24"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            <h2 className="text-xl font-semibold mb-4">Resumen del Pedido</h2>

            <div className="space-y-3 mb-6">
              <div className="flex justify-between text-gray-400">
                <span>Subtotal</span>
                <span>{formatPrice(totalPrice)}</span>
              </div>

              <div className="border-t border-gray-700 pt-3 flex justify-between text-xl font-semibold">
                <span>Total</span>
                <span className="text-novillo-red">
                  {formatPrice(totalPrice)}
                </span>
              </div>
            </div>

            <Button
              className="w-full bg-novillo-red hover:bg-red-900 text-white text-lg py-6 mb-4"
              onClick={handleCheckout}
            >
              Finalizar Compra
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>

            <div className="text-gray-400 text-sm">
              <p className="flex items-start mb-2">
                <ClipboardCheck className="h-5 w-5 mr-2 shrink-0 text-novillo-gold" />
                <span>
                  Serás redirigido a WhatsApp para confirmar tu pedido con
                  nosotros.
                </span>
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
