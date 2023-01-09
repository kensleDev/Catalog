<script>
    import { Hamburger } from 'svelte-hamburgers';
    import {createEventDispatcher} from 'svelte'

    let open;
    const dispatch = createEventDispatcher()

    $: {
      dispatch('menuOpen', open)
    }
</script>

<Hamburger bind:open />


