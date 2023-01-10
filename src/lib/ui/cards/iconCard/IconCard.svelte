<script lang="ts">
	import Icon from "../../icons/icon.svelte"
	export let iconCard: IconCard
</script>

<div class="icon-card flex flex-col items-center">
	<Icon name={iconCard.icon} margin=1.1 size=2.5 />
	<h3 class="text-center text-xs mb-2 shadow-2xl">{iconCard.title}</h3>
	<p class="text-center text-xs shadow-2xl">{iconCard.tagline}</p>
</div>
