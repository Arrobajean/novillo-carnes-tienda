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
  Contact,
} from "lucide-react";
import { motion } from "framer-motion";

const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8 },
  },
};

export const Footer = () => {
  return (
    <footer className="bg-[#000000] text-white text-sm font-poppins">
      <div className="container mx-auto py-8 px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-center md:text-left">
          {/* Logo + descripción */}
          <motion.div
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex flex-col items-center text-center"
          >
            <Link to="/" className="mb-2 hover:scale-105 transition-transform">
              <img
                src="/public/ui/logo.png"
                alt="Carnes El Novillo Logo"
                className="h-28 sm:h-32 md:h-36 w-auto"
              />
            </Link>
            <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-2">
              Los mejores cortes con sabor auténtico, tradición y calidad en
              carnes desde 2020.
            </p>
            <div className="flex justify-center space-x-4 mt-2">
              {[
                {
                  href: "https://www.instagram.com/carneselnovillo/",
                  icon: <Instagram className="h-5 w-5 sm:h-6 sm:w-6" />,
                },
                {
                  href: "https://www.facebook.com/profile.php?id=61550850388071",
                  icon: <Facebook className="h-5 w-5 sm:h-6 sm:w-6" />,
                },
                {
                  href: "https://wa.me/56958404733",
                  icon: <MessageCircle className="h-5 w-5 sm:h-6 sm:w-6" />,
                },
              ].map((item, i) => (
                <a
                  key={i}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-800 p-2 rounded-full hover:bg-[#CE1212] transition-colors"
                >
                  {item.icon}
                </a>
              ))}
            </div>
          </motion.div>

          {/* Enlaces */}
          <motion.div
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex flex-col items-center md:items-start"
          >
            <h3 className="text-lg font-semibold mb-4 text-white">Enlaces</h3>
            <ul className="space-y-3 w-full list-none text-sm sm:text-base">
              {[
                { label: "Inicio", path: "/", icon: Home },
                {
                  label: "Productos",
                  path: "/productos",
                  icon: ShoppingBasket,
                },
                { label: "Nosotros", path: "/nosotros", icon: Users },
                { label: "Contacto", path: "/contacto", icon: Contact },
              ].map(({ label, path, icon: Icon }) => (
                <li
                  key={path}
                  className="flex justify-center md:justify-start items-center"
                >
                  <Link
                    to={path}
                    className="text-gray-300 flex items-center space-x-2 hover:text-[#CE1212]"
                  >
                    <Icon className="h-5 w-5 sm:h-6 sm:w-6 text-[#D4AF37]" />
                    <span>{label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contacto */}
          <motion.div
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex flex-col items-center md:items-start"
          >
            <h3 className="text-lg font-semibold mb-4 text-white">Contacto</h3>
            <ul className="space-y-3 w-full list-none text-sm sm:text-base">
              <li className="flex justify-center md:justify-start">
                <a
                  href="https://maps.app.goo.gl/KLxWBLKvu5YvCrQk8"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start space-x-2 text-center md:text-left group"
                >
                  <MapPin className="h-5 w-5 sm:h-6 sm:w-6 text-[#D4AF37]" />
                  <span className="text-gray-300 group-hover:text-[#CE1212] transition-colors leading-snug">
                    Pablo Urzúa 1489,
                    <br /> local 2, Independencia
                    <br /> Santiago
                  </span>
                </a>
              </li>
              <li>
                <a
                  href="tel:+56958404733"
                  className="flex items-center justify-center md:justify-start group"
                >
                  <Phone className="h-5 w-5 sm:h-6 sm:w-6 text-[#D4AF37] mr-2" />
                  <span className="text-gray-300 group-hover:text-[#CE1212] transition-colors">
                    +56 9 5840 4733
                  </span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:contacto@carneselnovillo.cl"
                  className="flex items-center justify-center md:justify-start group"
                >
                  <Mail className="h-5 w-5 sm:h-6 sm:w-6 text-[#D4AF37] mr-2" />
                  <span className="text-gray-300 group-hover:text-[#CE1212] transition-colors">
                    contacto@carneselnovillo.cl
                  </span>
                </a>
              </li>
            </ul>
          </motion.div>

          {/* Horarios */}
          <motion.div
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex flex-col items-center md:items-start"
          >
            <h3 className="text-lg font-semibold mb-4 text-white">Horarios</h3>
            <ul className="space-y-3 w-full list-none text-sm sm:text-base">
              {[
                { day: "Lunes a Sábado", time: "9:00 - 21:00" },
                { day: "Domingo", time: "9:00 - 18:00" },
              ].map((item, i) => (
                <li
                  key={i}
                  className="flex items-start justify-center md:justify-start group"
                >
                  <Clock className="h-5 w-5 sm:h-6 sm:w-6 text-[#D4AF37] mr-2 mt-[2px]" />
                  <div>
                    <p className="text-gray-300 group-hover:text-[#CE1212] transition-colors">
                      {item.day}
                    </p>
                    <p className="text-gray-300 group-hover:text-[#CE1212] transition-colors">
                      {item.time}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Footer bottom */}
        <motion.div
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="border-t border-gray-700 mt-6 pt-4 text-center"
        >
          <p className="text-gray-400 text-xs sm:text-sm mb-3">
            © {new Date().getFullYear()} Carnes el Novillo. Todos los derechos
            reservados.
          </p>
          <div className="flex items-center justify-center text-xs sm:text-sm text-gray-500">
            <span className="mr-2">Sitio desarrollado por</span>
            <img
              src="/public/ui/dev-logo.png"
              alt="Logo del desarrollador"
              className="h-5 w-auto"
            />
          </div>
        </motion.div>
      </div>
    </footer>
  );
};
