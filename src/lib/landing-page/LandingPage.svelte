<script lang="ts">
  import MainLayout from "./LandingPageLayout.svelte"
  import IconCardList from "./ui/IconCardList.svelte"

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
</script>

<MainLayout>
  <h1>Landing page</h1>
  <IconCardList {iconCards} />
</MainLayout>


