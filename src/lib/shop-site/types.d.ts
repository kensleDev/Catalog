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

export interface ILandingPage {
  title: string;
  productCollections: string[];
  productCategories: string[];
  products: IProductDTO[];
}

export interface IAboutPage {
  title: "";
  productCollections: string[];
  productCategories: string[];
  products: IProductDTO[];
}

export interface FetchError {
  status: number;
  msg: string;
  detail?: unknown;
}

interface IProductDTO {
  category: string;
  collectionId: string;
  collectionName: string;
  collections: string[];
  created: string;
  expand: Expand;
  id: string;
  price: number;
  thumbnail: string;
  title: string;
  updated: string;
}

interface ICartItem {
  product: IProductDTO;
  quantity: number;
}
