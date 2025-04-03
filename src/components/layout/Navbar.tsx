
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useCart } from '@/context/CartContext';

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { items } = useCart();
  
  const totalItems = items.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <nav className="sticky top-0 bg-white shadow-md z-50">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img 
              src="/logo.png" 
              alt="Carnes el Novillo" 
              className="h-12 w-auto" 
              onError={(e) => {
                e.currentTarget.src = 'https://placehold.co/200x80?text=Carnes+El+Novillo';
              }}
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-10">
            <Link to="/" className="text-gray-700 hover:text-novillo-red font-medium">
              Inicio
            </Link>
            <Link to="/productos" className="text-gray-700 hover:text-novillo-red font-medium">
              Productos
            </Link>
            <Link to="/nosotros" className="text-gray-700 hover:text-novillo-red font-medium">
              Nosotros
            </Link>
            <Link to="/contacto" className="text-gray-700 hover:text-novillo-red font-medium">
              Contacto
            </Link>
          </div>

          {/* Cart and Mobile Menu */}
          <div className="flex items-center space-x-4">
            <Link to="/carrito" className="relative">
              <ShoppingCart className="h-6 w-6 text-gray-700 hover:text-novillo-red" />
              {totalItems > 0 && (
                <span className="absolute -top-2 -right-2 bg-novillo-red text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {totalItems}
                </span>
              )}
            </Link>
            <button 
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <X className="h-6 w-6 text-gray-700" />
              ) : (
                <Menu className="h-6 w-6 text-gray-700" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white py-4 px-4 shadow-inner">
          <div className="flex flex-col space-y-4">
            <Link 
              to="/" 
              className="text-gray-700 hover:text-novillo-red font-medium py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Inicio
            </Link>
            <Link 
              to="/productos" 
              className="text-gray-700 hover:text-novillo-red font-medium py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Productos
            </Link>
            <Link 
              to="/nosotros" 
              className="text-gray-700 hover:text-novillo-red font-medium py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Nosotros
            </Link>
            <Link 
              to="/contacto" 
              className="text-gray-700 hover:text-novillo-red font-medium py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Contacto
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};
