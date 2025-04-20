import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Star } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";

// Datos simulados de reseñas ampliados
const testimonials = [
  {
    name: "Roberto Méndez",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    date: "hace 3 semanas",
    rating: 5,
    text: "Excelente carnicería, siempre me atienden de maravilla. La calidad de la carne es extraordinaria y los precios son muy competitivos. Recomendado 100%.",
  },
  {
    name: "Carolina Vega",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    date: "hace 1 mes",
    rating: 5,
    text: "Sus promociones familiares son perfectas para nuestros asados de fin de semana. Siempre recomiendo El Novillo a mis amigos y familiares.",
  },
  {
    name: "Javier Soto",
    image: "https://randomuser.me/api/portraits/men/67.jpg",
    date: "hace 3 meses",
    rating: 5,
    text: "Como chef, valoro la consistencia en la calidad. El Novillo nunca me ha decepcionado, sus cortes son siempre de primera categoría.",
  },
  {
    name: "María Fuentes",
    image: "https://randomuser.me/api/portraits/women/22.jpg",
    date: "hace 2 meses",
    rating: 5,
    text: "La atención es excelente y los productos son frescos. Me encanta que tienen promociones familiares muy convenientes.",
  },
  {
    name: "Pedro Ramírez",
    image: "https://randomuser.me/api/portraits/men/45.jpg",
    date: "hace 1 mes",
    rating: 4,
    text: "Buenos cortes y excelente servicio. Siempre encuentro lo que necesito para mis asados familiares.",
  },
  {
    name: "Laura Torres",
    image: "https://randomuser.me/api/portraits/women/63.jpg",
    date: "hace 2 semanas",
    rating: 5,
    text: "Desde que descubrí El Novillo, no compro carne en ningún otro lugar. Su calidad es incomparable y sus precios muy justos.",
  },
  {
    name: "Miguel Ángel Castro",
    image: "https://randomuser.me/api/portraits/men/77.jpg",
    date: "hace 1 mes",
    rating: 5,
    text: "El servicio es excepcional. Siempre me ayudan a elegir los mejores cortes para mis reuniones y no me han fallado.",
  },
  {
    name: "Valentina Parra",
    image: "https://randomuser.me/api/portraits/women/33.jpg",
    date: "hace 3 meses",
    rating: 5,
    text: "Tienen los mejores precios de la zona. La calidad de sus productos es constante y su atención siempre es cordial y eficiente.",
  },
  {
    name: "Eduardo Navarro",
    image: "https://randomuser.me/api/portraits/men/55.jpg",
    date: "hace 2 meses",
    rating: 4,
    text: "Gran variedad de cortes. El personal conoce muy bien sus productos y siempre dan buenos consejos de preparación.",
  },
];

const RatingStars = ({ rating }: { rating: number }) => (
  <div className="flex">
    {[...Array(5)].map((_, i) => (
      <Star
        key={i}
        className={`h-4 w-4 ${
          i < rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"
        }`}
      />
    ))}
  </div>
);

