import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

export const CTASection = () => {
  return (
    <section
      className="hero-gradient relative py-20 text-white"
      style={
        {
          "--image-url":
            'url("https://images.unsplash.com/photo-1514326640560-7d063ef2aed5?q=80&w=2000")',
        } as React.CSSProperties
      }
    >
      <div className="container mx-auto px-4 text-center z-10">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 max-w-3xl mx-auto">
          Lleva la Calidad de Carnes el Novillo a Tu Mesa
        </h2>
        <p className="text-xl mb-8 max-w-2xl mx-auto text-foreground/90">
          Explora nuestro catálogo completo y realiza tu pedido hoy mismo
        </p>
        <Button
          asChild
          size="lg"
          className="bg-primary hover:bg-primary/80 text-white"
        >
          <Link to="/productos">Comprar Ahora</Link>
        </Button>
      </div>
    </section>
  );
};
