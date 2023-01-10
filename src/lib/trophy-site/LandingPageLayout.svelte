<script>
  import Navigation from './shell/Navigation.svelte'
	import 'uno.css';
	// import '@fontsource/alef';

  import { ShellStore } from './store/shell.store'
  const { menuOpen } = ShellStore

</script>

<main
	class="bg-primary w-full h-full min-w-[320px] text-secondary max-w-[95vw] rounded-xl p-5 m-0 drop-shadow-2xl md:max-h-[90vh] sm:px-15 lg:max-w-[900px] lg:px-15 "
>
  <Navigation {ShellStore} />

  {#if !$menuOpen}
	  <slot />
  {/if}
</main>
