<template>
  <NavBar />
  <router-view v-slot="{ Component }">
      <component :is="Component" />
  </router-view>
  <FooterSection />
</template>
<script setup>
import NavBar from './components/NavBar.vue';
import FooterSection from './components/FooterSection.vue';

</script>

<style>
:root {
  --primary: #FFD700;
  --secondary: #00796B;
  --dark: #2C3E50;
  --light: #F8F9FA;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Poppins', sans-serif;
}

body {
  background-color: var(--light);
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