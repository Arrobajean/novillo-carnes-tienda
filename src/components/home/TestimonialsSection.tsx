
import { motion } from "framer-motion";
import { Star } from "lucide-react";

// Rating stars component
const RatingStars = ({ rating }: { rating: number }) => {
  return (
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
};

export const TestimonialsSection = () => {
  return (
    <section className="relative py-16 px-4 bg-gray-100">
      <div className="container mx-auto">
        <motion.div
          className="text-center mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <div className="flex justify-center mb-4 items-center">
            <img
              src="/lovable-uploads/f5f3e536-1879-4fb0-a148-3b507fc2f2d4.png"
              alt="Google Logo"
              className="h-8 w-auto mr-2"
            />
            <h2 className="text-3xl font-semibold text-gray-800">Reseñas</h2>
          </div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Opiniones de nuestros clientes en Google
          </p>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex justify-center items-center mt-2 mb-6"
          >
            <div className="flex mr-2">
              <RatingStars rating={5} />
            </div>
            <span className="text-lg font-semibold">4.9</span>
            <span className="text-gray-500 ml-1">(28 reseñas)</span>
          </motion.div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              name: "Roberto Méndez",
              image: "https://randomuser.me/api/portraits/men/32.jpg",
              date: "hace 3 semanas",
              rating: 5,
              text: "Excelente carnicería, siempre me atienden de maravilla. La calidad de la carne es extraordinaria y los precios son muy competitivos. Recomendado 100%."
            },
            {
              name: "Carolina Vega",
              image: "https://randomuser.me/api/portraits/women/44.jpg",
              date: "hace 1 mes",
              rating: 5,
              text: "Sus promociones familiares son perfectas para nuestros asados de fin de semana. Siempre recomiendo El Novillo a mis amigos y familiares."
            },
            {
              name: "Javier Soto",
              image: "https://randomuser.me/api/portraits/men/67.jpg",
              date: "hace 3 meses",
              rating: 5,
              text: "Como chef, valoro la consistencia en la calidad. El Novillo nunca me ha decepcionado, sus cortes son siempre de primera categoría."
            },
          ].map((testimonial, index) => (
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
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-10 h-10 rounded-full mr-3 border border-gray-200"
                  />
                  <div>
                    <h4 className="font-medium text-gray-800">{testimonial.name}</h4>
                    <div className="flex items-center text-gray-500 text-xs">
                      <span>{testimonial.date}</span>
                    </div>
                  </div>
                </div>
                <div className="flex">
                  <RatingStars rating={testimonial.rating} />
                </div>
              </div>

              {/* Contenido de la reseña */}
              <div className="p-4">
                <p className="text-gray-700 text-sm">{testimonial.text}</p>
              </div>

              {/* Footer con logo de Google */}
              <div className="px-4 py-2 bg-gray-50 flex items-center border-t border-gray-100">
                <img
                  src="/lovable-uploads/f5f3e536-1879-4fb0-a148-3b507fc2f2d4.png"
                  alt="Google Logo"
                  className="h-4 w-auto mr-1"
                />
                <span className="text-xs text-gray-500">Publicado en Google</span>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-8">
          <a
            href="https://g.page/r/CfG_Flk8x_e9EB0/review"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium"
          >
            <span>Dejanos tu opinión en Google</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="ml-2"
            >
              <path d="M7 17L17 7"></path>
              <path d="M7 7h10v10"></path>
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};
