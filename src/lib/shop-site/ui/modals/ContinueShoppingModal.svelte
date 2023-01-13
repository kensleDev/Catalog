<script>
  import { DialogOverlay, DialogContent } from "svelte-accessible-dialog";
  import { Link } from "svelte-routing";

  export let isOpen;
  export let close;
</script>

<DialogOverlay {isOpen} onDismiss={close}>
  <DialogContent aria-label="Definition">
    <button on:click={close}>Continue Shopping</button>
    <Link to="/shop/cart">Go to basket</Link>
  </DialogContent>
</DialogOverlay>

<style>
  button:focus {
    outline: 5px auto #4d90fe;
    outline: 5px auto -webkit-focus-ring-color;
  }
</style>
