
import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft, ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { getProductById, getProductsByCategory } from "@/data/products";
import { ProductCard } from "@/components/product/ProductCard";
import { QuantitySelector } from "@/components/ui/quantity-selector";
import { useCart } from "@/context/CartContext";
import { formatPrice } from "@/lib/utils";
import { Product } from "@/types";
import { motion } from "framer-motion";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState<Product | null>(null);
  const [quantity, setQuantity] = useState(1);
  const [relatedProducts, setRelatedProducts] = useState<Product[]>([]);
  const { addItem } = useCart();

  useEffect(() => {
    if (id) {
      const foundProduct = getProductById(Number(id));
      if (foundProduct) {
        setProduct(foundProduct);
        const related = getProductsByCategory(foundProduct.category)
          .filter((p) => p.id !== foundProduct.id)
          .slice(0, 3);
        setRelatedProducts(related);
      }
    }
    setQuantity(1);
    window.scrollTo(0, 0);
  }, [id]);

  const handleAddToCart = () => {
    if (product) {
      addItem(product, quantity);
    }
  };

  if (!product) {
    return (
      <div className="container mx-auto py-20 px-4 text-center bg-[#1B1717] text-white min-h-screen">
        <p className="text-xl text-gray-300">Producto no encontrado</p>
        <Button asChild className="mt-4 bg-novillo-red text-white">
          <Link to="/productos">Volver a productos</Link>
        </Button>
      </div>
    );
  }

  return (
    <motion.div
      className="container mx-auto py-10 px-4 font-poppins text-white bg-[#1B1717] min-h-screen"
      initial="hidden"
      animate="visible"
      variants={fadeIn}
    >
      {/* Breadcrumb */}
      <div className="mb-6">
        <Link
          to="/productos"
          className="inline-flex items-center text-gray-300 hover:text-novillo-red transition-colors"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Volver a Productos
        </Link>
      </div>

      {/* Product Detail */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-16">
        <div className="bg-black rounded-lg overflow-hidden shadow-lg">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover"
            onError={(e) => {
              e.currentTarget.src =
                "https://placehold.co/600x400?text=Imagen+no+disponible";
            }}
          />
        </div>

        <div>
          <h1 className="text-4xl font-bold mb-3">{product.name}</h1>
          <div className="text-2xl font-semibold text-[#FFD700] mb-2">
            {formatPrice(product.price)}{" "}
            <span className="text-sm text-gray-400">/ {product.unit}</span>
          </div>

          {/* Descripción */}
          <p className="text-gray-100 text-base leading-relaxed mb-6">
            {product.description}
          </p>

          {/* Acordeón con información nutricional y modos de elaboración */}
          <div className="mb-8">
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="nutritional-info" className="border-b border-gray-700">
                <AccordionTrigger className="text-white hover:text-[#FFD700] hover:no-underline py-3">
                  Información Nutricional
                </AccordionTrigger>
                <AccordionContent className="text-gray-300 pb-4">
                  {product.details ? (
                    <ul className="list-disc pl-5 space-y-1">
                      {product.details.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  ) : (
                    <p>Información nutricional no disponible para este producto.</p>
                  )}
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="preparation" className="border-b border-gray-700">
                <AccordionTrigger className="text-white hover:text-[#FFD700] hover:no-underline py-3">
                  Modos de Elaboración
                </AccordionTrigger>
                <AccordionContent className="text-gray-300 pb-4">
                  <div className="space-y-2">
                    <p>Este corte es ideal para:</p>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>Parrilla (temperatura media-alta)</li>
                      <li>Horno (180°C por 20-25 minutos)</li>
                      <li>Plancha o sartén (fuego medio)</li>
                      {product.category === "vacuno" && <li>Ideal para término medio o a punto</li>}
                      {product.category === "cerdo" && <li>Cocinar bien para alcanzar 71°C internamente</li>}
                      {product.category === "cordero" && <li>Ideal con hierbas aromáticas y especias</li>}
                      {product.category === "aves" && <li>Cocinar completamente hasta que la parte interna no esté rosada</li>}
                    </ul>
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>

          <Button
            className="w-full bg-novillo-red hover:bg-red-900 text-white text-lg py-6 transition duration-300"
            onClick={handleAddToCart}
          >
            <ShoppingCart className="mr-2 h-5 w-5" />
            Agregar al Carrito
          </Button>
        </div>
      </div>

      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <motion.div
          className="mt-20"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
        >
          <h2 className="text-2xl font-bold mb-6 text-white">
            Productos Relacionados
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {relatedProducts.map((relatedProduct) => (
              <ProductCard key={relatedProduct.id} product={relatedProduct} />
            ))}
          </div>
        </motion.div>
      )}
    </motion.div>
  );
};

export default ProductDetail;
