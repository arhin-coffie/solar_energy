<template>
    <div class="get-started-view">
      <Testimonials />
      <GetStartedForm />
    </div>
  </template>
  
  <script setup>
  import GetStartedForm from '../components/GetStartedForm.vue';
  import Testimonials from '../components/Testimonials.vue';
</script>
  
  <style scoped>
  .get-started-view {
    max-width: 800px;
    margin: 0 auto;
    padding: 2rem;
  }
  </style>