
import { Beef, Clock, Award, Users } from "lucide-react";
import { motion } from "framer-motion";

const features = [
  {
    icon: Beef,
    title: "Carne Fresca Diaria",
    description: "Productos frescos seleccionados todos los días para garantizar la máxima calidad."
  },
  {
    icon: Award,
    title: "Cortes Premium",
    description: "Los mejores cortes de carne con estándares de calidad superior."
  },
  {
    icon: Users,
    title: "Atención Personalizada",
    description: "Asesoramiento experto para ayudarte a elegir el corte perfecto."
  },
  {
    icon: Clock,
    title: "Entrega Rápida",
    description: "Servicio eficiente para que recibas tus productos en el menor tiempo posible."
  }
];

export const WhyChooseUsSection = () => {
  return (
    <section className="py-16 px-4 bg-gradient-to-b from-black via-gray-900 to-black font-poppins">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4 text-white">
            ¿Por qué elegirnos?
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Más de una década comprometidos con la calidad y el servicio excepcional
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center group"
              >
                <div className="mb-6 flex justify-center">
                  <div className="w-16 h-16 bg-[#CE1212] rounded-full flex items-center justify-center group-hover:bg-[#B50F0F] transition-colors duration-300">
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-white">
                  {feature.title}
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
