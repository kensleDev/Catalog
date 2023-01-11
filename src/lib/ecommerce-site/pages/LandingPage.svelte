<script lang="ts">
  import MainLayout from "../LandingPageLayout.svelte"
  import { onMount } from "svelte";

	import { LandingPageStore } from '../store/landingPage.store'

	let contentReady = false
  // export let location

	onMount(() => { contentReady = true })
</script>


<MainLayout>
	{#if contentReady}
    <h1>{$LandingPageStore.title}</h1>
  {/if}
</MainLayout>