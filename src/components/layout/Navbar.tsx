import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { ShoppingCart, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useCart } from "@/context/CartContext";
import { motion, AnimatePresence } from "framer-motion";

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { items } = useCart();
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const totalItems = items.reduce((acc, item) => acc + item.quantity, 0);
  const isCartPage = location.pathname === "/carrito";

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

  // Close mobile menu if cart page opens and vice versa
  useEffect(() => {
    if (isCartPage) {
      setIsMenuOpen(false);
    }
  }, [isCartPage]);

  // Función para manejar el clic en el carrito
  const handleCartClick = (e) => {
    e.preventDefault(); // Prevenir el comportamiento de enlace predeterminado

    // If menu is open, close it when opening cart
    if (isMenuOpen) {
      setIsMenuOpen(false);
    }

    if (isCartPage) {
      // Si ya estamos en la página del carrito, navigamos hacia atrás
      navigate(-1);
    } else {
      // Si no, vamos a la página del carrito
      navigate("/carrito");
    }
  };

  // Función para manejar el clic en el menú hamburguesa
  const handleMenuToggle = () => {
    // If on cart page and opening menu, navigate away from cart
    if (isCartPage && !isMenuOpen) {
      navigate(-1);
    }

    setIsMenuOpen(!isMenuOpen);
  };

  // Variantes de animación para el icono del menú hamburguesa
  const iconVariants = {
    closed: { rotate: 0, scale: 1 },
    open: { rotate: 180, scale: 1 },
  };

  // Variantes para el icono del carrito/X cuando está abierto/cerrado
  const cartIconVariants = {
    cart: { rotate: 0, scale: 1 },
    close: { rotate: 90, scale: 1.1 },
  };

  return (
    <>
      <nav
        className={`sticky top-0 bg-[#000000] text-white shadow-md z-50 transition-all duration-300 ${
          isScrolled ? "py-2" : "py-3"
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            {/* Mobile menu button - Left on mobile - Animado */}
            <button
              className="md:hidden order-1 relative w-6 h-6"
              onClick={handleMenuToggle}
              aria-label={isMenuOpen ? "Cerrar menú" : "Abrir menú"}
            >
              <motion.div
                animate={isMenuOpen ? "open" : "closed"}
                variants={iconVariants}
                transition={{ duration: 0.3 }}
                className="flex items-center justify-center"
              >
                {isMenuOpen ? (
                  <X className="h-6 w-6 text-[#CE1212] transition-colors duration-300" />
                ) : (
                  <Menu className="h-6 w-6 hover:text-[#CE1212] transition-colors duration-300" />
                )}
              </motion.div>
            </button>

            {/* Logo - Centered on mobile, left on desktop - With Link to home */}
            <Link
              to="/"
              className="flex items-center md:order-1 order-2 mx-auto md:mx-0"
            >
              <motion.img
                src="/ui/logo.png"
                alt="Carnes el Novillo"
                className="h-16 w-auto" // Slightly larger logo
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-10 md:order-2">
              {["/", "/productos", "/nosotros", "/contacto"].map(
                (path, index) => (
                  <Link
                    key={index}
                    to={path}
                    className="hover:text-[#CE1212] font-medium transition-colors duration-300"
                  >
                    {["Inicio", "Productos", "Nosotros", "Contacto"][index]}
                  </Link>
                )
              )}
            </div>

            {/* Cart - Right on mobile - Animado entre carrito y X */}
            <div className="flex items-center md:order-3 order-3">
              <a href="#" onClick={handleCartClick} className="relative">
                <motion.div
                  whileTap={{ scale: 0.9 }}
                  whileHover={{ scale: 1.1 }}
                  className="relative"
                  animate={isCartPage ? "close" : "cart"}
                  variants={cartIconVariants}
                  transition={{ duration: 0.3 }}
                >
                  {isCartPage ? (
                    <X className="h-6 w-6 text-[#CE1212] transition-colors duration-300" />
                  ) : (
                    <ShoppingCart className="h-6 w-6 hover:text-[#CE1212] transition-colors duration-300" />
                  )}
                  {totalItems > 0 && !isCartPage && (
                    <motion.span
                      className="absolute -top-2 -right-2 bg-[#CE1212] text-white text-xs rounded-full h-5 w-5 flex items-center justify-center"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      key={totalItems}
                    >
                      {totalItems}
                    </motion.span>
                  )}
                </motion.div>
              </a>
            </div>
          </div>
        </div>
      </nav>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-[#000000] text-white py-4 shadow-inner px-4 backdrop-blur-sm bg-opacity-95 fixed w-full z-40"
          >
            <div className="flex flex-col items-center space-y-4">
              {["/", "/productos", "/nosotros", "/contacto"].map(
                (path, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="w-full list-none" // Added list-none to remove li::marker
                  >
                    <Link
                      to={path}
                      className="block text-center hover:text-[#CE1212] transition-colors duration-300 py-2 w-full text-lg"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {["Inicio", "Productos", "Nosotros", "Contacto"][index]}
                    </Link>
                  </motion.div>
                )
              )}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="w-full"
              >
                <Button
                  asChild
                  className="bg-[#CE1212] hover:bg-[#CE1212]/80 text-white w-full mt-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <a
                    href="#"
                    onClick={handleCartClick}
                    className="flex items-center justify-center gap-2"
                  >
                    <ShoppingCart className="h-5 w-5" /> Ver carrito
                  </a>
                </Button>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
