
import { MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const ContactCTA = () => {
  return (
    <section className="py-12 px-4 bg-novillo-black">
      <div className="container mx-auto max-w-4xl text-center">
        <h2 className="text-3xl font-poppins font-semibold mb-4 text-white">¿Tienes Alguna Otra Pregunta?</h2>
        <p className="text-gray-400 mb-8 font-poppins">
          Estamos aquí para ayudarte. Contáctanos directamente o visita nuestra tienda para una atención personalizada.
        </p>
        <Button 
          size="lg" 
          className="bg-novillo-red hover:bg-red-900 text-white font-poppins transition-all transform hover:scale-105 shadow-lg"
          onClick={() => window.open('https://wa.me/56958404733', '_blank')}
        >
          <MessageCircle className="mr-2 h-5 w-5 animate-pulse" />
          Contáctanos por WhatsApp
        </Button>
      </div>
    </section>
  );
};
