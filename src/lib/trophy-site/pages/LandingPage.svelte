<script lang="ts">
  import MainLayout from "../LandingPageLayout.svelte"
  import IconCardList from "@ui/cards/iconCard/IconCardList.svelte"
	import { onMount } from "svelte";
	import { fade, fly } from 'svelte/transition'

	import { HomepageStore } from '../store/homepage.store'

	let contentReady = false

	onMount(() => { contentReady = true })
</script>


<MainLayout>

	{#if contentReady}
    <h1 
		  class="text-5xl lg:text-6xl mb-5 shadow-2xl transition-all" 
			in:fly={{ x: -200, delay: 200 }}
			out:fly={{ x: -200, delay: 0 }}
	  >{$HomepageStore.title}</h1>

		<h2 
		  class="text-1xl mb-15 shadow-2xl transition-all" 
		  in:fly={{ x: -200, delay: 300 }}
			out:fly={{ x: -200, delay: 30 }}
		>{$HomepageStore.tagline}</h2>

		<p 
		  class="max-w-80 text-xs mb-10 md:mb-30 shadow-2xl transition-all" 
			in:fly={{ x: -200, delay: 500 }}
			out:fly={{ x: -200, delay: 60 }}

		>{$HomepageStore.description}</p>

    <div 
		  in:fly={{ y: 100, delay: 700 }}
			out:fly={{ y: 100, delay: 90 }}
		>
			<IconCardList iconCards={$HomepageStore.iconCards}/>
		</div>

    <!-- TODO: sort component with icon -->
		<button 
		  class="mt-10 bg-transparent text-secondary px-4 py-3 rounded-3xl border-secondary"
			in:fly={{ y: 100, delay: 750 }}
			out:fly={{ y: 100, delay: 120 }}
		>{$HomepageStore.button.text} 📰</button>

		<img 
			src={$HomepageStore.image}
			class="w-50 absolute top-80 right--15 sm:top-20 sm:w-75 md:w-100 md:right--20 md:top-20 md:block transition-all"
			in:fly={{ x: 50, delay: 950 }}
			out:fly={{ x: 100, delay: 120 }}
		>
	{/if}

</MainLayout>