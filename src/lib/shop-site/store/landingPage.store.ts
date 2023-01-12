import { writable } from "svelte/store";
import { FetchJson } from "../../pipes/fetch";
import type { IProductCard } from "../types";

// const productCards: IProductCard[]

const url = "http://localhost:3000/products";

const products = await FetchJson<IProductCard[]>(url);

const productCards = products;

console.log(products);

const landingPageData = {
  backgroundImage:
    "https://media.discordapp.net/attachments/1006318431022358572/1062540930848133180/landscaping-bg.png?width=1007&height=566",

  title: "Shop",

  productCollections: ["All Collections"],
  productCategories: ["Tees, Hoodies, Accesories"],
  productCards,

  // tagline: 'A Catchy Tagline',
  // description:
  //   'A description about your company and what this website is for and what yo do. Make it interesting!',
  // iconCards: [
  //   {
  //     title: 'Promote',
  //     tagline: 'Promote your business',
  //     icon: 'bullhorn',
  //   },
  //   {
  //     title: 'Funnel traffic',
  //     tagline: 'Create a funnel to your products & social media',
  //     icon: 'traffic',
  //   },
  //   {
  //     title: 'Get noticed',
  //     tagline: 'Eye catching designs',
  //     icon: 'bomb',
  //   },
  // ],
  // button: {
  //   text: 'Sign up to the newsletter',
  //   icon: 'newspaper',
  // },
  // image:
  //   'https://media.discordapp.net/attachments/1006318431022358572/1062415572803006554/Juju_modern_trophy.png?width=441&height=671',
};

export const LandingPageStore = writable(landingPageData);
