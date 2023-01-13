<script lang="ts">
  import { onMount } from "svelte";

  import ProductCardList from "../../ui/cards/productCard/ProductCardList.svelte";
  import ShopPageLayout from "../ShopPageLayout.svelte";
  import { fetchPageData, LandingPageStore } from "../store/landingPage.store";
  import SidebarTree from "../ui/SidebarTree.svelte";

  let contentReady = false;

  function handleSidebarClick(e) {
    console.log();
  }

  onMount(async () => {
    await fetchPageData();
    contentReady = true;
  });
</script>

<ShopPageLayout {contentReady}>
  <h1>{$LandingPageStore.title}</h1>

  <div
    class="bg-yellow h-full border-black border-2 p-2 section-border"
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
  <div class="bg-red h-full" slot="titleBanner">Shop All</div>
  <div class="bg-blue h-full" slot="infoBanner">Info</div>
  <div class="h-full" slot="productArea">
    <ProductCardList productCards={$LandingPageStore.products} />
  </div>
</ShopPageLayout>
