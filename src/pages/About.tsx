
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const About = () => {
  return (
    <div>
      {/* Hero Section */}
      <section 
        className="hero-gradient relative h-[400px] flex items-center text-white" 
        style={{ 
          '--image-url': 'url("https://images.unsplash.com/photo-1553163147-622ab57be1c7?q=80&w=2000")' 
        } as React.CSSProperties}
      >
        <div className="container mx-auto px-4 z-10">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-4">
              Nuestra Historia
            </h1>
            <p className="text-xl">
              Tradición, pasión y compromiso con la calidad desde 1985
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <h2 className="text-3xl font-serif font-semibold mb-6 text-gray-800">Nuestros Inicios</h2>
              <p className="text-gray-600 mb-4 font-sans">
                Carnes el Novillo nació en 1985 como un pequeño local familiar en el barrio Providencia de Santiago. Fundado por Don Manuel Soto, un apasionado por la gastronomía y la tradición de las carnes chilenas, el negocio comenzó con una simple promesa: ofrecer los cortes más frescos y de mejor calidad a las familias de la zona.
              </p>
              <p className="text-gray-600 mb-4 font-sans">
                Durante esos primeros años, Don Manuel seleccionaba personalmente cada corte, estableciendo relaciones directas con productores locales que compartían su visión de calidad y trazabilidad.
              </p>
              <p className="text-gray-600 font-sans">
                Lo que comenzó como un pequeño negocio de barrio pronto se convirtió en un referente de calidad para los amantes de la buena carne en Santiago.
              </p>
            </div>
            <div className="rounded-lg overflow-hidden shadow-lg">
              <img 
                src="https://images.unsplash.com/photo-1545213816-e1f1e54e4911?q=80&w=1000" 
                alt="Nuestros inicios" 
                className="w-full h-auto"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
            <div className="order-2 md:order-1 rounded-lg overflow-hidden shadow-lg">
              <img 
                src="https://images.unsplash.com/photo-1542223616-740d5dff7f56?q=80&w=1000" 
                alt="Tradición familiar" 
                className="w-full h-auto"
              />
            </div>
            <div className="order-1 md:order-2">
              <h2 className="text-3xl font-serif font-semibold mb-6 text-gray-800">Tradición Familiar</h2>
              <p className="text-gray-600 mb-4 font-sans">
                Hoy, la segunda generación de la familia Soto continúa al frente de Carnes el Novillo, manteniendo vivos los valores y conocimientos que Don Manuel inculcó desde el inicio. 
              </p>
              <p className="text-gray-600 mb-4 font-sans">
                Cada día seleccionamos los mejores cortes, manteniendo acuerdos con productores locales que garantizan prácticas sostenibles y el bienestar animal. Nuestro compromiso con la calidad sigue siendo inquebrantable, así como nuestra dedicación a ofrecer un servicio personalizado.
              </p>
              <p className="text-gray-600 font-sans">
                La experiencia acumulada durante casi cuatro décadas nos ha permitido perfeccionar nuestros procesos de selección y maduración, asegurando que cada corte que llega a tu mesa sea excepcional.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section - Expanded */}
      <section className="py-16 px-4 bg-novillo-light">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-serif font-semibold mb-4 text-gray-800">Nuestros Valores</h2>
            <p className="text-gray-600 max-w-2xl mx-auto font-sans">
              Los principios que guían cada decisión que tomamos y cada producto que ofrecemos
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="w-16 h-16 bg-novillo-red/10 rounded-full flex items-center justify-center mb-6 mx-auto">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-novillo-red" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="m8 3 4 8 5-5 5 15H2L8 3z"/>
                </svg>
              </div>
              <h3 className="text-xl font-serif font-semibold mb-3 text-center text-gray-800">Calidad</h3>
              <p className="text-gray-600 text-center font-sans">
                Seleccionamos cuidadosamente cada corte para garantizar la frescura, sabor y textura perfecta en cada producto que ofrecemos.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="w-16 h-16 bg-novillo-red/10 rounded-full flex items-center justify-center mb-6 mx-auto">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-novillo-red" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"/>
                </svg>
              </div>
              <h3 className="text-xl font-serif font-semibold mb-3 text-center text-gray-800">Confianza</h3>
              <p className="text-gray-600 text-center font-sans">
                Construimos relaciones duraderas con nuestros clientes, basadas en la transparencia, la honestidad y el cumplimiento de nuestras promesas.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="w-16 h-16 bg-novillo-red/10 rounded-full flex items-center justify-center mb-6 mx-auto">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-novillo-red" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"/>
                  <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"/>
                  <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"/>
                  <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"/>
                </svg>
              </div>
              <h3 className="text-xl font-serif font-semibold mb-3 text-center text-gray-800">Tradición</h3>
              <p className="text-gray-600 text-center font-sans">
                Honramos las técnicas tradicionales de selección y corte que han sido transmitidas por generaciones, combinándolas con las mejores prácticas actuales.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* New Section: Our Process */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-serif font-semibold mb-4 text-gray-800">Nuestro Proceso</h2>
            <p className="text-gray-600 max-w-2xl mx-auto font-sans">
              Cada corte que ofrecemos pasa por un meticuloso proceso de selección y preparación
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="mb-8">
                <h3 className="text-2xl font-serif font-semibold mb-4 text-gray-800">Selección</h3>
                <p className="text-gray-600 mb-4 font-sans">
                  Trabajamos exclusivamente con productores que comparten nuestra filosofía de bienestar animal y calidad. Cada animal es cuidadosamente seleccionado según criterios estrictos de edad, alimentación y crianza.
                </p>
              </div>
              <div className="mb-8">
                <h3 className="text-2xl font-serif font-semibold mb-4 text-gray-800">Maduración</h3>
                <p className="text-gray-600 mb-4 font-sans">
                  Permitimos que nuestras carnes maduren por el tiempo óptimo en condiciones controladas de temperatura y humedad. Este proceso natural potencia los sabores y garantiza una textura perfecta.
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-serif font-semibold mb-4 text-gray-800">Corte y Preparación</h3>
                <p className="text-gray-600 font-sans">
                  Nuestros maestros carniceros, con años de experiencia, realizan cada corte con precisión artesanal, respetando las características naturales de la carne para potenciar su sabor y jugosidad.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <Card className="overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=987&auto=format&fit=crop" 
                  alt="Selección de carnes" 
                  className="w-full h-48 object-cover"
                />
                <CardContent className="p-4">
                  <p className="font-medium text-center font-sans">Selección Premium</p>
                </CardContent>
              </Card>
              <Card className="overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba?q=80&w=1000&auto=format&fit=crop" 
                  alt="Maduración" 
                  className="w-full h-48 object-cover"
                />
                <CardContent className="p-4">
                  <p className="font-medium text-center font-sans">Proceso de Maduración</p>
                </CardContent>
              </Card>
              <Card className="overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1608877907149-a206d75ba011?q=80&w=1000&auto=format&fit=crop" 
                  alt="Corte artesanal" 
                  className="w-full h-48 object-cover"
                />
                <CardContent className="p-4">
                  <p className="font-medium text-center font-sans">Corte Artesanal</p>
                </CardContent>
              </Card>
              <Card className="overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1607623814075-e51df1bdc82f?q=80&w=1000&auto=format&fit=crop" 
                  alt="Producto final" 
                  className="w-full h-48 object-cover"
                />
                <CardContent className="p-4">
                  <p className="font-medium text-center font-sans">Producto Final</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* New Section: Sustainability */}
      <section className="py-16 px-4 bg-novillo-light">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <h2 className="text-3xl font-serif font-semibold mb-6 text-gray-800">Compromiso con la Sostenibilidad</h2>
              <p className="text-gray-600 mb-4 font-sans">
                En Carnes el Novillo, la sostenibilidad no es solo una tendencia, es parte fundamental de nuestro negocio. Trabajamos exclusivamente con productores comprometidos con prácticas ganaderas responsables y el bienestar animal.
              </p>
              <p className="text-gray-600 mb-4 font-sans">
                Nuestra filosofía se basa en el respeto por la tierra y los animales, por eso priorizamos relaciones con ganaderos que implementan métodos de producción sostenibles, pastoreo rotacional y alimentación natural.
              </p>
              <ul className="list-disc pl-6 text-gray-600 mb-4 font-sans">
                <li className="mb-2">Trazabilidad completa desde el origen hasta tu mesa</li>
                <li className="mb-2">Minimización de residuos en toda nuestra cadena de producción</li>
                <li className="mb-2">Embalajes ecológicos y reducción del plástico</li>
                <li>Apoyo a pequeños productores locales comprometidos con el medio ambiente</li>
              </ul>
            </div>
            <div className="order-1 lg:order-2 rounded-lg overflow-hidden shadow-lg">
              <img 
                src="https://images.unsplash.com/photo-1516267792074-2789d31a3efe?q=80&w=1000" 
                alt="Ganadería sostenible" 
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-novillo-brown text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-serif font-bold mb-6">¿Listo para Probar la Diferencia?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto font-sans">
            Explora nuestro catálogo y descubre por qué tantas familias confían en Carnes el Novillo desde hace casi cuatro décadas
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
