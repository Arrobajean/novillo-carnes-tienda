
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export const HeroSection = () => {
  return (
    <section 
      className="relative h-[650px] md:h-[700px] flex items-center text-white overflow-hidden"
    >
      {/* Video de fondo */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-black/60 z-10"></div>
        <video 
          autoPlay 
          loop 
          muted 
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="https://cdn.coverr.co/videos/coverr-beef-steak-on-grill-1891/1080p.mp4" type="video/mp4" />
          Tu navegador no soporta videos HTML5.
        </video>
      </div>

      <div className="container mx-auto px-4 z-10 relative">
        <motion.div 
          className="max-w-2xl"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight font-poppins">
            Los Mejores Cortes Para <br />
            <span className="text-[#D4AF37]">Tu Mesa</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 opacity-90 text-white font-poppins">
            Descubre nuestros cortes premium a precios irresistibles. Recibe
            carne de la más alta calidad a domicilio, sin renunciar al auténtico
            sabor. ¡Lleva lo mejor a tu mesa!
          </p>
          <div className="flex flex-wrap gap-4">
            <Button
              asChild
              size="lg"
              className="bg-[#CE1212] hover:bg-[#CE1212]/80 text-white font-poppins transition-all transform hover:scale-105"
            >
              <Link to="/productos" className="flex items-center gap-2">
                Ver Catálogo <ArrowRight className="h-5 w-5" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white/20 font-poppins transition-all transform hover:scale-105"
            >
              <Link to="/nosotros">Conocer Nuestra Historia</Link>
            </Button>
          </div>

          <div className="mt-10 flex items-center gap-4 bg-black/50 backdrop-blur-sm p-4 rounded-lg w-fit">
            <div className="bg-[#D4AF37] h-12 w-1 rounded-full"></div>
            <p className="text-lg font-poppins">
              Calidad Premium
              <br />
              Tradición Artesanal
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
