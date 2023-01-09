<script>
  import Navigation from './shell/Navigation.svelte'
	import 'uno.css';
	// import '@fontsource/alef';

  import { ShellStore } from './store/shell.store'
  const { menuOpen } = ShellStore

</script>

<main
	class="bg-primary w-full h-full text-secondary max-w-[95vw]  max-h-[98vh] rounded-xl p-5 lg:px-15 m-0 md:max-h-[90vh] lg:max-w-[900px]"
>
  <Navigation {ShellStore} />

  {#if !$menuOpen}
	  <slot />
  {/if}
</main>
