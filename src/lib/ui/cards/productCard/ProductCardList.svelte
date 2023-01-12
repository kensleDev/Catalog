<script lang="ts">
  import type { IProductCard } from "../../../shop-site/types";
  import ProductCard from "./ProductCard.svelte";

  export let productCards: IProductCard[];
</script>

<ul class={`grid grid-cols-3 w-full gap-10 transition-all`}>
  {#each productCards as pc}
    <li class="list-none">
      <ProductCard productCard={pc} />
    </li>
  {/each}
</ul>
