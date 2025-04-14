
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ShoppingBag, ArrowRight, ClipboardCheck, Trash } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useCart } from "@/context/CartContext";
import { CartItem } from "@/components/cart/CartItem";
import { formatPrice, generateWhatsAppUrl } from "@/lib/utils";
import { motion } from "framer-motion";
import { Separator } from "@/components/ui/separator";

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
  
  // Calculate total weight/quantity
  const calculateTotalQuantity = () => {
    let totalKilos = 0;
    let totalUnits = 0;
    
    items.forEach(item => {
      if (item.unit === 'kg' || item.unit === 'gr') {
        // Convert to kilos if needed
        if (item.weightQuantity) {
          totalKilos += item.weightQuantity;
        }
      } else {
        totalUnits += item.quantity;
      }
    });
    
    // Create formatted result
    const parts = [];
    if (totalKilos > 0) {
      parts.push(`${totalKilos.toFixed(2)}kg`);
    }
    if (totalUnits > 0) {
      parts.push(`${totalUnits} unidades`);
    }
    
    return parts.join(' y ');
  };

  if (items.length === 0) {
    return (
      <div className="container mx-auto py-20 px-4 bg-[#1B1717] text-white min-h-screen">
        <div className="relative max-w-md mx-auto">
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
      <h1 className="text-3xl font-bold mb-6">Tu Carrito</h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        {/* Cart Items */}
        <div className="lg:col-span-2">
          <div className="bg-black/80 backdrop-blur-sm rounded-lg shadow-xl border border-gray-800 p-6">
            <div className="border-b border-gray-700 pb-4 mb-4">
              <h2 className="text-xl font-semibold flex items-center gap-2">
                <ShoppingBag className="h-5 w-5 text-novillo-gold" />
                <span>Productos ({items.length})</span>
                {calculateTotalQuantity() && (
                  <span className="text-sm text-gray-400 ml-2">
                    Total: {calculateTotalQuantity()}
                  </span>
                )}
              </h2>
            </div>

            <div className="space-y-1">
              {items.map((item) => (
                <CartItem key={item.id} item={item} />
              ))}
            </div>

            <div className="mt-8 flex justify-center">
              <Button
                variant="outline"
                className="border border-novillo-gold text-novillo-gold hover:bg-novillo-gold/20 hover:text-white flex items-center gap-2 transition-all duration-300"
                onClick={clearCart}
              >
                <Trash className="h-4 w-4" />
                <span>Vaciar Carrito</span>
              </Button>
            </div>
          </div>
        </div>

        {/* Order Summary */}
        <div className="lg:col-span-1">
          <motion.div 
            className="bg-black/80 backdrop-blur-sm rounded-lg shadow-xl border border-gray-800 p-6 sticky top-24"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            <h2 className="text-xl font-semibold mb-4">Resumen del Pedido</h2>

            <div className="space-y-4 mb-8">
              <div className="flex justify-between text-gray-400">
                <span>Subtotal</span>
                <span>{formatPrice(totalPrice)}</span>
              </div>

              <Separator className="bg-gray-800 my-2" />

              <div className="flex justify-between text-xl font-bold">
                <span className="text-white">Total</span>
                <span className="text-novillo-gold text-2xl">
                  {formatPrice(totalPrice)}
                </span>
              </div>
            </div>

            <div className="space-y-4">
              <Button
                className="w-full bg-novillo-red hover:bg-red-900 text-white text-lg py-6 shadow-lg shadow-red-900/30 transition-all duration-300"
                onClick={handleCheckout}
              >
                Finalizar Compra
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>

              <div className="text-gray-400 text-sm">
                <p className="flex items-start mb-4">
                  <ClipboardCheck className="h-5 w-5 mr-2 shrink-0 text-novillo-gold" />
                  <span>
                    Serás redirigido a WhatsApp para confirmar tu pedido con
                    nosotros.
                  </span>
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
