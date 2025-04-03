
import { useEffect, useState } from "react";
import { ReviewCard } from "./ReviewCard";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

// Estructura de datos temporales para mostrar en el diseño
// Esta será reemplazada cuando integres la API de Google
interface GoogleReview {
  id: string;
  author: string;
  rating: number;
  date: string;
  content: string;
  avatar?: string;
}

// Datos de muestra - Estos serán reemplazados con los datos de la API de Google
const sampleReviews: GoogleReview[] = [
  {
    id: "1",
    author: "Carlos Rodríguez",
    rating: 5,
    date: "hace 1 semana",
    content: "Excelente calidad de carnes. Las mejores para asado que he probado en Santiago. El servicio es muy bueno y el personal es muy amable y profesional. Siempre encuentro lo que busco y a buen precio.",
  },
  {
    id: "2",
    author: "María Fernanda López",
    rating: 4.5,
    date: "hace 2 semanas",
    content: "Me encanta la selección de cortes premium, especialmente el lomo vetado. Excelente para ocasiones especiales. La atención es buena aunque a veces hay que esperar un poco.",
  },
  {
    id: "3",
    author: "Juan Pablo González",
    rating: 5,
    date: "hace 1 mes",
    content: "Los mejores cortes para parrilla. Llevo años comprando aquí y nunca me han decepcionado. Las promociones de fin de semana son excelentes.",
  },
  {
    id: "4",
    author: "Valentina Torres",
    rating: 4,
    date: "hace 2 meses",
    content: "Buena variedad de productos y cortes. Los precios son razonables para la calidad que ofrecen. El local siempre está limpio y ordenado.",
  },
  {
    id: "5",
    author: "Roberto Méndez",
    rating: 5,
    date: "hace 3 meses",
    content: "La mejor carnicería de la zona. Los productos son frescos y de excelente calidad. El personal es muy atento y te ayudan a elegir los mejores cortes según lo que necesites.",
  },
  {
    id: "6",
    author: "Camila Vega",
    rating: 4.5,
    date: "hace 3 meses",
    content: "Siempre encuentro buenos productos y a precios justos. Las promociones son muy convenientes. Recomendado para quienes buscan calidad.",
  }
];

export const GoogleReviews = () => {
  const [reviews, setReviews] = useState<GoogleReview[]>(sampleReviews);
  const [visibleReviews, setVisibleReviews] = useState<GoogleReview[]>([]);
  const [loading, setLoading] = useState(false);
  const [averageRating, setAverageRating] = useState(0);

  useEffect(() => {
    // Mostrar solo los primeros 3 reviews inicialmente
    setVisibleReviews(reviews.slice(0, 3));
    
    // Calcular rating promedio
    const avgRating = reviews.reduce((acc, review) => acc + review.rating, 0) / reviews.length;
    setAverageRating(avgRating);
    
    // Aquí puedes agregar la lógica para cargar reviews desde la API de Google
    // cuando hagas la integración
  }, [reviews]);

  // Función para cargar más reviews
  const loadMoreReviews = () => {
    setLoading(true);
    // Simulando carga de datos
    setTimeout(() => {
      setVisibleReviews(reviews);
      setLoading(false);
    }, 500);
  };

  // Función que se usará cuando integres la API de Google
  // para obtener los reviews reales
  const fetchGoogleReviews = async () => {
    // Aquí implementarás la llamada a la API de Google
    // setReviews(dataFromGoogleAPI);
    console.log("Esta función será implementada cuando integres la API de Google");
  };

  return (
    <section className="py-16 px-4 bg-white">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-serif font-semibold mb-4 text-gray-800">Opiniones de nuestros clientes</h2>
          <div className="flex items-center justify-center gap-1 mb-3">
            {[...Array(5)].map((_, i) => (
              <Star 
                key={i} 
                className={cn(
                  "h-6 w-6", 
                  i < Math.floor(averageRating) 
                    ? "text-novillo-gold fill-novillo-gold" 
                    : i < Math.ceil(averageRating) 
                    ? "text-novillo-gold fill-novillo-gold/50" 
                    : "text-novillo-gold"
                )} 
              />
            ))}
            <span className="ml-2 text-xl font-semibold">{averageRating.toFixed(1)}</span>
          </div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Basado en las opiniones de nuestros clientes en Google
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          {visibleReviews.map((review) => (
            <ReviewCard
              key={review.id}
              author={review.author}
              rating={review.rating}
              date={review.date}
              content={review.content}
              avatar={review.avatar}
            />
          ))}
        </div>

        {visibleReviews.length < reviews.length && (
          <div className="text-center">
            <Button 
              onClick={loadMoreReviews} 
              variant="outline"
              className="border-novillo-red text-novillo-red hover:bg-novillo-red/5"
              disabled={loading}
            >
              {loading ? "Cargando..." : "Ver más opiniones"}
            </Button>
          </div>
        )}

        <div className="mt-16 bg-gray-50 rounded-lg p-6 border border-gray-200">
          <h3 className="text-xl font-semibold mb-4">Preguntas frecuentes sobre reseñas</h3>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger className="text-left">
                ¿Cómo puedo dejar una reseña?
              </AccordionTrigger>
              <AccordionContent>
                Puedes dejar una reseña visitando nuestro perfil de Google Business o buscándonos en Google Maps. Haz clic en "Escribir una reseña" y comparte tu experiencia.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger className="text-left">
                ¿Por qué son importantes las reseñas?
              </AccordionTrigger>
              <AccordionContent>
                Las reseñas nos ayudan a mejorar nuestro servicio y productos. También ayudan a otros clientes a conocer las experiencias reales de nuestros clientes.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger className="text-left">
                ¿Responden a todas las reseñas?
              </AccordionTrigger>
              <AccordionContent>
                Intentamos responder a todas las reseñas, especialmente aquellas que incluyen sugerencias o problemas específicos. Valoramos mucho la retroalimentación de nuestros clientes.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </section>
  );
};

// Componente Star para evitar importar del paquete lucide-react
// ya que las importaciones son manejadas dentro del componente
const Star = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
  </svg>
);
