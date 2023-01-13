<script lang="ts">
  import { Link } from "svelte-routing";
</script>

<navigation
  class=" h-20 bg-red items-center justify-between w-full px-5 py-5 hidden md:flex"
>
  <div class="left-btns">
    <Link to="/shop/all">SHOP ALL</Link>
    <Link to="/shop/essentials">ESSENTITALS</Link>
  </div>
  <h3>Shop</h3>
  <div class="left-btns">
    <Link to="/shop/about">ABOUT</Link>
    <Link to="/shop/faq">FAQ</Link>
    <Link to="/shop/cart">CART</Link>
  </div>
</navigation>
