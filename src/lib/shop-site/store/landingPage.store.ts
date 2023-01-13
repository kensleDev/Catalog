import { writable } from "svelte/store";
import { FetchJson, getPageData, isFetchError } from "../../pipes/fetch";
import type { ILandingPage, IProductCard, IProductDTO } from "../types";
import type { FetchError } from "../../shop-site/types";
import { pb } from "../../pocketbase";

// const productCards: IProductCard[]
// const productCards = products;
// console.log(products);

export const LandingPageStore = writable(<ILandingPage>{});

async function getProducts() {
  const result = await pb
    .collection("products")
    .getList<IProductDTO>(1, 20, {});

  return result.items;
}

export async function fetchPageData() {
  const url = "http://localhost:3000/landingPage";
  const pageData = (await FetchJson<ILandingPage>(url)) as ILandingPage;

  pageData.products = await getProducts();
  LandingPageStore.update((d) => pageData as ILandingPage);
}

export async function fetchFilterResults(query: string) {
  const url = "http://localhost:3000/landingPage";
}

// {
//         "id": 0,
//         "title": "A Nice Tee 1",
//         "price": 20,
//         "thumbnails": [
//           "/shop/tee 1.webp"
//         ],
//         "collection": "All Collections",
//         "category": "Tees"
//       },
//       {
//         "id": 1,
//         "title": "A Nice Tee 2",
//         "price": 20,
//         "thumbnails": [
//           "/shop/tee 2.webp"
//         ],
//         "collection": "All Collections",
//         "category": "Tees"
//       },
//       {
//         "id": 2,
//         "title": "A Nice Tee 3 with a really long name",
//         "price": 20,
//         "thumbnails": [
//           "/shop/tee 3.webp"
//         ],
//         "collection": "All Collections",
//         "category": "Tees"
//       },
//       {
//         "id": 3,
//         "title": "A Nice Tee 4 with a really long name",
//         "price": 20,
//         "thumbnails": [
//           "/shop/tee 4.webp"
//         ],
//         "collection": "All Collections",
//         "category": "Tees"
//       },
//       {
//         "id": 4,
//         "title": "A Nice Hoodie 1",
//         "price": 30,
//         "thumbnails": [
//           "/shop/hoodie 1.webp"
//         ],
//         "collection": "All Collections",
//         "category": "Hoodies"
//       },
//       {
//         "id": 5,
//         "title": "A Nice Hoodie 2",
//         "price": 30,
//         "thumbnails": [
//           "/shop/hoodie 2.webp"
//         ],
//         "collection": "All Collections",
//         "category": "Hoodies"
//       },
//       {
//         "id": 6,
//         "title": "A Nice Hoodie 3",
//         "price": 30,
//         "thumbnails": [
//           "/shop/hoodie 3.webp"
//         ],
//         "collection": "All Collections",
//         "category": "Hoodies"
//       },
//       {
//         "id": 7,
//         "title": "A Nice Hoodie 4",
//         "price": 30,
//         "thumbnails": [
//           "/shop/hoodie 3.webp"
//         ],
//         "collection": "All Collections",
//         "category": "Hoodies"
//       },
//       {
//         "id": 8,
//         "title": "A Nice Rucksack",
//         "price": 15,
//         "thumbnails": [
//           "/shop/rucksack 1.webp"
//         ],
//         "collection": "All Collections",
//         "category": "Accesories"
//       },
//       {
//         "id": 9,
//         "title": "A Nice Rucksack 2",
//         "price": 15,
//         "thumbnails": [
//           "/shop/rucksack 2.webp"
//         ],
//         "collection": "All Collections",
//         "category": "Accesories"
//       },
//       {
//         "id": 10,
//         "title": "A Nice Rucksack 3",
//         "price": 15,
//         "thumbnails": [
//           "/shop/rucksack 3.webp"
//         ],
//         "collection": "All Collections",
//         "category": "Accesories"
//       },
//       {
//         "id": 11,
//         "title": "A Nice Rucksack 4",
//         "price": 15,
//         "thumbnails": [
//           "/shop/rucksack 4.webp"
//         ],
//         "collection": "All Collections",
//         "category": "Accesories"
//       }
