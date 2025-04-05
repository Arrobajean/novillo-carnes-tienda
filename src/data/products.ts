import { Product, CategoryInfo } from "@/types";

export const products: Product[] = [
  // --- PRODUCTOS INDIVIDUALES ---
  {
    id: 2,
    name: "Entraña",
    description:
      "Entraña: Corte exquisito de vacuno, reconocido por su ternura y sabor intenso. Una opción irresistible para realzar cualquier plato.",
    price: 15990,
    image: "/public/images/products/entrana-vacuno.jpg",
    category: "vacuno",
    unit: "kg",
  },
  {
    id: 3,
    name: "Costillar de Cerdo",
    description:
      "Costillar de Cerdo: Costillas jugosas y llenas de sabor, elaboradas para conquistar los paladares más exigentes. Un clásico que destaca en cualquier asado.",
    price: 8990,
    image: "/public/images/products/costillar.webp",
    category: "cerdo",
    featured: true,
    unit: "kg",
  },
  {
    id: 4,
    name: "Lomo Liso",
    description:
      "Lomo Liso: Corte selecto de vacuno, apreciado por su terneza y sabor refinado. Perfecto para recetas sofisticadas y platos llenos de carácter.",
    price: 13990,
    image: "/public/images/products/lomo-liso.webp",
    category: "vacuno",
    unit: "kg",
  },
  {
    id: 5,
    name: "Truto 1/4 de pollo",
    description:
      "El trutro cuarto de pollo es el trutro largo y el trutro corto en el mismo corte junto con rabadilla. Es perfecto para múltiples preparaciones, gracias a su gran sabor y facilidad para cocinar. Es conocido popularmente como tuto  e independiente de como le llames ¡quedará excelente en cualquier plato!",
    price: 5990,
    image: "/public/images/products/truto.webp",
    category: "aves",
    unit: "kg",
  },
  {
    id: 6,
    name: "Chorizo Parrillero",
    description:
      "Chorizo Parrillero: Chorizo artesanal con un toque ahumado y especiado, diseñado para aportar un sabor inigualable a tus asados y encuentros.",
    price: 7990,
    image:
      "https://images.unsplash.com/photo-1620335900147-48ec8247bea2?q=80&w=1000",
    category: "embutidos",
    unit: "kg",
  },
  {
    id: 7,
    name: "Paleta de Cordero",
    description:
      "Paleta de Cordero: Corte selecto y suculento de cordero que ofrece una experiencia culinaria superior con cada bocado. Ideal para platos especiales.",
    price: 14990,
    image:
      "https://images.unsplash.com/photo-1608877907149-a506d18026b9?q=80&w=1000",
    category: "cordero",
    unit: "kg",
  },
  {
    id: 8,
    name: "Mix Parrillero Premium",
    description:
      "Mix Parrillero Premium: Combo exclusivo que combina cortes premium seleccionados para asados memorables. La opción ideal para celebraciones y eventos especiales.",
    price: 29990,
    image:
      "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=1000",
    category: "parrilleros",
    featured: true,
    unit: "pack",
  },
  {
    id: 9,
    name: "Promoción Familiar",
    description:
      "Promoción Familiar: Combo completo que ofrece una variada selección de cortes exquisitos, diseñado para compartir y disfrutar en grupo.",
    price: 22990,
    image:
      "https://images.unsplash.com/photo-1588168333986-5078d3ae3976?q=80&w=1000",
    category: "promociones",
    unit: "pack",
  },
  {
    id: 10,
    name: "Filete de Cerdo",
    description:
      "Corte delicado y tierno, ideal para realzar platos modernos con un sabor natural y auténtico.",
    price: 7990,
    image: "/public/images/products/filete-cerdo.webp",
    category: "cerdo",
    unit: "kg",
  },
  {
    id: 11,
    name: "Chuletas de Cordero",
    description:
      "Corte de cordero que destaca por su jugosidad y sabor intenso, perfecto para preparar platos llenos de carácter.",
    price: 16990,
    image:
      "https://images.unsplash.com/photo-1598515214146-dab39da1243d?q=80&w=1000",
    category: "cordero",
    unit: "kg",
  },
  {
    id: 12,
    name: "Longaniza Artesanal",
    description:
      "Embutido premium elaborado mediante procesos tradicionales que aseguran un perfil de sabor auténtico y consistente.",
    price: 8990,
    image: "/public/images/products/longaniza-artesanal.webp",
    category: "embutidos",
    unit: "kg",
  },

  // --- COMBOS ---
  {
    id: 13,
    name: "Combo Mamá",
    description:
      "Combo Mamá: Pack completo con una cuidada selección de carnes y complementos, ideal para ofrecer variedad y calidad en cualquier asado.",
    price: 35990,
    image: "/images/combos/combo-mama.jpg",
    category: "promociones",
    unit: "pack",
  },
  {
    id: 14,
    name: "Combo Novillo Parrillero",
    description:
      "Combo Novillo Parrillero: Conjunto premium que reúne cortes exclusivos y complementos de alta calidad para una experiencia de asado inigualable.",
    price: 31990,
    image: "/images/combos/novillo-parrillero.jpg",
    category: "promociones",
    unit: "pack",
  },
  {
    id: 15,
    name: "Combo Para Ti",
    description:
      "Combo Para Ti: Selección equilibrada de cortes suculentos que ofrece versatilidad y sabor, perfecta para todo tipo de preparaciones.",
    price: 19990,
    image: "/images/combos/combo-parati.jpg",
    category: "promociones",
    unit: "pack",
  },
  {
    id: 16,
    name: "Combo Exótico",
    description:
      "Combo Exótico: Pack innovador que combina sabores sorprendentes y cortes únicos, diseñado para quienes buscan experiencias culinarias distintas.",
    price: 23490,
    image: "/images/combos/combo-exotico.jpg",
    category: "promociones",
    unit: "pack",
  },
  {
    id: 17,
    name: "Combo Cecinas",
    description:
      "Combo Cecinas: Conjunto selecto que reúne una variedad de productos curados de alta calidad, ideal para picadas y momentos especiales.",
    price: 12990,
    image: "/images/combos/combo-cecinas.jpg",
    category: "promociones",
    unit: "pack",
  },
  {
    id: 18,
    name: "Combo Novillo",
    description:
      "Combo Novillo: Pack exclusivo que ofrece una amplia gama de cortes premium, diseñado para satisfacer a los paladares más exigentes.",
    price: 52990,
    image: "/images/combos/combo-novillo.jpg",
    category: "promociones",
    unit: "pack",
  },

  // --- PRODUCTOS INDIVIDUALES Y CONGELADOS ---
  {
    id: 19,
    name: "Anticuchos",
    description:
      "Anticuchos: Brochetas de carne de primera, con un equilibrio perfecto entre sabor y textura, ideales para cualquier reunión o evento.",
    price: 9990,
    image: "",
    category: "cerdo",
    unit: "unidad",
  },
  {
    id: 20,
    name: "Medallones de Pollo",
    description:
      "Medallones de Pollo: Cortes redondos y tiernos que garantizan un sabor fresco y una presentación impecable en cada plato.",
    price: 9990,
    image: "/public/images/products/medallones-pollo.jpg",
    category: "aves",
    unit: "kg",
  },
  {
    id: 21,
    name: "Chuleta Centro",
    description:
      "Corte de cerdo equilibrado y tierno, diseñado para ofrecer un sabor excepcional en preparaciones variadas.",
    price: 6490,
    image: "/public/images/products/chuleta-centro.jpg",
    category: "cerdo",
    featured: true,
    unit: "kg",
  },
  {
    id: 22,
    name: "Pulpa de Cerdo",
    description:
      "Corte versátil y jugoso, ideal para múltiples preparaciones gracias a su sabor natural y textura suave.",
    price: 6990,
    image: "/public/images/products/pulpa-cerdo.webp",
    category: "cerdo",
    unit: "kg",
  },
  {
    id: 23,
    name: "Tocineta",
    description:
      "Tocineta: Lonchas delgadas y premium con un toque ahumado que aportan un perfil de sabor único y distintivo a cualquier receta.",
    price: 13490,
    image: "/public/images/products/tocineta.webp",
    category: "cerdo",
    unit: "kg",
  },
  {
    id: 24,
    name: "Lomo Vetado",
    description:
      "Lomo Vetado: Corte excepcional de vacuno que combina un balance perfecto de grasa y carne, garantizando una experiencia culinaria superior.",
    price: 19990,
    image: "/public/images/products/lomo-vetado.webp",
    category: "vacuno",
    unit: "kg",
  },
  {
    id: 25,
    name: "Arvejas, Primavera y Sofritos",
    description:
      "Arvejas, Primavera y Sofritos: Mix de vegetales congelados, práctico y nutritivo, perfecto para aportar frescura y color a tus recetas.",
    price: 1000,
    image: "",
    category: "congelados",
    unit: "unidad",
  },
  {
    id: 26,
    name: "Papas Fritas 1/2 Kg",
    description:
      "Papas Fritas 1/2 Kg: Papas cuidadosamente cortadas y congeladas, listas para freír y disfrutar de una textura crujiente y deliciosa.",
    price: 2500,
    image: "",
    category: "congelados",
    unit: "unidad",
  },
  {
    id: 27,
    name: "Frutas Congeladas Minuto Verde",
    description:
      "Frutas Congeladas Minuto Verde: Selección de frutas congeladas, ideales para batidos, postres y recetas que exigen frescura y sabor natural.",
    price: 5499,
    image: "",
    category: "congelados",
    unit: "unidad",
  },

  // --- PRODUCTOS ADICIONALES ---
  {
    id: 28,
    name: "Carne Molida Especial",
    description:
      "Carne Molida Especial: Carne molida de alta calidad, perfecta para hamburguesas, empanadas y recetas versátiles que requieren textura y sabor intensos.",
    price: 9990,
    image: "/public/images/products/carne-molida.webp",
    category: "vacuno",
    unit: "kg",
  },
  {
    id: 29,
    name: "Postas",
    description:
      "Cortes selectos de vacuno que destacan por su textura tierna y sabor concentrado, ideales para asados y guisos sofisticados.",
    price: 12990,
    image: "/public/images/products/posta.webp",
    category: "vacuno",
    unit: "kg",
  },
  {
    id: 30,
    name: "Asiento",
    description:
      "Corte tierno y sabroso de vacuno, ideal para preparaciones de cocción lenta que potencian un sabor profundo y auténtico.",
    price: 13490,
    image: "/public/images/products/asiento-vacuno.webp",
    category: "vacuno",
    unit: "kg",
  },
  {
    id: 31,
    name: "Sobrecostilla / Huachalomo / Asado Carnicero / Abastero",
    description:
      "Variedad de cortes de vacuno meticulosamente seleccionados para ofrecer un sabor robusto y una textura inigualable.",
    price: 10990,
    image: "/public/images/products/Sobrecostilla-Vacuno.webp",
    category: "vacuno",
    unit: "kg",
  },
  {
    id: 32,
    name: "Tapapecho",
    description:
      "Corte distintivo de vacuno, reconocido por su sabor excepcional y versatilidad, ideal para platos tanto clásicos como innovadores. Este corte es para hacer Brisket, también apropiado para preparaciones al horno y cacerola, para hacer estofados, cazuelas y mechadas.",
    price: 10990,
    image: "/public/images/products/tapapecho.webp",
    category: "vacuno",
    unit: "kg",
  },
  {
    id: 33,
    name: "Ala Entera",
    description:
      "Ala entera de pollo, perfecta para asados o frituras, que ofrece una experiencia de sabor completa y jugosidad garantizada.",
    price: 5490,
    image: "/public/images/products/ala.webp",
    category: "aves",
    unit: "kg",
  },
  {
    id: 34,
    name: "Pechuga Deshuesada",
    description:
      "Corte de pollo sin hueso, versátil y de sabor delicado, ideal para recetas ligeras y platos innovadores.",
    price: 6990,
    image: "/public/images/products/pechuga-deshuesada.webp",
    category: "aves",
    unit: "kg",
  },
  {
    id: 35,
    name: "Plateada Vacuno",
    description:
      "El corte plateada vacuno limpia es uno de los mejores cortes. Su forma es rectangular e irregular, además es completamente aplanado. Este corte proviene del lateral del pecho.",
    price: 12959,
    image: "/public/images/products/Plateada-vacuno.webp",
    category: "vacuno",
    unit: "kg",
  },
  {
    id: 36,
    name: "Patas de Pollo",
    description:
      "Parte inferior del pollo, ideal para caldos o platos que requieren una textura firme y un sabor profundo.",
    price: 2490,
    image: "/public/images/products/patas pollo.png",
    category: "aves",
    unit: "unidad",
  },
  // {
  //   id: 37,
  //   name: "Trutro Ala",
  //   description:
  //     "Trutro Ala: Corte de cerdo diseñado para parrillas, que ofrece un sabor intenso y una textura inigualable en cada bocado.",
  //   price: 5599,
  //   image: "",
  //   category: "cerdo",
  //   unit: "kg",
  // },
  {
    id: 38,
    name: "Pechuga de Pollo Entera",
    description:
      "Pechuga de pollo completa, perfecta para preparaciones que realzan su sabor natural y jugosidad excepcional.",
    price: 5990,
    image: "/public/images/products/pechuga.webp",
    category: "aves",
    unit: "kg",
  },
  {
    id: 39,
    name: "Chuleta Ahumada",
    description:
      "Corte de cerdo ahumado con un perfil de sabor único, que combina suavidad y un toque ahumado inconfundible.",
    price: 8490,
    image: "/public/images/products/chuleta-ahumada.jpg",
    category: "cerdo",
    unit: "kg",
  },
  // {
  //   id: 40,
  //   name: "Costillar",
  //   description:
  //     "Costillar: Corte robusto de costillas de cerdo, caracterizado por su sabor profundo y textura que se deshace en cada bocado.",
  //   price: 7490,
  //   image: "",
  //   category: "cerdo",
  //   unit: "kg",
  // },
  {
    id: 41,
    name: "Chuleta Vetada",
    description:
      "Chuleta Vetada: Corte de vacuno con vetas de grasa que aseguran una perfecta combinación de sabor y jugosidad, ideal para platos de alta calidad.",
    price: 6990,
    image: "/public/images/products/chuleta-vetada.webp",
    category: "cerdo",
    unit: "kg",
  },
  {
    id: 42,
    name: "Longanizas",
    description:
      "Embutido elaborado con ingredientes selectos, que ofrece un perfil de sabor auténtico y una textura superior para realzar cualquier preparación.",
    price: 7490,
    image: "/public/images/products/longaniza.webp",
    category: "embutidos",
    unit: "kg",
  },
  {
    id: 43,
    name: "Filetillo de Pollo",
    description:
      "Son una opción deliciosa y saludable para tus comidas. Cada filete se obtiene de pechugas de pollo cuidadosamente seleccionadas, garantizando su frescura y ternura.",
    price: 7490,
    image: "/public/images/products/filetillo-pollo.webp",
    category: "aves",
    unit: "kg",
  },
];

