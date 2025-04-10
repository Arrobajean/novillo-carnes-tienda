
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Truck, ShoppingCart, CreditCard, CheckCircle } from "lucide-react";

export const CTASection = () => {
  return (
    <section
      className="relative pt-16 pb-10 bg-contain bg-repeat bg-center text-white font-poppins overflow-hidden"
      style={{
        backgroundImage: "url('/images/ui/background-pattern.jpg')",
      }}
    >
      {/* Capa oscura sólida en lugar de glassmorphism */}
      <div className="absolute inset-0 bg-black/80 z-0" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12"> {/* Reduced vertical spacing */}
          <h2 className="text-3xl md:text-4xl font-bold mb-4"> {/* Reduced margin */}
            Tu Compra <span className="text-[#D4AF37]">Rápida y Segura</span>
          </h2>
          <p className="text-xl mb-6 max-w-2xl mx-auto text-white/90"> {/* Reduced margin */}
            Lleva la calidad de Carnes el Novillo a tu mesa en simples pasos
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto mt-8"> {/* Reduced gap and margin */}
            {[
              {
                Icon: ShoppingCart,
                title: "1. Elige tus Productos",
                text: "Selecciona los mejores cortes de nuestra amplia variedad",
              },
              {
                Icon: CreditCard,
                title: "2. Realiza tu Pago",
                text: "Múltiples métodos de pago seguros y confiables",
              },
              {
                Icon: Truck,
                title: "3. Elige tu Entrega",
                text: "Despacho a domicilio o retiro en nuestra tienda",
              },
              {
                Icon: CheckCircle,
                title: "4. Disfruta",
                text: "Recibe productos frescos listos para preparar",
              },
            ].map(({ Icon, title, text }, i) => (
              <div
                key={i}
                className="bg-novillo-black p-4 rounded-lg border border-[#D4AF37]/20 hover:border-[#D4AF37] transition-colors h-full"
              >
                <div className="bg-gradient-to-br from-novillo-red to-novillo-red/70 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold mb-1">{title}</h3>
                <p className="text-white/70 text-sm">{text}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-gradient-to-r from-novillo-red to-[#A00000] p-6 md:p-8 rounded-xl max-w-5xl mx-auto">
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
        </div>
      </div>

      {/* Ola roja que pisa el patrón y conecta con la siguiente sección */}
      <svg
        className="-mb-1 w-full block pointer-events-none mt-8"
        viewBox="0 0 1440 150"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill="#810000"
          d="M0,0 C360,120 1080,0 1440,120 L1440,150 L0,150 Z"
        />
      </svg>
    </section>
  );
};
