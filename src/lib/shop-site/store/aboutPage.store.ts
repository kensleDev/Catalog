import { writable } from "svelte/store";

const aboutPageData = {
  heroImage: {
    src: "",
    alt: "",
  },
  about: {
    title: "",
    description: "",
    image: {
      src: "",
      alt: "",
    },
  },
  socialMedia: {
    title: "",
    description: "",
    links: [
      {
        title: "Twiiter",
        url: "",
      },
      {
        title: "Instagram",
        url: "",
      },
      {
        title: "Facebook",
        url: "",
      },
    ],
  },
};

export const AboutPageStore = writable(aboutPageData);
