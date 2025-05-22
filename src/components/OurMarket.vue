<template>
    <section class="our-market">
    <h2 class="section-title">Our Services</h2>
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
  
  const marketItems = ref([
    {
      id: 1,
      name: "300W Monocrystalline Solar Panel",
      price: "Cantact me for the price",
      image: "https://solarvet.co.ke/wp-content/uploads/2022/06/300W-Monocrystalline-Solar-Panel.jpg",
      description: "High-efficiency monocrystalline solar panel."
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
      image: "https://5.imimg.com/data5/SELLER/Default/2024/6/424958294/IP/SL/SF/7356136/domestic-solar-water-heaters.jpg",
      description: "Eco-friendly solar water heating system for homes."
    },
    {
      id: 7,
      name: "Solar LED Street Light",
      price: "Cantact me for the price",
      image: "https://img5217.weyesimg.com/uploads/www.litelsolar.com/images/15650005128419.png",
      description: "Energy-efficient solar-powered street light."
    },
    {
      id: 8,
      name: "Portable Solar Generator",
      price: "Cantact me for the price",
      image: "https://i.ebayimg.com/images/g/xbgAAOSw4TdgrBT6/s-l1600.webp",
      description: "Compact solar generator for camping and emergencies."
    },
    {
      id: 9,
      name: "Solar Pool Heater",
      price: "Cantact me for the price",
      image: "https://m.media-amazon.com/images/I/81e3JMwNS8L._AC_SL1500_.jpg",
      description: "Solar-powered pool heating system."
    },
    {
      id: 10,
      name: "Solar-Powered CCTV Camera",
      price: "Cantact me for the price",
      image: "https://i.ebayimg.com/images/g/Tk8AAOSwk3lffgwu/s-l1600.webp",
      description: "Wireless solar security camera with night vision."
    },
    {
      id: 11,
      name: "Solar-Powered Fan",
      price: "Cantact me for the price",
      image: "https://dn5z2jafg7hv0.cloudfront.net/blog/wp-content/uploads/2022/08/14160153/Solar-Powered-Fan.jpg",
      description: "Portable solar fan for outdoor use."
    },
    {
      id: 12,
      name: "Solar-Powered Water Pump",
      price: "Cantact me for the price",
      image: "https://static.wixstatic.com/media/b7b329_2a51aecc989f4e3285a6ad54ebb3cdeb~mv2.jpg/v1/fill/w_568,h_342,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/b7b329_2a51aecc989f4e3285a6ad54ebb3cdeb~mv2.jpg",
      description: "Efficient solar water pump for irrigation."
    },
    {
      id: 13,
      name: "Solar-Powered Backpack",
      price: "Cantact me for the price",
      image: "https://www.chigwellsatellite.co.uk/cdn/shop/products/Beam_900x.jpg?v=1615032607",
      description: "Backpack with built-in solar panels for charging devices."
    },
    {
      id: 14,
      name: "Solar-Powered Lantern",
      price: "Cantact me for the price",
      image: "https://www.ecodirect.com/v/vspfiles/photos/SOLARLAND-USA-BSS-00318-2.jpg?v-cache=1659436146",
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
      image: "https://www.loomsolar.com/cdn/shop/articles/solar_panel_for_ac_820cb20e-9f5e-452f-8cee-ab828d354e52_1200x.jpg?v=1707712570",
      description: "Energy-efficient solar AC unit for homes."
    },
    {
      id: 17,
      name: "Solar-Powered Fence Charger",
      price: "Cantact me for the price",
      image: "https://m.media-amazon.com/images/I/71gZ7e7ZqYL.jpg",
      description: "Solar-powered electric fence energizer."
    },
    {
      id: 18,
      name: "Solar-Powered Bug Zapper",
      price: "Cantact me for the price",
      image: "https://d3e54emdgoy1fq.cloudfront.net/uploads/product/image/377334/large_fdc4f-Other-Brands-LVC-51752-All-Patio-Garden-16-5-Solar-Power-LED-UV-Light-Mosquito-Bug-Zapper-Garden-Stake-with-2-LEDs.jpg",
      description: "Eco-friendly solar insect zapper."
    },
    {
      id: 19,
      name: "Solar-Powered Watch",
      price: "Cantact me for the price",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZF3vdoAh2jKYSoYhGObb8QwUwFWCQKDH4dA&s",
      description: "Potable alarm switch."
    },
    {
      id: 20,
      name: "Fire alarm system",
      price: "Cantact me for the price",
      image: "https://www.securitastechnology.com/sites/securitastechnology.com/files/media/2021-11/Closed-up%20of%20Fire%20alarm%20press%20machine%20%281%29.jpg",
      description: "Portable solar Bluetooth speaker for outdoor use."
    },
    {
      id: 20,
      name: "Solar-Powered Bluetooth Speaker",
      price: "Cantact me for the price",
      image: "https://montanamallzw.com/wp-content/uploads/2020/11/whqil4qdrtglzxceizzb.jpg",
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
  background-color: rgb(231, 240, 240);
  }
  
  .market-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2rem;
    max-width: 1200px;
    margin: 0 auto;
  }
  .section-title {
  text-align: center;
  font-size: 1.8rem;
  margin-bottom: 1.5rem;
  color: #1e293b;
  position: relative;
  padding-bottom: 0.8rem;
}

.section-title::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 80px;
  height: 3px;
  background: #f59e0b;
  border-radius: 2px;
}
  </style>