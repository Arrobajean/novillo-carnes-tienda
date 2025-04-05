
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { GoogleReviews } from '@/components/reviews/GoogleReviews';

const Contact = () => {
  return (
    <div>
      {/* Hero Section */}
      <section 
        className="hero-gradient relative h-[300px] flex items-center text-white" 
        style={{ 
          '--image-url': 'url("https://images.unsplash.com/photo-1485846147915-69f139ac30b9?q=80&w=2000")' 
        } as React.CSSProperties}
      >
        <div className="container mx-auto px-4 z-10">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">
              Contacto
            </h1>
            <p className="text-xl">
              Estamos para responder tus preguntas y recibir tus pedidos
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div>
              <h2 className="text-3xl font-serif font-semibold mb-8 text-gray-800">Información de Contacto</h2>
              
              <div className="space-y-8">
                <div className="flex items-start">
                  <div className="bg-novillo-red/10 p-3 rounded-lg mr-4">
                    <MapPin className="h-6 w-6 text-novillo-red" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1">Dirección</h3>
                    <p className="text-gray-600">Pablo Urzúa 1489, local 2</p>
                    <p className="text-gray-600">Independencia, Santiago, Chile</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-novillo-red/10 p-3 rounded-lg mr-4">
                    <Phone className="h-6 w-6 text-novillo-red" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1">Teléfono</h3>
                    <p className="text-gray-600">+56 9 5840 4733</p>
                    <p className="text-gray-600">+56 9 5840 4733 (WhatsApp)</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-novillo-red/10 p-3 rounded-lg mr-4">
                    <Mail className="h-6 w-6 text-novillo-red" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1">Email</h3>
                    <p className="text-gray-600">contacto@carneselnovillo.cl</p>
                    <p className="text-gray-600">ventas@carneselnovillo.cl</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-novillo-red/10 p-3 rounded-lg mr-4">
                    <Clock className="h-6 w-6 text-novillo-red" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1">Horarios de Atención</h3>
                    <p className="text-gray-600">Lunes a Viernes: 9:00 - 22:00</p>
                    <p className="text-gray-600">Sábados: 9:00 - 14:00</p>
                    <p className="text-gray-600">Domingos: Cerrado</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-10">
                <h3 className="text-xl font-serif font-semibold mb-4">Síguenos en Redes Sociales</h3>
                <div className="flex space-x-4">
                  <a 
                    href="https://facebook.com/carneselnovillo" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-blue-600 text-white p-3 rounded-full hover:bg-blue-700 transition-colors"
                  >
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                    </svg>
                  </a>
                  <a 
                    href="https://www.instagram.com/carneselnovillo/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-white p-3 rounded-full hover:opacity-90 transition-opacity"
                  >
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            
            {/* Map */}
            <div>
              <h2 className="text-3xl font-serif font-semibold mb-8 text-gray-800">Nuestra Ubicación</h2>
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

      {/* FAQ Section - with delivery info */}
      <section className="py-16 px-4 bg-novillo-light">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-serif font-semibold mb-4 text-gray-800">Preguntas Frecuentes</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Respuestas a las consultas más comunes de nuestros clientes
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-3 text-gray-800">¿Realizan entregas a domicilio?</h3>
              <p className="text-gray-600">
                Sí, realizamos entregas a domicilio en toda la Región Metropolitana. El costo del envío varía según la distancia. Consulta por los detalles específicos de tu zona.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-3 text-gray-800">¿Cuál es el pedido mínimo para comprar?</h3>
              <p className="text-gray-600">
                No tenemos un monto mínimo para compras en tienda. Para entregas a domicilio, el pedido mínimo es de $20.000 CLP.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-3 text-gray-800">¿Qué métodos de pago aceptan?</h3>
              <p className="text-gray-600">
                Aceptamos efectivo, tarjetas de débito, tarjetas de crédito, transferencias bancarias y pagos por aplicaciones móviles como WebPay y MercadoPago.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-3 text-gray-800">¿Cómo puedo recibir información sobre promociones?</h3>
              <p className="text-gray-600">
                Puedes seguirnos en nuestras redes sociales o suscribirte a nuestro boletín para recibir las últimas novedades y promociones especiales.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-3 text-gray-800">¿Realizan cortes especiales o personalizados?</h3>
              <p className="text-gray-600">
                Sí, podemos realizar cortes especiales o personalizados según tus necesidades. Te recomendamos contactarnos con anticipación para preparar tu pedido.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-3 text-gray-800">¿Ofrecen asesoría para eventos o parrilladas?</h3>
              <p className="text-gray-600">
                Absolutamente. Nuestro equipo puede asesorarte sobre las mejores opciones según el tipo de evento, número de comensales y presupuesto.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Google Reviews Section */}
      <GoogleReviews />

      {/* CTA Section */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-serif font-semibold mb-6">¿Tienes Alguna Otra Pregunta?</h2>
          <p className="text-gray-600 mb-8">
            Estamos aquí para ayudarte. Contáctanos directamente o visita nuestra tienda para una atención personalizada.
          </p>
          <Button 
            size="lg" 
            className="bg-novillo-red hover:bg-red-900 text-white"
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