export const categories: CategoryInfo[] = [
  {
    id: "vacuno",
    name: "Vacuno",
    description:
      "Vacuno: Selección de cortes de res premium, pensados para ofrecer una experiencia gastronómica superior con sabor y textura inigualables.",
  },
  {
    id: "cerdo",
    name: "Cerdo",
    description:
      "Cerdo: Cortes y productos elaborados con altos estándares de calidad, ideales para quienes buscan un sabor auténtico y bien definido.",
  },
  {
    id: "cordero",
    name: "Cordero",
    description:
      "Cordero: Cortes selectos de cordero, reconocidos por su ternura y sabor profundo, perfectos para platos sofisticados.",
  },
  {
    id: "aves",
    name: "Aves",
    description:
      "Aves: Variedad de cortes de pollo y pavo, elaborados para ofrecer versatilidad y un perfil de sabor fresco y natural.",
  },
  {
    id: "embutidos",
    name: "Embutidos",
    description:
      "Embutidos: Productos artesanales elaborados con recetas tradicionales, que destacan por su sabor auténtico y calidad superior.",
  },
  {
    id: "parrilleros",
    name: "Parrilleros",
    description:
      "Parrilleros: Combos y packs exclusivos que combinan cortes premium, diseñados para asados y reuniones inolvidables.",
  },
  {
    id: "promociones",
    name: "Promociones",
    description:
      "Promociones: Ofertas y combos especiales que reúnen una cuidada selección de productos, pensados para brindar una experiencia culinaria excepcional.",
  },
  {
    id: "congelados",
    name: "Congelados",
    description:
      "Congelados: Productos de alta calidad listos para usar, que aportan practicidad y frescura a cualquier preparación.",
  },
];

export const getProductById = (id: number): Product | undefined =>
  products.find((product) => product.id === id);

export const getProductsByCategory = (category: string): Product[] =>
  products.filter((product) => product.category === category);

export const getFeaturedProducts = (): Product[] =>
  products.filter((product) => product.featured);
