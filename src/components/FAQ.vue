<template>
    <section class="faq">
      <h2>Frequently Asked Questions</h2>
      
      <div class="faq-list">
        <div v-for="(item, index) in faqs" :key="index" class="faq-item">
          <div class="question" @click="toggleFAQ(index)">
            <h3>{{ item.question }}</h3>
            <i :class="['fas', activeIndex === index ? 'fa-minus' : 'fa-plus']"></i>
          </div>
          <transition name="slide">
            <div v-show="activeIndex === index" class="answer">
              <p>{{ item.answer }}</p>
            </div>
          </transition>
        </div>
      </div>
    </section>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  
  const activeIndex = ref(null);
  const faqs = ref([
    {
      question: "How long does installation take?",
      answer: "Most residential installations are completed within 1-3 days..."
    },
    // Add more FAQs...
  ]);
  
  const toggleFAQ = (index) => {
    activeIndex.value = activeIndex.value === index ? null : index;
  };
  </script>
  
  <style scoped>
  .faq {
    padding: 4rem 2rem;
    background: white;
  }
  
  .faq-list {
    max-width: 800px;
    margin: 0 auto;
  }
  
  .faq-item {
    border-bottom: 1px solid #eee;
    margin-bottom: 1rem;
  }
  
  .question {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1.5rem 0;
    cursor: pointer;
  }
  
  .question h3 {
    font-weight: 500;
  }
  
  .answer {
    padding-bottom: 1.5rem;
  }
  
  .slide-enter-active,
  .slide-leave-active {
    transition: all 0.3s ease;
    max-height: 500px;
  }
  
  .slide-enter-from,
  .slide-leave-to {
    opacity: 0;
    max-height: 0;
  }
  </style>