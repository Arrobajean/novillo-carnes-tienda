
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

    // Limpieza del script cuando el componente se desmonte
    return () => {
      // Solo eliminamos si no hay otras instancias del widget que lo necesiten
      const otherWidgets = document.querySelectorAll('[data-elfsight-app-lazy]');
      if (otherWidgets.length <= 1) {
        const scriptElement = document.getElementById(scriptId);
        if (scriptElement) {
          scriptElement.remove();
        }
      }
    };
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
        
        {/* Información sobre la integración */}
        <div className="text-center mt-8">
          <p className="text-gray-500 text-sm">
            Estas reseñas son proporcionadas directamente por Google Reviews.
          </p>
          <p className="text-gray-500 text-sm">
            Si has disfrutado de nuestros productos, ¡nos encantaría que nos dejaras una reseña!
          </p>
          <a 
            href="https://g.page/r/CX7kRD9MlL_KEBM/review" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex mt-4 text-novillo-red hover:text-novillo-gold transition-colors"
          >
            Escribe una reseña
          </a>
        </div>
      </div>
    </section>
  );
};

export default GoogleReviews;
