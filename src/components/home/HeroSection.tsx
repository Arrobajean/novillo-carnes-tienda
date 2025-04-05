
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

export const HeroSection = () => {
  return (
    <section
      className="hero-gradient relative h-[500px] md:h-[600px] flex items-center text-white"
      style={
        {
          "--image-url":
            'url("https://images.unsplash.com/photo-1594041680534-e8c8cdebd659?q=80&w=2000")',
        } as React.CSSProperties
      }
    >
      <div className="container mx-auto px-4 z-10 relative">
        <div className="max-w-2xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 animate-fade-in">
            Tradición y Calidad en Cada Corte
          </h1>
          <p className="text-xl md:text-2xl mb-8 animate-fade-in opacity-100 text-white">
            Descubre los mejores cortes de carne fresca, seleccionados por
            expertos para tu mesa
          </p>
          <div className="flex flex-wrap gap-4 animate-fade-in">
            <Button
              asChild
              size="lg"
              className="bg-primary hover:bg-primary/80 text-white"
            >
              <Link to="/productos">Ver Productos</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white/10"
            >
              <Link to="/nosotros">Conocer Más</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
