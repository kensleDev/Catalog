<script lang="ts">
  import Image from "svelte-image";
  import { PbImg, toGbp, ToUpper } from "../../../pipes";
  import type { IProductCard, IProductDTO } from "../../../shop-site/types";
  export let productCard: IProductDTO;

  const { title, price, collectionId, id, thumbnail } = productCard;
</script>

<div
  class="icon-card flex flex-col items-center section-border border-4 rounded-2xl w-full min-w-[140px]"
>
  <!-- <Icon name={iconCard.icon} margin=1.1 size=2.5 /> -->
  <Image src={PbImg(collectionId, id, thumbnail)} width="200" />
  <div
    class="details bg-teal-300 w-full rounded-b-xl border-t-black border-t-2 border-t-solid py-2 px-2 flex items-center min-h-20 max-h-20"
  >
    <h3 class="w-full text-left text-xs shadow-2xl w-4/6">
      {ToUpper(title)}
    </h3>
    <p
      class="text-center text-xs shadow-2xl w-2/6 border-1 border-black border-solid rounded-xl py-2 ml-4"
    >
      {toGbp(price)}
    </p>
  </div>
</div>
