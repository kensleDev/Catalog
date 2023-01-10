<script lang="ts">
  import MainLayout from "./LandingPageLayout.svelte"
  import IconCardList from "./ui/IconCardList.svelte"
	import { onMount } from "svelte";

	import {fade, fly} from 'svelte/transition'

	let contentReady = false

  const iconCards: App.IconCard[] = [
		{
			title: 'Promote',
			tagline: 'Promote your business'
		},
		{
			title: 'Funnel traffic',
			tagline: 'Create a funnel to your products & social media'
		},
		{
			title: 'Get noticed',
			tagline: 'Eye catching designs'
		}
	];

	onMount(() => {
		contentReady = true
	})
</script>

<MainLayout>
	{#if contentReady}
    <h1 
		  class="text-5xl lg:text-6xl mb-5" 
			in:fly={{ x: -200, delay: 200 }}
			out:fly={{ x: -200, delay: 0 }}
	  >A Company</h1>

		<h2 
		  class="text-1xl mb-15" 
		  in:fly={{ x: -200, delay: 300 }}
			out:fly={{ x: -200, delay: 30 }}
		>A Catchy Tagline</h2>

		<p 
		  class="max-w-80 text-xs mb-30" 
			in:fly={{ x: -200, delay: 500 }}
			out:fly={{ x: -200, delay: 60 }}

		>A description about your company and what this website is for and what yo do. Make it interesting! </p>

    <div 
		  in:fly={{ y: 100, delay: 700 }}
			out:fly={{ y: 100, delay: 90 }}
		>
		<IconCardList {iconCards}/>
		</div>

		<button 
		  class="mt-20 bg-transparent text-secondary px-4 py-3 rounded-3xl border-secondary"
			in:fly={{ y: 100, delay: 750 }}
			out:fly={{ y: 100, delay: 120 }}
		>Sign up to the newsletter 📰</button>
	{/if}
</MainLayout>


