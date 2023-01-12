<script lang="ts">
  import MainLayout from "../LandingPageLayout.svelte";
  import { onMount } from "svelte";

  import { LandingPageStore } from "../store/landingPage.store";
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
      class="intro-ribbon bg-black/[0.3] w-full max-w-9/10 mx-auto p-5 md:max-w-120 md:mr-10 md:px-20 md:pt-30 md:min-h-[726px]"
    >
      <h1 class="mb-10">{$LandingPageStore.title}</h1>
      <h2>About</h2>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
    </div>
  {/if}
</MainLayout>
