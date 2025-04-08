import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export const AboutSection = () => {
  return (
    <section className="py-16 px-4 bg-[#1B1717] text-[#EEEBDD] font-sans">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Texto */}
          <div>
            <h2 className="text-3xl font-bold mb-6 text-white">
              Nuestra Historia
            </h2>
            <p className="mb-4">
              Fundada en 2020,{" "}
              <span className="text-[#CE1212] font-semibold">
                Carnes El Novillo
              </span>{" "}
              nace del compromiso de una familia apasionada por la buena carne.
              Desde nuestros inicios en Santiago, nos propusimos llevar a la
              mesa de cada cliente productos frescos, sabrosos y de origen
              responsable.
            </p>
            <p className="mb-6">
              Con un enfoque en calidad y cercanía, trabajamos directamente con
              productores locales y seleccionamos cada corte pensando en el
              sabor y la tradicióaaaaaaaaaaaaaaaaaaaaaaaaaaaan chilena. Nos
              hemos ganado la confianza de cientos de familias que nos eligen
              semana a semana.
            </p>
            <Button
              asChild
              variant="link"
              className="text-[#CE1212] hover:text-[#CE1212]/80 p-0 h-auto font-semibold"
            >
              <Link to="/nosotros" className="inline-flex items-center">
                Conoce nuestra historia
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>

          {/* Imagen */}
          <div className="relative">
            <img
              src="/public/images/ui/pedidos-novillo.jpg"
              alt="Carnicería El Novillo"
              className="rounded-lg shadow-lg w-full h-auto object-cover"
            />
            <div className="absolute -bottom-8 -left-8 bg-[#CE1212] text-white p-6 rounded-lg shadow-lg max-w-[280px] hidden md:block">
              <p className="text-base font-semibold leading-snug">
                “Desde 2020, calidad y sabor auténtico para tu familia”
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
