import { writable } from "svelte/store";

const productCards = [];

const landingPageData = {
  backgroundImage:
    "https://media.discordapp.net/attachments/1006318431022358572/1062540930848133180/landscaping-bg.png?width=1007&height=566",

  title: "Shop",

  productCards: [
    {
      title: "A Nice Tee 1",
      price: 20,
      thumbnails: ["/shop/tee 1.webp"],
      collection: "All Collections",
      category: "Tees",
    },
    {
      title: "A Nice Tee 2",
      price: 20,
      thumbnails: ["/shop/tee 2.webp"],
      collection: "All Collections",
      category: "Tees",
    },
    {
      title: "A Nice Tee 3",
      price: 20,
      thumbnails: ["/shop/tee 3.webp"],
      collection: "All Collections",
      category: "Tees",
    },
    {
      title: "A Nice Hoodie 1",
      price: 30,
      thumbnails: ["/shop/hoodie 1.webp"],
      collection: "All Collections",
      category: "Tees",
    },
    {
      title: "A Nice Hoodie 2",
      price: 30,
      thumbnails: ["/shop/hoodie 2.webp"],
      collection: "All Collections",
      category: "Tees",
    },
    {
      title: "A Nice Rucksack",
      price: 15,
      thumbnails: ["/shop/rucksack 1.webp"],
      collection: "All Collections",
      category: "Tees",
    },
    {
      title: "A Nice Rucksack 2",
      price: 15,
      thumbnails: ["/shop/rucksack 2.webp"],
      collection: "All Collections",
      category: "Tees",
    },
  ],

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
