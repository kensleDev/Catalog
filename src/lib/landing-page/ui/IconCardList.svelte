<script lang="ts">
	import IconCard from './IconCard.svelte';

	export let iconCards: App.IconCard[];
</script>

<ul class="grid grid-cols-1 max-w-70 md:grid-cols-3 md:max-w-140 gap-10">
	{#each iconCards as ic}
		<li class="list-none">
			<IconCard title={ic.title} tagline={ic.tagline} />
		</li>
	{/each}
</ul>
