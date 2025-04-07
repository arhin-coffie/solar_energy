<template>
    <HeroSection />
    <WhySolar />
    <HowItWorks />
    <SolarCalculator />
    <OurMarket @add-to-cart="handleAddToCart" />
    <ProcessTimeline />
    <Testimonials />
    <FAQ />
  </template>
  
  <script setup>
  import HeroSection from '../components/HeroSection.vue';
  import WhySolar from '../components/WhySolar.vue';
  import HowItWorks from '../components/HowItWorks.vue';
  import SolarCalculator from '../components/SolarCalculator.vue';
  import ProcessTimeline from '../components/ProcessTimeLine.vue';
import Testimonials from '../components/Testimonials.vue';
import FAQ from '../components/FAQ.vue';
import OurMarket from '@/components/OurMarket.vue';

const emit = defineEmits(['add-to-cart']);
const handleAddToCart = (item) => {
  emit('add-to-cart', item);
};
  </script>
  <style scoped>
  main {
    display: flex;
    flex-direction: column;
    gap: 4rem;
  }
  </style>