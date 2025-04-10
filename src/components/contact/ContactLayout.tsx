
import { motion } from "framer-motion";
import { ContactHero } from "./ContactHero";
import { ContactInfo } from "./ContactInfo";
import { LocationMap } from "./LocationMap";
import { FAQSection } from "./FAQSection";
import { ContactCTA } from "./ContactCTA";

interface FAQItem {
  question: string;
  answer: string;
}

export const ContactLayout = () => {
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
      <ContactHero />
      
      {/* Contact Info - removed margin-top to eliminate gap */}
      <section className="py-12 px-4 bg-novillo-black">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <ContactInfo />
            
            {/* Map with direct link to Google Maps */}
            <LocationMap />
          </div>
        </div>
        
        {/* Wave decoration for transition */}
        <svg
          className="w-full mt-12"
          viewBox="0 0 1440 150"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="#f7f7f7"
            d="M0,0 C360,120 1080,0 1440,120 L1440,150 L0,150 Z"
          />
        </svg>
      </section>

      {/* FAQ Section with improved contrast */}
      <FAQSection faqItems={faqItems} />

      {/* CTA Section */}
      <ContactCTA />
    </div>
  );
};
