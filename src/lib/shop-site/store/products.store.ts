import { writable } from "svelte/store";
import { pb } from "../../pocketbase";
import type { IProductDTO } from "../types";

export const ProductsStore = writable({
  products: [],
});

const productsCache = [];

export async function fetchProducts(filter = "") {
  if (productsCache[filter]) {
    ProductsStore.update((d) => {
      d.products = productsCache[filter];
      return d;
    });
    return;
  }

  const result = await pb
    .collection("products")
    .getList<IProductDTO>(1, 20, { filter });

  productsCache[filter] = result.items;

  ProductsStore.update((d) => {
    d.products = result.items;
    return d;
  });
}
