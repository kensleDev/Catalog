<script lang="ts">
  import { createEventDispatcher } from "svelte";
  import { ToUpper } from "../../pipes";

  export let title;
  export let list = [];

  const dispatch = createEventDispatcher();

  function handleClick(e) {
    dispatch("click", { source: e.target.textContent.trim(), parent: title });
  }
</script>

<h3 class="text-md">{ToUpper(title)}</h3>
<ul class="flex flex-col">
  {#each list as item}
    <li class="text-lg" on:keydown={null} on:click={handleClick}>
      {ToUpper(item)}
    </li>
  {/each}
</ul>
