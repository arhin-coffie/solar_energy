<template>
    <div class="market-item">
      <div class="item-image">
        <img :src="item.image" :alt="item.name">
      </div>
      <div class="item-content">
        <h3>{{ item.name }}</h3>
        <div 
          class="disc" 
          @mouseenter="showDescription = true" 
          @mouseleave="showDescription = false"
        >
          <h5 class="ViewDetails">View details</h5>
          <p class="price">${{ item.price }}</p>
        </div>
        <button @click="addToCart(item)" class="add-to-cart">
          <i class="fas fa-cart-plus"></i> Add to Cart
        </button>
      </div>
      <transition name="fade">
        <div v-if="showDescription" class="item-description">
          <p>{{ item.description }}</p>
        </div>
      </transition>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  
  const props = defineProps({
    item: {
      type: Object,
      required: true
    }
  });
  
  const emit = defineEmits(['add-to-cart']);
  
  const showDescription = ref(false);
  
  const addToCart = (item) => {
    emit('add-to-cart', item);
  };
  </script>
  
  <style scoped>
  .market-item {
    position: relative;
    background: white;
    border-radius: 15px;
    overflow: hidden;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    width: 100%; /* Ensure full width */
  }
  
  .market-item:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 15px rgba(0, 0, 0, 0.2);
  }
  
  .item-image img {
    width: 100%;
    height: 200px;
    object-fit: cover;
  }
  
  .item-content {
    padding: 1.5rem;
    text-align: center;
  }
  
  .disc {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 2rem;
    cursor: pointer;
    padding: 0.5rem;
    border-radius: 8px;
    transition: background 0.3s ease;
  }
  
  .disc:hover {
    background: rgba(0, 0, 0, 0.05);
  }
  
  .price {
    font-size: 1.25rem;
    color: var(--primary);
    font-weight: 600;
    margin: 0.5rem 0;
  }
  
  .add-to-cart {
    background: var(--primary);
    color: var(--dark);
    border: none;
    padding: 0.75rem 1.5rem;
    border-radius: 25px;
    cursor: pointer;
    transition: background 0.3s ease;
  }
  
  .add-to-cart:hover {
    background: #ffc107;
  }
  
  .item-description {
    position: absolute;
    top: 0;
    left: 0;
    right: 0; /* Ensure 0% right */
    bottom: 0;
    background: rgba(0, 0, 0, 0.9);
    color: white;
    padding: 1.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    pointer-events: none; /* Ensure the description doesn't interfere with hover */
  }
  
  .fade-enter-active,
  .fade-leave-active {
    transition: opacity 0.3s ease;
  }
  
  .fade-enter-from,
  .fade-leave-to {
    opacity: 0;
  }
  .ViewDetails{
   border: 1px solid #ffc107;
   border-radius: 6px;
   padding: 0.5rem;
  }
  </style>