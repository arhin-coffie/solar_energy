<template>
    <section class="our-market">
      <h2>Our Solar Market</h2>
      <div class="market-grid">
        <MarketItem 
          v-for="item in marketItems" 
          :key="item.id" 
          :item="item" 
          @add-to-cart="redirectToWhatsApp"
        />
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
      price: "Cantact me for the price",
      image: "https://images.unsplash.com/photo-1613665813446-82a78c468a1d",
      description: "High-efficiency monocrystalline solar panel with 25-year warranty."
    },
    {
      id: 2,
      name: "Solar Inverter 5kW",
      price: "Cantact me for the price",
      image: "https://www.qoltec.com/files/en/product/gallery/main-image-635149b0591ba.jpg",
      description: "Qoltec Modular Hybrid Solar Inverter Off-Grid 5kW | 80A | 48V | MPPT | Sinus "
    },
    {
      id: 3,
      name: "Solar Battery 10kWh",
      price: "Cantact me for the price",
      image: "https://optimasolarsystems.com/wp-content/uploads/2024/12/Lithium-Ion-Battery-Storage-in-Ghana-1.jpg",
      description: "10kW Solar System With 10kWh Lithium-Ion Battery Storage: Discover sustainable energy solutions with a 10kW solar system and efficient 10kWh lithium-ion battery storage for homes and businesses."
    },
    {
      id: 4,
      name: "Solar Mounting Kit",
      price: "Cantact me for the price",
      image: "https://solarsupply.co.za/wp-content/uploads/2020/11/Mounting-Flat-per-panel.png",
      description: "Flat roof solar mounting system a simple and high quality, low cost, support structures for the installation of photovoltaic modules on flat roofs."
    },
    {
      id: 5,
      name: "Solar Charge Controller 40A",
      price: "Cantact me for the price",
      image: "https://i.ebayimg.com/images/g/pTQAAeSw6rVoELlu/s-l1600.webp",
      description: "MPPT Solar Charge Controller 12V/ 24V Solar Panel Charge Controller, 99% Tracking Efficiency40A MPPT has advanced maximum power point tracking technology. It continuously tracks the maximum power point of the array to obtain maximum power to charge the battery."
    },
    {
      id: 6,
      name: "Solar Water Heater",
      price: "Cantact me for the price",
      image: "https://images.unsplash.com/photo-1613665813446-82a78c468a1d",
      description: "Eco-friendly solar water heating system for homes."
    },
    {
      id: 7,
      name: "Solar LED Street Light",
      price: "Cantact me for the price",
      image: "https://images.unsplash.com/photo-1624397640148-949b1732bb0a",
      description: "Energy-efficient solar-powered street light."
    },
    {
      id: 8,
      name: "Portable Solar Generator",
      price: "Cantact me for the price",
      image: "https://images.unsplash.com/photo-1613665813446-82a78c468a1d",
      description: "Compact solar generator for camping and emergencies."
    },
    {
      id: 9,
      name: "Solar Pool Heater",
      price: "Cantact me for the price",
      image: "https://images.unsplash.com/photo-1624397640148-949b1732bb0a",
      description: "Solar-powered pool heating system."
    },
    {
      id: 10,
      name: "Solar-Powered CCTV Camera",
      price: "Cantact me for the price",
      image: "https://images.unsplash.com/photo-1613665813446-82a78c468a1d",
      description: "Wireless solar security camera with night vision."
    },
    {
      id: 11,
      name: "Solar-Powered Fan",
      price: "Cantact me for the price",
      image: "https://images.unsplash.com/photo-1624397640148-949b1732bb0a",
      description: "Portable solar fan for outdoor use."
    },
    {
      id: 12,
      name: "Solar-Powered Water Pump",
      price: "Cantact me for the price",
      image: "https://images.unsplash.com/photo-1613665813446-82a78c468a1d",
      description: "Efficient solar water pump for irrigation."
    },
    {
      id: 13,
      name: "Solar-Powered Backpack",
      price: "Cantact me for the price",
      image: "https://images.unsplash.com/photo-1624397640148-949b1732bb0a",
      description: "Backpack with built-in solar panels for charging devices."
    },
    {
      id: 14,
      name: "Solar-Powered Lantern",
      price: "Cantact me for the price",
      image: "https://images.unsplash.com/photo-1613665813446-82a78c468a1d",
      description: "Portable solar lantern for outdoor activities."
    },
    {
      id: 15,
      name: "Solar-Powered Car Charger",
      price: "Cantact me for the price",
      image: "https://images.unsplash.com/photo-1624397640148-949b1732bb0a",
      description: "Solar charger for electric vehicles."
    },
    {
      id: 16,
      name: "Solar-Powered Air Conditioner",
      price: "Cantact me for the price",
      image: "https://images.unsplash.com/photo-1613665813446-82a78c468a1d",
      description: "Energy-efficient solar AC unit for homes."
    },
    {
      id: 17,
      name: "Solar-Powered Fence Charger",
      price: "Cantact me for the price",
      image: "https://images.unsplash.com/photo-1624397640148-949b1732bb0a",
      description: "Solar-powered electric fence energizer."
    },
    {
      id: 18,
      name: "Solar-Powered Bug Zapper",
      price: "Cantact me for the price",
      image: "https://images.unsplash.com/photo-1613665813446-82a78c468a1d",
      description: "Eco-friendly solar insect zapper."
    },
    {
      id: 19,
      name: "Solar-Powered Watch",
      price: "Cantact me for the price",
      image: "https://images.unsplash.com/photo-1624397640148-949b1732bb0a",
      description: "Stylish solar-powered wristwatch."
    },
    {
      id: 20,
      name: "Solar-Powered Bluetooth Speaker",
      price: "Cantact me for the price",
      image: "https://images.unsplash.com/photo-1613665813446-82a78c468a1d",
      description: "Portable solar Bluetooth speaker for outdoor use."
    },
    {
      id: 20,
      name: "Solar-Powered Bluetooth Speaker",
      price: "Cantact me for the price",
      image: "https://images.unsplash.com/photo-1613665813446-82a78c468a1d",
      description: "Portable solar Bluetooth speaker for outdoor use."
    }
  ]);
  const cartItems =ref([]);
// const emit = defineEmits(['add-to-cart']);
const redirectToWhatsApp = () => {
  window.location.href = 'https://wa.me/233248360435?text=Hello%20there!';
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