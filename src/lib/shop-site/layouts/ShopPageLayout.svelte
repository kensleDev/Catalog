<script>
  import "uno.css";
  // import Navigation from './shell/Navigation.svelte'
  // import '@fontsource/alef';
  import { onMount } from "svelte";
  import Navigation from "../shell/Navigation.svelte";

  export let contentReady = false;

  // $: {
  //   console.log({ contentReady });
  // }

  // import { ShellStore } from './store/shell.store'
  // const { menuOpen } = ShellStore

  onMount(() => {
    const bodyEl = document.querySelector("body");
    bodyEl.style.background = "white";
    bodyEl.style.padding = "0";

    // const mainEl = document.querySelector("main");
    // const bg = $LandingPageStore.backgroundImage;
    // mainEl.style.backgroundImage = bg;

    // console.log(mainEl.style.backgroundImage);
  });
</script>

<main class="w-full max-w-[1400px]">
  <Navigation />
  <div class="page-container w-full">
    <aside>
      {#if contentReady}
        <slot name="aside" />
      {:else}
        <p>LOADING</p>
      {/if}
    </aside>
    <div class="title-banner">
      {#if contentReady}
        <slot name="titleBanner" />
      {:else}
        <p>LOADING</p>
      {/if}
    </div>
    <div class="info-banner ">
      {#if contentReady}
        <slot name="infoBanner" />
      {:else}
        <p>LOADING</p>
      {/if}
    </div>
    <article class="product-area">
      {#if contentReady}
        <slot name="productArea" />
      {:else}
        <p>LOADING</p>
      {/if}
    </article>
  </div>
</main>

<style>
  .page-container {
    display: grid;
    height: calc(100vh - 66px);
    grid-template-columns: 1fr;
    grid-template-rows: 50px 50px 50px 1fr;

    grid-gap: 1rem;
    padding: 1rem 1rem 1rem 1rem;
  }

  aside {
    grid-row: 2 / 3;
  }

  @media screen and (min-width: 768px) {
    .page-container {
      grid-template-columns: 250px 1fr;
      grid-template-rows: 100px 100px 1fr;
      padding: 1rem 2rem 1rem 2rem;
    }

    aside {
      grid-row: 1 / 4;
    }
  }
</style>
