<template>
    <section class="timeline">
      <div class="timeline-container">
        <div v-for="(step, index) in steps" :key="index" class="timeline-item">
          <div class="timeline-marker" :class="{ active: activeStep >= index }">
            <i :class="step.icon"></i>
          </div>
          <div class="timeline-content" :class="{ active: activeStep >= index }">
            <h3>{{ step.title }}</h3>
            <p>{{ step.description }}</p>
          </div>
        </div>
      </div>
    </section>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue';
  
  const steps = ref([
    {
      title: "Free Consultation",
      description: "Personalized energy assessment",
      icon: "fas fa-comments"
    },
    // Add more steps...
  ]);
  
  const activeStep = ref(-1);
  
  onMounted(() => {
    animateTimeline();
  });
  
  const animateTimeline = () => {
    steps.value.forEach((_, i) => {
      setTimeout(() => {
        activeStep.value = i;
      }, i * 300);
    });
  };
  </script>
  
  <style scoped>
  .timeline {
    padding: 4rem 2rem;
    background: var(--light);
  }
  
  .timeline-container {
    max-width: 800px;
    margin: 0 auto;
    position: relative;
  }
  
  .timeline-item {
    display: flex;
    margin-bottom: 4rem;
  }
  
  .timeline-marker {
    width: 60px;
    height: 60px;
    border-radius: 50%;
    background: #ddd;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.5rem;
    transition: all 0.3s ease;
    position: relative;
    z-index: 2;
  }
  
  .timeline-marker.active {
    background: var(--primary);
    color: white;
  }
  
  .timeline-content {
    flex: 1;
    padding-left: 2rem;
    opacity: 0.3;
    transform: translateY(20px);
    transition: all 0.3s ease;
  }
  
  .timeline-content.active {
    opacity: 1;
    transform: translateY(0);
  }
  
  .timeline-container::after {
    content: '';
    position: absolute;
    left: 29px;
    top: 0;
    height: 100%;
    width: 2px;
    background: #ddd;
    z-index: 1;
  }
  </style>