
import { Product, CategoryInfo } from '@/types';

export const products: Product[] = [
  {
    id: 1,
    name: "Lomo Vetado",
    description: "Corte de carne de vacuno de gran sabor y jugosidad, ideal para asar a la parrilla o a la plancha. Contiene vetas de grasa que aportan sabor y suavidad.",
    price: 12990,
    image: "https://images.unsplash.com/photo-1603360946369-dc9bb6258143?q=80&w=1000",
    category: "vacuno",
    featured: true,
    unit: "kg"
  },
  {
    id: 2,
    name: "Entraña",
    description: "Corte vacuno muy sabroso, apreciado por su intenso sabor y textura. Perfecto para la parrilla o asador.",
    price: 15990,
    image: "https://images.unsplash.com/photo-1558030006-450675393462?q=80&w=1000",
    category: "vacuno",
    unit: "kg"
  },
  {
    id: 3,
    name: "Costillar de Cerdo",
    description: "Costillas de cerdo perfectamente cortadas, ideales para asar a la parrilla o al horno. Carne jugosa con el balance perfecto entre carne y grasa.",
    price: 8990,
    image: "https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=1000",
    category: "cerdo",
    featured: true,
    unit: "kg"
  },
  {
    id: 4,
    name: "Lomo Liso",
    description: "Corte premium de carne de vacuno, magro y tierno. Ideal para preparaciones a la parrilla, al horno o en medallones.",
    price: 13990,
    image: "https://images.unsplash.com/photo-1615937657715-bc7b4b7962fd?q=80&w=1000",
    category: "vacuno",
    unit: "kg"
  },
  {
    id: 5,
    name: "Pechuga de Pollo",
    description: "Corte magro de pollo, bajo en grasa y alto en proteínas. Versátil para múltiples preparaciones.",
    price: 5990,
    image: "https://images.unsplash.com/photo-1604503468506-a8da13d82791?q=80&w=1000",
    category: "aves",
    unit: "kg"
  },
  {
    id: 6,
    name: "Chorizo Parrillero",
    description: "Chorizo artesanal preparado con carnes seleccionadas y especias, perfecto para la parrilla.",
    price: 7990,
    image: "https://images.unsplash.com/photo-1620335900147-48ec8247bea2?q=80&w=1000",
    category: "embutidos",
    unit: "kg"
  },
  {
    id: 7,
    name: "Paleta de Cordero",
    description: "Corte tierno y jugoso de cordero, ideal para preparaciones lentas como el horno o la olla.",
    price: 14990,
    image: "https://images.unsplash.com/photo-1608877907149-a506d18026b9?q=80&w=1000",
    category: "cordero",
    unit: "kg"
  },
  {
    id: 8,
    name: "Mix Parrillero Premium",
    description: "Selección especial de cortes premium para parrilla: incluye vacuno, cerdo y embutidos.",
    price: 29990,
    image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=1000",
    category: "parrilleros",
    featured: true,
    unit: "pack"
  },
  {
    id: 9,
    name: "Promoción Familiar",
    description: "Pack económico para 4-6 personas: incluye carne para parrilla, chorizos y pollo.",
    price: 22990,
    image: "https://images.unsplash.com/photo-1588168333986-5078d3ae3976?q=80&w=1000",
    category: "promociones",
    unit: "pack"
  },
  {
    id: 10,
    name: "Filete de Cerdo",
    description: "Corte magro y tierno de cerdo, ideal para preparaciones rápidas a la plancha o salteado.",
    price: 7990,
    image: "https://images.unsplash.com/photo-1626082922482-ac8b9b965bd7?q=80&w=1000",
    category: "cerdo",
    unit: "kg"
  },
  {
    id: 11,
    name: "Chuletas de Cordero",
    description: "Chuletas tiernas de cordero, perfectas para asar a la parrilla. Sabor característico y jugoso.",
    price: 16990,
    image: "https://images.unsplash.com/photo-1598515214146-dab39da1243d?q=80&w=1000",
    category: "cordero",
    unit: "kg"
  },
  {
    id: 12,
    name: "Longaniza Artesanal",
    description: "Longaniza elaborada con receta tradicional, perfecta para parrillas y platos típicos chilenos.",
    price: 8990,
    image: "https://images.unsplash.com/photo-1599161146640-8d10682ba3a5?q=80&w=1000",
    category: "embutidos",
    unit: "kg"
  }
];

export const categories: CategoryInfo[] = [
  {
    id: "vacuno",
    name: "Vacuno",
    description: "Los mejores cortes de carne de res, seleccionados por su calidad y sabor."
  },
  {
    id: "cerdo",
    name: "Cerdo",
    description: "Cortes frescos de cerdo, perfectos para diversas preparaciones."
  },
  {
    id: "cordero",
    name: "Cordero",
    description: "Carne de cordero tierna y jugosa, con su característico sabor."
  },
  {
    id: "aves",
    name: "Aves",
    description: "Pollo, pavo y otras aves de corral de primera calidad."
  },
  {
    id: "embutidos",
    name: "Embutidos",
    description: "Embutidos artesanales elaborados con nuestras mejores carnes."
  },
  {
    id: "parrilleros",
    name: "Parrilleros",
    description: "Packs especiales para asados y parrillas."
  },
  {
    id: "promociones",
    name: "Promociones",
    description: "Ofertas especiales y packs económicos."
  }
];

export const getProductById = (id: number): Product | undefined => {
  return products.find(product => product.id === id);
};

export const getProductsByCategory = (category: string): Product[] => {
  return products.filter(product => product.category === category);
};

export const getFeaturedProducts = (): Product[] => {
  return products.filter(product => product.featured);
};
