<template>
    <div class="layout">
      <NavBar />
      <slot />
      <FooterSection />
    </div>
  </template>
  
  <script setup>
  import NavBar from '../components/NavBar.vue';
  import FooterSection from '../components/FooterSection.vue';
  </script>