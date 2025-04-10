
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ShoppingCart, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useCart } from "@/context/CartContext";
import { motion, AnimatePresence } from "framer-motion";

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { items } = useCart();
  const [isScrolled, setIsScrolled] = useState(false);

  const totalItems = items.reduce((acc, item) => acc + item.quantity, 0);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`sticky top-0 bg-[#000000] text-white shadow-md z-50 transition-all duration-300 ${
      isScrolled ? "py-2" : "py-3"
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Mobile menu button - Left on mobile */}
          <button
            className="md:hidden order-1"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? "Cerrar menú" : "Abrir menú"}
          >
            {isMenuOpen ? (
              <X className="h-6 w-6 hover:text-[#CE1212] transition-colors duration-300" />
            ) : (
              <Menu className="h-6 w-6 hover:text-[#CE1212] transition-colors duration-300" />
            )}
          </button>

          {/* Logo - Centered on mobile */}
          <Link to="/" className="flex items-center md:order-1 order-2 mx-auto md:mx-0">
            <motion.img
              src="/lovable-uploads/ad88ae2f-4290-481b-9136-cd76d4c7eac1.png"
              alt="Carnes el Novillo"
              className="h-16 w-auto" // Slightly larger logo
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-10 md:order-2">
            {["/", "/productos", "/nosotros", "/contacto"].map((path, index) => (
              <Link
                key={index}
                to={path}
                className="hover:text-[#CE1212] font-medium transition-colors duration-300"
              >
                {["Inicio", "Productos", "Nosotros", "Contacto"][index]}
              </Link>
            ))}
          </div>

          {/* Cart - Right on mobile */}
          <div className="flex items-center md:order-3 order-3">
            <Link to="/carrito" className="relative">
              <ShoppingCart className="h-6 w-6 hover:text-[#CE1212] transition-colors duration-300" />
              {totalItems > 0 && (
                <span className="absolute -top-2 -right-2 bg-[#CE1212] text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {totalItems}
                </span>
              )}
            </Link>
          </div>
        </div>
      </div>

      {/* Mobile Navigation - Animated */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-[#000000] text-white py-4 shadow-inner px-4 backdrop-blur-sm bg-opacity-95"
          >
            <div className="flex flex-col items-center space-y-4">
              {["/", "/productos", "/nosotros", "/contacto"].map((path, index) => (
                <Link
                  key={index}
                  to={path}
                  className="block text-center hover:text-[#CE1212] transition-colors duration-300 py-2 w-full text-lg"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {["Inicio", "Productos", "Nosotros", "Contacto"][index]}
                </Link>
              ))}
              <Button
                asChild
                className="bg-[#CE1212] hover:bg-[#CE1212]/80 text-white w-full mt-2"
                onClick={() => setIsMenuOpen(false)}
              >
                <Link to="/carrito" className="flex items-center justify-center gap-2">
                  <ShoppingCart className="h-5 w-5" /> Ver carrito
                </Link>
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
