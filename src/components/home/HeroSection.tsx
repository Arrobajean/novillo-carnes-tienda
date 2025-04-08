
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export const HeroSection = () => {
  return (
    <section
      className="hero-gradient relative h-[600px] md:h-[650px] flex items-center text-white"
      style={
        {
          "--image-url":
            'url("https://images.unsplash.com/photo-1607623814075-e51df1bdc82f?q=80&w=2000")',
        } as React.CSSProperties
      }
    >
      <div className="container mx-auto px-4 z-10 relative">
        <div className="max-w-2xl">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight animate-fade-in font-poppins">
            Los Mejores Cortes Para <br />
            <span className="text-[#D4AF37]">Tu Mesa</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 animate-fade-in opacity-100 text-white/90 font-poppins">
            Descubre nuestros cortes premium a precios irresistibles. Recibe
            carne de la más alta calidad a domicilio, sin renunciar al auténtico
            sabor. ¡Lleva lo mejor a tu mesa!
          </p>
          <div className="flex flex-wrap gap-4 animate-fade-in">
            <Button
              asChild
              size="lg"
              className="bg-[#CE1212] hover:bg-[#CE1212]/80 text-white font-poppins"
            >
              <Link to="/productos" className="flex items-center gap-2">
                Ver Catálogo <ArrowRight className="h-5 w-5" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white/10 font-poppins"
            >
              <Link to="/nosotros">Conocer Nuestra Historia</Link>
            </Button>
          </div>

          <div className="mt-10 flex items-center gap-4 bg-black/30 backdrop-blur-sm p-4 rounded-lg w-fit animate-fade-in">
            <div className="bg-[#D4AF37] h-12 w-1 rounded-full"></div>
            <p className="text-lg font-poppins">
              Envíos a domicilio en
              <br />
              toda la Región Metropolitana.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
