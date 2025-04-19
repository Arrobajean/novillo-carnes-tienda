import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export const HeroSection = () => {
  return (
    <>
      <section
        className="block md:hidden relative h-[650px] flex items-center text-white font-poppins overflow-hidden bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/images/ui/background-pattern.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-black/50 z-0" />
        <div className="container mx-auto px-4 z-10 relative">
          <motion.div
            className="max-w-2xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h1 className="text-4xl font-bold mb-6 leading-tight">
              Los Mejores Cortes Para <br />
              <span className="text-[#D4AF37]">Tu Mesa</span>
            </h1>
            <p className="text-xl mb-8 text-white/90">
              Descubre nuestros cortes premium a precios irresistibles. Recibe
              carne de la más alta calidad a domicilio, sin renunciar al
              auténtico sabor. ¡Lleva lo mejor a tu mesa!
            </p>
            <div className="flex flex-wrap gap-4">
              <Button
                asChild
                size="lg"
                className="bg-[#CE1212] hover:bg-[#B50F0F] text-white transition-colors"
              >
                <Link to="/productos" className="flex items-center gap-2">
                  Ver Catálogo
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                // Fondo sólido sin transparencia y hover intensificando el color
                className="border-[#D4AF37] bg-[#D4AF37] text-white hover:bg-[#C59A34] transition-colors"
              >
                <Link to="/nosotros">Conocer Nuestra Historia</Link>
              </Button>
            </div>
            <div className="mt-10 flex items-center gap-4 bg-black/50 p-4 rounded-lg w-fit">
              <div className="bg-[#D4AF37] h-12 w-1 rounded-full"></div>
              <p className="text-lg">
                Calidad Premium
                <br />
                Tradición Artesanal.
              </p>
            </div>
          </motion.div>
        </div>
        <svg
          className="absolute bottom-0 left-0 right-0 pointer-events-none"
          viewBox="0 0 1440 150"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="#000000"
            d="M0,120 C360,40 1080,140 1440,60 L1440,150 L0,150 Z"
          />
        </svg>
      </section>

      <section
        className="hidden md:flex relative h-[700px] items-center text-white font-poppins overflow-hidden bg-repeat bg-center bg-[length:contain]"
        style={{
          backgroundImage: "url('/ui/background-pattern.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-black/80 z-0" />
        <div className="container mx-auto px-4 z-10 relative">
          <motion.div
            className="max-w-2xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h1 className="text-6xl font-bold mb-6 leading-tight">
              Los Mejores Cortes Para <br />
              <span className="text-[#D4AF37]">Tu Mesa</span>
            </h1>
            <p className="text-2xl mb-8 text-white/90">
              Descubre nuestros cortes premium a precios irresistibles. Recibe
              carne de la más alta calidad a domicilio, sin renunciar al
              auténtico sabor. ¡Lleva lo mejor a tu mesa!
            </p>
            <div className="flex flex-wrap gap-4">
              <Button
                asChild
                size="lg"
                className="bg-[#CE1212] hover:bg-[#B50F0F] text-white transition-colors"
              >
                <Link to="/productos" className="flex items-center gap-2">
                  Ver Catálogo <ArrowRight className="h-5 w-5" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-[#D4AF37] bg-[#D4AF37] text-white hover:bg-[#C59A34] transition-colors"
              >
                <Link to="/nosotros">Conocer Nuestra Historia</Link>
              </Button>
            </div>
            <div className="mt-10 flex items-center gap-4 bg-black/50 p-4 rounded-lg w-fit">
              <div className="bg-[#D4AF37] h-12 w-1 rounded-full"></div>
              <p className="text-lg">
                Calidad Premium
                <br />
                Tradición Artesanal
              </p>
            </div>
          </motion.div>
        </div>
        <svg
          className="absolute bottom-0 left-0 right-0 pointer-events-none"
          viewBox="0 0 1440 30"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="#000000"
            d="M0,24 C360,8 1080,28 1440,12 L1440,30 L0,30 Z"
          />
        </svg>
      </section>
    </>
  );
};
