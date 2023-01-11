<script lang="ts">
	import Hamburger from '@ui/Hamburger.svelte';
  export let ShellStore

  const { menuOpen } = ShellStore 
</script>

<navigation class="flex-center w-full mb-5 lg:mb-20 lg:hidden">
  <p>Logo</p>
 
  <Hamburger on:menuOpen={(e) => ShellStore.updateMenuOpen(e.detail)} />
   {#if $menuOpen}
    <div class="flex flex-col w-full items-center justify-center min-h-50vh">
      <a href="/about" class="px-10">About</a>
      <a href="/contact">Contact</a>
    </div>
  {/if}
</navigation>

<navigation class="hidden w-full mb-5 w-full lg:flex lg:items-between lg:mb-20">
  <p>Logo</p>
  <div>
    <a href="/about" class="px-10">About</a>
    <a href="/contact">Contact</a>
  </div>
</navigation>
