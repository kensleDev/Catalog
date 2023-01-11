import { writable } from "svelte/store";

const landingPageData = {
  backgroundImage:
    "https://media.discordapp.net/attachments/1006318431022358572/1062540930848133180/landscaping-bg.png?width=1007&height=566",

  title: "Gemmas Garden",
  tagline: "We ❤️ 🪴",
  pictureCards: [
    {
      title: "Gardening",
      tagline: "Year round service",
      image: {
        src: "/gardening icon.webp",
        alt: "",
      },
    },
    {
      title: "Landscaping",
      tagline: "Qualified landscapers",
      image: {
        src: "/landscaping icon.webp",
        alt: "",
      },
    },
    {
      title: "Nursery",
      tagline: "Stock many species of plant",
      image: {
        src: "/nursery icon.webp",
        alt: "",
      },
    },
  ],
  iconCards: [
    {
      title: "Gardening",
      tagline: "Year round service",
      icon: "bullhorn",
    },
    {
      title: "Landscaping",
      tagline: "Qualified landscapers",
      icon: "traffic",
    },
    {
      title: "Nursery",
      tagline: "Stock many species of plant",
      icon: "bomb",
    },
  ],
  description:
    "Ea esse exercitation eiusmod occaecat in consectetur anim laborum deserunt proident do adipisicing. Fugiat labore laborum aliquip et. Labore ut minim exercitation duis exercitation adipisicing officia aliquip elit magna.",
  button: {
    text: "",
  },

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
