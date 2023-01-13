import { writable } from "svelte/store";
import type { ICartItem, IProductDTO } from "../types";

interface ICartStore {
  cart: ICartItem[];
  total: number;
}

const cartData: ICartStore = {
  cart: [],
  total: 0,
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

function calcTotal(cart: ICartItem[]) {
  let total = 0;
  for (let item of cart) {
    total += item.product.price * item.quantity;
  }

  CartStore.update((d) => {
    d.total = total;
    return d;
  });
}

export function addToCart(product: IProductDTO) {
  CartStore.update((d) => {
    const { isInCart, cartItemIndex } = isProductInCart(d.cart, product);

    if (isInCart) {
      d.cart[cartItemIndex].quantity++;
      calcTotal(d.cart);
      console.log({ cart: d.cart });
      return d;
    }

    d.cart = [...d.cart, { product, quantity: 1 }];
    calcTotal(d.cart);
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
      calcTotal(d.cart);
      return d;
    }

    calcTotal(d.cart);
    return d;
  });
}

export function removeItem(product) {
  CartStore.update((d) => {
    d.cart = d.cart.filter((item) => item.product.id !== product.id);
    calcTotal(d.cart);
    return d;
  });
}

export function clearCart() {
  CartStore.update((d) => {
    d.cart = [];
    calcTotal(d.cart);
    return d;
  });
}
