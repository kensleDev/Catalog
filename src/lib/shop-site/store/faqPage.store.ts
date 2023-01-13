import { writable } from "svelte/store";

const faqPageData = {
  title: "",
  faqs: [
    {
      question: "What forms of payment do you accept?",
      answer:
        "We accept Visa, Mastercard, American Express, Discover, PayPal, and store credit.",
    },
    {
      question: "How long will it take for my order to ship?",
      answer:
        "Orders typically ship within 1-2 business days and take 3-7 business days for delivery within the United States. International orders may take longer.",
    },
    {
      question: "What is your return policy?",
      answer:
        "We accept returns within 30 days of delivery for a refund or store credit. Items must be in new, unworn condition with all original tags attached.",
    },
    {
      question: "How do I redeem a reward?Do you offer free shipping?",
      answer:
        "We offer free standard shipping on orders over $50 within the United States.",
    },
    {
      question: "Can I track my order?",
      answer:
        "Yes, you will receive an email with tracking information once your order has shipped.",
    },
    {
      question: "Can I make changes to my order?",
      answer:
        "If your order has not yet shipped, we may be able to make changes. Please contact our customer service team as soon as possible.",
    },
    {
      question: "Can I cancel my order?",
      answer:
        "If your order has not yet shipped, you may cancel it by contacting our customer service team.",
    },
    {
      question: "Do you offer gift wrapping?",
      answer:
        "Yes, we offer gift cards in a variety of amounts.No, we do not currently offer gift wrapping.",
    },
    {
      question: "Do you have a size chart?",
      answer:
        "Yes, a size chart is available on each product page and also on our size guide page.",
    },
    {
      question: "Can I exchange an item?",
      answer:
        "Yes, you can exchange an item for a different size or color within 30 days of delivery. Please contact our customer service team to initiate an exchange.",
    },
  ],
};

export const FaqPageStore = writable(faqPageData);
