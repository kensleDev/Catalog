import { writable } from "svelte/store";
import type { ICartItem, IProductDTO } from "../types";

interface ICartStore {
  cart: ICartItem[];
}

const cartData: ICartStore = {
  cart: [],
};

export const CartStore = writable(cartData);

function isProductInCart(
  cart: ICartStore["cart"],
  product: IProductDTO
): { isInCart: boolean; cartItemIndex: number } {
  const cartItemIndex = cart.findIndex(
    (item) => item.product.id === product.id
  );

  const isInCart = cartItemIndex > -1;

  return { isInCart, cartItemIndex };
}

export function addToCart(product: IProductDTO) {
  CartStore.update((d) => {
    const { isInCart, cartItemIndex } = isProductInCart(d.cart, product);

    if (isInCart) {
      d.cart[cartItemIndex].quantity++;
      console.log({ cart: d.cart });
      return d;
    }

    d.cart = [...d.cart, { product, quantity: 1 }];
    console.log({ cart: d.cart });
    return d;
  });
}

export function updateQuantity(cartItem, quantity) {
  CartStore.update((d) => {
    const { isInCart, cartItemIndex } = isProductInCart(
      d.cart,
      cartItem.product
    );

    if (isInCart) {
      d.cart[cartItemIndex].quantity =
        d.cart[cartItemIndex].quantity + quantity;
      console.log({ cart: d.cart });
      return d;
    }

    return d;
  });
}

export function removeItem(product) {
  CartStore.update((d) => {
    d.cart = d.cart.filter((item) => item.product.id !== product.id);
    return d;
  });
}

export function clearCart() {
  CartStore.update((d) => {
    d.cart = [];
    return d;
  });
}

export function getCartTotal(): number {
  let total = 0;
  CartStore.subscribe((d) => {
    for (let item of d.cart) {
      total += item.product.price * item.quantity;
    }
  });
  return total;
}
