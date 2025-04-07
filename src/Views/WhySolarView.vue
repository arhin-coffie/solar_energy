<template>
    <div class="why-solar-view">
      <WhySolar />
      <ProcessTimeline />
      <Testimonials />    
    </div>
  </template>
  
  <script setup>
  import WhySolar from '../components/WhySolar.vue';
  import ProcessTimeline from '../components/ProcessTimeLine.vue';
import Testimonials from '../components/Testimonials.vue';
  </script>
  
  <style scoped>
  /* View-specific styling if needed */
  .why-solar-view {
    max-width: 1200px;
    margin: 0 auto;
  }
  </style>