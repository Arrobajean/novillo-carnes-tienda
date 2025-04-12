
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Truck,
  ShoppingCart,
  CreditCard,
  CheckCircle,
  ArrowRight,
  Check,
} from "lucide-react";
import { motion } from "framer-motion";

export const CTASection = () => {
  const reasons = [
    "Carnes frescas seleccionadas diariamente",
    "Cortes realizados por maestros carniceros",
    "Precios justos y competitivos",
    "Envíos a domicilio en toda la Región Metropolitana",
    "Atención personalizada y asesoría en tus compras",
  ];

  return (
    <section
      className="relative bg-black text-white font-poppins overflow-hidden"
    >
      {/* Upper wave */}
      <svg
        className="w-full block pointer-events-none -mt-1"
        viewBox="0 0 1440 150"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill="#000000"
          d="M0,120 C360,40 1080,140 1440,60 L1440,0 L0,0 Z"
        />
      </svg>

      <div className="container mx-auto px-4 relative z-10 py-16 md:py-20">
        {/* Proceso de compra */}
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Tu Compra <span className="text-[#D4AF37]">Rápida y Segura</span>
          </h2>
          <p className="text-xl max-w-2xl mx-auto text-white/90 mb-6">
            Lleva la calidad de Carnes el Novillo a tu mesa en simples pasos
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 max-w-5xl mx-auto mt-6">
            {[
              {
                Icon: ShoppingCart,
                title: "1. Elige tus Productos",
                text: "Selecciona los mejores cortes",
              },
              {
                Icon: Truck,
                title: "2. Elige tu Entrega",
                text: "Despacho a domicilio o retiro",
              },
              {
                Icon: CreditCard,
                title: "3. Realiza tu Pago",
                text: "Métodos seguros y confiables",
              },
              {
                Icon: CheckCircle,
                title: "4. Disfruta",
                text: "Productos frescos de calidad",
              },
            ].map(({ Icon, title, text }, i) => (
              <motion.div
                key={i}
                className="bg-[#1B1717] p-3 md:p-4 rounded-lg border border-[#D4AF37]/20 hover:border-[#D4AF37] transition-colors h-full"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <div className="bg-gradient-to-br from-novillo-red to-novillo-red/70 w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center mx-auto mb-2 md:mb-3">
                  <Icon className="h-5 w-5 md:h-6 md:w-6 text-white" />
                </div>
                <h3 className="text-base md:text-lg font-semibold mb-1">
                  {title}
                </h3>
                <p className="text-white/70 text-xs md:text-sm">{text}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Sección About */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center my-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="order-2 md:order-1"
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-white">
              ¿Por qué comprar en{" "}
              <span className="text-novillo-gold">Carnes El Novillo</span>?
            </h2>

            <ul className="mb-6 space-y-2 md:space-y-3">
              {reasons.map((reason, index) => (
                <motion.li 
                  key={index} 
                  className="flex items-start"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Check className="mr-2 h-5 w-5 text-novillo-gold mt-1 shrink-0" />
                  <span>{reason}</span>
                </motion.li>
              ))}
            </ul>

            <div className="flex justify-center md:justify-start">
              <Button
                asChild
                className="bg-[#CE1212] hover:bg-[#CE1212]/80 text-white font-medium"
              >
                <Link to="/productos" className="inline-flex items-center">
                  Ver nuestros productos
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative order-1 md:order-2"
          >
            <img
              src="/images/ui/pedidos-novillo.jpg"
              alt="Carnicería El Novillo"
              className="rounded-lg shadow-lg w-full h-auto object-cover"
            />
          </motion.div>
        </div>

        {/* CTA final */}
        <motion.div 
          className="bg-gradient-to-r from-novillo-red to-[#A00000] p-5 md:p-8 rounded-xl max-w-5xl mx-auto mt-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div>
              <h3 className="text-xl md:text-2xl font-bold mb-1">
                ¡Haz tu Pedido Ahora!
              </h3>
              <p className="text-white/90 mb-0 text-sm md:text-base">
                Envíos a toda la Región Metropolitana
              </p>
            </div>
            <Button
              asChild
              size="lg"
              className="bg-white hover:bg-white/90 text-novillo-red w-full md:w-auto"
            >
              <Link to="/productos" className="text-lg font-medium">
                Comprar Ahora
              </Link>
            </Button>
          </div>
        </motion.div>
      </div>

      {/* Wave final */}
      <svg
        className="w-full block pointer-events-none -mb-1"
        viewBox="0 0 1440 60"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path fill="#000000" d="M0,0 C360,40 1080,0 1440,40 L1440,60 L0,60 Z" />
      </svg>
    </section>
  );
};
