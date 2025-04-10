
import { useEffect } from "react";

const GoogleReviews = () => {
  useEffect(() => {
    const scriptId = "elfsight-platform-script";
    if (!document.getElementById(scriptId)) {
      const script = document.createElement("script");
      script.src = "https://static.elfsight.com/platform/platform.js";
      script.async = true;
      script.id = scriptId;
      document.body.appendChild(script);
    }
  }, []);

  return (
    <section className="py-16 bg-[#1B1717] text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 font-poppins">Lo Que Dicen Nuestros Clientes</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Descubre por qué nuestros clientes confían en la calidad y sabor de Carnes El Novillo
          </p>
        </div>
        
        {/* Widget de Google Reviews */}
        <div
          className="elfsight-app-df9a3746-d686-43ca-a047-34d98fdd4351"
          data-elfsight-app-lazy
        ></div>
        
        {/* Mensaje para indicar que el componente está listo para la integración */}
        <div className="text-center mt-8 text-sm text-gray-500">
          <p>El componente está listo para la integración con Google Reviews.</p>
        </div>
      </div>
    </section>
  );
};

export default GoogleReviews;
