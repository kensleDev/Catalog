<script>
  import "uno.css";
  // import Navigation from './shell/Navigation.svelte'
  // import '@fontsource/alef';
  import { onMount } from "svelte";
  import { LandingPageStore } from "./store/landingPage.store";
  import Transition from "@ui/Transition.svelte";

  // import { ShellStore } from './store/shell.store'
  // const { menuOpen } = ShellStore

  onMount(() => {
    const bodyEl = document.querySelector("body");
    bodyEl.style.background =
      "linear-gradient(153deg, rgba(41,103,61,1) 0%, rgba(25,89,35,1) 50%, rgba(29,140,18,1) 100%)";

    const bg = $LandingPageStore.backgroundImage;
    bodyEl.style.backgroundImage = `url('/bg-landscape.jpeg')`;
    bodyEl.style.backgroundPosition = "center";
    bodyEl.style.padding = "0";
    // const mainEl = document.querySelector("main");
  });
</script>

<!-- class={`surface w-full min-w-[320px] max-w-[95vw] h-full p-5 m-0 rounded-xl drop-shadow-2xl transition-all sm:px-15 sm:py-10 md:max-h-[90vh] lg:max-w-[900px] lg:px-15`} -->

<main class="w-full">
  <!-- <main class={`surface w-full min-w-[320px] max-w-[95vw] h-[97vh] p-5 m-0 rounded-xl drop-shadow-2xl transition-all sm:px-15 sm:py-10 md:max-h-[90vh] lg:max-w-[900px] lg:px-15`}> -->
  <Transition>
    <slot />
  </Transition>
  <!-- <Navigation {ShellStore} />

  {#if !$menuOpen}
	  <slot />
  {/if} -->
</main>
