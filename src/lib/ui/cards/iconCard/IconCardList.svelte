<script lang="ts">
	import IconCard from './IconCard.svelte';

	export let iconCards: App.IconCard[];
</script>

<ul class="grid grid-cols-1 max-w-40 sm:grid-cols-3 sm:max-w-80 md:max-w-100  md:max-w-100 gap-10 transition-all">
	{#each iconCards as ic}
		<li class="list-none">
			<IconCard iconCard={ic}/>
		</li>
	{/each}
</ul>