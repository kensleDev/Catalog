<script lang="ts">
  import { onMount } from "svelte";
  import { fly } from "svelte/transition";
  export let refresh = ``;

  let animations = false;

  onMount(
    () =>
      (animations =
        Boolean(window.matchMedia(`(prefers-reduced-motion: reduce)`)) ===
          true ||
        window.matchMedia(`(prefers-reduced-motion: reduce)`).matches !== true)
  );
</script>

{#key refresh}
  {#if !!animations}
    <!-- You can modify the in:fly and out:fly attributes to your liking! -->
    <div
      class="transition-container"
      in:fly={{ delay: 1000, duration: 1000, y: -100 }}
      out:fly={{ duration: 1000, y: -100 }}
    >
      <slot />
    </div>
  {:else}
    <slot />
  {/if}
{/key}

<style>
  .transition-container {
    display: grid;
    grid-template-rows: 1fr;
    grid-template-columns: 1fr;
  }

  .transition-container > * {
    grid-row: 1;
    grid-column: 1;
  }
</style>
