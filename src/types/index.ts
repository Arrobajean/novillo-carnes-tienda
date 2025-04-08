export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
  featured?: boolean;
  unit?: string;
  stock?: number;
  details?: string[];
}

export type ProductCategory =
  | "vacuno"
  | "cerdo"
  | "cordero"
  | "aves"
  | "embutidos"
  | "parrilleros"
  | "promociones";

export interface CategoryInfo {
  id: ProductCategory;
  name: string;
  description: string;
}
