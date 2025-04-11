
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export const AboutSection = () => {
  return (
    <section
      className="relative bg-contain bg-center text-white font-poppins overflow-hidden bg-[#1B1717]"
    >
      {/* Upper wave decoration */}
      <svg
        className="w-full block pointer-events-none -mt-1"
        viewBox="0 0 1440 150"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill="#810000"
          d="M0,0 C360,120 1080,0 1440,120 L1440,150 L0,150 Z"
          transform="rotate(180 720 75)"
        />
      </svg>
      
      <div className="container mx-auto relative z-20 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Imagen decorativa */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <img
              src="/images/ui/ganaderia-sostenible.jpeg"
              alt="Ganadería sostenible"
              className="rounded-lg shadow-lg w-full h-auto object-cover"
            />
          </motion.div>
          
          {/* Texto actualizado */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
              Nuestros <span className="text-novillo-gold">Cortes Especiales</span>
            </h2>

            <p className="mb-5 text-white/90 leading-relaxed">
              En <span className="text-[#CE1212] font-semibold">Carnes El Novillo</span>{" "}
              nos especializamos en los mejores cortes para parrilla y cocina. Nuestras opciones
              más solicitadas son el lomo vetado, filete, entraña, lomo liso y plateada,
              todos cuidadosamente seleccionados para garantizar el máximo sabor y calidad.
            </p>
            
            <p className="mb-5 text-white/90 leading-relaxed">
              Trabajamos con proveedores certificados que garantizan la trazabilidad de
              toda nuestra carne. Cada corte es preparado por expertos carniceros que dominan
              el arte de seleccionar y preparar la mejor carne para tu mesa.
            </p>

            <p className="mb-6 text-white/90 leading-relaxed">
              Contamos con protocolos estrictos de refrigeración y control de calidad,
              asegurando que cada producto que llega a tu hogar mantenga la frescura y el
              sabor que nos caracteriza desde 2020.
            </p>

            <Button
              asChild
              variant="default"
              className="bg-[#CE1212] hover:bg-[#CE1212]/80 text-white"
            >
              <Link to="/nosotros" className="inline-flex items-center">
                Ver nuestras especialidades
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </div>
      
      {/* Bottom wave decoration - Cambiada a negro */}
      <svg
        className="w-full block pointer-events-none"
        viewBox="0 0 1440 150"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill="#000000"
          d="M0,0 C360,120 1080,0 1440,120 L1440,150 L0,150 Z"
        />
      </svg>
    </section>
  );
};
