
import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { useState } from "react";

// Componente de estrellas
const RatingStars = ({ rating }: { rating: number }) => (
  <div className="flex">
    {[...Array(5)].map((_, i) => (
      <Star
        key={i}
        className={`h-4 w-4 ${
          i < rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"
        }`}
      />
    ))}
  </div>
);

// Datos simulados con más reseñas
const googleReviews = [
  {
    name: "Roberto Méndez",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    rating: 5,
    date: "hace 3 semanas",
    text: "Excelente carnicería, siempre me atienden de maravilla. La calidad de la carne es extraordinaria y los precios son muy competitivos. Recomendado 100%.",
  },
  {
    name: "Carolina Vergara",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    rating: 5,
    date: "hace 1 mes",
    text: "Sus combos familiares son perfectos para nuestras reuniones. Todo fresco y de excelente calidad. El servicio es rápido y siempre acertado.",
  },
  {
    name: "Francisco Rojas",
    image: "https://randomuser.me/api/portraits/men/67.jpg",
    rating: 4,
    date: "hace 2 meses",
    text: "Muy buenos cortes y servicio. Las promociones son excelentes. Punto a mejorar: a veces hay que esperar un poco porque tienen mucha clientela, ¡pero vale la pena!",
  },
  {
    name: "Marta Gutiérrez",
    image: "https://randomuser.me/api/portraits/women/26.jpg",
    rating: 5,
    date: "hace 1 mes",
    text: "Mi carnicería favorita, siempre encuentro cortes frescos y de alta calidad. El personal es muy amable y conocedor, siempre me aconsejan muy bien sobre qué comprar según lo que voy a preparar.",
  },
  {
    name: "Jorge Salinas",
    image: "https://randomuser.me/api/portraits/men/41.jpg",
    rating: 5,
    date: "hace 3 meses",
    text: "Los mejores precios y la mejor calidad. Compro aquí desde hace años y nunca me han decepcionado. Sus promociones de fin de semana son geniales para las parrilladas familiares.",
  },
  {
    name: "Ana María Contreras",
    image: "https://randomuser.me/api/portraits/women/63.jpg",
    rating: 4,
    date: "hace 1 mes",
    text: "Me encanta la variedad de productos que tienen. Los cortes son siempre frescos y la atención es excelente. Recomiendo probar sus promociones familiares.",
  },
  {
    name: "Pedro González",
    image: "https://randomuser.me/api/portraits/men/22.jpg",
    rating: 5,
    date: "hace 2 semanas",
    text: "Carnicería de primera calidad. Las carnes son frescas y tienen excelente sabor. El personal es muy atento y me ayuda a elegir los mejores cortes para cada ocasión.",
  },
];

const GoogleReviews = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const reviewsToShow =
    typeof window !== "undefined" && window.innerWidth >= 768 ? 3 : 1;
  const totalReviews = googleReviews.length;

  const nextReviews = () => {
    setActiveIndex((prev) => (prev + 1) % (totalReviews - (reviewsToShow - 1)));
  };

  const prevReviews = () => {
    setActiveIndex((prev) =>
      prev === 0 ? totalReviews - reviewsToShow : prev - 1
    );
  };

  return (
    <section className="py-16 px-4 bg-gray-100">
      <div className="container mx-auto">
        {/* Encabezado */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <div className="flex justify-center items-center gap-2 mb-3">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/1200px-Google_%22G%22_Logo.svg.png"
              alt="Google Logo"
              className="h-7 w-auto sm:h-8"
            />
            <h2 className="text-2xl sm:text-3xl font-semibold text-gray-800">
              Reseñas
            </h2>
          </div>

          <p className="max-w-2xl mx-auto text-gray-600">
            Opiniones de nuestros clientes en Google
          </p>

          <div className="flex justify-center items-center mt-2 mb-6">
            <RatingStars rating={4.8} />
            <span className="text-base font-semibold ml-2">4.8</span>
            <span className="text-gray-500 ml-1 text-sm">
              ({totalReviews} reseñas)
            </span>
          </div>
        </motion.div>

        {/* Navegación móvil */}
        <div className="relative">
          <div className="md:hidden flex justify-between absolute top-1/2 left-0 right-0 -translate-y-1/2 z-10 px-2">
            <button
              onClick={prevReviews}
              className="bg-white rounded-full p-2 shadow-md hover:bg-gray-100"
              aria-label="Reseñas anteriores"
            >
              <svg
                width="24"
                height="24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <polyline points="15 18 9 12 15 6"></polyline>
              </svg>
            </button>
            <button
              onClick={nextReviews}
              className="bg-white rounded-full p-2 shadow-md hover:bg-gray-100"
              aria-label="Reseñas siguientes"
            >
              <svg
                width="24"
                height="24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <polyline points="9 18 15 12 9 6"></polyline>
              </svg>
            </button>
          </div>

          {/* Tarjetas */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {googleReviews
              .slice(activeIndex, activeIndex + reviewsToShow)
              .map((review, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-lg shadow-md border border-gray-200 flex flex-col min-h-[300px]"
                >
                  <div className="p-4 border-b border-gray-100">
                    <div className="flex items-center mb-2">
                      <img
                        src={review.image}
                        alt={review.name}
                        className="w-10 h-10 rounded-full mr-3 border border-gray-300"
                      />
                      <div>
                        <h4 className="font-medium text-gray-800">
                          {review.name}
                        </h4>
                        <span className="text-xs text-gray-500">
                          {review.date}
                        </span>
                      </div>
                    </div>
                    <RatingStars rating={review.rating} />
                  </div>

                  <div className="p-4 flex-grow">
                    <p className="text-sm text-gray-700">{review.text}</p>
                  </div>

                  {/* Footer fijo */}
                  <div className="px-4 py-2 bg-gray-50 border-t border-gray-200 flex items-center">
                    <img
                      src="/public/lovable-uploads/6b236ce7-68d7-44f3-9e87-106f6e078528.png"
                      alt="Publicado en Google"
                      className="h-4 w-auto mr-2"
                    />
                    <span className="text-xs text-gray-500">
                      Publicado en Google
                    </span>
                  </div>
                </motion.div>
              ))}
          </div>

          {/* Navegación desktop */}
          <div className="hidden md:flex justify-center mt-8 gap-3">
            <button
              onClick={prevReviews}
              className="w-10 h-10 bg-white border border-gray-300 rounded-full flex items-center justify-center hover:bg-gray-100"
            >
              <svg width="20" height="20" stroke="currentColor">
                <polyline points="15 18 9 12 15 6" />
              </svg>
            </button>
            {[...Array(Math.ceil(totalReviews / 3))].map((_, i) => (
              <button
                key={i}
                onClick={() => setActiveIndex(i * 3)}
                className={`w-3 h-3 rounded-full ${
                  activeIndex === i * 3 ? "bg-gray-800" : "bg-gray-300"
                }`}
              />
            ))}
            <button
              onClick={nextReviews}
              className="w-10 h-10 bg-white border border-gray-300 rounded-full flex items-center justify-center hover:bg-gray-100"
            >
              <svg width="20" height="20" stroke="currentColor">
                <polyline points="9 18 15 12 9 6" />
              </svg>
            </button>
          </div>
        </div>

        {/* Enlace inferior */}
        <div className="text-center mt-8">
          <a
            href="https://g.page/r/CfG_Flk8x_e9EB0/review"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium"
          >
            <span>Dejanos tu opinión en Google</span>
            <svg width="20" height="20" stroke="currentColor" className="ml-2">
              <path d="M7 17L17 7" />
              <path d="M7 7h10v10" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default GoogleReviews;
