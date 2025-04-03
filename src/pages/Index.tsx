import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ProductCard } from '@/components/product/ProductCard';
import { getFeaturedProducts, categories } from '@/data/products';
import { Product } from '@/types';
import { GoogleReviews } from '@/components/reviews/GoogleReviews';

const Index = () => {
  const [featuredProducts, setFeaturedProducts] = useState<Product[]>([]);
  
  useEffect(() => {
    // Get featured products for homepage
    setFeaturedProducts(getFeaturedProducts());
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section 
        className="hero-gradient relative h-[500px] md:h-[600px] flex items-center text-white" 
        style={{ 
          '--image-url': 'url("https://images.unsplash.com/photo-1594041680534-e8c8cdebd659?q=80&w=2000")' 
        } as React.CSSProperties}
      >
        <div className="container mx-auto px-4 z-10">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-4 animate-fade-in">
              Tradición y Calidad en Cada Corte
            </h1>
            <p className="text-xl md:text-2xl mb-8 animate-fade-in">
              Descubre los mejores cortes de carne fresca, seleccionados por expertos para tu mesa
            </p>
            <div className="flex flex-wrap gap-4 animate-fade-in">
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
                className="bg-transparent border-white text-white hover:bg-white/10"
              >
                <Link to="/nosotros">Conocer Más</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-serif font-semibold mb-6 text-gray-800">Nuestra Historia</h2>
              <p className="text-gray-600 mb-4">
                Desde 1985, en <span className="font-semibold">Carnes el Novillo</span> nos dedicamos a ofrecer la mejor calidad en carnes frescas para las familias chilenas. Nuestra tradición familiar nos ha permitido seleccionar los mejores productos, garantizando frescura y sabor en cada corte.
              </p>
              <p className="text-gray-600 mb-6">
                Trabajamos directamente con productores locales para asegurar la trazabilidad de nuestros productos y mantener los más altos estándares de calidad en todo nuestro proceso.
              </p>
              <Button 
                asChild
                variant="link" 
                className="text-novillo-red hover:text-red-900 p-0 h-auto font-medium"
              >
                <Link to="/nosotros" className="inline-flex items-center">
                  Conoce nuestra historia
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1551446358-5e2aa499369f?q=80&w=1000" 
                alt="Carnicería El Novillo" 
                className="rounded-lg shadow-lg w-full h-auto object-cover"
              />
              <div className="absolute -bottom-8 -left-8 bg-novillo-red text-white p-6 rounded-lg shadow-lg max-w-[250px] hidden md:block">
                <p className="text-lg font-serif">
                  "Más de 35 años ofreciendo los mejores cortes de carne para tu familia"
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16 px-4 bg-novillo-light">
        <div className="container mx-auto">
          <h2 className="text-3xl font-serif font-semibold mb-2 text-center text-gray-800">Nuestras Categorías</h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Explora nuestra variedad de cortes frescos y productos seleccionados para cada ocasión
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {categories.slice(0, 4).map((category) => (
              <Link 
                key={category.id} 
                to={`/productos?categoria=${category.id}`}
                className="block group"
              >
                <div className="bg-white rounded-lg overflow-hidden shadow-md transition-transform duration-300 group-hover:-translate-y-1 group-hover:shadow-lg">
                  <div className="h-44 bg-gray-200 flex items-center justify-center">
                    <img 
                      src={`https://source.unsplash.com/random/300x200/?meat,${category.id}`} 
                      alt={category.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="text-xl font-serif font-semibold text-gray-800 mb-2">{category.name}</h3>
                    <p className="text-gray-600 mb-4 line-clamp-2">{category.description}</p>
                    <span className="text-novillo-red font-medium inline-flex items-center">
                      Ver productos
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
          
          <div className="text-center mt-10">
            <Button 
              asChild
              className="bg-novillo-brown hover:bg-brown-900 text-white"
            >
              <Link to="/productos">Ver todas las categorías</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <div className="flex justify-between items-center mb-10">
            <div>
              <h2 className="text-3xl font-serif font-semibold text-gray-800">Productos Destacados</h2>
              <p className="text-gray-600">Nuestras mejores selecciones para ti</p>
            </div>
            <Button 
              asChild
              variant="link" 
              className="text-novillo-red hover:text-red-900"
            >
              <Link to="/productos" className="inline-flex items-center">
                Ver todos los productos
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Google Reviews Section */}
      <GoogleReviews />

      {/* Testimonials Section */}
      <section className="py-16 px-4 bg-novillo-brown text-white">
        <div className="container mx-auto">
          <h2 className="text-3xl font-serif font-semibold mb-10 text-center">Lo Que Dicen Nuestros Clientes</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
              <div className="flex items-center mb-4">
                <img 
                  src="https://randomuser.me/api/portraits/men/32.jpg" 
                  alt="Cliente" 
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-medium">Roberto Méndez</h4>
                  <p className="text-sm text-gray-300">Cliente desde 2018</p>
                </div>
              </div>
              <p className="italic">
                "La calidad de la carne es extraordinaria. Siempre encuentro cortes frescos y el servicio es excelente. Mi carnicería de confianza."
              </p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
              <div className="flex items-center mb-4">
                <img 
                  src="https://randomuser.me/api/portraits/women/44.jpg" 
                  alt="Cliente" 
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-medium">Carolina Vega</h4>
                  <p className="text-sm text-gray-300">Cliente desde 2020</p>
                </div>
              </div>
              <p className="italic">
                "Sus promociones familiares son perfectas para nuestros asados de fin de semana. Siempre recomiendo El Novillo a mis amigos y familiares."
              </p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
              <div className="flex items-center mb-4">
                <img 
                  src="https://randomuser.me/api/portraits/men/67.jpg" 
                  alt="Cliente" 
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-medium">Javier Soto</h4>
                  <p className="text-sm text-gray-300">Cliente desde 2015</p>
                </div>
              </div>
              <p className="italic">
                "Como chef, valoro la consistencia en la calidad. El Novillo nunca me ha decepcionado, sus cortes son siempre de primera categoría."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section 
        className="hero-gradient relative py-20 text-white" 
        style={{ 
          '--image-url': 'url("https://images.unsplash.com/photo-1514326640560-7d063ef2aed5?q=80&w=2000")' 
        } as React.CSSProperties}
      >
        <div className="container mx-auto px-4 text-center z-10">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6 max-w-3xl mx-auto">
            Lleva la Calidad de Carnes el Novillo a Tu Mesa
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Explora nuestro catálogo completo y realiza tu pedido hoy mismo
          </p>
          <Button 
            asChild
            size="lg" 
            className="bg-novillo-red hover:bg-red-900 text-white"
          >
            <Link to="/productos">Comprar Ahora</Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Index;
