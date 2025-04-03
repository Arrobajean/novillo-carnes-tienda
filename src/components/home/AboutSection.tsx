
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const AboutSection = () => {
  return (
    <section className="py-16 px-4 bg-white">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-serif font-semibold mb-6 text-gray-800">Nuestra Historia</h2>
            <p className="text-gray-600 mb-4">
              Desde 1985, en <span className="font-semibold">Carnes el Novillo</span> nos dedicamos a ofrecer la mejor calidad en carnes frescas para las familias chilenas. Nuestra tradición familiar nos ha permitido seleccionar los mejores productos, garantizando frescura y sabor en cada corte.
            </p>
            <p className="text-gray-600 mb-6">
              Trabajamos directamente con productores locales para asegurar la trazabilidad de nuestros productos y mantener los más altos estándares de calidad en todo nuestro proceso.
            </p>
            <Button 
              asChild
              variant="link" 
              className="text-novillo-red hover:text-red-900 p-0 h-auto font-medium"
            >
              <Link to="/nosotros" className="inline-flex items-center">
                Conoce nuestra historia
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1551446358-5e2aa499369f?q=80&w=1000" 
              alt="Carnicería El Novillo" 
              className="rounded-lg shadow-lg w-full h-auto object-cover"
            />
            <div className="absolute -bottom-8 -left-8 bg-novillo-red text-white p-6 rounded-lg shadow-lg max-w-[250px] hidden md:block">
              <p className="text-lg font-serif">
                "Más de 35 años ofreciendo los mejores cortes de carne para tu familia"
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
