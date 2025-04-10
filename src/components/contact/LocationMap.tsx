
import { ArrowRight } from 'lucide-react';

export const LocationMap = () => {
  return (
    <div>
      <h2 className="text-3xl font-poppins font-semibold mb-6 text-white">Nuestra Ubicación</h2>
      <div className="bg-gray-200 rounded-lg overflow-hidden shadow-md h-[400px]">
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3330.055407563578!2d-70.6656081231582!3d-33.422329997356595!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9662c7a16bc4132f%3A0xe7ff1ab63c47f5ce!2sCarnes%20El%20Novillo!5e0!3m2!1ses-419!2scl!4v1712598758267!5m2!1ses-419!2scl" 
          width="100%" 
          height="100%" 
          style={{ border: 0 }} 
          allowFullScreen 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade"
          title="Ubicación de Carnes el Novillo"
        ></iframe>
      </div>
      <div className="mt-3 text-center">
        <a 
          href="https://maps.app.goo.gl/KLxWBLKvu5YvCrQk8" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-novillo-red hover:underline inline-flex items-center"
        >
          Ver en Google Maps
          <ArrowRight className="ml-1 h-4 w-4" />
        </a>
      </div>
    </div>
  );
};
