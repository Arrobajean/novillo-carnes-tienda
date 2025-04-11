
import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { useState } from "react";

// Componente para estrellas de calificación
const RatingStars = ({ rating }: { rating: number }) => {
  return (
    <div className="flex">
      {[...Array(5)].map((_, i) => (
        <Star
          key={i}
          className={`h-4 w-4 ${i < rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}`}
        />
      ))}
    </div>
  );
};

// Reviews data
const googleReviews = [
  {
    name: "Roberto Méndez",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    rating: 5,
    date: "hace 3 semanas",
    text: "Excelente carnicería, siempre me atienden de maravilla. La calidad de la carne es extraordinaria y los precios son muy competitivos. Recomendado 100%."
  },
  {
    name: "Carolina Vergara",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    rating: 5,
    date: "hace 1 mes",
    text: "Sus combos familiares son perfectos para nuestras reuniones. Todo fresco y de excelente calidad. El servicio es rápido y siempre acertado."
  },
  {
    name: "Francisco Rojas",
    image: "https://randomuser.me/api/portraits/men/67.jpg",
    rating: 4,
    date: "hace 2 meses",
    text: "Muy buenos cortes y servicio. Las promociones son excelentes. Punto a mejorar: a veces hay que esperar un poco porque tienen mucha clientela, ¡pero vale la pena!"
  },
  {
    name: "Patricia Soto",
    image: "https://randomuser.me/api/portraits/women/59.jpg",
    rating: 5,
    date: "hace 3 meses",
    text: "Me encanta comprar aquí. El lomo vetado y la plateada son mis favoritos. Todo siempre fresco y bien cortado. Además, tienen servicio a domicilio."
  },
  {
    name: "Miguel Ángel Fernández",
    image: "https://randomuser.me/api/portraits/men/22.jpg",
    rating: 5,
    date: "hace 4 meses",
    text: "Como chef, valoro mucho la calidad de los productos. El Novillo nunca me ha defraudado. Su carne es de primera categoría y los cortes son perfectos."
  }
];

const GoogleReviews = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const totalReviews = googleReviews.length;
  
  // Display 3 reviews on desktop, 1 on mobile
  const reviewsToShow = window.innerWidth >= 768 ? 3 : 1;
  
  const nextReviews = () => {
    setActiveIndex((prev) => (prev + 1) % (totalReviews - (reviewsToShow - 1)));
  };
  
  const prevReviews = () => {
    setActiveIndex((prev) => (prev === 0 ? totalReviews - reviewsToShow : prev - 1));
  };
  
  return (
    <section className="py-16 px-4 bg-gray-100">
      <div className="container mx-auto">
        <div className="text-center mb-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="flex justify-center mb-4"
          >
            <img 
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/1200px-Google_%22G%22_Logo.svg.png" 
              alt="Google Logo" 
              className="h-8 w-auto mr-2"
            />
            <h2 className="text-3xl font-semibold text-gray-800">Reseñas</h2>
          </motion.div>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto text-gray-600"
          >
            Opiniones de nuestros clientes en Google
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex justify-center items-center mt-2 mb-6"
          >
            <div className="flex mr-2">
              <RatingStars rating={4.8} />
            </div>
            <span className="text-lg font-semibold">4.8</span>
            <span className="text-gray-500 ml-1">({googleReviews.length} reseñas)</span>
          </motion.div>
        </div>
        
        <div className="relative">
          {/* Mobile navigation arrows */}
          <div className="md:hidden flex justify-between absolute top-1/2 left-0 right-0 -translate-y-1/2 z-10 px-2">
            <button 
              onClick={prevReviews} 
              className="bg-white rounded-full p-2 shadow-md hover:bg-gray-100 transition-colors"
              aria-label="Reseñas anteriores"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-700">
                <polyline points="15 18 9 12 15 6"></polyline>
              </svg>
            </button>
            <button 
              onClick={nextReviews} 
              className="bg-white rounded-full p-2 shadow-md hover:bg-gray-100 transition-colors"
              aria-label="Reseñas siguientes"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-700">
                <polyline points="9 18 15 12 9 6"></polyline>
              </svg>
            </button>
          </div>
          
          {/* Reviews container - Rediseñado para ser más similar a las tarjetas de Google */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {googleReviews.slice(activeIndex, activeIndex + reviewsToShow).map((review, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-lg shadow-md overflow-hidden"
              >
                {/* Header con información del autor */}
                <div className="p-4 border-b border-gray-100">
                  <div className="flex items-center mb-2">
                    <img 
                      src={review.image} 
                      alt={review.name} 
                      className="w-10 h-10 rounded-full mr-3 border border-gray-200"
                    />
                    <div>
                      <h4 className="font-medium text-gray-800">{review.name}</h4>
                      <div className="flex items-center text-gray-500 text-xs">
                        <span>{review.date}</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex">
                    <RatingStars rating={review.rating} />
                  </div>
                </div>
                
                {/* Contenido de la reseña */}
                <div className="p-4">
                  <p className="text-gray-700 text-sm">{review.text}</p>
                </div>
                
                {/* Footer con logo de Google */}
                <div className="px-4 py-2 bg-gray-50 flex items-center border-t border-gray-100">
                  <img 
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/1200px-Google_%22G%22_Logo.svg.png" 
                    alt="Google Logo" 
                    className="h-4 w-auto mr-1"
                  />
                  <span className="text-xs text-gray-500">Publicado en Google</span>
                </div>
              </motion.div>
            ))}
          </div>
          
          {/* Desktop navigation buttons */}
          <div className="hidden md:flex justify-center mt-8 space-x-4">
            <button 
              onClick={prevReviews}
              className="bg-white border border-gray-300 rounded-full w-10 h-10 flex items-center justify-center hover:bg-gray-100 transition-colors"
              aria-label="Reseñas anteriores"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-700">
                <polyline points="15 18 9 12 15 6"></polyline>
              </svg>
            </button>
            {[...Array(Math.ceil(totalReviews / 3))].map((_, i) => (
              <button
                key={i}
                onClick={() => setActiveIndex(i * 3)}
                className={`w-3 h-3 rounded-full ${activeIndex === i * 3 ? "bg-gray-800" : "bg-gray-300"}`}
                aria-label={`Página de reseñas ${i + 1}`}
              />
            ))}
            <button 
              onClick={nextReviews}
              className="bg-white border border-gray-300 rounded-full w-10 h-10 flex items-center justify-center hover:bg-gray-100 transition-colors"
              aria-label="Reseñas siguientes"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-700">
                <polyline points="9 18 15 12 9 6"></polyline>
              </svg>
            </button>
          </div>
        </div>
        
        <div className="text-center mt-8">
          <a 
            href="https://g.page/r/CfG_Flk8x_e9EB0/review" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium"
          >
            <span>Dejanos tu opinión en Google</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-2">
              <path d="M7 17L17 7"></path>
              <path d="M7 7h10v10"></path>
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default GoogleReviews;
