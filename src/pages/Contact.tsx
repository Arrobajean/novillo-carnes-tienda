
import { MapPin, Phone, Mail, Clock, Facebook, Instagram, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const Contact = () => {
  const faqItems = [
    {
      question: "¿Realizan entregas a domicilio?",
      answer: "Sí, realizamos entregas a domicilio en toda la Región Metropolitana. El costo del envío varía según la distancia. Consulta por los detalles específicos de tu zona."
    },
    {
      question: "¿Cuál es el pedido mínimo para comprar?",
      answer: "No tenemos un monto mínimo para compras en tienda. Para entregas a domicilio, el pedido mínimo es de $20.000 CLP."
    },
    {
      question: "¿Qué métodos de pago aceptan?",
      answer: "Aceptamos efectivo, tarjetas de débito, tarjetas de crédito, transferencias bancarias y pagos por aplicaciones móviles como WebPay y MercadoPago."
    },
    {
      question: "¿Cómo puedo recibir información sobre promociones?",
      answer: "Puedes seguirnos en nuestras redes sociales o suscribirte a nuestro boletín para recibir las últimas novedades y promociones especiales."
    },
    {
      question: "¿Realizan cortes especiales o personalizados?",
      answer: "Sí, podemos realizar cortes especiales o personalizados según tus necesidades. Te recomendamos contactarnos con anticipación para preparar tu pedido."
    },
    {
      question: "¿Ofrecen asesoría para eventos o parrilladas?",
      answer: "Absolutamente. Nuestro equipo puede asesorarte sobre las mejores opciones según el tipo de evento, número de comensales y presupuesto."
    }
  ];
  
  return (
    <div className="font-poppins">
      {/* Hero Section */}
      <section 
        className="hero-gradient relative h-[300px] flex items-center text-white" 
        style={{ 
          '--image-url': 'url("https://images.unsplash.com/photo-1485846147915-69f139ac30b9?q=80&w=2000")' 
        } as React.CSSProperties}
      >
        <div className="container mx-auto px-4 z-10">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl font-poppins font-bold mb-4">
              Contacto
            </h1>
            <p className="text-xl">
              Estamos para responder tus preguntas y recibir tus pedidos
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-16 px-4 bg-novillo-black">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div>
              <h2 className="text-3xl font-poppins font-semibold mb-8 text-white">Información de Contacto</h2>
              
              <div className="space-y-8">
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
                      className="text-gray-400 hover:text-novillo-red transition-colors"
                    >
                      <p>Pablo Urzúa 1489, local 2</p>
                      <p>Independencia, Santiago, Chile</p>
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
                      className="text-gray-400 hover:text-novillo-red transition-colors"
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
                      className="text-gray-400 hover:text-novillo-red transition-colors"
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
              
              <div className="mt-10">
                <h3 className="text-xl font-poppins font-semibold mb-4 text-white">Síguenos en Redes Sociales</h3>
                <div className="flex space-x-4">
                  {/* Usando los mismos estilos de iconos que en el footer */}
                  <a 
                    href="https://facebook.com/carneselnovillo" 
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
            
            {/* Map */}
            <div>
              <h2 className="text-3xl font-poppins font-semibold mb-8 text-white">Nuestra Ubicación</h2>
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
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section - mejorando contraste */}
      <section className="py-16 px-4 bg-gray-100">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-poppins font-semibold mb-4 text-gray-900">Preguntas Frecuentes</h2>
            <p className="text-gray-700 max-w-2xl mx-auto font-poppins">
              Respuestas a las consultas más comunes de nuestros clientes
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <Accordion type="single" collapsible className="w-full">
              {faqItems.map((item, index) => (
                <AccordionItem 
                  key={index} 
                  value={`item-${index}`}
                  className="border-b border-gray-300"
                >
                  <AccordionTrigger className="text-left text-lg font-medium py-4 hover:no-underline hover:text-novillo-red text-gray-900">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-700 py-4 px-2">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-novillo-black">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-poppins font-semibold mb-6 text-white">¿Tienes Alguna Otra Pregunta?</h2>
          <p className="text-gray-400 mb-8 font-poppins">
            Estamos aquí para ayudarte. Contáctanos directamente o visita nuestra tienda para una atención personalizada.
          </p>
          <Button 
            size="lg" 
            className="bg-novillo-red hover:bg-red-900 text-white font-poppins transition-colors"
            onClick={() => window.open('https://wa.me/56958404733', '_blank')}
          >
            Contáctanos por WhatsApp
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Contact;
