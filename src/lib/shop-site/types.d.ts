export type ProductCategory =
  | "All Products"
  | "Accessories"
  | "Hoodies"
  | "Tees";

export interface IImage {
  src: string;
  alt: string;
}

export interface IProduct extends IProductCard {
  images: IImage[];
  details: {
    tagline: string;
    description: string;
  };
}

export interface IProductCard {
  title: string;
  price: number;
  thumbnails: string[];
  collection: string;
  category: string;
}
