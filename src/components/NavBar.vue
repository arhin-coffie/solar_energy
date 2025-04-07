<template>
    <nav class="navbar">
      <div class="container">
        <router-link to="/" class="logo">
          <i class="fas fa-solar-panel"></i>
          SAM'S <span>POWER CONTROL ENGINEERING WORKS</span>
        </router-link>
        <div class="nav-links">
          <a href="#main-content" class="skip-link">Skip to main content</a>
          <router-link to="/our-services">Our Services</router-link>
          <router-link to="/why-solar">Why Solar</router-link>
          <router-link to="/how-it-works">Process</router-link>
          <router-link to="/calculator">Calculator</router-link>
          <router-link to="/calculator">Team</router-link>
          <router-link to="/get-started" class="cta-nav">Get Started</router-link>
          <CartPreview  />

        </div>
      </div>
    </nav>
  </template>
  <script setup>
  import { ref } from 'vue';
  import CartPreview from './CartPreview.vue';

  const cartItems = ref([]);
  const handleAddToCart = (item) => {
    const existingItem = cartItems.value.find((cartItem) => cartItem.id === item.id);
    if (existingItem) {
      existingItem.quantity += 1;
      existingItem.price += item.price;
      alert('new price added')
    } else {
      cartItems.value.push({ ...item, quantity: 1 });
    }
  };
  </script>
  <style scoped>
  .navbar {
    background: white;
    box-shadow: 0 2px 15px rgba(0,0,0,0.1);
    padding: 1rem 4rem;
    position: sticky;
    top: 0;
    z-index: 1000;
    
  }
  
  .container {
    /* max-width: 1200px; */
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    white-space: nowrap;

}
  
  .logo {
    font-size: 1.5rem;
    font-weight: 700;
    color: var(--dark);
    text-decoration: none;
  }
  
  .logo span {
    color: var(--secondary);
  }
  
  .logo i {
    color: var(--primary);
    margin-right: 0.5rem;
  }
  
  .nav-links {
    display: flex;
    gap: 2rem;
    align-items: center;
  }
  
  .nav-links a {
    color: var(--dark);
    text-decoration: none;
    font-weight: 500;
    transition: color 0.3s ease;
  }
  
  .nav-links a:hover {
    color: var(--secondary);
  }
  
  .cta-nav {
    background: var(--primary);
    padding: 0.5rem 1.5rem;
    border-radius: 25px;
    color: var(--dark) !important;
  }
  .skip-link {
  position: absolute;
  left: -999px;
  top: auto;
  width: 1px;
  height: 1px;
  overflow: hidden;
  color: red;
}

.skip-link:focus {
  position: static;
  width: auto;
  height: auto;
}
  </style>