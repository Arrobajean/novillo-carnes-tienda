import { useState } from "react";
import { Link } from "react-router-dom";
import { ShoppingCart, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useCart } from "@/context/CartContext";

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { items } = useCart();

  const totalItems = items.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <nav className="sticky top-0 bg-[#000000] text-white shadow-md z-50">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img
              src="/logo.png"
              alt="Carnes el Novillo"
              className="h-12 w-auto"
              onError={(e) => {
                e.currentTarget.src =
                  "https://placehold.co/200x80?text=Carnes+El+Novillo";
              }}
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-10">
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

          {/* Cart & Mobile */}
          <div className="flex items-center space-x-4">
            <Link to="/carrito" className="relative">
              <ShoppingCart className="h-6 w-6 hover:text-[#CE1212] transition-colors duration-300" />
              {totalItems > 0 && (
                <span className="absolute -top-2 -right-2 bg-[#CE1212] text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {totalItems}
                </span>
              )}
            </Link>
            <button
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <X className="h-6 w-6 hover:text-[#CE1212] transition-colors duration-300" />
              ) : (
                <Menu className="h-6 w-6 hover:text-[#CE1212] transition-colors duration-300" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-[#000000] text-white py-4 px-4 shadow-inner space-y-2 backdrop-blur-sm bg-opacity-90">
          {["/", "/productos", "/nosotros", "/contacto"].map((path, index) => (
            <Link
              key={index}
              to={path}
              className="block hover:text-[#CE1212] transition-colors duration-300"
              onClick={() => setIsMenuOpen(false)}
            >
              {["Inicio", "Productos", "Nosotros", "Contacto"][index]}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
};
