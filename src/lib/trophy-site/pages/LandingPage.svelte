<script lang="ts">
  import MainLayout from "../LandingPageLayout.svelte"
  import IconCardList from "@ui/cards/iconCard/IconCardList.svelte"
	import { onMount } from "svelte";

	import {fade, fly} from 'svelte/transition'

	let contentReady = false

  const iconCards: App.IconCard[] = [
		{
			title: 'Promote',
			tagline: 'Promote your business',
			icon: 'bullhorn'
		},
		{
			title: 'Funnel traffic',
			tagline: 'Create a funnel to your products & social media',
			icon: 'traffic'
		},
		{
			title: 'Get noticed',
			tagline: 'Eye catching designs',
			icon: 'bomb'
		}
	];

	onMount(() => {
		contentReady = true
	})
</script>


<MainLayout>

	{#if contentReady}
    <h1 
		  class="text-5xl lg:text-6xl mb-5 shadow-2xl transition-all" 
			in:fly={{ x: -200, delay: 200 }}
			out:fly={{ x: -200, delay: 0 }}
	  >A Company</h1>

		<h2 
		  class="text-1xl mb-15 shadow-2xl transition-all" 
		  in:fly={{ x: -200, delay: 300 }}
			out:fly={{ x: -200, delay: 30 }}
		>A Catchy Tagline</h2>

		<p 
		  class="max-w-80 text-xs mb-10 md:mb-30 shadow-2xl transition-all" 
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

		<img 
			src="https://media.discordapp.net/attachments/1006318431022358572/1062415572803006554/Juju_modern_trophy.png?width=441&height=671"
			class="w-50 absolute top-80 right--15 sm:top-20 sm:w-75 md:w-100 md:right--20 md:top-20 md:block transition-all"
			in:fly={{ x: 50, delay: 950 }}
			out:fly={{ x: 100, delay: 120 }}
		>
	{/if}

</MainLayout>