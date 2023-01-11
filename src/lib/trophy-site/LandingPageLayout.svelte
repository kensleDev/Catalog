<script>
  import Navigation from './shell/Navigation.svelte'
	import 'uno.css';
	// import '@fontsource/alef';
  import {onMount} from 'svelte'

  import { ShellStore } from './store/shell.store'
  const { menuOpen } = ShellStore

  onMount(() => {
    const bodyEl = document.querySelector('body')
    bodyEl.style.background = 'linear-gradient(to right bottom, rgb(250, 204, 21), rgb(254, 240, 138), rgb(199, 159, 27))'
  })
</script>

<main
  class={`surface w-full min-w-[320px] max-w-[95vw] h-full p-5 m-0 rounded-xl drop-shadow-2xl transition-all sm:px-15 sm:py-10 md:max-h-[90vh] lg:max-w-[900px] lg:px-15`}
>
  <Navigation {ShellStore} />

  {#if !$menuOpen}
	  <slot />
  {/if}
</main>
