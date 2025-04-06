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
            "--image-url":
              'url("https://images.unsplash.com/photo-1553163147-622ab57be1c7?q=80&w=2000")',
          } as React.CSSProperties
        }
      >
        <div className="container mx-auto px-4 z-10">
          <div className="max-w-2xl">
            <h1 className="text-5xl font-bold mb-4 font-sans">
              Nuestra Historia
            </h1>
            <p className="text-xl">
              Calidad, tradición y compromiso desde 2020
            </p>
          </div>
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
              <h2 className="text-3xl font-bold mb-6 text-white">
                Un comienzo con propósito
              </h2>
              <p className="mb-4">
                Fundada en 2020, <strong>Carnes El Novillo</strong> nació con la
                misión de ofrecer carnes de alta calidad a precios justos. En
                plena pandemia, vimos la oportunidad de apoyar a nuestras
                comunidades ofreciendo productos confiables y un trato cercano.
              </p>
              <p className="mb-4">
                Desde nuestros inicios en Santiago, hemos trabajado con
                productores locales para entregar cortes frescos y
                seleccionados, respetando siempre el origen y las tradiciones
                chilenas.
              </p>
              <p>
                Nos enorgullece ser una carnicería que entiende lo que valoran
                las familias chilenas: calidad, honestidad y un buen servicio.
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
                src="https://images.unsplash.com/photo-1545213816-e1f1e54e4911?q=80&w=1000"
                alt="Inicios El Novillo"
                className="w-full h-auto"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Misión y visión */}
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
              <h2 className="text-3xl font-bold mb-6 text-white">
                Nuestra Misión
              </h2>
              <p className="mb-4">
                Nuestro objetivo es ofrecer carnes de calidad superior con
                atención personalizada. Cada cliente es importante y merece una
                experiencia única, desde la atención hasta el producto final.
              </p>
              <p>
                Creemos en la cercanía, en el trato humano, y en compartir
                nuestra pasión por los cortes tradicionales que tanto gustan en
                las parrillas chilenas.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Nuestro Proceso */}
      <section className="py-16 px-4 bg-[#1B1717] text-white">
        <div className="container mx-auto">
          <motion.div
            className="text-center mb-12"
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-4 text-white">
              Nuestro Proceso
            </h2>
            <p className="max-w-2xl mx-auto">
              Cada corte que ofrecemos pasa por un meticuloso proceso de
              selección y preparación artesanal
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              variants={fadeIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <div className="mb-8">
                <h3 className="text-2xl font-semibold mb-4 text-white">
                  Selección
                </h3>
                <p className="mb-4">
                  Trabajamos con proveedores que valoran el bienestar animal y
                  la trazabilidad. Solo seleccionamos lo mejor.
                </p>
              </div>
              <div className="mb-8">
                <h3 className="text-2xl font-semibold mb-4 text-white">
                  Maduración
                </h3>
                <p className="mb-4">
                  Nuestras carnes maduran el tiempo justo para potenciar su
                  sabor y lograr una textura ideal para parrilla o cocina.
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-4 text-white">
                  Corte y Preparación
                </h3>
                <p>
                  Nuestros carniceros realizan cada corte con precisión
                  artesanal, cuidando cada detalle para entregar la mejor
                  calidad.
                </p>
              </div>
            </motion.div>

            <motion.div
              className="grid grid-cols-2 gap-4"
              variants={fadeIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {[
                {
                  title: "Selección Premium",
                  src: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=987",
                },
                {
                  title: "Proceso de Maduración",
                  src: "https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba?q=80&w=1000",
                },
                {
                  title: "Corte Artesanal",
                  src: "https://images.unsplash.com/photo-1608877907149-a206d75ba011?q=80&w=1000",
                },
                {
                  title: "Producto Final",
                  src: "https://images.unsplash.com/photo-1607623814075-e51df1bdc82f?q=80&w=1000",
                },
              ].map((item, i) => (
                <Card key={i} className="overflow-hidden">
                  <img
                    src={item.src}
                    alt={item.title}
                    className="w-full h-48 object-cover"
                  />
                  <CardContent className="p-4">
                    <p className="font-medium text-center">{item.title}</p>
                  </CardContent>
                </Card>
              ))}
            </motion.div>
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
              <h2 className="text-3xl font-bold mb-6 text-white">
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
          <h2 className="text-3xl font-bold mb-6">
            ¿Listo para Probar la Diferencia?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Explora nuestro catálogo y descubre por qué cada vez más chilenos
            eligen Carnes el Novillo.
          </p>
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
