<script lang="ts">
  import Image from "svelte-image";
  export let pictureCard: any;
  console.log({ pictureCard });
</script>

<div class="icon-card flex flex-col items-center">
  <!-- <Icon name={iconCard.icon} margin=1.1 size=2.5 /> -->
  <Image
    src={pictureCard.image.src}
    alt={pictureCard.image.alt}
    width="80"
    height="80"
    class="w-[80px] h-[80px]"
  />
  <h3 class="text-center text-xs mb-2 shadow-2xl">{pictureCard.title}</h3>
  <p class="text-center text-xs shadow-2xl">{pictureCard.tagline}</p>
</div>
