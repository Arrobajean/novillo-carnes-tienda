import { motion } from "framer-motion";

export const TestimonialsSection = () => {
  return (
    <section
      className="relative py-16 px-4 text-accent-foreground"
      style={{
        backgroundImage: 'url("/public/images/ui/background-pattern.jpg")',
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Overlay oscuro */}
      <div className="absolute inset-0 bg-black/70 z-0" />

      <div className="container mx-auto relative z-10">
        <motion.h2
          className="text-3xl font-semibold mb-12 text-center text-white"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          Lo Que Dicen Nuestros Clientes
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              name: "Roberto Méndez",
              image: "https://randomuser.me/api/portraits/men/32.jpg",
              since: "Cliente desde 2018",
              quote:
                "La calidad de la carne es extraordinaria. Siempre encuentro cortes frescos y el servicio es excelente. Mi carnicería de confianza.",
            },
            {
              name: "Carolina Vega",
              image: "https://randomuser.me/api/portraits/women/44.jpg",
              since: "Cliente desde 2020",
              quote:
                "Sus promociones familiares son perfectas para nuestros asados de fin de semana. Siempre recomiendo El Novillo a mis amigos y familiares.",
            },
            {
              name: "Javier Soto",
              image: "https://randomuser.me/api/portraits/men/67.jpg",
              since: "Cliente desde 2015",
              quote:
                "Como chef, valoro la consistencia en la calidad. El Novillo nunca me ha decepcionado, sus cortes son siempre de primera categoría.",
            },
          ].map((testimonial, index) => (
            <motion.div
              key={index}
              className="bg-white/10 backdrop-blur-sm p-6 rounded-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center mb-4">
                <img
                  src={testimonial.image}
                  alt={`Foto de ${testimonial.name}`}
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-medium text-white">{testimonial.name}</h4>
                  <p className="text-sm text-white/60">{testimonial.since}</p>
                </div>
              </div>
              <p className="italic text-white/80">"{testimonial.quote}"</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
