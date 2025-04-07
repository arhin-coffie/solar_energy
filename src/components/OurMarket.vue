<template>
    <section class="our-market">
      <h2>Our Solar Market</h2>
      <div class="market-grid">
        <MarketItem 
          v-for="item in marketItems" 
          :key="item.id" 
          :item="item" 
          @add-to-cart="addToCart"
        />
        <CartPreview :cartItems=cartItems />
      </div>
    </section>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import MarketItem from './MarketItem.vue';
  import CartPreview from './CartPreview.vue';
  
  const marketItems = ref([
    {
      id: 1,
      name: "300W Monocrystalline Solar Panel",
      price: 250,
      image: "https://images.unsplash.com/photo-1613665813446-82a78c468a1d",
      description: "High-efficiency monocrystalline solar panel with 25-year warranty."
    },
    {
      id: 2,
      name: "Solar Inverter 5kW",
      price: 1200,
      image: "https://images.unsplash.com/photo-1624397640148-949b1732bb0a",
      description: "Advanced hybrid inverter for residential solar systems."
    },
    {
      id: 3,
      name: "Solar Battery 10kWh",
      price: 5000,
      image: "https://images.unsplash.com/photo-1624397640148-949b1732bb0a",
      description: "Lithium-ion battery for energy storage with 10-year lifespan."
    },
    {
      id: 4,
      name: "Solar Mounting Kit",
      price: 350,
      image: "https://images.unsplash.com/photo-1613665813446-82a78c468a1d",
      description: "Durable mounting system for rooftop solar panels."
    },
    {
      id: 5,
      name: "Solar Charge Controller 40A",
      price: 150,
      image: "https://images.unsplash.com/photo-1624397640148-949b1732bb0a",
      description: "MPPT charge controller for efficient energy management."
    },
    {
      id: 6,
      name: "Solar Water Heater",
      price: 1800,
      image: "https://images.unsplash.com/photo-1613665813446-82a78c468a1d",
      description: "Eco-friendly solar water heating system for homes."
    },
    {
      id: 7,
      name: "Solar LED Street Light",
      price: 200,
      image: "https://images.unsplash.com/photo-1624397640148-949b1732bb0a",
      description: "Energy-efficient solar-powered street light."
    },
    {
      id: 8,
      name: "Portable Solar Generator",
      price: 800,
      image: "https://images.unsplash.com/photo-1613665813446-82a78c468a1d",
      description: "Compact solar generator for camping and emergencies."
    },
    {
      id: 9,
      name: "Solar Pool Heater",
      price: 2200,
      image: "https://images.unsplash.com/photo-1624397640148-949b1732bb0a",
      description: "Solar-powered pool heating system."
    },
    {
      id: 10,
      name: "Solar-Powered CCTV Camera",
      price: 300,
      image: "https://images.unsplash.com/photo-1613665813446-82a78c468a1d",
      description: "Wireless solar security camera with night vision."
    },
    {
      id: 11,
      name: "Solar-Powered Fan",
      price: 80,
      image: "https://images.unsplash.com/photo-1624397640148-949b1732bb0a",
      description: "Portable solar fan for outdoor use."
    },
    {
      id: 12,
      name: "Solar-Powered Water Pump",
      price: 450,
      image: "https://images.unsplash.com/photo-1613665813446-82a78c468a1d",
      description: "Efficient solar water pump for irrigation."
    },
    {
      id: 13,
      name: "Solar-Powered Backpack",
      price: 120,
      image: "https://images.unsplash.com/photo-1624397640148-949b1732bb0a",
      description: "Backpack with built-in solar panels for charging devices."
    },
    {
      id: 14,
      name: "Solar-Powered Lantern",
      price: 50,
      image: "https://images.unsplash.com/photo-1613665813446-82a78c468a1d",
      description: "Portable solar lantern for outdoor activities."
    },
    {
      id: 15,
      name: "Solar-Powered Car Charger",
      price: 100,
      image: "https://images.unsplash.com/photo-1624397640148-949b1732bb0a",
      description: "Solar charger for electric vehicles."
    },
    {
      id: 16,
      name: "Solar-Powered Air Conditioner",
      price: 3000,
      image: "https://images.unsplash.com/photo-1613665813446-82a78c468a1d",
      description: "Energy-efficient solar AC unit for homes."
    },
    {
      id: 17,
      name: "Solar-Powered Fence Charger",
      price: 200,
      image: "https://images.unsplash.com/photo-1624397640148-949b1732bb0a",
      description: "Solar-powered electric fence energizer."
    },
    {
      id: 18,
      name: "Solar-Powered Bug Zapper",
      price: 60,
      image: "https://images.unsplash.com/photo-1613665813446-82a78c468a1d",
      description: "Eco-friendly solar insect zapper."
    },
    {
      id: 19,
      name: "Solar-Powered Watch",
      price: 150,
      image: "https://images.unsplash.com/photo-1624397640148-949b1732bb0a",
      description: "Stylish solar-powered wristwatch."
    },
    {
      id: 20,
      name: "Solar-Powered Bluetooth Speaker",
      price: 90,
      image: "https://images.unsplash.com/photo-1613665813446-82a78c468a1d",
      description: "Portable solar Bluetooth speaker for outdoor use."
    }
  ]);
  const cartItems =ref([]);
// const emit = defineEmits(['add-to-cart']);
const addToCart = (item) => {
    const checkItem = cartItems.value.find(currentItem => currentItem.id === item.id)
    if(!checkItem){
     cartItems.value.push(item)
    }else{
        alert("item is alredy added")
    }
    return run(cartItems.value)
};
console.log('data', cartItems.value)
function run(arr){
    console.log("data", arr)
}
  </script>
  
  <style scoped>
  .our-market {
    padding: 4rem 2rem;
    background: var(--light);
  }
  
  .market-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2rem;
    max-width: 1200px;
    margin: 0 auto;
  }
  </style>