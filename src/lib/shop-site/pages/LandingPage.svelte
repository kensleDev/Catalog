<script lang="ts">
  import { onMount } from "svelte";

  import ProductCardList from "../../ui/cards/productCard/ProductCardList.svelte";
  import ShopPageLayout from "../layouts/ShopPageLayout.svelte";
  import {
    fetchFilterResults,
    fetchPageData,
    LandingPageStore,
  } from "../store/landingPage.store";
  import SidebarTree from "../ui/SidebarTree.svelte";

  let contentReady = false;

  function handleSidebarClick(e) {
    console.log(e.detail);

    if (e.detail.parent === "categories") {
      if (e.detail.source === "shop all") fetchFilterResults("");
      else fetchFilterResults(`category = "${e.detail.source}"`);
    } else if (e.detail.parent === "collections") {
      fetchFilterResults(`collection = "${e.detail.source}"`);
    } else {
      console.error("Parent not recognised: " + e.detail.parent);
    }

    return;
  }

  onMount(async () => {
    await fetchPageData();
    contentReady = true;
  });
</script>

<ShopPageLayout {contentReady}>
  <!-- <h1>{$LandingPageStore.title}</h1> -->

  <div
    class="bg-yellow w-60 md:h-235 border-black border-2 p-2 section-border"
    slot="aside"
  >
    <SidebarTree
      title="collections"
      list={$LandingPageStore.productCollections}
      on:click={handleSidebarClick}
    />
    <SidebarTree
      title="categories"
      list={$LandingPageStore.productCategories}
      on:click={handleSidebarClick}
    />
  </div>
  <div class=" w-full max-h-30 bg-red h-full z-1" slot="titleBanner">
    Shop All
  </div>
  <div class="w-full max-h-30 bg-blue h-full z-1" slot="infoBanner">Info</div>
  <div class="h-full md:max-h-178 overflow-y-scroll" slot="productArea">
    <ProductCardList productCards={$LandingPageStore.products} />
  </div>
</ShopPageLayout>
