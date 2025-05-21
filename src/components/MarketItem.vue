<template>
  <div class="market-item">
    <div class="item-image">
      <img :src="item.image" :alt="item.name">
    </div>
    <div class="item-content">
      <h3>{{ item.name }}</h3>
      <div class="disc"  @mouseenter="showDescription = true" @mouseleave="showDescription = false">
        <h5 class="ViewDetails">View details</h5>
        <h5 class="price">{{ item.price }}</h5>
      </div>
      <button @click="redirectToWhatsApp" class="add-to-cart">
        <svg xmlns="http://www.w3.org/2000/svg" height="20" viewBox="0 0 448 512" fill="white" style="margin-right: 0.5rem;">
    <path d="M380.9 97.1C339.4 55.6 283.2 32 224 32 100.3 32 .1 132.3 0 256c0 45 12 89.2 34.9 128.2L0 480l99.8-33.3C139 499.8 181 512 224 512h.1c123.7 0 224-100.3 224-224 .1-59.2-23.5-115.4-67.2-158.9zM224 472c-38.8 0-76.2-11.3-108.4-32.6l-7.7-5-59.2 19.8 19.8-59.2-5-7.7C61.3 355.2 48 308.8 48 256 48.1 150 118 80 224 80c54.6 0 106 21.3 144.8 60.2S429 201.4 429 256c0 106-69.9 216-205 216zm121.1-138.1c-6.6-3.3-39.1-19.3-45.2-21.5-6.1-2.2-10.5-3.3-15 3.3s-17.2 21.5-21.1 25.9c-3.9 4.4-7.7 5-14.3 1.7s-27.9-10.3-53.1-32.9c-19.6-17.5-32.9-39.1-36.7-45.7s-.4-10.2 2.9-13.5c3-3 6.6-7.7 9.9-11.6s4.4-6.6 6.6-11s1.1-8.3-.6-11.6c-1.7-3.3-15-36.1-20.6-49.4-5.4-12.9-11-11.2-15.3-11.4-3.9-.2-8.3-.2-12.6-.2s-11.6 1.7-17.7 8.3c-6.1 6.6-23.2 22.7-23.2 55.2 0 32.5 23.8 63.9 27.1 68.3 3.3 4.4 47 71.7 113.9 100.5 15.9 6.9 28.3 11 37.9 14.1 15.9 5 30.4 4.3 41.9 2.6 12.8-1.9 39.1-16 44.6-31.4 5.5-15.4 5.5-28.6 3.8-31.4-1.6-2.9-6-4.6-12.6-7.9z"/>
  </svg> Chat on WhatsApp
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

const showDescription = ref(false);

function redirectToWhatsApp() {
  const message = `Hello, I'm interested in the "${props.item.name}" and I'm interested in buying it. Could you kindly share the price and availability?`;
  const phone = '233541754037'; // Replace with your WhatsApp number
  const encodedMessage = encodeURIComponent(message);
  const whatsappUrl = `https://wa.me/${phone}?text=${encodedMessage}`;
  window.open(whatsappUrl, '_blank');
}
</script>

<style scoped>
.market-item {
  position: relative;
  background: white;
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  width: 100%;
}

.market-item:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 15px rgba(0, 0, 0, 0.2);
}

.item-image img {
  width: 100%;
  height: 300px;
  object-fit: cover;
}

.item-content {
  padding: 1.5rem;
  /* text-align: center; */
}

.disc {
  display: flex;
  /* justify-content: center; */
  align-items: center;
  gap: 2rem;
  padding: 0.5rem;
  border-radius: 8px;
  transition: background 0.3s ease;
  margin: 0px;
}

.price {
  font-size: 0.rem;
  color:  #000;
  font-weight: 200;
}

.ViewDetails {
  border: 1px solid #ffc107;
  border-radius: 6px;
  padding: 0.5rem;
}

.add-to-cart {
  display: flex;
  align-items: center;
  justify-content: center;
  background: #09a648;
  color: #fff;
  border: none;
  padding: 0.75rem 1.5rem;
  border-radius: 25px;
  cursor: pointer;
  transition: background 0.3s ease;
  margin-top: 1rem;
}

.add-to-cart:hover {
  background: #ffc107;
  color: #000;
}

.item-description {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.9);
  color: white;
  padding: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  pointer-events: none;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
