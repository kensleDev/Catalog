<script>
  import MainLayout from "../layouts/MainLayout.svelte";
  import { CartStore, getCartTotal, updateQuantity } from "../store/cart.store";
</script>

<MainLayout>
  <h1>Cart</h1>

  <div class="cart-list">
    {#each $CartStore.cart as item}
      {#if item.quantity > 0}
        <div class="cart-item">
          <img
            width="50"
            src={item.product.thumbnail}
            alt={item.product.title}
          />
          <div>
            {item.quantity}
            <button on:click={() => updateQuantity(item, 1)}>+</button>
            <button on:click={() => updateQuantity(item, -1)}>-</button>
          </div>
          <p>₹{item.product.price * item.quantity}</p>
        </div>
      {/if}
    {/each}
    <div class="total">
      <h4>Total: ₹ {getCartTotal()}</h4>
    </div>
  </div>
</MainLayout>
