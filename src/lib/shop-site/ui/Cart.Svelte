<script lang="ts">
  import { CartStore, updatCartItemQuantity } from "../store/cart.store";
</script>

<div class="cart-list">
  {#each $CartStore.cart as item}
    {#if item.quantity > 0}
      <div class="cart-item">
        <img width="50" src={item.product.thumbnail} alt={item.product.title} />
        <div>
          {item.quantity}
          <button on:click={() => updatCartItemQuantity(item, 1)}>+</button>
          <button on:click={() => updatCartItemQuantity(item, -1)}>-</button>
        </div>
        <p>₹{item.product.price * item.quantity}</p>
      </div>
    {/if}
  {/each}
  <div class="total">
    <h4>Total: ₹ {$CartStore.total}</h4>
  </div>
</div>
