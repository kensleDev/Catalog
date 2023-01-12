<script lang="ts">
  import MainLayout from "../LandingPageLayout.svelte";
  import { onMount } from "svelte";

  import { LandingPageStore } from "../store/landingPage.store";
  import PictureCardList from "../../ui/cards/pictureCard/PictureCardList.svelte";
  import { Link } from "svelte-routing";

  let contentReady = false;
  // export let location

  onMount(() => {
    contentReady = true;
  });
</script>

<MainLayout>
  {#if contentReady}
    <div
      class="intro-ribbon bg-black/[0.3] w-full max-w-9/10 mx-auto p-5 md:max-w-120 md:mr-10 md:px-20 md:pt-30"
    >
      <p>Welcome to</p>
      <h1 class="mb-10">{$LandingPageStore.title}</h1>
      <p class="mb-15 text-2xl text-center md:text-left">
        {$LandingPageStore.tagline}
      </p>
      <p class="mb-10">{$LandingPageStore.description}</p>
      <PictureCardList pictureCards={$LandingPageStore.pictureCards} />
      <!-- <IconCardList -->
      <!--   iconCards={$LandingPageStore.iconCards} -->
      <!--   direction="horizontal" -->
      <!-- /> -->
      <button>{$LandingPageStore.button.text}</button>

      <Link to="/landscaping">Home</Link>
      <Link to="/landscaping/about">About</Link>
    </div>
  {/if}
</MainLayout>
