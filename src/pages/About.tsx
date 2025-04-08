import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";

const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

const About = () => {
  return (
    <div className="font-sans">
      {/* Hero Section */}
      <section
        className="hero-gradient relative h-[400px] flex items-center text-white"
        style={
          {
            "--image-url": 'url("/public/images/el-novillo2.webp")',
          } as React.CSSProperties
        }
      >
        <div className="container mx-auto px-4 z-10">
          <motion.div
            className="max-w-2xl"
            initial="hidden"
            animate="visible"
            variants={fadeIn}
          >
            <h1 className="text-5xl font-bold mb-4">Nuestra Historia</h1>
            <p className="text-xl">
              Calidad, tradición y compromiso desde 2020
            </p>
          </motion.div>
        </div>
      </section>

      {/* Origen */}
      <section className="py-16 px-4 bg-[#1B1717] text-white">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              variants={fadeIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold mb-6">
                Un comienzo con propósito
              </h2>
              <p className="mb-4">
                Fundada en 2020,{" "}
                <strong className="text-novillo-gold">Carnes El Novillo</strong>{" "}
                nació en uno de los momentos más desafiantes de nuestra historia
                reciente. En plena pandemia, decidimos abrir nuestras puertas
                con una misión clara: ofrecer{" "}
                <span className="text-novillo-gold">
                  carnes de excelente calidad
                </span>{" "}
                a precios justos, convirtiéndonos en un pilar de apoyo para
                nuestras comunidades en tiempos de incertidumbre.
              </p>
              <p className="mb-4">
                Estamos ubicados en{" "}
                <strong className="text-novillo-gold">Pablo Urzúa 1489</strong>,
                en el corazón de la comuna de{" "}
                <strong className="text-novillo-gold">Independencia</strong>,
                donde nos hemos consolidado como referentes en el rubro cárnico,
                tanto en esta comuna como en zonas aledañas.
              </p>
              <p className="mb-4">
                Nuestra historia es también la historia de nuestros vecinos.
                Muchos de quienes hoy son clientes fieles fueron los primeros en
                apoyarnos cuando comenzamos, recomendándonos entre familias y
                amigos. Gracias a ellos, crecimos no solo como negocio, sino
                como parte de una comunidad que valora el esfuerzo local y la
                cercanía en el servicio.
              </p>
              <p className="mb-4">
                Trabajamos con productores locales para ofrecer{" "}
                <span className="text-novillo-gold">cortes frescos</span>,
                respetando la trazabilidad y la tradición de la cocina chilena.
                Desde entrañas premium hasta costillares y carnes molidas
                especiales, cada corte es una muestra de nuestro compromiso.
              </p>
              <p>
                En{" "}
                <strong className="text-novillo-gold">Carnes El Novillo</strong>{" "}
                no solo vendemos carne, construimos confianza en cada corte y
                llevamos sabor a miles de mesas chilenas. Nos enorgullece ser
                parte de tus celebraciones, asados y comidas en familia.
              </p>
            </motion.div>

            <motion.div
              className="rounded-lg overflow-hidden shadow-lg"
              variants={fadeIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <img
                src="/public/images/el-novillo2.webp"
                alt="Inicios El Novillo"
                className="w-full h-auto"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Misión y Visión */}
      <section className="py-16 px-4 bg-[#CE1212] text-white">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              className="order-2 md:order-1"
              variants={fadeIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <img
                src="https://images.unsplash.com/photo-1542223616-740d5dff7f56?q=80&w=1000"
                alt="Misión y valores"
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </motion.div>

            <motion.div
              className="order-1 md:order-2"
              variants={fadeIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold mb-6">Nuestra Misión</h2>
              <p className="mb-4">
                En{" "}
                <strong className="text-novillo-gold">Carnes El Novillo</strong>
                , nuestro compromiso es ofrecer{" "}
                <span className="text-novillo-gold">
                  carnes de calidad superior
                </span>
                , seleccionadas cuidadosamente y entregadas con una atención
                personalizada que marca la diferencia. Valoramos a cada cliente
                como parte de nuestra comunidad, y buscamos que cada visita sea
                una experiencia completa, desde el saludo inicial hasta el
                momento de disfrutar el producto en casa.
              </p>
              <p>
                Creemos profundamente en la{" "}
                <strong className="text-novillo-gold">
                  cercanía y el trato humano
                </strong>
                , valores que nos han convertido en una carnicería de confianza
                en la comuna de Independencia y sectores aledaños. Compartimos
                con orgullo nuestra pasión por los{" "}
                <span className="text-novillo-gold">
                  cortes tradicionales chilenos
                </span>
                , ideales para la parrilla, el almuerzo familiar o celebraciones
                especiales. Porque más que vender carne, nos dedicamos a brindar
                sabor, tradición y servicio con sentido.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Valores y Filosofía - Nueva sección que reemplaza "Nuestro Proceso" */}
      <section className="py-16 px-4 bg-[#1B1717] text-white">
        <div className="container mx-auto">
          <motion.div
            className="text-center mb-12"
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-4">Nuestros Valores</h2>
            <p className="max-w-2xl mx-auto">
              Los principios que guían nuestro trabajo diario y nuestro compromiso con cada cliente.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Excelencia",
                description: "Nos esforzamos por ofrecer productos de la más alta calidad, con sabor incomparable y presentación impecable.",
                icon: "🏆"
              },
              {
                title: "Honestidad",
                description: "Transparencia en cada proceso, desde la selección de nuestros proveedores hasta la atención personalizada a cada cliente.",
                icon: "🤝"
              },
              {
                title: "Tradición",
                description: "Preservamos las técnicas tradicionales que realzan el sabor auténtico de nuestros cortes, respetando nuestra herencia cultural.",
                icon: "📜"
              },
              {
                title: "Innovación",
                description: "Buscamos constantemente mejorar nuestros procesos y ofrecer nuevas experiencias a nuestros clientes.",
                icon: "💡"
              },
              {
                title: "Responsabilidad Social",
                description: "Comprometidos con nuestra comunidad y con prácticas sostenibles que respetan el medio ambiente.",
                icon: "🌱"
              },
              {
                title: "Pasión",
                description: "Amamos lo que hacemos y esa pasión se refleja en cada uno de nuestros productos y en el servicio que brindamos.",
                icon: "❤️"
              }
            ].map((value, i) => (
              <motion.div
                key={i}
                className="bg-novillo-black/50 backdrop-blur-sm p-6 rounded-lg border border-[#D4AF37]/20 hover:border-[#D4AF37] transition-colors"
                variants={fadeIn}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <div className="text-4xl mb-4 text-center">{value.icon}</div>
                <h3 className="text-xl font-bold mb-3 text-center">{value.title}</h3>
                <p className="text-white/80 text-center">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Sostenibilidad */}
      <section className="py-16 px-4 bg-[#CE1212] text-white">
        <div className="container mx-auto">
          <motion.div
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <div className="order-2 lg:order-1">
              <h2 className="text-3xl font-bold mb-6">
                Compromiso con la Sostenibilidad
              </h2>
              <p className="mb-4">
                Nos comprometemos con el medio ambiente apoyando prácticas
                ganaderas responsables y minimizando nuestro impacto.
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Trazabilidad total de nuestros productos</li>
                <li>Reducción de residuos y uso de embalajes ecológicos</li>
                <li>Alianzas con pequeños productores sustentables</li>
              </ul>
            </div>
            <div className="order-1 lg:order-2 rounded-lg overflow-hidden shadow-lg">
              <img
                src="https://images.unsplash.com/photo-1516267792074-2789d31a3efe?q=80&w=1000"
                alt="Ganadería sostenible"
                className="w-full h-auto"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 bg-[#1B1717] text-white text-center">
        <div className="container mx-auto">
          <motion.h2
            className="text-3xl font-bold mb-6"
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
          >
            ¿Listo para Probar la Diferencia?
          </motion.h2>
          <motion.p
            className="text-xl mb-8 max-w-2xl mx-auto"
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
          >
            Explora nuestro catálogo y descubre por qué cada vez más chilenos
            eligen{" "}
            <strong className="text-novillo-gold">Carnes El Novillo</strong>.
          </motion.p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button
              asChild
              size="lg"
              className="bg-novillo-red hover:bg-red-900 text-white"
            >
              <Link to="/productos">Ver Productos</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white/10"
            >
              <Link to="/contacto">Contacto</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
