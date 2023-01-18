<script>
  import MainLayout from "../layouts/MainLayout.svelte";
  import { CartStore, updatCartItemQuantity } from "../store/cart.store";
  import Cart from "../ui/Cart.svelte";
</script>

<MainLayout>
  <h1>Cart</h1>

  <Cart />
</MainLayout>
