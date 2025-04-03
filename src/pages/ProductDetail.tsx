
import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, ShoppingCart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { getProductById, getProductsByCategory } from '@/data/products';
import { ProductCard } from '@/components/product/ProductCard';
import { QuantitySelector } from '@/components/ui/quantity-selector';
import { useCart } from '@/context/CartContext';
import { formatPrice } from '@/lib/utils';
import { Product } from '@/types';

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
        
        // Get related products from same category
        const related = getProductsByCategory(foundProduct.category)
          .filter(p => p.id !== foundProduct.id)
          .slice(0, 3);
        setRelatedProducts(related);
      }
    }
    
    // Reset quantity when product changes
    setQuantity(1);
    
    // Scroll to top when product changes
    window.scrollTo(0, 0);
  }, [id]);

  const handleAddToCart = () => {
    if (product) {
      addItem(product, quantity);
    }
  };

  if (!product) {
    return (
      <div className="container mx-auto py-20 px-4 text-center">
        <p className="text-xl text-gray-600">Producto no encontrado</p>
        <Button asChild className="mt-4">
          <Link to="/productos">Volver a productos</Link>
        </Button>
      </div>
    );
  }

  return (
    <div className="container mx-auto py-10 px-4">
      {/* Breadcrumb */}
      <div className="mb-6">
        <Link 
          to="/productos" 
          className="inline-flex items-center text-gray-600 hover:text-novillo-red transition-colors"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Volver a Productos
        </Link>
      </div>

      {/* Product Detail */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-16">
        <div className="bg-white rounded-lg overflow-hidden shadow-md">
          <img 
            src={product.image} 
            alt={product.name} 
            className="w-full h-full object-cover"
            onError={(e) => {
              e.currentTarget.src = 'https://placehold.co/600x400?text=Imagen+no+disponible';
            }}
          />
        </div>
        
        <div>
          <h1 className="text-3xl font-serif font-bold mb-2">{product.name}</h1>
          <div className="text-2xl font-semibold text-novillo-red mb-4">
            {formatPrice(product.price)} <span className="text-sm text-gray-500">/ {product.unit}</span>
          </div>
          
          <div className="prose text-gray-700 mb-8">
            <p className="text-base">{product.description}</p>
          </div>
          
          <div className="mb-6">
            <p className="text-gray-700 mb-2">Cantidad:</p>
            <QuantitySelector 
              quantity={quantity} 
              onQuantityChange={setQuantity} 
            />
          </div>
          
          <Button 
            className="w-full bg-novillo-red hover:bg-red-900 text-white text-lg py-6"
            onClick={handleAddToCart}
          >
            <ShoppingCart className="mr-2 h-5 w-5" />
            Agregar al Carrito
          </Button>
        </div>
      </div>

      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <div className="mt-16">
          <h2 className="text-2xl font-serif font-semibold mb-6">Productos Relacionados</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {relatedProducts.map((relatedProduct) => (
              <ProductCard key={relatedProduct.id} product={relatedProduct} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductDetail;
