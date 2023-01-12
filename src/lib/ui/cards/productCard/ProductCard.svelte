<script lang="ts">
  import Image from "svelte-image";
  import type { IProductCard } from "../../../shop-site/types";
  export let productCard: IProductCard;
</script>

<div
  class="icon-card flex flex-col items-center section-border border-4 rounded-2xl w-full"
>
  <!-- <Icon name={iconCard.icon} margin=1.1 size=2.5 /> -->
  <Image src={productCard.thumbnails[0]} />
  <div
    class="details bg-teal-300 w-full rounded-b-xl border-t-black border-t-2 border-t-solid py-2 px-2 flex items-center min-h-20"
  >
    <h3 class="w-full text-left text-xs mb-2 shadow-2xl w-4/6">
      {productCard.title}
    </h3>
    <p class="text-center text-xs shadow-2xl w-2/6 ">{productCard.price}</p>
  </div>
</div>
