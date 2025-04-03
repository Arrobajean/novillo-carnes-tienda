
import { Link } from 'react-router-dom';
import { Facebook, Instagram, MapPin, Phone, Mail, Clock } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-novillo-brown text-white">
      <div className="container mx-auto py-10 px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About */}
          <div>
            <h3 className="text-xl font-serif font-semibold mb-4">Carnes el Novillo</h3>
            <p className="text-gray-200 mb-4">
              Tradición y calidad en carnes desde 1985. Ofrecemos los mejores cortes con el sabor auténtico que caracteriza a nuestra marca.
            </p>
            <div className="flex space-x-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-novillo-gold">
                <Facebook size={20} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-novillo-gold">
                <Instagram size={20} />
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-xl font-serif font-semibold mb-4">Enlaces</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-200 hover:text-novillo-gold transition-colors">
                  Inicio
                </Link>
              </li>
              <li>
                <Link to="/productos" className="text-gray-200 hover:text-novillo-gold transition-colors">
                  Productos
                </Link>
              </li>
              <li>
                <Link to="/nosotros" className="text-gray-200 hover:text-novillo-gold transition-colors">
                  Nosotros
                </Link>
              </li>
              <li>
                <Link to="/contacto" className="text-gray-200 hover:text-novillo-gold transition-colors">
                  Contacto
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xl font-serif font-semibold mb-4">Contacto</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="mr-2 h-5 w-5 text-novillo-gold shrink-0 mt-0.5" />
                <span className="text-gray-200">Av. Providencia 1234, Santiago, Chile</span>
              </li>
              <li className="flex items-center">
                <Phone className="mr-2 h-5 w-5 text-novillo-gold shrink-0" />
                <span className="text-gray-200">+56 2 2123 4567</span>
              </li>
              <li className="flex items-center">
                <Mail className="mr-2 h-5 w-5 text-novillo-gold shrink-0" />
                <span className="text-gray-200">contacto@carneselnovillo.cl</span>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h3 className="text-xl font-serif font-semibold mb-4">Horarios</h3>
            <ul className="space-y-2">
              <li className="flex items-start">
                <Clock className="mr-2 h-5 w-5 text-novillo-gold shrink-0 mt-0.5" />
                <div>
                  <p className="text-gray-200">Lunes a Viernes</p>
                  <p className="text-gray-200">9:00 - 19:00</p>
                </div>
              </li>
              <li className="flex items-start">
                <Clock className="mr-2 h-5 w-5 text-novillo-gold shrink-0 mt-0.5" />
                <div>
                  <p className="text-gray-200">Sábados</p>
                  <p className="text-gray-200">9:00 - 14:00</p>
                </div>
              </li>
              <li className="flex items-start">
                <Clock className="mr-2 h-5 w-5 text-novillo-gold shrink-0 mt-0.5" />
                <div>
                  <p className="text-gray-200">Domingos</p>
                  <p className="text-gray-200">Cerrado</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-10 pt-6 text-center">
          <p className="text-gray-300 text-sm">
            © {new Date().getFullYear()} Carnes el Novillo. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};