export const TestimonialsSection = () => {
  const [isMobile, setIsMobile] = useState(false);

  // Verificar si es mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <section className="relative py-12 px-4 bg-gradient-to-b from-gray-100 to-gray-50 overflow-hidden">
      <div className="container mx-auto relative z-10">
        <motion.div
          className="text-center mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <div className="flex justify-center items-center mb-3">
            <img
              src="ui/google-logo.png"
              alt="Google Logo"
              className="h-1 md:h-12 w-auto mr-1"
            />

            <h2 className="text-2xl md:text-3xl font-semibold text-gray-800">
              Reseñas
            </h2>
          </div>
          <p className="text-gray-600 max-w-2xl mx-auto text-sm md:text-base">
            Opiniones de nuestros clientes en Google
          </p>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex justify-center items-center mt-2 mb-4"
          >
            <div className="flex mr-2">
              <RatingStars rating={5} />
            </div>
            <span className="text-base md:text-lg font-semibold">4.9</span>
            <span className="text-gray-500 ml-1 text-sm">
              ({testimonials.length} reseñas)
            </span>
          </motion.div>
        </motion.div>

        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full max-w-5xl mx-auto"
        >
          <CarouselContent className="-ml-2 md:-ml-4">
            {testimonials.map((testimonial, index) => (
              <CarouselItem
                key={index}
                className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3"
              >
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="h-full"
                >
                  <Card className="h-full flex flex-col">
                    <CardHeader className="p-3 md:p-4 border-b border-gray-100">
                      <div className="flex items-center mb-2">
                        <img
                          src={testimonial.image}
                          alt={testimonial.name}
                          className="w-8 h-8 md:w-10 md:h-10 rounded-full mr-2 md:mr-3 border border-gray-200"
                        />
                        <div>
                          <h4 className="font-medium text-gray-800 text-sm md:text-base">
                            {testimonial.name}
                          </h4>
                          <div className="flex items-center text-gray-500 text-xs">
                            <span>{testimonial.date}</span>
                          </div>
                        </div>
                      </div>
                      <div className="flex">
                        <RatingStars rating={testimonial.rating} />
                      </div>
                    </CardHeader>
                    <CardContent className="p-3 md:p-4 flex-grow">
                      <p className="text-gray-700 text-xs md:text-sm line-clamp-4 md:line-clamp-none">
                        {testimonial.text}
                      </p>
                    </CardContent>
                    <CardFooter className="px-3 md:px-4 py-2 bg-gray-50 flex items-center border-t border-gray-100">
                      <img
                        src="ui/google-logo.png"
                        alt="Google Logo"
                        className="h-4 md:h-4 w-auto mr-1"
                      />
                      <span className="text-xs text-gray-500">
                        Publicado en Google
                      </span>
                    </CardFooter>
                  </Card>
                </motion.div>
              </CarouselItem>
            ))}
          </CarouselContent>

          <div className="flex items-center justify-center mt-4 md:hidden gap-1">
            {testimonials.map((_, i) => (
              <span
                key={i}
                className="w-2 h-2 rounded-full bg-gray-300 mx-0.5"
              />
            ))}
            <span className="w-2 h-2 rounded-full bg-gray-800 mx-0.5" />
          </div>

          {!isMobile && (
            <>
              <CarouselPrevious className="hidden md:flex absolute -left-12 sm:-left-5" />
              <CarouselNext className="hidden md:flex absolute -right-12 sm:-right-5" />
            </>
          )}
        </Carousel>

        <motion.div
          className="text-center mt-6 md:mt-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <a
            href="https://www.google.com/search?q=carnes+el+novillo+independencia&client=opera-gx&sca_esv=ccd2c1cf7e06f38b&biw=2290&bih=1168&ei=shn9Z5DPDZbOxc8PmIyOmAU&ved=0ahUKEwiQ8N6K3NeMAxUWZ_EDHRiGA1MQ4dUDCBA&uact=5&oq=carnes+el+novillo+independencia&gs_lp=Egxnd3Mtd2l6LXNlcnAiH2Nhcm5lcyBlbCBub3ZpbGxvIGluZGVwZW5kZW5jaWEyBRAhGKABMgUQIRigATIFECEYoAFI1B1QpQhYkh1wAngAkAEAmAF-oAHBEaoBBDI0LjG4AQPIAQD4AQGYAhGgAowLwgILEAAYgAQYsAMYogTCAgUQABiABMICBhAAGBYYHsICCBAAGIAEGKIEwgIFEAAY7wXCAggQABiiBBiJBcICBRAhGJ8FmAMAiAYBkAYEkgcEMTYuMaAHyV-yBwQxNC4xuAeICw&sclient=gws-wiz-serp"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium text-sm md:text-base"
          >
            <span>Dejanos tu opinión en Google</span>
          </a>
        </motion.div>
      </div>

      {/* SVG inferior: se coloca al final con z-index bajo para quedar detrás del contenido */}
      <svg
        className="absolute bottom-0 left-0 w-full h-[30px] pointer-events-none block z-0"
        viewBox="0 0 1440 30"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path fill="#000000" d="M0,0 C360,24 1080,0 1440,24 L1440,30 L0,30 Z" />
      </svg>
    </section>
  );
};
