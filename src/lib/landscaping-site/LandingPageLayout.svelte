<script>
	import 'uno.css';
  // import Navigation from './shell/Navigation.svelte'
	// import '@fontsource/alef';
  import { onDestroy} from 'svelte'
  import { LandingPageStore } from './store/landingPage.store'

  // import { ShellStore } from './store/shell.store'
  // const { menuOpen } = ShellStore
  
  const unSub = LandingPageStore.subscribe((data) => {
    console.log({data})
    const bodyEl = document.querySelector('body')
    console.log(data.backgroundImage)
    bodyEl.style.backgroundImage = data.backgroundImage
    console.log(bodyEl.style.backgroundImage)
  })

  onDestroy(() => unSub())
</script>

<!-- class={`surface w-full min-w-[320px] max-w-[95vw] h-full p-5 m-0 rounded-xl drop-shadow-2xl transition-all sm:px-15 sm:py-10 md:max-h-[90vh] lg:max-w-[900px] lg:px-15`} -->
<main>
  <slot />
  <!-- <Navigation {ShellStore} />

  {#if !$menuOpen}
	  <slot />
  {/if} -->
</main>
