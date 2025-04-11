
import { Link } from "react-router-dom";
import {
  Facebook,
  Instagram,
  MapPin,
  Phone,
  Mail,
  Clock,
  MessageCircle,
  Home,
  ShoppingBasket,
  Users,
  Contact
} from "lucide-react";
import { motion } from "framer-motion";

const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

export const Footer = () => {
  return (
    <footer className="bg-[#000000] text-white text-sm font-poppins">
      <div className="container mx-auto py-10 px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center md:text-left">
          {/* Logo and About */}
          <motion.div
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex flex-col items-center md:items-start"
          >
            <Link to="/" className="mb-4 transition-transform hover:scale-105">
              <img
                src="/lovable-uploads/ad88ae2f-4290-481b-9136-cd76d4c7eac1.png"
                alt="Carnes El Novillo Logo"
                className="h-36 w-auto" // Increased logo size slightly
              />
            </Link>
            <p className="text-gray-300 mb-4">
              Tradición y calidad en carnes desde 2020. Ofrecemos los mejores
              cortes con el sabor auténtico que caracteriza a nuestra marca.
            </p>
            <div className="flex space-x-4 justify-center md:justify-start">
              <a
                href="https://www.instagram.com/carneselnovillo/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-800 p-2 rounded-full hover:bg-[#CE1212] transition-colors text-white hover:scale-110 transform duration-200"
              >
                <Instagram size={20} />
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=61550850388071"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-800 p-2 rounded-full hover:bg-[#CE1212] transition-colors text-white hover:scale-110 transform duration-200"
              >
                <Facebook size={20} />
              </a>
              <a
                href="https://wa.me/56958404733"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-800 p-2 rounded-full hover:bg-[#CE1212] transition-colors text-white hover:scale-110 transform duration-200"
              >
                <MessageCircle size={20} />
              </a>
            </div>
          </motion.div>

          {/* Links */}
          <motion.div
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex flex-col items-center md:items-start"
          >
            <h3 className="text-lg font-semibold mb-4 text-white">Enlaces</h3>
            <ul className="space-y-2 list-none">
              {[
                { label: "Inicio", path: "/", icon: <Home className="h-4 w-4 text-[#D4AF37]" /> },
                { label: "Productos", path: "/productos", icon: <ShoppingBasket className="h-4 w-4 text-[#D4AF37]" /> },
                { label: "Nosotros", path: "/nosotros", icon: <Users className="h-4 w-4 text-[#D4AF37]" /> },
                { label: "Contacto", path: "/contacto", icon: <Contact className="h-4 w-4 text-[#D4AF37]" /> },
              ].map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-gray-300 hover:text-[#CE1212] transition-colors flex items-center group"
                  >
                    <span className="mr-2 transition-transform duration-300 group-hover:translate-x-1">
                      {link.icon}
                    </span>
                    <span>{link.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact - with improved centering for address */}
          <motion.div
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex flex-col items-center md:items-start"
          >
            <h3 className="text-lg font-semibold mb-4 text-white">Contacto</h3>
            <ul className="space-y-3 w-full list-none">
              <li className="flex justify-center md:justify-start">
                <a
                  href="https://maps.app.goo.gl/KLxWBLKvu5YvCrQk8"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start space-x-2 text-center md:text-left hover:text-[#CE1212] transition-colors group"
                >
                  <MapPin className="h-5 w-5 text-[#D4AF37] shrink-0 mt-1 group-hover:text-[#CE1212]" />
                  <span className="text-gray-300 leading-snug">
                    Pablo Urzúa 1489,
                    <br />
                    local 2, Independencia,
                    <br />
                    Santiago.
                  </span>
                </a>
              </li>

              <li>
                <a
                  href="tel:+56958404733"
                  className="flex items-center justify-center md:justify-start hover:text-[#CE1212] transition-colors group"
                >
                  <Phone className="mr-2 h-5 w-5 text-[#D4AF37] shrink-0 group-hover:text-[#CE1212]" />
                  <span className="text-gray-300">+56 9 5840 4733</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:contacto@carneselnovillo.cl"
                  className="flex items-center justify-center md:justify-start hover:text-[#CE1212] transition-colors group"
                >
                  <Mail className="mr-2 h-5 w-5 text-[#D4AF37] shrink-0 group-hover:text-[#CE1212]" />
                  <span className="text-gray-300">
                    contacto@carneselnovillo.cl
                  </span>
                </a>
              </li>
            </ul>
          </motion.div>

          {/* Hours */}
          <motion.div
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex flex-col items-center md:items-start"
          >
            <h3 className="text-lg font-semibold mb-4 text-white">Horarios</h3>
            <ul className="space-y-2 text-left list-none">
              {[
                { day: "Lunes a Viernes", time: "9:00 - 22:00" },
                { day: "Sábados", time: "9:00 - 14:00" },
                { day: "Domingos", time: "Cerrado" },
              ].map((item, i) => (
                <li
                  className="flex items-start justify-center md:justify-start"
                  key={i}
                >
                  <Clock className="mr-2 h-5 w-5 text-[#D4AF37] shrink-0 mt-0.5" />
                  <div>
                    <p className="text-gray-300">{item.day}</p>
                    <p className="text-gray-300">{item.time}</p>
                  </div>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        <motion.div
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="border-t border-gray-700 mt-10 pt-6 text-center"
        >
          <p className="text-gray-400 text-xs mb-3">
            © {new Date().getFullYear()} Carnes el Novillo. Todos los derechos
            reservados.
          </p>
          {/* Developer credit */}
          <div className="flex items-center justify-center text-xs text-gray-500">
            <span className="mr-2">Sitio desarrollado por</span>
            <img
              src="/lovable-uploads/4d61745a-bcf8-4729-8e46-7c8074d574dd.png"
              alt="Logo del desarrollador"
              className="h-5 w-auto"
            />
          </div>
        </motion.div>
      </div>
    </footer>
  );
};
