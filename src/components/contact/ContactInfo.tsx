
import { MapPin, Phone, Mail, Clock, Facebook, Instagram, MessageCircle } from 'lucide-react';

export const ContactInfo = () => {
  return (
    <div>
      <h2 className="text-3xl font-poppins font-semibold mb-6 text-white">Información de Contacto</h2>
      
      <div className="space-y-6">
        <div className="flex items-start">
          <div className="bg-novillo-red/10 p-3 rounded-lg mr-4">
            <MapPin className="h-6 w-6 text-novillo-red" />
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-1 text-white">Dirección</h3>
            <a 
              href="https://maps.app.goo.gl/KLxWBLKvu5YvCrQk8" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-gray-400 hover:text-novillo-red transition-colors group"
            >
              <p className="group-hover:underline">Pablo Urzúa 1489, local 2</p>
              <p className="group-hover:underline">Independencia, Santiago, Chile</p>
            </a>
          </div>
        </div>
        
        <div className="flex items-start">
          <div className="bg-novillo-red/10 p-3 rounded-lg mr-4">
            <Phone className="h-6 w-6 text-novillo-red" />
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-1 text-white">Teléfono</h3>
            <a 
              href="tel:+56958404733" 
              className="text-gray-400 hover:text-novillo-red hover:underline transition-colors"
            >
              +56 9 5840 4733
            </a>
          </div>
        </div>
        
        <div className="flex items-start">
          <div className="bg-novillo-red/10 p-3 rounded-lg mr-4">
            <Mail className="h-6 w-6 text-novillo-red" />
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-1 text-white">Email</h3>
            <a 
              href="mailto:contacto@carneselnovillo.cl"
              className="text-gray-400 hover:text-novillo-red hover:underline transition-colors"
            >
              contacto@carneselnovillo.cl
            </a>
          </div>
        </div>
        
        <div className="flex items-start">
          <div className="bg-novillo-red/10 p-3 rounded-lg mr-4">
            <Clock className="h-6 w-6 text-novillo-red" />
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-1 text-white">Horarios de Atención</h3>
            <p className="text-gray-400">Lunes a Viernes: 9:00 - 22:00</p>
            <p className="text-gray-400">Sábados: 9:00 - 14:00</p>
            <p className="text-gray-400">Domingos: Cerrado</p>
          </div>
        </div>
      </div>
      
      <div className="mt-8">
        <h3 className="text-xl font-poppins font-semibold mb-4 text-white">Síguenos en Redes Sociales</h3>
        <div className="flex justify-center md:justify-start space-x-4">
          <a 
            href="https://www.facebook.com/profile.php?id=61550850388071" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-gray-800 p-3 rounded-full hover:bg-[#CE1212] transition-colors text-white hover:scale-110 transform duration-200"
          >
            <Facebook className="h-5 w-5" />
          </a>
          <a 
            href="https://www.instagram.com/carneselnovillo/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-gray-800 p-3 rounded-full hover:bg-[#CE1212] transition-colors text-white hover:scale-110 transform duration-200"
          >
            <Instagram className="h-5 w-5" />
          </a>
          <a 
            href="https://wa.me/56958404733" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-gray-800 p-3 rounded-full hover:bg-[#CE1212] transition-colors text-white hover:scale-110 transform duration-200"
          >
            <MessageCircle className="h-5 w-5" />
          </a>
        </div>
      </div>
    </div>
  );
};
