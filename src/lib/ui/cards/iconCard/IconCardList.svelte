<script lang="ts">
	import IconCard from './IconCard.svelte';

	export let iconCards: App.IconCard[];
</script>

<ul class="grid grid-cols-1 max-w-40 md:max-w-70 md:grid-cols-3 md:max-w-100 gap-10">
	{#each iconCards as ic}
		<li class="list-none">
			<IconCard iconCard={ic}/>
		</li>
	{/each}
</ul>