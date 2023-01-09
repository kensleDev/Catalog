<script lang="ts">
	import Hamburger from './Hamburger.svelte';
  export let ShellStore

  const { menuOpen } = ShellStore 
</script>

<navigation class="flex items-center justify-between w-full mb-5 lg:mb-20 lg:hidden">
  <p>Logo</p>
  {#if $menuOpen}
    <div class="flex flex-col w-full items-center justify-center">
      <a href="/about" class="px-10">About</a>
      <a href="/contact">Contact</a>
    </div>
  {/if}
  <Hamburger on:menuOpen={(e) => ShellStore.updateMenuOpen(e.detail)} />
</navigation>

<navigation class="hidden lg:flex items-center justify-between w-full mb-5 lg:mb-20 w-full">
  <p>Logo</p>
  <div>
    <a href="/about" class="px-10">About</a>
    <a href="/contact">Contact</a>
  </div>
</navigation>
