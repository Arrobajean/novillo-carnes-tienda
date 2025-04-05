
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Truck, ShoppingCart, CreditCard, CheckCircle } from "lucide-react";

export const CTASection = () => {
  return (
    <section
      className="py-20 bg-novillo-black text-white"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Tu Compra <span className="text-[#D4AF37]">Rápida y Segura</span>
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-white/90">
            Lleva la calidad de Carnes el Novillo a tu mesa en simples pasos
          </p>

          {/* Process Steps */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-5xl mx-auto mt-12">
            <div className="bg-novillo-black/50 backdrop-blur-sm p-6 rounded-lg border border-[#D4AF37]/20 hover:border-[#D4AF37] transition-colors">
              <div className="bg-gradient-to-br from-novillo-red to-novillo-red/70 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <ShoppingCart className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">1. Elige tus Productos</h3>
              <p className="text-white/70">Selecciona los mejores cortes de nuestra amplia variedad</p>
            </div>
            
            <div className="bg-novillo-black/50 backdrop-blur-sm p-6 rounded-lg border border-[#D4AF37]/20 hover:border-[#D4AF37] transition-colors">
              <div className="bg-gradient-to-br from-novillo-red to-novillo-red/70 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <CreditCard className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">2. Realiza tu Pago</h3>
              <p className="text-white/70">Múltiples métodos de pago seguros y confiables</p>
            </div>
            
            <div className="bg-novillo-black/50 backdrop-blur-sm p-6 rounded-lg border border-[#D4AF37]/20 hover:border-[#D4AF37] transition-colors">
              <div className="bg-gradient-to-br from-novillo-red to-novillo-red/70 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Truck className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">3. Elige tu Entrega</h3>
              <p className="text-white/70">Despacho a domicilio o retiro en nuestra tienda</p>
            </div>
            
            <div className="bg-novillo-black/50 backdrop-blur-sm p-6 rounded-lg border border-[#D4AF37]/20 hover:border-[#D4AF37] transition-colors">
              <div className="bg-gradient-to-br from-novillo-red to-novillo-red/70 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">4. Disfruta</h3>
              <p className="text-white/70">Recibe productos frescos listos para preparar</p>
            </div>
          </div>
        </div>
        
        <div className="bg-gradient-to-r from-novillo-red to-[#A00000] p-8 md:p-12 rounded-xl max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold mb-2">
                ¡Haz tu Pedido Ahora!
              </h3>
              <p className="text-white/90 mb-0">
                Envíos a toda la Región Metropolitana
              </p>
            </div>
            <Button
              asChild
              size="lg"
              className="bg-white hover:bg-white/90 text-novillo-red"
            >
              <Link to="/productos" className="text-lg font-medium">Comprar Ahora</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
