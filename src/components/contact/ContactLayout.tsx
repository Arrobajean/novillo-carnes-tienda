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
  const faqItems: FAQItem[] = [
    {
      question: "¿Realizan entregas a domicilio?",
      answer:
        "Sí, realizamos entregas a domicilio en toda la Región Metropolitana. El costo del envío varía según la distancia. Consulta por los detalles específicos de tu zona.",
    },
    {
      question: "¿Cuál es el pedido mínimo para comprar?",
      answer:
        "No tenemos un monto mínimo para compras en tienda. Para entregas a domicilio, el pedido mínimo es de $20.000 CLP.",
    },
    {
      question: "¿Qué métodos de pago aceptan?",
      answer:
        "Aceptamos efectivo, tarjetas de débito, tarjetas de crédito, transferencias bancarias y pagos por aplicaciones móviles como WebPay y MercadoPago.",
    },
    {
      question: "¿Cómo puedo recibir información sobre promociones?",
      answer:
        "Puedes seguirnos en nuestras redes sociales para recibir las últimas novedades y promociones especiales.",
    },
    {
      question: "¿Realizan cortes especiales o personalizados?",
      answer:
        "Sí, podemos realizar cortes especiales o personalizados según tus necesidades. Te recomendamos contactarnos con anticipación para preparar tu pedido.",
    },
    {
      question: "¿Ofrecen asesoría para eventos o parrilladas?",
      answer:
        "Absolutamente. Nuestro equipo puede asesorarte sobre las mejores opciones según el tipo de evento, número de comensales y presupuesto.",
    },
  ];

  return (
    <div className="font-poppins">
      <ContactHero />

      {/* Información de contacto y mapa */}
      <section className="pb-0 px-0 bg-novillo-black">
        <div className="pt-12 px-4 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-12">
            <ContactInfo />
            <LocationMap googleMapsLink="https://maps.app.goo.gl/kcvTSkiAY7AFzFrX7" />
          </div>
        </div>

        {/* Onda decorativa inferior */}
        <svg
          className="w-screen block -mb-1"
          viewBox="0 0 1440 60"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="#810000"
            d="M0,0 C360,40 1080,0 1440,40 L1440,60 L0,60 Z"
          />
        </svg>
      </section>

      {/* Preguntas frecuentes */}
      <section className="bg-[#810000] py-16 px-4 text-white">
        <FAQSection faqItems={faqItems} />
      </section>

      {/* Llamado a la acción */}
      <ContactCTA />
    </div>
  );
};
