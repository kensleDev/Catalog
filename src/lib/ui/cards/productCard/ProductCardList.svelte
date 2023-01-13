<script lang="ts">
  import type { IProductCard, IProductDTO } from "../../../shop-site/types";
  import ProductCard from "./ProductCard.svelte";

  export let productCards: IProductDTO[] = [];
</script>

<ul
  class={`w-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-1 md:gap-3 transition-all min-w-[310px]`}
>
  {#each productCards as pc}
    <li class="list-none">
      <ProductCard productCard={pc} />
    </li>
  {/each}
</ul>
