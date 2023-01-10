<script lang="ts">
  import {onMount} from 'svelte'
  import Icons from './icons.json'

  export let name: string = "bomb"
  export let size: number = 2
  export let margin: number = 1

  let icon = Icons[name]

  onMount(() => {
    const svgEl = document.querySelector(`svg.${name}`)
    svgEl.style.fontSize = size + 'rem'
    svgEl.style.margin = margin + 'rem'
    console.log(svgEl.style.fontSize)
  })

</script>

{@html icon}
