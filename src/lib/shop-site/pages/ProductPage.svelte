<script lang="ts">
  import { onMount } from "svelte";
  import { addToCart } from "../store/cart.store";
  import { fetchProduct } from "../store/products.store";
  import type { IProductDTO } from "../types";
  import ContinueShoppingModal from "../ui/modals/ContinueShoppingModal.svelte";

  export let id: string;

  let currentProduct: IProductDTO;

  const modal = {
    continueShopping: {
      isOpen: false,
      open: () => {
        addToCart(currentProduct);
        modal.continueShopping.isOpen = true;
      },
      close: () => {
        modal.continueShopping.isOpen = false;
      },
    },
  };

  onMount(async () => {
    currentProduct = await fetchProduct(id);
  });
</script>

<h1>Product</h1>

{id}

<ContinueShoppingModal
  isOpen={modal.continueShopping.isOpen}
  close={modal.continueShopping.close}
/>

<button on:click={modal.continueShopping.open}>Add to cart</button>
