
import { Link } from "react-router-dom";
import { ArrowRight, Check } from "lucide-react";
import { Button } from "@/components/ui/button";

export const AboutSection = () => {
  const reasons = [
    "Carnes frescas seleccionadas diariamente",
    "Cortes realizados por maestros carniceros",
    "Precios justos y competitivos",
    "Envíos a domicilio en toda la Región Metropolitana",
    "Atención personalizada y asesoría en tus compras"
  ];
  
  return (
    <section className="py-16 px-4 bg-[#1B1717] text-[#EEEBDD] font-poppins">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Texto */}
          <div>
            <h2 className="text-3xl font-bold mb-6 text-white">
              ¿Por qué comprar en Carnes El Novillo?
            </h2>
            
            <ul className="mb-6 space-y-3">
              {reasons.map((reason, index) => (
                <li key={index} className="flex items-start">
                  <Check className="mr-2 h-5 w-5 text-[#D4AF37] mt-1 shrink-0" />
                  <span>{reason}</span>
                </li>
              ))}
            </ul>
            
            <p className="mb-6">
              En <span className="text-[#CE1212] font-semibold">Carnes El Novillo</span> nos 
              comprometemos con la calidad y el sabor. Trabajamos directamente con productores locales 
              y seleccionamos cada corte pensando en la satisfacción de nuestros clientes.
            </p>
            
            <Button
              asChild
              variant="link"
              className="text-[#CE1212] hover:text-[#CE1212]/80 p-0 h-auto font-semibold"
            >
              <Link to="/productos" className="inline-flex items-center">
                Ver nuestros productos
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
                "Calidad y sabor auténtico para tu familia desde 2020"
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
