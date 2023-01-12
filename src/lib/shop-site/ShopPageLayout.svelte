<script>
  import "uno.css";
  // import Navigation from './shell/Navigation.svelte'
  // import '@fontsource/alef';
  import { onMount } from "svelte";
  import { LandingPageStore } from "./store/landingPage.store";
  import Navigation from "./shell/Navigation.svelte";

  // import { ShellStore } from './store/shell.store'
  // const { menuOpen } = ShellStore

  onMount(() => {
    const bodyEl = document.querySelector("body");
    bodyEl.style.background = "white";
    bodyEl.style.padding = "0";

    const mainEl = document.querySelector("main");
    const bg = $LandingPageStore.backgroundImage;
    mainEl.style.backgroundImage = bg;

    console.log(mainEl.style.backgroundImage);
  });
</script>

<main class="w-full max-w-[1024px]">
  <Navigation />
  <div class="page-container w-full">
    <aside><slot name="aside" /></aside>
    <div class="title-banner">
      <slot name="titleBanner" />
    </div>
    <div class="info-banner ">
      <slot name="infoBanner" />
    </div>
    <article class="product-area">
      <slot name="productArea" />
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
      grid-template-columns: 200px 1fr;
      grid-template-rows: 100px 100px 1fr;
      padding: 1rem 2rem 1rem 2rem;
    }

    aside {
      grid-row: 1 / 4;
    }
  }
</style>
