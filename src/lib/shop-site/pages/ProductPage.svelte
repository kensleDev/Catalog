<script lang="ts">
  export let id;

  import { CartPageStore, AddToCart } from "../store/cartPage.store";

  // const currentProudct =

  function handleAddToCart() {
    AddToCart(id);
  }
</script>

<h1>Product</h1>
{id}

<button on:click={handleAddToCart} />
