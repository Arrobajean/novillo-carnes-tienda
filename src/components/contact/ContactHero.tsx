
import { motion } from "framer-motion";

export const ContactHero = () => {
  return (
    <section 
      className="relative h-[300px] flex items-center text-white" 
      style={{ 
        background: "url('/images/ui/background-pattern.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center"
      }}
    >
      {/* Overlay for better text contrast */}
      <div className="absolute inset-0 bg-black/60 z-10"></div>
      
      <div className="container mx-auto px-4 z-20">
        <div className="max-w-2xl">
          <h1 className="text-4xl md:text-5xl font-poppins font-bold mb-3">
            Contacto
          </h1>
          <p className="text-xl">
            Estamos para responder tus preguntas y recibir tus pedidos
          </p>
        </div>
      </div>
      
      {/* Bottom wave decoration that connects directly with the next section */}
      <svg
        className="absolute bottom-0 left-0 w-full"
        viewBox="0 0 1440 150"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill="#1B1717"
          d="M0,120 C360,40 1080,140 1440,60 L1440,150 L0,150 Z"
        />
      </svg>
    </section>
  );
};
