<script lang="ts">
	import IconCard from './IconCard.svelte';

	export let iconCards: App.IconCard[];
</script>

<ul>
	{#each iconCards as ic}
		<li class="list-none">
			<IconCard title={ic.title} tagline={ic.tagline} />
		</li>
	{/each}
</ul>
