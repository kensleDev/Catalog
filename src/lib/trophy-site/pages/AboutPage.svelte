<script lang="ts">
  import { onMount } from "svelte";
  import { fly } from "svelte/transition";
  import MainLayout from "../LandingPageLayout.svelte";

  let contentReady = false;

  onMount(() => {
    contentReady = true;
  });
</script>

<MainLayout>
  {#if contentReady}
    <h1
      class="text-5xl lg:text-6xl mb-5 shadow-2xl transition-all"
      in:fly={{ x: -200, delay: 200 }}
      out:fly={{ x: -200, delay: 0 }}
    >
      About Us
    </h1>
  {/if}
</MainLayout>
