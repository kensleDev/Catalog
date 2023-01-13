<script lang="ts">
  import { onMount } from "svelte";

  import ProductCardList from "../../ui/cards/productCard/ProductCardList.svelte";
  import ShopPageLayout from "../layouts/ShopPageLayout.svelte";
  import { fetchPageData, LandingPageStore } from "../store/landingPage.store";
  import { fetchProducts, ProductsStore } from "../store/products.store";
  import SidebarTree from "../ui/SidebarTree.svelte";

  let contentReady = false;

  $: {
    console.log("ProductsStore: ", $ProductsStore);
  }

  function handleSidebarClick(e) {
    console.log(e.detail);

    if (e.detail.parent === "categories") {
      if (e.detail.source === "shop all") fetchProducts("");
      else fetchProducts(`category = "${e.detail.source}"`);
    } else if (e.detail.parent === "collections") {
      fetchProducts(`collection = "${e.detail.source}"`);
    } else {
      console.error("Parent not recognised: " + e.detail.parent);
    }

    return;
  }

  onMount(async () => {
    fetchProducts();
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
    <ProductCardList productCards={$ProductsStore.products} />
  </div>
</ShopPageLayout>
