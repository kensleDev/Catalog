<script lang="ts">
  import MainLayout from "../ShopPageLayout.svelte";
  import { onMount } from "svelte";

  import { LandingPageStore } from "../store/landingPage.store";
  import ShopPageLayout from "../ShopPageLayout.svelte";
  import ProductCardList from "../../ui/cards/productCard/ProductCardList.svelte";

  let contentReady = false;
  // export let location

  onMount(() => {
    contentReady = true;
  });
</script>

<ShopPageLayout>
  {#if contentReady}
    <h1>{$LandingPageStore.title}</h1>
  {/if}

  <div class="bg-yellow h-full border-black border-2" slot="aside">
    Collections
  </div>
  <div class="bg-red h-full" slot="titleBanner">Shop All</div>
  <div class="bg-blue h-full" slot="infoBanner">Info</div>
  <div class="h-full section-border p-8" slot="productArea">
    <ProductCardList productCards={$LandingPageStore.productCards} />
  </div>
</ShopPageLayout>
