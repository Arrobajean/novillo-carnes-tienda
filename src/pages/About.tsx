
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

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
              <p className="text-gray-600 mb-4">
                Carnes el Novillo nació en 1985 como un pequeño local familiar en el barrio Providencia de Santiago. Fundado por Don Manuel Soto, un apasionado por la gastronomía y la tradición de las carnes chilenas, el negocio comenzó con una simple promesa: ofrecer los cortes más frescos y de mejor calidad a las familias de la zona.
              </p>
              <p className="text-gray-600 mb-4">
                Durante esos primeros años, Don Manuel seleccionaba personalmente cada corte, estableciendo relaciones directas con productores locales que compartían su visión de calidad y trazabilidad.
              </p>
              <p className="text-gray-600">
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
              <p className="text-gray-600 mb-4">
                Hoy, la segunda generación de la familia Soto continúa al frente de Carnes el Novillo, manteniendo vivos los valores y conocimientos que Don Manuel inculcó desde el inicio. 
              </p>
              <p className="text-gray-600 mb-4">
                Cada día seleccionamos los mejores cortes, manteniendo acuerdos con productores locales que garantizan prácticas sostenibles y el bienestar animal. Nuestro compromiso con la calidad sigue siendo inquebrantable, así como nuestra dedicación a ofrecer un servicio personalizado.
              </p>
              <p className="text-gray-600">
                La experiencia acumulada durante casi cuatro décadas nos ha permitido perfeccionar nuestros procesos de selección y maduración, asegurando que cada corte que llega a tu mesa sea excepcional.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 px-4 bg-novillo-light">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-serif font-semibold mb-4 text-gray-800">Nuestros Valores</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
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
              <p className="text-gray-600 text-center">
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
              <p className="text-gray-600 text-center">
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
              <p className="text-gray-600 text-center">
                Honramos las técnicas tradicionales de selección y corte que han sido transmitidas por generaciones, combinándolas con las mejores prácticas actuales.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-serif font-semibold mb-4 text-gray-800">Nuestro Equipo</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Profesionales apasionados por la calidad y el servicio al cliente
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <img 
                src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?q=80&w=1000" 
                alt="Carlos Soto" 
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-serif font-semibold mb-1 text-gray-800">Carlos Soto</h3>
                <p className="text-novillo-red font-medium mb-3">Director General</p>
                <p className="text-gray-600">
                  Hijo del fundador, Carlos ha llevado la visión original a nuevos horizontes, manteniendo la esencia familiar del negocio.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <img 
                src="https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1000" 
                alt="Ana Martínez" 
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-serif font-semibold mb-1 text-gray-800">Ana Martínez</h3>
                <p className="text-novillo-red font-medium mb-3">Jefa de Calidad</p>
                <p className="text-gray-600">
                  Con más de 15 años de experiencia, Ana supervisa cada proceso para garantizar que solo los mejores productos lleguen a nuestros clientes.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <img 
                src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1000" 
                alt="Roberto Vega" 
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-serif font-semibold mb-1 text-gray-800">Roberto Vega</h3>
                <p className="text-novillo-red font-medium mb-3">Maestro Carnicero</p>
                <p className="text-gray-600">
                  Maestro en el arte del corte, Roberto aporta precisión y conocimiento técnico a cada producto que preparamos.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-novillo-brown text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-serif font-bold mb-6">¿Listo para Probar la Diferencia?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
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
