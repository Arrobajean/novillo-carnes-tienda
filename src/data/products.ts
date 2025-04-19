import { Product, CategoryInfo } from "@/types";

export const products: Product[] = [
  // --- PRODUCTOS INDIVIDUALES ---
  {
    id: 2,
    name: "Entraña de Vacuno",
    description:
      "La entraña de vacuno es un corte selecto que destaca por su sabor profundo y su textura suave y jugosa. Presentada en bandejas de 1 kilo, cada porción ha sido cuidadosamente seleccionada para garantizar una experiencia de calidad superior. Gracias a su veteado natural y su cocción uniforme, es ideal para la parrilla o platos especiales que exigen lo mejor del sabor tradicional.",
    price: 15990,
    image: "/products/vacuno/entrana.webp",
    category: "vacuno",
    unit: "kg",
    details: [
      "Porción: 100g",
      "Calorías: 230 kcal",
      "Proteínas: 21g",
      "Grasas totales: 16g",
      "Grasa saturada: 7g",
      "Carbohidratos: 0g",
    ],
  },
  {
    id: 3,
    name: "Costillar de Cerdo",
    description:
      "Descubre el verdadero placer del asado con nuestro Costillar de Cerdo, un corte excepcionalmente jugoso y sabroso, diseñado para conquistar los paladares más exigentes. Sus costillas tiernas se deshacen en la boca, aportando un sabor inigualable que realza cualquier preparación. Ideal para reuniones y ocasiones especiales, cada bocado es una experiencia culinaria de calidad y tradición.",
    price: 8990,
    image: "/products/cerdo/costillar.webp",
    category: "cerdo",
    featured: true,
    unit: "kg",
    details: [
      "Porción: 100g",
      "Calorías: 290 kcal",
      "Proteínas: 18g",
      "Grasas totales: 24g",
      "Grasa saturada: 9g",
      "Carbohidratos: 0g",
    ],
  },
  {
    id: 4,
    name: "Lomo Liso",
    description:
      "El Lomo Liso es un corte selecto de vacuno altamente apreciado por su extraordinaria terneza y sabor refinado. Presentado en bandejas de 1 kilo, este corte garantiza calidad superior y es perfecto para asados familiares, cenas gourmet o preparaciones innovadoras. Su textura jugosa, perfil aromático y pureza en el sabor lo convierten en la opción ideal para realzar cualquier receta, aportando un toque de distinción y tradición en cada bocado.",
    price: 13990,
    image: "/products/vacuno/lomo-liso.webp",
    category: "vacuno",
    unit: "kg",
    details: [
      "Porción: 100g",
      "Calorías: 150 kcal",
      "Proteínas: 22g",
      "Grasas totales: 7g",
      "Grasa saturada: 3g",
      "Carbohidratos: 0g",
    ],
  },
  {
    id: 5,
    name: "Truto 1/4 de pollo",
    description:
      "El trutro cuarto de pollo es el trutro largo y el trutro corto en el mismo corte junto con rabadilla. Es perfecto para múltiples preparaciones, gracias a su gran sabor y facilidad para cocinar. Es conocido popularmente como tuto, y quedará excelente en cualquier plato.",
    price: 5990,
    image: "/products/aves/truto.webp",
    category: "aves",
    unit: "kg",
    details: [
      "Porción: 100g",
      "Calorías: 200 kcal",
      "Proteínas: 18g",
      "Grasas totales: 10g",
      "Grasa saturada: 3g",
      "Carbohidratos: 0g",
    ],
  },
  {
    id: 6,
    name: "Chorizo Parrillero",
    description:
      "Nuestro Chorizo Parrillero es un embutido artesanal que destaca por su sabor robusto, ahumado y especiado. Elaborado mediante recetas tradicionales y con ingredientes seleccionados, ofrece una textura jugosa y un perfil aromático único, ideal para realzar tus asados y encuentros. ¡Una explosión de sabor en cada bocado!",
    price: 7990,
    image: "/products/elaborado/longaniza-artesanal.webp",
    category: "embutidos",
    unit: "kg",
    details: [
      "Porción: 100g",
      "Calorías: 310 kcal",
      "Proteínas: 14g",
      "Grasas totales: 28g",
      "Grasa saturada: 10g",
      "Carbohidratos: 1g",
    ],
  },
  // {
  //   id: 7,
  //   name: "Paleta de Cordero",
  //   description:
  //     "Paleta de Cordero: Corte selecto y suculento de cordero que ofrece una experiencia culinaria superior con cada bocado. Ideal para platos especiales.",
  //   price: 14990,
  //   image:
  //     "https://images.unsplash.com/photo-1608877907149-a506d18026b9?q=80&w=1000",
  //   category: "cordero",
  //   unit: "kg",
  // },
  {
    id: 8,
    name: "Albondigas",
    description:
      "Disfruta de nuestras albóndigas de vacuno, elaboradas con carne selecta y un toque de especias gourmet que intensifica su sabor. Su textura tierna y jugosa las convierte en la opción perfecta para pastas, salsas o recetas caseras, llevando tradición y calidad a cada bocado.",
    price: 29990,
    image: "/products/vacuno/albondigas.webp",
    category: "vacuno",
    unit: "pack",
    details: [
      "Porción: 100g",
      "Calorías: 250 kcal",
      "Proteínas: 18g",
      "Grasas totales: 15g",
      "Grasa saturada: 5g",
      "Carbohidratos: 0g",
    ],
  },
  {
    id: 9,
    name: "Combo Semana",
    description:
      "Descubre el Combo Semana, la selección ideal para darle variedad y sabor a tus recetas diarias. Con 1kg de carne molida, 1kg de bistec, 1kg de chuleta ahumada, 1kg de truto cuarto y 1kg de pechuga entera, este combo te ofrece la versatilidad perfecta para asados, guisos y platillos caseros. Calidad y frescura garantizadas para que disfrutes de una semana llena de delicias culinarias.",
    price: 22990,
    image: "/products/combos/combo-semana.webp",
    category: "promociones",
    unit: "pack",
  },
  {
    id: 10,
    name: "Filete de Cerdo",
    description:
      "Un corte exquisito y sumamente versátil, que destaca por su delicada ternura y sabor auténtico. Perfecto para saltear, asar o incorporar en recetas modernas, su textura suave y jugosa garantiza una experiencia culinaria inigualable en cada bocado.",
    price: 7990,
    image: "/products/cerdo/filete-cerdo.webp",
    category: "cerdo",
    unit: "kg",
    details: [
      "Porción: 100g",
      "Calorías: 220 kcal",
      "Proteínas: 20g",
      "Grasas totales: 14g",
      "Grasa saturada: 5g",
      "Carbohidratos: 0g",
    ],
  },
  // {
  //   id: 11,
  //   name: "Chuletas de Cordero",
  //   description:
  //     "Corte de cordero que destaca por su jugosidad y sabor intenso, perfecto para preparar platos llenos de carácter.",
  //   price: 16990,
  //   image:
  //     "https://images.unsplash.com/photo-1598515214146-dab39da1243d?q=80&w=1000",
  //   category: "cordero",
  //   unit: "kg",
  // },
  {
    id: 12,
    name: "Longaniza Artesanal",
    description:
      "Prueba nuestra Longaniza Artesanal, un embutido premium elaborado con métodos tradicionales que realzan el sabor auténtico de sus ingredientes. Con una mezcla perfecta de especias y carnes selectas, ofrece un perfil de sabor único y consistente, ideal para asar o para dar un toque especial a cualquier receta.",
    price: 8990,
    image: "/products/elaborado/Longaniza.webp",
    category: "embutidos",
    unit: "kg",
    details: [
      "Porción: 100g",
      "Calorías: 300 kcal",
      "Proteínas: 12g",
      "Grasas totales: 26g",
      "Grasa saturada: 9g",
      "Carbohidratos: 2g",
    ],
  },
  // --- COMBOS ---
  {
    id: 13,
    name: "Combo Fuego y Sazón",
    description:
      "La selección perfecta para un asado inolvidable. Este combo reúne 1kg de carne para asar, 1kg de costillar de cerdo, 1kg de ala entera y 1kg de longanizas, acompañado de una bolsa de carbón y la exclusiva salsa para sazonar especial del Novillo. Ideal para transformar cualquier reunión en una experiencia gourmet llena de sabor y calidad.",
    price: 35990,
    image: "/products/combos/combo-fuego-sazon.webp",
    category: "promociones",
    unit: "pack",
  },
  {
    id: 14,
    name: "Combo Novillo Parrillero",
    description:
      "Disfruta del auténtico sabor de la parrilla con el Combo Novillo Parrillero: 1kg de lomo liso, 1kg de chuleta vetada, 1kg de truto, 1kg de longanizas, 2,5kg de carbón y una salsa para sazonar, todo lo necesario para un asado inolvidable.",
    price: 31990,
    image: "/products/combos/combo-parrillero2.webp",
    category: "promociones",
    unit: "pack",
  },
  {
    id: 15,
    name: "Combo Delicias Mixtas",
    description:
      "Una exclusiva selección de cortes premium para inspirar tus recetas. Incluye ½ pulpa de cerdo, ½ bisteck, ½kg de filetillo, ½kg de truto y ½kg de carne molida, ideales para guisos, platillos gourmet o preparaciones caseras. Calidad, frescura y sabor auténtico en cada bocado para deleitar tu paladar.",
    price: 19990,
    image: "/products/combos/combo-delicias.webp",
    category: "promociones",
    unit: "pack",
  },
  {
    id: 16,
    name: "Combo Sabor a la brasa",
    description:
      "La opción ideal para realzar tus asados. Incluye una bandeja de anticuchos, 1kg de medallones de pollo y una salsa para sazonar que realza cada corte, garantizando un toque de sabor auténtico en cada preparación. Perfecto para compartir momentos especiales con amigos y familiares.",
    price: 23490,
    image: "/products/combos/combo-sabor-brasa.webp",
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
      "Descubre el Combo Novillo, una cuidada selección de cortes para inspirar tus creaciones en la cocina: 1kg de Bisteck Asiento, 1kg de Carne para Mechar o Guisar, 1kg de Carne Molida Especial, 1kg de Truto, 1kg de Pechuga Deshuesada, 1kg de Pulpa de Cerdo y 1kg de Chuleta Centro. ¡La opción ideal para disfrutar de calidad y versatilidad en cada preparación!",
    price: 52990,
    image: "/products/combos/Combo-novillo.webp",
    category: "promociones",
    unit: "pack",
  },

  // --- PRODUCTOS INDIVIDUALES Y CONGELADOS ---
  {
    id: 19,
    name: "Anticuchos",
    description:
      "Brochetas de carne, pollo y cerdo de primera, con un equilibrio perfecto entre sabor y textura, ideales para cualquier reunión o evento.",
    price: 9990,
    image: "/products/elaborado/anticucho.png",
    category: "embutidos",
    unit: "bandeja",
  },
  {
    id: 20,
    name: "Medallones de Pollo",
    description:
      "Medallones de Pollo, cortes redondos y tiernos que destacan por su sabor fresco y su presentación impecable. Ideales para un plato saludable y versátil, mantienen su jugosidad y textura perfecta en cada preparación, convirtiéndolos en la opción ideal para comidas rápidas o elaboradas.",
    price: 9990,
    image: "/products/aves/medallones-pollo.webp",
    category: "aves",
    unit: "kg",
    details: [
      "Porción: 100g",
      "Calorías: 150 kcal",
      "Proteínas: 20g",
      "Grasas totales: 5g",
      "Grasa saturada: 2g",
      "Carbohidratos: 0g",
    ],
  },
  {
    id: 21,
    name: "Chuleta Centro",
    description:
      "Disfruta de un corte de cerdo excepcionalmente equilibrado y tierno, ideal para realzar cualquier preparación. Su perfecta combinación de carne y grasa garantiza un sabor y jugosidad incomparables, convirtiéndola en la opción ideal para asados, frituras y guisos.",
    price: 6490,
    image: "/products/cerdo/chuleta-centro.webp",
    category: "cerdo",
    unit: "kg",
    details: [
      "Porción: 100g",
      "Calorías: 240 kcal",
      "Proteínas: 19g",
      "Grasas totales: 18g",
      "Grasa saturada: 7g",
      "Carbohidratos: 0g",
    ],
  },
  {
    id: 22,
    name: "Pulpa de Cerdo",
    description:
      "Un corte versátil y excepcionalmente jugoso, perfecto para realzar tus recetas. Su sabor natural y textura suave lo hacen ideal para asados, guisos y frituras, aportando un toque de tradición y calidad en cada preparación.",
    price: 6990,
    image: "/public/images/products/cerdo/pulpa-cerdo.webp",
    category: "cerdo",
    unit: "kg",
    details: [
      "Porción: 100g",
      "Calorías: 210 kcal",
      "Proteínas: 17g",
      "Grasas totales: 14g",
      "Grasa saturada: 5g",
      "Carbohidratos: 0g",
    ],
  },
  {
    id: 23,
    name: "Tocineta",
    description:
      "Tocineta Premium: lonchas finamente cortadas y seleccionadas para ofrecer un toque ahumado e intenso a tus recetas. Su sabor distintivo y textura crujiente la hacen perfecta para realzar desde desayunos hasta platos gourmet, aportando un giro especial a cada preparación.",
    price: 13490,
    image: "/public/images/products/cerdo/tocineta.webp",
    category: "cerdo",
    unit: "kg",
    details: [
      "Porción: 100g",
      "Calorías: 400 kcal",
      "Proteínas: 12g",
      "Grasas totales: 35g",
      "Grasa saturada: 14g",
      "Carbohidratos: 1g",
    ],
  },
  {
    id: 24,
    name: "Lomo Vetado",
    description:
      "Irresistible Lomo Vetado, un corte excepcional de vacuno que equilibra perfectamente la jugosidad de la grasa con la terneza de la carne. Su sabor profundo y textura inigualable transforman cada preparación en una experiencia gourmet, ideal para asados memorables y platos sofisticados.",
    price: 19990,
    image: "/public/images/products/vacuno/lomo-vetado.webp",
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
      "Nuestra Carne Molida Especial es elaborada con cortes seleccionados de vacuno, entregando un sabor intenso y una textura homogénea ideal para tus preparaciones favoritas. Presentada en bandejas de 1 kilo, es perfecta para empanadas, hamburguesas caseras, albóndigas o salsas. Su frescura y bajo contenido de grasa la convierten en una aliada versátil para quienes buscan calidad y rendimiento en la cocina.",
    price: 9990,
    image: "/public/images/products/vacuno/carne-molida.webp",
    featured: true,
    category: "vacuno",
    unit: "kg",
    details: [
      "Porción: 100g",
      "Calorías: 220 kcal",
      "Proteínas: 20g",
      "Grasas totales: 15g",
      "Grasa saturada: 6g",
      "Carbohidratos: 0g",
    ],
  },
  {
    id: 29,
    name: "Posta",
    description:
      "Descubre la excelencia del vacuno con nuestra Posta, un corte selecto que se distingue por su textura tierna y su sabor intensamente concentrado. Ideal para asados a la brasa o guisos sofisticados, este corte se convierte en el protagonista de cualquier preparación, ofreciendo una experiencia culinaria única y memorable.",
    price: 12990,
    image: "/public/images/products/vacuno/posta.webp",
    category: "vacuno",
    unit: "kg",
    details: [
      "Porción: 100g",
      "Calorías: 240 kcal",
      "Proteínas: 21g",
      "Grasas totales: 15g",
      "Grasa saturada: 6g",
      "Carbohidratos: 0g",
    ],
  },
  {
    id: 30,
    name: "Asiento",
    description:
      "Descubre nuestro Asiento, un corte de vacuno reconocido por su ternura y sabor excepcional. Perfecto para preparaciones de cocción lenta, su marmoleo equilibrado y jugosidad incomparable potencian un sabor profundo y auténtico, convirtiéndolo en el protagonista ideal de estofados y guisos gourmet.",
    price: 13490,
    image: "/public/images/products/vacuno/asiento.webp",
    category: "vacuno",
    unit: "kg",
    details: [
      "Porción: 100g",
      "Calorías: 220 kcal",
      "Proteínas: 20g",
      "Grasas totales: 14g",
      "Grasa saturada: 5g",
      "Carbohidratos: 0g",
    ],
  },
  {
    id: 31,
    name: "Sobrecostilla / Huachalomo / Asado Carnicero / Abastero",
    description:
      "Experimenta la tradición y el sabor robusto con nuestra selección de cortes de vacuno: sobrecostilla, huachalomo, asado carnicero y abastero. Cada pieza ha sido meticulosamente seleccionada para ofrecer una textura inigualable y un sabor intenso, ideal para preparaciones de cocción lenta que realzan su carácter auténtico. Perfecto para asados, guisos y recetas que celebran la verdadera esencia del vacuno.",
    price: 10990,
    image: "/public/images/products/vacuno/Sobrecostilla-Vacuno.webp",
    category: "vacuno",
    unit: "kg",
    details: [
      "Porción: 100g",
      "Calorías: 250 kcal",
      "Proteínas: 18g",
      "Grasas totales: 18g",
      "Grasa saturada: 7g",
      "Carbohidratos: 0g",
    ],
  },
  {
    id: 32,
    name: "Tapapecho",
    description:
      "Descubre el Tapapecho, un corte distintivo de vacuno reconocido por su sabor excepcional y su increíble versatilidad. Ideal para preparar brisket, este corte se adapta perfectamente a recetas tradicionales y a creaciones innovadoras, ya sea al horno, en cacerola, estofados o mechadas. Su textura jugosa y perfil de sabor único aportan un toque gourmet a cada plato.",
    price: 10990,
    image: "/public/images/products/vacuno/tapapecho.webp",
    category: "vacuno",
    unit: "kg",
    details: [
      "Porción: 100g",
      "Calorías: 240 kcal",
      "Proteínas: 19g",
      "Grasas totales: 12g",
      "Grasa saturada: 5g",
      "Carbohidratos: 0g",
    ],
  },
  {
    id: 33,
    name: "Ala Entera",
    description:
      "El corte ideal para asados o frituras. Con una piel crujiente y carne jugosa, ofrece una experiencia completa de sabor y textura en cada bocado. Perfecta para reuniones familiares o platillos tradicionales, esta ala realza tus recetas con un toque auténtico y delicioso.",
    price: 5490,
    image: "/public/images/products/aves/ala.webp",
    category: "aves",
    unit: "kg",
    details: [
      "Porción: 100g",
      "Calorías: 200 kcal",
      "Proteínas: 17g",
      "Grasas totales: 12g",
      "Grasa saturada: 4g",
      "Carbohidratos: 0g",
    ],
  },
  {
    id: 34,
    name: "Pechuga Deshuesada",
    description:
      "Corte de pollo sin hueso que combina versatilidad y un sabor delicado. Ideal para recetas ligeras, platillos innovadores y preparaciones saludables, su textura suave y alto contenido proteico la convierten en la opción perfecta para una alimentación equilibrada.",
    price: 6990,
    image: "/public/images/products/aves/pechuga-deshuesada.webp",
    category: "aves",
    unit: "kg",
    details: [
      "Porción: 100g",
      "Calorías: 165 kcal",
      "Proteínas: 31g",
      "Grasas totales: 3.6g",
      "Grasa saturada: 1g",
      "Carbohidratos: 0g",
    ],
  },
  {
    id: 35,
    name: "Plateada Vacuno",
    description:
      "Un corte excepcional proveniente del lateral del pecho, apreciado por su forma rectangular y su textura aplanada que resalta la jugosidad y el sabor concentrado. Ideal para preparaciones a la parrilla o al horno, este corte se convierte en la opción perfecta para los amantes del buen vacuno.",
    price: 12959,
    image: "/public/images/products/vacuno/Plateada-vacuno.webp",
    category: "vacuno",
    unit: "kg",
    details: [
      "Porción: 100g",
      "Calorías: 210 kcal",
      "Proteínas: 20g",
      "Grasas totales: 12g",
      "Grasa saturada: 4g",
      "Carbohidratos: 0g",
    ],
  },
  {
    id: 36,
    name: "Patas de Pollo",
    description:
      "Las patas de pollo, con su carne firme y textura única, son perfectas para caldos y guisos que requieren un sabor intenso y profundo. Su mezcla de carne y cartílago aporta un toque auténtico y tradicional a cada receta, enriqueciendo tus preparaciones con un sabor robusto.",
    price: 2490,
    image: "/public/images/products/aves/patas pollo.webp",
    category: "aves",
    unit: "unidad",
    details: [
      "Porción: 100g",
      "Calorías: 190 kcal",
      "Proteínas: 17g",
      "Grasas totales: 11g",
      "Grasa saturada: 3g",
      "Carbohidratos: 0g",
    ],
  },
  {
    id: 37,
    name: "Carne Molida de Pollo",
    description:
      "Elaborada con ingredientes de primera calidad, es perfecta para darle vida a hamburguesas, albóndigas y otros platillos ligeros. Su textura fina y sabor natural aportan nutrición y frescura a cada receta, convirtiéndola en la elección ideal para una alimentación saludable y versátil.",
    price: 5599,
    image: "/public/images/products/aves/picadodecorral.webp",
    category: "aves",
    unit: "kg",
    details: [
      "Porción: 100g",
      "Calorías: 150 kcal",
      "Proteínas: 20g",
      "Grasas totales: 8g",
      "Grasa saturada: 2g",
      "Carbohidratos: 0g",
    ],
  },
  {
    id: 38,
    name: "Pechuga de Pollo Entera",
    description:
      "La Pechuga de Pollo Entera es perfecta para quienes buscan realzar el sabor natural y la jugosidad de este corte. Su carne magra y tierna se adapta idealmente a asados, parrilladas, guisos y salteados, aportando una excelente fuente de proteína de alta calidad para preparaciones saludables y deliciosas.",
    price: 5990,
    image: "/public/images/products/aves/pechuga.webp",
    category: "aves",
    unit: "kg",
    details: [
      "Porción: 100g",
      "Calorías: 165 kcal",
      "Proteínas: 30g",
      "Grasas totales: 4g",
      "Grasa saturada: 1g",
      "Carbohidratos: 0g",
    ],
  },
  {
    id: 39,
    name: "Chuleta Ahumada",
    description:
      "Un corte de cerdo cuidadosamente sometido a un proceso de ahumado que resalta su jugosidad y sabor profundo. Su textura tierna y el inconfundible toque ahumado la hacen perfecta para realzar cualquier plato, desde asados hasta recetas gourmet. Una opción irresistible para quienes buscan calidad y un sabor auténtico en cada bocado.",
    price: 8490,
    image: "/public/images/products/cerdo/chuleta-ahumada.webp",
    category: "cerdo",
    unit: "kg",
    details: [
      "Porción: 100g",
      "Calorías: 250 kcal",
      "Proteínas: 17g",
      "Grasas totales: 20g",
      "Grasa saturada: 8g",
      "Carbohidratos: 0g",
    ],
  },
  {
    id: 40,
    name: "Pollo Entero",
    description:
      "Nuestro Pollo Entero es la opción ideal para reuniones familiares y recetas caseras, ofreciendo una carne jugosa y tierna con un sabor auténtico y fresco. Criado de forma natural y sin aditivos, este pollo realza cualquier preparación, ya sea asado, guisado o a la parrilla, garantizando una experiencia gastronómica excepcional en cada bocado.",
    price: 7490,
    image: "/public/images/products/aves/pollocorral.webp",
    category: "aves",
    unit: "kg",
    details: [
      "Porción: 100g",
      "Calorías: 200 kcal",
      "Proteínas: 25g",
      "Grasas totales: 10g",
      "Grasa saturada: 3g",
      "Carbohidratos: 0g",
    ],
  },
  {
    id: 41,
    name: "Chuleta Vetada",
    description:
      "Corte jugoso y sabroso que se distingue por sus vetas de grasa natural, ofreciendo una cocción uniforme y un sabor excepcional. Presentada en bandejas de 1 kilo, es perfecta para la parrilla, sartén o al horno. Su ternura y textura marmoleada la convierten en una opción ideal para platos de calidad que buscan resaltar el auténtico sabor del cerdo.",
    price: 6990,
    image: "/public/images/products/cerdo/chuleta-vetada.webp",
    category: "cerdo",
    featured: true,
    unit: "kg",
    details: [
      "Porción: 100g",
      "Calorías: 250 kcal",
      "Proteínas: 22g",
      "Grasas totales: 18g",
      "Grasa saturada: 7g",
      "Carbohidratos: 0g",
    ],
  },
  {
    id: 42,
    name: "Longanizas",
    description:
      "Disfruta de nuestras Longanizas, un embutido tradicional elaborado con ingredientes selectos que garantiza un sabor intenso y auténtico. Su textura suave y jugosa las hace ideales para asar o disfrutar frías, aportando un toque distintivo y equilibrado a tus recetas preferidas.",
    price: 7490,
    image: "/public/images/products/elaborado/Longaniza.webp",
    category: "embutidos",
    unit: "kg",
    details: [
      "Porción: 100g",
      "Calorías: 320 kcal",
      "Proteínas: 14g",
      "Grasas totales: 28g",
      "Grasa saturada: 10g",
      "Carbohidratos: 1g",
    ],
  },
  {
    id: 43,
    name: "Filetillo de Pollo",
    description:
      "Una opción ligera y versátil extraída de pechugas seleccionadas para ofrecer una textura excepcional y un sabor fresco. Ideales para saltear o asar, estos filetes aportan rapidez y nutrición a tus recetas, combinando calidad y practicidad en cada bocado.",
    price: 7490,
    image: "/public/images/products/aves/filetillo-pollo.webp",
    category: "aves",
    unit: "kg",
    details: [
      "Porción: 100g",
      "Calorías: 155 kcal",
      "Proteínas: 29g",
      "Grasas totales: 4g",
      "Grasa saturada: 1g",
      "Carbohidratos: 0g",
    ],
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
