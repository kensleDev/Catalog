import { writable } from "svelte/store";

const cartPageData = {
  cart: [],
};

export const CartPageStore = writable(cartPageData);

export function AddToCart(product) {
  CartPageStore.update((d) => {
    for (let item of d.cart) {
      if (item.id === product.id) {
        item.quantity++;
        return d;
      }
    }

    d.cart = [...d.cart, { ...product, quantity: 1 }];
  });
}

export function minusQuantity(product) {
  CartPageStore.update((d) => {
    for (let item of d.cart) {
      if (item.id === product.id) {
        item.quantity--;
        return d;
      }
    }
  });
}

export function plusQuantity(product) {
  CartPageStore.update((d) => {
    for (let item of d.cart) {
      if (item.id === product.id) {
        item.quantity++;
        return d;
      }
    }
  });
}

export function removeItem(product) {
  CartPageStore.update((d) => {
    d.cart = d.cart.filter((item) => item.id !== product.id);
    return d;
  });
}

export function clearCart() {
  CartPageStore.update((d) => {
    d.cart = [];
    return d;
  });
}

export function getCartTotal() {
  let total = 0;
  CartPageStore.subscribe((d) => {
    for (let item of d.cart) {
      total += item.price * item.quantity;
    }
  });
  return total;
}
