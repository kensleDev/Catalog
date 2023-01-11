<script lang="ts">
  import PictureCard from "./PictureCard.svelte";

  // import IconCard from "./PictureCard.svelte";

  export let pictureCards: any;
  export let direction = "vertical";

  // console.log({ iconCards });
</script>

{#if direction === "horizontal"}
  <ul
    class={`grid grid-cols-3 w-full gap-10 transition-all sm:grid-cols-3 sm:max-w-80 md:max-w-100  md:max-w-100`}
  >
    {#each pictureCards as pc}
      <li class="list-none">
        <PictureCard pictureCard={pc} />
      </li>
    {/each}
  </ul>
{/if}

{#if direction === "vertical"}
  <ul
    class={`grid grid-cols-1 max-w-40 gap-10 transition-all sm:grid-cols-3 sm:max-w-80 md:max-w-100  md:max-w-100`}
  >
    {#each pictureCards as pc}
      <li class="list-none">
        <PictureCard pictureCard={pc} />
      </li>
    {/each}
  </ul>
{/if}
