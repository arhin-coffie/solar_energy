<template>
    <section class="testimonials">
      <h2>What Our Customers Say</h2>
      
      <div class="testimonial-grid">
        <div v-for="(testimonial, index) in testimonials" :key="index" class="testimonial-card">
          <img :src="testimonial.photo" :alt="testimonial.name">
          <div class="content">
            <div class="stars">
              <i v-for="n in 5" :key="n" class="fas fa-star"></i>
            </div>
            <p>"{{ testimonial.text }}"</p>
            <h4>{{ testimonial.name }}</h4>
            <span>{{ testimonial.location }}</span>
          </div>
        </div>
      </div>
    </section>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  const testimonials = ref([
    {
      name: "Sarah Johnson",
      location: "Austin, TX",
      text: "Our energy bills dropped by 80% in the first month. The installation was quick and professional!",
      photo: "https://randomuser.me/api/portraits/women/85.jpg"
    },
    // Add more testimonials
  ]);
  </script>
  
  <style scoped>
  .testimonials {
    padding: 4rem 2rem;
    background: white;
  }
  
  .testimonial-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2rem;
    max-width: 1200px;
    margin: 0 auto;
  }
  
  .testimonial-card {
    border-radius: 15px;
    overflow: hidden;
    box-shadow: 0 8px 30px rgba(0,0,0,0.1);
    transition: transform 0.3s ease;
  }
  
  .testimonial-card:hover {
    transform: translateY(-5px);
  }
  
  .testimonial-card img {
    width: 100%;
    height: 250px;
    object-fit: cover;
  }
  
  .content {
    padding: 2rem;
  }
  
  .stars {
    color: var(--primary);
    margin-bottom: 1rem;
  }
  
  .stars i {
    margin-right: 0.2rem;
  }
  </style>