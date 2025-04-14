
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ShoppingBag, ArrowRight, ClipboardCheck, Trash, Scale, PackageOpen } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useCart } from "@/context/CartContext";
import { CartItem } from "@/components/cart/CartItem";
import { formatPrice, generateWhatsAppUrl } from "@/lib/utils";
import { motion } from "framer-motion";
import { Separator } from "@/components/ui/separator";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";

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
    
    // Create result components
    const parts = [];
    
    if (totalKilos > 0) {
      parts.push(
        <div key="kilos" className="flex items-center gap-1.5 text-gray-300">
          <Scale className="h-4 w-4 text-novillo-gold" />
          <span>{totalKilos.toFixed(2)}kg</span>
        </div>
      );
    }
    
    if (totalUnits > 0) {
      parts.push(
        <div key="units" className="flex items-center gap-1.5 text-gray-300">
          <PackageOpen className="h-4 w-4 text-novillo-gold" />
          <span>{totalUnits} unidades</span>
        </div>
      );
    }
    
    return (
      <div className="flex flex-wrap items-center gap-3 mt-1">
        {parts}
      </div>
    );
  };

  if (items.length === 0) {
    return (
      <div className="container mx-auto py-20 px-4 bg-[#1B1717] text-white min-h-screen">
        <div className="relative max-w-md mx-auto">
          <div className="text-center">
            <motion.div 
              className="bg-[#222] rounded-full p-6 w-24 h-24 mx-auto mb-6 flex items-center justify-center border border-gray-700/30"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, type: "spring" }}
            >
              <ShoppingBag className="h-10 w-10 text-novillo-gold" />
            </motion.div>
            <h1 className="text-2xl font-sans font-semibold mb-4">
              Tu carrito está vacío
            </h1>
            <p className="text-gray-400 mb-8">
              Parece que aún no has agregado productos. Explora nuestro catálogo
              para encontrar los mejores cortes.
            </p>
            <Button
              asChild
              className="bg-novillo-gold hover:bg-amber-500 text-black font-medium"
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
      <motion.h1 
        className="text-3xl font-bold mb-6 flex items-center gap-2"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
      >
        <ShoppingBag className="h-7 w-7 text-novillo-gold" />
        Tu Carrito
      </motion.h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Cart Items */}
        <div className="lg:col-span-2">
          <Card className="bg-[#111]/80 backdrop-blur-sm rounded-lg shadow-xl border border-gray-800 overflow-hidden">
            <CardHeader className="border-b border-gray-700/50 pb-4">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-xl font-semibold flex items-center gap-2">
                    <span>Productos ({items.length})</span>
                  </h2>
                  {calculateTotalQuantity()}
                </div>
              </div>
            </CardHeader>

            <CardContent className="pt-4 space-y-1">
              {items.map((item) => (
                <CartItem key={item.id} item={item} />
              ))}
            </CardContent>

            <CardFooter className="pt-4 pb-6 flex justify-center">
              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Button
                  variant="outline"
                  className="border border-novillo-gold/70 bg-black/40 text-novillo-gold hover:bg-novillo-gold/20 hover:text-white flex items-center gap-2 transition-all duration-300 font-medium"
                  onClick={clearCart}
                >
                  <Trash className="h-4 w-4" />
                  <span>Vaciar Carrito</span>
                </Button>
              </motion.div>
            </CardFooter>
          </Card>
        </div>

        {/* Order Summary */}
        <div className="lg:col-span-1">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Card className="bg-[#111]/80 backdrop-blur-sm rounded-lg shadow-xl border border-gray-800 sticky top-24 overflow-hidden">
              <CardHeader className="border-b border-gray-700/50">
                <h2 className="text-xl font-semibold">Resumen del Pedido</h2>
              </CardHeader>
              
              <CardContent className="pt-6">
                <div className="space-y-5">
                  <div className="flex justify-between text-gray-300">
                    <span>Subtotal</span>
                    <span className="font-medium">{formatPrice(totalPrice)}</span>
                  </div>

                  <Separator className="bg-gray-700/50 my-2" />

                  <div className="flex justify-between items-center">
                    <span className="text-lg text-white font-medium">Total</span>
                    <motion.span 
                      className="text-novillo-gold text-2xl font-bold"
                      initial={{ scale: 1 }}
                      animate={{ scale: [1, 1.05, 1] }}
                      transition={{ duration: 0.5, repeat: 0, repeatType: "reverse" }}
                    >
                      {formatPrice(totalPrice)}
                    </motion.span>
                  </div>
                </div>
              </CardContent>

              <CardFooter className="flex-col space-y-5 pt-2 pb-6">
                <motion.div 
                  className="w-full"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Button
                    className="w-full bg-gradient-to-r from-novillo-gold to-amber-500 hover:from-amber-500 hover:to-novillo-gold text-black font-medium text-lg py-6 shadow-lg shadow-amber-900/20 transition-all duration-300"
                    onClick={handleCheckout}
                  >
                    Finalizar Compra
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </motion.div>

                <div className="text-gray-400 text-sm">
                  <p className="flex items-start">
                    <ClipboardCheck className="h-5 w-5 mr-2 shrink-0 text-novillo-gold" />
                    <span>
                      Serás redirigido a WhatsApp para confirmar tu pedido con
                      nosotros.
                    </span>
                  </p>
                </div>
              </CardFooter>
            </Card>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
