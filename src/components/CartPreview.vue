<template>
    <div class="cart-preview" @mouseenter="isHovered = true" @mouseleave="isHovered = false">
      <div class="cart-icon">
        <i class="fas fa-shopping-cart"></i>
        <span class="cart-count">{{ cartItems?.length }}</span>
      </div>
      <transition name="slide">
        <div v-if="isHovered" class="cart-details">
          <h3>Your Cart</h3>
          <div v-if="cartItems?.length > 0">
            <div v-for="item in cartItems" :key="item.id" class="cart-item">
              <img :src="item.image" :alt="item.name">
              <div class="item-info">
                <p>{{ item.name }}</p>
                <p class="price">${{ item.price }}</p>
              </div>
            </div>
            <div class="total">
              <p>Total: ${{ totalPrice }}</p>
            </div>
          </div>
          <div v-else class="empty-cart">
            <p>Your cart is empty</p>
          </div>
        </div>
      </transition>
    </div>
  </template>
  
  <script setup>
  import { ref, computed } from 'vue';
  
  const props = defineProps({
  cartItems: {
    type: Array,
    required: true,
    default: () => [] // Default to an empty array if not provided
  }
});
  
  const isHovered = ref(false);
  
  const totalPrice = computed(() => {
    return props.cartItems.reduce((total, item) => total + item.price, 0);
  });
  console.log('result', totalPrice)
  </script>
  
  <style scoped>
  .cart-preview {
    position: relative;
    /* top: 20px; */
    /* right: 20px; */
    z-index: 1000;
  }
  
  .cart-icon {
    position: relative;
    background: var(--primary);
    padding: 1rem;
    border-radius: 50%;
    cursor: pointer;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }
  
  .cart-icon i {
    font-size: 1.5rem;
    color: var(--dark);
  }
  
  .cart-count {
    position: absolute;
    top: -5px;
    right: -5px;
    background: var(--secondary);
    color: white;
    padding: 0.25rem 0.5rem;
    border-radius: 50%;
    font-size: 0.8rem;
  }
  
  .cart-details {
    position: absolute;
    top: 60px;
    right: 0;
    width: 300px;
    background: white;
    border-radius: 10px;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
    padding: 1rem;
  }
  
  .cart-item {
    display: flex;
    align-items: center;
    gap: 1rem;
    margin-bottom: 1rem;
  }
  
  .cart-item img {
    width: 50px;
    height: 50px;
    border-radius: 8px;
    object-fit: cover;
  }
  
  .total {
    border-top: 1px solid #eee;
    padding-top: 1rem;
    margin-top: 1rem;
    font-weight: 600;
  }
  
  .slide-enter-active,
  .slide-leave-active {
    transition: all 0.3s ease;
  }
  
  .slide-enter-from,
  .slide-leave-to {
    opacity: 0;
    transform: translateY(-10px);
  }
  </style>