
import { Link } from "react-router-dom";
import { Facebook, Instagram, MapPin, Phone, Mail, Clock } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-[#000000] text-white">
      <div className="container mx-auto py-10 px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About */}
          <div>
            <h3 className="text-xl font-sans font-semibold mb-4 text-white">
              Carnes el Novillo
            </h3>
            <p className="text-gray-300 mb-4">
              Tradición y calidad en carnes desde 1985. Ofrecemos los mejores
              cortes con el sabor auténtico que caracteriza a nuestra marca.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://facebook.com/carneselnovillo"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-800 p-2 rounded-full hover:bg-[#CE1212] transition-colors text-white"
              >
                <Facebook size={20} />
              </a>
              <a
                href="https://www.instagram.com/carneselnovillo/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-800 p-2 rounded-full hover:bg-[#CE1212] transition-colors text-white"
              >
                <Instagram size={20} />
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-xl font-sans font-semibold mb-4 text-white">
              Enlaces
            </h3>
            <ul className="space-y-2">
              {[
                { label: "Inicio", path: "/" },
                { label: "Productos", path: "/productos" },
                { label: "Nosotros", path: "/nosotros" },
                { label: "Contacto", path: "/contacto" },
              ].map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-gray-300 hover:text-[#CE1212] transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xl font-sans font-semibold mb-4 text-white">
              Contacto
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="mr-2 h-5 w-5 text-[#D4AF37] shrink-0 mt-0.5" />
                <span className="text-gray-300">
                  Pablo Urzúa 1489, local 2, Independencia, Santiago, Chile
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="mr-2 h-5 w-5 text-[#D4AF37] shrink-0" />
                <span className="text-gray-300">+56 9 5840 4733</span>
              </li>
              <li className="flex items-center">
                <Mail className="mr-2 h-5 w-5 text-[#D4AF37] shrink-0" />
                <span className="text-gray-300">
                  contacto@carneselnovillo.cl
                </span>
              </li>
            </ul>
          </div>

          {/* Hours & Delivery */}
          <div>
            <h3 className="text-xl font-sans font-semibold mb-4 text-white">
              Horarios
            </h3>
            <ul className="space-y-2">
              {[
                { day: "Lunes a Viernes", time: "9:00 - 22:00" },
                { day: "Sábados", time: "9:00 - 14:00" },
                { day: "Domingos", time: "Cerrado" },
              ].map((item, i) => (
                <li className="flex items-start" key={i}>
                  <Clock className="mr-2 h-5 w-5 text-[#D4AF37] shrink-0 mt-0.5" />
                  <div>
                    <p className="text-gray-300">{item.day}</p>
                    <p className="text-gray-300">{item.time}</p>
                  </div>
                </li>
              ))}
            </ul>
            <div className="mt-4 bg-[#CE1212]/10 p-3 rounded-lg">
              <p className="text-gray-300 font-medium">
                <span className="text-[#D4AF37]">✓</span> ¡Hacemos entregas a domicilio!
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-10 pt-6 text-center">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} Carnes el Novillo. Todos los derechos
            reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};
