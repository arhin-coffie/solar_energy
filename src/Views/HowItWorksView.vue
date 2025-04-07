<template>
    <div class="how-it-works-view">
      <HowItWorks />
      <ProcessTimeline />
      <FAQ />   
     </div>
  </template>
  
  <script setup>
  import HowItWorks from '../components/HowItWorks.vue';
  import ProcessTimeline from '../components/ProcessTimeLine.vue';
import FAQ from '../components/FAQ.vue';
  </script>
  
  <style scoped>
  /* View-specific styling */
  .how-it-works-view {
    padding: 2rem;
  }
  </style>