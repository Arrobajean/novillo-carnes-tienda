import { Link } from "react-router-dom";
import { ArrowRight, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export const AboutSection = () => {
  const reasons = [
    "Carnes frescas seleccionadas diariamente",
    "Cortes realizados por maestros carniceros",
    "Precios justos y competitivos",
    "Envíos a domicilio en toda la Región Metropolitana",
    "Atención personalizada y asesoría en tus compras",
  ];

  return (
    <section className="relative py-20 px-4 text-[#EEEBDD] font-poppins overflow-hidden">
      {/* Imagen de fondo que rellena todo */}
      <img
        src="/images/ui/background-pattern4.jpg"
        alt="Fondo de Carnes El Novillo"
        className="absolute inset-0 w-full h-full object-[top] object-contain z-0 opacity-60"
      />

      {/* Overlay negro con animación */}
      <motion.div
        className="absolute inset-0 bg-black/70 z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.7 }}
        transition={{ duration: 1 }}
      />

      <div className="container mx-auto relative z-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Texto */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
              ¿Por qué comprar en{" "}
              <span className="text-novillo-gold">Carnes El Novillo</span>?
            </h2>

            <ul className="mb-6 space-y-3">
              {reasons.map((reason, index) => (
                <li key={index} className="flex items-start">
                  <Check className="mr-2 h-5 w-5 text-novillo-gold mt-1 shrink-0" />
                  <span>{reason}</span>
                </li>
              ))}
            </ul>

            <p className="mb-6 text-white/90 leading-relaxed">
              En{" "}
              <span className="text-[#CE1212] font-semibold">
                Carnes El Novillo
              </span>{" "}
              nos dedicamos a seleccionar lo mejor del campo chileno para
              llevarlo directo a tu mesa. Calidad, sabor y servicio
              personalizado en cada corte.
            </p>

            <Button
              asChild
              variant="link"
              className="text-[#CE1212] hover:text-[#CE1212]/80 p-0 h-auto font-semibold text-lg"
            >
              <Link to="/productos" className="inline-flex items-center">
                Ver nuestros productos 🍖{" "}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </motion.div>

          {/* Imagen decorativa */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <img
              src="/images/ui/pedidos-novillo.jpg"
              alt="Carnicería El Novillo"
              className="rounded-lg shadow-lg w-full h-auto object-cover"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};
